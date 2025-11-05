import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SuicidalThoughtsHelp = () => {
  return (
    <>
      <SEOHead
        title="Suicidal Thoughts: Warning Signs, How to Get Help & Crisis Resources"
        description="Critical guide to recognizing suicide warning signs, how to help someone in crisis, and immediate resources. If you're in crisis, call 988 now."
        keywords="suicidal thoughts help, suicide prevention, mental health crisis, crisis resources"
        canonicalUrl="https://chctherapy.com/blog/suicidal-thoughts-crisis-help"
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-destructive/20 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-destructive/10 border-2 border-destructive p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 text-destructive">⚠️ If You're in Crisis</h2>
                <p className="text-lg font-semibold mb-4">
                  If you're having thoughts of suicide, please reach out for immediate help:
                </p>
                <ul className="space-y-2 text-lg">
                  <li><strong>Call or text 988</strong> - Suicide & Crisis Lifeline (24/7)</li>
                  <li><strong>Text "HELLO" to 741741</strong> - Crisis Text Line</li>
                  <li><strong>Call 911</strong> or go to nearest emergency room</li>
                  <li><strong>Georgia Crisis Line:</strong> 1-800-715-4225</li>
                </ul>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Suicidal Thoughts: Warning Signs, How to Get Help & Crisis Resources
              </h1>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Suicidal thoughts can feel overwhelming and frightening, whether you're experiencing them yourself or are concerned about someone you love. It's important to understand that suicidal ideation is a symptom of treatable mental health conditions—not a character flaw or permanent state. With proper support and intervention, people with suicidal thoughts can recover and go on to lead fulfilling lives.
          </p>

          <section className="mb-12 bg-destructive/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Warning Signs of Suicide Risk</h2>
            <p className="text-lg leading-relaxed mb-4">
              Recognizing warning signs can save lives. Be alert for:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Talk</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
              <li>Talking about wanting to die or kill themselves</li>
              <li>Looking for ways to end their life (searching online, acquiring means)</li>
              <li>Talking about feeling hopeless or having no reason to live</li>
              <li>Feeling trapped or in unbearable pain</li>
              <li>Being a burden to others</li>
              <li>Saying goodbye or making final arrangements</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Behavior</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
              <li>Increased substance use</li>
              <li>Withdrawing from activities and relationships</li>
              <li>Isolating from family and friends</li>
              <li>Sleeping too much or too little</li>
              <li>Visiting or calling people to say goodbye</li>
              <li>Giving away prized possessions</li>
              <li>Aggression or risky behavior</li>
              <li>Dramatic mood changes</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-foreground">Mood</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Depression, anxiety, loss of interest</li>
              <li>Rage or anger seeking revenge</li>
              <li>Shame or humiliation</li>
              <li>Sudden calmness after depression (may indicate decision made)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What Causes Suicidal Thoughts?</h2>
            <p className="text-lg leading-relaxed mb-4">
              Suicide is rarely caused by a single factor. Multiple risk factors often converge:
            </p>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li><strong>Mental health conditions:</strong> Depression, bipolar disorder, PTSD, anxiety disorders</li>
              <li><strong>Substance abuse:</strong> Alcohol and drug use lower inhibitions and judgment</li>
              <li><strong>Chronic pain or illness:</strong> Physical suffering affecting quality of life</li>
              <li><strong>Recent loss:</strong> Death, divorce, job loss, financial crisis</li>
              <li><strong>Social isolation:</strong> Lack of support system or meaningful connections</li>
              <li><strong>Previous suicide attempts:</strong> History of prior attempts increases risk</li>
              <li><strong>Family history:</strong> Suicide in family increases risk</li>
              <li><strong>Trauma or abuse:</strong> Current or past traumatic experiences</li>
              <li><strong>Access to lethal means:</strong> Firearms, medications, other methods</li>
            </ul>
          </section>

          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">How to Help Someone with Suicidal Thoughts</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">1. Take It Seriously</h3>
                <p className="text-lg">Never dismiss or minimize suicidal statements. Any mention of suicide should be taken seriously.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">2. Ask Directly</h3>
                <p className="text-lg">Don't be afraid to ask: "Are you thinking about suicide?" or "Are you thinking about hurting yourself?" Research shows asking does NOT increase risk—it shows you care and opens conversation.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">3. Listen Without Judgment</h3>
                <p className="text-lg">Allow them to express feelings without trying to fix things or arguing. Show empathy and understanding.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">4. Don't Leave Them Alone</h3>
                <p className="text-lg">If someone is in immediate danger, stay with them and remove access to lethal means (medications, weapons, etc.).</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">5. Get Professional Help</h3>
                <p className="text-lg">Call 988, take them to an emergency room, or call 911. Don't try to handle a crisis alone.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">6. Follow Up</h3>
                <p className="text-lg">After the immediate crisis, continue checking in. Show ongoing support and help them connect with mental health services.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Treatment for Suicidal Ideation</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Crisis Intervention</h3>
                <p className="text-lg">Immediate assessment and safety planning, potentially including hospitalization if risk is high.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Psychotherapy</h3>
                <p className="text-lg">Evidence-based therapies like CBT, DBT (Dialectical Behavior Therapy), and CAMS (Collaborative Assessment and Management of Suicidality) reduce suicidal thoughts and prevent future attempts.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Medication</h3>
                <p className="text-lg">Antidepressants, mood stabilizers, or antipsychotics to treat underlying mental health conditions.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Safety Planning</h3>
                <p className="text-lg">Develop a written plan identifying warning signs, coping strategies, reasons for living, and emergency contacts.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Means Restriction</h3>
                <p className="text-lg">Remove or secure access to lethal means, especially firearms and large quantities of medication.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Support System</h3>
                <p className="text-lg">Build connections with family, friends, support groups, and mental health professionals.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Georgia Crisis Resources</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Crisis Lines</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
                  <li><strong>Crisis Text Line:</strong> Text HELLO to 741741</li>
                  <li><strong>Georgia Crisis & Access Line:</strong> 1-800-715-4225</li>
                  <li><strong>Veterans Crisis Line:</strong> 988 then press 1, or text 838255</li>
                  <li><strong>Trevor Project (LGBTQ Youth):</strong> 1-866-488-7386 or text START to 678678</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>Call 911 for immediate emergency response</li>
                  <li>Go to nearest hospital emergency room</li>
                  <li>Georgia has mobile crisis teams in many counties</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p className="text-lg">
                  After crisis stabilization, Coping and Healing Counseling provides ongoing therapy for individuals who have experienced suicidal thoughts, with therapists trained in evidence-based suicide prevention approaches.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">There Is Hope</h2>
            <p className="text-lg leading-relaxed mb-4">
              If you're experiencing suicidal thoughts, please know:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>These feelings are temporary, even though they don't feel that way right now</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Treatment works—most people who get help recover</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Reaching out for help is a sign of strength, not weakness</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>You deserve support and compassionate care</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Many people who've survived suicide attempts are grateful they survived</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              Your life has value. Your pain is valid. And help is available. Please reach out.
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Professional Support</h2>
            <p className="text-lg mb-6">
              If you or someone you love is struggling with suicidal thoughts, Coping and Healing Counseling provides compassionate, evidence-based treatment. Don't wait—reach out today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/emergency-resources">
                <Button size="lg" variant="secondary">View Emergency Resources</Button>
              </Link>
              <Link to="/get-started">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">Schedule Consultation</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default SuicidalThoughtsHelp;