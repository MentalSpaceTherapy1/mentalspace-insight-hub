import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, excerpt, content, category } = await req.json();
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('newsletters')
      .insert({
        title,
        excerpt,
        content,
        category: category || 'professional-development',
        status: 'draft',
        is_pinned: false,
        published_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error("Error saving newsletter:", error);
      throw error;
    }

    console.log("Newsletter saved successfully:", data.id);

    return new Response(
      JSON.stringify({ success: true, newsletter: data }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("Error in save-manual-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to save newsletter" }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
