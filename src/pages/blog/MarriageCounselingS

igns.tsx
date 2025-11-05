import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MarriageCounselingSigns = () => {
  return (
    <>
      <SEOHead
        title="When to Get Marriage Counseling: 10 Warning Signs | CHC"
        description="Learn the key warning signs that indicate your marriage needs professional help. Expert guidance on timing and what to expect in couples therapy."
        keywords="marriage counseling signs, when to get couples therapy, relationship problems, marriage help"
        canonicalUrl="https://chctherapy.com/blog/when-to-get-marriage-counseling"
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                How to Know When You Need Marriage Counseling: 10 Warning Signs
              </h1>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Every marriage faces challenges, but how do you know when problems have escalated beyond what you can resolve on your own? Understanding the warning signs that indicate professional help is needed can save your relationship before damage becomes irreparable.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">10 Signs You Need Marriage Counseling</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">1. Communication Has Broken Down</h3>
                <p className="text-lg">You avoid conversations, arguments escalate quickly, or you feel unable to express yourself without conflict.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">2. Constant Criticism or Contempt</h3>
                <p className="text-lg">One or both partners regularly criticize, show contempt, or treat each other with disrespect.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">3. Emotional or Physical Distance</h3>
                <p className="text-lg">You feel like roommates rather than partners, with little emotional or physical intimacy.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">4. Trust Has Been Broken</h3>
                <p className="text-lg">Infidelity, lies, or broken promises have damaged trust in the relationship.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">5. Same Arguments on Repeat</h3>
                <p className="text-lg">You have the same conflicts repeatedly without resolution or compromise.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">6. Considering Separation or Divorce</h3>
                <p className="text-lg">One or both partners have thought seriously about ending the marriage.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">7. Major Life Transition Stress</h3>
                <p className="text-lg">New baby, job loss, relocation, or illness has created overwhelming strain on your relationship.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">8. Financial Conflicts</h3>
                <p className="text-lg">Money disputes cause frequent arguments or one partner hides financial information.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">9. One Partner Refuses to Work on Issues</h3>
                <p className="text-lg">One person stonewalls, shuts down, or refuses to acknowledge problems exist.</p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">10. You're Only Staying "for the Kids"</h3>
                <p className="text-lg">The primary reason you remain together is children, not love or partnership.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Is It Too Early or Too Late?</h2>
            <p className="text-lg leading-relaxed mb-4">
              <strong>It's never too early:</strong> Couples therapy isn't just for marriages in crisis. Many couples seek counseling as a preventive measure or during minor conflicts. Early intervention prevents small issues from becoming major problems.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Is it too late?</strong> If both partners are willing to try, it's rarely too late. However, success depends on both people being committed to the process. If one partner has completely checked out, individual therapy may be more appropriate initially.
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Marriage?</h2>
            <p className="text-lg mb-6">
              Don't wait until it's too late. Coping and Healing Counseling offers expert couples therapy throughout Georgia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/couples-therapy">
                <Button size="lg" variant="secondary">
                  Learn About Couples Therapy
                </Button>
              </Link>
              <Link to="/get-started">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  Schedule Consultation
                </Button>
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