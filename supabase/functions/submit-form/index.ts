import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const ALLOWED_ORIGINS = new Set([
  'http://localhost:5173',
  'http://localhost:8080',
  'https://coping-healing-therapy.lovable.app',
  'https://chctherapy.com',
  'https://www.chctherapy.com',
]);

// Allow dynamic preview domains used by Lovable while keeping production strict
const isAllowedOrigin = (origin: string | null) => {
  if (!origin) return false;
  try {
    const url = new URL(origin);
    const hostname = url.hostname;
    return (
      ALLOWED_ORIGINS.has(origin) ||
      hostname.endsWith('.lovableproject.com') ||
      hostname.endsWith('.lovable.app')
    );
  } catch {
    return false;
  }
};

const getCorsHeaders = (origin: string | null) => ({
  'Access-Control-Allow-Origin': origin && isAllowedOrigin(origin) ? origin : 'https://coping-healing-therapy.lovable.app',
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
  if (!isAllowedOrigin(origin)) {
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

    // Bot detection: Check for honeypot field
    if (formData.website && formData.website.trim() !== '') {
      console.log('Bot detected: honeypot field filled');
      
      // Log to security audit log
      const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                       req.headers.get('x-real-ip')?.trim() || 'unknown';
      const userAgent = req.headers.get('user-agent') || 'unknown';
      
      await supabase
        .from('security_audit_log')
        .insert({
          event_type: 'blocked_honeypot',
          table_name: 'form_submissions',
          ip_address: clientIP,
          details: {
            form_type: formType,
            ip_address: clientIP,
            user_agent: userAgent,
            timestamp: new Date().toISOString(),
            severity: 'HIGH'
          }
        });
      
      return new Response(JSON.stringify({ success: false, error: 'Invalid submission' }), {
        status: 400,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Bot detection: Check form fill time (must be at least 3 seconds)
    if (formData._formLoadTime && formData._submitTime) {
      const fillTime = formData._submitTime - formData._formLoadTime;
      if (fillTime < 3000) {
        console.log('Bot detected: form filled too quickly', fillTime);
        
        const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                         req.headers.get('x-real-ip')?.trim() || 'unknown';
        const userAgent = req.headers.get('user-agent') || 'unknown';
        
        await supabase
          .from('security_audit_log')
          .insert({
            event_type: 'blocked_timing',
            table_name: 'form_submissions',
            ip_address: clientIP,
            details: {
              form_type: formType,
              fill_time_ms: fillTime,
              ip_address: clientIP,
              user_agent: userAgent,
              timestamp: new Date().toISOString(),
              severity: 'HIGH'
            }
          });
        
        return new Response(JSON.stringify({ success: false, error: 'Invalid submission' }), {
          status: 400,
          headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        });
      }
    }

    // Content-based spam detection
    const messageContent = (formData.message || formData.details || formData.description || '').toLowerCase();
    
    // Spam indicators
    const spamPatterns = {
      // Sales/marketing keywords
      sales: /\b(seo services?|digital marketing|web design services?|link building|ranking|outreach|partnership|collaboration|business proposal|increase (sales|traffic|revenue))\b/i,
      // Generic salesy phrases
      generic: /\b(hope this (email|message) finds you|wanted to reach out|i came across your|offering (our|my) services?|help (you|your business))\b/i,
      // URLs (legitimate users rarely include URLs in contact forms)
      urls: /(https?:\/\/|www\.)[^\s]+/gi,
      // Email addresses in message body (often spam)
      emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
      // Excessive caps or exclamation
      excessive: /([A-Z\s]{20,}|!{3,})/,
      // Common spam phrases
      spam: /\b(click here|limited time|act now|special offer|guaranteed|100%|free quote|no obligation)\b/i
    };

    let spamScore = 0;
    const spamReasons: string[] = [];

    // Check each pattern
    if (spamPatterns.sales.test(messageContent)) {
      spamScore += 3;
      spamReasons.push('sales_keywords');
    }
    if (spamPatterns.generic.test(messageContent)) {
      spamScore += 2;
      spamReasons.push('generic_sales_language');
    }
    if (spamPatterns.urls.test(messageContent)) {
      spamScore += 4;
      spamReasons.push('contains_urls');
    }
    if (spamPatterns.emails.test(messageContent)) {
      spamScore += 2;
      spamReasons.push('contains_email');
    }
    if (spamPatterns.excessive.test(messageContent)) {
      spamScore += 1;
      spamReasons.push('excessive_formatting');
    }
    if (spamPatterns.spam.test(messageContent)) {
      spamScore += 3;
      spamReasons.push('spam_phrases');
    }

    // Block if spam score is too high
    if (spamScore >= 4) {
      console.log('Content spam detected. Score:', spamScore, 'Reasons:', spamReasons);
      
      const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                       req.headers.get('x-real-ip')?.trim() || 'unknown';
      const userAgent = req.headers.get('user-agent') || 'unknown';
      
      // Store blocked submission for analysis
      await supabase
        .from('form_submissions')
        .insert({
          form_type: formType,
          form_data: formData,
          ip_address: clientIP,
          user_agent: userAgent,
          is_blocked: true,
          blocked_reason: 'content_spam',
          spam_score: spamScore,
        });
      
      await supabase
        .from('security_audit_log')
        .insert({
          event_type: 'blocked_content_spam',
          table_name: 'form_submissions',
          ip_address: clientIP,
          details: {
            form_type: formType,
            spam_score: spamScore,
            spam_reasons: spamReasons,
            ip_address: clientIP,
            user_agent: userAgent,
            timestamp: new Date().toISOString(),
            severity: 'MEDIUM'
          }
        });
      
      return new Response(JSON.stringify({ success: false, error: 'Invalid submission' }), {
        status: 400,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Remove anti-bot metadata before storing
    const cleanFormData = { ...formData };
    delete cleanFormData._formLoadTime;
    delete cleanFormData._submitTime;
    delete cleanFormData.website;

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

    console.log(`Processing ${formType} form submission from IP: ${clientIP}`);

    // Rate limiting: Check recent submissions from this IP
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from('form_submissions')
      .select('id')
      .eq('ip_address', clientIP)
      .eq('form_type', formType)
      .gte('created_at', fiveMinutesAgo);

    if (!rateLimitError && recentSubmissions && recentSubmissions.length >= 3) {
      console.log('Rate limit exceeded for IP:', clientIP);
      
      // Log rate limit block
      await supabase
        .from('security_audit_log')
        .insert({
          event_type: 'blocked_rate_limit',
          table_name: 'form_submissions',
          ip_address: clientIP,
          details: {
            form_type: formType,
            submission_count: recentSubmissions.length,
            time_window: '5 minutes',
            ip_address: clientIP,
            user_agent: userAgent,
            timestamp: new Date().toISOString(),
            severity: 'MEDIUM'
          }
        });
      
      return new Response(JSON.stringify({ success: false, error: 'Too many submissions. Please try again later.' }), {
        status: 429,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Extract user_id from Authorization header if present
    let userId: string | null = null;
    const authHeader = req.headers.get('authorization');
    if (authHeader?.startsWith('Bearer ')) {
      try {
        // Create a client for user authentication check
        const userSupabase = createClient(
          Deno.env.get('SUPABASE_URL') ?? '',
          Deno.env.get('SUPABASE_ANON_KEY') ?? '',
          {
            global: {
              headers: {
                authorization: authHeader,
              },
            },
          }
        );
        
        const { data: { user } } = await userSupabase.auth.getUser();
        if (user) {
          userId = user.id;
          console.log('Authenticated user found:', userId);
        }
      } catch (authError) {
        console.log('No valid authentication found, proceeding as anonymous');
      }
    }

    // Insert form submission into database with clean data
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .insert({
        form_type: formType,
        form_data: cleanFormData,
        ip_address: clientIP,
        user_agent: userAgent,
        user_id: userId, // Track authenticated user or null for anonymous
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    // Handle assessment_contact form type - also insert into assessment_contacts table
    if (formType === 'assessment_contact') {
      try {
        const { error: contactError } = await supabase
          .from('assessment_contacts')
          .insert({
            contact_data: cleanFormData,
            user_id: userId, // Track authenticated user or null for anonymous
            assessment_session_id: cleanFormData.assessmentSessionId || null,
          });

        if (contactError) {
          console.error('Assessment contact insert error:', contactError);
          // This is non-fatal, form submission already succeeded
        } else {
          console.log('Assessment contact saved successfully');
        }
      } catch (contactErr) {
        console.error('Assessment contact processing error:', contactErr);
        // Non-fatal
      }
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

    // Send email notification for ALL form submissions
    try {
      await supabase.functions.invoke('send-notification-email', {
        body: { 
          type: formType, 
          data: cleanFormData, 
          submissionId: submission.id 
        },
      });
      console.log(`Notification email sent for ${formType} form`);
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Non-fatal - don't fail the form submission if email fails
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