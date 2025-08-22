import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormSubmission {
  formType: 'therapist_matching' | 'contact_us' | 'career_application' | 'assessment_contact';
  formData: Record<string, any>;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { formType, formData }: FormSubmission = await req.json();
    
    // Get client IP and user agent for analytics
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    console.log(`Processing ${formType} form submission:`, formData);

    // Insert form submission into database
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .insert({
        form_type: formType,
        form_data: formData,
        ip_address: clientIP,
        user_agent: userAgent,
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    // Track analytics event
    await supabase
      .from('analytics_events')
      .insert({
        event_type: 'form_submission',
        event_data: { 
          form_type: formType,
          submission_id: submission.id
        },
        ip_address: clientIP,
        user_agent: userAgent,
        page_url: req.headers.get('referer') || 'unknown'
      });

    // Send email notification based on form type
    let emailResponse;
    try {
      if (formType === 'contact_us' || formType === 'therapist_matching') {
        emailResponse = await supabase.functions.invoke('send-notification-email', {
          body: {
            type: formType,
            data: formData,
            submissionId: submission.id
          }
        });
      }
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Don't fail the form submission if email fails
    }

    console.log('Form submission successful:', submission.id);

    return new Response(
      JSON.stringify({
        success: true,
        submissionId: submission.id,
        message: 'Form submitted successfully'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error: any) {
    console.error('Form submission error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to submit form'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});