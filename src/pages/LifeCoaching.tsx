import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ClipboardList, Target, MapPin, Users, Star, CheckCircle, TrendingUp, Award, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import lifeCoachingHero from "@/assets/life-coaching-hero.jpg";
import lifeSuccess from "@/assets/life-success.jpg";

const LifeCoaching = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Assessment",
      description: "Understand your current life situation and define your aspirations"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Outline clear, achievable goals for your personal and professional life"
    },
    {
      icon: MapPin,
      title: "Action Plans",
      description: "Develop step‑by‑step strategies to achieve your goals"
    }
  ];

  const benefits = [
    "Clarity in life direction and purpose",
    "Enhanced decision‑making skills", 
    "Improved self‑confidence and motivation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${lifeCoachingHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          </div>
          <div className="relative z-10 container mx-auto text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Unlock Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Life's Potential
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Transform your life with expert coaching. Find balance, purpose, and joy in every phase of your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-started">
                  <Button size="lg" variant="hero" className="text-lg px-8 py-6 w-full sm:w-auto">
                    Start Your Transformation
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
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
                <p className="text-muted-foreground">Lives Transformed</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-muted-foreground">Client Rating</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Goal Achievement</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Coach Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Does It Work */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Journey to Success
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven 3-step process to unlock your potential and achieve your dreams
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="group text-center bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-10 -right-16 w-16 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                  Transform your life with
                  <span className="block text-primary">expert guidance</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Lightbulb className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Clarity & Purpose</h3>
                      <p className="text-muted-foreground">Discover your true direction and unlock your life's potential</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Accelerated Growth</h3>
                      <p className="text-muted-foreground">Achieve your goals faster with proven strategies and accountability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Award className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Lasting Success</h3>
                      <p className="text-muted-foreground">Build sustainable habits and mindsets for long-term fulfillment</p>
                    </div>
                  </div>
                </div>
                <Link to="/get-started" className="inline-block mt-8">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Start Your Journey
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={lifeSuccess} 
                  alt="Person achieving life goals with coaching"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transform Every Area of Your Life
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience comprehensive growth with our proven coaching approach
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="group text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-bold text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real transformations from real people who took the leap
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <blockquote className="text-xl font-light text-gray-700 mb-6 italic leading-relaxed">
                  "My life coach helped me rediscover my passions and set a clear path for my future. I've achieved goals I never thought possible!"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <cite className="text-lg font-semibold text-primary">Jamie L.</cite>
                    <p className="text-sm text-muted-foreground">Executive, Tech Industry</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <blockquote className="text-xl font-light text-gray-700 mb-6 italic leading-relaxed">
                  "The coaching sessions gave me the clarity and confidence to make life-changing decisions. Best investment I've ever made!"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <cite className="text-lg font-semibold text-primary">Sarah M.</cite>
                    <p className="text-sm text-muted-foreground">Entrepreneur</p>
                  </div>
                </div>
              </div>
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
                Ready to Unlock Your
                <span className="block">Life's Potential?</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                Join thousands who've transformed their lives with expert coaching. 
                Your journey to success, balance, and fulfillment starts here.
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
                🎯 Personalized coaching • 🚀 Proven results • ⭐ Expert coaches
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LifeCoaching;