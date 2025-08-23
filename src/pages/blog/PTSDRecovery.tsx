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

const PTSDRecovery = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useSEO({
    title: "PTSD Recovery: Healing from Trauma with Professional Support | MentalSpace Blog",
    description: "Explore evidence-based treatments for PTSD and how therapy can help individuals process trauma and reclaim their lives.",
    keywords: "PTSD, trauma therapy, post traumatic stress, trauma recovery, EMDR therapy, trauma treatment",
    canonicalUrl: "/blog/ptsd-recovery"
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
    { id: "understanding-ptsd", title: "Understanding PTSD" },
    { id: "trauma-types", title: "Types of Trauma" },
    { id: "symptoms-impact", title: "Symptoms and Impact" },
    { id: "treatment-approaches", title: "Evidence-Based Treatments" },
    { id: "recovery-process", title: "The Recovery Process" },
    { id: "support-systems", title: "Building Support Systems" }
  ];

  const relatedArticles = [
    {
      title: "Understanding Anxiety: Signs & Treatment",
      excerpt: "Comprehensive guide to anxiety disorders and treatment",
      url: "/blog/understanding-anxiety",
      category: "Anxiety"
    },
    {
      title: "Depression: Breaking the Stigma",
      excerpt: "Understanding depression and finding help",
      url: "/blog/depression-breaking-stigma",
      category: "Depression"
    },
    {
      title: "Online Therapy: Accessible Care",
      excerpt: "Benefits of virtual therapy sessions",
      url: "/blog/online-therapy-benefits",
      category: "Therapy"
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
            <span className="text-foreground">PTSD Recovery</span>
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
              <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-white">PTSD</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                PTSD Recovery: Healing from Trauma with Professional Support
              </h1>
              
              {/* Author & Meta Info */}
              <Card className="mb-8">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-semibold">
                      RW
                    </div>
                    <div>
                      <p className="font-semibold">Dr. Rachel Williams</p>
                      <p className="text-sm text-muted-foreground">Licensed Trauma Specialist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Dec 8, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>9 min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <div className="aspect-video mb-8 overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/src/assets/ptsd-person.jpg"
                  alt="Person in trauma therapy session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Introduction */}
              <div className="text-xl text-muted-foreground mb-8 p-6 bg-muted/30 rounded-xl border-l-4 border-primary">
                Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing a traumatic event. 
                While the impact of trauma can be profound, recovery is possible with proper understanding, professional support, 
                and evidence-based treatment approaches.
              </div>

              {/* Quick Stats */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">3.5%</div>
                      <div className="text-sm text-muted-foreground">Adults experience PTSD annually</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">80%</div>
                      <div className="text-sm text-muted-foreground">Show improvement with treatment</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">60%</div>
                      <div className="text-sm text-muted-foreground">Achieve significant recovery</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id="understanding-ptsd" className="text-3xl font-bold mb-4 text-foreground">
                Understanding PTSD: More Than Just Stress
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                PTSD is a mental health condition triggered by experiencing or witnessing a terrifying event. It's a normal response 
                to abnormal circumstances, but when symptoms persist and interfere with daily life, professional help is essential. 
                PTSD affects the brain's ability to process and store traumatic memories.
              </p>

              <h2 id="trauma-types" className="text-3xl font-bold mb-6 text-foreground">
                Types of Trauma That Can Lead to PTSD
              </h2>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-red-200">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Acute Trauma</h3>
                  <p>
                    Results from a single incident such as accidents, natural disasters, violent crimes, or sudden loss. 
                    The traumatic event is typically brief but intensely distressing.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-200">
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">Complex Trauma</h3>
                  <p>
                    Develops from repeated, prolonged exposure to traumatic events, often in childhood. 
                    This can include ongoing abuse, neglect, or domestic violence over extended periods.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-200">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Secondary Trauma</h3>
                  <p>
                    Occurs when individuals are exposed to trauma through their work (first responders, healthcare workers) 
                    or by hearing detailed accounts of traumatic events affecting others.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-200">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Historical/Intergenerational Trauma</h3>
                  <p>
                    Trauma that is transmitted across generations, often affecting entire communities or cultural groups. 
                    This can include the effects of war, genocide, or systematic oppression.
                  </p>
                </Card>
              </div>

              <h2 id="symptoms-impact" className="text-3xl font-bold mb-6 text-foreground">
                Recognizing PTSD Symptoms and Their Impact
              </h2>
              
              <Card className="p-6 mb-8">
                <p className="text-lg mb-6">PTSD symptoms are grouped into four main categories:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Re-experiencing Symptoms</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Flashbacks and intrusive memories
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Nightmares and disturbing dreams
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Severe emotional distress when reminded
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Physical reactions to trauma reminders
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Avoidance Behaviors</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Avoiding trauma-related thoughts or feelings
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Staying away from trauma reminders
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Avoiding people, places, or activities
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Emotional numbing and detachment
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Negative Thoughts & Mood</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Distorted negative beliefs about self/world
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Persistent negative emotions
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Loss of interest in activities
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Feelings of guilt, shame, or blame
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Hyperarousal Symptoms</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Hypervigilance and being easily startled
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Difficulty concentrating
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Sleep disturbances
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Irritability and angry outbursts
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <h2 id="treatment-approaches" className="text-3xl font-bold mb-6 text-foreground">
                Evidence-Based Treatment Approaches
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Eye Movement Desensitization and Reprocessing (EMDR)</h3>
                  <p>
                    EMDR is a specialized therapy that helps process traumatic memories by using bilateral stimulation 
                    (typically eye movements) while recalling the trauma. This helps the brain reprocess traumatic memories 
                    in a healthier way, reducing their emotional impact.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</h3>
                  <p>
                    TF-CBT combines cognitive behavioral techniques with trauma-sensitive interventions. It helps individuals 
                    identify and change negative thought patterns while developing healthy coping strategies for trauma-related triggers.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Prolonged Exposure (PE) Therapy</h3>
                  <p>
                    PE therapy involves gradually and repeatedly exposing individuals to trauma-related memories, feelings, 
                    and situations in a safe, controlled environment. This helps reduce the fear and anxiety associated with trauma reminders.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Cognitive Processing Therapy (CPT)</h3>
                  <p>
                    CPT focuses on helping individuals understand how trauma has affected their thoughts and beliefs. 
                    It teaches skills to evaluate and change unhelpful thoughts related to the trauma.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Somatic Approaches</h3>
                  <p>
                    These body-based therapies recognize that trauma is stored in the body. Approaches like Somatic Experiencing 
                    help individuals release trapped trauma energy and restore natural healing responses.
                  </p>
                </Card>
              </div>

              <h2 id="recovery-process" className="text-3xl font-bold mb-6 text-foreground">
                Understanding the Recovery Process
              </h2>

              <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Phases of Trauma Recovery</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700">1. Safety and Stabilization</h4>
                    <p className="text-green-600 text-sm">
                      Establishing physical and emotional safety, learning coping skills, and stabilizing symptoms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">2. Remembrance and Mourning</h4>
                    <p className="text-green-600 text-sm">
                      Processing traumatic memories in a safe therapeutic environment and grieving losses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700">3. Reconnection and Integration</h4>
                    <p className="text-green-600 text-sm">
                      Rebuilding relationships, pursuing meaningful activities, and integrating the trauma experience into life narrative.
                    </p>
                  </div>
                </div>
              </Card>

              <h2 id="support-systems" className="text-3xl font-bold mb-6 text-foreground">
                Building Strong Support Systems
              </h2>
              
              <Card className="p-6 mb-8">
                <h4 className="font-semibold mb-4 text-primary">Elements of Effective Support</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Professional Support Team</h5>
                    <p className="text-sm text-muted-foreground">
                      Work with trauma-informed therapists, psychiatrists if needed, and other mental health professionals 
                      who understand PTSD and its treatment.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Family and Friends</h5>
                    <p className="text-sm text-muted-foreground">
                      Educate loved ones about PTSD so they can provide informed, patient support. 
                      Set boundaries and communicate your needs clearly.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Support Groups</h5>
                    <p className="text-sm text-muted-foreground">
                      Connect with others who have similar experiences. Peer support can provide validation, 
                      hope, and practical coping strategies.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Self-Care Practices</h5>
                    <p className="text-sm text-muted-foreground">
                      Develop regular self-care routines including exercise, mindfulness, adequate sleep, 
                      and activities that bring joy and meaning.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Hope and Resilience in Recovery</h3>
                <p className="text-blue-700 mb-3">
                  Recovery from PTSD is not about forgetting the trauma or "getting over it." Instead, it's about:
                </p>
                <ul className="text-blue-700 space-y-2">
                  <li>• Learning to live with the memories without being controlled by them</li>
                  <li>• Developing healthy coping strategies and emotional regulation skills</li>
                  <li>• Rebuilding a sense of safety, trust, and connection with others</li>
                  <li>• Finding meaning and purpose despite the traumatic experience</li>
                  <li>• Recognizing and building upon your natural resilience and strengths</li>
                </ul>
              </Card>

              <Card className="p-6 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                <h3 className="text-xl font-semibold mb-3 text-red-800">When to Seek Immediate Help</h3>
                <p className="text-red-700 mb-3">
                  Seek emergency help if you or someone you know:
                </p>
                <ul className="text-red-700 space-y-2">
                  <li>• Has thoughts of suicide or self-harm</li>
                  <li>• Is experiencing severe flashbacks or dissociation</li>
                  <li>• Shows signs of substance abuse as coping</li>
                  <li>• Is unable to function in daily life</li>
                  <li>• Has severe depression or anxiety symptoms</li>
                </ul>
                <p className="text-red-700 mt-3 font-semibold">
                  National Suicide Prevention Lifeline: 988
                </p>
              </Card>

              <Separator className="my-8" />

              {/* Call to Action */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Begin Your Healing Journey Today</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Recovery from trauma is possible with the right support and evidence-based treatment. 
                    Our trauma-informed therapists are here to guide you through your healing journey with compassion and expertise.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                      <Link to="/therapist-matching">Find a Trauma Specialist</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/emergency-resources">Access Crisis Resources</Link>
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

            {/* Crisis Resources */}
            <Card className="mt-6 border-red-200">
              <CardHeader className="pb-3 bg-red-50">
                <CardTitle className="text-lg text-red-800">Crisis Resources</CardTitle>
              </CardHeader>
              <CardContent className="pt-3">
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-red-800">National Suicide Prevention Lifeline</p>
                    <p className="text-red-700">Call or text: 988</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Crisis Text Line</p>
                    <p className="text-red-700">Text HOME to 741741</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">PTSD National Hotline</p>
                    <p className="text-red-700">1-800-273-8255</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">RAINN National Hotline</p>
                    <p className="text-red-700">1-800-656-4673</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get trauma recovery resources and mental health insights.
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
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PTSDRecovery;