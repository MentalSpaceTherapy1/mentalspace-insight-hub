import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormSubmission {
  formType: 'therapist_matching' | 'contact_us' | 'career_application' | 'assessment_contact';
  formData: Record<string, any>;
  timestamp?: number;
  honeypot?: string; // Security field - should be empty
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

    const { formType, formData, timestamp, honeypot }: FormSubmission = await req.json();
    
    // Security validations
    
    // 1. Honeypot field check - if filled, likely a bot
    if (honeypot && honeypot.trim() !== '') {
      console.log('Honeypot field detected - likely bot submission');
      return new Response(
        JSON.stringify({ success: true, message: 'Form submitted successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }
    
    // 2. Timestamp validation - check for too fast submissions (< 2 seconds)
    if (timestamp) {
      const submissionTime = Date.now() - timestamp;
      if (submissionTime < 2000) { // Less than 2 seconds
        console.log('Submission too fast - likely bot:', submissionTime + 'ms');
        throw new Error('Please take your time filling out the form');
      }
    }
    
    // 3. Basic data validation
    if (!formType || !formData || typeof formData !== 'object') {
      throw new Error('Invalid form data');
    }
    
    // 4. Validate required fields based on form type
    const validateRequiredFields = (type: string, data: any) => {
      switch (type) {
        case 'contact_us':
          if (!data.name || !data.email) {
            throw new Error('Name and email are required');
          }
          break;
        case 'therapist_matching':
          if (!data.firstName || !data.lastName || !data.email) {
            throw new Error('First name, last name, and email are required');
          }
          break;
        case 'assessment_contact':
          if (!data.name || !data.email) {
            throw new Error('Name and email are required');
          }
          break;
      }
    };
    
    validateRequiredFields(formType, formData);
    
    // Get client IP and user agent for analytics - handle multiple IPs by taking the first one
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIP = req.headers.get('x-real-ip');
    let clientIP = 'unknown';
    
    if (forwardedFor) {
      // Take the first IP from comma-separated list
      clientIP = forwardedFor.split(',')[0].trim();
    } else if (realIP) {
      clientIP = realIP.trim();
    }
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
            submissionId: submission.id,
            internalKey: 'mental-space-internal-2024'
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