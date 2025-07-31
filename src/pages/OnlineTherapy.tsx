import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Users, Heart, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineTherapy = () => {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Effective",
      description: "According to our current data, the vast majority of MentalSpace clients prefer online therapy to traditional therapy — and many showed improvements after just a few online sessions"
    },
    {
      icon: Clock,
      title: "Convenient", 
      description: "Send a message to your therapist from anywhere, at any time — all from the privacy of your device. There is no need to worry about extra commuting or taking time away from work, school or family"
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Our therapists follow strict professional and ethical client confidentiality codes. All client information is securely stored and encrypted in our HIPAA‑compliant electronic health record software"
    },
    {
      icon: Users,
      title: "Experienced",
      description: "Our therapist and coaches are experienced mental health counselors who specialize in a variety of issues such as anxiety, depression, PTSD, trauma, couples therapy, and others"
    },
    {
      icon: Heart,
      title: "Dependable", 
      description: "You can count on our therapist to be there for you. You'll have the option to see your therapist calendar and choose the time that work best for you"
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "MentalSpace's mission is to make therapy accessible and affordable. Online counseling with MentalSpace is generally way more affordable than face‑to‑face therapy. There are several plans available"
    }
  ];

  const steps = [
    {
      title: "Short & Concise Assessment",
      description: "To find a therapist who meets your needs and preferences, answer a few questions"
    },
    {
      title: "A Therapist That Meets Your Needs", 
      description: "We'll connect you with a therapist within 24 to 48 hours"
    },
    {
      title: "Therapy Begins",
      description: "We promise to be there for you every step of your journey"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Online Therapy & Coaching
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              Anytime. Anywhere. Just the way you need it!
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-muted-foreground">
              We all have been troubled by negative thoughts and behaviors. With the help of an experienced therapist, you'll learn to identify and overcome these obstacles and coaching with MentalSpace.
            </p>
            <Link to="/get-started">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Advantages of Online Therapy
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How MentalSpace Works */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How MentalSpace Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Are you ready to begin?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us for a free consultation to begin your journey to a happier and healthier you
            </p>
            <Link to="/get-started">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OnlineTherapy;