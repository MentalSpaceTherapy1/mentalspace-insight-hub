import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const ALLOWED_ORIGINS = new Set([
  'http://localhost:5173',
  'http://localhost:8080',
  'https://coping-healing-therapy.lovable.app',
]);

const getCorsHeaders = (origin: string | null) => ({
  'Access-Control-Allow-Origin': origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://coping-healing-therapy.lovable.app',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
});

interface FormSubmission {
  formType: 'therapist_matching' | 'contact_us' | 'career_application' | 'assessment_contact';
  formData: Record<string, any>;
}

// Constant-time string compare
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function parseCookies(cookieHeader: string | null): Record<string, string> {
  const cookies: Record<string, string> = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(';').forEach(part => {
    const [k, ...v] = part.trim().split('=');
    cookies[k] = decodeURIComponent(v.join('='));
  });
  return cookies;
}

serve(async (req) => {
  const origin = req.headers.get('origin');

  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: getCorsHeaders(origin) });
  }

  // Enforce allowed origins for POST
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    return new Response(JSON.stringify({ success: false, error: 'Origin not allowed' }), {
      status: 403,
      headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const body = await req.json();
    const { formType, formData, csrfToken }: FormSubmission & { csrfToken?: string } = body;

    // Basic CSRF mitigation via Origin check done above. If you later serve from multiple domains, add them to ALLOWED_ORIGINS.
    // Optional double-submit validation when cookie is present (may be absent due to cross-origin call).
    const cookies = parseCookies(req.headers.get('cookie'));
    const cookieToken = cookies['csrf_token'];
    if (cookieToken && csrfToken && !safeEqual(cookieToken, csrfToken)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid CSRF token' }), {
        status: 403,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Get client IP and user agent
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIP = req.headers.get('x-real-ip');
    let clientIP = 'unknown';
    if (forwardedFor) {
      clientIP = forwardedFor.split(',')[0].trim();
    } else if (realIP) {
      clientIP = realIP.trim();
    }
    const userAgent = req.headers.get('user-agent') || 'unknown';

    console.log(`Processing ${formType} form submission`);

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
        event_data: { form_type: formType, submission_id: submission.id },
        ip_address: clientIP,
        user_agent: userAgent,
        page_url: req.headers.get('referer') || 'unknown',
      });

    // Send email notification based on form type
    try {
      if (formType === 'contact_us' || formType === 'therapist_matching') {
        await supabase.functions.invoke('send-notification-email', {
          body: { type: formType, data: formData, submissionId: submission.id },
        });
      }
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Non-fatal
    }

    console.log('Form submission successful:', submission.id);

    return new Response(
      JSON.stringify({ success: true, submissionId: submission.id, message: 'Form submitted successfully' }),
      { headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (error: any) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to submit form' }),
      { headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});