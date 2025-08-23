import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

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
    
    // Get client IP for analytics
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'unknown';

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

    // Insert assessment session into database
    const { data: session, error } = await supabase
      .from('assessment_sessions')
      .insert({
        session_id: assessmentData.sessionId,
        assessment_type: normalizedAssessmentType,
        answers: assessmentData.answers,
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