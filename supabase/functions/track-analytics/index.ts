import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AnalyticsEvent {
  eventType: string;
  eventData?: Record<string, any>;
  sessionId?: string;
  pageUrl?: string;
  referrer?: string;
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

    const eventData: AnalyticsEvent = await req.json();
    
    // Get client info
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    console.log('Tracking analytics event:', eventData.eventType);

    // Insert analytics event
    const { error } = await supabase
      .from('analytics_events')
      .insert({
        event_type: eventData.eventType,
        event_data: eventData.eventData || {},
        session_id: eventData.sessionId,
        ip_address: clientIP,
        user_agent: userAgent,
        page_url: eventData.pageUrl || req.headers.get('referer') || 'unknown',
        referrer: eventData.referrer || req.headers.get('referer') || 'unknown'
      });

    if (error) {
      console.error('Analytics tracking error:', error);
      throw error;
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Event tracked successfully'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error: any) {
    console.error('Analytics error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to track event'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});