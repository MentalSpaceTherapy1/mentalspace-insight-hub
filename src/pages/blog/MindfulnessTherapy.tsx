import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const MindfulnessTherapy = () => {
  const articleSchema = generateArticleSchema(
    "Mindfulness-Based Therapy: Techniques for Anxiety, Depression & Stress",
    "Complete guide to mindfulness therapy including MBSR, MBCT, scientific evidence, and practical mindfulness techniques for mental health.",
    "https://chctherapy.com/blog/mindfulness-based-therapy-guide",
    "2024-11-15"
  );

  return (
    <>
      <SEOHead
        title="Mindfulness-Based Therapy: Techniques for Anxiety, Depression & Stress"
        description="Complete guide to mindfulness therapy including MBSR, MBCT, scientific evidence, and practical mindfulness techniques for mental health."
        keywords="mindfulness therapy, mindfulness for anxiety, meditation therapy, MBSR, MBCT"
        canonicalUrl="https://chctherapy.com/blog/mindfulness-based-therapy-guide"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Mindfulness-Based Therapy: Techniques for Anxiety, Depression & Stress
              </h1>
              <p className="text-xl text-muted-foreground">Harness the power of present-moment awareness for better mental health</p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Mindfulness—the practice of paying attention to the present moment with openness and non-judgment—has moved from ancient meditation practices to modern psychotherapy. Research shows mindfulness-based interventions effectively treat anxiety, depression, chronic pain, and stress while improving overall well-being and quality of life.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What Is Mindfulness?</h2>
            <p className="text-lg leading-relaxed mb-4">
              Mindfulness means purposefully focusing your awareness on the present moment—your breath, bodily sensations, thoughts, and emotions—without trying to change or judge them. Instead of ruminating about the past or worrying about the future, mindfulness anchors you in the now.
            </p>
            <p className="text-lg leading-relaxed">
              In therapy, mindfulness techniques help you develop new relationships with difficult thoughts and emotions, reducing their power over you and decreasing suffering.
            </p>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Types of Mindfulness-Based Therapies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Mindfulness-Based Stress Reduction (MBSR)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  Developed by Jon Kabat-Zinn at UMass Medical Center, MBSR is an 8-week program teaching mindfulness meditation and yoga for stress reduction.
                </p>
                <p className="text-lg"><strong>Best for:</strong> Chronic pain, stress management, general wellness</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Mindfulness-Based Cognitive Therapy (MBCT)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  Combines mindfulness practices with cognitive therapy principles. Specifically designed to prevent depression relapse.
                </p>
                <p className="text-lg"><strong>Best for:</strong> Recurrent depression, chronic worry, rumination</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Dialectical Behavior Therapy (DBT)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  Incorporates mindfulness as a core skill along with emotion regulation, distress tolerance, and interpersonal effectiveness.
                </p>
                <p className="text-lg"><strong>Best for:</strong> Borderline personality disorder, emotion dysregulation, self-harm behaviors</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Acceptance and Commitment Therapy (ACT)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  Uses mindfulness and acceptance strategies combined with commitment to valued action and behavior change.
                </p>
                <p className="text-lg"><strong>Best for:</strong> Anxiety, depression, chronic pain, living according to values</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Science Behind Mindfulness</h2>
            <p className="text-lg leading-relaxed mb-4">
              Extensive research demonstrates mindfulness's effectiveness:
            </p>
            <ul className="space-y-3 text-lg list-disc pl-6">
              <li><strong>Brain changes:</strong> Increases gray matter in areas associated with learning, memory, and emotional regulation</li>
              <li><strong>Stress reduction:</strong> Lowers cortisol levels and reduces inflammatory markers</li>
              <li><strong>Anxiety treatment:</strong> Reduces symptoms as effectively as medication for some people</li>
              <li><strong>Depression prevention:</strong> MBCT reduces depression relapse rates by 50%</li>
              <li><strong>Pain management:</strong> Changes relationship with pain, reducing suffering</li>
              <li><strong>Emotional regulation:</strong> Improves ability to manage difficult emotions</li>
              <li><strong>Immune function:</strong> Boosts immune system response</li>
            </ul>
          </section>

          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Practical Mindfulness Techniques</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">1. Mindful Breathing</h3>
                <p className="text-lg leading-relaxed mb-2">
                  Focus attention on your breath—the sensation of air entering and leaving your body. When your mind wanders (and it will), gently return focus to your breath without judgment.
                </p>
                <p className="text-lg italic">Practice: Start with 5 minutes daily, gradually increasing duration.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">2. Body Scan Meditation</h3>
                <p className="text-lg leading-relaxed mb-2">
                  Systematically bring awareness to different parts of your body, from toes to head, noticing sensations without trying to change them.
                </p>
                <p className="text-lg italic">Practice: Use guided body scan recordings (15-45 minutes).</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">3. Mindful Walking</h3>
                <p className="text-lg leading-relaxed mb-2">
                  Pay attention to the physical sensations of walking—foot lifting, moving forward, touching ground. Notice surroundings without judgment.
                </p>
                <p className="text-lg italic">Practice: Walk slowly for 10-20 minutes, focusing on each step.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">4. Thought Observation</h3>
                <p className="text-lg leading-relaxed mb-2">
                  Watch thoughts arise and pass like clouds in the sky. Notice them without attaching to or believing every thought.
                </p>
                <p className="text-lg italic">Practice: Label thoughts as "thinking" and return to breath.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">5. STOP Technique</h3>
                <p className="text-lg leading-relaxed">
                  <strong>S</strong>top what you're doing<br/>
                  <strong>T</strong>ake a breath<br/>
                  <strong>O</strong>bserve your experience (thoughts, emotions, sensations)<br/>
                  <strong>P</strong>roceed with awareness
                </p>
                <p className="text-lg italic mt-2">Practice: Use throughout day during stressful moments.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">6. Mindful Eating</h3>
                <p className="text-lg leading-relaxed mb-2">
                  Eat slowly, noticing colors, smells, textures, and flavors. Pay attention to sensations of hunger and fullness.
                </p>
                <p className="text-lg italic">Practice: Try with one meal or snack daily.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">7. Loving-Kindness Meditation</h3>
                <p className="text-lg leading-relaxed mb-2">
                  Cultivate compassion by silently repeating phrases like "May I be happy, may I be healthy, may I be safe," extending to others.
                </p>
                <p className="text-lg italic">Practice: 10-15 minutes, especially helpful for self-criticism.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Mindfulness Apps vs. Professional Guidance</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mindfulness Apps (Headspace, Calm, Insight Timer)</h3>
                <p className="text-lg leading-relaxed mb-2"><strong>Pros:</strong></p>
                <ul className="list-disc pl-6 text-lg mb-3">
                  <li>Convenient and accessible</li>
                  <li>Guided meditations for beginners</li>
                  <li>Low cost or free options</li>
                  <li>Variety of practices</li>
                </ul>
                <p className="text-lg leading-relaxed mb-2"><strong>Cons:</strong></p>
                <ul className="list-disc pl-6 text-lg">
                  <li>No personalization to your specific issues</li>
                  <li>No feedback or accountability</li>
                  <li>Can't address underlying mental health conditions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Mindfulness-Based Therapy</h3>
                <p className="text-lg leading-relaxed mb-2"><strong>Benefits:</strong></p>
                <ul className="list-disc pl-6 text-lg">
                  <li>Personalized to your specific mental health needs</li>
                  <li>Professional guidance through challenges</li>
                  <li>Integration with other therapeutic approaches</li>
                  <li>Addresses underlying issues, not just symptoms</li>
                  <li>Accountability and structured practice</li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed mt-4">
                <strong>Best approach:</strong> Use apps to supplement professional therapy. Apps support daily practice, while therapy provides tailored treatment and addresses deeper issues.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Misconceptions About Mindfulness</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-lg"><strong>Myth:</strong> "Mindfulness means clearing your mind of all thoughts."</p>
                <p className="text-lg"><strong>Reality:</strong> Thoughts will arise. Mindfulness is about noticing them without judgment, not stopping them.</p>
              </div>

              <div>
                <p className="text-lg"><strong>Myth:</strong> "You need to meditate for hours to see benefits."</p>
                <p className="text-lg"><strong>Reality:</strong> Even 5-10 minutes daily can produce benefits. Consistency matters more than duration.</p>
              </div>

              <div>
                <p className="text-lg"><strong>Myth:</strong> "Mindfulness is religious."</p>
                <p className="text-lg"><strong>Reality:</strong> While rooted in Buddhist traditions, clinical mindfulness is secular and scientifically-based.</p>
              </div>

              <div>
                <p className="text-lg"><strong>Myth:</strong> "If I can't focus, I'm doing it wrong."</p>
                <p className="text-lg"><strong>Reality:</strong> Noticing your mind wandered and bringing it back IS mindfulness. That's the practice.</p>
              </div>

              <div>
                <p className="text-lg"><strong>Myth:</strong> "Mindfulness will make me passive or complacent."</p>
                <p className="text-lg"><strong>Reality:</strong> Mindfulness helps you respond skillfully rather than react impulsively. It enhances, not diminishes, effectiveness.</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Learn Mindfulness with Professional Support</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling integrates mindfulness-based approaches into therapy to help you manage anxiety, depression, and stress more effectively. Start your mindfulness journey today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary">Schedule Consultation</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">Learn More</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default MindfulnessTherapy;