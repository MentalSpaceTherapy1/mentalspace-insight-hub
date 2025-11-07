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
Use modern, professional styling with sections and visual hierarchy.

AVAILABLE IMAGES - Include 1-2 relevant images in your content using these URLs:
- https://chctherapy.com/newsletter/newsletter-trust.jpg (Trust, therapeutic relationships, bonding)
- https://chctherapy.com/newsletter/newsletter-communication.jpg (Communication, dialogue, talking)
- https://chctherapy.com/newsletter/newsletter-team.jpg (Teamwork, collaboration, staff unity)
- https://chctherapy.com/newsletter/newsletter-selfcare.jpg (Self-care, wellness, mindfulness)

When including images, use this format:
<img src="[URL]" alt="[descriptive alt text]" style="width: 100%; max-width: 100%; height: auto; border-radius: 1rem; margin: 2rem 0; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);" />

IMPORTANT: Return ONLY a valid JSON object with this exact structure:
{
  "title": "An engaging, professional title for the newsletter (50-80 characters)",
  "excerpt": "A compelling 1-2 sentence excerpt (120-160 characters)",
  "content": "Full HTML content of the newsletter with images embedded"
}`;

    const userPrompt = `Create a ${tone} newsletter about: ${topic}

Target Audience: ${targetAudience}
Template Style: ${template}

Requirements:
- Professional mental health therapy practice context
- Include 1-2 relevant images from the available images list (choose based on topic relevance)
- Include actionable insights and practical tips
- Use engaging headers and clear sections
- Add relevant emoji sparingly for visual interest
- Structure with: Introduction, Image (if relevant), Main Content (2-3 sections), Image (if relevant), Key Takeaways, Conclusion
- Make it informative yet accessible
- Length: 600-800 words

Format the HTML content with semantic tags (h2, h3, p, ul, li, strong, em) and embed images using <img> tags.
Return the response as a JSON object with "title", "excerpt", and "content" fields.`;

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
    const aiResponse = data.choices?.[0]?.message?.content;

    if (!aiResponse) {
      console.error("No content in AI response:", data);
      throw new Error("No content generated");
    }

    console.log("Newsletter generated successfully");

    // Parse the JSON response from AI
    let parsedResponse;
    try {
      // Try to extract JSON from the response (in case AI adds markdown code blocks)
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {
        parsedResponse = JSON.parse(aiResponse);
      }
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", parseError);
      // Fallback: treat the whole response as content
      parsedResponse = {
        title: topic.slice(0, 80),
        excerpt: `${tone.charAt(0).toUpperCase() + tone.slice(1)} insights on ${topic.slice(0, 100)} for ${targetAudience}.`,
        content: aiResponse
      };
    }

    return new Response(
      JSON.stringify({ 
        content: parsedResponse.content,
        title: parsedResponse.title,
        excerpt: parsedResponse.excerpt
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
