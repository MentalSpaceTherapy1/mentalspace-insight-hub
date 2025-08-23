import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen, Heart, MessageSquare, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useState, useEffect } from "react";

const AnxietyUnderstanding = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useSEO({
    title: "Understanding Anxiety: Signs, Symptoms, and Treatment Options | MentalSpace Blog",
    description: "Learn about the different types of anxiety disorders and evidence-based treatment approaches that can help you manage anxiety effectively.",
    keywords: "anxiety, anxiety disorders, treatment, therapy, mental health, symptoms",
    canonicalUrl: "/blog/understanding-anxiety"
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tableOfContents = [
    { id: "what-is-anxiety", title: "What is Anxiety?" },
    { id: "types-of-anxiety", title: "Types of Anxiety Disorders" },
    { id: "signs-symptoms", title: "Signs and Symptoms" },
    { id: "treatment-options", title: "Treatment Options" },
    { id: "self-care", title: "Self-Care Strategies" },
    { id: "seeking-help", title: "When to Seek Help" }
  ];

  const relatedArticles = [
    {
      title: "Depression in Adults: Breaking the Stigma",
      excerpt: "Understanding depression and how to find help",
      url: "/blog/depression-breaking-stigma",
      category: "Depression"
    },
    {
      title: "The Benefits of Online Therapy",
      excerpt: "Discover how online therapy can help you",
      url: "/online-therapy",
      category: "Therapy"
    },
    {
      title: "Mental Health Tests & Assessments", 
      excerpt: "Take our free anxiety assessment",
      url: "/mental-health-tests",
      category: "Assessment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="max-w-7xl mx-auto mb-8">
          <nav className="flex items-center text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">Understanding Anxiety</span>
          </nav>
          
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Left Sidebar */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <Card className="sticky top-24">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {item.title}
                  </a>
                ))}
              </CardContent>
            </Card>
            
            {/* Share Section */}
            <Card className="mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Article
                </CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <MessageSquare className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Article */}
          <article className="lg:col-span-2 order-1 lg:order-2">
            <header className="mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-white">Anxiety</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                Understanding Anxiety: Signs, Symptoms, and Treatment Options
              </h1>
              
              {/* Author & Meta Info */}
              <Card className="mb-8">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-semibold">
                      SJ
                    </div>
                    <div>
                      <p className="font-semibold">Dr. Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Licensed Clinical Psychologist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Dec 20, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>8 min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <div className="aspect-video mb-8 overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/src/assets/anxiety-person.jpg"
                  alt="Person dealing with anxiety"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Introduction */}
              <div className="text-xl text-muted-foreground mb-8 p-6 bg-muted/30 rounded-xl border-l-4 border-primary">
                Anxiety affects millions of people worldwide, yet it remains one of the most misunderstood mental health conditions. 
                Understanding the signs, symptoms, and available treatments can be the first step toward managing anxiety effectively.
              </div>

              {/* Quick Stats */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">40M</div>
                      <div className="text-sm text-muted-foreground">Adults affected by anxiety in the US</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">90%</div>
                      <div className="text-sm text-muted-foreground">Success rate with proper treatment</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">6-8</div>
                      <div className="text-sm text-muted-foreground">Weeks to see improvement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id="what-is-anxiety" className="text-3xl font-bold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">What is Anxiety?</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Anxiety is a natural human response to stress or perceived threats. It becomes a disorder when these feelings 
                are persistent, excessive, and interfere with daily life. Unlike normal worry, anxiety disorders involve intense 
                fear or anxiety that is disproportionate to the actual situation.
              </p>

              <h2 id="types-of-anxiety" className="text-3xl font-bold mb-6 flex items-center">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Common Types of Anxiety Disorders</span>
              </h2>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Generalized Anxiety Disorder (GAD)</h3>
                  <p>
                    GAD involves persistent and excessive worry about various aspects of life, including work, health, family, 
                    and everyday situations. People with GAD find it difficult to control their worry, even when they recognize 
                    it's excessive.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Social Anxiety Disorder</h3>
                  <p>
                    This involves intense fear of social situations where one might be judged, embarrassed, or humiliated. 
                    It goes beyond normal shyness and can significantly impact work, school, and relationships.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Panic Disorder</h3>
                  <p>
                    Characterized by recurrent panic attacks - sudden episodes of intense fear accompanied by physical symptoms 
                    like heart palpitations, shortness of breath, and dizziness.
                  </p>
                </Card>
              </div>

              <h2 id="signs-symptoms" className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Recognizing the Signs and Symptoms</span>
              </h2>
              <p className="text-lg mb-6">Anxiety manifests differently in each person, but common symptoms include:</p>
              
              <Card className="p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Emotional Symptoms</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Persistent worry or fear
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Restlessness or feeling on edge
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Difficulty concentrating
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Irritability or mood changes
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Physical Symptoms</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Rapid heartbeat, sweating, or trembling
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Sleep disturbances
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Avoiding certain situations or places
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Muscle tension and fatigue
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <h2 id="treatment-options" className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Evidence-Based Treatment Options</span>
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Cognitive Behavioral Therapy (CBT)</h3>
                  <p>
                    CBT is one of the most effective treatments for anxiety disorders. It helps identify and change negative 
                    thought patterns and behaviors that contribute to anxiety. Through CBT, individuals learn coping strategies 
                    and problem-solving skills.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Exposure Therapy</h3>
                  <p>
                    This approach gradually exposes individuals to feared situations in a controlled, safe environment. 
                    Over time, this reduces the anxiety response and helps build confidence.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Mindfulness and Relaxation Techniques</h3>
                  <p>
                    Practices like meditation, deep breathing exercises, and progressive muscle relaxation can help manage 
                    anxiety symptoms and reduce overall stress levels.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Medication</h3>
                  <p>
                    In some cases, medication may be recommended alongside therapy. Common options include SSRIs, SNRIs, 
                    and short-term use of anti-anxiety medications. Always consult with a healthcare provider for proper evaluation.
                  </p>
                </Card>
              </div>

              <h2 id="self-care" className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Self-Care Strategies</span>
              </h2>
              <p className="text-lg mb-6">While professional treatment is important, these self-care practices can complement therapy:</p>
              
              <Card className="p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      Regular exercise and physical activity
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      Maintaining a consistent sleep schedule
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      Limiting caffeine and alcohol
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      Practicing stress management techniques
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      Building a support network
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                      Engaging in enjoyable activities
                    </li>
                  </ul>
                </div>
              </Card>

              <h2 id="seeking-help" className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">When to Seek Professional Help</span>
              </h2>
              <p className="text-lg mb-6">
                Consider reaching out to a mental health professional if anxiety is interfering with your daily life, 
                relationships, work, or overall well-being. Early intervention can prevent symptoms from worsening and 
                improve long-term outcomes.
              </p>

              <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Moving Forward</h3>
                <p className="text-green-700">
                  Remember that anxiety is treatable, and recovery is possible. With the right support and treatment approach, 
                  individuals with anxiety disorders can lead fulfilling, productive lives. The first step is recognizing 
                  that help is available and that seeking treatment is a sign of strength, not weakness.
                </p>
              </Card>

              <Separator className="my-8" />

              {/* Call to Action */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    If you're struggling with anxiety, professional support can make a significant difference. 
                    Our licensed therapists specialize in anxiety treatment and are here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                      <Link to="/therapist-matching">Request an Appointment</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/mental-health-tests">Take an Anxiety Assessment</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </article>

          {/* Related Articles - Right Sidebar */}
          <aside className="lg:col-span-1 order-3">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl">Related Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedArticles.map((article, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow border-l-4 border-primary/20 hover:border-primary">
                    <Link to={article.url} className="block">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <h4 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>
                    </Link>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get mental health tips and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-input rounded-md text-sm"
                  />
                  <Button className="w-full" size="sm">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                  <Link to="/mental-health-library">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Mental Health Library
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                  <Link to="/emergency-resources">
                    <Heart className="h-4 w-4 mr-2" />
                    Crisis Resources
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                  <Link to="/faq">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    FAQ
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnxietyUnderstanding;