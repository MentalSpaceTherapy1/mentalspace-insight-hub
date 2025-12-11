import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const TherapyCostPaymentOptions = () => {
  const articleSchema = generateArticleSchema(
    "How Much Does Therapy Cost? Insurance, Sliding Scale & Payment Options",
    "Complete guide to therapy costs in Georgia including insurance coverage, sliding scale fees, and affordable counseling options.",
    "https://chctherapy.com/blog/therapy-cost-payment-options-guide",
    "2024-03-15"
  );

  return (
    <>
      <SEOHead
        title="How Much Does Therapy Cost? Insurance, Sliding Scale & Payment Options"
        description="Complete guide to therapy costs in Georgia including insurance coverage, sliding scale fees, and affordable counseling options."
        keywords="therapy cost, how much is therapy, therapy payment options, affordable counseling"
        canonicalUrl="https://chctherapy.com/blog/therapy-cost-payment-options-guide"
        structuredData={articleSchema}
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Insurance & Payment Information</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/insurance" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Insurance We Accept</h4>
                    <p className="text-muted-foreground text-sm">View all accepted insurance providers.</p>
                  </div>
                </Link>
                <Link to="/online-therapy" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Online Therapy</h4>
                    <p className="text-muted-foreground text-sm">Convenient, affordable teletherapy options.</p>
                  </div>
                </Link>
                <Link to="/faq" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">FAQ</h4>
                    <p className="text-muted-foreground text-sm">Common questions about therapy costs.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/blog/benefits-online-therapy" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Benefits of Online Therapy</h4>
                    <p className="text-muted-foreground text-sm">How telehealth can save time and money.</p>
                  </div>
                </Link>
                <Link to="/blog/therapy-online-insurance-coverage" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Insurance Coverage Guide</h4>
                    <p className="text-muted-foreground text-sm">Understanding your insurance benefits.</p>
                  </div>
                </Link>
                <Link to="/blog/finding-right-therapist" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">Finding the Right Therapist</h4>
                    <p className="text-muted-foreground text-sm">Tips for choosing the best fit for you.</p>
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

export default TherapyCostPaymentOptions;