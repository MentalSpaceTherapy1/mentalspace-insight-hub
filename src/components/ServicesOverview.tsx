import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/ResponsiveImage";
import individualTherapyImg from "@/assets/individual-therapy.jpg";
import coupleTherapyImg from "@/assets/couple-therapy-session.jpg";
import teenTherapyImg from "@/assets/teen-therapy-session.jpg";
import lifeCoachingImg from "@/assets/life-coaching-session.jpg";

const ServicesOverview = () => {
  const services = [
    {
      title: "Individual",
      subtitle: "Therapy",
      image: individualTherapyImg,
      link: "/online-therapy",
      description: "Personal growth and mental health support",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Couple",
      subtitle: "Therapy", 
      image: coupleTherapyImg,
      link: "/couples-therapy",
      description: "Strengthen relationships and communication",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Teen",
      subtitle: "Therapy",
      image: teenTherapyImg,
      link: "/teen-therapy", 
      description: "Specialized support for adolescents",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Life",
      subtitle: "Coaching",
      image: lifeCoachingImg,
      link: "/life-coaching",
      description: "Achieve your goals and unlock potential",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Choose Your Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the right support for your unique needs with our specialized services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card className="overflow-hidden hover-lift glass-effect border-0 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <ResponsiveImage
                    src={service.image} 
                    alt={`${service.title} ${service.subtitle}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    width={262}
                    height={192}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ArrowRight className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-1 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;