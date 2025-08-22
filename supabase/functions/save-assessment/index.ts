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

    // Insert assessment session into database
    const { data: session, error } = await supabase
      .from('assessment_sessions')
      .insert({
        session_id: assessmentData.sessionId,
        assessment_type: assessmentData.assessmentType,
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
          assessment_type: assessmentData.assessmentType,
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