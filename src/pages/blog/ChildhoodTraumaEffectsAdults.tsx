import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Heart, Shield, Users, AlertTriangle, Activity, Baby } from "lucide-react";

const ChildhoodTraumaEffectsAdults = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Childhood Trauma: How It Affects You as an Adult",
    "description": "Childhood trauma can affect your mental health, relationships, and physical health decades later. Learn the signs, ACEs research, and how therapy helps adults heal.",
    "author": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chctherapy.com/chc-logo.png"
      }
    },
    "datePublished": "2024-01-18",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chctherapy.com/blog/childhood-trauma-effects-adults"
    },
    "keywords": "childhood trauma effects adults, ACEs adverse childhood experiences, childhood trauma symptoms, healing childhood trauma, adult survivors childhood trauma"
  };

  return (
    <>
      <SEOHead
        title="Childhood Trauma: How It Affects You as an Adult | CHC Georgia"
        description="Childhood trauma can affect your mental health, relationships, and physical health decades later. Learn the signs, ACEs research, and how therapy helps adults heal."
        canonicalUrl="https://chctherapy.com/blog/childhood-trauma-effects-adults"
        keywords="childhood trauma effects adults, ACEs adverse childhood experiences, childhood trauma symptoms, healing childhood trauma, adult survivors childhood trauma"
        ogTitle="Childhood Trauma: How It Affects You as an Adult"
        ogDescription="Childhood trauma can affect your mental health, relationships, and physical health decades later. Learn the signs and how therapy helps."
        ogType="article"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li>/</li>
              <li className="text-foreground">Childhood Trauma Effects in Adults</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Trauma & Healing
              </span>
              <span className="text-muted-foreground text-sm">14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Childhood Trauma: How It Affects You as an Adult
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Many adults struggling with anxiety, depression, relationship problems, or feeling "stuck" don't connect their current difficulties to experiences from childhood. But research is clear: what happens to us as children shapes who we become as adults in profound ways.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              If you experienced trauma in childhood—whether abuse, neglect, household dysfunction, or other adverse experiences—those early wounds may still be affecting you today. Understanding this connection is the first step toward healing.
            </p>

            {/* What Counts as Childhood Trauma */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Baby className="h-8 w-8 text-primary" />
                What Counts as Childhood Trauma?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Childhood trauma extends beyond extreme abuse. It includes any experience that overwhelmed a child's ability to cope and left lasting effects. This can include:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Abuse</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Physical abuse</li>
                    <li>• Sexual abuse</li>
                    <li>• Emotional or psychological abuse</li>
                    <li>• Verbal abuse</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Neglect</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Physical neglect (basic needs not met)</li>
                    <li>• Emotional neglect (lack of support, validation)</li>
                    <li>• Supervision neglect</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Household Dysfunction</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Domestic violence exposure</li>
                    <li>• Parental substance abuse</li>
                    <li>• Parental mental illness</li>
                    <li>• Incarcerated family member</li>
                    <li>• Parental separation or divorce</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Other Adverse Experiences</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Bullying</li>
                    <li>• Community violence</li>
                    <li>• Medical trauma or serious illness</li>
                    <li>• Loss of a loved one</li>
                    <li>• Extreme poverty or discrimination</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/20 border border-accent/30 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Emotional neglect</strong> is particularly insidious because it's about what <em>didn't</em> happen—the comfort that wasn't given, the feelings that weren't validated, the presence that wasn't there. Many adults don't recognize emotional neglect as trauma because nothing "happened."
                </p>
              </div>
            </section>

            {/* The ACEs Study */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Activity className="h-8 w-8 text-primary" />
                The ACEs Study: Groundbreaking Research
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Adverse Childhood Experiences (ACEs) study, conducted by the CDC and Kaiser Permanente, examined how childhood trauma affects long-term health. The findings were striking:
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-4">Key Findings</h4>
                <ul className="space-y-3">
                  {[
                    "ACEs are very common—about 67% of people have at least one",
                    "ACEs tend to cluster—if you have one, you likely have more",
                    "ACEs have a dose-response relationship with negative outcomes",
                    "ACEs affect health decades later"
                  ].map((finding, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-4">Health Risks Associated with ACEs</h4>
                <div className="grid md:grid-cols-2 gap-2 text-muted-foreground text-sm">
                  <div>• Depression and anxiety</div>
                  <div>• Substance abuse</div>
                  <div>• Suicide attempts</div>
                  <div>• Heart disease</div>
                  <div>• Cancer</div>
                  <div>• Chronic lung disease</div>
                  <div>• Liver disease</div>
                  <div>• Obesity</div>
                  <div>• Autoimmune disorders</div>
                  <div>• Early death</div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Why this matters:</strong> The ACEs research helps us understand that many adult struggles have roots in childhood. It's not weakness or character flaws—it's the documented impact of early adversity on brain development and health.
              </p>
            </section>

            {/* Effects on Mental Health */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                How Childhood Trauma Affects Adult Mental Health
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Childhood trauma can manifest in various mental health challenges:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Depression</h4>
                  <p className="text-muted-foreground text-sm">
                    Adults with childhood trauma have higher rates of depression. The trauma may have created deep-seated beliefs about being unworthy, unlovable, or helpless—beliefs that fuel depressive symptoms.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Anxiety Disorders</h4>
                  <p className="text-muted-foreground text-sm">
                    When you grew up in an unpredictable or threatening environment, your nervous system may have become calibrated to constant threat. This can result in generalized anxiety, panic attacks, or{" "}
                    <Link to="/mental-health-library/social-anxiety-disorder" className="text-primary hover:underline">social anxiety</Link>.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">PTSD and Complex PTSD</h4>
                  <p className="text-muted-foreground text-sm">
                    Childhood trauma, especially when prolonged and interpersonal, often leads to{" "}
                    <Link to="/blog/complex-ptsd-vs-ptsd" className="text-primary hover:underline">Complex PTSD</Link>—which includes PTSD symptoms plus difficulties with emotional regulation, self-perception, and relationships.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Attachment Difficulties</h4>
                  <p className="text-muted-foreground text-sm">
                    If your caregivers were the source of trauma or were unavailable, you may have developed insecure attachment patterns that affect adult relationships.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Dissociation</h4>
                  <p className="text-muted-foreground text-sm">
                    Children who can't physically escape trauma may learn to mentally escape through dissociation. This pattern can persist into adulthood.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Substance Use Disorders</h4>
                  <p className="text-muted-foreground text-sm">
                    Many people use substances to manage the pain of unresolved childhood trauma—a form of self-medication.
                  </p>
                </div>
              </div>
            </section>

            {/* Effects on Relationships */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                How Childhood Trauma Affects Adult Relationships
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Perhaps nowhere is childhood trauma's impact more visible than in relationships:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Trust Issues</h4>
                  <p className="text-muted-foreground text-sm">
                    If the people who should have protected you hurt you instead, trusting others feels dangerous. You may struggle to trust even safe people.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Repeating Unhealthy Patterns</h4>
                  <p className="text-muted-foreground text-sm">
                    Without awareness and healing, we often unconsciously recreate familiar dynamics—choosing partners who feel "familiar" even when they're unhealthy.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Boundary Problems</h4>
                  <p className="text-muted-foreground text-sm">
                    Childhood trauma can result in boundaries that are too rigid (keeping everyone out) or too loose (accepting mistreatment).
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">People-Pleasing</h4>
                  <p className="text-muted-foreground text-sm">
                    If your childhood survival depended on managing others' emotions, you may have become a chronic people-pleaser—losing yourself in the process.
                  </p>
                </div>
              </div>

              <div className="bg-accent/20 border border-accent/30 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">Attachment Patterns from Childhood Trauma</h4>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li><strong>Anxious attachment:</strong> Fear of abandonment, need for constant reassurance, relationship preoccupation</li>
                  <li><strong>Avoidant attachment:</strong> Discomfort with closeness, emotional withdrawal, valuing independence over intimacy</li>
                  <li><strong>Disorganized attachment:</strong> Wanting closeness but fearing it, chaotic relationship patterns</li>
                </ul>
              </div>
            </section>

            {/* Effects on Physical Health */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                How Childhood Trauma Affects Physical Health
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The connection between childhood trauma and adult physical health is well-documented:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2">Chronic Stress Response</h4>
                  <p className="text-muted-foreground text-sm">
                    Childhood trauma can dysregulate your stress response system. Your body may produce too much cortisol (or become depleted), affecting immune function and metabolism.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2">Chronic Inflammation</h4>
                  <p className="text-muted-foreground text-sm">
                    ACEs are associated with higher levels of chronic inflammation, which contributes to numerous health conditions.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">Health Conditions Linked to Childhood Trauma</h4>
                <div className="grid md:grid-cols-2 gap-2 text-muted-foreground text-sm">
                  <div>• Autoimmune disorders</div>
                  <div>• Chronic pain conditions</div>
                  <div>• Migraines</div>
                  <div>• Irritable bowel syndrome</div>
                  <div>• Fibromyalgia</div>
                  <div>• Heart disease</div>
                  <div>• Obesity</div>
                  <div>• Chronic fatigue</div>
                </div>
              </div>
            </section>

            {/* Signs Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                Signs You May Be Affected by Childhood Trauma
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many adults don't realize their struggles trace back to childhood. Consider whether you experience:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Emotional Signs</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Feeling empty or numb</li>
                    <li>• Difficulty identifying or expressing emotions</li>
                    <li>• Intense emotions that feel uncontrollable</li>
                    <li>• Chronic shame or feeling "defective"</li>
                    <li>• Persistent self-criticism</li>
                    <li>• Chronic anxiety or depression</li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Relational Signs</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Difficulty trusting people</li>
                    <li>• Pattern of unhealthy relationships</li>
                    <li>• Fear of intimacy or commitment</li>
                    <li>• People-pleasing or codependency</li>
                    <li>• Difficulty setting boundaries</li>
                    <li>• Feeling responsible for others' emotions</li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Behavioral Signs</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Self-sabotage</li>
                    <li>• Difficulty with success or accepting good things</li>
                    <li>• Substance use or addictive behaviors</li>
                    <li>• Overworking or perfectionism</li>
                    <li>• Difficulty relaxing or feeling safe</li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Physical Signs</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Chronic health problems</li>
                    <li>• Unexplained physical symptoms</li>
                    <li>• Heightened startle response</li>
                    <li>• Sleep problems</li>
                    <li>• Tension and body pain</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Healing Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Healing from Childhood Trauma as an Adult
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The good news: your brain remains capable of change throughout life. Healing from childhood trauma is possible, even decades later.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">Therapy is typically necessary</h4>
                <p className="text-muted-foreground">
                  While self-help has its place, childhood trauma usually requires professional support. A trained therapist provides the safe relationship and specialized interventions needed for deep healing.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">Effective Treatments Include</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2">EMDR</h4>
                  <p className="text-muted-foreground text-sm">
                    <Link to="/blog/emdr-therapy" className="text-primary hover:underline">EMDR</Link> helps process traumatic memories and change negative beliefs formed in childhood.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2">Trauma-focused CBT</h4>
                  <p className="text-muted-foreground text-sm">
                    <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">CBT</Link> helps identify and change negative thought patterns from childhood experiences.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2">Internal Family Systems (IFS)</h4>
                  <p className="text-muted-foreground text-sm">
                    Works with different "parts" of yourself—including wounded child parts—to promote internal healing.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2">Attachment-focused Therapy</h4>
                  <p className="text-muted-foreground text-sm">
                    Works on healing attachment wounds through the therapeutic relationship itself.
                  </p>
                </div>
              </div>

              <div className="bg-accent/20 border border-accent/30 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-3">The Healing Process</h4>
                <ol className="space-y-2 text-muted-foreground">
                  <li><strong>1. Stabilization:</strong> Building safety, coping skills, and emotional regulation</li>
                  <li><strong>2. Processing:</strong> Working through traumatic memories and their effects</li>
                  <li><strong>3. Integration:</strong> Making meaning, rebuilding identity, and reconnecting with life</li>
                </ol>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Learn more in our{" "}
                <Link to="/guides/trauma-ptsd" className="text-primary hover:underline font-medium">
                  comprehensive trauma and PTSD guide
                </Link>.
              </p>
            </section>

            {/* What Healing Looks Like */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Healing Looks Like
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Healing from childhood trauma doesn't mean forgetting or being unaffected by your past. It means:
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Understanding how your past shaped you without being controlled by it",
                  "Feeling your feelings without being overwhelmed",
                  "Having healthy relationships with appropriate trust and boundaries",
                  "Believing you're worthy of good things",
                  "Being able to be present in your life",
                  "Having choice in how you respond rather than reacting automatically",
                  "Making peace with your story while writing new chapters"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-accent/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                Many trauma survivors eventually find that their experiences give them depth, empathy, and resilience they wouldn't otherwise have. This doesn't mean the trauma was "worth it"—but it can be integrated into a meaningful life.
              </p>
            </section>

            {/* Getting Help CTA */}
            <section className="mb-12">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Getting Help for Childhood Trauma
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you recognize yourself in this article, consider reaching out for support. At{" "}
                  <Link to="/therapist-matching" className="text-primary hover:underline font-medium">
                    Coping and Healing Counseling
                  </Link>, our therapists specialize in helping adults heal from childhood trauma.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We offer{" "}
                  <Link to="/conditions/ptsd-therapy-georgia" className="text-primary hover:underline">trauma-specialized therapy</Link>,{" "}
                  <Link to="/blog/emdr-therapy" className="text-primary hover:underline">EMDR therapy</Link> for processing traumatic memories, and{" "}
                  <Link to="/online-therapy" className="text-primary hover:underline">online therapy throughout Georgia</Link>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/therapist-matching">
                      Schedule Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/guides/trauma-ptsd">
                      Read Trauma Guide
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/mental-health-tests">
                      Free Assessment
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="border-t border-border pt-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center italic">
                You survived your childhood. Now you can heal from it. It's never too late.
              </p>
            </section>
          </div>

          {/* Related Articles */}
          <aside className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/complex-ptsd-vs-ptsd" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Complex PTSD vs PTSD
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Understanding the difference between these trauma conditions.
                  </p>
                </div>
              </Link>
              <Link to="/blog/emdr-therapy" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    EMDR Therapy Explained
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    How eye movement therapy helps heal trauma.
                  </p>
                </div>
              </Link>
              <Link to="/guides/trauma-ptsd" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Trauma & PTSD Guide
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive guide to understanding and healing trauma.
                  </p>
                </div>
              </Link>
            </div>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default ChildhoodTraumaEffectsAdults;
