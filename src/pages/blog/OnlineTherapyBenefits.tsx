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

const OnlineTherapyBenefits = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useSEO({
    title: "The Benefits of Online Therapy: Accessible Mental Health Care | MentalSpace Blog",
    description: "Discover how online therapy has revolutionized mental health care, making it more accessible and convenient for everyone.",
    keywords: "online therapy, virtual therapy, teletherapy, mental health, accessibility, convenience",
    canonicalUrl: "/blog/online-therapy-benefits"
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
    { id: "what-is-online-therapy", title: "What is Online Therapy?" },
    { id: "key-benefits", title: "Key Benefits" },
    { id: "accessibility", title: "Breaking Down Barriers" },
    { id: "effectiveness", title: "Effectiveness Research" },
    { id: "getting-started", title: "Getting Started" }
  ];

  const relatedArticles = [
    {
      title: "Understanding Anxiety: Signs & Treatment",
      excerpt: "Learn about anxiety disorders and treatment options",
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
      title: "Couples Therapy Online",
      excerpt: "Strengthen your relationship with online counseling",
      url: "/couples-therapy",
      category: "Relationships"
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
            <span className="text-foreground">Online Therapy Benefits</span>
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
              <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-white">Therapy</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                The Benefits of Online Therapy: Accessible Mental Health Care
              </h1>
              
              {/* Author & Meta Info */}
              <Card className="mb-8">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-semibold">
                      AK
                    </div>
                    <div>
                      <p className="font-semibold">Dr. Amanda Klein</p>
                      <p className="text-sm text-muted-foreground">Licensed Marriage & Family Therapist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Dec 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>5 min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <div className="aspect-video mb-8 overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/src/assets/online-therapy-hero.jpg"
                  alt="Person having an online therapy session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Introduction */}
              <div className="text-xl text-muted-foreground mb-8 p-6 bg-muted/30 rounded-xl border-l-4 border-primary">
                The digital revolution has transformed many aspects of our lives, and mental health care is no exception. 
                Online therapy has emerged as a game-changing solution that's making professional mental health support more accessible than ever before.
              </div>

              {/* Quick Stats */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">80%</div>
                      <div className="text-sm text-muted-foreground">Report improved access to care</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">65%</div>
                      <div className="text-sm text-muted-foreground">More likely to start therapy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">90%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction rate with online therapy</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id="what-is-online-therapy" className="text-3xl font-bold mb-4 text-foreground">
                What is Online Therapy?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Online therapy, also known as teletherapy or e-therapy, delivers mental health services through digital platforms. 
                This can include video calls, phone sessions, messaging, or chat-based therapy with licensed mental health professionals.
              </p>

              <h2 id="key-benefits" className="text-3xl font-bold mb-6 text-foreground">
                Key Benefits of Online Therapy
              </h2>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Convenience & Flexibility</h3>
                  <p>
                    Access therapy from the comfort of your own home, eliminating travel time and scheduling conflicts. 
                    Many platforms offer flexible scheduling, including evenings and weekends.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Increased Privacy</h3>
                  <p>
                    For those who value privacy, online therapy eliminates concerns about being seen entering a therapist's office. 
                    This can be especially important in smaller communities or for public figures.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Greater Access to Specialists</h3>
                  <p>
                    Online therapy connects you with specialists who might not be available in your geographic area, 
                    expanding your options for finding the right therapeutic match.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Cost-Effective</h3>
                  <p>
                    Often more affordable than traditional in-person therapy, with reduced overhead costs and 
                    the elimination of travel expenses for clients.
                  </p>
                </Card>
              </div>

              <h2 id="accessibility" className="text-3xl font-bold mb-6 text-foreground">
                Breaking Down Barriers to Mental Health Care
              </h2>
              
              <Card className="p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Geographic Barriers</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Rural and remote area access
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Limited local provider options
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Long waiting lists in high-demand areas
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Personal Barriers</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Transportation challenges
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Mobility or disability considerations
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Social anxiety about in-person visits
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <h2 id="effectiveness" className="text-3xl font-bold mb-6 text-foreground">
                Research on Effectiveness
              </h2>
              <p className="text-lg mb-6">
                Numerous studies have demonstrated that online therapy can be just as effective as traditional in-person therapy 
                for many mental health conditions, including depression, anxiety, PTSD, and relationship issues.
              </p>

              <Card className="p-6 mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-800">Research Highlights</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• 76% of participants showed significant improvement in depression symptoms</li>
                  <li>• Anxiety reduction rates comparable to in-person treatment</li>
                  <li>• Higher completion rates due to increased convenience</li>
                  <li>• Improved treatment adherence and engagement</li>
                </ul>
              </Card>

              <h2 id="getting-started" className="text-3xl font-bold mb-6 text-foreground">
                Getting Started with Online Therapy
              </h2>
              <p className="text-lg mb-6">
                Starting online therapy is simple and straightforward. Most platforms offer user-friendly interfaces 
                and comprehensive support to help you get connected with the right therapist.
              </p>

              <Card className="p-6 mb-8">
                <h4 className="font-semibold mb-3 text-primary">Steps to Begin</h4>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Complete a brief assessment to match with appropriate therapists</li>
                  <li>Review therapist profiles and credentials</li>
                  <li>Schedule your first session at a convenient time</li>
                  <li>Test your technology setup before your appointment</li>
                  <li>Prepare for your session in a private, comfortable space</li>
                </ol>
              </Card>

              <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">The Future of Mental Health Care</h3>
                <p className="text-blue-700">
                  Online therapy represents the future of accessible, convenient mental health care. As technology continues 
                  to evolve, we can expect even more innovative ways to connect people with the support they need, 
                  when and where they need it most.
                </p>
              </Card>

              <Separator className="my-8" />

              {/* Call to Action */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Experience Online Therapy?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Take advantage of the convenience and accessibility of online therapy. 
                    Connect with licensed therapists from the comfort of your home.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                      <Link to="/therapist-matching">Start Online Therapy</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/online-therapy">Learn More About Our Services</Link>
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

export default OnlineTherapyBenefits;