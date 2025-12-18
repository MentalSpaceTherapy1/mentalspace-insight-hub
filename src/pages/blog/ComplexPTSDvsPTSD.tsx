import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Heart, Shield, Users, AlertTriangle } from "lucide-react";

const ComplexPTSDvsPTSD = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complex PTSD vs PTSD: Understanding the Difference",
    "description": "Learn the key differences between Complex PTSD and PTSD, including symptoms, causes, and treatment approaches. Expert guidance from Georgia trauma therapists.",
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
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chctherapy.com/blog/complex-ptsd-vs-ptsd"
    },
    "keywords": "complex PTSD, C-PTSD, complex PTSD vs PTSD, complex trauma, CPTSD symptoms"
  };

  return (
    <>
      <SEOHead
        title="Complex PTSD vs PTSD: Understanding the Difference | CHC"
        description="Learn the key differences between Complex PTSD and PTSD, including symptoms, causes, and treatment approaches. Expert guidance from Georgia trauma therapists."
        canonicalUrl="https://chctherapy.com/blog/complex-ptsd-vs-ptsd"
        keywords="complex PTSD, C-PTSD, complex PTSD vs PTSD, complex trauma, CPTSD symptoms"
        ogTitle="Complex PTSD vs PTSD: Understanding the Difference"
        ogDescription="Learn the key differences between Complex PTSD and PTSD, including symptoms, causes, and treatment approaches."
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
              <li className="text-foreground">Complex PTSD vs PTSD</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Trauma & PTSD
              </span>
              <span className="text-muted-foreground text-sm">12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complex PTSD vs PTSD: Understanding the Difference
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              If you've experienced trauma, you may have heard terms like PTSD and Complex PTSD (C-PTSD). While they share similarities, they're distinct conditions that often require different treatment approaches.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Understanding which you might be dealing with can help you find the right support and feel less alone in your experience.
            </p>

            {/* What Is PTSD Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                What Is PTSD?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Post-Traumatic Stress Disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. PTSD is typically associated with single-incident traumas or time-limited traumatic experiences, such as:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "A serious accident",
                  "Natural disaster",
                  "Physical or sexual assault",
                  "Combat exposure",
                  "Witnessing violence",
                  "Sudden loss of a loved one"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-6">
                PTSD involves four main symptom clusters:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">1. Intrusion symptoms</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Flashbacks (feeling like the trauma is happening again)</li>
                    <li>• Nightmares about the trauma</li>
                    <li>• Intrusive memories</li>
                    <li>• Intense distress at reminders</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">2. Avoidance</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Avoiding thoughts, feelings, or memories of the trauma</li>
                    <li>• Avoiding people, places, or situations that trigger memories</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">3. Negative changes in thoughts and mood</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Persistent negative beliefs about self, others, or the world</li>
                    <li>• Distorted blame of self or others</li>
                    <li>• Persistent negative emotions</li>
                    <li>• Feeling detached from others</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">4. Changes in arousal and reactivity</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Hypervigilance (always on alert)</li>
                    <li>• Exaggerated startle response</li>
                    <li>• Irritability or angry outbursts</li>
                    <li>• Sleep problems</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                For more details on PTSD symptoms and treatment, see our{" "}
                <Link to="/guides/trauma-ptsd" className="text-primary hover:underline font-medium">
                  trauma and PTSD guide
                </Link>.
              </p>
            </section>

            {/* What Is Complex PTSD Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                What Is Complex PTSD?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Complex PTSD (C-PTSD) results from prolonged, repeated trauma, typically occurring in situations where escape is difficult or impossible. It often involves trauma that is:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Chronic (ongoing over months or years)",
                  "Interpersonal (inflicted by other people)",
                  "Occurring during developmentally vulnerable times (especially childhood)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent/20 border border-accent/30 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-4">Common causes of Complex PTSD include:</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                  <li>• Ongoing childhood abuse (physical, sexual, emotional)</li>
                  <li>• Chronic neglect</li>
                  <li>• Living with domestic violence</li>
                  <li>• Being held captive or trafficked</li>
                  <li>• Prolonged exposure to war or conflict</li>
                  <li>• Long-term bullying or harassment</li>
                  <li>• Growing up with a severely mentally ill or addicted caregiver</li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                C-PTSD includes all the symptoms of PTSD, plus additional symptoms related to how prolonged trauma affects your sense of self and relationships.
              </p>
            </section>

            {/* Key Differences Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Key Differences: Complex PTSD vs PTSD
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While there's significant overlap, several key differences distinguish C-PTSD from PTSD:
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">Cause</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">PTSD</h4>
                  <p className="text-muted-foreground text-sm">
                    Usually results from single-incident or time-limited trauma. The trauma has a clear beginning and end.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">C-PTSD</h4>
                  <p className="text-muted-foreground text-sm">
                    Results from prolonged, repeated trauma, often without a clear endpoint. The person may have lived in traumatic circumstances for years.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">Additional Symptoms in C-PTSD</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                People with Complex PTSD experience the core PTSD symptoms plus these additional challenges:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Emotional regulation difficulties</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Intense, uncontrollable emotions</li>
                    <li>• Explosive anger or complete emotional numbing</li>
                    <li>• Chronic feelings of emptiness</li>
                    <li>• Persistent sadness or suicidal thoughts</li>
                    <li>• Difficulty calming down once upset</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Negative self-perception</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Deep, pervasive shame (not just guilt about the trauma)</li>
                    <li>• Feeling fundamentally damaged, worthless, or "broken"</li>
                    <li>• Feeling completely different from other people</li>
                    <li>• Chronic self-blame</li>
                    <li>• Feeling like no one could understand you</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Relationship difficulties</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Difficulty trusting others</li>
                    <li>• Pattern of unhealthy or abusive relationships</li>
                    <li>• Feeling disconnected from others</li>
                    <li>• Difficulty with boundaries (too rigid or too loose)</li>
                    <li>• Avoiding relationships entirely or becoming overly dependent</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Dissociation</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Feeling detached from your body or emotions</li>
                    <li>• Gaps in memory</li>
                    <li>• Feeling like the world isn't real</li>
                    <li>• "Spacing out" or losing time</li>
                    <li>• Feeling like you're watching yourself from outside</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Changes in meaning and worldview</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Loss of faith or spiritual beliefs</li>
                    <li>• Feeling hopeless about the future</li>
                    <li>• Loss of previously held values</li>
                    <li>• Difficulty finding meaning in life</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">Impact on Identity</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">PTSD</h4>
                  <p className="text-muted-foreground text-sm">
                    Your sense of self is generally intact, though shaken by the trauma. You remember who you were before.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">C-PTSD</h4>
                  <p className="text-muted-foreground text-sm">
                    Trauma shaped your development, often affecting your core sense of identity. You may not know who you are outside of the trauma.
                  </p>
                </div>
              </div>
            </section>

            {/* Symptom Comparison Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Symptom Comparison Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-bold text-foreground">Symptom Area</th>
                      <th className="text-center p-4 font-bold text-foreground">PTSD</th>
                      <th className="text-center p-4 font-bold text-foreground">Complex PTSD</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-4">Intrusive memories</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/20">
                      <td className="p-4">Avoidance</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4">Hyperarousal</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/20">
                      <td className="p-4">Negative thoughts/mood</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4">Emotional dysregulation</td>
                      <td className="text-center p-4">Sometimes</td>
                      <td className="text-center p-4 font-medium text-primary">Core feature</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/20">
                      <td className="p-4">Deep shame/worthlessness</td>
                      <td className="text-center p-4">Variable</td>
                      <td className="text-center p-4 font-medium text-primary">Core feature</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4">Relationship difficulties</td>
                      <td className="text-center p-4">Variable</td>
                      <td className="text-center p-4 font-medium text-primary">Core feature</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/20">
                      <td className="p-4">Dissociation</td>
                      <td className="text-center p-4">Variable</td>
                      <td className="text-center p-4">Common</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4">Identity disturbance</td>
                      <td className="text-center p-4">Rare</td>
                      <td className="text-center p-4">Common</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/20">
                      <td className="p-4">Trust issues</td>
                      <td className="text-center p-4">Variable</td>
                      <td className="text-center p-4">Pervasive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Official Diagnosis Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Is Complex PTSD an Official Diagnosis?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This is complicated. C-PTSD is recognized in the World Health Organization's ICD-11 (International Classification of Diseases) as a distinct diagnosis. However, the American Psychiatric Association's DSM-5 does not include C-PTSD as a separate diagnosis.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the U.S., clinicians often diagnose someone with PTSD while recognizing that their presentation includes complex features. Or they may use additional diagnoses to capture the full picture.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <p className="text-foreground font-medium">
                  Regardless of the official label, what matters most is that your full range of symptoms is recognized and treated appropriately.
                </p>
              </div>
            </section>

            {/* Why the Distinction Matters */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why the Distinction Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Understanding whether you have PTSD or C-PTSD affects treatment:
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Treatment approach</h4>
                  <p className="text-muted-foreground text-sm">
                    PTSD treatment often focuses primarily on processing the traumatic memory. C-PTSD treatment typically requires additional work on emotional regulation skills, building a stable sense of self, healing relationship patterns, addressing shame at a deep level, and creating safety and stability before trauma processing.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Treatment timeline</h4>
                  <p className="text-muted-foreground text-sm">
                    C-PTSD generally requires longer treatment. While some PTSD can be effectively treated in 12-20 sessions, C-PTSD often requires months or years of therapy.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Phases of treatment</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    C-PTSD treatment typically follows phases:
                  </p>
                  <ol className="text-muted-foreground text-sm space-y-1">
                    <li>1. Stabilization (safety, coping skills, emotional regulation)</li>
                    <li>2. Trauma processing</li>
                    <li>3. Integration and reconnection</li>
                  </ol>
                  <p className="text-muted-foreground text-sm mt-3 italic">
                    Skipping phase one can make trauma processing overwhelming or even retraumatizing.
                  </p>
                </div>
              </div>
            </section>

            {/* Treatment for Complex PTSD */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                Treatment for Complex PTSD
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Several therapeutic approaches are effective for C-PTSD:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Phase-based treatment</h4>
                  <p className="text-muted-foreground text-sm">
                    Most experts recommend a phased approach, starting with stabilization before directly addressing traumatic memories.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">EMDR</h4>
                  <p className="text-muted-foreground text-sm">
                    <Link to="/blog/emdr-therapy" className="text-primary hover:underline">EMDR</Link> is effective for both PTSD and C-PTSD, though C-PTSD may require more preparation work and a slower pace.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Trauma-focused CBT</h4>
                  <p className="text-muted-foreground text-sm">
                    <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">Cognitive behavioral approaches</Link> adapted for complex trauma can help address negative beliefs and develop coping skills.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Internal Family Systems (IFS)</h4>
                  <p className="text-muted-foreground text-sm">
                    IFS helps address the different "parts" of yourself that developed in response to trauma, facilitating internal healing.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Dialectical Behavior Therapy (DBT)</h4>
                  <p className="text-muted-foreground text-sm">
                    DBT is particularly helpful for emotional regulation difficulties common in C-PTSD.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Long-term relational therapy</h4>
                  <p className="text-muted-foreground text-sm">
                    For some, having a consistent, trustworthy therapeutic relationship over time is itself healing.
                  </p>
                </div>
              </div>
            </section>

            {/* Healing Is Possible */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Healing Is Possible
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you have PTSD or Complex PTSD, recovery is possible. It's important to know:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 p-4 bg-accent/20 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">You're not broken.</p>
                    <p className="text-muted-foreground text-sm">Your symptoms are adaptations to overwhelming experiences. They made sense at the time, even if they're not serving you now.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-accent/20 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">It's not your fault.</p>
                    <p className="text-muted-foreground text-sm">You didn't cause your trauma, and you don't deserve to suffer because of what was done to you.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-accent/20 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Healing takes time.</p>
                    <p className="text-muted-foreground text-sm">Especially with C-PTSD, expect a gradual process rather than quick fixes. Progress may be slow, but it's real.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-accent/20 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">The right support matters.</p>
                    <p className="text-muted-foreground text-sm">Working with a therapist who understands complex trauma can make an enormous difference.</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                For more information, read our{" "}
                <Link to="/guides/trauma-ptsd" className="text-primary hover:underline font-medium">
                  comprehensive guide to trauma and PTSD
                </Link>.
              </p>
            </section>

            {/* Getting Help CTA */}
            <section className="mb-12">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Getting Help for Complex Trauma
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At{" "}
                  <Link to="/therapist-matching" className="text-primary hover:underline font-medium">
                    Coping and Healing Counseling
                  </Link>, our therapists specialize in trauma treatment, including complex trauma. We understand that healing from prolonged trauma requires patience, skill, and a safe therapeutic relationship.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We offer{" "}
                  <Link to="/blog/emdr-therapy" className="text-primary hover:underline">
                    EMDR therapy
                  </Link>{" "}
                  for trauma processing, phase-based treatment for complex trauma,{" "}
                  <Link to="/online-therapy" className="text-primary hover:underline">
                    online therapy throughout Georgia
                  </Link>, and a safe, non-judgmental environment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/therapist-matching">
                      Schedule Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/conditions/ptsd-therapy-georgia">
                      PTSD Therapy in Georgia
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
                Whatever you've been through, you don't have to carry it alone. Healing from complex trauma is possible, and you deserve support.
              </p>
            </section>
          </div>

          {/* Related Articles */}
          <aside className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/ptsd-recovery" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    PTSD Recovery: A Complete Guide
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Understanding the path to healing from trauma.
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
              <Link to="/mental-health-library/ptsd" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    PTSD Overview
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive information about PTSD.
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

export default ComplexPTSDvsPTSD;
