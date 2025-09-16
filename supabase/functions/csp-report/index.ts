import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

type CspReportBody = {
  "csp-report"?: {
    "document-uri"?: string;
    "referrer"?: string;
    "violated-directive"?: string;
    "effective-directive"?: string;
    "original-policy"?: string;
    "disposition"?: string;
    "blocked-uri"?: string;
    "line-number"?: number;
    "column-number"?: number;
    "source-file"?: string;
    "status-code"?: number;
    "script-sample"?: string;
  }
} | Record<string, any>;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    let bodyText = await req.text();
    let json: CspReportBody | null = null;

    try {
      json = JSON.parse(bodyText);
    } catch (_) {
      // Some browsers send application/csp-report; parse form-like or text
      json = { raw: bodyText } as any;
    }

    const report = (json as any)["csp-report"] || json || {};

    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIP = forwardedFor ? forwardedFor.split(',')[0].trim() : (req.headers.get('x-real-ip') || 'unknown');

    await supabase.from('analytics_events').insert({
      event_type: 'csp_violation',
      event_data: report,
      ip_address: clientIP,
      page_url: report["document-uri"] || 'unknown',
      referrer: report["referrer"] || null,
      user_agent: req.headers.get('user-agent') || 'unknown'
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error: any) {
    console.error('CSP report error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message || 'failed' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500
    });
  }
});