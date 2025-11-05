import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, CheckCircle, AlertCircle } from "lucide-react";

const EMDRTherapy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="EMDR Therapy Explained: How Eye Movement Therapy Treats Trauma | Georgia"
        description="Complete guide to EMDR therapy: learn how eye movement desensitization and reprocessing works, the 8 phases of EMDR treatment, success rates for PTSD, and what to expect in sessions."
        keywords="EMDR therapy, eye movement therapy, trauma treatment, EMDR for PTSD, EMDR Georgia, trauma therapy"
        canonicalUrl="https://chctherapy.com/blog/emdr-therapy-trauma-treatment"
        ogTitle="EMDR Therapy Explained: Eye Movement Therapy for Trauma"
        ogDescription="Discover how EMDR therapy uses eye movements to process trauma and treat PTSD. Learn about the 8 phases, effectiveness, and what to expect."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "EMDR Therapy Explained: How Eye Movement Therapy Treats Trauma",
          description: "Complete guide to EMDR therapy and how it effectively treats trauma, PTSD, and other mental health conditions.",
          author: {
            "@type": "Organization",
            name: "Coping and Healing Counseling"
          },
          publisher: {
            "@type": "Organization",
            name: "Coping and Healing Counseling",
            logo: {
              "@type": "ImageObject",
              url: "https://chctherapy.com/chc-logo.png"
            }
          },
          datePublished: "2025-01-22",
          dateModified: "2025-01-22"
        }}
      />
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">Trauma-Focused Therapy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                EMDR Therapy: Eye Movement Treatment for Trauma
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understanding how EMDR therapy works, the science behind eye movements, and how this powerful approach helps process traumatic memories.
              </p>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">What is EMDR Therapy?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based psychotherapy approach developed by Dr. Francine Shapiro in 1987. Originally designed to treat post-traumatic stress disorder (PTSD), EMDR has since proven effective for a wide range of trauma-related conditions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike traditional talk therapy, EMDR doesn't require you to talk in detail about the traumatic event. Instead, it uses bilateral stimulation—typically eye movements, but sometimes taps or sounds—to help your brain process traumatic memories in a way that reduces their emotional impact.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  EMDR is recognized by major organizations including the American Psychiatric Association, the World Health Organization, and the Department of Veterans Affairs as an effective treatment for trauma. In Georgia and nationwide, EMDR-trained therapists help thousands of people heal from traumatic experiences each year.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">How EMDR Works: The Science</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When you experience trauma, your brain's natural processing system can become overwhelmed. Traumatic memories get "stuck" in their raw, unprocessed form, complete with the disturbing images, thoughts, emotions, and physical sensations you experienced during the event.
                </p>
                
                <div className="bg-secondary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Adaptive Information Processing Model</h3>
                  <p className="text-muted-foreground mb-4">
                    EMDR is based on the Adaptive Information Processing (AIP) model, which suggests that:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Your brain has a natural healing capacity similar to physical healing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Traumatic experiences can block this natural processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Bilateral stimulation helps "unblock" the processing system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">Once unblocked, the brain can heal psychological trauma naturally</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Research suggests that the eye movements (or other bilateral stimulation) work by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Activating both hemispheres of the brain</li>
                  <li>Mimicking the brain's natural processing during REM sleep</li>
                  <li>Reducing the vividness and emotional intensity of traumatic memories</li>
                  <li>Helping integrate traumatic memories into your broader life narrative</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">The 8 Phases of EMDR Treatment</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  EMDR follows a structured, eight-phase approach to ensure comprehensive treatment and lasting results:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 1: History Taking</h3>
                    <p className="text-muted-foreground">
                      Your therapist gathers information about your history, identifies traumatic memories to target, and creates a treatment plan. This phase may take one or more sessions.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 2: Preparation</h3>
                    <p className="text-muted-foreground">
                      You learn what to expect from EMDR and develop coping skills to manage emotional distress between sessions. Your therapist ensures you feel safe and ready to begin processing.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 3: Assessment</h3>
                    <p className="text-muted-foreground">
                      You identify the specific components of each target memory: the image, negative belief about yourself, desired positive belief, emotions, physical sensations, and distress level.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 4: Desensitization</h3>
                    <p className="text-muted-foreground">
                      This is the heart of EMDR. While focusing on the traumatic memory, you follow your therapist's hand movements (or other bilateral stimulation) in sets of 30-40 seconds. The memory's emotional charge decreases as processing occurs.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 5: Installation</h3>
                    <p className="text-muted-foreground">
                      Once the memory is less distressing, you work to strengthen positive beliefs about yourself in relation to the event (e.g., "I am safe now" or "I did the best I could").
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 6: Body Scan</h3>
                    <p className="text-muted-foreground">
                      You check for any remaining physical tension or discomfort related to the memory. If present, these sensations are processed with additional bilateral stimulation.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 7: Closure</h3>
                    <p className="text-muted-foreground">
                      Your therapist helps you return to a state of equilibrium at the end of each session, whether or not processing is complete. You're taught self-calming techniques to use between sessions.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Phase 8: Reevaluation</h3>
                    <p className="text-muted-foreground">
                      At the beginning of each new session, you and your therapist assess progress and determine if additional processing is needed for previous targets or if new targets should be addressed.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">What Conditions Does EMDR Treat?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  While EMDR was originally developed for PTSD, research has shown it to be effective for numerous conditions:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Trauma-Related</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Post-Traumatic Stress Disorder (PTSD)</li>
                      <li>• Complex PTSD</li>
                      <li>• Childhood trauma</li>
                      <li>• Single-incident trauma</li>
                      <li>• Assault or abuse</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Anxiety & Panic</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Panic disorder</li>
                      <li>• Phobias</li>
                      <li>• Performance anxiety</li>
                      <li>• Social anxiety</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Mood & Self-Esteem</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Depression</li>
                      <li>• Low self-esteem</li>
                      <li>• Grief and loss</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Other Concerns</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Chronic pain</li>
                      <li>• Disturbing life experiences</li>
                      <li>• Attachment issues</li>
                      <li>• Performance enhancement</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">EMDR Success Rates and Research</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  EMDR has been extensively researched, with studies consistently showing impressive results:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Rapid results:</strong> Studies show that 84-90% of single-trauma victims no longer have PTSD after just three 90-minute sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Long-lasting effects:</strong> Follow-up studies show that benefits are maintained over time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Combat veterans:</strong> A study of 100+ combat veterans found that 77% no longer had PTSD after 12 EMDR sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Efficiency:</strong> EMDR often works faster than other trauma therapies, requiring fewer sessions</span>
                  </li>
                </ul>

                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                  <p className="text-muted-foreground italic">
                    "EMDR is recommended as an effective treatment for trauma in practice guidelines throughout the world, including the American Psychiatric Association, the Department of Defense, and the World Health Organization."
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Common Misconceptions About EMDR</h2>
                
                <div className="space-y-6">
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Myth: EMDR is hypnosis</h3>
                        <p className="text-muted-foreground">
                          <strong>Reality:</strong> You remain fully conscious and in control during EMDR. There's no trance state, and you can stop at any time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Myth: You have to relive the trauma in detail</h3>
                        <p className="text-muted-foreground">
                          <strong>Reality:</strong> You don't need to describe the traumatic event in detail. Brief attention to the memory while doing bilateral stimulation is sufficient for processing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Myth: EMDR erases memories</h3>
                        <p className="text-muted-foreground">
                          <strong>Reality:</strong> EMDR doesn't erase memories. It helps you process them so they're less emotionally disturbing and no longer interfere with your daily life.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Myth: It's just a distraction technique</h3>
                        <p className="text-muted-foreground">
                          <strong>Reality:</strong> While the exact mechanism isn't fully understood, research shows EMDR produces lasting neurobiological changes and is far more than simple distraction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">What to Expect in an EMDR Session</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">During Processing</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      While focusing on a traumatic memory, you'll follow your therapist's fingers as they move back and forth across your visual field. After each set (about 30-40 seconds), your therapist will ask what you're noticing. You might experience:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Different images or thoughts related to the memory</li>
                      <li>Changes in emotions or physical sensations</li>
                      <li>Connections to other memories or insights</li>
                      <li>A decrease in the memory's emotional intensity</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">After Sessions</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Processing can continue between sessions. You might notice:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Dreams related to the trauma</li>
                      <li>New insights or perspectives</li>
                      <li>Memories of related events</li>
                      <li>Changes in how you feel about the traumatic event</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Your therapist will provide you with self-soothing techniques to use if you experience any distress between sessions.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Finding an EMDR Therapist in Georgia</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Not all therapists are trained in EMDR. When seeking EMDR therapy in Georgia, look for:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground"><strong>EMDR International Association (EMDRIA) training:</strong> Therapists should have completed official EMDR training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground"><strong>Experience with trauma:</strong> Ask about their experience treating conditions similar to yours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground"><strong>Proper licensing:</strong> Georgia requires mental health professionals to be licensed (LPC, LCSW, psychologist)</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  At Coping and Healing Counseling, our EMDR-trained therapists provide compassionate, effective trauma treatment to clients throughout Georgia, both in-person and through secure telehealth sessions.
                </p>
              </section>

            </div>
          </div>
        </article>

        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Heal from Trauma?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our EMDR-trained therapists are here to help you process traumatic memories and reclaim your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/get-started">Schedule Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/conditions/ptsd">Learn About PTSD Treatment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/blog/ptsd-recovery" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">PTSD Recovery Guide</h3>
                  <p className="text-muted-foreground text-sm">Comprehensive information about PTSD treatment and recovery.</p>
                </div>
              </Link>
              <Link to="/blog/understanding-anxiety" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">Understanding Anxiety</h3>
                  <p className="text-muted-foreground text-sm">Learn about anxiety disorders and treatment options.</p>
                </div>
              </Link>
              <Link to="/blog/benefits-online-therapy" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">Online Therapy Benefits</h3>
                  <p className="text-muted-foreground text-sm">Discover how telehealth makes trauma therapy more accessible.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default EMDRTherapy;