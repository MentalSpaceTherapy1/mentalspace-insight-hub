import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import depressionPersonImage from "@/assets/depression-person.jpg";

const DepressionAdults = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="Depression in Adults: Breaking the Stigma and Finding Help"
        description="Explore the reality of adult depression, common misconceptions, and how therapy can provide a path to recovery and healing."
        keywords="adult depression, depression symptoms, depression treatment, mental health stigma, therapy"
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
                Depression in Adults: Breaking the Stigma and Finding Help
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 18, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  6 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={depressionPersonImage}
                  alt="Adult dealing with depression - mental health awareness"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Depression affects millions of adults worldwide, yet stigma and misconceptions often prevent 
                people from seeking the help they need. Understanding depression and available treatment options 
                is crucial for recovery and healing.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Understanding Adult Depression</h2>
              <p className="mb-6">
                Depression is more than just feeling sad or going through a difficult time. It's a serious 
                mental health condition that affects how you feel, think, and handle daily activities. 
                Depression can occur at any age, but adult depression often comes with unique challenges 
                related to work, relationships, and life responsibilities.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common Symptoms of Depression</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Persistent sad, anxious, or empty mood</li>
                <li>Loss of interest in activities once enjoyed</li>
                <li>Fatigue and decreased energy</li>
                <li>Difficulty concentrating or making decisions</li>
                <li>Changes in appetite or weight</li>
                <li>Sleep disturbances (insomnia or oversleeping)</li>
                <li>Feelings of worthlessness or excessive guilt</li>
                <li>Physical symptoms without clear medical cause</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Breaking the Stigma</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Common Misconceptions:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>"It's just weakness":</strong> Depression is a medical condition, not a character flaw</li>
                <li><strong>"You should just snap out of it":</strong> Depression requires proper treatment and support</li>
                <li><strong>"Successful people don't get depressed":</strong> Depression can affect anyone, regardless of achievements</li>
                <li><strong>"Medication is the only solution":</strong> Many effective treatments exist, including therapy</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Reality:</h3>
              <p className="mb-6">
                Depression is a treatable medical condition that affects brain chemistry and function. 
                Seeking help is a sign of strength and self-awareness, not weakness. With proper treatment, 
                most people with depression can recover and live fulfilling lives.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Effective Treatment Options</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Psychotherapy</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Identifies and changes negative thought patterns</li>
                <li><strong>Interpersonal Therapy (IPT):</strong> Focuses on improving relationships and communication</li>
                <li><strong>Psychodynamic Therapy:</strong> Explores unconscious thoughts and past experiences</li>
                <li><strong>Behavioral Activation:</strong> Increases engagement in meaningful activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Lifestyle Changes</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Regular exercise and physical activity</li>
                <li>Maintaining a consistent sleep schedule</li>
                <li>Eating a balanced, nutritious diet</li>
                <li>Limiting alcohol and avoiding drugs</li>
                <li>Building and maintaining social connections</li>
                <li>Engaging in hobbies and enjoyable activities</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Path to Recovery</h2>
              <p className="mb-6">
                Recovery from depression is possible, but it takes time and often requires professional help. 
                The journey may have ups and downs, but with the right support and treatment, you can regain 
                your sense of well-being and joy in life.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Signs of Healing:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Improved mood and emotional stability</li>
                <li>Increased energy and motivation</li>
                <li>Better sleep patterns</li>
                <li>Renewed interest in activities</li>
                <li>Improved relationships</li>
                <li>Better ability to cope with stress</li>
              </ul>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Ready to Start Your Mental Health Journey?
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  If you're struggling with depression, remember that help is available and recovery is possible. 
                  Taking the first step to seek help is often the hardest part, but it's also the most important.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Find a Therapist</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/mental-health-tests">Take a Depression Assessment</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free consultation • Licensed therapists • Confidential assessments
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
                      Continue your healing journey with these carefully curated resources
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
                            to="/blog/understanding-anxiety" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              Understanding Anxiety: Signs, Symptoms, and Treatment Options
                            </span>
                          </Link>
                          <Link 
                            to="/blog/benefits-online-therapy" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              The Benefits of Online Therapy: Accessible Mental Health Care
                            </span>
                          </Link>
                          <Link 
                            to="/blog/ptsd-recovery" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              PTSD Recovery: Healing from Trauma with Professional Support
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
                            to="/mental-health-library/depression" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Depression Treatment Options
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-library/anxiety" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Anxiety Disorders Treatment
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-library/bipolar-disorder" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Bipolar Disorder Management
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
                            to="/mental-health-tests#depression" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Depression Screening Test
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
                            to="/mental-health-tests" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Complete Mental Health Assessment
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

export default DepressionAdults;