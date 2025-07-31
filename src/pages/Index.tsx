import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Shield, DollarSign, ClipboardList, Users, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const coachingSteps = [
    {
      icon: ClipboardList,
      title: "Choose Your Plan",
      description: "Select the subscription that fits your budget and needs"
    },
    {
      icon: Users,
      title: "Personalized Match",
      description: "We'll match you with a life, relationship, or business coach who understands you"
    },
    {
      icon: Play,
      title: "Start Your Journey",
      description: "Connect via chat, phone, or video at your convenience"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Plans starting at $49.95 a week."
    },
    {
      icon: Calendar,
      title: "Convenient", 
      description: "No commutes, no waiting rooms. Therapy from the comfort of home."
    },
    {
      icon: CheckCircle,
      title: "Flexible",
      description: "Switch therapists or coach at no extra cost to find the perfect fit."
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Your privacy is our priority. Confidential and professional care."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "MentalSpace changed my life. The convenience and quality of care exceeded my expectations.",
      rating: 5
    },
    {
      name: "James R.",
      text: "Having both a therapist and life coach has been incredible for my personal growth.",
      rating: 5
    },
    {
      name: "Maria L.",
      text: "The flexibility to connect from anywhere made it possible for me to get the help I needed.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        
        {/* How Coaching Works */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How Coaching Works at MentalSpace
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coachingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link to="/get-started">
                <Button size="lg">Get Started</Button>
              </Link>
            </div>
          </div>
        </section>

        <Services />

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Benefits of MentalSpace
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Comparison />

        {/* Testimonials */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Success Stories – Real People, Real Results
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Join the thousands who have found hope, healing, and empowerment through MentalSpace
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-primary">— {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/get-started">
                <Button size="lg">Get Started</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Stay Connected – Join the MentalSpace Community
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Subscribe to our newsletter for mental health tips, life/business coach plans, exclusive offers, and insights from our experts
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-background text-foreground"
              />
              <Button variant="secondary" size="lg" className="px-8">
                Subscribe Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
