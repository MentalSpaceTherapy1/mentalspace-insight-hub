import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, RotateCcw, Shield, Handshake, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CouplesTherapy = () => {
  const benefits = [
    {
      icon: Target,
      title: "Identify the challenges",
      description: "Determine specific relationship issues to address with the help and support of an impartial professional therapist"
    },
    {
      icon: RotateCcw,
      title: "Root Cause Analysis",
      description: "Learn about the patterns that lead to relationship distress and dysfunctional dynamics"
    },
    {
      icon: Shield,
      title: "Restore confidence",
      description: "Learn how to use communication techniques to boost resilience and rebuild trust"
    },
    {
      icon: Handshake,
      title: "Establish your strengths again",
      description: "Create a solution‑oriented strategy to unleashing the strengths of your relationship"
    },
    {
      icon: Heart,
      title: "Compassion and resolution",
      description: "Improve your empathy, problem‑solving, and conflict resolution skills by practicing conflict resolution strategies"
    },
    {
      icon: MessageCircle,
      title: "Continuing assistance",
      description: "Consistent dedicated assistance is provided via live video sessions and messaging"
    }
  ];

  const therapyTypes = [
    {
      title: "Relationship therapy",
      description: "Every relationship faces challenges at some point. Whether it's communication issues, trust problems, or simply growing apart, relationship therapy provides a safe space to explore these challenges. Our therapists help couples develop conflict resolution skills, improve communication, and strengthen their bond. Through guided sessions, couples learn to understand each other's perspectives, rebuild trust, and create a healthier, more fulfilling relationship."
    },
    {
      title: "Pre‑marital Counseling",
      description: "Getting married is an exciting milestone, but it can also bring stress and uncertainty about the future. Pre‑marital counseling helps engaged couples discuss important topics before they tie the knot. Our counselors guide couples through conversations about finances, family planning, career goals, and potential conflicts. This proactive approach helps couples build a strong foundation for their marriage and develop skills to handle future challenges together."
    },
    {
      title: "Marital counseling",
      description: "Marriage counseling focuses on helping married couples identify and address the specific issues affecting their relationship. Our therapists create a safe environment where couples can have difficult conversations, express their concerns, and work together to find solutions. Through marriage counseling, couples learn to communicate more effectively, resolve conflicts constructively, and rebuild intimacy and connection in their relationship."
    }
  ];

  const advantages = [
    "Online therapy – reliable and easy",
    "Reach a therapist at any time of the day, on your schedule", 
    "Save money while receiving high‑quality care",
    "Having therapy anywhere of your choosing – just the way you need it"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Online Couples Therapy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Unleash your marriage or relationship strengths — and strengthen them more than ever.
            </p>
            <Link to="/get-started">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              What Will You Gain from Couples Therapy?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Three Kinds of Couples Therapy */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Three Kinds of Couples Therapy
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {therapyTypes.map((type, index) => (
                <div key={index} className="p-8 rounded-lg border bg-card">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Advantages of MentalSpace
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border bg-card">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-muted-foreground">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Your Relationship?
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

export default CouplesTherapy;