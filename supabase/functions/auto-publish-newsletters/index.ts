import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Checking for scheduled newsletters to publish...');

    // Find newsletters scheduled for publication
    const { data: scheduledNewsletters, error: fetchError } = await supabase
      .from('newsletters')
      .select('*')
      .eq('status', 'scheduled')
      .lte('scheduled_for', new Date().toISOString())
      .order('scheduled_for', { ascending: true });

    if (fetchError) {
      console.error('Error fetching scheduled newsletters:', fetchError);
      throw fetchError;
    }

    console.log(`Found ${scheduledNewsletters?.length || 0} newsletters to publish`);

    if (!scheduledNewsletters || scheduledNewsletters.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No newsletters to publish', count: 0 }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    const publishedNewsletters = [];

    for (const newsletter of scheduledNewsletters) {
      console.log(`Publishing newsletter: ${newsletter.title} (${newsletter.id})`);
      
      // Update newsletter status to published
      const { error: updateError } = await supabase
        .from('newsletters')
        .update({
          status: 'published',
          published_at: new Date().toISOString(),
        })
        .eq('id', newsletter.id);

      if (updateError) {
        console.error(`Error publishing newsletter ${newsletter.id}:`, updateError);
        continue;
      }

      // Initialize analytics for the newsletter
      const { error: analyticsError } = await supabase
        .from('newsletter_analytics')
        .insert({
          newsletter_id: newsletter.id,
          views: 0,
          unique_views: 0,
          total_engagement_time: 0,
          average_engagement_time: 0,
        });

      if (analyticsError) {
        console.error(`Error creating analytics for newsletter ${newsletter.id}:`, analyticsError);
      }

      // Trigger email delivery
      try {
        await supabase.functions.invoke('send-newsletter-emails', {
          body: { newsletterId: newsletter.id },
        });
        console.log(`Email delivery triggered for newsletter ${newsletter.id}`);
      } catch (emailError) {
        console.error(`Error triggering email delivery for ${newsletter.id}:`, emailError);
      }

      publishedNewsletters.push(newsletter);
    }

    console.log(`Successfully published ${publishedNewsletters.length} newsletters`);

    return new Response(
      JSON.stringify({
        message: 'Newsletters published successfully',
        count: publishedNewsletters.length,
        newsletters: publishedNewsletters.map(n => ({ id: n.id, title: n.title })),
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error: any) {
    console.error('Error in auto-publish-newsletters:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
