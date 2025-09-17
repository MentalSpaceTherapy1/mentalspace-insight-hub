import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign, Heart, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import peachStateImage from "@/assets/insurance-peach-state.jpg";

const PeachStateInsurance = () => {
  const benefits = [
    {
      icon: Home,
      title: "Georgia-Focused Care",
      description: "Peach State Health Plan specializes in serving Georgia residents with locally-tailored mental health services and community partnerships."
    },
    {
      icon: DollarSign, 
      title: "Affordable Coverage",
      description: "Peach State members typically pay $0-$30-$40 per session with flexible payment options based on your specific plan."
    },
    {
      icon: Users,
      title: "Family-Centered Approach",
      description: "Comprehensive mental health services for individuals, families, and children with culturally sensitive care approaches."
    },
    {
      icon: Heart,
      title: "Community Partnerships",
      description: "Strong relationships with local mental health organizations and community resources throughout Georgia."
    },
    {
      icon: Shield,
      title: "Medicaid Expertise",
      description: "Specialized experience in Medicaid managed care with streamlined access to mental health services."
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Services",
      description: "Full spectrum of mental health care from preventive services to intensive treatment and recovery support."
    }
  ];

  const peachStateServices = [
    "Individual therapy and counseling",
    "Community mental health services", 
    "Crisis intervention and stabilization",
    "Substance abuse treatment",
    "Family therapy and support",
    "Children and adolescent services",
    "Group therapy programs",
    "Psychiatric services and medication management",
    "Peer support and recovery services",
    "Case management and care coordination",
    "Mobile crisis response teams",
    "Intensive outpatient programs",
    "Residential treatment services",
    "Telehealth and remote therapy options"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Peach State Health Plan Mental Health Coverage | Colorado Healing Center"
        description="Peach State Health Plan members receive Georgia-focused mental health coverage with community partnerships. Learn about your Peach State therapy benefits."
        keywords="Peach State Health Plan, Georgia mental health, Medicaid therapy, community mental health, family therapy"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-rose-800">
                  Peach State Health Plan Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-rose-700">
                  Experience Georgia-focused mental health care with Peach State Health Plan. Our community partnerships and local expertise ensure you receive culturally sensitive, accessible care close to home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-rose-600 hover:bg-rose-700">
                      Find Local Georgia Care
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-rose-600 text-rose-600">
                      Community Health Assessment
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={peachStateImage}
                  alt="Peach State Health Plan Georgia community mental health coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Georgia Community Focus */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Serving Georgia Communities
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Peach State Health Plan is deeply rooted in Georgia communities, providing mental health care that understands local needs and culture
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-rose-600">Copay Range</h3>
                  <div className="text-3xl font-bold text-rose-600 mb-2">$0-$30-$40</div>
                  <p className="text-sm text-muted-foreground">
                    Flexible based on your specific plan
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-rose-600">Service Area</h3>
                  <div className="text-3xl font-bold text-rose-600 mb-2">Georgia</div>
                  <p className="text-sm text-muted-foreground">
                    Statewide network of local providers
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-rose-600">Approach</h3>
                  <div className="text-3xl font-bold text-rose-600 mb-2">Community</div>
                  <p className="text-sm text-muted-foreground">
                    Local partnerships and cultural sensitivity
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
                Mental Health Services Available in Georgia
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {peachStateServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0" />
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
              Peach State Health Plan Mental Health Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-rose-600" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Partnership Section */}
        <section className="py-20 px-4 bg-rose-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Georgia Community Partnerships
              </h2>
              <p className="text-xl text-muted-foreground">
                Peach State Health Plan works closely with Georgia communities to provide comprehensive, accessible mental health care
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-rose-600">Local Resources</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Home className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span>Georgia community mental health centers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Home className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span>Faith-based counseling partnerships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Home className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span>School-based mental health programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Home className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span>Rural and urban provider networks</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-rose-600">Specialized Programs</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span>Culturally specific therapy services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span>Trauma-informed community care</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span>Family preservation programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span>Peer support networks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-rose-600 to-pink-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Access Your Peach State Mental Health Benefits
            </h2>
            <p className="text-xl mb-8 text-rose-100 max-w-2xl mx-auto">
              Connect with Georgia's trusted mental health providers through Peach State Health Plan. Experience community-focused care that understands your local needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Find Georgia Providers
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-rose-600">
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

export default PeachStateInsurance;