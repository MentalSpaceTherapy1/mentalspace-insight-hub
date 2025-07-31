import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ClipboardList, FileText, Play } from "lucide-react";

const CoachingServices = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Life Assessment",
      description: "Begin with a free consultation to discuss your goals and challenges"
    },
    {
      icon: FileText,
      title: "Personalized Plan",
      description: "Based on your needs, we'll create a tailored coaching plan"
    },
    {
      icon: Play,
      title: "Get Started",
      description: "Engage in regular sessions with your coach to track progress and make adjustments"
    }
  ];

  const benefits = [
    "Comprehensive support in various life areas",
    "Access to experienced coaches with diverse expertise",
    "Personalized strategies and tools tailored to your needs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Coaching Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              At MentalSpace, we understand that sometimes you need more than therapy. You need guidance, mentorship, and a roadmap to navigate life's challenges. Our coaching services are designed to provide you with the tools and strategies to thrive in various aspects of your life.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </section>

        {/* How Does It Work */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How Does It Work?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg border bg-card">
                  <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground mb-6 italic">
                "The coaching services at MentalSpace transformed my life. I've never felt more focused and driven."
              </blockquote>
              <cite className="text-lg font-semibold text-primary">— Alex R.</cite>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Start Your Coaching Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Take the first step towards personal growth and transformation
            </p>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoachingServices;