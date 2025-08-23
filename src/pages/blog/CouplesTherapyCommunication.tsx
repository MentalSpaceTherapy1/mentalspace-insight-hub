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

const CouplesTherapyCommunication = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useSEO({
    title: "Couples Therapy: Strengthening Relationships Through Communication | MentalSpace Blog",
    description: "Learn how couples therapy can help partners improve communication, resolve conflicts, and build stronger relationships.",
    keywords: "couples therapy, relationship counseling, communication, marriage therapy, relationship issues",
    canonicalUrl: "/blog/couples-therapy-communication"
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
    { id: "what-is-couples-therapy", title: "What is Couples Therapy?" },
    { id: "communication-patterns", title: "Communication Patterns" },
    { id: "common-issues", title: "Common Relationship Issues" },
    { id: "therapy-techniques", title: "Effective Techniques" },
    { id: "building-stronger-bonds", title: "Building Stronger Bonds" }
  ];

  const relatedArticles = [
    {
      title: "Online Therapy: Accessible Mental Health Care",
      excerpt: "Discover the benefits of virtual therapy sessions",
      url: "/blog/online-therapy-benefits",
      category: "Therapy"
    },
    {
      title: "Teen Mental Health Support",
      excerpt: "Supporting adolescents through challenging times",
      url: "/blog/teen-mental-health",
      category: "Teen Health"
    },
    {
      title: "Relationship Coaching Services",
      excerpt: "Professional relationship coaching and guidance",
      url: "/relationship-coaching",
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
            <span className="text-foreground">Couples Therapy</span>
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
              <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-white">Relationships</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Couples Therapy: Strengthening Relationships Through Communication
              </h1>
              
              {/* Author & Meta Info */}
              <Card className="mb-8">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-semibold">
                      DR
                    </div>
                    <div>
                      <p className="font-semibold">Dr. David Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Licensed Marriage & Family Therapist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Dec 12, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>7 min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <div className="aspect-video mb-8 overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/src/assets/couples-therapy-hero.jpg"
                  alt="Couple in therapy session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Introduction */}
              <div className="text-xl text-muted-foreground mb-8 p-6 bg-muted/30 rounded-xl border-l-4 border-primary">
                Strong relationships are the foundation of a fulfilling life, yet many couples struggle with communication barriers that can strain their bond. 
                Couples therapy offers evidence-based tools and techniques to help partners reconnect and build lasting, healthy relationships.
              </div>

              {/* Quick Stats */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">70%</div>
                      <div className="text-sm text-muted-foreground">Couples report improved communication</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">85%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction with couples therapy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">60%</div>
                      <div className="text-sm text-muted-foreground">Avoid separation after therapy</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id="what-is-couples-therapy" className="text-3xl font-bold mb-4 text-foreground">
                What is Couples Therapy?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Couples therapy, also known as relationship counseling or marriage therapy, is a form of psychotherapy that helps partners 
                identify and resolve conflicts to improve their relationship. A trained therapist facilitates discussions and provides 
                tools to enhance communication, intimacy, and overall relationship satisfaction.
              </p>

              <h2 id="communication-patterns" className="text-3xl font-bold mb-6 text-foreground">
                Understanding Communication Patterns
              </h2>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-red-200">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Harmful Patterns to Recognize</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Criticism:</strong> Attacking character rather than addressing specific behaviors</li>
                    <li>• <strong>Defensiveness:</strong> Making excuses instead of taking responsibility</li>
                    <li>• <strong>Contempt:</strong> Showing disrespect through sarcasm, eye-rolling, or name-calling</li>
                    <li>• <strong>Stonewalling:</strong> Shutting down and withdrawing from conversation</li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-green-200">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Healthy Communication Habits</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Active Listening:</strong> Fully focusing on your partner's words and emotions</li>
                    <li>• <strong>"I" Statements:</strong> Expressing feelings without blaming your partner</li>
                    <li>• <strong>Validation:</strong> Acknowledging your partner's feelings and perspective</li>
                    <li>• <strong>Taking Breaks:</strong> Pausing discussions when emotions run too high</li>
                  </ul>
                </Card>
              </div>

              <h2 id="common-issues" className="text-3xl font-bold mb-6 text-foreground">
                Common Relationship Issues Addressed in Therapy
              </h2>
              
              <Card className="p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Communication Challenges</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Frequent arguments and misunderstandings
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Feeling unheard or dismissed
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Different communication styles
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Relationship Dynamics</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Trust and intimacy issues
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Balancing individual needs with couple goals
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Life transitions and major decisions
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <h2 id="therapy-techniques" className="text-3xl font-bold mb-6 text-foreground">
                Effective Therapeutic Techniques
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Gottman Method</h3>
                  <p>
                    Based on decades of research, this approach focuses on building love maps, nurturing fondness and admiration, 
                    and creating shared meaning in relationships. It emphasizes the importance of friendship as the foundation of love.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Emotionally Focused Therapy (EFT)</h3>
                  <p>
                    EFT helps couples identify and change negative interaction patterns while strengthening emotional bonds. 
                    It focuses on attachment theory and helps partners become more emotionally accessible and responsive.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Imago Relationship Therapy</h3>
                  <p>
                    This approach helps partners understand how their childhood experiences influence their relationship patterns. 
                    It teaches couples to see conflicts as opportunities for growth and healing.
                  </p>
                </Card>
              </div>

              <h2 id="building-stronger-bonds" className="text-3xl font-bold mb-6 text-foreground">
                Building Stronger Bonds
              </h2>
              
              <Card className="p-6 mb-8">
                <h4 className="font-semibold mb-4 text-primary">Practical Exercises for Couples</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Daily Check-ins</h5>
                    <p className="text-sm text-muted-foreground">
                      Spend 10-15 minutes each day sharing your thoughts, feelings, and experiences without trying to solve problems.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Appreciation Practice</h5>
                    <p className="text-sm text-muted-foreground">
                      Regularly express gratitude and appreciation for your partner's efforts, both big and small.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Conflict Resolution Rules</h5>
                    <p className="text-sm text-muted-foreground">
                      Establish agreed-upon guidelines for handling disagreements, including timeouts and fair fighting rules.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-8 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
                <h3 className="text-xl font-semibold mb-3 text-pink-800">When to Seek Couples Therapy</h3>
                <p className="text-pink-700 mb-3">
                  Don't wait until your relationship is in crisis. Couples therapy can be beneficial at any stage of a relationship:
                </p>
                <ul className="text-pink-700 space-y-1">
                  <li>• When communication becomes consistently difficult</li>
                  <li>• During major life transitions (marriage, parenthood, career changes)</li>
                  <li>• When trust has been damaged</li>
                  <li>• As a preventive measure to strengthen your relationship</li>
                  <li>• When you feel disconnected or distant from your partner</li>
                </ul>
              </Card>

              <Separator className="my-8" />

              {/* Call to Action */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Strengthen Your Relationship Today</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Every relationship can benefit from professional guidance. Take the first step toward building 
                    a stronger, more connected partnership with expert couples therapy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                      <Link to="/therapist-matching">Find a Couples Therapist</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/couples-therapy">Learn About Our Services</Link>
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
                  Get relationship tips and mental health insights delivered to your inbox.
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

export default CouplesTherapyCommunication;