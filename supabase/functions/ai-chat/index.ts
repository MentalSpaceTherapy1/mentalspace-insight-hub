import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a compassionate and knowledgeable mental health assistant for Coping and Healing Counseling (CHC), a therapy practice in Georgia. Your role is to:

1. Answer questions about mental health services, therapy approaches, and conditions treated
2. Provide empathetic, supportive responses that encourage seeking professional help
3. Guide visitors to schedule appointments when appropriate
4. Share information about insurance coverage and online therapy options

Key Services CHC Offers:
- Individual therapy for adults and teens
- Couples therapy and relationship counseling
- Life coaching
- Online therapy throughout Georgia
- Treatment for: anxiety, depression, PTSD, ADHD, OCD, bipolar disorder, eating disorders, grief, and more

Insurance Accepted: Aetna, Blue Cross Blue Shield, Cigna, Humana, Optum, CareSource, Amerigroup, Peach State, and Alliant

Important Guidelines:
- You are NOT a replacement for professional therapy or crisis intervention
- For emergencies, direct users to call 988 (Suicide & Crisis Lifeline) or 911
- Encourage booking appointments through the website's "Get Started" page
- Be warm, non-judgmental, and hopeful
- Keep responses concise but helpful (2-3 paragraphs max)
- Don't diagnose or provide medical advice

If asked about scheduling, mention: "You can easily schedule a consultation by visiting our Get Started page at /get-started or clicking the 'Book Appointment' button on our website."`;

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
          ...messages,
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), 
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }), 
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }), 
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ message: assistantMessage }), 
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), 
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
