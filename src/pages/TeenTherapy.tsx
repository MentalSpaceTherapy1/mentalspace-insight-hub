import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TeenTherapy = () => {
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

  const benefits = [
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
              Teen Therapy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              The benefits of talking with a therapist can be nothing less than amazing!
            </p>
            <Link to="/get-started">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        {/* How MentalSpace Works */}
        <section className="py-20 px-4">
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

        {/* Why Therapy is Good */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Therapy is Good for Teenagers?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Therapy provides a safe space for teenagers to express their feelings and thoughts without judgment. 
                It can help teens cope with mental health issues, navigate life transitions, manage stress, anxiety, 
                and depression. Through therapy, teenagers learn valuable coping skills, develop emotional intelligence, 
                and gain tools to handle challenges both now and in the future. Therapy also helps teens set and achieve 
                personal goals, explore their values and identity, and build confidence as they transition into adulthood.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Benefits of MentalSpace
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border bg-card">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Support Your Teen?
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

export default TeenTherapy;