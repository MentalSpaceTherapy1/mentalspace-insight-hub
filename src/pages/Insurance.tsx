import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const Insurance = () => {
  const insuranceProviders = [
    {
      name: "CareSource",
      copay: "$0/$30",
      slug: "caresource",
      description: "As Georgia's trusted Medicaid managed care provider, CareSource offers comprehensive mental health benefits with zero barriers to access. We specialize in working with CareSource members to maximize their behavioral health benefits and ensure seamless care coordination.",
      highlight: "Zero-cost mental health visits for most members",
      benefit: "Same-day appointments available"
    },
    {
      name: "Amerigroup", 
      copay: "$0/$30",
      slug: "amerigroup",
      description: "Amerigroup Real Solutions in Georgia provides robust mental health coverage with a focus on preventive care and early intervention. Our therapists understand Amerigroup's care management approach and work directly with your care coordinators.",
      highlight: "No referrals needed for therapy sessions",
      benefit: "Integrated care coordination"
    },
    {
      name: "Peach State",
      copay: "$0/$30/$40",
      slug: "peach-state",
      description: "Peach State Health Plan members enjoy comprehensive behavioral health benefits across Georgia. We've streamlined the authorization process to get you connected with care faster, often with immediate approval for therapy services.",
      highlight: "Flexible copay options based on service type",
      benefit: "Fast-track authorization process"
    },
    {
      name: "Optum",
      copay: "$0/$30",
      slug: "optum",
      description: "Optum's extensive provider network includes our experienced therapists who specialize in evidence-based treatments. Benefit from Optum's innovative telehealth platform integration and comprehensive mental health resources.",
      highlight: "Enhanced digital health tools included",
      benefit: "24/7 crisis support access"
    },
    {
      name: "Blue Cross Blue Shield",
      copay: "$30/$40",
      slug: "bluecross-blueshield",
      description: "Blue Cross Blue Shield of Georgia members have access to our full range of therapeutic services. With one of the most comprehensive mental health benefits in the state, BCBS covers everything from individual therapy to specialized treatments.",
      highlight: "Comprehensive coverage for all therapy types",
      benefit: "Extended session limits available"
    },
    {
      name: "Aetna",
      copay: "$0/$30",
      slug: "aetna",
      description: "Aetna Better Health of Georgia prioritizes accessible mental healthcare with generous session allowances and minimal administrative barriers. Our Aetna-credentialed therapists provide culturally competent care across diverse communities.",
      highlight: "Generous annual session limits",
      benefit: "Multilingual support available"
    },
    {
      name: "Cigna", 
      copay: "$30/$40",
      slug: "cigna",
      description: "Cigna HealthSpring and traditional Cigna plans both offer excellent mental health benefits. We work with Cigna's case management team to ensure continuity of care and can provide detailed treatment summaries for optimal outcomes.",
      highlight: "Coordinated care with medical providers",
      benefit: "Detailed progress reporting"
    },
    {
      name: "Alliant Health",
      copay: "$0/$30",
      slug: "alliant",
      description: "Alliant Health Plans members benefit from our specialized approach to community-based mental health care. With a focus on Georgia's underserved populations, we provide culturally sensitive therapy that aligns with Alliant's community health mission.",
      highlight: "Community-focused mental health approach",
      benefit: "Culturally sensitive care specialists"
    },
    {
      name: "Humana",
      copay: "$0/$30",
      slug: "humana",
      description: "Humana Healthy Horizons and Medicare Advantage members receive comprehensive behavioral health benefits. Our therapists are specially trained in age-appropriate care and work closely with Humana's integrated care management programs.",
      highlight: "Specialized programs for different age groups",
      benefit: "Medicare Advantage coordination"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Coping and Healing Counseling",
    "description": "Online therapy services accepting major insurance providers in Georgia",
    "paymentAccepted": insuranceProviders.map(p => p.name).join(", "),
    "priceRange": "$0-$40 copay"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Insurance Coverage - We Accept Major Insurance Plans | Coping and Healing"
        description="We accept CareSource, Amerigroup, Peach State, Optum, Blue Cross Blue Shield, Aetna, Cigna, Alliant Health, and Humana. Most plans cover therapy with $0-$40 copays. Verify your coverage today."
        keywords="therapy insurance, mental health insurance coverage, CareSource therapy, Amerigroup counseling, Blue Cross therapy Georgia, Aetna mental health, insurance covered therapy"
        canonicalUrl="https://chctherapy.com/insurance"
        ogTitle="Insurance Coverage - Most Major Plans Accepted"
        ogDescription="Affordable therapy with your insurance. We accept CareSource, Amerigroup, BCBS, Aetna, and more. $0-$40 copays."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Insurance Coverage
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              We accept most major insurance plans throughout Georgia, making quality mental healthcare accessible and affordable. Our in-network status with leading insurance providers means you can focus on your healing journey while we handle the billing complexities.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>And more</strong> - We work with additional insurance providers not listed here. Contact us to verify your coverage.
            </p>
            <p className="text-base text-muted-foreground">
              <Link to="/guides/therapy-cost" className="text-primary hover:underline font-medium">Read our complete guide to therapy costs and insurance →</Link>
            </p>
          </div>
        </section>

        {/* Insurance Providers */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="p-8 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {provider.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-left">
                    {provider.description}
                  </p>
                  
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                    <h4 className="text-sm font-semibold mb-1 text-primary">{provider.highlight}</h4>
                    <p className="text-xs text-muted-foreground">
                      Copay range: {provider.copay} per session
                    </p>
                  </div>
                  
                  <div className="mb-6 text-left">
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      {provider.benefit}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to={`/insurance/${provider.slug}`}>
                      <Button className="w-full">
                        View {provider.name} Details
                      </Button>
                    </Link>
                    <Link to="/therapist-matching">
                      <Button variant="outline" className="w-full">
                        Get Started Today
                      </Button>
                    </Link>
                    
                    {/* Add How-To Guide Links for major providers */}
                    {(provider.slug === 'aetna' || provider.slug === 'bluecross-blueshield' || provider.slug === 'cigna') && (
                      <Link 
                        to={`/how-to-use-${provider.slug === 'bluecross-blueshield' ? 'blue-cross' : provider.slug}-insurance-for-therapy-georgia`}
                      >
                        <Button variant="outline" className="w-full text-sm">
                          📘 How to Use {provider.name} →
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Use Your Insurance Benefits?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today to verify your coverage and request an appointment
            </p>
            <Link to="/therapist-matching">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Request an Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insurance;