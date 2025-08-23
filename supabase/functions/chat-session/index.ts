import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
    const { action, sessionId, context } = await req.json();
    
    console.log(`Session action: ${action} for session: ${sessionId}`);
    
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIP = forwardedFor ? 
                    forwardedFor.split(',')[0].trim() : 
                    req.headers.get('x-real-ip') || '0.0.0.0';

    if (action === 'create') {
      // Create new session
      const newSessionId = crypto.randomUUID();
      
      const { data, error } = await supabase
        .from('chat_sessions')
        .insert({
          session_id: newSessionId,
          user_context: context || {},
          ip_address: clientIP
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating session:', error);
        throw error;
      }

      console.log(`Created new session: ${newSessionId}`);
      
      return new Response(JSON.stringify({ 
        sessionId: newSessionId,
        session: data 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
      
    } else if (action === 'get') {
      // Get existing session
      const { data, error } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('session_id', sessionId)
        .single();

      if (error) {
        console.error('Error getting session:', error);
        throw error;
      }

      return new Response(JSON.stringify({ session: data }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
      
    } else if (action === 'update_context') {
      // Update session context
      const { error } = await supabase
        .from('chat_sessions')
        .update({
          user_context: context,
          last_activity: new Date().toISOString()
        })
        .eq('session_id', sessionId);

      if (error) {
        console.error('Error updating session context:', error);
        throw error;
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
      
    } else {
      throw new Error(`Unknown action: ${action}`);
    }

  } catch (error) {
    console.error('Error in chat-session function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to process session request',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});