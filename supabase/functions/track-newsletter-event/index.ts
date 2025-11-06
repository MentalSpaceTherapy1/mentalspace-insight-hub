import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const url = new URL(req.url);
    const logId = url.searchParams.get('logId');
    const event = url.searchParams.get('event'); // 'open' or 'click'

    if (logId && event === 'open') {
      console.log(`Tracking newsletter open for log ${logId}`);
      
      await supabase
        .from('newsletter_email_logs')
        .update({
          status: 'opened',
          opened_at: new Date().toISOString(),
        })
        .eq('id', logId)
        .is('opened_at', null); // Only update if not already opened
    }

    // Return 1x1 transparent pixel
    const pixel = Uint8Array.from([
      0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00,
      0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x21, 0xf9, 0x04, 0x01, 0x00,
      0x00, 0x00, 0x00, 0x2c, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
      0x00, 0x02, 0x02, 0x44, 0x01, 0x00, 0x3b,
    ]);

    return new Response(pixel, {
      headers: {
        'Content-Type': 'image/gif',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error: any) {
    console.error('Error in track-newsletter-event:', error);
    return new Response(null, { status: 200 });
  }
});
