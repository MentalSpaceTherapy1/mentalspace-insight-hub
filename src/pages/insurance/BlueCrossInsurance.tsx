import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign, Users, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import blueCrossImage from "@/assets/insurance-blue-cross.jpg";

const BlueCrossInsurance = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Blue Cross Blue Shield provides extensive mental health benefits with nationwide network coverage and trusted care."
    },
    {
      icon: DollarSign,
      title: "Predictable Costs",
      description: "BCBS members typically pay $30-$40 per session with clear, upfront pricing and no surprise bills."
    },
    {
      icon: Award,
      title: "Quality Network",
      description: "Access to highly qualified, licensed therapists who meet BCBS's rigorous credentialing standards."
    },
    {
      icon: Users,
      title: "Family Coverage",
      description: "Comprehensive mental health benefits for individuals, couples, families, and children under one plan."
    },
    {
      icon: Zap,
      title: "Quick Access",
      description: "Streamlined authorization process means faster access to the mental health care you need."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Evidence-based treatments covered by BCBS have helped millions achieve better mental health outcomes."
    }
  ];

  const specializedServices = [
    "Individual cognitive behavioral therapy",
    "Trauma-informed care and PTSD treatment", 
    "Depression and anxiety counseling",
    "Couples and marriage therapy",
    "Family therapy and counseling",
    "Adolescent and teen mental health",
    "Substance abuse and addiction counseling",
    "Psychiatric medication management",
    "Crisis intervention and support",
    "Telehealth and online therapy options"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blue Cross Blue Shield Mental Health Coverage | Colorado Healing Center"
        description="Blue Cross Blue Shield members get comprehensive mental health coverage with copays from $30-$40. Find in-network therapists and learn about your BCBS benefits."
        keywords="Blue Cross Blue Shield, BCBS insurance, mental health coverage, therapy benefits, in-network therapist"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
                  Blue Cross Blue Shield Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-700">
                  Trust your mental health to the nation's most recognized health insurance brand. BCBS members receive comprehensive coverage for quality therapy services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                      Find a BCBS Therapist
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-blue-600 text-blue-600">
                      Check Your Mental Health
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={blueCrossImage}
                  alt="Blue Cross Blue Shield mental health insurance coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your BCBS Mental Health Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Copay Range</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$30 - $40</div>
                  <p className="text-sm text-muted-foreground">
                    Per therapy session with in-network providers
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Network Size</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Extensive</div>
                  <p className="text-sm text-muted-foreground">
                    Largest mental health provider network
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Authorization</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Streamlined</div>
                  <p className="text-sm text-muted-foreground">
                    Quick approval process for therapy services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Specialized Mental Health Services Covered
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {specializedServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
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
              Why BCBS Members Choose Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BCBS-Specific Information */}
        <section className="py-20 px-4 bg-blue-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Understanding Your BCBS Mental Health Benefits
              </h2>
              <p className="text-xl text-muted-foreground">
                Blue Cross Blue Shield offers some of the most comprehensive mental health coverage available
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">In-Network Advantages</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lower out-of-pocket costs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No claim forms to file</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Direct billing to BCBS</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Guaranteed network rates</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Coverage Details</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Most plans include mental health parity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Telehealth options available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No referral required for therapy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Emergency mental health services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Use Your BCBS Benefits?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of BCBS members who trust us with their mental health care. Start your journey to better mental health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Request an Appointment
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                  Verify Coverage
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

export default BlueCrossInsurance;