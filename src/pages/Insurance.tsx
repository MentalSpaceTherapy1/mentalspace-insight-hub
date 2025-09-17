import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Insurance = () => {
  const insuranceProviders = [
    {
      name: "CareSource",
      copay: "$0/$30",
      slug: "caresource"
    },
    {
      name: "Amerigroup", 
      copay: "$0/$30",
      slug: "amerigroup"
    },
    {
      name: "Peach State",
      copay: "$0/$30/$40",
      slug: "peach-state"
    },
    {
      name: "Optum",
      copay: "$0/$30",
      slug: "optum"
    },
    {
      name: "Blue Cross Blue Shield",
      copay: "$30/$40",
      slug: "bluecross-blueshield"
    },
    {
      name: "Aetna",
      copay: "$0/$30",
      slug: "aetna"
    },
    {
      name: "Cigna", 
      copay: "$30/$40",
      slug: "cigna"
    },
    {
      name: "Alliant Health",
      copay: "$0/$30",
      slug: "alliant"
    },
    {
      name: "Humana",
      copay: "$0/$30",
      slug: "humana"
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
            <p className="text-lg text-muted-foreground">
              <strong>And more</strong> - We work with additional insurance providers not listed here. Contact us to verify your coverage.
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
                    {provider.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Getting mental health support should be straightforward. That's why Coping & Healing Counseling is in‑network with {provider.name} and various other insurance plans. Our licensed therapists are here to guide you towards meaningful life changes.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Your copay could be as low as $0</h4>
                    <p className="text-sm text-muted-foreground">
                      Average {provider.name} member copay per session {provider.copay}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Link to={`/insurance/${provider.slug}`}>
                      <Button className="w-full">
                        Learn More
                      </Button>
                    </Link>
                    <Link to="/therapist-matching">
                      <Button variant="outline" className="w-full">
                        Request an Appointment
                      </Button>
                    </Link>
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