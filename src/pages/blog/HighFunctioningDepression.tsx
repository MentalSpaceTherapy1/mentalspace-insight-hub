import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const HighFunctioningDepression = () => {
  const articleSchema = generateArticleSchema(
    "High-Functioning Depression: Signs You're Struggling Even When You Seem Fine",
    "High-functioning depression lets you go through the motions while suffering inside. Learn the signs, why it's often missed, and how to get help.",
    "https://chctherapy.com/blog/high-functioning-depression",
    "2025-01-15",
    "2025-01-15",
    "https://chctherapy.com/therapy-hero-og.jpg"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="High-Functioning Depression: Signs You're Struggling Even When You Seem Fine | CHC"
        description="High-functioning depression lets you go through the motions while suffering inside. Learn the signs, why it's often missed, and how to get help."
        keywords="high functioning depression, persistent depressive disorder, hidden depression, depression but functioning, dysthymia"
        canonicalUrl="https://chctherapy.com/blog/high-functioning-depression"
        ogTitle="High-Functioning Depression: Signs You're Struggling Even When You Seem Fine"
        ogDescription="High-functioning depression lets you go through the motions while suffering inside. Learn the signs and how to get help."
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
                High-Functioning Depression: When You're Struggling But No One Knows
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  January 15, 2025
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  9 min read
                </div>
                <span className="text-sm">By CHC Therapy Team</span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                From the outside, everything looks fine. You go to work, meet your responsibilities, maybe even excel 
                at what you do. You show up for friends and family. You keep your life together.
              </p>

              <p className="mb-6">
                But inside, it's a different story. There's a persistent heaviness, a lack of joy, a feeling that 
                you're just going through the motions. You're functioning—but you're not really living.
              </p>

              <p className="mb-6 font-medium">
                This is high-functioning depression, and it's more common than you might think.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Is High-Functioning Depression?</h2>
              <p className="mb-4">
                High-functioning depression isn't an official clinical diagnosis, but it describes a real experience. 
                It typically refers to persistent depressive disorder (dysthymia) or chronic low-grade depression that 
                doesn't completely disable you but significantly diminishes your quality of life.
              </p>

              <p className="mb-4">People with high-functioning depression often:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Meet their obligations and responsibilities</li>
                <li>Appear "normal" or even successful to others</li>
                <li>Maintain relationships (though they may feel hollow)</li>
                <li>Push through daily tasks despite feeling depleted</li>
                <li>Hide their struggles behind a competent exterior</li>
              </ul>

              <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
                <p className="font-medium">
                  The "functioning" part is both what helps you survive and what keeps you from getting help. Because 
                  you're not falling apart visibly, you—and everyone around you—may not recognize that you're struggling.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Signs of High-Functioning Depression</h2>
              <p className="mb-4">
                High-functioning depression often looks different from major depression. Here's what to watch for:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Persistent low mood</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You rarely feel genuinely happy or excited</li>
                <li>There's a constant background sadness or emptiness</li>
                <li>You can't remember the last time you felt truly good</li>
                <li>Even positive events don't lift your mood for long</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Chronic exhaustion</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You're always tired, regardless of how much you sleep</li>
                <li>Everything feels like more effort than it should</li>
                <li>You push through fatigue constantly</li>
                <li>Rest doesn't feel restorative</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Going through the motions</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You do what you need to do, but without engagement</li>
                <li>Activities you used to enjoy feel like obligations</li>
                <li>You're present physically but checked out mentally</li>
                <li>Life feels like a to-do list rather than an experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Perfectionism and overworking</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You use achievement to feel worthy or to distract yourself</li>
                <li>Slowing down feels dangerous or uncomfortable</li>
                <li>You're harder on yourself than anyone else is</li>
                <li>Your self-worth is tied to productivity</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Difficulty experiencing joy</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Pleasure is muted or fleeting</li>
                <li>You go through the motions of enjoyable activities without feeling them</li>
                <li>You might think, "I should be happy about this, but I'm not"</li>
                <li>Positive moments don't stick with you</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Negative self-talk</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Critical inner voice is constant</li>
                <li>You feel like a fraud or like you're fooling everyone</li>
                <li>You dismiss your accomplishments as "not good enough"</li>
                <li>You believe you don't deserve to feel this way because your life is "fine"</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Social withdrawal (even while socializing)</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You show up for social events but feel disconnected</li>
                <li>Relationships feel draining rather than nourishing</li>
                <li>You'd rather be alone but also feel lonely</li>
                <li>You're physically present but emotionally distant</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Physical symptoms</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Changes in appetite or weight</li>
                <li>Sleep problems (too much or too little)</li>
                <li>Frequent headaches or body aches</li>
                <li>Low energy and motivation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why High-Functioning Depression Is Often Missed</h2>
              <p className="mb-4">High-functioning depression flies under the radar for several reasons:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The bar for "real" depression seems higher</h3>
              <p className="mb-4">
                Many people think depression means being unable to get out of bed or function at all. If you're 
                meeting your responsibilities, you might think, "It can't be depression if I'm still working."
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">You've become an expert at hiding it</h3>
              <p className="mb-4">
                You've likely been pushing through for so long that putting on a "fine" mask is automatic. You 
                might not even consciously realize you're doing it.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Achievement masks suffering</h3>
              <p className="mb-4">
                Success at work or school can make it seem like nothing is wrong. People see your accomplishments 
                and assume you're thriving.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">You compare yourself to others</h3>
              <p className="mb-4">
                You might think your struggles don't count because others "have it worse." But depression isn't a 
                competition, and your pain is valid regardless of your circumstances.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">It's been going on so long, it feels normal</h3>
              <p className="mb-4">
                When low-grade depression persists for months or years, you may forget what feeling good is like. 
                You assume everyone feels this way.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Stigma and self-judgment</h3>
              <p className="mb-6">
                You might believe you should be able to "just feel better" or that seeking help is a sign of 
                weakness—especially when you're functioning in other areas of life.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Hidden Cost of High-Functioning Depression</h2>
              <p className="mb-4">
                Just because you're functioning doesn't mean you're okay. High-functioning depression takes a real toll:
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Quality of life</h3>
              <p className="mb-4">
                You're surviving, but not thriving. Life feels gray and flat. You're missing out on the richness 
                and joy that's possible.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Physical health</h3>
              <p className="mb-4">
                Chronic depression affects your immune system, sleep, and overall physical health. The exhaustion 
                isn't imagined—your body is under constant stress.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Relationships</h3>
              <p className="mb-4">
                Even though you show up, you're not fully present. Emotional distance can erode relationships over time.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Long-term mental health</h3>
              <p className="mb-4">
                Untreated persistent depression can lead to major depressive episodes. The longer it goes unaddressed, 
                the more entrenched it becomes.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Lost years</h3>
              <p className="mb-6">
                People often look back and realize they spent years—sometimes decades—not realizing they didn't 
                have to feel that way.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">You Still Deserve Help</h2>
              <p className="mb-4">
                One of the biggest barriers to getting help for high-functioning depression is the belief that you 
                don't "deserve" it. You might think:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>"Other people have real problems. I'm just being dramatic."</li>
                <li>"I should be grateful for what I have."</li>
                <li>"I don't have the right to feel this way."</li>
                <li>"It's not bad enough for therapy."</li>
              </ul>

              <div className="bg-secondary/5 border-l-4 border-secondary p-4 my-6">
                <p className="font-medium">
                  Here's the truth: <strong>You don't have to hit rock bottom to deserve support.</strong> If you're 
                  struggling—even if you're still functioning—you deserve help. Period.
                </p>
              </div>

              <p className="mb-6">
                In fact, getting help before things get worse is one of the best things you can do for yourself. 
                You don't have to wait until you're in crisis.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Treatment for High-Functioning Depression</h2>
              <p className="mb-4">High-functioning depression responds well to treatment. Options include:</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Therapy</h3>
              <p className="mb-4">
                <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">
                  Cognitive behavioral therapy (CBT)
                </Link>{" "}
                is highly effective for depression. It helps you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Identify negative thought patterns</li>
                <li>Challenge beliefs that keep you stuck</li>
                <li>Build habits that support mental health</li>
                <li>Develop a more compassionate relationship with yourself</li>
              </ul>

              <p className="mb-4">
                Other helpful approaches include behavioral activation (gradually re-engaging with meaningful 
                activities), interpersonal therapy, and{" "}
                <Link to="/blog/mindfulness-based-therapy-guide" className="text-primary hover:underline">
                  mindfulness-based therapy
                </Link>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Medication</h3>
              <p className="mb-4">
                Antidepressants can help, especially if depression has a strong biological component or hasn't 
                responded fully to therapy alone. Many people benefit from a combination of medication and therapy.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Lifestyle factors</h3>
              <p className="mb-2">While not a cure, these support recovery:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Regular physical activity</li>
                <li>Adequate sleep</li>
                <li>Social connection (even when it feels hard)</li>
                <li>Limiting alcohol</li>
                <li>Sunlight exposure</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Self-compassion work</h3>
              <p className="mb-4">
                High achievers with high-functioning depression often struggle with harsh self-judgment. Learning 
                self-compassion is an important part of recovery.
              </p>

              <p className="mb-6">
                For more information, read our{" "}
                <Link to="/guides/depression" className="text-primary hover:underline">
                  comprehensive depression guide
                </Link>.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Recovery Looks Like</h2>
              <p className="mb-4">
                Recovery from high-functioning depression isn't just about feeling less bad—it's about rediscovering 
                what feeling good is like.
              </p>

              <p className="mb-2">People in recovery often report:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Actually enjoying activities rather than just doing them</li>
                <li>Feeling present in their lives</li>
                <li>Having energy that matches their ambitions</li>
                <li>Experiencing genuine connection with others</li>
                <li>Feeling lighter, like a weight has lifted</li>
                <li>Realizing how much harder they were making things for themselves</li>
              </ul>

              <p className="mb-6 font-medium">
                Recovery is possible. Many people are surprised by how much better they can feel.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Getting Started with Help</h2>
              <p className="mb-4">
                If you recognize yourself in this article, consider it a sign that you deserve support. You don't 
                have to keep pushing through alone.
              </p>

              <p className="mb-6">
                At{" "}
                <Link to="/therapist-matching" className="text-primary hover:underline">
                  Coping and Healing Counseling
                </Link>
                , we understand high-functioning depression. Many of our clients are successful, capable people 
                who've been struggling silently. We meet you where you are—no judgment about how "functional" 
                you've been.
              </p>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Take the Next Step
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  You've been functioning for so long. It's okay to start thriving.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Schedule a Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/free-depression-test-online">Take Our Free Depression Screening</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free consultation • Licensed therapists • Confidential support
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
                      Continue learning about depression and treatment options
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
                          <Link to="/blog/depression-adults" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">Depression in Adults</span>
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
                          <Link to="/guides/depression" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">Complete Depression Guide</span>
                          </Link>
                          <Link to="/depression-therapy-georgia" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">Depression Therapy in Georgia</span>
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
                          <Link to="/free-depression-test-online" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">Free Depression Screening</span>
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

export default HighFunctioningDepression;
