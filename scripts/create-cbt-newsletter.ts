import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const newsletterContent = `
<img src="https://chctherapy.com/newsletter/cbt-therapy-space.jpg" alt="Warm and inviting therapy office space with calming atmosphere" style="width: 100%; max-width: 100%; height: auto; border-radius: 1rem; margin: 2rem 0; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);" />

<h2 style="color: #2563eb; margin-top: 2rem;">🧠 Welcome to Your CBT Toolkit</h2>

<p>Hey there, fellow therapist! Let's talk about one of our most powerful tools: <strong>Cognitive Behavioral Therapy</strong>. Whether you're a CBT veteran or just getting started, this newsletter is packed with practical insights, fun reminders, and a few "aha!" moments to keep your practice fresh and effective.</p>

<h2 style="color: #2563eb; margin-top: 2.5rem;">📐 The Magic Triangle: A Quick Refresher</h2>

<p>Remember the CBT triangle? It's not just a theory—it's your clients' roadmap to change. Here's why it works so beautifully:</p>

<img src="https://chctherapy.com/newsletter/cbt-triangle-concept.jpg" alt="The CBT triangle showing interconnection of thoughts, feelings, and behaviors" style="width: 100%; max-width: 600px; height: auto; border-radius: 1rem; margin: 2rem auto; display: block; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);" />

<ul style="line-height: 1.8; margin: 1.5rem 0;">
  <li><strong>Thoughts</strong> influence how we feel</li>
  <li><strong>Feelings</strong> drive our behaviors</li>
  <li><strong>Behaviors</strong> reinforce our thoughts</li>
</ul>

<p style="background: #f0f9ff; padding: 1.5rem; border-left: 4px solid #2563eb; border-radius: 0.5rem; margin: 1.5rem 0;">
  <strong>💡 Pro Tip:</strong> When clients feel stuck, ask: "Which corner of the triangle is easiest for you to change right now?" Start there!
</p>

<h2 style="color: #2563eb; margin-top: 2.5rem;">🎯 5 Practical Techniques That Actually Work</h2>

<h3 style="color: #1e40af; margin-top: 1.5rem;">1. Thought Records (But Make Them Fun!)</h3>
<p>Instead of the traditional 7-column thought record, try the <strong>"Text Message to Your Future Self"</strong> approach. Clients write their automatic thoughts as if texting, then respond as their "wiser, calmer future self." It's relatable and reduces that therapy homework resistance.</p>

<h3 style="color: #1e40af; margin-top: 1.5rem;">2. Behavioral Experiments Over Exposure</h3>
<p>Frame it as being a scientist, not facing fears. "Let's test if your prediction comes true" feels less intimidating than "Let's confront your anxiety." Same result, better buy-in!</p>

<h3 style="color: #1e40af; margin-top: 1.5rem;">3. Socratic Questioning (With a Twist)</h3>
<p>Add: "What would you tell your best friend in this situation?" Most clients are way kinder to others than themselves. This bridges cognitive restructuring with self-compassion.</p>

<h3 style="color: #1e40af; margin-top: 1.5rem;">4. Activity Scheduling That Sticks</h3>
<p>Instead of vague "schedule pleasant activities," use the <strong>3-2-1 Method</strong>: 3 small joys (coffee, music), 2 medium activities (walk, call a friend), 1 bigger goal (hobby time). Specific = success.</p>

<h3 style="color: #1e40af; margin-top: 1.5rem;">5. The "And" Technique</h3>
<p>Help clients move from "but" to "and." "I'm anxious BUT I can do this" becomes "I'm anxious AND I can do this." Small word, huge mindset shift.</p>

<h2 style="color: #2563eb; margin-top: 2.5rem;">👥 Collaboration Corner</h2>

<img src="https://chctherapy.com/newsletter/cbt-therapist-collaboration.jpg" alt="Diverse group of therapists collaborating and sharing clinical insights" style="width: 100%; max-width: 100%; height: auto; border-radius: 1rem; margin: 2rem 0; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);" />

<p>CBT works best when we work together! Here's what your colleagues are loving this month:</p>

<ul style="line-height: 1.8; margin: 1.5rem 0;">
  <li><strong>App Alert:</strong> "CBT Thought Diary" app has a new voice recording feature—perfect for clients who hate writing</li>
  <li><strong>Resource Share:</strong> Beck Institute's free guided discovery worksheets are incredible for training new therapists</li>
  <li><strong>Book Club:</strong> We're reading "The Anxiety Workbook" by Knaus this quarter—join us for lunch discussions!</li>
</ul>

<h2 style="color: #2563eb; margin-top: 2.5rem;">🎓 Quick CE Opportunity</h2>

<p>Reminder: The "Advanced CBT for Complex Trauma" webinar is next Thursday at 7pm ET. It counts for 2 CE credits and covers integrating CBT with trauma-informed care. Registration closes Friday!</p>

<h2 style="color: #2563eb; margin-top: 2.5rem;">📝 Key Takeaways</h2>

<div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0;">
  <ul style="line-height: 1.8; margin: 0;">
    <li>✨ Start with the easiest corner of the CBT triangle</li>
    <li>🧪 Frame exposure as experiments, not confrontations</li>
    <li>💬 Replace "but" with "and" for cognitive flexibility</li>
    <li>📱 Embrace technology—apps can increase homework compliance</li>
    <li>🤝 Keep learning with your colleagues—we're stronger together</li>
  </ul>
</div>

<h2 style="color: #2563eb; margin-top: 2.5rem;">💙 Closing Thoughts</h2>

<p>Remember: You're not just teaching techniques—you're empowering clients to become their own therapists. Every session is planting seeds of change. Some sprout immediately, others take time, but they all matter.</p>

<p>Keep doing the amazing work you do. Your clients are lucky to have you! 🌟</p>

<p style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 0.9rem;">
  <strong>Questions or want to share your favorite CBT technique?</strong> Hit reply or join us at the next team meeting. We love hearing from you!
</p>
`;

async function createNewsletter() {
  const { data, error } = await supabase.functions.invoke('save-manual-newsletter', {
    body: {
      title: 'CBT Essentials: Your Practical Guide to Cognitive Behavioral Therapy',
      excerpt: 'A fun, engaging guide to CBT techniques that actually work—from thought records to behavioral experiments. Plus collaboration tips from your fellow therapists!',
      content: newsletterContent,
      category: 'professional-development'
    }
  });

  if (error) {
    console.error('Error creating newsletter:', error);
  } else {
    console.log('Newsletter created successfully:', data);
  }
}

createNewsletter();
