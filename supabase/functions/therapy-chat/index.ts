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
    const clientIP = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    '0.0.0.0';

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

    // Build conversation history for OpenAI
    const conversationHistory = [
      {
        role: 'system',
        content: `You are a helpful mental health support assistant for MentalSpace Therapy. Your role is to:

1. Provide supportive, empathetic responses about mental health topics
2. Recommend relevant resources from our website (blog articles, assessments, services)
3. Guide users to appropriate professional help when needed
4. NEVER provide medical diagnoses or specific treatment plans

Key resources available:
- Mental Health Assessments: Depression, Anxiety, PTSD, ADHD, Bipolar, OCD, Panic, Social Anxiety, Substance Use, Eating Disorders, Grief, Health Anxiety, Insomnia, Stress/Burnout
- Services: Individual Therapy, Couples Therapy, Teen Therapy, Life Coaching, Online Therapy
- Blog Articles: Understanding Anxiety, Depression Stigma, Online Therapy Benefits, Couples Communication, Teen Mental Health, PTSD Recovery

Guidelines:
- Be warm, professional, and non-judgmental
- Acknowledge feelings and validate experiences
- Suggest assessments when symptoms are mentioned
- Recommend therapy services when appropriate
- Direct to crisis resources if safety concerns arise
- Keep responses concise but helpful (2-3 paragraphs max)
- Always remind users that this is not a substitute for professional therapy

Remember: You're a supportive guide, not a replacement for professional mental health care.`
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