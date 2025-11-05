import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TherapyCostPaymentOptions = () => {
  return (
    <>
      <SEOHead
        title="How Much Does Therapy Cost? Insurance, Sliding Scale & Payment Options"
        description="Complete guide to therapy costs in Georgia including insurance coverage, sliding scale fees, and affordable counseling options."
        keywords="therapy cost, how much is therapy, therapy payment options, affordable counseling"
        canonicalUrl="https://chctherapy.com/blog/therapy-cost-payment-options-guide"
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                How Much Does Therapy Cost? Insurance, Sliding Scale & Payment Options
              </h1>
            </div>
          </div>
        </section>
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Therapy Costs in Georgia</h2>
            <p className="text-lg mb-4">Average costs for therapy sessions in Georgia:</p>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>Individual therapy: $100-250 per session</li>
              <li>Couples therapy: $150-300 per session</li>
              <li>Group therapy: $40-80 per session</li>
              <li>Initial assessment: $150-300</li>
            </ul>
          </section>
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Affordable Therapy Options Available</h2>
            <p className="text-lg mb-6">Coping and Healing Counseling accepts most major insurance plans and offers flexible payment options.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/insurance"><Button size="lg" variant="secondary">View Insurance Options</Button></Link>
              <Link to="/get-started"><Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">Get Started</Button></Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default TherapyCostPaymentOptions;