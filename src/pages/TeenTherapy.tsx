import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Users, CheckCircle, Star, Shield, MessageCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import teenTherapyHero from "@/assets/teen-therapy-hero.jpg";
import teenGrowth from "@/assets/teen-growth.jpg";

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
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${teenTherapyHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
          </div>
          <div className="relative z-10 container mx-auto text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Empower Your
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Teen's Future
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Professional support for teenagers navigating life's challenges with confidence and resilience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-started">
                  <Button size="lg" variant="hero" className="text-lg px-8 py-6 w-full sm:w-auto">
                    Start Their Journey
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                <p className="text-muted-foreground">Teens Supported</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <p className="text-muted-foreground">Teen Satisfaction</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Expert Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* How MentalSpace Works */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                How MentalSpace Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Simple steps to connect your teen with the right support they need
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="group text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-16 w-16 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={teenGrowth} 
                  alt="Confident teen showing growth and resilience"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                  Why therapy is
                  <span className="block text-primary">transformative for teens</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Safe Space</h3>
                      <p className="text-muted-foreground">Express feelings and thoughts without judgment in a confidential environment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Brain className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Emotional Intelligence</h3>
                      <p className="text-muted-foreground">Develop coping skills and emotional awareness for lifelong success</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Heart className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Identity & Confidence</h3>
                      <p className="text-muted-foreground">Explore values, set goals, and build confidence for adulthood</p>
                    </div>
                  </div>
                </div>
                <Link to="/get-started" className="inline-block mt-8">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Support Your Teen Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Choose MentalSpace for Your Teen?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience specialized teen therapy designed for the digital generation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-start space-x-4 border border-gray-100">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Give Your Teen the
                <span className="block">Support They Deserve</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                Join thousands of families who've seen their teens thrive with professional guidance. 
                Start building their confidence and resilience today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/get-started">
                  <Button variant="secondary" size="lg" className="text-lg px-10 py-6 w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-semibold">
                    Start Free Consultation
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button variant="outline" size="lg" className="text-lg px-10 py-6 w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <p className="text-white/80 mt-8 text-sm">
                🔒 100% confidential • ⭐ Teen specialists • 📱 Teen-friendly platform
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeenTherapy;