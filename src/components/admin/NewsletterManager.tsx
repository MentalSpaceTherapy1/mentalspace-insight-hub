import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Sparkles, Wand2, FileText, Users, Lightbulb, Heart, Calendar, Mail, BarChart3, Send, List, ExternalLink, Pin, Eye } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import NewsletterAnalyticsDashboard from "./NewsletterAnalyticsDashboard";
import SubscriberManagement from "./SubscriberManagement";
import trustImage from "@/assets/newsletter-trust.jpg";
import communicationImage from "@/assets/newsletter-communication.jpg";
import teamImage from "@/assets/newsletter-team.jpg";
import selfcareImage from "@/assets/newsletter-selfcare.jpg";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

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

interface Newsletter {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  status: string;
  category: string | null;
  is_pinned: boolean;
  published_at: string | null;
  created_at: string;
}

const NewsletterManager = () => {
  const { profile } = useAdminAuth();
  const [publishing, setPublishing] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("professional");
  const [targetAudience, setTargetAudience] = useState("therapists");
  const [generatedContent, setGeneratedContent] = useState<{title: string, content: string, excerpt: string} | null>(null);
  const [scheduledDate, setScheduledDate] = useState("");
  const [sendEmail, setSendEmail] = useState(true);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [addingSubscriber, setAddingSubscriber] = useState(false);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loadingNewsletters, setLoadingNewsletters] = useState(false);
  const [viewingNewsletter, setViewingNewsletter] = useState<Newsletter | null>(null);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    setLoadingNewsletters(true);
    try {
      const { data, error } = await supabase
        .from('newsletters')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setNewsletters(data || []);
    } catch (error: any) {
      console.error('Error fetching newsletters:', error);
      toast.error('Failed to load newsletters');
    } finally {
      setLoadingNewsletters(false);
    }
  };

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

  const publishGeneratedNewsletter = async (schedule: boolean = false) => {
    if (!generatedContent) {
      toast.error("No content to publish");
      return;
    }

    if (schedule && !scheduledDate) {
      toast.error("Please select a scheduled date");
      return;
    }

    if (!profile) {
      toast.error("Admin profile not found. Please refresh and try again.");
      return;
    }

    setPublishing(true);
    try {

      const isScheduled = schedule && scheduledDate;
      const status = isScheduled ? 'scheduled' : 'published';
      const publishedAt = isScheduled ? null : new Date().toISOString();

      const newsletterData: any = {
        title: generatedContent.title,
        content: generatedContent.content,
        excerpt: generatedContent.excerpt,
        author_id: profile.id,
        status,
        category: templates.find(t => t.id === selectedTemplate)?.name || 'Staff Updates',
        is_pinned: false
      };

      if (publishedAt) {
        newsletterData.published_at = publishedAt;
      }
      if (isScheduled && scheduledDate) {
        newsletterData.scheduled_for = scheduledDate;
      }

      const { data, error } = await supabase
        .from('newsletters')
        .insert(newsletterData)
        .select()
        .single();

      if (error) throw error;

      // Initialize analytics if published now
      if (!isScheduled) {
        await supabase.from('newsletter_analytics').insert({
          newsletter_id: data.id,
          views: 0,
          unique_views: 0,
          total_engagement_time: 0,
          average_engagement_time: 0,
        });
      }

      // Send emails if option is selected and published now
      if (sendEmail && !isScheduled) {
        try {
          const { error: emailError } = await supabase.functions.invoke('send-newsletter-emails', {
            body: { newsletterId: data.id }
          });
          
          if (emailError) throw emailError;
          
          toast.success('Newsletter published and emails sent to subscribers!');
        } catch (emailError: any) {
          console.error('Email sending error:', emailError);
          toast.warning('Newsletter published but email sending failed. Check edge function logs.');
        }
      } else if (isScheduled) {
        toast.success(`Newsletter scheduled for ${new Date(scheduledDate).toLocaleDateString()}`);
      } else {
        toast.success('Newsletter published successfully!');
      }

      setGeneratedContent(null);
      setTopic("");
      setScheduledDate("");
      fetchNewsletters(); // Refresh the list
    } catch (error: any) {
      console.error('Error publishing newsletter:', error);
      toast.error('Failed to publish newsletter: ' + error.message);
    } finally {
      setPublishing(false);
    }
  };

  const addSubscriber = async () => {
    if (!subscriberEmail) {
      toast.error("Please enter an email address");
      return;
    }

    setAddingSubscriber(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: subscriberEmail, is_active: true });

      if (error) throw error;

      toast.success('Subscriber added successfully!');
      setSubscriberEmail("");
    } catch (error: any) {
      console.error('Error adding subscriber:', error);
      toast.error('Failed to add subscriber: ' + error.message);
    } finally {
      setAddingSubscriber(false);
    }
  };

  const handleResend = async (newsletterId: string) => {
    setResending(true);
    try {
      const { error } = await supabase.functions.invoke('send-newsletter-emails', {
        body: { newsletterId }
      });

      if (error) throw error;
      
      toast.success('Newsletter resent successfully to all subscribers!');
    } catch (error) {
      console.error('Error resending newsletter:', error);
      toast.error('Failed to resend newsletter. Please try again.');
    } finally {
      setResending(false);
    }
  };

  const publishClientRetentionNewsletter = async () => {
    setPublishing(true);
    try {
      const newsletterData = {
        title: "Client Retention Strategies - Building Long-Term Therapeutic Relationships",
        excerpt: "Essential strategies for maintaining strong client relationships and improving retention rates",
        content: `
          <h2>🎯 Understanding Client Retention</h2>
          <p>Client retention is a critical component of a successful therapy practice. Research shows that clients who remain in therapy for longer periods achieve better outcomes and contribute to practice stability.</p>

          <h3>Key Retention Strategies:</h3>
          <ul>
            <li><strong>Consistent Communication:</strong> Regular check-ins between sessions via secure messaging</li>
            <li><strong>Progress Tracking:</strong> Help clients visualize their growth and achievements</li>
            <li><strong>Personalized Care Plans:</strong> Tailored approaches that evolve with client needs</li>
            <li><strong>Flexible Scheduling:</strong> Accommodate client schedules to reduce barriers</li>
          </ul>

          <h2>💡 Building Therapeutic Alliance</h2>
          <p>The therapeutic relationship is the strongest predictor of positive outcomes. Focus on:</p>
          <ul>
            <li>Active listening and validation</li>
            <li>Cultural competence and sensitivity</li>
            <li>Transparent communication about treatment progress</li>
            <li>Collaborative goal-setting</li>
          </ul>

          <h2>📊 Measuring Success</h2>
          <p>Track these metrics to understand your retention:</p>
          <ul>
            <li>Average client tenure</li>
            <li>Session attendance rates</li>
            <li>Client satisfaction scores</li>
            <li>Referral rates</li>
          </ul>
        `,
        category: "Clinical Best Practices",
        status: 'published' as const,
        is_pinned: false,
        published_at: new Date().toISOString(),
        author_id: profile?.user_id || ''
      };

      const { error } = await supabase
        .from('newsletters')
        .insert([newsletterData]);

      if (error) throw error;

      toast.success('Newsletter published successfully!');
      fetchNewsletters(); // Refresh the list
    } catch (error: any) {
      console.error('Error publishing newsletter:', error);
      toast.error('Failed to publish newsletter: ' + error.message);
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="manage" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="manage">
            <List className="h-4 w-4 mr-2" />
            Manage
          </TabsTrigger>
          <TabsTrigger value="generate">
            <Wand2 className="h-4 w-4 mr-2" />
            AI Generator
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="subscribers">
            <Mail className="h-4 w-4 mr-2" />
            Subscribers
          </TabsTrigger>
          <TabsTrigger value="preview">
            <FileText className="h-4 w-4 mr-2" />
            Sample Preview
          </TabsTrigger>
        </TabsList>

        {/* Manage Newsletters Tab */}
        <TabsContent value="manage" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">All Newsletters</h3>
              <Button onClick={fetchNewsletters} variant="outline" size="sm">
                Refresh
              </Button>
            </div>

            {loadingNewsletters ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading newsletters...</p>
              </div>
            ) : newsletters.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No newsletters found</p>
              </div>
            ) : (
              <div className="space-y-4">
                {newsletters.map((newsletter) => (
                  <Card 
                    key={newsletter.id}
                    className="p-4 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {newsletter.is_pinned && (
                            <Pin className="h-4 w-4 text-purple-600" />
                          )}
                          <h4 className="font-bold text-lg">{newsletter.title}</h4>
                        </div>
                        
                        {newsletter.excerpt && (
                          <p className="text-gray-600 text-sm mb-3">{newsletter.excerpt}</p>
                        )}
                        
                        <div className="flex flex-wrap gap-2 items-center text-sm text-gray-500">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            newsletter.status === 'published' 
                              ? 'bg-green-100 text-green-700' 
                              : newsletter.status === 'scheduled'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {newsletter.status.toUpperCase()}
                          </span>
                          
                          {newsletter.category && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                              {newsletter.category}
                            </span>
                          )}
                          
                          {newsletter.published_at && (
                            <span>
                              Published: {new Date(newsletter.published_at).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {newsletter.status === 'published' && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                console.log('View clicked, newsletter:', newsletter.title);
                                setViewingNewsletter(newsletter);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleResend(newsletter.id)}
                              disabled={resending}
                              className="bg-green-50 hover:bg-green-100 border-green-300"
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              {resending ? 'Sending...' : 'Resend'}
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </Card>

          {/* Newsletter Viewer Modal */}
          {viewingNewsletter && (
            <Card className="p-6 mt-6 bg-white shadow-2xl border-4 border-purple-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-purple-600">📧 Newsletter Preview</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleResend(viewingNewsletter.id)}
                    disabled={resending}
                    className="bg-green-50 hover:bg-green-100 border-green-300"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {resending ? 'Sending...' : 'Resend to All'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewingNewsletter(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    {viewingNewsletter.category && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {viewingNewsletter.category}
                      </span>
                    )}
                    {viewingNewsletter.is_pinned && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium flex items-center gap-1">
                        <Pin className="h-3 w-3" />
                        Pinned
                      </span>
                    )}
                    <span className="text-sm text-gray-500">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {new Date(viewingNewsletter.published_at || '').toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{viewingNewsletter.title}</h2>
                  
                  {viewingNewsletter.excerpt && (
                    <p className="text-lg text-gray-600 italic bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                      {viewingNewsletter.excerpt}
                    </p>
                  )}
                </div>
                
                <div 
                  className="newsletter-content prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: viewingNewsletter.content }}
                />
              </div>
            </Card>
          )}
        </TabsContent>

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
              </div>
              
              {/* Publish Options */}
              <div className="mb-4 space-y-4 bg-white p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="sendEmail"
                      checked={sendEmail}
                      onChange={(e) => setSendEmail(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="sendEmail" className="cursor-pointer">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Send to subscribers
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="scheduleDate">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Schedule for later (optional)
                    </Label>
                    <Input
                      id="scheduleDate"
                      type="datetime-local"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      min={new Date().toISOString().slice(0, 16)}
                    />
                  </div>
                  <div className="flex items-end gap-2">
                    <Button 
                      onClick={() => publishGeneratedNewsletter(false)}
                      disabled={publishing}
                      className="bg-green-600 hover:bg-green-700 flex-1"
                    >
                      {publishing ? 'Publishing...' : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Publish Now
                        </>
                      )}
                    </Button>
                    {scheduledDate && (
                      <Button 
                        onClick={() => publishGeneratedNewsletter(true)}
                        disabled={publishing}
                        variant="outline"
                        className="flex-1"
                      >
                        {publishing ? 'Scheduling...' : (
                          <>
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
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

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <Card className="p-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-7 w-7 animate-pulse" />
              <div>
                <h3 className="text-3xl font-bold">Newsletter Analytics</h3>
                <p className="text-white/90 mt-1 text-lg">
                  Track performance and engagement metrics
                </p>
              </div>
            </div>
          </Card>
          <NewsletterAnalyticsDashboard />
        </TabsContent>

        {/* Subscribers Tab */}
        <TabsContent value="subscribers" className="space-y-6">
          <Card className="p-6 bg-gradient-to-r from-green-600 via-teal-500 to-cyan-500 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <Mail className="h-7 w-7 animate-pulse" />
              <div>
                <h3 className="text-3xl font-bold">Email Subscribers</h3>
                <p className="text-white/90 mt-1 text-lg">
                  Manage your newsletter subscriber list
                </p>
              </div>
            </div>
          </Card>

          <SubscriberManagement />
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

// Helper function to get HTML for database - matches the rich preview exactly
const getNewsletterHTML = () => {
  return `<div style="max-width: 1200px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif;">
  
  <!-- Welcome Section -->
  <div style="background: linear-gradient(to bottom right, #dbeafe, #e0f2fe); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border: 2px solid #bfdbfe;">
    <h2 style="color: #1e3a8a; font-size: 2rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
      <span style="font-size: 2.5rem;">👋</span> Welcome Team!
    </h2>
    <p style="color: #374151; font-size: 1.125rem; line-height: 1.75; margin: 0;">
      In our practice, client retention is not just about business sustainability—it's about providing consistent, quality care that leads to better outcomes. Today, we're exploring evidence-based strategies to strengthen therapeutic relationships and improve retention rates.
    </p>
  </div>

  <!-- Trust Section -->
  <div style="position: relative; height: 400px; border-radius: 1rem; overflow: hidden; margin-bottom: 2rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
    <img src="https://chctherapy.com/newsletter/newsletter-trust.jpg" alt="Building Trust" style="width: 100%; height: 100%; object-fit: cover;" />
    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, transparent 100%); display: flex; align-items: flex-end;">
      <div style="padding: 3rem;">
        <h2 style="color: white; font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; text-shadow: 2px 2px 8px rgba(0,0,0,0.9);">
          🤝 Building Trust from Session One
        </h2>
        <p style="color: white; font-size: 1.25rem; line-height: 1.75; text-shadow: 2px 2px 6px rgba(0,0,0,0.9); margin: 0;">
          The foundation of retention is built in the first few sessions. Research shows that the therapeutic alliance is one of the strongest predictors of client retention and positive outcomes.
        </p>
      </div>
    </div>
  </div>

  <!-- First Impressions Card -->
  <div style="background: linear-gradient(to bottom right, #f3e8ff, #e9d5ff); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border: 2px solid #d8b4fe;">
    <h3 style="color: #6b21a8; font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem;">First Impressions Matter</h3>
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #a855f7;">
        <p style="color: #374151; font-size: 1.125rem; margin: 0;">
          <strong style="color: #6b21a8;">Warmth and presence:</strong> Be fully present from the moment they walk in
        </p>
      </div>
      <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #a855f7;">
        <p style="color: #374151; font-size: 1.125rem; margin: 0;">
          <strong style="color: #6b21a8;">Clear communication:</strong> Explain your approach and what to expect
        </p>
      </div>
      <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #a855f7;">
        <p style="color: #374151; font-size: 1.125rem; margin: 0;">
          <strong style="color: #6b21a8;">Active listening:</strong> Make them feel heard and understood
        </p>
      </div>
    </div>
  </div>

  <!-- Communication Section -->
  <div style="position: relative; height: 400px; border-radius: 1rem; overflow: hidden; margin-bottom: 2rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
    <img src="https://chctherapy.com/newsletter/newsletter-communication.jpg" alt="Communication" style="width: 100%; height: 100%; object-fit: cover;" />
    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, transparent 100%); display: flex; align-items: flex-end;">
      <div style="padding: 3rem;">
        <h2 style="color: white; font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; text-shadow: 2px 2px 8px rgba(0,0,0,0.9);">
          📞 Consistent Communication
        </h2>
        <p style="color: white; font-size: 1.25rem; line-height: 1.75; text-shadow: 2px 2px 6px rgba(0,0,0,0.9); margin: 0;">
          Clear, consistent communication helps clients feel supported between sessions and reduces no-shows.
        </p>
      </div>
    </div>
  </div>

  <!-- Mid-Treatment Drop-off -->
  <div style="background: linear-gradient(to bottom right, #fee2e2, #fecaca); padding: 2rem; border-radius: 1rem; margin-bottom: 2rem; border: 2px solid #fca5a5;">
    <h3 style="color: #991b1b; font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem;">⚠️ Watch for Mid-Treatment Drop-off</h3>
    <div style="background: #fef2f2; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1rem;">
      <p style="color: #7f1d1d; font-size: 1.25rem; font-weight: bold; margin: 0;">
        <span style="font-size: 1.5rem;">⚡</span> Critical period: Sessions 6-12
      </p>
    </div>
    <div style="display: grid; gap: 1rem;">
      <div style="background: white; padding: 1rem; border-radius: 0.5rem; display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 1.5rem;">🎯</span>
        <p style="color: #374151; font-size: 1.125rem; font-weight: 500; margin: 0;">Revisit goals: "Let's review what brought you here"</p>
      </div>
      <div style="background: white; padding: 1rem; border-radius: 0.5rem; display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 1.5rem;">✨</span>
        <p style="color: #374151; font-size: 1.125rem; font-weight: 500; margin: 0;">Normalize: "Many people feel this way around now"</p>
      </div>
    </div>
  </div>

  <!-- Team Section -->
  <div style="position: relative; height: 400px; border-radius: 1rem; overflow: hidden; margin-bottom: 2rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
    <img src="https://chctherapy.com/newsletter/newsletter-team.jpg" alt="Team Collaboration" style="width: 100%; height: 100%; object-fit: cover;" />
    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 60%, transparent 100%); display: flex; align-items: flex-end;">
      <div style="padding: 3rem;">
        <h2 style="color: white; font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; text-shadow: 2px 2px 8px rgba(0,0,0,0.9);">
          💼 Team Discussion Questions
        </h2>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <p style="color: white; font-size: 1.125rem; text-shadow: 2px 2px 6px rgba(0,0,0,0.9); margin: 0;">
            • Which retention strategy resonates most with your practice style?
          </p>
          <p style="color: white; font-size: 1.125rem; text-shadow: 2px 2px 6px rgba(0,0,0,0.9); margin: 0;">
            • What's one thing you're already doing well?
          </p>
          <p style="color: white; font-size: 1.125rem; text-shadow: 2px 2px 6px rgba(0,0,0,0.9); margin: 0;">
            • What's one area you'd like to strengthen?
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Self-Care Section with Image -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; margin-bottom: 2rem;">
    <div style="background: linear-gradient(to bottom right, #e0e7ff, #ddd6fe); padding: 2rem; border-radius: 1rem; border: 2px solid #c4b5fd;">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
        <span style="font-size: 2.5rem;">🧘</span>
        <h3 style="color: #4c1d95; font-size: 2rem; font-weight: bold; margin: 0;">Self-Care = Better Retention</h3>
      </div>
      <div style="background: #fef3c7; border-left: 4px solid #ca8a04; padding: 1rem; margin-bottom: 1rem;">
        <p style="color: #78350f; font-size: 1.125rem; font-weight: bold; margin: 0;">
          <span style="font-size: 1.25rem;">⚡</span> Warning: Burnout kills retention!
        </p>
      </div>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
        <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="font-size: 1.25rem;">🛑</span>
          <span style="color: #374151; font-size: 1.125rem; font-weight: 500;">Burned-out therapists are less present</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="font-size: 1.25rem;">👁️</span>
          <span style="color: #374151; font-size: 1.125rem; font-weight: 500;">Clients sense when you're not engaged</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="font-size: 1.25rem;">📉</span>
          <span style="color: #374151; font-size: 1.125rem; font-weight: 500;">Quality of care declines</span>
        </li>
      </ul>
    </div>
    <div style="border-radius: 1rem; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
      <img src="https://chctherapy.com/newsletter/newsletter-selfcare.jpg" alt="Self Care" style="width: 100%; height: 320px; object-fit: cover;" />
    </div>
  </div>

  <!-- Final Thoughts -->
  <div style="background: linear-gradient(to bottom right, #cffafe, #a5f3fc); padding: 2.5rem; border-radius: 1rem; margin-bottom: 2rem; border: 2px solid #67e8f9; text-align: center;">
    <h2 style="color: #0e7490; font-size: 2.5rem; font-weight: bold; margin-bottom: 1.5rem;">💡 Final Thoughts</h2>
    <p style="color: #374151; font-size: 1.25rem; line-height: 1.75; margin-bottom: 1.5rem;">
      Client retention isn't about "keeping people in therapy forever"—it's about creating an environment where healing can occur at its natural pace. When clients stay engaged in therapy, they're more likely to experience meaningful, lasting change.
    </p>
    <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 2px solid #06b6d4;">
      <p style="color: #0f766e; font-size: 1.5rem; font-weight: bold; margin: 0;">
        ❤️ Every client who stays engaged is someone who's getting the help they need.
      </p>
      <p style="color: #374151; font-size: 1.125rem; margin-top: 0.5rem; font-weight: 600;">That's what this work is all about.</p>
    </div>
  </div>

  <!-- Footer -->
  <div style="background: linear-gradient(to right, #1f2937, #111827); padding: 1.5rem; border-radius: 0.5rem; text-align: center; color: white;">
    <p style="font-size: 1.125rem; margin-bottom: 0.5rem;">— CHC Leadership Team</p>
    <p style="color: #9ca3af; margin: 0;">Questions or want to discuss? Let's talk at our next team meeting.</p>
  </div>
  
</div>`;
};

export default NewsletterManager;