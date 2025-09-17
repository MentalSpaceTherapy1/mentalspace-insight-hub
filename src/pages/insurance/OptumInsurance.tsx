import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign, Database, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import optumImage from "@/assets/insurance-optum.jpg";

const OptumInsurance = () => {
  const benefits = [
    {
      icon: Database,
      title: "Data-Driven Care",
      description: "Optum uses advanced analytics and data insights to match you with the most effective treatments and providers."
    },
    {
      icon: DollarSign,
      title: "Cost Transparency",
      description: "Optum members typically pay $0-$30 per session with clear, upfront pricing and no billing surprises."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Access cutting-edge mental health technologies and treatment approaches backed by Optum's research and development."
    },
    {
      icon: Users,
      title: "Collaborative Care",
      description: "Your mental health team works together with your primary care provider for coordinated, comprehensive treatment."
    },
    {
      icon: Shield,
      title: "Comprehensive Network",
      description: "Extensive provider network ensures you can find specialized care for any mental health condition or concern."
    },
    {
      icon: CheckCircle,
      title: "Proven Outcomes",
      description: "Optum's evidence-based approach and outcome tracking ensure you receive treatments that actually work."
    }
  ];

  const optumServices = [
    "Individual therapy and counseling",
    "Intensive outpatient programs", 
    "Medication-assisted treatment",
    "Specialized trauma therapy",
    "Addiction and substance abuse treatment",
    "Couples and family counseling",
    "Group therapy sessions",
    "Psychiatric medication management",
    "Crisis intervention services",
    "Telehealth and digital therapeutics",
    "Employee mental health programs",
    "Behavioral health case management",
    "Eating disorder treatment",
    "LGBTQ+ affirming therapy",
    "Geriatric mental health services"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Optum Insurance Mental Health Coverage | Colorado Healing Center"
        description="Optum members access data-driven mental health care with innovative treatments. Learn about your Optum therapy benefits and collaborative care approach."
        keywords="Optum insurance, mental health coverage, data-driven therapy, innovative treatment, collaborative care"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-teal-800">
                  Optum Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-teal-700">
                  Experience the future of mental healthcare with Optum's data-driven, innovative approach. Get matched with the right treatments and providers using advanced analytics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-teal-600 hover:bg-teal-700">
                      Get Matched with Care
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-teal-600 text-teal-600">
                      Digital Assessment
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={optumImage}
                  alt="Optum insurance data-driven mental health coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Focus */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Optum's Innovation in Mental Health
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Leveraging technology, data, and research to deliver personalized mental health care that gets results
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-teal-600">Session Cost</h3>
                  <div className="text-3xl font-bold text-teal-600 mb-2">$0 - $30</div>
                  <p className="text-sm text-muted-foreground">
                    Transparent, affordable pricing
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-teal-600">Technology</h3>
                  <div className="text-3xl font-bold text-teal-600 mb-2">Advanced</div>
                  <p className="text-sm text-muted-foreground">
                    AI-powered care matching and tracking
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-teal-600">Research</h3>
                  <div className="text-3xl font-bold text-teal-600 mb-2">Leading</div>
                  <p className="text-sm text-muted-foreground">
                    Evidence-based treatment protocols
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
                {optumServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
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
              The Optum Advantage in Mental Health
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-teal-600" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology & Data Section */}
        <section className="py-20 px-4 bg-teal-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technology-Powered Mental Health Care
              </h2>
              <p className="text-xl text-muted-foreground">
                Optum combines human expertise with advanced technology to deliver personalized, effective mental health treatment
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Data-Driven Insights</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Database className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Predictive analytics for treatment success</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Database className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Provider matching algorithms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Database className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Treatment outcome tracking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Database className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Population health insights</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Digital Innovation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>AI-powered mental health apps</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Digital therapeutic tools</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Virtual reality therapy options</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Integrated telehealth platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Experience the Future of Mental Health Care
            </h2>
            <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
              Join the millions of Optum members who benefit from innovative, data-driven mental health care that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Get Smart Matching
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-teal-600">
                  Verify Your Coverage
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

export default OptumInsurance;