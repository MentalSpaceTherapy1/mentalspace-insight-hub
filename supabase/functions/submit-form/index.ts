import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";
import { ServerEncryption, CSRFProtection, RateLimiter, InputValidator } from '../_shared/security.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormSubmission {
  formType: 'therapist_matching' | 'contact_us' | 'career_application' | 'assessment_contact';
  formData: Record<string, any>;
  timestamp?: number;
  honeypot?: string; // Security field - should be empty
  csrfToken?: string; // CSRF protection token
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

    const { formType, formData, timestamp, honeypot, csrfToken }: FormSubmission = await req.json();
    
    // Enhanced Security validations
    
    // 1. Honeypot field check - if filled, likely a bot
    if (honeypot && honeypot.trim() !== '') {
      console.log('Honeypot field detected - likely bot submission');
      return new Response(
        JSON.stringify({ success: true, message: 'Form submitted successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }
    
    // 2. CSRF token validation (double-submit cookie)
    const cookieHeader = req.headers.get('cookie') || '';
    const cookieToken = cookieHeader
      .split(';')
      .map((s) => s.trim())
      .find((s) => s.startsWith('csrf_token='))
      ?.split('=')[1];

    if (!csrfToken || !cookieToken || !CSRFProtection.validateToken(csrfToken, cookieToken)) {
      console.log('CSRF validation failed');
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid CSRF token' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 403 }
      );
    }
    
    // 3. Timestamp validation - check for too fast submissions (< 3 seconds for enhanced security)
    if (timestamp) {
      const submissionTime = Date.now() - timestamp;
      if (submissionTime < 3000) { // Increased to 3 seconds
        console.log('Submission too fast - likely bot:', submissionTime + 'ms');
        throw new Error('Please take your time filling out the form');
      }
    }
    
    // 4. Basic data validation
    if (!formType || !formData || typeof formData !== 'object') {
      throw new Error('Invalid form data');
    }
    
    // 5. Get client IP for rate limiting
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIP = req.headers.get('x-real-ip');
    let clientIP = 'unknown';
    
    if (forwardedFor) {
      clientIP = forwardedFor.split(',')[0].trim();
    } else if (realIP) {
      clientIP = realIP.trim();
    }
    
    // 6. Check rate limits
    const rateLimitResult = await RateLimiter.checkFormSubmissionLimit(supabase, clientIP, formType);
    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for IP ${clientIP}, retry after ${rateLimitResult.retryAfter}s`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Too many submissions. Please try again later.',
          retryAfter: rateLimitResult.retryAfter 
        }),
        { 
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json',
            'Retry-After': rateLimitResult.retryAfter?.toString() || '3600'
          }, 
          status: 429 
        }
      );
    }
    
    // 7. Validate and sanitize required fields based on form type
    const validateAndSanitizeFields = (type: string, data: any) => {
      // Sanitize all string fields
      const sanitizedData = { ...data };
      Object.keys(sanitizedData).forEach(key => {
        if (typeof sanitizedData[key] === 'string') {
          sanitizedData[key] = InputValidator.sanitizeString(sanitizedData[key]);
          
          // Check for malicious content
          if (InputValidator.containsMaliciousContent(sanitizedData[key])) {
            throw new Error('Invalid content detected in form submission');
          }
        }
      });
      
      // Validate required fields and formats
      switch (type) {
        case 'contact_us':
          if (!sanitizedData.name || !sanitizedData.email) {
            throw new Error('Name and email are required');
          }
          if (!InputValidator.isValidEmail(sanitizedData.email)) {
            throw new Error('Invalid email format');
          }
          break;
        case 'therapist_matching':
          if (!sanitizedData.firstName || !sanitizedData.lastName || !sanitizedData.email) {
            throw new Error('First name, last name, and email are required');
          }
          if (!InputValidator.isValidEmail(sanitizedData.email)) {
            throw new Error('Invalid email format');
          }
          if (sanitizedData.phone && !InputValidator.isValidPhone(sanitizedData.phone)) {
            throw new Error('Invalid phone format');
          }
          break;
        case 'assessment_contact':
          if (!sanitizedData.name || !sanitizedData.email) {
            throw new Error('Name and email are required');
          }
          if (!InputValidator.isValidEmail(sanitizedData.email)) {
            throw new Error('Invalid email format');
          }
          break;
      }
      
      return sanitizedData;
    };
    
    const sanitizedFormData = validateAndSanitizeFields(formType, formData);
    const userAgent = req.headers.get('user-agent') || 'unknown';
    
    // 8. Encrypt sensitive fields before database storage
    const encryptedFormData = await ServerEncryption.encryptSensitiveFields(sanitizedFormData);

    console.log(`Processing ${formType} form submission with enhanced security`);

    // Insert form submission into database with encrypted sensitive data
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .insert({
        form_type: formType,
        form_data: encryptedFormData,
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
            data: sanitizedFormData, // Use sanitized but unencrypted data for email
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