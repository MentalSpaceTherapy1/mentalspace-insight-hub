import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, UserCheck, Target, Brain, Shield, MessageCircle, Calendar, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/ResponsiveImage";
import therapySessionImg from "@/assets/therapy-session.jpg";
import coupleTherapyImg from "@/assets/couple-therapy-session.jpg";
import teenTherapyImg from "@/assets/teen-therapy-session.jpg";
import lifeCoachingImg from "@/assets/life-coaching-session.jpg";
const CHCServices = () => {
  const mainServices = [{
    icon: <Heart className="h-8 w-8" />,
    title: "Individual Therapy",
    description: "One-on-one support with licensed therapists for anxiety, depression, trauma, and personal growth in a safe, confidential environment.",
    image: therapySessionImg,
    features: ["Anxiety & Depression", "Trauma Recovery", "Stress Management", "Personal Growth"],
    link: "/online-therapy",
    color: "from-primary to-primary-light"
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Couples Therapy",
    description: "Enhance your relationship with professional guidance to improve communication, resolve conflicts, and strengthen emotional bonds.",
    image: coupleTherapyImg,
    features: ["Communication Skills", "Conflict Resolution", "Intimacy Building", "Relationship Goals"],
    link: "/couples-therapy",
    color: "from-secondary to-secondary-light"
  }, {
    icon: <UserCheck className="h-8 w-8" />,
    title: "Teen Therapy",
    description: "Specialized care for youth aged 13-17, providing a safe space to navigate adolescent challenges and build resilience.",
    image: teenTherapyImg,
    features: ["Identity Development", "Peer Relationships", "Academic Stress", "Family Dynamics"],
    link: "/teen-therapy",
    color: "from-primary to-secondary"
  }, {
    icon: <Target className="h-8 w-8" />,
    title: "Life Coaching",
    description: "Find balance, purpose, and joy with personalized coaching to achieve your personal and professional goals.",
    image: lifeCoachingImg,
    features: ["Goal Setting", "Career Guidance", "Work-Life Balance", "Personal Development"],
    link: "/life-coaching",
    color: "from-secondary to-primary"
  }];
  const specializedServices = [{
    title: "Mental Health Assessments",
    description: "Comprehensive evaluations to understand your mental health needs",
    icon: <Brain className="h-6 w-6" />,
    link: "/mental-health-tests"
  }, {
    title: "Crisis Support",
    description: "Immediate help available when you need it most",
    icon: <Shield className="h-6 w-6" />,
    link: "/emergency-resources"
  }, {
    title: "Insurance Coverage",
    description: "We accept most major insurance plans",
    icon: <CheckCircle className="h-6 w-6" />,
    link: "/insurance"
  }, {
    title: "Online Therapy",
    description: "Convenient, secure virtual sessions from anywhere",
    icon: <MessageCircle className="h-6 w-6" />,
    link: "/online-therapy"
  }];
  const processSteps = [{
    step: "1",
    title: "Book Your Session",
    description: "Schedule a convenient time that works for you"
  }, {
    step: "2",
    title: "Meet Your Therapist",
    description: "Connect with a licensed professional matched to your needs"
  }, {
    step: "3",
    title: "Begin Your Journey",
    description: "Start your path to healing and personal growth"
  }];
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>CHC Services - Comprehensive Mental Health & Life Coaching | Coping Healing & Caring</title>
        <meta name="description" content="Discover our full range of mental health services including individual therapy, couples therapy, teen therapy, and life coaching. Professional, compassionate care tailored to your needs." />
        <meta name="keywords" content="CHC services, mental health therapy, couples therapy, teen therapy, life coaching, individual therapy, online therapy, mental health assessment" />
        <link rel="canonical" href="https://chctherapy.com/chc-services" />
        
        <meta property="og:title" content="CHC Services - Comprehensive Mental Health & Life Coaching" />
        <meta property="og:description" content="Professional mental health services including therapy and life coaching. Find the right support for your unique needs with our specialized services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chctherapy.com/chc-services" />
        
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Coping Healing & Caring Services",
          "url": "https://chctherapy.com/chc-services",
          "description": "Comprehensive mental health and life coaching services",
          "medicalSpecialty": ["Psychology", "Mental Health", "Life Coaching"],
          "serviceType": ["Individual Therapy", "Couples Therapy", "Teen Therapy", "Life Coaching"],
          "areaServed": "United States"
        })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 text-sm font-medium">
                Professional Mental Health Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient leading-tight">Services</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">At Coping Healing & Counseling, we provide personalized mental health and life coaching services designed to support your unique journey toward wellness and personal growth.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-started">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/therapist-matching">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Find Your Therapist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Core Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional, evidence-based therapy and coaching services tailored to your specific needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {mainServices.map((service, index) => <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white">
                  <div className="relative">
                    <ResponsiveImage src={service.image} alt={service.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" width={400} height={192} sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className={`absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${service.color} rounded-full text-white`}>
                      {service.icon}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Key Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => <Badge key={featureIndex} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>)}
                      </div>
                    </div>
                    <Link to={service.link}>
                      <Button className="w-full group-hover:bg-primary/90 transition-colors duration-300">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Additional Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support services to complement your therapy journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {specializedServices.map((service, index) => <Link key={index} to={service.link} className="group">
                  <Card className="h-full border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>)}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting started with CHC services is simple and straightforward
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 -translate-y-1/2"></div>}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
                <p className="text-muted-foreground">Clients Helped</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container px-4 text-center">
            <Star className="h-12 w-12 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Take the first step toward better mental health and personal growth. 
              Our compassionate team is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default CHCServices;