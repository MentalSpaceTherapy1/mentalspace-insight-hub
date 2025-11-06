import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Sparkles, Wand2, FileText, Users, Lightbulb, Heart } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import trustImage from "@/assets/newsletter-trust.jpg";
import communicationImage from "@/assets/newsletter-communication.jpg";
import teamImage from "@/assets/newsletter-team.jpg";
import selfcareImage from "@/assets/newsletter-selfcare.jpg";

interface NewsletterTemplate {
  id: string;
  name: string;
  icon: any;
  description: string;
  suggestedTopics: string[];
}

const templates: NewsletterTemplate[] = [
  {
    id: "clinical",
    name: "Clinical Updates",
    icon: FileText,
    description: "Share clinical best practices, new therapeutic approaches, and evidence-based techniques",
    suggestedTopics: ["Evidence-Based Therapy Techniques", "Clinical Documentation Best Practices", "New Treatment Modalities", "Case Study Reviews"]
  },
  {
    id: "team",
    name: "Team Announcements",
    icon: Users,
    description: "Internal communications, team achievements, policy updates, and organizational news",
    suggestedTopics: ["Team Building Activities", "Policy Updates", "Staff Achievements", "Internal Process Changes"]
  },
  {
    id: "research",
    name: "Research Highlights",
    icon: Lightbulb,
    description: "Latest research findings, clinical studies, and industry insights",
    suggestedTopics: ["Recent Mental Health Research", "Clinical Trial Results", "Industry Trends", "Academic Publications"]
  },
  {
    id: "wellness",
    name: "Wellness Tips",
    icon: Heart,
    description: "Self-care strategies, burnout prevention, and therapist wellness resources",
    suggestedTopics: ["Therapist Self-Care", "Preventing Burnout", "Work-Life Balance", "Mindfulness for Clinicians"]
  }
];

const NewsletterManager = () => {
  const [publishing, setPublishing] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("professional");
  const [targetAudience, setTargetAudience] = useState("therapists");
  const [generatedContent, setGeneratedContent] = useState<{title: string, content: string, excerpt: string} | null>(null);

  const generateNewsletter = async () => {
    if (!topic || !selectedTemplate) {
      toast.error("Please select a template and enter a topic");
      return;
    }

    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-newsletter', {
        body: {
          topic,
          tone,
          targetAudience,
          template: templates.find(t => t.id === selectedTemplate)?.name || "General"
        }
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      setGeneratedContent(data);
      toast.success('Newsletter generated successfully!');
    } catch (error: any) {
      console.error('Error generating newsletter:', error);
      toast.error('Failed to generate newsletter: ' + error.message);
    } finally {
      setGenerating(false);
    }
  };

  const publishGeneratedNewsletter = async () => {
    if (!generatedContent) {
      toast.error("No content to publish");
      return;
    }

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

      const { data, error } = await supabase
        .from('newsletters')
        .insert({
          title: generatedContent.title,
          content: generatedContent.content,
          excerpt: generatedContent.excerpt,
          author_id: adminData.id,
          status: 'published',
          published_at: new Date().toISOString(),
          category: templates.find(t => t.id === selectedTemplate)?.name || 'Staff Updates',
          is_pinned: false
        })
        .select()
        .single();

      if (error) throw error;

      toast.success('Newsletter published successfully!');
      setGeneratedContent(null);
      setTopic("");
      setTimeout(() => window.location.reload(), 1000);
    } catch (error: any) {
      console.error('Error publishing newsletter:', error);
      toast.error('Failed to publish newsletter: ' + error.message);
    } finally {
      setPublishing(false);
    }
  };

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
      <Tabs defaultValue="generate" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="generate">
            <Wand2 className="h-4 w-4 mr-2" />
            AI Generator
          </TabsTrigger>
          <TabsTrigger value="preview">
            <FileText className="h-4 w-4 mr-2" />
            Sample Preview
          </TabsTrigger>
        </TabsList>

        {/* AI Generator Tab */}
        <TabsContent value="generate" className="space-y-6">
          <Card className="p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <Sparkles className="h-7 w-7 animate-pulse" />
              <div>
                <h3 className="text-3xl font-bold">AI Newsletter Generator</h3>
                <p className="text-white/90 mt-1 text-lg">
                  Create professional newsletters instantly with AI
                </p>
              </div>
            </div>
          </Card>

          {/* Template Library */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">📚 Template Library</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {templates.map((template) => (
                <Card 
                  key={template.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
                    selectedTemplate === template.id 
                      ? 'ring-2 ring-purple-600 bg-purple-50' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="flex items-start gap-3">
                    <template.icon className={`h-6 w-6 ${
                      selectedTemplate === template.id ? 'text-purple-600' : 'text-gray-600'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{template.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {template.suggestedTopics.slice(0, 2).map((topic, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-purple-200"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTopic(topic);
                              setSelectedTemplate(template.id);
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Generation Form */}
            {selectedTemplate && (
              <div className="space-y-4 border-t pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="topic">Newsletter Topic</Label>
                    <Textarea
                      id="topic"
                      placeholder="E.g., Managing therapist burnout during high-caseload periods"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tone">Tone</Label>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger id="tone">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="empathetic">Empathetic</SelectItem>
                          <SelectItem value="informative">Informative</SelectItem>
                          <SelectItem value="motivational">Motivational</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="audience">Target Audience</Label>
                      <Select value={targetAudience} onValueChange={setTargetAudience}>
                        <SelectTrigger id="audience">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="therapists">Therapists</SelectItem>
                          <SelectItem value="clinical-staff">Clinical Staff</SelectItem>
                          <SelectItem value="administrative-team">Administrative Team</SelectItem>
                          <SelectItem value="all-staff">All Staff</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={generateNewsletter}
                  disabled={generating || !topic}
                  size="lg"
                  className="w-full"
                >
                  {generating ? (
                    <>
                      <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-4 w-4 mr-2" />
                      Generate Newsletter
                    </>
                  )}
                </Button>
              </div>
            )}
          </Card>

          {/* Generated Content Preview */}
          {generatedContent && (
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Generated Newsletter</h3>
                </div>
                <Button 
                  onClick={publishGeneratedNewsletter}
                  disabled={publishing}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {publishing ? 'Publishing...' : '🚀 Publish Now'}
                </Button>
              </div>
              <ScrollArea className="h-[500px] rounded-lg bg-white p-6">
                <h2 className="text-2xl font-bold mb-2">{generatedContent.title}</h2>
                <p className="text-gray-600 mb-4 italic">{generatedContent.excerpt}</p>
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: generatedContent.content }}
                />
              </ScrollArea>
            </Card>
          )}
        </TabsContent>

        {/* Sample Preview Tab */}
        <TabsContent value="preview" className="space-y-6">
          <Card className="p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="h-7 w-7 animate-pulse" />
                <div>
                  <h3 className="text-3xl font-bold">Sample Newsletter Preview</h3>
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
                {publishing ? 'Publishing...' : '🚀 Publish Sample'}
              </Button>
            </div>
          </Card>

          <ScrollArea className="h-[700px]">
            <NewsletterPreview />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const NewsletterPreview = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
        <img src={trustImage} alt="Building Trust" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end">
          <div className="p-12">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}>
              Client Retention Strategies 🎯
            </h1>
            <p className="text-2xl text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
              Building Long-Term Therapeutic Relationships
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 animate-fade-in">
        <h2 className="text-3xl font-bold text-blue-950 mb-4">👋 Welcome Team!</h2>
        <p className="text-lg text-gray-800 leading-relaxed font-medium">
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
            <h3 className="text-xl font-semibold text-purple-900 mb-3">First Impressions Matter</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1 font-bold">✓</span>
                <span className="font-medium"><strong className="text-gray-900">Warmth and presence:</strong> Be fully present from the moment they walk in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1 font-bold">✓</span>
                <span className="font-medium"><strong className="text-gray-900">Clear communication:</strong> Explain your approach and what to expect</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1 font-bold">✓</span>
                <span className="font-medium"><strong className="text-gray-900">Validate their decision:</strong> Acknowledge the courage it takes</span>
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
        <div className="bg-white/80 backdrop-blur p-6 rounded-xl border-2 border-green-300 mb-6">
          <p className="text-xl font-bold text-gray-900">
            📊 Research shows: Clients with clear expectations are <span className="text-green-700 font-extrabold">3x more likely</span> to complete treatment!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "⏱️", title: "Timeline", text: "Therapy is a process, not a quick fix" },
            { icon: "🤲", title: "Collaboration", text: "We're partners in your healing journey" },
            { icon: "📈", title: "Progress", text: "Ups and downs are normal—that's growth" },
            { icon: "💪", title: "Between Sessions", text: "Growth happens between meetings too" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-green-200">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-green-900 mb-1">{item.title}</h4>
              <p className="text-gray-800 text-sm font-medium">{item.text}</p>
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
            <div className="bg-white/90 p-4 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-900 mb-2">During Sessions:</h4>
              <ul className="space-y-2 text-gray-800 font-medium">
                <li>• Regular check-ins on therapy progress</li>
                <li>• Celebrate even small wins</li>
                <li>• Address concerns immediately</li>
              </ul>
            </div>
            <div className="bg-white/90 p-4 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-900 mb-2">Between Sessions:</h4>
              <ul className="space-y-2 text-gray-800 font-medium">
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
        <div className="bg-white/90 p-6 rounded-lg mb-4 border-2 border-red-300">
          <p className="text-lg text-gray-900 font-semibold">
            <strong className="text-red-900">Critical Alert:</strong> Most dropouts occur between sessions 3-6 when motivation wanes but benefits haven&apos;t fully materialized yet.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "🗣️", text: "Discuss timeline: 'This phase can feel challenging'" },
            { icon: "🛠️", text: "Provide tangible tools they can use immediately" },
            { icon: "🎯", text: "Revisit goals: 'Let's review what brought you here'" },
            { icon: "✨", text: "Normalize: 'Many people feel this way around now'" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-lg flex items-center gap-3 border border-red-200">
              <span className="text-3xl">{item.icon}</span>
              <p className="text-gray-800 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Team Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
        <img src={teamImage} alt="Team Collaboration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end">
          <div className="p-12">
            <h2 className="text-4xl font-bold mb-4 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}>
              💼 Team Discussion Questions
            </h2>
            <div className="space-y-3 text-lg">
              <p className="text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
                • Which retention strategy resonates most with your practice style?
              </p>
              <p className="text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
                • What&apos;s one thing you&apos;re already doing well?
              </p>
              <p className="text-white" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
                • What&apos;s one area you&apos;d like to strengthen?
              </p>
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
          <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 mb-4">
            <p className="font-extrabold text-yellow-900 text-lg">⚡ Warning: Burnout kills retention!</p>
          </div>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-2">
              <span className="text-xl">🛑</span>
              <span className="font-medium">Burned-out therapists are less present</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">👁️</span>
              <span className="font-medium">Clients sense when you&apos;re not engaged</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl">📉</span>
              <span className="font-medium">Quality of care declines</span>
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
          <h2 className="text-4xl font-bold text-gray-950 mb-4">💡 Final Thoughts</h2>
          <p className="text-xl text-gray-900 leading-relaxed mb-6 font-medium">
            Client retention isn&apos;t about &quot;keeping people in therapy forever&quot;—it&apos;s about creating an environment where healing can occur at its natural pace. When clients stay engaged in therapy, they&apos;re more likely to experience meaningful, lasting change.
          </p>
          <div className="bg-white/90 p-6 rounded-xl border-2 border-blue-200">
            <p className="text-2xl font-bold text-blue-950">
              ❤️ Every client who stays engaged is someone who&apos;s getting the help they need.
            </p>
            <p className="text-lg text-gray-800 mt-2 font-semibold">That&apos;s what this work is all about.</p>
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
