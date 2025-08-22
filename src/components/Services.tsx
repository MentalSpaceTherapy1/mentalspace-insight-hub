import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, UserCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Individual Therapy",
      description: "One-on-one support with licensed therapists for anxiety, depression, trauma, and personal growth.",
      color: "from-primary to-primary-light",
      link: "/therapist-matching"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Couples Therapy", 
      description: "Enhance your relationship with professional guidance to improve communication and strengthen bonds.",
      color: "from-secondary to-secondary-light",
      link: "/therapist-matching"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Teen Therapy",
      description: "Specialized care for youth aged 13-17, providing a safe space to navigate adolescent challenges.",
      color: "from-primary to-secondary",
      link: "/therapist-matching"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Life Coaching",
      description: "Find balance, purpose, and joy with personalized coaching to achieve your personal and professional goals.",
      color: "from-secondary to-primary",
      link: "/therapist-matching"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive mental health support tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-full text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {service.description}
                </p>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
                    Request an Appointment
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;