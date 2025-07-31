import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Insurance = () => {
  const insuranceProviders = [
    {
      name: "CareSource",
      copay: "$0/$30"
    },
    {
      name: "Amerigroup", 
      copay: "$0/$30"
    },
    {
      name: "Peach State",
      copay: "$0/$30/$40"
    },
    {
      name: "Optum",
      copay: "$0/$30"
    },
    {
      name: "Blue Cross Blue Shield",
      copay: "$30/$40"
    },
    {
      name: "Aetna",
      copay: "$0/$30"
    },
    {
      name: "Cigna", 
      copay: "$30/$40"
    },
    {
      name: "Alliant Health",
      copay: "$0/$30"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Insurance Coverage
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Our therapists accept most insurances. At MentalSpace, we proudly serve a vast community, with our therapy services covered by numerous insurance providers. The majority of our insured clients enjoy the benefit of an average copay under $30.
            </p>
          </div>
        </section>

        {/* Insurance Providers */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="p-8 rounded-lg border bg-card text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Therapists in‑network with {provider.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Getting mental health support should be straightforward. That's why Coping & Healing Counseling is in‑network with {provider.name} and various other insurance plans. Our licensed therapists are here to guide you towards meaningful life changes. Real therapy for real transformation.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Your copay could be as low as $0</h4>
                    <p className="text-sm text-muted-foreground">
                      Average {provider.name} member copay per session {provider.copay}
                    </p>
                  </div>
                  <Button className="w-full">
                    Get Started
                  </Button>
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
              Contact us today to verify your coverage and get started with therapy
            </p>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insurance;