import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const InsuranceProvider = () => {
  const { provider } = useParams();
  
  const insuranceData: Record<string, { name: string; copay: string; description: string }> = {
    'caresource': {
      name: 'CareSource',
      copay: '$0/$30',
      description: 'CareSource members enjoy comprehensive mental health coverage with our in-network therapists.'
    },
    'amerigroup': {
      name: 'Amerigroup',
      copay: '$0/$30', 
      description: 'Amerigroup provides excellent mental health benefits for our therapy services.'
    },
    'peach-state': {
      name: 'Peach State',
      copay: '$0/$30/$40',
      description: 'Peach State Health Plan members have access to quality mental health care through our platform.'
    },
    'optum': {
      name: 'Optum',
      copay: '$0/$30',
      description: 'Optum members can access our comprehensive therapy and coaching services.'
    },
    'blue-cross': {
      name: 'Blue Cross Blue Shield', 
      copay: '$30/$40',
      description: 'Blue Cross Blue Shield provides robust coverage for our mental health services.'
    },
    'aetna': {
      name: 'Aetna',
      copay: '$0/$30',
      description: 'Aetna members enjoy seamless access to our licensed therapists and coaches.'
    },
    'cigna': {
      name: 'Cigna',
      copay: '$30/$40', 
      description: 'Cigna provides comprehensive mental health coverage through our network.'
    },
    'alliant': {
      name: 'Alliant Health',
      copay: '$0/$30',
      description: 'Alliant Health members have access to our full range of therapy services.'
    },
    'humana': {
      name: 'Humana',
      copay: '$0/$30',
      description: 'Humana members receive excellent mental health coverage through our trusted network.'
    }
  };

  const currentInsurance = provider ? insuranceData[provider] : null;

  if (!currentInsurance) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Insurance Provider Not Found</h1>
            <Link to="/insurance">
              <Button>View All Insurance Providers</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const benefits = [
    {
      icon: CheckCircle,
      title: "In-Network Coverage",
      description: `Coping & Healing Counseling is in-network with ${currentInsurance.name}, ensuring you get the most from your benefits.`
    },
    {
      icon: Shield,
      title: "Quality Care",
      description: "Our licensed therapists provide evidence-based treatment approaches tailored to your specific needs."
    },
    {
      icon: DollarSign,
      title: "Affordable Care",
      description: `With your ${currentInsurance.name} coverage, you can access therapy with minimal out-of-pocket costs.`
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
              {currentInsurance.name} Coverage
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              {currentInsurance.description}
            </p>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Therapists in‑network with {currentInsurance.name}
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
                  Getting mental health support should be straightforward. That's why Coping & Healing Counseling is in‑network with {currentInsurance.name} and various other insurance plans. Our licensed therapists are here to guide you towards meaningful life changes. Real therapy for real transformation.
                </p>
                
                <div className="text-center bg-muted/50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Your copay could be as low as $0</h3>
                  <p className="text-lg text-muted-foreground">
                    Average {currentInsurance.name} member copay per session {currentInsurance.copay}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Benefits of Using Your {currentInsurance.name} Coverage
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Use Your {currentInsurance.name} Benefits?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Start your mental health journey today with covered therapy sessions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
              <Link to="/insurance">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                  View All Insurance Options
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InsuranceProvider;