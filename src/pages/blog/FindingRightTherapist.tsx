import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const FindingRightTherapist = () => {
  const articleSchema = generateArticleSchema(
    "Finding the Right Therapist: Your Complete Matching Guide",
    "Expert guide to finding the right therapist. Learn about credentials, specialties, therapeutic fit, and questions to ask in consultations.",
    "https://chctherapy.com/blog/finding-right-therapist-guide",
    "2024-03-10"
  );

  return (
    <>
      <SEOHead
        title="Finding the Right Therapist: Your Complete Matching Guide"
        description="Expert guide to finding the right therapist. Learn about credentials, specialties, therapeutic fit, and questions to ask in consultations."
        keywords="finding a therapist, how to choose a therapist, therapist matching, therapy guide"
        canonicalUrl="https://chctherapy.com/blog/finding-right-therapist-guide"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Finding the Right Therapist: Your Complete Matching Guide
              </h1>
            </div>
          </div>
        </section>
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Credentials to Look For</h2>
            <ul className="space-y-3 text-lg list-disc pl-6">
              <li><strong>Licensed Professional Counselor (LPC):</strong> Master's degree in counseling</li>
              <li><strong>Licensed Clinical Social Worker (LCSW):</strong> Master's in social work</li>
              <li><strong>Licensed Marriage and Family Therapist (LMFT):</strong> Specializes in relationships</li>
              <li><strong>Psychologist (PhD or PsyD):</strong> Doctoral degree, can do testing</li>
              <li><strong>Psychiatrist (MD):</strong> Medical doctor who can prescribe medication</li>
            </ul>
          </section>
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Therapist Match</h2>
            <p className="text-lg mb-6">Coping and Healing Counseling helps match you with the right therapist for your specific needs and preferences.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/therapist-matching"><Button size="lg" variant="secondary">Get Matched</Button></Link>
              <Link to="/get-started"><Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">Schedule Consultation</Button></Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default FindingRightTherapist;