import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";
import { ServerEncryption, RateLimiter, InputValidator, CSRFProtection } from '../_shared/security.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AssessmentSubmission {
  sessionId: string;
  assessmentType: string;
  answers: Record<string, any>;
  score?: number;
  severity?: string;
  recommendations?: string[];
  additionalInfo?: Record<string, any>;
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

    const assessmentData: AssessmentSubmission = await req.json();
    
    // Enhanced Security validations
    
    // 1. Honeypot field check
    if (assessmentData.honeypot && assessmentData.honeypot.trim() !== '') {
      console.log('Honeypot field detected in assessment - likely bot');
      return new Response(
        JSON.stringify({ success: true, message: 'Assessment saved successfully' }),
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

    if (!assessmentData.csrfToken || !cookieToken || !CSRFProtection.validateToken(assessmentData.csrfToken, cookieToken)) {
      console.log('CSRF validation failed');
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid CSRF token' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 403 }
      );
    }
    
    // 3. Validate session ID format (more strict)
    const sessionIdPattern = /^[a-zA-Z0-9-_]{16,64}$/;
    if (!sessionIdPattern.test(assessmentData.sessionId)) {
      throw new Error('Invalid session ID format');
    }
    
    // 3. Validate assessment data
    if (!assessmentData.assessmentType || !assessmentData.answers || typeof assessmentData.answers !== 'object') {
      throw new Error('Invalid assessment data');
    }
    
    // 4. Enhanced timestamp validation
    if (assessmentData.timestamp) {
      const submissionTime = Date.now() - assessmentData.timestamp;
      if (submissionTime < 5000) { // Increased to 5 seconds minimum
        console.log('Assessment submission too fast - likely automated');
        throw new Error('Please take your time with the assessment');
      }
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
    
    // 6. Check assessment rate limits
    const rateLimitResult = await RateLimiter.checkAssessmentLimit(supabase, clientIP);
    if (!rateLimitResult.allowed) {
      console.log(`Assessment rate limit exceeded for IP ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Too many assessments. Please try again later.',
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
    
    // 7. Sanitize and validate assessment answers
    const sanitizedAnswers = Object.keys(assessmentData.answers).reduce((clean, key) => {
      const value = assessmentData.answers[key];
      if (typeof value === 'string') {
        const sanitized = InputValidator.sanitizeString(value);
        if (InputValidator.containsMaliciousContent(sanitized)) {
          throw new Error('Invalid content detected in assessment data');
        }
        clean[key] = sanitized;
      } else {
        clean[key] = value;
      }
      return clean;
    }, {} as Record<string, any>);
    
    // 8. Encrypt sensitive assessment data
    const encryptedAnswers = await ServerEncryption.encryptSensitiveFields(sanitizedAnswers);

    console.log('Saving assessment session:', assessmentData.sessionId);

    // Map human-readable assessment names to database enum values
    const getAssessmentType = (assessmentName: string): string => {
      const typeMap: { [key: string]: string } = {
        // Direct matches to database enum values
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
      
      // Direct match
      if (typeMap[normalizedInput]) {
        return typeMap[normalizedInput];
      }
      
      // Partial match for complex names
      for (const [key, value] of Object.entries(typeMap)) {
        if (normalizedInput.includes(key) || key.includes(normalizedInput)) {
          return value;
        }
      }
      
      // Fallback: convert to snake_case and remove special characters
      return normalizedInput
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '_')
        .toLowerCase();
    };

    const normalizedAssessmentType = getAssessmentType(assessmentData.assessmentType);
    
    console.log('Original assessment type:', assessmentData.assessmentType);
    console.log('Normalized assessment type:', normalizedAssessmentType);

    // Insert assessment session into database with encrypted sensitive data
    const { data: session, error } = await supabase
      .from('assessment_sessions')
      .insert({
        session_id: assessmentData.sessionId,
        assessment_type: normalizedAssessmentType,
        answers: encryptedAnswers,
        score: assessmentData.score,
        severity: assessmentData.severity,
        recommendations: assessmentData.recommendations,
        additional_info: assessmentData.additionalInfo,
        ip_address: clientIP,
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
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
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
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});