import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign, Globe, Stethoscope, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import cignaImage from "@/assets/insurance-cigna.jpg";

const CignaInsurance = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Global Health Expertise",
      description: "Cigna's worldwide experience in healthcare brings best practices and innovative approaches to your mental health care."
    },
    {
      icon: DollarSign,
      title: "Value-Based Care",
      description: "Cigna members typically pay $30-$40 per session with focus on delivering the best value for your healthcare dollar."
    },
    {
      icon: Stethoscope,
      title: "Medical Integration",
      description: "Your mental health care is integrated with your overall health plan for coordinated, comprehensive care."
    },
    {
      icon: Target,
      title: "Outcome-Focused",
      description: "Cigna emphasizes measurable outcomes and evidence-based treatments that deliver real results for your mental health."
    },
    {
      icon: Shield,
      title: "Comprehensive Benefits",
      description: "Robust coverage for a wide range of mental health conditions and specialized treatment programs."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous provider credentialing and quality monitoring ensure you receive excellent care every time."
    }
  ];

  const cignaServices = [
    "Individual psychotherapy sessions",
    "Intensive outpatient programs (IOP)", 
    "Cognitive behavioral therapy (CBT)",
    "Trauma and PTSD treatment",
    "Substance abuse counseling",
    "Couples and family therapy",
    "Group therapy programs",
    "Psychiatric evaluations",
    "Medication management services",
    "Crisis intervention support",
    "Telehealth and virtual therapy",
    "Employee assistance programs (EAP)",
    "Specialized eating disorder treatment",
    "Adolescent and teen mental health"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cigna Insurance Mental Health Coverage | Colorado Healing Center"
        description="Cigna members receive comprehensive mental health coverage with integrated care approach. Learn about your Cigna therapy benefits and global health expertise."
        keywords="Cigna insurance, mental health coverage, integrated healthcare, therapy benefits, outcome-focused treatment"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-orange-800">
                  Cigna Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-orange-700">
                  Experience Cigna's integrated approach to mental healthcare. With global expertise and outcome-focused care, we're committed to improving your total wellbeing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-orange-600 hover:bg-orange-700">
                      Find Integrated Care
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-orange-600 text-orange-600">
                      Wellness Assessment
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={cignaImage}
                  alt="Cigna insurance integrated mental health coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Care Focus */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cigna's Integrated Healthcare Approach
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Your mental health is connected to your overall health. Cigna's integrated approach ensures all aspects of your wellbeing work together.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Session Cost</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">$30 - $40</div>
                  <p className="text-sm text-muted-foreground">
                    Value-focused pricing for quality care
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Care Model</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">Integrated</div>
                  <p className="text-sm text-muted-foreground">
                    Mental health connected to total health
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Outcomes</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">Measured</div>
                  <p className="text-sm text-muted-foreground">
                    Evidence-based results tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Covered */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Comprehensive Mental Health Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {cignaServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              The Cigna Mental Health Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Expertise Section */}
        <section className="py-20 px-4 bg-orange-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global Healthcare Expertise, Local Care
              </h2>
              <p className="text-xl text-muted-foreground">
                Cigna combines worldwide healthcare knowledge with personalized, local mental health services
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Global Best Practices</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Globe className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>International treatment protocols</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Globe className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Cross-cultural mental health expertise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Globe className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Latest research integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Globe className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Innovation in care delivery</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Outcome Measurement</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Target className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Treatment effectiveness tracking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Target className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Patient satisfaction monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Target className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Quality improvement programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Target className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Evidence-based care protocols</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-yellow-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Experience Cigna's Integrated Mental Health Care
            </h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Benefit from global healthcare expertise combined with personalized, outcome-focused mental health treatment that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Start Integrated Care
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-orange-600">
                  Check Your Benefits
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

export default CignaInsurance;