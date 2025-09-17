import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign, Users, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import careSourceImage from "@/assets/insurance-caresource.jpg";

const CareSourceInsurance = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "In-Network Coverage",
      description: "Coping & Healing Counseling is proudly in-network with CareSource, ensuring you receive maximum benefits for your mental health care."
    },
    {
      icon: DollarSign,
      title: "Low Cost Coverage",
      description: "CareSource members typically pay $0-$30 per session, making quality mental health care accessible and affordable."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "CareSource specializes in serving diverse communities with culturally sensitive mental health services and support."
    },
    {
      icon: Shield,
      title: "Comprehensive Benefits",
      description: "Your CareSource plan covers individual therapy, couples counseling, and specialized treatment programs."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Access therapy sessions at times that work for you, including evening and weekend appointments."
    },
    {
      icon: Heart,
      title: "Preventive Care",
      description: "CareSource emphasizes preventive mental health care to help you maintain optimal wellbeing year-round."
    }
  ];

  const coverageDetails = [
    "Individual psychotherapy sessions",
    "Group therapy programs", 
    "Couples and family counseling",
    "Psychiatric evaluations",
    "Crisis intervention services",
    "Substance abuse counseling",
    "Specialized trauma therapy",
    "Teen and adolescent counseling"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="CareSource Insurance Coverage - Mental Health Therapy | Colorado Healing Center"
        description="CareSource members enjoy comprehensive mental health coverage with copays as low as $0. Learn about your CareSource therapy benefits and book an appointment."
        keywords="CareSource insurance, mental health coverage, therapy benefits, in-network therapist, CareSource copay"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CareSource Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                  Access quality mental health care with your CareSource benefits. Our licensed therapists are in-network and ready to support your journey to wellness.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6">
                      Request an Appointment
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                      Take a Mental Health Assessment
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={careSourceImage}
                  alt="CareSource insurance coverage for mental health therapy"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Highlights */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your CareSource Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Copay Information</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Average CareSource member copay per session
                  </p>
                  <div className="text-3xl font-bold text-primary">$0 - $30</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    *Actual copay depends on your specific CareSource plan
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Network Status</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Coping & Healing Counseling status
                  </p>
                  <div className="text-3xl font-bold text-green-600">In-Network</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Maximum insurance benefits with minimal paperwork
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
                Services Covered by CareSource
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {coverageDetails.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
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
              Why Choose CareSource for Mental Health?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Getting Started with CareSource Coverage
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4">Verify Your Benefits</h3>
                <p className="text-muted-foreground">
                  Contact us or use our online form to verify your CareSource coverage and benefits.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4">Schedule Your Appointment</h3>
                <p className="text-muted-foreground">
                  Book your first session with one of our licensed, in-network therapists.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4">Begin Your Journey</h3>
                <p className="text-muted-foreground">
                  Start your mental health journey with affordable, quality care covered by CareSource.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Use Your CareSource Benefits?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Take the first step toward better mental health with CareSource coverage. Our team is ready to help you navigate your benefits and schedule your first appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Request an Appointment
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                  Verify My Benefits
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

export default CareSourceInsurance;