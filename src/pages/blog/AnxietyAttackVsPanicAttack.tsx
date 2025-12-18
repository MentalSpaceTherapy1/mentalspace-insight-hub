import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const AnxietyAttackVsPanicAttack = () => {
  const articleSchema = generateArticleSchema(
    "Anxiety Attack vs Panic Attack: What's the Difference?",
    "Learn the key differences between anxiety attacks and panic attacks, including symptoms, duration, and when to seek help. Expert guidance from Georgia therapists.",
    "https://chctherapy.com/blog/anxiety-attack-vs-panic-attack",
    "2025-01-15",
    "2025-01-15",
    "https://chctherapy.com/therapy-hero-og.jpg"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="Anxiety Attack vs Panic Attack: What's the Difference? | CHC"
        description="Learn the key differences between anxiety attacks and panic attacks, including symptoms, duration, and when to seek help. Expert guidance from Georgia therapists."
        keywords="anxiety attack vs panic attack, difference between anxiety and panic attack, panic attack symptoms, anxiety attack symptoms"
        canonicalUrl="https://chctherapy.com/blog/anxiety-attack-vs-panic-attack"
        ogTitle="Anxiety Attack vs Panic Attack: What's the Difference?"
        ogDescription="Learn the key differences between anxiety attacks and panic attacks, including symptoms, duration, and when to seek help."
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
                Anxiety Attack vs Panic Attack: Understanding the Difference
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
                If you've ever experienced sudden, overwhelming fear or worry, you may have wondered whether you were 
                having an anxiety attack or a panic attack. While these terms are often used interchangeably, they're 
                actually different experiences with distinct characteristics.
              </p>

              <p className="mb-6">
                Understanding the difference can help you recognize what you're experiencing, communicate better with 
                healthcare providers, and find the right treatment approach.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Is a Panic Attack?</h2>
              <p className="mb-4">
                A panic attack is a sudden, intense surge of fear or discomfort that peaks within minutes. Panic attacks 
                are recognized in the Diagnostic and Statistical Manual of Mental Disorders (DSM-5) and have specific 
                diagnostic criteria.
              </p>
              
              <p className="mb-4">During a panic attack, you may experience four or more of these symptoms:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Physical Symptoms:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Racing or pounding heartbeat</li>
                <li>Sweating</li>
                <li>Trembling or shaking</li>
                <li>Shortness of breath or feeling smothered</li>
                <li>Chest pain or discomfort</li>
                <li>Nausea or stomach distress</li>
                <li>Dizziness or lightheadedness</li>
                <li>Chills or hot flashes</li>
                <li>Numbness or tingling sensations</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Psychological Symptoms:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Fear of losing control or "going crazy"</li>
                <li>Fear of dying</li>
                <li>Feeling detached from yourself (depersonalization)</li>
                <li>Feeling like things around you aren't real (derealization)</li>
              </ul>

              <p className="mb-4">
                Panic attacks typically peak within 10 minutes and usually subside within 20-30 minutes, though you may 
                feel drained afterward.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
                <p className="font-medium">
                  <strong>Key characteristic:</strong> Panic attacks can occur "out of the blue" with no apparent trigger. 
                  They can happen during calm moments or even wake you from sleep.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Is an Anxiety Attack?</h2>
              <p className="mb-4">
                Unlike panic attacks, "anxiety attack" isn't a clinical term recognized in the DSM-5. However, it's widely 
                used to describe a period of intense anxiety that builds gradually in response to a stressor.
              </p>

              <p className="mb-4">Anxiety attacks typically involve:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Physical Symptoms:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Increased heart rate</li>
                <li>Muscle tension</li>
                <li>Restlessness</li>
                <li>Fatigue</li>
                <li>Difficulty sleeping</li>
                <li>Stomach upset</li>
                <li>Headaches</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Psychological Symptoms:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Excessive worry</li>
                <li>Difficulty concentrating</li>
                <li>Irritability</li>
                <li>Feeling on edge</li>
                <li>Anticipating the worst</li>
              </ul>

              <div className="bg-secondary/5 border-l-4 border-secondary p-4 my-6">
                <p className="font-medium">
                  <strong>Key characteristic:</strong> Anxiety attacks usually have an identifiable trigger—a stressful 
                  situation, worry about an upcoming event, or accumulated stress.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Key Differences Between Anxiety and Panic Attacks</h2>
              
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-4 py-2 text-left font-semibold">Feature</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold">Panic Attack</th>
                      <th className="border border-border px-4 py-2 text-left font-semibold">Anxiety Attack</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-2 font-medium">Onset</td>
                      <td className="border border-border px-4 py-2">Sudden, without warning</td>
                      <td className="border border-border px-4 py-2">Gradual build-up</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border px-4 py-2 font-medium">Trigger</td>
                      <td className="border border-border px-4 py-2">Often none (can occur "out of the blue")</td>
                      <td className="border border-border px-4 py-2">Usually identifiable stressor</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2 font-medium">Intensity</td>
                      <td className="border border-border px-4 py-2">Extremely intense, overwhelming</td>
                      <td className="border border-border px-4 py-2">Less intense but persistent</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border px-4 py-2 font-medium">Duration</td>
                      <td className="border border-border px-4 py-2">Peaks in ~10 minutes, resolves in 20-30 minutes</td>
                      <td className="border border-border px-4 py-2">Can last hours, days, or longer</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2 font-medium">Fear of dying</td>
                      <td className="border border-border px-4 py-2">Common</td>
                      <td className="border border-border px-4 py-2">Less common</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border px-4 py-2 font-medium">Physical symptoms</td>
                      <td className="border border-border px-4 py-2">Severe, often mimics heart attack</td>
                      <td className="border border-border px-4 py-2">Present but typically less severe</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2 font-medium">Clinical recognition</td>
                      <td className="border border-border px-4 py-2">DSM-5 defined</td>
                      <td className="border border-border px-4 py-2">Not a clinical diagnosis</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Can You Have Both?</h2>
              <p className="mb-4">
                Yes. Many people experience both anxiety attacks and panic attacks, and they can overlap. Someone with an 
                anxiety disorder may experience panic attacks. And a panic attack can trigger ongoing anxiety about having 
                another one.
              </p>
              <p className="mb-6">
                It's also possible for anxiety to build to the point where it triggers a panic attack. This is why some 
                people describe their experience as starting with anxiety and escalating into panic.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">When Anxiety or Panic Becomes a Disorder</h2>
              <p className="mb-4">
                Experiencing occasional anxiety or even a panic attack doesn't necessarily mean you have a disorder. 
                However, these experiences may indicate a diagnosable condition when they meet certain criteria:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Panic Disorder:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>You have recurrent, unexpected panic attacks</li>
                <li>You worry persistently about having more attacks</li>
                <li>You change your behavior to avoid potential triggers</li>
                <li>Symptoms aren't caused by substances or another medical condition</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Generalized Anxiety Disorder:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Excessive worry occurs more days than not for at least six months</li>
                <li>The worry is difficult to control</li>
                <li>It causes significant distress or impairs daily functioning</li>
              </ul>

              <p className="mb-6">
                <strong>Other anxiety disorders</strong> include{" "}
                <Link to="/mental-health-library/social-anxiety-disorder" className="text-primary hover:underline">
                  social anxiety disorder
                </Link>
                , specific phobias, and separation anxiety.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What to Do During a Panic Attack</h2>
              <p className="mb-4">If you're experiencing a panic attack:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Remember it will pass</h3>
              <p className="mb-4">
                Panic attacks are temporary. Remind yourself that the intense feelings will subside, usually within 20-30 minutes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Focus on your breathing</h3>
              <p className="mb-2">Try slow, deep breaths:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Inhale for 4 counts</li>
                <li>Hold for 4 counts</li>
                <li>Exhale for 4 counts</li>
                <li>Repeat</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Ground yourself</h3>
              <p className="mb-2">Use the 5-4-3-2-1 technique:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Name 5 things you can see</li>
                <li>4 things you can touch</li>
                <li>3 things you can hear</li>
                <li>2 things you can smell</li>
                <li>1 thing you can taste</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Don't fight it</h3>
              <p className="mb-6">
                Trying to suppress a panic attack can intensify it. Accept the sensations and let them pass.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What to Do During an Anxiety Attack</h2>
              <p className="mb-4">For anxiety attacks:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Identify the trigger</h3>
              <p className="mb-4">
                If possible, recognize what's causing your anxiety. This awareness can help you address the root cause.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Challenge anxious thoughts</h3>
              <p className="mb-2">Ask yourself:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Is this worry realistic?</li>
                <li>What's the worst that could actually happen?</li>
                <li>Have I handled similar situations before?</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Take action if possible</h3>
              <p className="mb-4">
                If your anxiety is about something you can address, taking even a small step can reduce the feeling of helplessness.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Practice relaxation</h3>
              <p className="mb-6">
                Progressive muscle relaxation, meditation, or gentle movement can help reduce physical tension.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
              <p className="mb-4">Consider reaching out to a mental health professional if:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Panic attacks or anxiety episodes are frequent</li>
                <li>You're avoiding situations due to fear of attacks</li>
                <li>Symptoms interfere with work, relationships, or daily life</li>
                <li>You're using alcohol or substances to cope</li>
                <li>You're experiencing depression alongside anxiety</li>
                <li>You're having thoughts of self-harm</li>
              </ul>

              <p className="mb-6">
                Both panic attacks and anxiety respond well to treatment.{" "}
                <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">
                  Cognitive behavioral therapy (CBT)
                </Link>{" "}
                is highly effective for both panic disorder and anxiety disorders. Other helpful approaches include 
                exposure therapy, mindfulness-based therapies, and in some cases, medication.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Treatment Options</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Therapy:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">CBT</Link>{" "}
                  helps you identify and change thought patterns that contribute to panic and anxiety
                </li>
                <li>Exposure therapy gradually desensitizes you to feared situations</li>
                <li>
                  <Link to="/blog/mindfulness-based-therapy-guide" className="text-primary hover:underline">
                    Mindfulness-based therapy
                  </Link>{" "}
                  teaches you to observe anxious thoughts without reacting
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Medication:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>SSRIs and SNRIs can reduce the frequency and intensity of panic attacks</li>
                <li>Benzodiazepines may be used short-term for acute anxiety</li>
                <li>Beta-blockers can help with physical symptoms</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Lifestyle changes:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Regular exercise</li>
                <li>Adequate sleep</li>
                <li>Limiting caffeine and alcohol</li>
                <li>Stress management techniques</li>
              </ul>

              <p className="mb-6">
                Learn more about anxiety symptoms and treatment in our{" "}
                <Link to="/guides/anxiety" className="text-primary hover:underline">
                  comprehensive anxiety guide
                </Link>.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Getting Help at CHC</h2>
              <p className="mb-4">
                At{" "}
                <Link to="/therapist-matching" className="text-primary hover:underline">
                  Coping and Healing Counseling
                </Link>
                , we specialize in treating anxiety and panic disorders. Our Georgia-licensed therapists use 
                evidence-based approaches to help you:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Understand your anxiety triggers</li>
                <li>Develop coping strategies that work</li>
                <li>Reduce the frequency and intensity of panic attacks</li>
                <li>Reclaim your daily life from anxiety's grip</li>
              </ul>

              <p className="mb-6">
                Whether you're experiencing occasional anxiety, frequent panic attacks, or aren't sure what you're 
                dealing with, we can help.
              </p>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Take the Next Step
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  You don't have to face anxiety or panic alone. Help is available, and with the right support, 
                  most people see significant improvement.
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
                  Free consultation • Licensed therapists • Confidential assessments
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
                      Continue your anxiety management journey with these carefully curated resources
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
                          <Link to="/blog/cognitive-behavioral-therapy" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">What Is CBT Therapy?</span>
                          </Link>
                          <Link to="/blog/understanding-anxiety" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">Understanding Anxiety</span>
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

export default AnxietyAttackVsPanicAttack;
