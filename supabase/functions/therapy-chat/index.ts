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

    // Check for crisis keywords
    const crisisKeywords = [
      'suicide', 'kill myself', 'end my life', 'want to die', 'harm myself',
      'cut myself', 'overdose', 'jump off', 'not worth living'
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
        content: `I'm very concerned about you right now. If you're having thoughts of suicide or self-harm, please reach out for immediate help:

🆘 **Crisis Lifeline**: 988 (call or text)
🚨 **Emergency**: 911
💬 **Crisis Text Line**: Text HOME to 741741

You matter, and there are people who want to help. While I can provide support and information about mental health resources, I encourage you to speak with a trained crisis counselor or mental health professional right away.

Would you like me to help you find local mental health resources or talk about what support options are available?`
      };

      return new Response(JSON.stringify({ 
        response: crisisResponse,
        isCrisis: true 
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

    // Query published blog posts and resources from database
    const { data: blogPosts } = await supabase
      .from('blog_posts')
      .select('title, slug, excerpt, meta_description')
      .eq('status', 'published')
      .not('published_at', 'is', null);

    const { data: resources } = await supabase
      .from('resources')
      .select('title, description, category, resource_type')
      .eq('status', 'published')
      .not('published_at', 'is', null);

    // Build comprehensive knowledge base
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
      blogPosts: blogPosts || [],
      resources: resources || []
    };

    // Build conversation history for OpenAI
    const conversationHistory = [
      {
        role: 'system',
        content: `You are a helpful mental health support assistant for MentalSpace Therapy. Your role is to:

1. Provide supportive, empathetic responses about mental health topics
2. Recommend relevant resources from our website (assessments, services, pages)
3. Guide users to appropriate professional help when needed
4. NEVER provide medical diagnoses or specific treatment plans

WEBSITE CONTENT KNOWLEDGE BASE:

**SERVICES AVAILABLE:**
${websiteContent.services.map(service => `- ${service.name}: ${service.description} (Link: ${service.link})`).join('\n')}

**MENTAL HEALTH ASSESSMENTS (Available at /mental-health-tests):**
${websiteContent.assessments.map(assessment => `- ${assessment.name}: ${assessment.description} (Duration: ${assessment.duration})`).join('\n')}

**KEY WEBSITE PAGES:**
${websiteContent.pages.map(page => `- ${page.name}: ${page.description} (Link: ${page.link})`).join('\n')}

**PUBLISHED BLOG POSTS:**
${websiteContent.blogPosts.map(post => `- ${post.title}: ${post.excerpt || post.meta_description || 'Available on our website'}`).join('\n')}

**PUBLISHED RESOURCES:**
${websiteContent.resources.map(resource => `- ${resource.title}: ${resource.description} (Category: ${resource.category})`).join('\n')}

RESPONSE GUIDELINES:
- Be warm, professional, and non-judgmental
- Acknowledge feelings and validate experiences
- When users mention symptoms, suggest relevant assessments by name
- Recommend specific services based on user needs
- Provide exact page links when referencing website content
- Direct to crisis resources if safety concerns arise (/emergency-resources)
- Keep responses concise but helpful (2-3 paragraphs max)
- Always remind users this is not a substitute for professional therapy

IMPORTANT: You have detailed knowledge of all our services, assessments, and website content. Use specific names and descriptions when making recommendations. Always provide direct links to relevant pages.

Remember: You're a knowledgeable guide with access to all MentalSpace Therapy resources, not a replacement for professional mental health care.`
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
        model: 'gpt-4.1-2025-04-14',
        messages: conversationHistory,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message;

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