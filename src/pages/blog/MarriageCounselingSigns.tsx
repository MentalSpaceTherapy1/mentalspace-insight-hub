import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MarriageCounselingSigns = () => {
  return (
    <>
      <SEOHead
        title="Signs You Need Marriage Counseling: When to Seek Help"
        description="Recognize the warning signs that indicate marriage counseling could strengthen your relationship before problems escalate."
        keywords="marriage counseling signs, when to seek couples therapy, relationship help, marriage problems"
        canonicalUrl="https://chctherapy.com/blog/marriage-counseling-signs"
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Signs You Need Marriage Counseling: When to Seek Help
              </h1>
              <p className="text-xl text-muted-foreground">Recognizing when professional help can strengthen your relationship</p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Many couples wait too long to seek marriage counseling, often waiting until problems have escalated beyond easy repair. Understanding the early warning signs can help you address issues before they become insurmountable. Marriage counseling isn't just for relationships in crisis—it's a proactive tool for strengthening communication, resolving conflicts, and deepening connection.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Signs You Need Marriage Counseling</h2>
            <ul className="space-y-3 text-lg list-disc pl-6">
              <li><strong>Communication breakdown:</strong> Conversations frequently escalate into arguments or shut down completely</li>
              <li><strong>Persistent resentment:</strong> You hold grudges or can't let go of past hurts</li>
              <li><strong>Lack of intimacy:</strong> Physical or emotional intimacy has significantly decreased</li>
              <li><strong>Living parallel lives:</strong> You function as roommates rather than romantic partners</li>
              <li><strong>Frequent fighting:</strong> Arguments happen over the same issues repeatedly without resolution</li>
              <li><strong>Contemplating separation:</strong> One or both partners are considering ending the relationship</li>
              <li><strong>Infidelity or trust issues:</strong> An affair has occurred or trust has been seriously damaged</li>
              <li><strong>Major life transitions:</strong> Struggling to navigate parenthood, job changes, or other significant transitions together</li>
              <li><strong>Financial conflicts:</strong> Money issues cause ongoing tension and disagreement</li>
              <li><strong>Different goals or values:</strong> You've discovered fundamental incompatibilities</li>
            </ul>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">What Marriage Counseling Can Help With</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Communication Skills</h3>
                <p className="text-lg">Learn to express needs clearly and listen actively without defensiveness.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conflict Resolution</h3>
                <p className="text-lg">Develop healthy strategies for disagreeing without damaging the relationship.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rebuilding Trust</h3>
                <p className="text-lg">Navigate the process of healing after betrayal or broken promises.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Intimacy Restoration</h3>
                <p className="text-lg">Reconnect emotionally and physically in meaningful ways.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Individual Growth</h3>
                <p className="text-lg">Understand your own patterns and how they impact the relationship.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When Is It Too Late for Marriage Counseling?</h2>
            <p className="text-lg leading-relaxed mb-4">
              It's rarely "too late" for counseling, but success is more likely when both partners are committed to the process. Warning signs that counseling may be less effective include:
            </p>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>One partner has completely checked out emotionally</li>
              <li>Active ongoing infidelity with no intention to stop</li>
              <li>Presence of abuse (physical, emotional, or psychological)</li>
              <li>One or both partners refuse to participate in counseling</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              However, even in these situations, individual therapy can help you navigate difficult decisions and heal.
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Strengthen Your Marriage Today</h2>
            <p className="text-lg mb-6">
              Don't wait for problems to escalate. Coping and Healing Counseling specializes in helping couples rebuild connection and communication.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/couples-therapy">
                <Button size="lg" variant="secondary">Learn About Couples Therapy</Button>
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

export default MarriageCounselingSigns;
