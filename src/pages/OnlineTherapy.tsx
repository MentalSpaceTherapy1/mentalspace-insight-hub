import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Users, Heart, DollarSign, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/online-therapy-hero.jpg";

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
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Online therapy session" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Online Therapy & Coaching
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-white/90">
                  Anytime. Anywhere. Just the way you need it!
                </p>
                <p className="text-lg mb-8 text-white/80 leading-relaxed">
                  We all have been troubled by negative thoughts and behaviors. With the help of an experienced therapist, you'll learn to identify and overcome these obstacles and coaching with MentalSpace.
                </p>
                <Link to="/get-started">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group">
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Advantages of Online Therapy
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience the benefits of modern, accessible mental health care designed for your lifestyle
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="group p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/20">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5 mb-6 mx-auto">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-primary">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How MentalSpace Works */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How MentalSpace Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Getting started with online therapy is simple and straightforward
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold mx-auto text-white shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </div>
              <div className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">24hrs</div>
                <p className="text-muted-foreground">Average Response Time</p>
              </div>
              <div className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                <p className="text-muted-foreground">Lives Transformed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Are you ready to begin?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact us for a free consultation to begin your journey to a happier and healthier you
            </p>
            <Link to="/get-started">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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