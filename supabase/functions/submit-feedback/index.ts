import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
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
    const { name, email, phone, rating, feedback, willingToReview } = await req.json();

    // Validation
    if (!rating || rating < 1 || rating > 5) {
      return new Response(
        JSON.stringify({ error: "Rating must be between 1 and 5" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get client IP
    const clientIP = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    // Save feedback to database
    const { data: feedbackData, error: feedbackError } = await supabase
      .from('client_feedback')
      .insert({
        client_name: name || null,
        client_email: email || null,
        client_phone: phone || null,
        rating: parseInt(rating),
        feedback_text: feedback || null,
        willing_to_review: willingToReview === true,
        ip_address: clientIP,
      })
      .select()
      .single();

    if (feedbackError) {
      console.error("Error saving feedback:", feedbackError);
      throw feedbackError;
    }

    console.log("Feedback saved successfully:", feedbackData.id);

    // Send notification email to admin
    try {
      await supabase.functions.invoke('send-notification-email', {
        body: {
          to: 'admin@chctherapy.com',
          subject: `New Client Feedback - ${rating} Stars`,
          html: `
            <h2>New Client Feedback Received</h2>
            <p><strong>Rating:</strong> ${rating}/5 ⭐</p>
            ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${feedback ? `<p><strong>Feedback:</strong> ${feedback}</p>` : ''}
            <p><strong>Willing to review on Google:</strong> ${willingToReview ? 'Yes' : 'No'}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `
        }
      });
    } catch (emailError) {
      console.error("Error sending notification email:", emailError);
      // Don't fail the request if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you for your feedback!",
        feedbackId: feedbackData.id
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("Error in submit-feedback function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to submit feedback" }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});