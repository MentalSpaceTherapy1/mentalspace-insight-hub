import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.56.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
    const { message, sessionId } = await req.json();
    
    console.log(`Processing chat message for session: ${sessionId}`);
    
    // Get client IP for safety logging
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIP = forwardedFor ? 
                    forwardedFor.split(',')[0].trim() : 
                    req.headers.get('x-real-ip') || '0.0.0.0';

    // Enhanced crisis detection with more comprehensive patterns
    const crisisKeywords = [
      'suicide', 'kill myself', 'end my life', 'want to die', 'harm myself',
      'cut myself', 'overdose', 'jump off', 'not worth living', 'plan to hurt',
      'thinking about hurting myself', 'plan to end', 'better off dead',
      'no point in living', 'thinking of suicide', 'want to hurt myself'
    ];
    
    const messageText = message.toLowerCase();
    const isCrisisMessage = crisisKeywords.some(keyword => messageText.includes(keyword));
    
    if (isCrisisMessage) {
      console.log(`Crisis detected in session ${sessionId}`);
      
      // Log safety incident
      await supabase.from('chat_safety_logs').insert({
        session_id: sessionId,
        trigger_type: 'crisis_detection',
        message_content: message,
        action_taken: 'crisis_resources_provided'
      });

      const crisisResponse = {
        role: 'assistant',
        content: `I'm really sorry you're feeling this way. You are not alone. Please call or text **988** to reach the Suicide & Crisis Lifeline, or dial **911** if you're in immediate danger.

**National Crisis Resources:**
• **988 Suicide & Crisis Lifeline**: Call or text 988
• **Crisis Text Line**: Text HOME to 741741
• **National Suicide Prevention Lifeline**: 1-800-273-8255
• **Emergency Services**: 911

These trained counselors are available 24/7 and can provide immediate support. Please reach out to them right now.`
      };

      return new Response(JSON.stringify({ 
        response: crisisResponse,
        isCrisis: true,
        endSession: true
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get session context
    const { data: sessionData } = await supabase
      .from('chat_sessions')
      .select('messages, user_context')
      .eq('session_id', sessionId)
      .single();

    const previousMessages = sessionData?.messages || [];
    const userContext = sessionData?.user_context || {};

    // Get crawled site content from database instead of hardcoded content
    const { data: siteContent } = await supabase
      .from('site_content_cache')
      .select('url, title, description, content')
      .order('last_crawled', { ascending: false });

    const websiteContent = {
      services: [
        {
          name: "Individual Therapy",
          description: "One-on-one support with licensed therapists for anxiety, depression, trauma, and personal growth.",
          link: "/therapist-matching"
        },
        {
          name: "Couples Therapy",
          description: "Enhance your relationship with professional guidance to improve communication and strengthen bonds.",
          link: "/couples-therapy"
        },
        {
          name: "Teen Therapy",
          description: "Specialized care for youth aged 13-17, providing a safe space to navigate adolescent challenges.",
          link: "/teen-therapy"
        },
        {
          name: "Life Coaching",
          description: "Find balance, purpose, and joy with personalized coaching to achieve your personal and professional goals.",
          link: "/life-coaching"
        },
        {
          name: "Online Therapy",
          description: "Convenient, secure virtual therapy sessions from the comfort of your home.",
          link: "/online-therapy"
        }
      ],
      assessments: [
        { name: "Depression Assessment", description: "PHQ-9 screening tool to assess symptoms of depression", duration: "5-10 minutes", link: "/mental-health-tests" },
        { name: "Anxiety Assessment", description: "GAD-7 questionnaire to evaluate generalized anxiety symptoms", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Panic Assessment", description: "Screen for panic symptoms and episodes over the last 4 weeks", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Social Anxiety Assessment", description: "Screen for social/performance anxiety and fear of negative evaluation", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Specific Phobia Assessment", description: "Screen for excessive fear of specific objects or situations", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "OCD Assessment", description: "Screen for obsessive-compulsive symptoms and rituals", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "PTSD Assessment", description: "Screen for post-traumatic stress symptoms and trauma responses", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "ADHD Assessment", description: "Screen for attention, hyperactivity, and executive function difficulties", duration: "3 minutes", link: "/mental-health-tests" },
        { name: "Bipolar Assessment", description: "Screen for hypomanic/manic episodes and mood cycling patterns", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Insomnia Assessment", description: "Screen for sleep initiation, maintenance, and quality issues", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Alcohol Use Assessment", description: "Screen for unhealthy alcohol use patterns and safety risks", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Substance Use Assessment", description: "Screen for unhealthy use of non-alcohol substances and safety risks", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Nicotine Dependence Assessment", description: "Screen for nicotine dependence across cigarettes, vaping, and smokeless products", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Eating Concerns Assessment", description: "Screen for eating disorder risk and disordered eating patterns", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Binge-Eating Behaviors Assessment", description: "Screen for binge-eating patterns and related distress/impairment", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Body Dysmorphic Disorder Assessment", description: "Screen for appearance-related preoccupations and repetitive behaviors", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Health Anxiety Assessment", description: "Screen for excessive worry about illness and health-related behaviors", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Somatic Symptom Assessment", description: "Screen for distressing physical symptoms and related thoughts/behaviors", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Prolonged Grief Assessment", description: "Screen for persistent, impairing grief reactions after loss", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Perinatal Mood & Anxiety Assessment", description: "Screen for depression/anxiety during pregnancy and postpartum period", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Anger & Irritability Assessment", description: "Identify anger frequency, intensity, control, and harm risk", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Stress & Burnout Assessment", description: "Screen for burnout pattern—exhaustion, cynicism, reduced efficacy—and workplace stress", duration: "2-3 minutes", link: "/mental-health-tests" },
        { name: "Mood Tracker", description: "Quick daily mood assessment to track emotional patterns", duration: "2-5 minutes", link: "/mental-health-tests" },
        { name: "Wellbeing Check", description: "Comprehensive assessment of your overall wellbeing across life satisfaction, relationships, health, and purpose", duration: "3-5 minutes", link: "/mental-health-tests" }
      ],
      pages: [
        { name: "Get Started", description: "Begin your mental health journey with MentalSpace Therapy", link: "/get-started" },
        { name: "Therapist Matching", description: "Find the right therapist for your specific needs", link: "/therapist-matching" },
        { name: "Insurance Coverage", description: "Check if your insurance is accepted", link: "/insurance" },
        { name: "FAQ", description: "Frequently asked questions about our services", link: "/faq" },
        { name: "Emergency Resources", description: "Crisis support and emergency mental health resources", link: "/emergency-resources" },
        { name: "Mental Health Library", description: "Educational resources and articles about mental health", link: "/mental-health-library" },
        { name: "Contact Us", description: "Get in touch with our support team", link: "/contact-us" }
      ],
      // Use crawled content from database
      crawledContent: siteContent || [],
      conditions: [
        { name: "Anxiety Disorders", description: "Comprehensive care for various anxiety disorders including GAD, panic, and social anxiety", link: "/conditions/anxiety" },
        { name: "Depression", description: "Evidence-based treatment for major depression and mood disorders", link: "/conditions/depression" },
        { name: "PTSD", description: "Specialized trauma therapy and PTSD treatment programs", link: "/conditions/ptsd" },
        { name: "ADHD", description: "Assessment and support for attention deficit hyperactivity disorder", link: "/conditions/adhd" },
        { name: "Bipolar Disorder", description: "Comprehensive care for bipolar and mood cycling disorders", link: "/conditions/bipolar-disorder" },
        { name: "Panic Disorder", description: "Treatment for panic attacks and panic disorder", link: "/conditions/panic-disorder" },
        { name: "Social Anxiety", description: "Therapy for social anxiety and performance fears", link: "/conditions/social-anxiety-disorder" },
        { name: "OCD", description: "Evidence-based treatment for obsessive-compulsive disorder", link: "/conditions/obsessive-compulsive-disorder" }
      ]
    };

    // Build conversation history with production-ready system prompt
    const conversationHistory = [
      {
        role: 'system',
        content: `You are the MentalSpace Website Assistant for prospective clients in Georgia. 
Your purpose: (1) answer questions using only MentalSpace/CHC published content and other clearly cited, authoritative sources; (2) help visitors understand options; (3) guide them to "Get Started" to book an intake. You are NOT a therapist and do not provide medical advice or crisis counseling.

STRICT RULES
- Scope: Use only the content provided in your context ("Site Context") and, where applicable, whitelisted authoritative sources (CDC, NIH, APA) that appear in your retrieval. If the answer is not in context, say you don't have that information and offer to connect the user to our team or link to "Get Started."
- No diagnosis. No treatment or medication advice. No prognoses. No legal/insurance promises. Educational information only.
- Crisis handling: If the user expresses intent to harm self/others, or you detect imminent risk language, immediately show this message (and STOP normal conversation):
  "I'm really sorry you're feeling this way. You are not alone. Please call or text **988** to reach the Suicide & Crisis Lifeline, or dial **911** if you're in immediate danger."
  Then offer national crisis resources and end the session.
- PHI & privacy: Do not ask for names, dates of birth, addresses, or plan numbers. If the user starts to share personal health details, gently redirect to "Get Started" where information is collected securely.
- Tone: Warm, concise, plain English (≈8th-grade reading level). Use Georgia-specific context where relevant. 
- Output style: 
  1) A direct answer in 2–5 short sentences. 
  2) "What to do next" with one clear CTA.
  3) If you referenced sources, list 1–3 "Sources" as bullet links (no footnote jargon).
- If the question is about scheduling, insurance, prices, or getting care, always include a **Get Started** CTA.
- If the question asks for something MentalSpace/CHC doesn't do, say so clearly and redirect to an appropriate alternative (educational only).

REFUSAL TEMPLATES
- Out of scope (not in Site Context): "I don't have that on our site. Would you like me to connect you with our team or start the intake so we can help directly?"
- Clinical advice request: "I can't give medical advice here, but I can share education from our articles and help you book with a licensed clinician."

BRAND
- Organization: MentalSpace (with Coping & Healing Counseling as a related brand).
- Service area: Georgia (virtual care).
- Voice: Professional, reassuring, efficient. No hype claims (e.g., not "available 24/7" unless literally true).

WEBSITE CONTENT KNOWLEDGE BASE:

**SERVICES AVAILABLE:**
${websiteContent.services.map(service => `- ${service.name}: ${service.description} (Link: ${service.link})`).join('\n')}

**MENTAL HEALTH ASSESSMENTS (Available at /mental-health-tests):**
${websiteContent.assessments.map(assessment => `- ${assessment.name}: ${assessment.description} (Duration: ${assessment.duration})`).join('\n')}

**KEY WEBSITE PAGES:**
${websiteContent.pages.map(page => `- ${page.name}: ${page.description} (Link: ${page.link})`).join('\n')}

**CRAWLED WEBSITE CONTENT (All Pages):**
${websiteContent.crawledContent.map(page => `- ${page.title} (${page.url}): ${page.description} | Content: ${page.content.substring(0, 300)}...`).join('\n')}

**CONDITIONS WE TREAT:**
${websiteContent.conditions.map(condition => `- ${condition.name}: ${condition.description} (Link: ${condition.link})`).join('\n')}

Remember: You're a knowledgeable guide with access to all MentalSpace Therapy resources, not a replacement for professional mental health care. Always guide users toward "Get Started" for actual care.`
      },
      ...previousMessages.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    console.log(`Sending ${conversationHistory.length} messages to OpenAI`);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: conversationHistory,
        max_completion_tokens: 800,
        temperature: 0.3,
        top_p: 1.0,
        seed: 7,
        stream: false,
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "website_bot_response",
            schema: {
              type: "object",
              properties: {
                answer_text: { type: "string" },
                cta: {
                  type: "string",
                  enum: ["GET_STARTED", "READ_ARTICLE", "CONTACT_TEAM", "CRISIS_HELP", "NONE"]
                },
                sources: {
                  type: "array",
                  items: { type: "string" }
                }
              },
              required: ["answer_text", "cta"]
            }
          }
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    let aiResponse;

    try {
      // Parse structured JSON response
      const structuredResponse = JSON.parse(data.choices[0].message.content);
      
      // Convert structured response to chat format
      let content = structuredResponse.answer_text;
      
      // Add CTA if present
      if (structuredResponse.cta && structuredResponse.cta !== "NONE") {
        content += "\n\n";
        switch (structuredResponse.cta) {
          case "GET_STARTED":
            content += "**What to do next:** Ready to begin? [Get Started](/get-started) to book your intake.";
            break;
          case "READ_ARTICLE":
            content += "**What to do next:** Learn more in our [Mental Health Library](/mental-health-library).";
            break;
          case "CONTACT_TEAM":
            content += "**What to do next:** Have more questions? [Contact our team](/contact-us) for personalized help.";
            break;
          case "CRISIS_HELP":
            content += "**What to do next:** For immediate support, visit our [Emergency Resources](/emergency-resources) page.";
            break;
        }
      }

      // Add sources if present
      if (structuredResponse.sources && structuredResponse.sources.length > 0) {
        content += "\n\n**Sources:**\n" + structuredResponse.sources.map(source => `• ${source}`).join("\n");
      }

      aiResponse = {
        role: 'assistant',
        content: content
      };
    } catch (parseError) {
      // Fallback to regular content if JSON parsing fails
      console.log('Failed to parse structured response, using fallback');
      aiResponse = data.choices[0].message;
    }

    console.log(`Generated response for session ${sessionId}`);

    // Update session with new messages
    const updatedMessages = [
      ...previousMessages,
      { role: 'user', content: message, timestamp: new Date().toISOString() },
      { role: 'assistant', content: aiResponse.content, timestamp: new Date().toISOString() }
    ];

    await supabase
      .from('chat_sessions')
      .upsert({
        session_id: sessionId,
        messages: updatedMessages,
        last_activity: new Date().toISOString(),
        ip_address: clientIP
      });

    return new Response(JSON.stringify({ 
      response: aiResponse,
      isCrisis: false 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in therapy-chat function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to process chat message',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});