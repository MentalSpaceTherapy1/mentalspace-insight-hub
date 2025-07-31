import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Shield, DollarSign, ClipboardList, Users, Play, Star, ArrowRight, Zap, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import therapySessionImg from "@/assets/therapy-session.jpg";
import happyPeopleImg from "@/assets/happy-people.jpg";
import wellnessMeditationImg from "@/assets/wellness-meditation.jpg";
import coupleTherapyImg from "@/assets/couple-therapy.jpg";

const Index = () => {
  const coachingSteps = [
    {
      icon: ClipboardList,
      title: "Choose Your Plan",
      description: "Select the subscription that fits your budget and needs"
    },
    {
      icon: Users,
      title: "Personalized Match",
      description: "We'll match you with a life, relationship, or business coach who understands you"
    },
    {
      icon: Play,
      title: "Start Your Journey",
      description: "Connect via chat, phone, or video at your convenience"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Effective & Fast",
      description: "See improvements in just a few sessions with our evidence-based approach.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Connect with your therapist anytime that works for your schedule.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Tailored therapy approaches designed specifically for your unique needs.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "HIPAA-compliant platform ensuring your privacy and confidentiality.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      text: "MentalSpace transformed my approach to stress and anxiety. The convenience of online sessions fits perfectly with my busy lifestyle.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Rodriguez",
      role: "Software Engineer", 
      text: "Having both individual therapy and life coaching has been game-changing for my personal and professional growth.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Chen",
      role: "Teacher",
      text: "The flexibility to connect from anywhere made it possible for me to prioritize my mental health without disrupting my schedule.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        
        {/* Modern Stats Section */}
        <section className="py-16 px-4 bg-gradient-modern">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-bounce-in">
                <div className="text-4xl font-bold text-gradient mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-bold text-gradient mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-muted-foreground">Availability</div>
              </div>
              <div className="animate-bounce-in" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-muted-foreground">Expert Therapists</div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern How It Works with Images */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                Your Journey to Wellness
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience therapy like never before with our innovative approach to mental health care
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="animate-slide-up">
                <img 
                  src={therapySessionImg} 
                  alt="Professional therapy session" 
                  className="w-full h-96 object-cover rounded-3xl shadow-modern hover-lift"
                />
              </div>
              <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <h3 className="text-3xl font-bold mb-6">Connect with Licensed Professionals</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our platform connects you with experienced, licensed therapists who specialize in your specific needs. 
                  Every session is conducted in a secure, HIPAA-compliant environment.
                </p>
                <Link to="/get-started">
                  <Button size="lg" className="group">
                    Get Started Today
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-6">Flexible & Convenient Sessions</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you prefer video calls, phone sessions, or messaging, we adapt to your lifestyle. 
                  Schedule sessions that work with your busy life, not against it.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary h-5 w-5" />
                    <span>Video, phone, or text sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary h-5 w-5" />
                    <span>Schedule that fits your life</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-primary h-5 w-5" />
                    <span>No commute required</span>
                  </div>
                </div>
              </div>
              <div className="animate-slide-up order-1 lg:order-2" style={{animationDelay: '0.2s'}}>
                <img 
                  src={wellnessMeditationImg} 
                  alt="Peaceful wellness session" 
                  className="w-full h-96 object-cover rounded-3xl shadow-modern hover-lift"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Modern Benefits Section */}
        <section className="py-24 px-4 bg-gradient-modern">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                Why Choose MentalSpace?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the future of mental health care with our innovative platform
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover-lift glass-effect border-0 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-modern`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Services />

        {/* Modern Testimonials with Images */}
        <section className="py-24 px-4 bg-gradient-subtle">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                Real Stories, Real Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands who have transformed their lives through MentalSpace
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="animate-slide-up">
                <img 
                  src={happyPeopleImg} 
                  alt="Happy people in modern setting" 
                  className="w-full h-96 object-cover rounded-3xl shadow-modern hover-lift"
                />
              </div>
              <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="glass-effect border-0 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover shadow-card"
                        />
                        <div className="flex-1">
                          <div className="flex mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground mb-3 italic leading-relaxed">"{testimonial.text}"</p>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="text-center animate-fade-in">
              <Link to="/get-started">
                <Button size="lg" variant="hero" className="text-lg px-12 py-6">
                  Start Your Journey Today
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Modern Newsletter Section */}
        <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Join Our Community
              </h2>
              <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Get exclusive mental health tips, expert insights, and be the first to know about our latest features and special offers
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="glass-effect border-white/20 text-white placeholder:text-white/70 focus:ring-white/50"
                  />
                  <Button variant="secondary" size="lg" className="px-8 hover-lift">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-sm text-white/60 mt-4">
                  Join 50,000+ subscribers. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
