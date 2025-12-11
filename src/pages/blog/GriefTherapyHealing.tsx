import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const GriefTherapyHealing = () => {
  const articleSchema = generateArticleSchema(
    "Dealing with Grief: How Therapy Helps You Process Loss & Heal",
    "Comprehensive guide to grief therapy covering stages of grief, complicated grief, bereavement support, and healing after loss.",
    "https://chctherapy.com/blog/grief-therapy-healing-loss",
    "2024-11-15"
  );

  return (
    <>
      <SEOHead
        title="Dealing with Grief: How Therapy Helps You Process Loss & Heal"
        description="Comprehensive guide to grief therapy covering stages of grief, complicated grief, bereavement support, and healing after loss."
        keywords="grief therapy, grief counseling, bereavement support, loss therapy, coping with grief"
        canonicalUrl="https://chctherapy.com/blog/grief-therapy-healing-loss"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Dealing with Grief: How Therapy Helps You Process Loss & Heal
              </h1>
              <p className="text-xl text-muted-foreground">Finding support and healing through the grieving process</p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Grief is one of life's most painful experiences. Whether you've lost a loved one, ended a relationship, experienced job loss, or faced another significant loss, the pain can feel overwhelming. While grief is a natural response to loss, it doesn't mean you have to navigate it alone. Therapy provides support, tools, and guidance to help you process grief and eventually find healing.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Understanding the Grief Process</h2>
            <p className="text-lg leading-relaxed mb-4">
              Grief doesn't follow a linear path. While the "five stages of grief" (denial, anger, bargaining, depression, acceptance) are well-known, modern understanding recognizes that grief is more complex and individual. You may experience:
            </p>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>Multiple emotions simultaneously</li>
              <li>Waves of intense grief followed by periods of calm</li>
              <li>Stages in different orders or repeatedly</li>
              <li>Unique grief experiences based on your relationship to the loss</li>
            </ul>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Types of Loss That Cause Grief</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold mb-2">Death of a Loved One</h3>
                <p className="text-lg">Parent, spouse, child, sibling, friend, or pet</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Relationship Losses</h3>
                <p className="text-lg">Divorce, breakup, estrangement from family members</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Health Losses</h3>
                <p className="text-lg">Terminal diagnosis, chronic illness, disability, miscarriage</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Life Changes</h3>
                <p className="text-lg">Job loss, retirement, empty nest, relocation, loss of independence</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Identity Losses</h3>
                <p className="text-lg">Loss of career, role changes, loss of dreams or expectations</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Normal Grief vs. Complicated Grief</h2>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Normal grief,</strong> while painful, gradually lessens in intensity over time. You experience a range of emotions but can eventually return to daily functioning.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Complicated grief</strong> (also called prolonged grief disorder) occurs when grief doesn't improve over time and significantly impairs functioning. Signs include:
            </p>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>Intense longing or preoccupation with the deceased lasting more than a year</li>
              <li>Inability to accept the loss</li>
              <li>Feeling life has no meaning without the person</li>
              <li>Difficulty engaging in activities or relationships</li>
              <li>Severe depression or suicidal thoughts</li>
              <li>Physical symptoms impacting health</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Complicated grief requires professional treatment to prevent long-term mental and physical health consequences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How Grief Therapy Helps</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Validation and Support</h3>
                <p className="text-lg">A safe space to express all emotions without judgment or pressure to "move on."</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Processing Complex Emotions</h3>
                <p className="text-lg">Work through guilt, anger, regret, or conflicted feelings about the loss.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Meaning Making</h3>
                <p className="text-lg">Find ways to honor the person or experience while moving forward.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Coping Strategies</h3>
                <p className="text-lg">Learn healthy ways to manage grief triggers and difficult dates.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Addressing Complicated Grief</h3>
                <p className="text-lg">Specialized treatment for prolonged or debilitating grief.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rebuilding Life</h3>
                <p className="text-lg">Develop new routines, relationships, and sense of identity.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Georgia Grief Support Resources</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-semibold mb-2">Support Groups</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>GriefShare groups at local churches throughout Georgia</li>
                  <li>The Compassionate Friends (for parents who've lost children)</li>
                  <li>Hospice bereavement groups</li>
                  <li>Online grief support communities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Therapy</h3>
                <p className="text-lg">
                  Coping and Healing Counseling offers individual grief therapy throughout Georgia, with therapists trained in bereavement counseling and complicated grief treatment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Self-Care During Grief</h2>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>Allow yourself to feel all emotions without judgment</li>
              <li>Maintain basic self-care: eating, sleeping, hygiene</li>
              <li>Accept help from others</li>
              <li>Express grief in ways that feel right: journaling, art, rituals</li>
              <li>Be patient with yourself—healing takes time</li>
              <li>Avoid major decisions immediately after loss</li>
              <li>Connect with supportive people</li>
              <li>Limit alcohol and substance use</li>
              <li>Consider commemorating your loved one</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">You Don't Have to Grieve Alone</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling provides compassionate grief therapy to help you process loss and find healing. Professional support can make all the difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/grief-therapy-georgia">
                <Button size="lg" variant="secondary">Learn About Grief Therapy</Button>
              </Link>
              <Link to="/get-started">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">Schedule Consultation</Button>
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Our Grief Support Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/grief-therapy-georgia" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Grief Therapy in Georgia</h4>
                    <p className="text-muted-foreground text-sm">Professional grief counseling throughout Georgia.</p>
                  </div>
                </Link>
                <Link to="/online-therapy" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Online Therapy</h4>
                    <p className="text-muted-foreground text-sm">Access grief support from the comfort of home.</p>
                  </div>
                </Link>
                <Link to="/mental-health-library/depression" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Depression & Grief</h4>
                    <p className="text-muted-foreground text-sm">Understanding the connection between grief and depression.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/blog/depression-adults" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Depression in Adults</h4>
                    <p className="text-muted-foreground text-sm">Recognizing and treating depression.</p>
                  </div>
                </Link>
                <Link to="/blog/setting-healthy-boundaries" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Setting Healthy Boundaries</h4>
                    <p className="text-muted-foreground text-sm">Protecting your emotional space during grief.</p>
                  </div>
                </Link>
                <Link to="/blog/mindfulness-therapy" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Mindfulness Therapy</h4>
                    <p className="text-muted-foreground text-sm">Mindfulness techniques for processing grief.</p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default GriefTherapyHealing;