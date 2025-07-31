import { CheckCircle, UserCheck, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Short Assessment",
      description: "Complete a brief questionnaire about your needs and preferences"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Best-Fit Therapist",
      description: "Get matched with a licensed therapist within 24-48 hours"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Start Your Journey",
      description: "Begin therapy via video, phone, or chat sessions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            How MentalSpace Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with therapy has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-primary to-secondary rounded-full text-white">
                  {step.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/get-started">
            <Button size="lg" className="px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;