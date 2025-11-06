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
    const { topic, tone, targetAudience, template } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log("Generating newsletter with params:", { topic, tone, targetAudience, template });

    const systemPrompt = `You are a professional newsletter writer for a mental health therapy practice (CHC). 
Create engaging, informative, and professional newsletter content for therapists and staff.
Format the content in clean HTML with proper headings, paragraphs, lists, and emphasis where appropriate.
Use modern, professional styling with sections and visual hierarchy.`;

    const userPrompt = `Create a ${tone} newsletter about: ${topic}

Target Audience: ${targetAudience}
Template Style: ${template}

Requirements:
- Professional mental health therapy practice context
- Include actionable insights and practical tips
- Use engaging headers and clear sections
- Add relevant emoji sparingly for visual interest
- Structure with: Introduction, Main Content (2-3 sections), Key Takeaways, Conclusion
- Make it informative yet accessible
- Length: 600-800 words

Format as clean HTML with semantic tags (h2, h3, p, ul, li, strong, em).`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Lovable AI error:", response.status, errorText);
      
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please try again in a moment.");
      }
      if (response.status === 402) {
        throw new Error("AI credits depleted. Please add credits to your workspace.");
      }
      throw new Error("Failed to generate newsletter content");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      console.error("No content in AI response:", data);
      throw new Error("No content generated");
    }

    console.log("Newsletter generated successfully");

    // Generate a title from the topic
    const title = `${topic.split(' ').map((word: string) => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')}`;

    return new Response(
      JSON.stringify({ 
        content,
        title,
        excerpt: `${tone.charAt(0).toUpperCase() + tone.slice(1)} insights on ${topic} for ${targetAudience}.`
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: any) {
    console.error("Error in generate-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to generate newsletter" }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
