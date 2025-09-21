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

interface AssessmentSubmission {
  sessionId: string;
  assessmentType: string;
  answers: Record<string, any>;
  score?: number;
  severity?: string;
  recommendations?: string[];
  additionalInfo?: Record<string, any>;
  csrfToken?: string;
  // Encrypted data fields
  encryptedAnswers?: string;
  answersKey?: string;
  answersIv?: string;
  encryptedAdditionalInfo?: string;
  additionalInfoKey?: string;
  additionalInfoIv?: string;
  dataHash?: string;
  isEncrypted?: boolean;
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
  
  // Get client IP for security logging
  const forwardedFor = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  let clientIP = 'unknown';
  if (forwardedFor) {
    clientIP = forwardedFor.split(',')[0].trim();
  } else if (realIP) {
    clientIP = realIP.trim();
  }

  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: getCorsHeaders(origin) });
  }

  // Enhanced origin validation with logging
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    console.error('Blocked request from disallowed origin:', origin, 'IP:', clientIP);
    
    // Log security violation
    try {
      const supabase = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
      );
      
      await supabase.from('security_audit_log').insert({
        event_type: 'blocked_origin_violation',
        table_name: 'save_assessment_function',
        ip_address: clientIP,
        details: {
          origin: origin,
          user_agent: req.headers.get('user-agent'),
          timestamp: new Date().toISOString(),
          severity: 'HIGH'
        }
      });
    } catch (logError) {
      console.error('Failed to log security violation:', logError);
    }
    
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

    // Enhanced request size validation
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 1024 * 1024) { // 1MB limit
      console.error('Request too large:', contentLength, 'bytes from IP:', clientIP);
      return new Response(JSON.stringify({ success: false, error: 'Request too large' }), {
        status: 413,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    let assessmentData: AssessmentSubmission;
    try {
      assessmentData = await req.json();
    } catch (parseError) {
      console.error('Invalid JSON in request from IP:', clientIP);
      return new Response(JSON.stringify({ success: false, error: 'Invalid request format' }), {
        status: 400,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Enhanced input validation
    if (!assessmentData.sessionId || !assessmentData.assessmentType) {
      console.error('Missing required fields from IP:', clientIP);
      return new Response(JSON.stringify({ success: false, error: 'Missing required fields' }), {
        status: 400,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Validate session ID format (should be UUID-like)
    if (!/^[a-zA-Z0-9-_]{8,50}$/.test(assessmentData.sessionId)) {
      console.error('Invalid session ID format from IP:', clientIP);
      return new Response(JSON.stringify({ success: false, error: 'Invalid session format' }), {
        status: 400,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Optional double-submit token validation (cookie may be absent due to cross-origin)
    const cookies = parseCookies(req.headers.get('cookie'));
    if (cookies['csrf_token'] && assessmentData.csrfToken && !safeEqual(cookies['csrf_token'], assessmentData.csrfToken)) {
      console.error('CSRF token mismatch from IP:', clientIP);
      return new Response(JSON.stringify({ success: false, error: 'Invalid CSRF token' }), {
        status: 403,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    console.log('Saving assessment session:', assessmentData.sessionId);

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

    // Map human-readable assessment names to database enum values
    const getAssessmentType = (assessmentName: string): string => {
      const typeMap: { [key: string]: string } = {
        'anxiety': 'anxiety',
        'depression': 'depression', 
        'adhd': 'adhd',
        'adult adhd / executive function': 'adhd',
        'ptsd': 'ptsd',
        'post-traumatic stress (ptsd)': 'ptsd',
        'post-traumatic stress': 'ptsd',
        'ocd': 'ocd',
        'obsessive compulsive disorder': 'ocd',
        'bipolar': 'bipolar',
        'bipolar disorder': 'bipolar',
        'panic': 'panic',
        'panic disorder': 'panic',
        'social anxiety': 'social_anxiety',
        'social anxiety disorder': 'social_anxiety',
        'specific phobia': 'specific_phobia',
        'eating concerns': 'eating_concerns',
        'binge eating': 'binge_eating',
        'body dysmorphic disorder': 'bdd',
        'bdd': 'bdd',
        'health anxiety': 'health_anxiety',
        'insomnia': 'insomnia',
        'substance use': 'substance_use',
        'alcohol use': 'alcohol',
        'alcohol': 'alcohol',
        'nicotine': 'nicotine',
        'grief': 'grief',
        'perinatal mood': 'perinatal_mood',
        'somatic symptom': 'somatic_symptom',
        'stress burnout': 'stress_burnout',
        'anger': 'anger',
        'wellbeing check': 'wellbeing_check',
        'mood tracker': 'mood_tracker'
      };

      const normalizedInput = assessmentName.toLowerCase().trim();
      if (typeMap[normalizedInput]) {
        return typeMap[normalizedInput];
      }
      for (const [key, value] of Object.entries(typeMap)) {
        if (normalizedInput.includes(key) || key.includes(normalizedInput)) {
          return value;
        }
      }
      return normalizedInput
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '_')
        .toLowerCase();
    };

    const normalizedAssessmentType = getAssessmentType(assessmentData.assessmentType);

    console.log('Original assessment type:', assessmentData.assessmentType);
    console.log('Normalized assessment type:', normalizedAssessmentType);
    console.log('Is encrypted submission:', !!assessmentData.isEncrypted);

    // Prepare database insertion with encrypted data if available
    const insertData: any = {
      session_id: assessmentData.sessionId,
      assessment_type: normalizedAssessmentType,
      score: assessmentData.score,
      severity: assessmentData.severity,
      recommendations: assessmentData.recommendations,
      ip_address: clientIP,
      user_id: userId,
    };

    // Handle encrypted vs unencrypted data
    if (assessmentData.isEncrypted && assessmentData.encryptedAnswers) {
      // Store encrypted data
      insertData.encrypted_answers = assessmentData.encryptedAnswers;
      insertData.encrypted_additional_info = assessmentData.encryptedAdditionalInfo || '';
      insertData.encryption_iv = assessmentData.answersIv;
      insertData.data_hash = assessmentData.dataHash;
      insertData.is_encrypted = true;
      
      // For backward compatibility, store obfuscated versions in original fields
      insertData.answers = { encrypted: true, message: 'Sensitive data encrypted for security' };
      insertData.additional_info = { encrypted: true, message: 'Sensitive data encrypted for security' };
      
      console.log('Storing encrypted assessment data');
    } else {
      // Legacy unencrypted storage (for backward compatibility)
      insertData.answers = assessmentData.answers;
      insertData.additional_info = assessmentData.additionalInfo;
      insertData.is_encrypted = false;
      
      console.log('Storing unencrypted assessment data (legacy mode)');
    }

    // Insert assessment session into database
    const { data: session, error } = await supabase
      .from('assessment_sessions')
      .insert(insertData)
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
        event_type: 'assessment_completed',
        event_data: { 
          assessment_type: normalizedAssessmentType,
          session_id: assessmentData.sessionId,
          score: assessmentData.score,
          severity: assessmentData.severity
        },
        session_id: assessmentData.sessionId,
        ip_address: clientIP,
        page_url: req.headers.get('referer') || 'unknown'
      });

    console.log('Assessment session saved successfully:', session.id);

    return new Response(
      JSON.stringify({
        success: true,
        sessionId: session.session_id,
        databaseId: session.id,
        message: 'Assessment saved successfully'
      }),
      {
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error: any) {
    console.error('Assessment save error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to save assessment'
      }),
      {
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});