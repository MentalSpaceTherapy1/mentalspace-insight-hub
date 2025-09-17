import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign, Handshake, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import alliantImage from "@/assets/insurance-alliant.jpg";

const AlliantInsurance = () => {
  const benefits = [
    {
      icon: Handshake,
      title: "Partnership Approach",
      description: "Alliant Health believes in true partnerships with members, providers, and communities to deliver exceptional mental health care."
    },
    {
      icon: DollarSign,
      title: "Value-Focused Care",
      description: "Alliant Health members typically pay $0-$30 per session with a focus on delivering maximum value and quality care."
    },
    {
      icon: Star,
      title: "Quality Excellence",
      description: "Commitment to maintaining the highest standards of mental health care through rigorous quality assurance and provider credentialing."
    },
    {
      icon: Clock,
      title: "Timely Access",
      description: "Reduced wait times and streamlined scheduling ensure you get the mental health care you need when you need it."
    },
    {
      icon: Shield,
      title: "Comprehensive Support",
      description: "Full spectrum of mental health services with coordinated care management and ongoing support throughout your journey."
    },
    {
      icon: CheckCircle,
      title: "Member-Centered Care",
      description: "Every aspect of your mental health care is designed around your individual needs, preferences, and goals."
    }
  ];

  const alliantServices = [
    "Individual psychotherapy and counseling",
    "Behavioral health assessments", 
    "Crisis intervention and emergency services",
    "Substance abuse and addiction treatment",
    "Couples and family therapy",
    "Group therapy and support groups",
    "Psychiatric medication management",
    "Intensive outpatient programs",
    "Case management and care coordination",
    "Telehealth and virtual therapy",
    "Specialized trauma therapy",
    "Eating disorder treatment",
    "LGBTQ+ affirming therapy",
    "Adolescent and teen mental health services"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Alliant Health Insurance Mental Health Coverage | Colorado Healing Center"
        description="Alliant Health members receive partnership-focused mental health coverage with quality excellence. Learn about your Alliant therapy benefits and member-centered care."
        keywords="Alliant Health insurance, mental health coverage, partnership care, quality therapy, member-centered treatment"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-800">
                  Alliant Health Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-indigo-700">
                  Experience Alliant Health's partnership approach to mental wellness. We believe in working together with you to achieve your mental health goals through quality, member-centered care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700">
                      Partner with Us
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-indigo-600 text-indigo-600">
                      Mental Health Partnership
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={alliantImage}
                  alt="Alliant Health insurance partnership mental health coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Focus */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Alliant Health Partnership Difference
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                At Alliant Health, we believe the best mental health outcomes come from true partnerships between members, providers, and our health plan
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">Session Cost</h3>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">$0 - $30</div>
                  <p className="text-sm text-muted-foreground">
                    Value-focused affordable care
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">Care Model</h3>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">Partnership</div>
                  <p className="text-sm text-muted-foreground">
                    Collaborative approach to mental health
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-600">Quality</h3>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">Excellence</div>
                  <p className="text-sm text-muted-foreground">
                    Highest standards of mental health care
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
                Mental Health Services in Partnership with You
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {alliantServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
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
              Alliant Health Mental Health Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Excellence Section */}
        <section className="py-20 px-4 bg-indigo-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Excellence Through Partnership
              </h2>
              <p className="text-xl text-muted-foreground">
                Alliant Health's partnership approach creates better outcomes by working together toward your mental health goals
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">Member Partnership</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Handshake className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Collaborative treatment planning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Handshake className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Member feedback integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Handshake className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized care coordination</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Handshake className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing support and advocacy</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">Quality Excellence</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Rigorous provider credentialing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Continuous quality monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Evidence-based treatment standards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Outcome measurement and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Partner with Alliant Health for Better Mental Health
            </h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Experience the difference that true partnership makes in your mental health journey. Together, we'll work toward your wellness goals with quality, member-centered care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Start Your Partnership
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-indigo-600">
                  Verify Your Benefits
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

export default AlliantInsurance;