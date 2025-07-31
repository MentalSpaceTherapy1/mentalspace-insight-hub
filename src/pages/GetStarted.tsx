import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const services = [
    {
      title: "Individual",
      description: "Individualized support from a licensed therapist for ages 18+",
      link: "/online-therapy"
    },
    {
      title: "Couple", 
      description: "Relationship support to improve your connection with your partner",
      link: "/couples-therapy"
    },
    {
      title: "Teen",
      description: "Specialized support designed for youth ages 13–17", 
      link: "/teen-therapy"
    },
    {
      title: "Life Coaching",
      description: "Transform your Life & Relationship: Expert coaching for personal & couple growth",
      link: "/life-coaching"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Which service are you interested in?
            </h1>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <Button className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;