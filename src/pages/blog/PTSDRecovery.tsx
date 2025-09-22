import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ptsdPersonImage from "@/assets/ptsd-person.jpg";

const PTSDRecovery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="PTSD Recovery: Healing from Trauma with Professional Support"
        description="Explore evidence-based treatments for PTSD and how therapy can help individuals process trauma and reclaim their lives."
        keywords="PTSD recovery, trauma therapy, post traumatic stress disorder, trauma treatment, PTSD healing"
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
                PTSD Recovery: Healing from Trauma with Professional Support
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 8, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  9 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={ptsdPersonImage}
                  alt="Person recovering from PTSD - trauma healing and recovery"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing a traumatic event. 
                While the effects of trauma can be overwhelming, recovery is possible with proper treatment and support. 
                Understanding PTSD and available treatments is the first step toward healing.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Understanding PTSD</h2>
              <p className="mb-6">
                PTSD is a mental health condition that can occur after experiencing or witnessing traumatic events such as:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Military combat or war experiences</li>
                <li>Physical or sexual assault</li>
                <li>Serious accidents or natural disasters</li>
                <li>Sudden death of a loved one</li>
                <li>Childhood abuse or neglect</li>
                <li>Medical emergencies or life-threatening illnesses</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common PTSD Symptoms</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Re-experiencing Symptoms</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Intrusive memories or flashbacks</li>
                <li>Nightmares related to the trauma</li>
                <li>Severe emotional distress when reminded of the event</li>
                <li>Physical reactions to trauma reminders</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Avoidance Symptoms</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Avoiding trauma-related thoughts or feelings</li>
                <li>Avoiding places, people, or activities that trigger memories</li>
                <li>Emotional numbing or detachment</li>
                <li>Loss of interest in previously enjoyed activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Negative Changes in Thinking and Mood</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Negative thoughts about oneself or the world</li>
                <li>Persistent guilt, shame, or self-blame</li>
                <li>Difficulty experiencing positive emotions</li>
                <li>Feeling disconnected from family and friends</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Changes in Physical and Emotional Reactions</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Being easily startled or hypervigilant</li>
                <li>Self-destructive behavior</li>
                <li>Problems concentrating</li>
                <li>Sleep disturbances or insomnia</li>
                <li>Irritability or aggressive behavior</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Evidence-Based PTSD Treatments</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</h3>
              <p className="mb-4">
                Helps individuals process traumatic memories and change negative thought patterns related to the trauma. 
                This approach teaches coping strategies and helps reduce avoidance behaviors.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Eye Movement Desensitization and Reprocessing (EMDR)</h3>
              <p className="mb-4">
                Uses bilateral stimulation (typically eye movements) while recalling traumatic memories to help 
                the brain process and integrate these experiences in a healthier way.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Prolonged Exposure Therapy</h3>
              <p className="mb-4">
                Gradually and safely exposes individuals to trauma-related memories, feelings, and situations 
                to reduce the power these triggers have over their lives.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cognitive Processing Therapy (CPT)</h3>
              <p className="mb-4">
                Focuses on helping individuals understand how trauma has affected their thoughts and feelings, 
                and teaches skills to challenge and modify unhelpful trauma-related thoughts.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Recovery Process</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Phase 1: Stabilization and Safety</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Establishing a sense of safety and stability</li>
                <li>Learning coping skills and emotional regulation</li>
                <li>Building a therapeutic relationship</li>
                <li>Addressing any immediate safety concerns</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Phase 2: Processing and Integration</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Working through traumatic memories</li>
                <li>Processing emotions related to the trauma</li>
                <li>Challenging negative beliefs about self and world</li>
                <li>Developing a coherent narrative of the experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Phase 3: Reconnection and Growth</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Rebuilding relationships and social connections</li>
                <li>Engaging in meaningful activities and goals</li>
                <li>Developing a sense of empowerment and agency</li>
                <li>Finding meaning and purpose beyond the trauma</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Supporting Recovery</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Self-Care Strategies</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Mindfulness and grounding techniques:</strong> Staying present and managing flashbacks</li>
                <li><strong>Regular exercise:</strong> Reducing stress hormones and improving mood</li>
                <li><strong>Healthy sleep habits:</strong> Establishing routines that promote restful sleep</li>
                <li><strong>Social support:</strong> Maintaining connections with supportive friends and family</li>
                <li><strong>Stress management:</strong> Learning healthy ways to cope with daily stressors</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Building a Support Network</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Professional mental health support</li>
                <li>Support groups with other trauma survivors</li>
                <li>Trusted friends and family members</li>
                <li>Faith or spiritual communities</li>
                <li>Peer support specialists</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Signs of Recovery</h2>
              <p className="mb-4">Recovery from PTSD is a gradual process, and progress may include:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Reduced frequency and intensity of symptoms</li>
                <li>Improved ability to manage triggers</li>
                <li>Better sleep quality and patterns</li>
                <li>Increased engagement in daily activities</li>
                <li>Stronger relationships and social connections</li>
                <li>Greater sense of hope and purpose</li>
                <li>Improved emotional regulation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Hope for Healing</h2>
              <p className="mb-6">
                PTSD can feel overwhelming, but recovery is possible. Many people who have experienced trauma 
                go on to live fulfilling, meaningful lives. With proper treatment, support, and time, you can 
                process your experiences, develop healthy coping strategies, and reclaim your life.
              </p>

              <p className="mb-6">
                Remember that healing isn't linear – there may be setbacks along the way, and that's normal. 
                What matters is having the right support and continuing to move forward, one step at a time.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Ready to Start Your Mental Health Journey?
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  If you're struggling with PTSD or trauma, professional help is available. Our experienced 
                  trauma therapists use evidence-based treatments to help you process your experiences and 
                  reclaim your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Find a Trauma Therapist</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/mental-health-tests#ptsd">Take a PTSD Assessment</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free consultation • Trauma-informed care • Confidential support
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
                            to="/blog/depression-adults" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              Depression in Adults: Breaking the Stigma and Finding Help
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
                            to="/conditions/ptsd" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              PTSD and Trauma Recovery
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
                            to="/mental-health-tests#ptsd" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              PTSD Symptom Checker
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

export default PTSDRecovery;