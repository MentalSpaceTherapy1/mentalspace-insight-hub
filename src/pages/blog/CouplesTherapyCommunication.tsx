import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import couplesTherapyHeroImage from "@/assets/couples-therapy-hero.jpg";

const CouplesTherapyCommunication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="Couples Therapy: Strengthening Relationships Through Communication"
        description="Learn how couples therapy can help partners improve communication, resolve conflicts, and build stronger relationships."
        keywords="couples therapy, relationship communication, marriage counseling, relationship problems, conflict resolution"
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
                Couples Therapy: Strengthening Relationships Through Communication
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 12, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  7 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={couplesTherapyHeroImage}
                  alt="Couples therapy session - improving relationship communication"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Every relationship faces challenges, and communication breakdowns are among the most common issues 
                couples encounter. Couples therapy provides a safe, structured environment where partners can learn 
                to communicate more effectively and strengthen their relationship.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Communication Matters</h2>
              <p className="mb-6">
                Communication is the foundation of any healthy relationship. When couples communicate effectively, 
                they can express their needs, resolve conflicts, and build deeper intimacy. Poor communication, 
                on the other hand, can lead to misunderstandings, resentment, and relationship deterioration.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common Communication Problems</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Not listening actively:</strong> Focusing on what to say next instead of truly hearing your partner</li>
                <li><strong>Defensive responses:</strong> Becoming defensive when receiving feedback or criticism</li>
                <li><strong>Stonewalling:</strong> Shutting down or withdrawing during difficult conversations</li>
                <li><strong>Criticism vs. complaints:</strong> Attacking character rather than addressing specific behaviors</li>
                <li><strong>Contempt:</strong> Using sarcasm, name-calling, or disrespectful language</li>
                <li><strong>Mind reading:</strong> Assuming you know what your partner thinks or feels</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How Couples Therapy Helps</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Creating a Safe Space</h3>
              <p className="mb-6">
                Couples therapy provides a neutral, judgment-free environment where both partners can express 
                themselves honestly. The therapist acts as a mediator, ensuring that conversations remain 
                productive and respectful.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Learning New Communication Skills</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Active listening:</strong> Fully focusing on and understanding your partner's perspective</li>
                <li><strong>"I" statements:</strong> Expressing feelings without blaming or criticizing</li>
                <li><strong>Validation:</strong> Acknowledging your partner's feelings, even when you disagree</li>
                <li><strong>Time-outs:</strong> Taking breaks when conversations become too heated</li>
                <li><strong>Problem-solving techniques:</strong> Working together to find mutually acceptable solutions</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Identifying Patterns</h3>
              <p className="mb-6">
                Therapists help couples recognize negative communication patterns and cycles that keep them stuck. 
                Understanding these patterns is the first step toward changing them.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Types of Couples Therapy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Emotionally Focused Therapy (EFT)</h3>
              <p className="mb-4">
                Focuses on creating secure emotional bonds and improving attachment between partners.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Gottman Method</h3>
              <p className="mb-4">
                Based on extensive research, this approach helps couples build friendship, manage conflict, 
                and create shared meaning.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="mb-4">
                Helps couples identify and change negative thought patterns and behaviors that impact their relationship.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What to Expect in Couples Therapy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Initial Assessment</h3>
              <p className="mb-4">
                The therapist will assess your relationship dynamics, communication patterns, and specific concerns.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Goal Setting</h3>
              <p className="mb-4">
                Together, you'll establish clear, achievable goals for your relationship.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Skill Building</h3>
              <p className="mb-4">
                You'll learn and practice new communication techniques both in session and at home.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Progress Monitoring</h3>
              <p className="mb-6">
                Regular check-ins to assess progress and adjust treatment as needed.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Benefits of Improved Communication</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Increased emotional intimacy and connection</li>
                <li>More effective conflict resolution</li>
                <li>Greater relationship satisfaction</li>
                <li>Reduced stress and anxiety within the relationship</li>
                <li>Better problem-solving abilities as a team</li>
                <li>Increased trust and understanding</li>
                <li>Improved ability to support each other through challenges</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Couples Therapy</h2>
              <p className="mb-6">
                Couples therapy isn't just for relationships in crisis. Many couples benefit from therapy to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Prevent problems before they become serious</li>
                <li>Navigate major life transitions</li>
                <li>Improve an already good relationship</li>
                <li>Learn skills before marriage</li>
                <li>Address specific challenges like parenting or finances</li>
              </ul>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Ready to Start Your Mental Health Journey?
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  Every relationship can benefit from improved communication. Whether you're facing challenges 
                  or simply want to strengthen your bond, couples therapy can provide valuable tools and insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Find a Couples Therapist</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/couples-therapy">Learn About Couples Therapy</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free consultation • Experienced couples therapists • Licensed professionals only
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
                      Strengthen your relationships with these carefully curated resources
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
                            to="/blog/benefits-online-therapy" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              The Benefits of Online Therapy: Accessible Mental Health Care
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
                            to="/blog/depression-adults" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              Depression in Adults: Breaking the Stigma and Finding Help
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
                            to="/couples-therapy" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Couples Therapy Services
                            </span>
                          </Link>
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
                              Relationship Health Assessment
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-tests#wellbeing" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Overall Wellbeing Assessment
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

export default CouplesTherapyCommunication;