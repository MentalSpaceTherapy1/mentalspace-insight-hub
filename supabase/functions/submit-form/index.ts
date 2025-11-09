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

    // Get client IP first for all checks
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIP = req.headers.get('x-real-ip');
    let clientIP = 'unknown';
    if (forwardedFor) {
      clientIP = forwardedFor.split(',')[0].trim();
    } else if (realIP) {
      clientIP = realIP.trim();
    }
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // Check IP blacklist first
    const { data: blacklistedIP } = await supabase
      .from('ip_blacklist')
      .select('id, reason')
      .eq('ip_address', clientIP)
      .eq('is_active', true)
      .maybeSingle();

    if (blacklistedIP) {
      console.log('Blocked: IP is blacklisted', clientIP);
      
      await supabase
        .from('form_submissions')
        .insert({
          form_type: formType,
          form_data: formData,
          ip_address: clientIP,
          user_agent: userAgent,
          is_blocked: true,
          blocked_reason: 'ip_blacklisted',
          spam_score: 10,
        });
      
      return new Response(JSON.stringify({ success: false, error: 'Access denied' }), {
        status: 403,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Bot detection: Check for any honeypot field
    if ((formData.website && formData.website.trim() !== '') || 
        (formData.company && formData.company.trim() !== '') ||
        (formData.position && formData.position.trim() !== '')) {
      console.log('Bot detected: honeypot field filled');
      
      // Log to security audit log
      const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                       req.headers.get('x-real-ip')?.trim() || 'unknown';
      const userAgent = req.headers.get('user-agent') || 'unknown';
      
      // Store blocked submission
      await supabase
        .from('form_submissions')
        .insert({
          form_type: formType,
          form_data: formData,
          ip_address: clientIP,
          user_agent: userAgent,
          is_blocked: true,
          blocked_reason: 'honeypot',
          spam_score: 10,
        });
      
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

    // Bot detection: Check form fill time (must be at least 5 seconds)
    if (formData._formLoadTime && formData._submitTime) {
      const fillTime = formData._submitTime - formData._formLoadTime;
      if (fillTime < 5000) {
        console.log('Bot detected: form filled too quickly', fillTime);
        
        const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                         req.headers.get('x-real-ip')?.trim() || 'unknown';
        const userAgent = req.headers.get('user-agent') || 'unknown';
        
        // Store blocked submission
        await supabase
          .from('form_submissions')
          .insert({
            form_type: formType,
            form_data: formData,
            ip_address: clientIP,
            user_agent: userAgent,
            is_blocked: true,
            blocked_reason: 'timing',
            spam_score: 10,
          });
        
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

    // Bot detection: Check interaction count
    if (formData._interactionCount && formData._interactionCount < 3) {
      console.log('Bot detected: insufficient interactions');
      
      const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                       req.headers.get('x-real-ip')?.trim() || 'unknown';
      const userAgent = req.headers.get('user-agent') || 'unknown';
      
      await supabase
        .from('form_submissions')
        .insert({
          form_type: formType,
          form_data: formData,
          ip_address: clientIP,
          user_agent: userAgent,
          is_blocked: true,
          blocked_reason: 'insufficient_interaction',
          spam_score: 8,
        });
      
      return new Response(JSON.stringify({ success: false, error: 'Invalid submission' }), {
        status: 400,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Advanced Bot Detection: Validate Enhanced JavaScript Challenge
    if (formData._enhancedChallenge) {
      const challenge = formData._enhancedChallenge;
      const ageMs = Date.now() - challenge.timestamp;
      
      // Check if challenge is too old (more than 5 minutes)
      if (ageMs > 300000) {
        console.log('Enhanced challenge expired');
        await supabase
          .from('form_submissions')
          .insert({
            form_type: formType,
            form_data: formData,
            ip_address: clientIP,
            user_agent: userAgent,
            is_blocked: true,
            blocked_reason: 'challenge_expired',
            spam_score: 7,
          });
        
        return new Response(JSON.stringify({ success: false, error: 'Session expired' }), {
          status: 400,
          headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        });
      }
    }

    // Advanced Bot Detection: Validate Proof of Work
    if (formData._proofOfWork) {
      const { challenge, difficulty, solution } = formData._proofOfWork;
      
      // Verify the proof of work
      try {
        const attempt = `${challenge}:${solution}`;
        const encoder = new TextEncoder();
        const data = encoder.encode(attempt);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        const target = '0'.repeat(difficulty);
        
        if (!hashHex.startsWith(target)) {
          console.log('Invalid proof of work');
          await supabase
            .from('form_submissions')
            .insert({
              form_type: formType,
              form_data: formData,
              ip_address: clientIP,
              user_agent: userAgent,
              is_blocked: true,
              blocked_reason: 'invalid_pow',
              spam_score: 9,
            });
          
          return new Response(JSON.stringify({ success: false, error: 'Invalid submission' }), {
            status: 400,
            headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
          });
        }
      } catch (err) {
        console.log('Proof of work validation failed:', err);
        return new Response(JSON.stringify({ success: false, error: 'Invalid submission' }), {
          status: 400,
          headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        });
      }
    }

    // Advanced Bot Detection: Validate CSRF Token
    if (formData._csrfToken) {
      const csrfToken = formData._csrfToken;
      const tokenAge = Date.now() - csrfToken.timestamp;
      
      // Check if token is too old (more than 1 hour)
      if (tokenAge > 3600000) {
        console.log('CSRF token expired');
        await supabase
          .from('form_submissions')
          .insert({
            form_type: formType,
            form_data: formData,
            ip_address: clientIP,
            user_agent: userAgent,
            is_blocked: true,
            blocked_reason: 'csrf_expired',
            spam_score: 7,
          });
        
        return new Response(JSON.stringify({ success: false, error: 'Session expired' }), {
          status: 400,
          headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        });
      }
    }

    // Content-based spam detection
    const messageContent = (formData.message || formData.comments || formData.details || formData.description || '').toLowerCase();
    const nameContent = (formData.name || '').toLowerCase();
    const emailContent = (formData.email || '').toLowerCase();
    
    // Enhanced spam indicators
    const spamPatterns = {
      // Sales/marketing keywords
      sales: /\b(seo services?|digital marketing|web design services?|link building|ranking|outreach|partnership opportunity|collaboration opportunity|business proposal|increase (sales|traffic|revenue)|guest post|backlink|promote your|advertise|marketing agency|grow your business)\b/i,
      // Generic salesy phrases
      generic: /\b(hope this (email|message) finds you|wanted to reach out|i came across your|offering (our|my) services?|help (you|your business)|interested in working|looking to partner|would like to discuss)\b/i,
      // URLs (legitimate users rarely include URLs in contact forms)
      urls: /(https?:\/\/|www\.)[^\s]+/gi,
      // Email addresses in message body (often spam)
      emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
      // Excessive caps or exclamation
      excessive: /([A-Z\s]{20,}|!{3,})/,
      // Common spam phrases
      spam: /\b(click here|limited time|act now|special offer|guaranteed|100%|free quote|no obligation|risk free|call now|order now|buy now|get started today)\b/i,
      // Crypto/investment spam
      crypto: /\b(bitcoin|cryptocurrency|forex|trading|investment|profit|roi|passive income)\b/i,
      // Generic spam names
      spamNames: /\b(john|mike|david|james|robert|mary|jennifer)\s+(smith|johnson|williams|brown|jones|davis)\b/i,
      // Disposable email domains
      disposable: /@(tempmail|guerrillamail|mailinator|10minutemail|throwaway|trashmail|yopmail|fakeinbox)\./i,
    };

    let spamScore = 0;
    const spamReasons: string[] = [];

    // Check each pattern
    if (spamPatterns.sales.test(messageContent)) {
      spamScore += 4;
      spamReasons.push('sales_keywords');
    }
    if (spamPatterns.generic.test(messageContent)) {
      spamScore += 3;
      spamReasons.push('generic_sales_language');
    }
    if (spamPatterns.urls.test(messageContent)) {
      spamScore += 5;
      spamReasons.push('contains_urls');
    }
    if (spamPatterns.emails.test(messageContent)) {
      spamScore += 3;
      spamReasons.push('contains_email');
    }
    if (spamPatterns.excessive.test(messageContent)) {
      spamScore += 2;
      spamReasons.push('excessive_formatting');
    }
    if (spamPatterns.spam.test(messageContent)) {
      spamScore += 4;
      spamReasons.push('spam_phrases');
    }
    if (spamPatterns.crypto.test(messageContent)) {
      spamScore += 5;
      spamReasons.push('crypto_investment');
    }
    if (spamPatterns.spamNames.test(nameContent)) {
      spamScore += 2;
      spamReasons.push('generic_name');
    }
    if (spamPatterns.disposable.test(emailContent)) {
      spamScore += 6;
      spamReasons.push('disposable_email');
    }

    // Block if spam score is too high (lowered threshold)
    if (spamScore >= 3) {
      console.log('Content spam detected. Score:', spamScore, 'Reasons:', spamReasons);
      
      // Auto-blacklist IPs with high spam scores
      if (spamScore >= 8) {
        await supabase
          .from('ip_blacklist')
          .upsert({
            ip_address: clientIP,
            reason: `Auto-blocked: High spam score (${spamScore}) - ${spamReasons.join(', ')}`,
            is_active: true,
            blocked_until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
          }, {
            onConflict: 'ip_address',
          });
        console.log('IP auto-blacklisted:', clientIP);
      }
      
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
    delete cleanFormData._interactionCount;
    delete cleanFormData._jsChallenge;
    delete cleanFormData._enhancedChallenge;
    delete cleanFormData._proofOfWork;
    delete cleanFormData._csrfToken;
    delete cleanFormData.website;
    delete cleanFormData.company;
    delete cleanFormData.position;

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

    console.log(`Processing ${formType} form submission from IP: ${clientIP}`);

    // Stricter rate limiting: Check recent submissions from this IP
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { data: recentSubmissions, error: rateLimitError } = await supabase
      .from('form_submissions')
      .select('id')
      .eq('ip_address', clientIP)
      .eq('form_type', formType)
      .gte('created_at', tenMinutesAgo);

    if (!rateLimitError && recentSubmissions && recentSubmissions.length >= 2) {
      console.log('Rate limit exceeded for IP:', clientIP);
      
      // Auto-blacklist IPs that hit rate limit multiple times
      if (recentSubmissions.length >= 5) {
        await supabase
          .from('ip_blacklist')
          .upsert({
            ip_address: clientIP,
            reason: `Auto-blocked: Excessive rate limit violations (${recentSubmissions.length} attempts)`,
            is_active: true,
            blocked_until: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
          }, {
            onConflict: 'ip_address',
          });
        console.log('IP auto-blacklisted for rate limit abuse:', clientIP);
      }
      
      // Store blocked submission
      await supabase
        .from('form_submissions')
        .insert({
          form_type: formType,
          form_data: cleanFormData,
          ip_address: clientIP,
          user_agent: userAgent,
          is_blocked: true,
          blocked_reason: 'rate_limit',
          spam_score: 5,
        });
      
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