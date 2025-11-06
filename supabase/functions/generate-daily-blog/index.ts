import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Mental health topics for blog generation
const topics = [
  "managing anxiety in daily life",
  "coping with depression",
  "building healthy relationships",
  "stress management techniques",
  "mindfulness and meditation practices",
  "improving self-esteem",
  "dealing with grief and loss",
  "work-life balance",
  "parenting and mental health",
  "teen mental health challenges",
  "couples communication strategies",
  "overcoming trauma",
  "sleep and mental wellness",
  "social anxiety coping strategies",
  "emotional regulation techniques",
  "setting healthy boundaries",
  "cognitive behavioral therapy tips",
  "recognizing burnout signs",
  "ADHD management strategies",
  "anger management techniques"
];

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!LOVABLE_API_KEY || !RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing required environment variables");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const resend = new Resend(RESEND_API_KEY);

    console.log("Starting daily blog generation...");

    // Select random topic
    const topic = topics[Math.floor(Math.random() * topics.length)];
    console.log("Selected topic:", topic);

    // Generate article with Lovable AI
    const systemPrompt = `You are a professional mental health content writer for Coping and Healing Counseling (CHC), a therapy practice in Georgia. Write engaging, empathetic, and informative blog articles about mental health topics.

Guidelines:
- Write in a warm, accessible tone
- Include practical tips and actionable advice
- Use real-world examples
- Keep paragraphs short for readability
- Include a strong introduction and conclusion
- Aim for 800-1200 words
- Focus on evidence-based information
- Be sensitive to mental health stigma
- Include a call-to-action to seek professional help when appropriate

Format the response as JSON with this structure:
{
  "title": "Article title (engaging and SEO-friendly)",
  "excerpt": "Brief 2-3 sentence summary",
  "content": "Full article content in markdown format",
  "meta_description": "SEO meta description (150-160 characters)",
  "category": "One of: Anxiety, Depression, Relationships, Wellness, Therapy, Coping Skills",
  "tags": ["tag1", "tag2", "tag3"]
}`;

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
          { role: "user", content: `Write a comprehensive blog article about: ${topic}` },
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI generation failed: ${response.status}`);
    }

    const data = await response.json();
    let articleContent = data.choices[0].message.content;
    
    // Extract JSON from response (AI might wrap it in markdown code blocks)
    const jsonMatch = articleContent.match(/```json\n?([\s\S]*?)\n?```/) || 
                     articleContent.match(/\{[\s\S]*\}/);
    
    if (jsonMatch) {
      articleContent = jsonMatch[1] || jsonMatch[0];
    }

    const article = JSON.parse(articleContent);
    console.log("Article generated:", article.title);

    // Create slug
    const slug = generateSlug(article.title);

    // Check if slug exists
    const { data: existingPost } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existingPost) {
      // Add timestamp to make slug unique
      const uniqueSlug = `${slug}-${Date.now()}`;
      console.log("Slug exists, using:", uniqueSlug);
      article.slug = uniqueSlug;
    } else {
      article.slug = slug;
    }

    // Get admin user for author_id
    const { data: adminUser } = await supabase
      .from('admin_profiles')
      .select('id')
      .limit(1)
      .single();

    if (!adminUser) {
      throw new Error("No admin user found for author_id");
    }

    // Insert into database
    const { data: newPost, error: insertError } = await supabase
      .from('blog_posts')
      .insert({
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        content: article.content,
        meta_description: article.meta_description,
        category: article.category,
        tags: article.tags,
        author: 'CHC Therapy Team',
        author_id: adminUser.id,
        status: 'published',
        published_at: new Date().toISOString(),
        ai_generated: true,
        generation_prompt: topic,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Database insert error:", insertError);
      throw insertError;
    }

    console.log("Article published successfully:", newPost.id);

    // Send notification email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">✅ Daily Blog Article Published</h2>
        <p><strong>Title:</strong> ${article.title}</p>
        <p><strong>Category:</strong> ${article.category}</p>
        <p><strong>Slug:</strong> ${article.slug}</p>
        <p><strong>Published:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        
        <h3>Excerpt:</h3>
        <p>${article.excerpt}</p>
        
        <p style="margin-top: 30px;">
          <a href="https://www.chctherapy.com/blog/${article.slug}" 
             style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            View Article
          </a>
        </p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 12px; color: #6b7280;">
          This article was automatically generated and published by your CHC Therapy blog system.
        </p>
      </div>
    `;

    const { error: emailError } = await resend.emails.send({
      from: 'CHC Blog System <noreply@chctherapy.com>',
      to: ['support@chctherapy.com'],
      subject: `✅ Daily Blog Published: ${article.title}`,
      html: emailHtml,
    });

    if (emailError) {
      console.error("Email error:", emailError);
      // Don't throw - article is published, email is just notification
    } else {
      console.log("Notification email sent successfully");
    }

    return new Response(
      JSON.stringify({
        success: true,
        post: newPost,
        message: "Article generated and published successfully"
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error: any) {
    console.error('Blog generation error:', error);
    
    // Log failure to database
    try {
      const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
      const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
      
      if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
        const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
        const { data: adminUser } = await supabase
          .from('admin_profiles')
          .select('id')
          .limit(1)
          .single();
        
        if (adminUser) {
          await supabase.from('blog_posts').insert({
            title: 'Failed Generation',
            slug: `failed-${Date.now()}`,
            content: 'Generation failed',
            author_id: adminUser.id,
            status: 'failed',
            ai_generated: true,
            generation_error: error.message,
          });
        }
      }
    } catch (logError) {
      console.error('Error logging failure:', logError);
    }
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to generate blog article'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});
