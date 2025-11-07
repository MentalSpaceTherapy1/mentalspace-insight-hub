import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Helper function to convert relative image paths to absolute URLs and add inline styling
const absolutizeImageSrc = (html: string): string => {
  // Replace relative src attributes with absolute URLs
  let processed = html.replace(
    /src=["'](?!https?:\/\/)([^"']+)["']/gi,
    (match, path) => {
      // Remove leading ./ or / from path
      const cleanPath = path.replace(/^\.?\//, '');
      return `src="https://chctherapy.com/${cleanPath}"`;
    }
  );
  
  // Ensure all img tags have proper inline styling for email compatibility
  processed = processed.replace(
    /<img([^>]*?)>/gi,
    (match, attributes) => {
      // Only add style if it doesn't already exist
      if (!attributes.includes('style=')) {
        return `<img${attributes} style="max-width: 100%; height: auto; display: block;">`;
      }
      return match;
    }
  );
  
  return processed;
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { newsletterId } = await req.json();

    if (!newsletterId) {
      throw new Error('Newsletter ID is required');
    }

    console.log(`Sending newsletter ${newsletterId} to subscribers...`);

    // Fetch newsletter
    const { data: newsletter, error: newsletterError } = await supabase
      .from('newsletters')
      .select('*')
      .eq('id', newsletterId)
      .single();

    if (newsletterError || !newsletter) {
      throw new Error('Newsletter not found');
    }

    // Fetch active subscribers
    const { data: subscribers, error: subscribersError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('is_active', true);

    if (subscribersError) {
      throw subscribersError;
    }

    if (!subscribers || subscribers.length === 0) {
      console.log('No active subscribers found');
      return new Response(
        JSON.stringify({ message: 'No active subscribers', sent: 0 }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    console.log(`Found ${subscribers.length} active subscribers`);

    const trackingBaseUrl = `${supabaseUrl}/functions/v1/track-newsletter-event`;
    const newsletterUrl = `https://chctherapy.com/staff-newsletter`;

    let sentCount = 0;
    let failedCount = 0;

    // Send emails in batches
    for (const subscriber of subscribers) {
      try {
        const trackingId = crypto.randomUUID();
        
        // Create email log entry
        const { data: logEntry, error: logError } = await supabase
          .from('newsletter_email_logs')
          .insert({
            newsletter_id: newsletterId,
            subscriber_id: subscriber.id,
            email: subscriber.email,
            status: 'pending',
          })
          .select()
          .single();

        if (logError) {
          console.error(`Error creating log entry for ${subscriber.email}:`, logError);
          continue;
        }

        // Process newsletter content to ensure all images have absolute URLs
        const processedContent = absolutizeImageSrc(newsletter.content);

        // Create HTML email content with tracking
        const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: white; padding: 30px; border: 1px solid #e0e0e0; }
              .footer { background: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              h1 { margin: 0; font-size: 28px; }
              h2 { color: #667eea; margin-top: 25px; }
              .category { display: inline-block; background: #667eea; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; margin-bottom: 15px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>CHC Staff Newsletter</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">Connecting Health Care Team Update</p>
            </div>
            <div class="content">
              <span class="category">${newsletter.category || 'Newsletter'}</span>
              <h2>${newsletter.title}</h2>
              ${newsletter.excerpt ? `<p style="font-size: 16px; color: #666;"><em>${newsletter.excerpt}</em></p>` : ''}
              <div style="margin: 20px 0;">
                ${processedContent}
              </div>
              <div style="text-align: center; margin-top: 30px;">
                <a href="${newsletterUrl}?track=${logEntry.id}" class="button">Read Full Newsletter</a>
              </div>
            </div>
            <div class="footer">
              <p>This newsletter was sent to ${subscriber.email}</p>
              <p>© ${new Date().getFullYear()} Connecting Health Care. All rights reserved.</p>
              <p style="margin-top: 10px;">
                <a href="${supabaseUrl}/functions/v1/unsubscribe-newsletter?email=${encodeURIComponent(subscriber.email)}" style="color: #666;">Unsubscribe</a>
              </p>
            </div>
            <img src="${trackingBaseUrl}?logId=${logEntry.id}&event=open" width="1" height="1" alt="" />
          </body>
          </html>
        `;

        // Send email via Resend
        const emailResponse = await resend.emails.send({
          from: "CHC Staff Newsletter <support@chctherapy.com>",
          to: [subscriber.email],
          subject: `${newsletter.category || 'Newsletter'}: ${newsletter.title}`,
          html: htmlContent,
        });

        console.log(`Email sent to ${subscriber.email}:`, emailResponse);

        // Update log entry with success
        await supabase
          .from('newsletter_email_logs')
          .update({
            status: 'sent',
            sent_at: new Date().toISOString(),
            resend_message_id: emailResponse.id || null,
          })
          .eq('id', logEntry.id);

        sentCount++;
      } catch (emailError: any) {
        console.error(`Failed to send email to ${subscriber.email}:`, emailError);
        failedCount++;

        // Update log entry with failure
        await supabase
          .from('newsletter_email_logs')
          .update({
            status: 'failed',
            error_message: emailError.message,
          })
          .eq('newsletter_id', newsletterId)
          .eq('email', subscriber.email);
      }
    }

    console.log(`Newsletter delivery complete: ${sentCount} sent, ${failedCount} failed`);

    return new Response(
      JSON.stringify({
        message: 'Newsletter emails sent',
        sent: sentCount,
        failed: failedCount,
        total: subscribers.length,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error('Error in send-newsletter-emails:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
