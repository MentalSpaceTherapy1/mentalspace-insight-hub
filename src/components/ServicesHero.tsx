import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import individualTherapyImg from "@/assets/individual-therapy.jpg";
import coupleTherapySessionImg from "@/assets/couple-therapy-session.jpg";
import teenTherapySessionImg from "@/assets/teen-therapy-session.jpg";
import lifeCoachingSessionImg from "@/assets/life-coaching-session.jpg";

const ServicesHero = () => {
  const services = [
    {
      title: "Individual",
      subtitle: "Therapy",
      description: "Personalized one-on-one sessions with licensed therapists for ages 18+",
      image: individualTherapyImg,
      link: "/online-therapy",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Couple",
      subtitle: "Therapy", 
      description: "Relationship support to improve connection and communication with your partner",
      image: coupleTherapySessionImg,
      link: "/couples-therapy",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Teen",
      subtitle: "Therapy",
      description: "Specialized support designed for youth ages 13–17 in a safe environment",
      image: teenTherapySessionImg,
      link: "/teen-therapy",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Life",
      subtitle: "Coaching",
      description: "Transform your life with expert coaching for personal and professional growth",
      image: lifeCoachingSessionImg,
      link: "/life-coaching",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-modern">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            What kind of service are you looking for?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect therapy or coaching service tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card className="h-full hover-lift glass-effect border-0 overflow-hidden animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={`${service.title} ${service.subtitle}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <ArrowRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-1 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.title}
                    </h3>
                    <p className="text-lg font-semibold text-muted-foreground mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Not sure which service is right for you?
          </p>
          <Link to="/get-started">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              Take Our Quick Assessment
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;