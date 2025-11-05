import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, CheckCircle, ArrowRight } from "lucide-react";

const CognitiveBehavioralTherapy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="What is Cognitive Behavioral Therapy (CBT)? Techniques, Benefits & How It Works"
        description="Comprehensive guide to Cognitive Behavioral Therapy (CBT): learn evidence-based techniques, benefits, what to expect in sessions, and how CBT treats anxiety, depression, and more."
        keywords="cognitive behavioral therapy, CBT techniques, CBT for anxiety, CBT therapy Georgia, cognitive therapy, behavioral therapy"
        canonicalUrl="https://chctherapy.com/blog/cognitive-behavioral-therapy-cbt-guide"
        ogTitle="What is Cognitive Behavioral Therapy (CBT)? Complete Guide"
        ogDescription="Learn how CBT works, proven techniques, and how cognitive behavioral therapy can help with anxiety, depression, and other mental health conditions."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What is Cognitive Behavioral Therapy (CBT)? Techniques, Benefits & How It Works",
          description: "Comprehensive guide to Cognitive Behavioral Therapy (CBT): learn evidence-based techniques, benefits, what to expect in sessions, and how CBT treats anxiety, depression, and more.",
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
          dateModified: "2025-01-22",
          image: "https://chctherapy.com/therapy-hero-og.jpg"
        }}
      />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-medium">Evidence-Based Therapy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                What is Cognitive Behavioral Therapy (CBT)?
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A complete guide to understanding CBT techniques, benefits, and how this proven therapy approach can transform your mental health.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding Cognitive Behavioral Therapy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cognitive Behavioral Therapy (CBT) is one of the most widely researched and effective forms of psychotherapy available today. Developed in the 1960s by Dr. Aaron Beck, CBT is based on the principle that our thoughts, feelings, and behaviors are interconnected—and that changing negative thought patterns can lead to changes in feelings and behaviors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike some traditional forms of therapy that focus extensively on past experiences, CBT is action-oriented and focuses on present problems and practical solutions. It's a structured, goal-directed approach that typically involves 12-20 sessions, though this can vary based on individual needs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  CBT has been proven effective in treating a wide range of mental health conditions, including anxiety disorders, depression, PTSD, OCD, eating disorders, and substance use disorders. In Georgia and across the country, CBT is considered the gold standard for many psychological conditions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">The Core Principles of CBT</h2>
                <div className="bg-secondary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Cognitive Triangle</h3>
                  <p className="text-muted-foreground mb-4">
                    CBT operates on the understanding that thoughts, feelings, and behaviors are interconnected:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Thoughts:</strong> Our interpretations of events and situations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Feelings:</strong> Our emotional responses to those thoughts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Behaviors:</strong> Our actions in response to thoughts and feelings</span>
                    </li>
                  </ul>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  By identifying and modifying distorted thinking patterns, CBT helps break the cycle of negative thoughts that contribute to emotional distress and problematic behaviors.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Common CBT Techniques and Tools</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">1. Cognitive Restructuring (Thought Challenging)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This core CBT technique helps you identify and challenge negative automatic thoughts. Your therapist will teach you to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Recognize cognitive distortions (all-or-nothing thinking, catastrophizing, overgeneralization)</li>
                      <li>Question the evidence for and against your thoughts</li>
                      <li>Develop more balanced, realistic perspectives</li>
                      <li>Replace unhelpful thoughts with more adaptive ones</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">2. Behavioral Activation</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Particularly effective for depression, behavioral activation involves:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Scheduling positive activities and experiences</li>
                      <li>Breaking tasks into manageable steps</li>
                      <li>Gradually increasing engagement with life</li>
                      <li>Monitoring mood improvements with increased activity</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">3. Exposure Therapy</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Used primarily for anxiety disorders and phobias, exposure therapy involves:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Creating a hierarchy of feared situations</li>
                      <li>Gradual, controlled exposure to anxiety triggers</li>
                      <li>Learning that feared outcomes rarely occur</li>
                      <li>Building confidence through repeated successful exposures</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">4. Thought Records and Journaling</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Between sessions, clients often complete thought records that help identify patterns:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Situation: What happened?</li>
                      <li>Automatic thought: What went through your mind?</li>
                      <li>Emotion: How did you feel?</li>
                      <li>Evidence: What supports or contradicts this thought?</li>
                      <li>Alternative thought: What's a more balanced perspective?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">5. Relaxation and Mindfulness</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Many CBT therapists incorporate relaxation techniques such as deep breathing, progressive muscle relaxation, and mindfulness exercises to help manage anxiety and stress responses.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">What to Expect in CBT Sessions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">First Session (Assessment)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your initial CBT session typically involves a comprehensive assessment where your therapist will learn about your current concerns, symptoms, history, and goals. Together, you'll develop a treatment plan with specific, measurable objectives.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Typical Session Structure</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Most CBT sessions follow a consistent format:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Check-in:</strong> Review your week and current mood</li>
                      <li><strong>Homework review:</strong> Discuss practice assignments from previous session</li>
                      <li><strong>Agenda setting:</strong> Collaboratively decide what to work on</li>
                      <li><strong>Main work:</strong> Learn and practice new skills</li>
                      <li><strong>Homework assignment:</strong> Plan practice for the coming week</li>
                      <li><strong>Feedback:</strong> Share thoughts about the session</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Between-Session Work</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      CBT is an active therapy that requires practice outside of sessions. Homework assignments might include thought records, behavioral experiments, exposure exercises, or practicing new coping skills. This between-session work is crucial for making progress.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Conditions Treated with CBT</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Research has demonstrated CBT's effectiveness for numerous mental health conditions:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Anxiety Disorders</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Generalized Anxiety Disorder</li>
                      <li>• Social Anxiety Disorder</li>
                      <li>• Panic Disorder</li>
                      <li>• Specific Phobias</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Mood Disorders</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Major Depression</li>
                      <li>• Persistent Depressive Disorder</li>
                      <li>• Bipolar Disorder (as adjunct)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Trauma-Related</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Post-Traumatic Stress Disorder</li>
                      <li>• Acute Stress Disorder</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-foreground">Other Conditions</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Obsessive-Compulsive Disorder</li>
                      <li>• Eating Disorders</li>
                      <li>• Substance Use Disorders</li>
                      <li>• Insomnia</li>
                      <li>• Chronic Pain Management</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">The Evidence Behind CBT</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CBT is one of the most extensively researched forms of psychotherapy, with hundreds of clinical trials demonstrating its effectiveness:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Depression:</strong> Multiple studies show CBT is as effective as antidepressant medication for mild to moderate depression, with lower relapse rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Anxiety:</strong> CBT demonstrates 60-80% effectiveness rates for various anxiety disorders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>PTSD:</strong> Trauma-focused CBT is recommended as first-line treatment by major clinical guidelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Long-term benefits:</strong> Skills learned in CBT provide lasting benefits, with many people maintaining improvements years after treatment</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">CBT in Georgia: What to Know</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you're seeking CBT in Georgia, here are some important considerations:
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Finding a Qualified CBT Therapist</h3>
                    <p className="text-muted-foreground mb-3">Look for therapists who:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Have specific training in CBT (not all therapists do)</li>
                      <li>Are licensed in Georgia (LPC, LCSW, psychologist)</li>
                      <li>Have experience treating your specific concern</li>
                      <li>Offer evidence-based CBT, not just "CBT-informed" therapy</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Insurance Coverage</h3>
                    <p className="text-muted-foreground">
                      Most major insurance plans in Georgia cover CBT when provided by a licensed mental health professional. At Coping and Healing Counseling, we accept major insurance providers including Aetna, Blue Cross Blue Shield, Cigna, and others.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Online CBT Options</h3>
                    <p className="text-muted-foreground">
                      Research shows that online CBT can be just as effective as in-person therapy. Georgia residents can access high-quality CBT through telehealth, which is particularly beneficial for those in rural areas or with scheduling constraints.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Is CBT Right for You?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CBT may be a good fit if you:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Want a structured, time-limited approach to therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Are willing to do homework and practice skills between sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Prefer a problem-solving, skill-building approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Want to learn tools you can continue to use after therapy ends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Are dealing with anxiety, depression, or related conditions</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  While CBT is highly effective for many people, it's not the only approach. Some individuals may prefer or benefit more from other therapeutic modalities. A consultation with a qualified therapist can help determine the best approach for your unique situation.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Getting Started with CBT</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Taking the first step toward therapy can feel overwhelming, but it doesn't have to be. At Coping and Healing Counseling, our CBT-trained therapists are here to help you:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Understand how your thoughts influence your emotions and behaviors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Identify and challenge unhelpful thinking patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Develop practical coping skills for real-world situations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Create lasting change that extends beyond therapy</span>
                  </li>
                </ul>
              </section>

            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Start Your CBT Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our experienced CBT therapists in Georgia are ready to help you develop the skills and insights needed for lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/get-started">Schedule Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/mental-health-tests">Take a Free Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/blog/understanding-anxiety" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">Understanding Anxiety Disorders</h3>
                  <p className="text-muted-foreground text-sm">Learn about different types of anxiety and how CBT can help.</p>
                </div>
              </Link>
              <Link to="/blog/depression-adults" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">Depression in Adults</h3>
                  <p className="text-muted-foreground text-sm">Understand depression symptoms and evidence-based treatments.</p>
                </div>
              </Link>
              <Link to="/blog/benefits-online-therapy" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">Benefits of Online Therapy</h3>
                  <p className="text-muted-foreground text-sm">Discover how teletherapy makes CBT more accessible.</p>
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

export default CognitiveBehavioralTherapy;