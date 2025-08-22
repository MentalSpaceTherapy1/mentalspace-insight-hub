import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Shield, DollarSign, Users, FileText, GraduationCap, MessageSquare, UserPlus } from "lucide-react";

const Career = () => {
  const navigate = useNavigate();
  const benefits = [
    {
      title: "$200–300 monthly Health Insurance Stipend",
      description: "Comprehensive health benefits for committed team members"
    },
    {
      title: "Bonuses & Incentives for High Performers", 
      description: "Recognition and rewards for excellence in client care"
    },
    {
      title: "Free MentalSpace Membership",
      description: "Access to our platform for your own mental health needs"
    },
    {
      title: "CEUs Reimbursement",
      description: "Continuing education support to maintain your credentials"
    }
  ];

  const advantages = [
    {
      icon: TrendingUp,
      title: "Increased pay",
      description: "Make almost double the hourly rate of our competitors for Live Sessions (via video, audio)"
    },
    {
      icon: Clock,
      title: "Flexibility", 
      description: "Set a schedule that works best for you and your clients"
    },
    {
      icon: Shield,
      title: "No overhead",
      description: "We submit insurance claims, check patient eligibility, and handle other costs associated with private practice"
    },
    {
      icon: DollarSign,
      title: "Reliable income",
      description: "Choose your caseload, earn monthly income, and become eligible for additional bonuses"
    },
    {
      icon: Users,
      title: "Supportive clinical community",
      description: "Join thousands of other talented clinicians to exchange resources and support"
    }
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit your application",
      description: "After we receive your application, we'll reach out via email"
    },
    {
      icon: GraduationCap,
      title: "Complete onboarding and training",
      description: "Receive 'on the job' training with a mentor"
    },
    {
      icon: MessageSquare,
      title: "Complete Interview",
      description: "Have a conversation with our recruiters to ensure that we are the best fit for you and vice versa"
    },
    {
      icon: UserPlus,
      title: "Start getting clients",
      description: "Set your caseload and hours, and check in on clients daily, 7 days/week"
    }
  ];

  const faqs = [
    {
      question: "What is MentalSpace?",
      answer: "MentalSpace is an online private practice company offering therapy, life coaching, and relationship coaching with a revolutionary approach to behavioral healthcare."
    },
    {
      question: "How do I request an appointment?",
      answer: "Submit your application through our Join Our Team button, and we'll guide you through our onboarding process."
    },
    {
      question: "How does MentalSpace protect my privacy?",
      answer: "We use HIPAA‑compliant systems and follow strict professional guidelines to protect both therapist and client privacy."
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              Provide mental wellbeing without compromising your schedule
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-4xl mx-auto">
              At MentalSpace, we're revolutionizing behavioral healthcare, creating unique opportunities for therapists. Join us!
            </p>
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/career-application')}>
              Join Our Team
            </Button>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Benefits & Perks
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground">
              * Eligibility for the health insurance stipend requires 30–40 hours/week commitment
            </p>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Advantages for Therapists
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How to Request an Appointment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join our team of dedicated professionals making mental health accessible
            </p>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/career-application')}>
              Apply Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;