import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const HowToCalmAnxietyQuickly = () => {
  const articleSchema = generateArticleSchema(
    "How to Calm Anxiety Quickly: 10 Techniques That Actually Work",
    "Learn proven techniques to calm anxiety fast. From breathing exercises to grounding methods, discover what really works when anxiety strikes.",
    "https://chctherapy.com/blog/how-to-calm-anxiety-quickly",
    "2025-01-15",
    "2025-01-15",
    "https://chctherapy.com/therapy-hero-og.jpg"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="How to Calm Anxiety Quickly: 10 Techniques That Actually Work | CHC"
        description="Learn proven techniques to calm anxiety fast. From breathing exercises to grounding methods, discover what really works when anxiety strikes."
        keywords="how to calm anxiety, anxiety relief techniques, quick anxiety relief, calm down anxiety, stop anxiety fast"
        canonicalUrl="https://chctherapy.com/blog/how-to-calm-anxiety-quickly"
        ogTitle="How to Calm Anxiety Quickly: 10 Techniques That Actually Work"
        ogDescription="Learn proven techniques to calm anxiety fast. From breathing exercises to grounding methods, discover what really works when anxiety strikes."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={articleSchema}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </nav>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How to Calm Anxiety Quickly: 10 Techniques That Actually Work
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  January 15, 2025
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  8 min read
                </div>
                <span className="text-sm">By CHC Therapy Team</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                When anxiety hits, it can feel overwhelming. Your heart races, your thoughts spiral, and everything 
                feels urgent and out of control. In those moments, you need strategies that work fast.
              </p>

              <p className="mb-6">
                The good news is that there are evidence-based techniques that can help you calm anxiety in minutes. 
                These aren't just feel-good tips—they're grounded in how your nervous system works and have helped 
                countless people regain a sense of calm.
              </p>

              <p className="mb-6 font-medium">Here are 10 techniques you can use right now.</p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. The 4-7-8 Breathing Technique</h2>
              <p className="mb-4">
                This breathing pattern activates your parasympathetic nervous system—the body's "rest and digest" 
                mode that counteracts the fight-or-flight response.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How to do it:</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li>Exhale completely through your mouth</li>
                <li>Inhale quietly through your nose for 4 counts</li>
                <li>Hold your breath for 7 counts</li>
                <li>Exhale slowly through your mouth for 8 counts</li>
                <li>Repeat 3-4 times</li>
              </ol>

              <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
                <p className="font-medium">
                  <strong>Why it works:</strong> The extended exhale signals safety to your brain. When you're in 
                  danger, you breathe quickly. By deliberately slowing your exhale, you're telling your nervous 
                  system there's no threat.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Box Breathing (Square Breathing)</h2>
              <p className="mb-4">
                Used by Navy SEALs and first responders, box breathing is simple and effective for high-stress moments.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How to do it:</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li>Inhale for 4 counts</li>
                <li>Hold for 4 counts</li>
                <li>Exhale for 4 counts</li>
                <li>Hold for 4 counts</li>
                <li>Repeat for 2-3 minutes</li>
              </ol>

              <p className="mb-6">
                <strong>Tip:</strong> Visualize tracing a square as you breathe—up on the inhale, across on the hold, 
                down on the exhale, across on the final hold.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. The 5-4-3-2-1 Grounding Technique</h2>
              <p className="mb-4">
                When anxiety makes you feel disconnected from reality or trapped in your head, grounding brings you 
                back to the present moment.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How to do it:</h3>
              <p className="mb-2">Name out loud or in your mind:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>5</strong> things you can see</li>
                <li><strong>4</strong> things you can touch (and actually touch them)</li>
                <li><strong>3</strong> things you can hear</li>
                <li><strong>2</strong> things you can smell</li>
                <li><strong>1</strong> thing you can taste</li>
              </ul>

              <div className="bg-secondary/5 border-l-4 border-secondary p-4 my-6">
                <p className="font-medium">
                  <strong>Why it works:</strong> Anxiety pulls you into worries about the future or regrets about 
                  the past. By engaging your senses, you anchor yourself in the here and now, where you're actually safe.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Cold Water Reset</h2>
              <p className="mb-4">A quick physical intervention can interrupt the anxiety spiral.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How to do it:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Splash cold water on your face</li>
                <li>Hold ice cubes in your hands</li>
                <li>Place a cold washcloth on the back of your neck</li>
                <li>Run cold water over your wrists</li>
              </ul>

              <p className="mb-6">
                <strong>Why it works:</strong> Cold activates the "dive reflex," which slows your heart rate. It also 
                creates a strong physical sensation that interrupts anxious thought patterns.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Progressive Muscle Relaxation (Quick Version)</h2>
              <p className="mb-4">
                Anxiety creates muscle tension. By deliberately tensing and releasing muscles, you can release that 
                physical anxiety.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Quick version (2 minutes):</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li>Clench your fists tightly for 5 seconds, then release</li>
                <li>Scrunch your shoulders up to your ears for 5 seconds, then drop them</li>
                <li>Squeeze your face muscles (scrunch everything toward your nose) for 5 seconds, then release</li>
                <li>Tense your whole body for 5 seconds, then let go completely</li>
                <li>Notice the contrast between tension and relaxation</li>
              </ol>

              <p className="mb-6">
                <strong>Full version:</strong> Work through each muscle group from toes to head, tensing for 5 seconds 
                and releasing for 10 seconds.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. The "Name It to Tame It" Technique</h2>
              <p className="mb-4">Research shows that labeling your emotions reduces their intensity.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How to do it:</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li>Pause and notice what you're feeling</li>
                <li>Name the emotion specifically: "I'm feeling anxious about the meeting" or "I'm experiencing fear about what might happen"</li>
                <li>Acknowledge it without judgment: "It makes sense I feel this way"</li>
              </ol>

              <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
                <p className="font-medium">
                  <strong>Why it works:</strong> When you name an emotion, you activate your prefrontal cortex (the 
                  thinking brain), which helps regulate the amygdala (the alarm center). This simple act of labeling 
                  shifts you from reacting to observing.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Movement and Physical Release</h2>
              <p className="mb-4">Anxiety prepares your body to fight or flee. Gentle movement helps discharge that energy.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Quick options:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Take a brisk 5-minute walk</li>
                <li>Do 20 jumping jacks</li>
                <li>Shake out your hands and arms vigorously</li>
                <li>Dance to one song</li>
                <li>Do a few yoga poses (child's pose, forward fold)</li>
                <li>Stretch your neck and shoulders</li>
              </ul>

              <p className="mb-6">
                <strong>Why it works:</strong> Physical movement metabolizes stress hormones like adrenaline and 
                cortisol. Even brief movement can significantly reduce physical anxiety symptoms.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. The STOP Technique</h2>
              <p className="mb-4">STOP is a mindfulness-based method for interrupting anxiety spirals.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How to do it:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li><strong>S</strong> – Stop what you're doing</li>
                <li><strong>T</strong> – Take a breath (one slow, deep breath)</li>
                <li><strong>O</strong> – Observe (notice your thoughts, feelings, and body sensations without judgment)</li>
                <li><strong>P</strong> – Proceed mindfully (choose how to respond rather than react)</li>
              </ul>

              <p className="mb-6">
                <strong>When to use it:</strong> STOP works well when you catch yourself spiraling or when you notice 
                early signs of anxiety building.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Challenge Anxious Thoughts</h2>
              <p className="mb-4">
                Anxiety often involves cognitive distortions—thoughts that feel true but aren't accurate.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Quick thought challenge:</h3>
              <p className="mb-2">When you notice an anxious thought, ask yourself:</p>
              <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li>Is this thought definitely true, or am I assuming?</li>
                <li>What evidence supports this thought? What evidence contradicts it?</li>
                <li>What would I tell a friend who had this thought?</li>
                <li>What's the most realistic outcome (not worst case)?</li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Common anxiety distortions:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Catastrophizing ("This will be a disaster")</li>
                <li>Mind reading ("They think I'm incompetent")</li>
                <li>Fortune telling ("I know it will go badly")</li>
                <li>All-or-nothing thinking ("If it's not perfect, it's a failure")</li>
              </ul>

              <p className="mb-6">
                Learn more about challenging anxious thoughts with{" "}
                <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">
                  cognitive behavioral therapy
                </Link>.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. The "What's Actually Happening Right Now?" Check</h2>
              <p className="mb-4">Anxiety is often about what might happen, not what is happening.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How to do it:</h3>
              <ol className="list-decimal pl-6 mb-4 space-y-1">
                <li>Pause and ask: "What is actually happening right now, in this moment?"</li>
                <li>Separate facts from fears: "The fact is I have a presentation tomorrow. The fear is that it will go terribly."</li>
                <li>Focus on what you can control right now</li>
              </ol>

              <div className="bg-muted/50 border border-border rounded-lg p-4 my-6">
                <p className="mb-2"><strong>Example internal dialogue:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Anxiety says: "Everything is falling apart!"</li>
                  <li>Reality check: "Right now, I'm sitting in my living room. I'm safe. The thing I'm worried about hasn't happened yet."</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">When Quick Techniques Aren't Enough</h2>
              <p className="mb-4">
                These techniques are powerful for managing anxiety in the moment. However, if you find yourself needing 
                them constantly, or if anxiety is interfering with your daily life, it may be time to address the root causes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Signs you might benefit from professional support:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Anxiety is frequent or constant</li>
                <li>You're avoiding situations due to anxiety</li>
                <li>Physical symptoms are severe or persistent</li>
                <li>Anxiety affects your work, relationships, or sleep</li>
                <li>Self-help strategies aren't providing lasting relief</li>
              </ul>

              <p className="mb-6">
                Therapy, particularly{" "}
                <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">
                  cognitive behavioral therapy
                </Link>
                , can help you understand your anxiety patterns, develop personalized coping strategies, and create 
                lasting change.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Building Your Anxiety Toolkit</h2>
              <p className="mb-4">
                Not every technique works for everyone. Experiment with these methods when you're relatively calm so 
                you know which ones resonate with you. Then, when anxiety strikes, you'll have your go-to tools ready.
              </p>

              <p className="mb-4">Consider creating a physical or digital "calm kit":</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Written reminders of techniques that work for you</li>
                <li>A calming playlist</li>
                <li>Photos that bring you peace</li>
                <li>Scents you find soothing</li>
                <li>A list of people you can reach out to</li>
              </ul>

              <p className="mb-6">
                For a deeper understanding of anxiety and treatment options, read our{" "}
                <Link to="/guides/anxiety" className="text-primary hover:underline">
                  comprehensive anxiety guide
                </Link>.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Get Support for Anxiety</h2>
              <p className="mb-4">
                At{" "}
                <Link to="/therapist-matching" className="text-primary hover:underline">
                  Coping and Healing Counseling
                </Link>
                , we help people move from managing anxiety moment-to-moment to fundamentally changing their 
                relationship with anxiety.
              </p>

              <p className="mb-4">
                Our Georgia-licensed therapists specialize in anxiety treatment using evidence-based approaches. 
                Whether you're dealing with generalized anxiety,{" "}
                <Link to="/mental-health-library/social-anxiety-disorder" className="text-primary hover:underline">
                  social anxiety
                </Link>
                , panic attacks, or just feel constantly on edge, we can help.
              </p>

              <p className="mb-6">
                You've taken the first step by learning these techniques. When you're ready for deeper support, we're here.
              </p>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Ready to Take the Next Step?
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  Move from managing anxiety to truly understanding and overcoming it with professional support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Schedule a Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/free-anxiety-test-online">Take Our Free Anxiety Assessment</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free consultation • Licensed therapists • Evidence-based treatment
                </p>
              </div>

              {/* Related Resources Section */}
              <div className="mt-12 relative">
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
                      Continue your anxiety management journey with these helpful resources
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
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
                          <Link to="/blog/anxiety-attack-vs-panic-attack" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">Anxiety vs Panic Attacks</span>
                          </Link>
                          <Link to="/blog/cognitive-behavioral-therapy" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">What Is CBT Therapy?</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="font-semibold text-lg text-purple-600 dark:text-purple-400">Guides</h3>
                        </div>
                        <div className="space-y-3">
                          <Link to="/guides/anxiety" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">Complete Anxiety Guide</span>
                          </Link>
                          <Link to="/anxiety-therapy-georgia" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">Anxiety Therapy in Georgia</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-300/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                            <ClipboardList className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="font-semibold text-lg text-green-600 dark:text-green-400">Free Assessments</h3>
                        </div>
                        <div className="space-y-3">
                          <Link to="/free-anxiety-test-online" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">Free Anxiety Test</span>
                          </Link>
                          <Link to="/mental-health-tests" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">All Mental Health Tests</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default HowToCalmAnxietyQuickly;
