import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign, Zap, Brain, Award } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import aetnaImage from "@/assets/insurance-aetna.jpg";

const AetnaInsurance = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Health Parity",
      description: "Aetna provides equal coverage for mental health services as physical health, ensuring comprehensive care without discrimination."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Care",
      description: "Aetna members typically pay $0-$30 per session with transparent pricing and no hidden fees."
    },
    {
      icon: Zap,
      title: "Quick Authorization",  
      description: "Streamlined approval process gets you connected to therapy faster with minimal administrative delays."
    },
    {
      icon: Award,
      title: "Quality Network",
      description: "Access to rigorously credentialed mental health professionals who meet Aetna's high standards for care."
    },
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "From anxiety and depression to specialized trauma therapy, Aetna covers a wide range of mental health conditions."
    },
    {
      icon: CheckCircle,
      title: "Evidence-Based Care",
      description: "Coverage for proven therapeutic approaches that deliver measurable results for your mental health."
    }
  ];

  const aetnaServices = [
    "Individual cognitive behavioral therapy",
    "Dialectical behavior therapy (DBT)", 
    "EMDR and trauma-focused therapy",
    "Depression and anxiety counseling",
    "Bipolar disorder treatment",
    "Couples and marriage therapy",
    "Family therapy services",
    "Group therapy sessions",
    "Substance abuse treatment",
    "Eating disorder therapy",
    "Psychiatric medication management",
    "Crisis intervention services",
    "Telehealth and digital therapy options"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Aetna Insurance Mental Health Coverage | Colorado Healing Center"
        description="Aetna members receive comprehensive mental health coverage with mental health parity. Learn about your Aetna therapy benefits and quality provider network."
        keywords="Aetna insurance, mental health coverage, mental health parity, therapy benefits, evidence-based treatment"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-red-800">
                  Aetna Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-red-700">
                  Experience Aetna's commitment to mental health parity. Your mental health coverage is equal to your physical health benefits, ensuring comprehensive care when you need it most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700">
                      Find an Aetna Provider
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-red-600 text-red-600">
                      Mental Health Assessment
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={aetnaImage}
                  alt="Aetna insurance mental health parity and comprehensive coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mental Health Parity Focus */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Aetna's Mental Health Parity Commitment
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Aetna believes mental health is as important as physical health, providing equal coverage and access to care
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-red-600">Copay</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">$0 - $30</div>
                  <p className="text-sm text-muted-foreground">
                    Same as medical copays under parity
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-red-600">Coverage</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">Equal</div>
                  <p className="text-sm text-muted-foreground">
                    Mental health parity with medical benefits
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-red-600">Access</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">Fast</div>
                  <p className="text-sm text-muted-foreground">
                    Quick authorization and appointment scheduling
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
                Evidence-Based Treatments Covered by Aetna
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {aetnaServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
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
              Aetna Mental Health Advantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-red-600" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quality & Innovation Section */}
        <section className="py-20 px-4 bg-red-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Aetna's Innovation in Mental Health
              </h2>
              <p className="text-xl text-muted-foreground">
                Leading the industry with innovative approaches to mental health care delivery and outcomes
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Quality Measures</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Provider quality scorecards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Outcome measurement tracking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Evidence-based treatment protocols</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Award className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Continuous quality improvement</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Digital Innovation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Brain className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>AI-powered provider matching</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Brain className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Digital therapeutic tools</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Brain className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Mental health apps and resources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Brain className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Telehealth platform integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Experience Aetna's Mental Health Excellence
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              Join millions of Aetna members who receive high-quality, evidence-based mental health care through our comprehensive network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Find Quality Care
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-red-600">
                  Verify Benefits
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

export default AetnaInsurance;