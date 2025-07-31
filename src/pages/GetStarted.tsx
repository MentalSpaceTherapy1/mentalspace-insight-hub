import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, User, Users, Heart, Target } from "lucide-react";
import heroImage from "@/assets/get-started-hero.jpg";

const GetStarted = () => {
  const services = [
    {
      title: "Individual",
      description: "Individualized support from a licensed therapist for ages 18+",
      link: "/therapist-matching",
      icon: User,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Couple", 
      description: "Relationship support to improve your connection with your partner",
      link: "/couples-therapy",
      icon: Heart,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Teen",
      description: "Specialized support designed for youth ages 13–17", 
      link: "/teen-therapy",
      icon: Users,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Life Coaching",
      description: "Transform your Life & Relationship: Expert coaching for personal & couple growth",
      link: "/life-coaching",
      icon: Target,
      color: "from-orange-500 to-yellow-500"
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
              alt="Get started with therapy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Which service are you interested in?
                </h1>
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  Choose the path that's right for you. Our personalized approach ensures you get the support you need to thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Selection */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Choose Your Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every journey is unique. Select the service that best fits your needs and goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border-0">
                    <CardContent className="p-8 text-center relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} p-0.5 mb-6 mx-auto`}>
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                          <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-primary">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                        {service.description}
                      </p>
                      <Link to={service.link}>
                        <Button 
                          className="w-full group" 
                          size="lg"
                          onClick={() => console.log(`Clicking ${service.title} - navigating to ${service.link}`)}
                        >
                          Get Started
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Getting started is simple and takes just a few minutes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Take Assessment",
                  description: "Answer a few questions about your needs and preferences"
                },
                {
                  step: "2", 
                  title: "Get Matched",
                  description: "We'll connect you with the perfect therapist or coach within 24-48 hours"
                },
                {
                  step: "3",
                  title: "Start Your Journey", 
                  description: "Begin your sessions via video, phone, or chat at your convenience"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold mx-auto text-white shadow-lg group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of people who have found healing, growth, and happiness with MentalSpace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/online-therapy">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Start Therapy
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;