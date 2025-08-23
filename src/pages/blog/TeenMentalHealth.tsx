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

const TeenMentalHealth = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useSEO({
    title: "Teen Mental Health: Supporting Adolescents Through Challenging Times | MentalSpace Blog",
    description: "Understanding the unique mental health challenges teens face and how therapy can provide crucial support during adolescence.",
    keywords: "teen mental health, adolescent therapy, teenage depression, anxiety in teens, youth counseling",
    canonicalUrl: "/blog/teen-mental-health"
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
    { id: "teen-challenges", title: "Unique Teen Challenges" },
    { id: "warning-signs", title: "Warning Signs to Watch" },
    { id: "common-conditions", title: "Common Mental Health Issues" },
    { id: "therapy-approaches", title: "Effective Therapy Approaches" },
    { id: "family-support", title: "How Families Can Help" },
    { id: "resources", title: "Resources and Next Steps" }
  ];

  const relatedArticles = [
    {
      title: "Understanding Anxiety in All Ages",
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
      title: "Teen Therapy Services",
      excerpt: "Specialized therapy for adolescents aged 13-17",
      url: "/teen-therapy",
      category: "Services"
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
            <span className="text-foreground">Teen Mental Health</span>
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
              <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-white">Teen Health</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Teen Mental Health: Supporting Adolescents Through Challenging Times
              </h1>
              
              {/* Author & Meta Info */}
              <Card className="mb-8">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-semibold">
                      LT
                    </div>
                    <div>
                      <p className="font-semibold">Dr. Lisa Thompson</p>
                      <p className="text-sm text-muted-foreground">Licensed Adolescent Psychologist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Dec 10, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>6 min read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <div className="aspect-video mb-8 overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/src/assets/teen-therapy-hero.jpg"
                  alt="Teenager in counseling session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Introduction */}
              <div className="text-xl text-muted-foreground mb-8 p-6 bg-muted/30 rounded-xl border-l-4 border-primary">
                Adolescence is a time of significant physical, emotional, and social changes. While these changes are natural, 
                they can also make teenagers particularly vulnerable to mental health challenges. Understanding and supporting 
                teen mental health is crucial for their development and future well-being.
              </div>

              {/* Quick Stats */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">32%</div>
                      <div className="text-sm text-muted-foreground">Teens experience anxiety disorders</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">13%</div>
                      <div className="text-sm text-muted-foreground">Experience major depression</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">70%</div>
                      <div className="text-sm text-muted-foreground">Improvement with proper support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 id="teen-challenges" className="text-3xl font-bold mb-4 text-foreground">
                Unique Challenges Facing Today's Teens
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Modern teenagers face unprecedented challenges that previous generations didn't encounter. From social media pressure 
                to academic stress and social isolation, these factors can significantly impact mental health and emotional development.
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-200">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Social Media and Digital Pressure</h3>
                  <p>
                    Constant comparison on social platforms, cyberbullying, and the pressure to maintain a perfect online image 
                    can lead to anxiety, depression, and low self-esteem. The average teen spends 7+ hours daily on screens.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-green-200">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Academic and Future Pressures</h3>
                  <p>
                    Increasing competition for college admission, standardized testing stress, and pressure to choose a career path 
                    can create overwhelming anxiety about the future and academic performance.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-200">
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Social and Identity Development</h3>
                  <p>
                    Navigating peer relationships, developing personal identity, and managing romantic relationships while dealing 
                    with hormonal changes can create emotional turbulence and stress.
                  </p>
                </Card>
              </div>

              <h2 id="warning-signs" className="text-3xl font-bold mb-6 text-foreground">
                Warning Signs to Watch For
              </h2>
              
              <Card className="p-6 mb-8">
                <p className="text-lg mb-6">Parents, teachers, and caregivers should be aware of these potential warning signs:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Behavioral Changes</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Significant changes in sleep patterns
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Withdrawal from friends and family
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Decline in academic performance
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Loss of interest in previously enjoyed activities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Emotional Signs</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Persistent sadness or hopelessness
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Frequent mood swings or irritability
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Excessive worry or anxiety
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                        Expressing feelings of worthlessness
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <h2 id="common-conditions" className="text-3xl font-bold mb-6 text-foreground">
                Common Mental Health Issues in Teens
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Teen Anxiety Disorders</h3>
                  <p>
                    Anxiety is the most common mental health condition in adolescents. This includes generalized anxiety, 
                    social anxiety, and specific phobias. Teens may avoid school, social situations, or new experiences due to anxiety.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Adolescent Depression</h3>
                  <p>
                    Teen depression goes beyond typical mood swings and can significantly impact daily functioning, relationships, 
                    and academic performance. It's important to differentiate between normal adolescent emotions and clinical depression.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Eating Disorders</h3>
                  <p>
                    Often developing during adolescence, eating disorders like anorexia, bulimia, and binge eating disorder 
                    can have serious physical and mental health consequences if left untreated.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Self-Harm and Suicidal Thoughts</h3>
                  <p>
                    These are serious warning signs that require immediate professional intervention. If a teen expresses 
                    suicidal thoughts or engages in self-harm, seek emergency help immediately.
                  </p>
                </Card>
              </div>

              <h2 id="therapy-approaches" className="text-3xl font-bold mb-6 text-foreground">
                Effective Therapy Approaches for Teens
              </h2>
              
              <Card className="p-6 mb-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Cognitive Behavioral Therapy (CBT) for Teens</h4>
                    <p className="text-muted-foreground">
                      CBT helps teens identify negative thought patterns and develop healthy coping strategies. 
                      It's particularly effective for anxiety and depression in adolescents.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Dialectical Behavior Therapy (DBT)</h4>
                    <p className="text-muted-foreground">
                      DBT teaches emotional regulation skills and is especially helpful for teens who struggle 
                      with intense emotions, self-harm, or relationship difficulties.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Family Therapy</h4>
                    <p className="text-muted-foreground">
                      Involving family members can improve communication, resolve conflicts, and create a 
                      supportive home environment for the teen's recovery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Group Therapy</h4>
                    <p className="text-muted-foreground">
                      Peer support groups help teens realize they're not alone and learn from others 
                      facing similar challenges.
                    </p>
                  </div>
                </div>
              </Card>

              <h2 id="family-support" className="text-3xl font-bold mb-6 text-foreground">
                How Families Can Support Teen Mental Health
              </h2>

              <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Creating a Supportive Environment</h3>
                <ul className="text-blue-700 space-y-3">
                  <li>• <strong>Open Communication:</strong> Create safe spaces for teens to express their feelings without judgment</li>
                  <li>• <strong>Active Listening:</strong> Pay attention to what your teen is saying and validate their emotions</li>
                  <li>• <strong>Set Reasonable Expectations:</strong> Balance support with age-appropriate boundaries and expectations</li>
                  <li>• <strong>Model Healthy Behaviors:</strong> Demonstrate healthy ways to cope with stress and emotions</li>
                  <li>• <strong>Stay Involved:</strong> Maintain connection while respecting their growing independence</li>
                  <li>• <strong>Seek Professional Help:</strong> Don't hesitate to consult mental health professionals when needed</li>
                </ul>
              </Card>

              <h2 id="resources" className="text-3xl font-bold mb-6 text-foreground">
                Building Resilience in Teens
              </h2>

              <Card className="p-6 mb-8">
                <h4 className="font-semibold mb-4 text-primary">Practical Strategies for Teen Mental Wellness</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Healthy Sleep Habits</h5>
                    <p className="text-sm text-muted-foreground">
                      Encourage 8-10 hours of sleep nightly and establish consistent bedtime routines. 
                      Limit screen time before bed to improve sleep quality.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Physical Activity</h5>
                    <p className="text-sm text-muted-foreground">
                      Regular exercise can significantly improve mood and reduce anxiety. 
                      Find activities your teen enjoys, whether it's sports, dancing, or walking.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Mindfulness and Stress Management</h5>
                    <p className="text-sm text-muted-foreground">
                      Teach relaxation techniques, deep breathing, and mindfulness practices 
                      to help manage stress and anxiety.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h5 className="font-medium mb-2">Social Connection</h5>
                    <p className="text-sm text-muted-foreground">
                      Encourage healthy friendships and social activities. 
                      Help your teen balance online and offline social interactions.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                <h3 className="text-xl font-semibold mb-3 text-red-800">When to Seek Emergency Help</h3>
                <p className="text-red-700 mb-3">
                  Seek immediate professional help if your teen:
                </p>
                <ul className="text-red-700 space-y-2">
                  <li>• Expresses thoughts of suicide or self-harm</li>
                  <li>• Engages in risky or dangerous behaviors</li>
                  <li>• Shows signs of psychosis or severe mood swings</li>
                  <li>• Experiences panic attacks or severe anxiety</li>
                  <li>• Has dramatic changes in eating or sleeping patterns</li>
                </ul>
                <p className="text-red-700 mt-3 font-semibold">
                  Crisis Hotline: 988 (Suicide & Crisis Lifeline)
                </p>
              </Card>

              <Separator className="my-8" />

              {/* Call to Action */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Support Your Teen's Mental Health Journey</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Professional support can make a tremendous difference in your teen's mental health and development. 
                    Our specialized adolescent therapists understand the unique challenges teens face.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow">
                      <Link to="/therapist-matching">Find a Teen Therapist</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/teen-therapy">Learn About Teen Services</Link>
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

            {/* Emergency Resources */}
            <Card className="mt-6 border-red-200">
              <CardHeader className="pb-3 bg-red-50">
                <CardTitle className="text-lg text-red-800">Emergency Resources</CardTitle>
              </CardHeader>
              <CardContent className="pt-3">
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-red-800">Suicide & Crisis Lifeline</p>
                    <p className="text-red-700">Call or text: 988</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Crisis Text Line</p>
                    <p className="text-red-700">Text HOME to 741741</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Teen Line</p>
                    <p className="text-red-700">Call: 1-800-852-8336</p>
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
                  Get teen mental health resources and parenting tips.
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

export default TeenMentalHealth;