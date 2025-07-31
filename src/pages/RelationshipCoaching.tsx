import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Handshake, Heart } from "lucide-react";

const RelationshipCoaching = () => {
  const steps = [
    {
      icon: Search,
      title: "Relationship Audit",
      description: "Analyze the current state of your relationships"
    },
    {
      icon: Handshake,
      title: "Conflict Resolution",
      description: "Learn techniques to address and resolve conflicts"
    },
    {
      icon: Heart,
      title: "Strengthening Bonds",
      description: "Implement strategies to deepen connections"
    }
  ];

  const benefits = [
    "Enhanced communication skills",
    "Stronger, healthier relationships with loved ones",
    "Tools to navigate relationship challenges"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Relationship Coaching
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Relationships are the foundation of our lives. Our Relationship Coaching program offers insights, tools, and strategies to nurture and strengthen your relationships.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </section>

        {/* How MentalSpace Works */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How MentalSpace Works
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

        {/* Talk with a coach */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Talk with a relationship coach that understands you
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
                Our relationship coaches provide personalized strategies and support for whatever challenges you're facing in love, friendship, or family relationships. Whether you're looking to improve communication, rebuild trust, or navigate difficult conversations, our coaches prioritize your unique needs and help you build stronger, more meaningful connections with the people who matter most to you.
              </p>
            </div>
          </div>
        </section>

        {/* Inclusivity Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              MentalSpace Relationship Coaches are there for you
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
                MentalSpace's relationship coaches support clients of all orientations, including LGBTQIA+ individuals and couples. Whether you're looking for help with finding love, building deeper trust, improving intimacy, or embracing your true self in relationships, our coaches provide a safe, non-judgmental space where you can explore your relationship goals and challenges. We offer free consultations to help you get started on your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Benefits of MentalSpace
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

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Strengthen Your Relationships?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us for a free consultation to begin your journey to healthier, more fulfilling relationships
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

export default RelationshipCoaching;