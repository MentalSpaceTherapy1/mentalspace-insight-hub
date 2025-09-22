import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import onlineTherapyHeroImage from "@/assets/online-therapy-hero.jpg";

const BenefitsOnlineTherapy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="The Benefits of Online Therapy: Accessible Mental Health Care"
        description="Discover how online therapy has revolutionized mental health care, making it more accessible and convenient for everyone."
        keywords="online therapy, teletherapy, virtual therapy, accessible mental health, therapy benefits"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </nav>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                The Benefits of Online Therapy: Accessible Mental Health Care
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 15, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  5 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={onlineTherapyHeroImage}
                  alt="Online therapy session - accessible mental health care"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                The digital revolution has transformed many aspects of our lives, and mental health care is no exception. 
                Online therapy has emerged as a game-changing solution, breaking down barriers and making professional 
                mental health support more accessible than ever before.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What is Online Therapy?</h2>
              <p className="mb-6">
                Online therapy, also known as teletherapy or e-therapy, involves receiving mental health services 
                through digital platforms. This can include video calls, phone sessions, text messaging, or email 
                communication with licensed mental health professionals.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Key Benefits of Online Therapy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Increased Accessibility</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access therapy from anywhere with an internet connection</li>
                <li>Eliminates transportation barriers</li>
                <li>Serves rural and underserved communities</li>
                <li>Available for people with mobility issues or disabilities</li>
                <li>Reduces stigma by providing privacy and discretion</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Convenience and Flexibility</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Flexible scheduling options, including evenings and weekends</li>
                <li>No need to take time off work for travel</li>
                <li>Sessions from the comfort of your own home</li>
                <li>Easier to maintain consistent therapy attendance</li>
                <li>Option for more frequent check-ins when needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Cost-Effectiveness</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Often more affordable than traditional in-person therapy</li>
                <li>Saves money on transportation and parking</li>
                <li>Reduced missed appointments due to convenience</li>
                <li>Some platforms offer subscription-based models</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Comfort and Privacy</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Familiar environment can enhance openness</li>
                <li>Reduced anxiety about being seen at a mental health facility</li>
                <li>Greater sense of control over the therapeutic environment</li>
                <li>Ability to continue sessions during travel or relocation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Types of Online Therapy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Video Sessions</h3>
              <p className="mb-4">
                Most similar to traditional therapy, allowing for face-to-face interaction and non-verbal communication.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Phone Therapy</h3>
              <p className="mb-4">
                Voice-only sessions that can be more comfortable for some clients and don't require video technology.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Text-Based Therapy</h3>
              <p className="mb-4">
                Written communication that allows for thoughtful responses and can be particularly helpful for those who express themselves better in writing.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Is Online Therapy Effective?</h2>
              <p className="mb-6">
                Research consistently shows that online therapy can be just as effective as in-person therapy for many 
                mental health conditions, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Depression and anxiety disorders</li>
                <li>Post-traumatic stress disorder (PTSD)</li>
                <li>Eating disorders</li>
                <li>Substance use disorders</li>
                <li>Relationship and family issues</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Who Can Benefit from Online Therapy?</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Busy professionals with limited time</li>
                <li>Parents with young children</li>
                <li>Individuals in rural or remote areas</li>
                <li>People with mobility challenges</li>
                <li>Those who prefer privacy and anonymity</li>
                <li>Frequent travelers</li>
                <li>Individuals with social anxiety</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Getting Started with Online Therapy</h2>
              <p className="mb-6">
                Beginning online therapy is simple and straightforward. Most platforms offer easy signup processes, 
                secure video platforms, and matching services to connect you with the right therapist for your needs.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Ready to Start Your Mental Health Journey?
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  Take the first step toward accessible, convenient mental health care. Our online therapy platform 
                  connects you with licensed professionals who can provide the support you need, when and where you need it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Get Matched with a Therapist</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/mental-health-tests">Take a Free Assessment</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free matching service • No commitment required • Licensed therapists only
                </p>
              </div>

              {/* Related Resources Section */}
              <div className="mt-12 relative">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl blur-3xl -z-10"></div>
                
                <div className="relative bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                      <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                      <span className="text-sm font-medium text-primary">Explore More</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                      Related Resources
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      Continue your mental health journey with these carefully curated resources
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Related Articles */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">Related Articles</h3>
                        </div>
                        <div className="space-y-3">
                          <Link 
                            to="/blog/therapy-online-insurance-coverage" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              Online Therapy Covered by Insurance: Complete Guide
                            </span>
                          </Link>
                          <Link 
                            to="/blog/understanding-anxiety" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              Understanding Anxiety: Signs, Symptoms, and Treatment Options
                            </span>
                          </Link>
                          <Link 
                            to="/blog/couples-therapy-communication" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              Couples Therapy: Strengthening Relationships Through Communication
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Mental Health Library */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="font-semibold text-lg text-purple-600 dark:text-purple-400">Mental Health Library</h3>
                        </div>
                        <div className="space-y-3">
                          <Link 
                            to="/conditions/anxiety" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Anxiety Disorders Treatment
                            </span>
                          </Link>
                          <Link 
                            to="/conditions/depression" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Depression Treatment Options
                            </span>
                          </Link>
                          <Link 
                            to="/online-therapy" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Learn More About Online Therapy
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Free Mental Health Tests */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-300/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                            <ClipboardList className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="font-semibold text-lg text-green-600 dark:text-green-400">Free Mental Health Tests</h3>
                        </div>
                        <div className="space-y-3">
                          <Link 
                            to="/mental-health-tests" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Complete Mental Health Assessment
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-tests#anxiety" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Anxiety Assessment Quiz
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-tests#depression" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Depression Screening Test
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 text-center">
                    <Link to="/therapist-matching">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Star className="h-4 w-4" />
                        <span>Start Your Journey Today</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BenefitsOnlineTherapy;