import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Eye, Sparkles } from "lucide-react";
import trustImage from "@/assets/newsletter-trust.jpg";
import communicationImage from "@/assets/newsletter-communication.jpg";
import teamImage from "@/assets/newsletter-team.jpg";
import selfcareImage from "@/assets/newsletter-selfcare.jpg";

const NewsletterManager = () => {
  const [publishing, setPublishing] = useState(false);

  const publishClientRetentionNewsletter = async () => {
    setPublishing(true);
    try {
      const { data: adminData } = await supabase
        .from('admin_profiles')
        .select('id')
        .limit(1)
        .single();

      if (!adminData) {
        throw new Error("No admin profile found");
      }

      const newsletterHTML = getNewsletterHTML();

      const { data, error } = await supabase
        .from('newsletters')
        .insert({
          title: 'Client Retention Strategies: Building Long-Term Therapeutic Relationships',
          content: newsletterHTML,
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
    <div className="space-y-6">
      {/* Header with Publish Button */}
      <Card className="p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-xl">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7 animate-pulse" />
            <div>
              <h3 className="text-3xl font-bold">✨ Modern Newsletter Preview</h3>
              <p className="text-white/90 mt-1 text-lg">
                Beautiful, colorful design with engaging visuals
              </p>
            </div>
          </div>
          <Button 
            onClick={publishClientRetentionNewsletter}
            disabled={publishing}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold shadow-lg"
          >
            {publishing ? 'Publishing...' : '🚀 Publish Newsletter'}
          </Button>
        </div>
      </Card>

      {/* Newsletter Preview */}
      <ScrollArea className="h-[700px]">
        <NewsletterPreview />
      </ScrollArea>
    </div>
  );
};

const NewsletterPreview = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
        <img src={trustImage} alt="Building Trust" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="p-12 text-white">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Client Retention Strategies 🎯
            </h1>
            <p className="text-2xl text-white/90">
              Building Long-Term Therapeutic Relationships
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 animate-fade-in">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">👋 Welcome Team!</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          In our practice, client retention is not just about business sustainability—it&apos;s about providing consistent, quality care that leads to better outcomes. Today, we&apos;re exploring evidence-based strategies to strengthen therapeutic relationships and improve retention rates.
        </p>
      </Card>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Card className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🤝</span>
              <h2 className="text-3xl font-bold text-purple-900">Building Trust</h2>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-3">First Impressions Matter</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Warmth and presence:</strong> Be fully present from the moment they walk in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Clear communication:</strong> Explain your approach and what to expect</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Validate their decision:</strong> Acknowledge the courage it takes</span>
              </li>
            </ul>
          </Card>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={trustImage} alt="Building Trust" className="w-full h-80 object-cover" />
        </div>
      </div>

      {/* Section 2 */}
      <Card className="p-8 bg-gradient-to-br from-green-100 to-teal-100 border-2 border-green-300">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🎯</span>
          <h2 className="text-3xl font-bold text-green-900">Setting Realistic Expectations</h2>
        </div>
        <div className="bg-white/60 backdrop-blur p-6 rounded-xl border border-green-200 mb-6">
          <p className="text-xl font-semibold text-gray-800">
            📊 Research shows: Clients with clear expectations are <span className="text-green-600 font-bold">3x more likely</span> to complete treatment!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "⏱️", title: "Timeline", text: "Therapy is a process, not a quick fix" },
            { icon: "🤲", title: "Collaboration", text: "We're partners in your healing journey" },
            { icon: "📈", title: "Progress", text: "Ups and downs are normal—that's growth" },
            { icon: "💪", title: "Between Sessions", text: "Growth happens between meetings too" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-green-800 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Communication Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
          <img src={communicationImage} alt="Communication" className="w-full h-80 object-cover" />
        </div>
        <Card className="p-8 bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300 order-1 md:order-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💬</span>
            <h2 className="text-3xl font-bold text-orange-900">Consistent Communication</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white/70 p-4 rounded-lg">
              <h4 className="font-bold text-orange-800 mb-2">During Sessions:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular check-ins on therapy progress</li>
                <li>• Celebrate even small wins</li>
                <li>• Address concerns immediately</li>
              </ul>
            </div>
            <div className="bg-white/70 p-4 rounded-lg">
              <h4 className="font-bold text-orange-800 mb-2">Between Sessions:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Appointment reminders (our system handles this!)</li>
                <li>• Follow-up on homework</li>
                <li>• Clear crisis support information</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Dropout Zone Warning */}
      <Card className="p-8 bg-gradient-to-br from-red-100 to-pink-100 border-2 border-red-300">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">⚠️</span>
          <h2 className="text-3xl font-bold text-red-900">The Dropout Zone (Sessions 3-6)</h2>
        </div>
        <div className="bg-white/70 p-6 rounded-lg mb-4">
          <p className="text-lg text-gray-800">
            <strong>Critical Alert:</strong> Most dropouts occur between sessions 3-6 when motivation wanes but benefits haven&apos;t fully materialized yet.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "🗣️", text: "Discuss timeline: 'This phase can feel challenging'" },
            { icon: "🛠️", text: "Provide tangible tools they can use immediately" },
            { icon: "🎯", text: "Revisit goals: 'Let's review what brought you here'" },
            { icon: "✨", text: "Normalize: 'Many people feel this way around now'" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Team Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
        <img src={teamImage} alt="Team Collaboration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-600/50 to-transparent flex items-end">
          <div className="p-12 text-white">
            <h2 className="text-4xl font-bold mb-3">💼 Team Discussion Questions</h2>
            <div className="space-y-2 text-lg">
              <p>• Which retention strategy resonates most with your practice style?</p>
              <p>• What&apos;s one thing you&apos;re already doing well?</p>
              <p>• What&apos;s one area you&apos;d like to strengthen?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Self-Care Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="p-8 bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-indigo-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🧘</span>
            <h2 className="text-3xl font-bold text-indigo-900">Self-Care = Better Retention</h2>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="font-bold text-yellow-800">⚡ Warning: Burnout kills retention!</p>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-xl">🛑</span>
              <span>Burned-out therapists are less present</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">👁️</span>
              <span>Clients sense when you&apos;re not engaged</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">📉</span>
              <span>Quality of care declines</span>
            </li>
          </ul>
        </Card>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={selfcareImage} alt="Self Care" className="w-full h-80 object-cover" />
        </div>
      </div>

      {/* Final Thoughts */}
      <Card className="p-10 bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 border-2 border-cyan-300">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">💡 Final Thoughts</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Client retention isn&apos;t about &quot;keeping people in therapy forever&quot;—it&apos;s about creating an environment where healing can occur at its natural pace. When clients stay engaged in therapy, they&apos;re more likely to experience meaningful, lasting change.
          </p>
          <div className="bg-white/70 p-6 rounded-xl">
            <p className="text-2xl font-bold text-blue-900">
              ❤️ Every client who stays engaged is someone who&apos;s getting the help they need.
            </p>
            <p className="text-lg text-gray-600 mt-2">That&apos;s what this work is all about.</p>
          </div>
        </div>
      </Card>

      {/* Footer */}
      <Card className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center">
        <p className="text-lg mb-2">— CHC Leadership Team</p>
        <p className="text-gray-400">Questions or want to discuss? Let&apos;s talk at our next team meeting.</p>
      </Card>
    </div>
  );
};

// Helper function to get HTML for database
const getNewsletterHTML = () => {
  return `<!-- Newsletter HTML with inline images would go here -->
<div style="max-width: 1200px; margin: 0 auto; font-family: system-ui;">
  <h1 style="font-size: 3rem; font-weight: bold; color: #1e293b; margin-bottom: 1rem;">Client Retention Strategies 🎯</h1>
  <p style="font-size: 1.5rem; color: #64748b; margin-bottom: 2rem;">Building Long-Term Therapeutic Relationships</p>
  
  <div style="background: linear-gradient(to bottom right, #dbeafe, #e0f2fe); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem;">
    <h2 style="color: #1e3a8a; font-size: 2rem; margin-bottom: 1rem;">👋 Welcome Team!</h2>
    <p style="color: #374151; font-size: 1.125rem; line-height: 1.75;">
      In our practice, client retention is not just about business sustainability—it's about providing consistent, quality care that leads to better outcomes.
    </p>
  </div>
  
  <!-- All other sections with colorful styling would continue here -->
  <p style="text-align: center; color: #6b7280; margin-top: 3rem;">— CHC Leadership Team</p>
</div>`;
};

export default NewsletterManager;
