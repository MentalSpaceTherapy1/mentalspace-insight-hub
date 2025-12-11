import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const SettingHealthyBoundaries = () => {
  const articleSchema = generateArticleSchema(
    "Setting Healthy Boundaries: A Therapist's Guide to Saying No",
    "Learn how to set healthy boundaries in relationships, work, and family. Practical communication scripts and therapy techniques for better boundaries.",
    "https://chctherapy.com/blog/setting-healthy-boundaries-guide",
    "2024-11-15"
  );

  return (
    <>
      <SEOHead
        title="Setting Healthy Boundaries: A Therapist's Guide to Saying No"
        description="Learn how to set healthy boundaries in relationships, work, and family. Practical communication scripts and therapy techniques for better boundaries."
        keywords="setting boundaries, healthy boundaries therapy, learning to say no, boundary setting"
        canonicalUrl="https://chctherapy.com/blog/setting-healthy-boundaries-guide"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Setting Healthy Boundaries: A Therapist's Guide to Saying No
              </h1>
            </div>
          </div>
        </section>
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">
              The holiday season brings joy, connection, and celebration—but it can also bring stress, overwhelm, and emotional exhaustion. Between family gatherings, social obligations, and high expectations, maintaining your mental and emotional well-being requires clear, healthy boundaries.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Holiday Boundaries Matter</h2>
              <p className="text-lg leading-relaxed mb-4">
                The holidays amplify relationship dynamics and social pressures. Without boundaries, you may find yourself:
              </p>
              <ul className="space-y-3 text-lg list-disc pl-6 mb-6">
                <li>Overcommitting to events and feeling exhausted</li>
                <li>Spending beyond your budget to meet expectations</li>
                <li>Tolerating toxic family dynamics to "keep the peace"</li>
                <li>Neglecting your own needs to please others</li>
                <li>Experiencing increased anxiety and resentment</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Setting boundaries isn't selfish—it's essential self-care that allows you to show up authentically and enjoy the season with greater peace and presence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Types of Holiday Boundaries</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Time Boundaries</h3>
                  <p className="text-lg mb-2">Protect your schedule and energy:</p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Decide how many events you'll attend each week</li>
                    <li>Set arrival and departure times for gatherings</li>
                    <li>Schedule downtime for rest and recovery</li>
                    <li>Say no to obligations that drain you</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Emotional Boundaries</h3>
                  <p className="text-lg mb-2">Protect your mental health:</p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Identify topics you won't discuss (politics, personal choices, etc.)</li>
                    <li>Refuse to engage in family drama or gossip</li>
                    <li>Honor your feelings without apologizing for them</li>
                    <li>Remove yourself from toxic conversations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Financial Boundaries</h3>
                  <p className="text-lg mb-2">Stay within your means:</p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Set a realistic gift budget and stick to it</li>
                    <li>Suggest alternative gift-giving approaches (Secret Santa, experience gifts)</li>
                    <li>Decline expensive group activities you can't afford</li>
                    <li>Be honest about your financial limits</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">Physical Boundaries</h3>
                  <p className="text-lg mb-2">Honor your body and comfort:</p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Decline unwanted physical affection</li>
                    <li>Respect your dietary needs and preferences</li>
                    <li>Take breaks when you feel overwhelmed</li>
                    <li>Maintain your health routines (sleep, exercise, medication)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">How to Communicate Your Boundaries</h2>
              <p className="text-lg leading-relaxed mb-6">
                Setting boundaries requires clear, compassionate communication. Here are scripts you can adapt:
              </p>

              <div className="bg-secondary/30 p-6 rounded-lg space-y-4 mb-6">
                <div>
                  <p className="font-semibold mb-2">Declining an invitation:</p>
                  <p className="italic">"Thank you so much for thinking of me. I won't be able to make it this year, but I hope you have a wonderful time."</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Limiting visit duration:</p>
                  <p className="italic">"I'm looking forward to seeing everyone! I'll be there from 2-5pm and will need to head out after that."</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Avoiding difficult topics:</p>
                  <p className="italic">"I'd prefer not to discuss that today. Let's focus on enjoying our time together."</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Setting financial limits:</p>
                  <p className="italic">"I'm keeping my gift budget smaller this year. I hope you understand—it's what works best for me right now."</p>
                </div>

                <div>
                  <p className="font-semibold mb-2">Protecting your energy:</p>
                  <p className="italic">"I need to take a quick break. I'll be back in a few minutes."</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Remember: You don't need to justify, argue, defend, or explain (JADE) your boundaries. A simple, kind statement is enough.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Overcoming Guilt and Pushback</h2>
              <p className="text-lg leading-relaxed mb-4">
                Many people struggle with guilt when setting boundaries, especially with family. Remember:
              </p>
              <ul className="space-y-3 text-lg list-disc pl-6 mb-6">
                <li><strong>You're not responsible for others' reactions.</strong> People may be disappointed, but that doesn't mean you've done something wrong.</li>
                <li><strong>Boundaries are acts of self-respect.</strong> Prioritizing your well-being allows you to show up more fully for others.</li>
                <li><strong>Consistency is key.</strong> Hold firm even when others test or push against your limits.</li>
                <li><strong>You deserve peace.</strong> Your mental health matters as much as anyone else's.</li>
              </ul>

              <p className="text-lg leading-relaxed mb-4">
                If family members guilt-trip you, respond calmly:
              </p>
              <div className="bg-secondary/30 p-6 rounded-lg mb-6">
                <p className="italic">"I understand this is different from what you're used to, and I appreciate your understanding as I take care of myself."</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Self-Care Strategies for Holiday Wellness</h2>
              <p className="text-lg leading-relaxed mb-4">
                Beyond boundaries, prioritize these self-care practices:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Build in Recovery Time</h4>
                  <p>Schedule alone time between social events to recharge.</p>
                </div>
                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Maintain Routines</h4>
                  <p>Keep up with exercise, sleep, and healthy eating as much as possible.</p>
                </div>
                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Practice Mindfulness</h4>
                  <p>Use breathing exercises or meditation to stay grounded during stress.</p>
                </div>
                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Seek Support</h4>
                  <p>Talk to a therapist about managing holiday stress and relationship challenges.</p>
                </div>
                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Set Realistic Expectations</h4>
                  <p>Let go of perfectionism—good enough is truly good enough.</p>
                </div>
                <div className="bg-accent/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Choose Your Battles</h4>
                  <p>Not every comment or situation requires a response.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">When to Seek Professional Support</h2>
              <p className="text-lg leading-relaxed mb-4">
                Consider working with a therapist if you:
              </p>
              <ul className="space-y-3 text-lg list-disc pl-6">
                <li>Feel consistently anxious or depressed during the holidays</li>
                <li>Have difficulty setting or maintaining boundaries</li>
                <li>Struggle with family conflict or toxic relationships</li>
                <li>Experience trauma triggers during family gatherings</li>
                <li>Need help processing grief during the holidays</li>
                <li>Want to develop healthier relationship patterns</li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-4">Get Support Setting Healthy Boundaries</h2>
              <p className="text-lg mb-6">
                Our licensed therapists at Coping and Healing Counseling specialize in helping clients develop assertiveness skills, manage family dynamics, and prioritize their emotional well-being during the holidays and year-round.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-started">
                  <Button size="lg" variant="secondary">Schedule a Consultation</Button>
                </Link>
                <Link to="/online-therapy">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
                    Learn About Our Services
                  </Button>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Embrace the Season on Your Terms</h2>
              <p className="text-lg leading-relaxed">
                The holidays don't have to be overwhelming or exhausting. By setting clear boundaries, communicating your needs, and prioritizing self-care, you can create a holiday experience that feels authentic, peaceful, and joyful. Remember: protecting your well-being isn't selfish—it's the foundation for genuine connection and presence with the people you love.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default SettingHealthyBoundaries;