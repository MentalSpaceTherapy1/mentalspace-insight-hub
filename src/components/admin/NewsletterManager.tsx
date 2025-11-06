import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const NewsletterManager = () => {
  const [publishing, setPublishing] = useState(false);

  const publishClientRetentionNewsletter = async () => {
    setPublishing(true);
    try {
      // Get admin ID
      const { data: adminData } = await supabase
        .from('admin_profiles')
        .select('id')
        .limit(1)
        .single();

      if (!adminData) {
        throw new Error("No admin profile found");
      }

      const newsletterContent = `<h2>Welcome Team!</h2>

<p>In our practice, client retention is not just about business sustainability—it's about providing consistent, quality care that leads to better outcomes. Today, we're exploring evidence-based strategies to strengthen therapeutic relationships and improve retention rates.</p>

<h2>1. The Foundation: Building Trust from Session One</h2>

<p><strong>First Impressions Matter</strong></p>
<ul>
<li>Warmth and presence: Be fully present from the moment they walk in</li>
<li>Clear communication: Explain your approach, confidentiality, and what they can expect</li>
<li>Validate their decision: Acknowledge the courage it takes to seek therapy</li>
</ul>

<p><strong>Action Step:</strong> Review your intake process. Are you creating a welcoming, safe space from the very first contact?</p>

<h2>2. Setting Realistic Expectations</h2>

<p>Research shows that clients with clear expectations about therapy are 3x more likely to complete treatment.</p>

<p><strong>Key Points to Discuss Early:</strong></p>
<ul>
<li>Timeline: "Therapy is a process, not a quick fix"</li>
<li>Collaboration: "We're partners in your healing journey"</li>
<li>Progress isn't linear: "There will be ups and downs—that's normal"</li>
<li>Between-session work: "Growth happens between our meetings too"</li>
</ul>

<h2>3. The Power of Consistent Communication</h2>

<p><strong>During Sessions:</strong></p>
<ul>
<li>Regularly check in: "How are you feeling about our work together?"</li>
<li>Acknowledge progress: Celebrate even small wins</li>
<li>Address concerns immediately: If they seem hesitant, explore it</li>
</ul>

<p><strong>Between Sessions:</strong></p>
<ul>
<li>Appointment reminders: 24-48 hours before (our system handles this)</li>
<li>Follow-up on homework: Show you remember and care</li>
<li>Crisis support clarity: Ensure they know how to reach help if needed</li>
</ul>

<h2>4. Personalizing the Therapeutic Experience</h2>

<p><strong>Remember the Details:</strong></p>
<ul>
<li>Use their preferred name/pronouns consistently</li>
<li>Reference previous conversations: "Last week you mentioned..."</li>
<li>Acknowledge life events: birthdays, anniversaries, milestones</li>
<li>Adapt your approach: Some clients prefer structured, others need flexibility</li>
</ul>

<p><strong>Pro Tip:</strong> Take brief notes immediately after sessions while details are fresh.</p>

<h2>5. Addressing the "Dropout Zone" (Sessions 3-6)</h2>

<p>Statistics show most client dropouts occur between sessions 3-6. This is when initial motivation wanes but benefits haven't fully materialized yet.</p>

<p><strong>Strategies for This Critical Period:</strong></p>
<ul>
<li>Explicitly discuss the timeline: "This phase can feel challenging"</li>
<li>Provide tangible tools: Offer something they can use immediately</li>
<li>Revisit goals: "Let's review what brought you here"</li>
<li>Normalize the process: "Many people feel this way around now"</li>
</ul>

<h2>6. Scheduling Strategies That Work</h2>

<p><strong>Book the Next Appointment Before They Leave</strong></p>
<ul>
<li>Don't end with "call us to schedule"</li>
<li>Offer 2-3 specific options: "I have Tuesday at 3pm or Thursday at 5pm"</li>
<li>For weekly clients: Standing appointments create routine and commitment</li>
</ul>

<h2>7. Creating Value Beyond the Session</h2>

<p><strong>Resources That Resonate:</strong></p>
<ul>
<li>Curated articles or videos related to their specific concerns</li>
<li>Worksheets or exercises personalized to their goals</li>
<li>Breathing exercises, meditation apps, or relevant podcasts</li>
<li>Our resource library: Encourage clients to explore between sessions</li>
</ul>

<h2>8. Measuring Progress Together</h2>

<p><strong>Regular Check-ins on Therapy Itself:</strong></p>
<ul>
<li>Every 6-8 sessions: "How do you feel about our work together?"</li>
<li>Use outcome measures: Brief assessments show tangible progress</li>
<li>Adjust approach: If something isn't working, pivot openly</li>
<li>Celebrate milestones: "Remember when you first came in and..."</li>
</ul>

<h2>9. Handling the "I'm Better Now" Conversation</h2>

<p>When clients want to stop because they feel better:</p>

<p><strong>Validate and Explore:</strong></p>
<ul>
<li>"I'm so glad you're feeling better! Tell me more about what's changed."</li>
<li>"What are you doing differently now that's helping?"</li>
<li>"How confident do you feel maintaining this on your own?"</li>
</ul>

<p><strong>Offer Transition Options:</strong></p>
<ul>
<li>Spacing out sessions (bi-weekly, then monthly)</li>
<li>Creating a maintenance plan: "Let's meet quarterly for check-ins"</li>
<li>Open-door policy: "You can always come back if you need to"</li>
</ul>

<h2>10. Managing Financial Barriers</h2>

<p><strong>Proactive Approach:</strong></p>
<ul>
<li>Insurance verification before first session</li>
<li>Payment plans for out-of-pocket costs</li>
<li>Sliding scale options when possible</li>
<li>Transparency about costs from the beginning</li>
</ul>

<h2>11. The Role of Cultural Competence</h2>

<p><strong>Retention Improves When Clients Feel Understood:</strong></p>
<ul>
<li>Acknowledge cultural differences: "Help me understand your perspective"</li>
<li>Avoid assumptions: Ask rather than assume</li>
<li>Incorporate cultural values into treatment planning</li>
<li>Recognize your limitations: "I may not fully understand, but I want to learn"</li>
</ul>

<h2>12. Technology and Accessibility</h2>

<p><strong>Making Therapy Accessible:</strong></p>
<ul>
<li>Telehealth options: Some clients prefer or need virtual sessions</li>
<li>Evening/weekend availability: Accommodate work schedules</li>
<li>Efficient session reminders: Our automated system helps</li>
<li>Easy rescheduling: Make it simple to adjust appointments</li>
</ul>

<h2>13. When Retention Isn't the Goal</h2>

<p><strong>Remember: Sometimes termination is healthy and appropriate.</strong></p>

<p><strong>Good Reasons for Termination:</strong></p>
<ul>
<li>Goals have been met</li>
<li>Client needs a different level of care</li>
<li>Different therapeutic approach would be better</li>
<li>Therapeutic relationship isn't a good fit</li>
</ul>

<h2>14. Self-Care = Better Retention</h2>

<p><strong>Burnout kills retention:</strong></p>
<ul>
<li>Burned-out therapists are less present</li>
<li>Clients sense when you're not engaged</li>
<li>Quality of care declines</li>
</ul>

<p><strong>Protect Your Own Well-being:</strong></p>
<ul>
<li>Maintain boundaries around caseload</li>
<li>Use supervision and consultation</li>
<li>Take breaks between clients</li>
<li>Don't skip your own self-care practices</li>
</ul>

<h2>Key Metrics to Track</h2>

<p><strong>Consider monitoring (without obsessing):</strong></p>
<ul>
<li>Average number of sessions per client</li>
<li>Dropout rate by session number</li>
<li>Reasons for termination (when shared)</li>
<li>Client satisfaction feedback</li>
<li>Referral rate (happy clients refer others)</li>
</ul>

<h2>Team Discussion Questions</h2>

<p>For our next team meeting:</p>
<ol>
<li>Which retention strategy resonates most with your practice style?</li>
<li>What's one thing you're already doing well?</li>
<li>What's one area you'd like to strengthen?</li>
<li>How can we support each other in improving retention?</li>
</ol>

<h2>Final Thoughts</h2>

<p>Client retention isn't about "keeping people in therapy forever"—it's about creating an environment where healing can occur at its natural pace. When clients stay engaged in therapy, they're more likely to experience meaningful, lasting change.</p>

<p><strong>Remember:</strong> Every client who stays engaged is someone who's getting the help they need. That's what this work is all about.</p>

<p><em>— CHC Leadership Team</em></p>

<hr>

<p><strong>Resources:</strong></p>
<ul>
<li>APA Practice Guidelines on Client Retention</li>
<li>Our internal CE library on therapeutic alliance</li>
<li>Supervision hours available for discussing retention challenges</li>
</ul>

<p><em>Questions or want to discuss? Let's talk at our next team meeting.</em></p>`;

      const { data, error } = await supabase
        .from('newsletters')
        .insert({
          title: 'Client Retention Strategies: Building Long-Term Therapeutic Relationships',
          content: newsletterContent,
          excerpt: 'Comprehensive guide for CHC therapists on evidence-based client retention strategies—from building trust in the first session to creating lasting therapeutic relationships.',
          author_id: adminData.id,
          status: 'published',
          published_at: new Date().toISOString(),
          category: 'Clinical Practice',
          is_pinned: true
        })
        .select()
        .single();

      if (error) throw error;

      toast.success('Newsletter published successfully!');
      setTimeout(() => window.location.reload(), 1000);
    } catch (error: any) {
      console.error('Error publishing newsletter:', error);
      toast.error('Failed to publish newsletter: ' + error.message);
    } finally {
      setPublishing(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Publish Client Retention Newsletter</h3>
      <p className="text-muted-foreground mb-4">
        Click the button below to publish the comprehensive newsletter on client retention techniques for your therapy team.
      </p>
      <Button 
        onClick={publishClientRetentionNewsletter}
        disabled={publishing}
        size="lg"
      >
        {publishing ? 'Publishing...' : 'Publish Newsletter'}
      </Button>
    </Card>
  );
};

export default NewsletterManager;
