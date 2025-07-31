import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Handshake, Heart, Users, MessageCircle, Calendar } from "lucide-react";
import couplesConnectionImage from "@/assets/couples-connection.jpg";

const RelationshipCoaching = () => {
  const steps = [
    {
      icon: Search,
      title: "Relationship Audit",
      description: "Analyze the current state of your relationships"
    },
    {
      icon: Handshake,
      title: "Conflict Resolution",
      description: "Learn techniques to address and resolve conflicts"
    },
    {
      icon: Heart,
      title: "Strengthening Bonds",
      description: "Implement strategies to deepen connections"
    }
  ];

  const benefits = [
    "Enhanced communication skills",
    "Stronger, healthier relationships with loved ones",
    "Tools to navigate relationship challenges"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${couplesConnectionImage})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Relationship Coaching
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Build stronger, healthier relationships through expert guidance and proven strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">Improved Communication</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <p className="text-muted-foreground">Stronger Connections</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Relationship Coaching Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A structured approach to building stronger, more fulfilling relationships
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">{index + 1}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expert Coaches */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Expert Relationship Coaches Who Understand You
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our certified relationship coaches provide personalized strategies and support for whatever challenges you're facing in love, friendship, or family relationships.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Improve Communication</h4>
                      <p className="text-muted-foreground text-sm">Learn effective communication techniques for deeper understanding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Rebuild Trust</h4>
                      <p className="text-muted-foreground text-sm">Strategies to repair and strengthen trust in relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Flexible Sessions</h4>
                      <p className="text-muted-foreground text-sm">Schedule sessions that fit your lifestyle and needs</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Personalized Approach</h4>
                      <p className="text-sm text-muted-foreground">Tailored to your unique relationship dynamics</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">All Relationship Types</h4>
                      <p className="text-sm text-muted-foreground">Couples, family, friendships, and workplace relationships</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusive Support */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Inclusive Support for All Relationships
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our relationship coaches support clients of all orientations, including LGBTQIA+ individuals and couples. We provide a safe, non-judgmental space where you can explore your relationship goals and challenges.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-4">Safe & Inclusive</h3>
                  <p className="text-muted-foreground">A welcoming environment for all individuals and couples, regardless of background or orientation.</p>
                </Card>
                <Card className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-4">Free Consultation</h3>
                  <p className="text-muted-foreground">Start with a complimentary session to discuss your needs and goals with our expert coaches.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your Relationships
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the lasting benefits of professional relationship coaching
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <p className="font-medium leading-relaxed">{benefit}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Relationships?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Take the first step towards stronger, healthier connections with our expert relationship coaches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Start Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RelationshipCoaching;