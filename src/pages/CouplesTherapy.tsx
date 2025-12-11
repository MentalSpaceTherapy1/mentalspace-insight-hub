import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, RotateCcw, Shield, Handshake, Heart, MessageCircle, Users, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import couplesTherapyHero from "@/assets/couples-therapy-hero.jpg";
import couplesConnection from "@/assets/couples-connection.jpg";

const CouplesTherapy = () => {
  const benefits = [
    {
      icon: Target,
      title: "Identify the challenges",
      description: "Determine specific relationship issues to address with the help and support of an impartial professional therapist"
    },
    {
      icon: RotateCcw,
      title: "Root Cause Analysis",
      description: "Learn about the patterns that lead to relationship distress and dysfunctional dynamics"
    },
    {
      icon: Shield,
      title: "Restore confidence",
      description: "Learn how to use communication techniques to boost resilience and rebuild trust"
    },
    {
      icon: Handshake,
      title: "Establish your strengths again",
      description: "Create a solution‑oriented strategy to unleashing the strengths of your relationship"
    },
    {
      icon: Heart,
      title: "Compassion and resolution",
      description: "Improve your empathy, problem‑solving, and conflict resolution skills by practicing conflict resolution strategies"
    },
    {
      icon: MessageCircle,
      title: "Continuing assistance",
      description: "Consistent dedicated assistance is provided via live video sessions and messaging"
    }
  ];

  const therapyTypes = [
    {
      title: "Relationship therapy",
      description: "Every relationship faces challenges at some point. Whether it's communication issues, trust problems, or simply growing apart, relationship therapy provides a safe space to explore these challenges. Our therapists help couples develop conflict resolution skills, improve communication, and strengthen their bond. Through guided sessions, couples learn to understand each other's perspectives, rebuild trust, and create a healthier, more fulfilling relationship."
    },
    {
      title: "Pre‑marital Counseling",
      description: "Getting married is an exciting milestone, but it can also bring stress and uncertainty about the future. Pre‑marital counseling helps engaged couples discuss important topics before they tie the knot. Our counselors guide couples through conversations about finances, family planning, career goals, and potential conflicts. This proactive approach helps couples build a strong foundation for their marriage and develop skills to handle future challenges together."
    },
    {
      title: "Marital counseling",
      description: "Marriage counseling focuses on helping married couples identify and address the specific issues affecting their relationship. Our therapists create a safe environment where couples can have difficult conversations, express their concerns, and work together to find solutions. Through marriage counseling, couples learn to communicate more effectively, resolve conflicts constructively, and rebuild intimacy and connection in their relationship."
    }
  ];

  const advantages = [
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
            style={{ backgroundImage: `url(${couplesTherapyHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          </div>
          <div className="relative z-10 container mx-auto text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Relationship
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Strengthen your bond, improve communication, and build lasting love with expert online couples therapy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-started">
                  <Button size="lg" variant="hero" className="text-lg px-8 py-6 w-full sm:w-auto">
                    Start Your Journey
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
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Couples Helped</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-muted-foreground">Success Rating</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transform Your Relationship
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover what thousands of couples have achieved through our expert-guided therapy sessions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                  Every relationship deserves to
                  <span className="block text-primary">flourish</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Whether you're facing communication challenges, trust issues, or simply want to strengthen your bond, 
                  our expert therapists provide a safe space for growth and healing.
                </p>
                <Link to="/get-started">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Start Healing Together
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={couplesConnection} 
                  alt="Happy couple connecting through therapy"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Kinds of Couples Therapy */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Specialized Therapy Approaches
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the therapy type that best fits your relationship's unique needs and goals
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {therapyTypes.map((type, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Choose Coping & Healing?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the convenience and effectiveness of modern relationship therapy
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Resources</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-center text-muted-foreground">Our Relationship Services</h3>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Link to="/couples-therapy-georgia" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
                    <h4 className="font-semibold group-hover:text-primary">Couples Therapy in Georgia</h4>
                    <p className="text-muted-foreground text-sm mt-1">Professional relationship counseling statewide.</p>
                  </div>
                </Link>
                <Link to="/online-therapy" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
                    <h4 className="font-semibold group-hover:text-primary">Online Therapy</h4>
                    <p className="text-muted-foreground text-sm mt-1">Convenient couples sessions from home.</p>
                  </div>
                </Link>
                <Link to="/insurance" className="group">
                  <div className="border border-primary/20 bg-primary/5 rounded-lg p-4 hover:shadow-lg transition-shadow text-center">
                    <h4 className="font-semibold group-hover:text-primary">Insurance Options</h4>
                    <p className="text-muted-foreground text-sm mt-1">We accept most major insurance plans.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-center text-muted-foreground">Helpful Articles</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Link to="/blog/couples-therapy-communication" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 group-hover:text-primary">Communication in Couples Therapy</h4>
                    <p className="text-muted-foreground text-sm">How therapy improves communication.</p>
                  </div>
                </Link>
                <Link to="/blog/marriage-counseling-signs" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 group-hover:text-primary">Signs You Need Marriage Counseling</h4>
                    <p className="text-muted-foreground text-sm">10 warning signs to watch for.</p>
                  </div>
                </Link>
                <Link to="/blog/premarital-counseling" className="group">
                  <div className="border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold mb-2 group-hover:text-primary">Premarital Counseling Guide</h4>
                    <p className="text-muted-foreground text-sm">Preparing for a strong marriage.</p>
                  </div>
                </Link>
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
                Ready to Transform Your
                <span className="block">Relationship?</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                Join thousands of couples who have strengthened their bond through our expert-guided therapy. 
                Start your journey to deeper connection today.
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
                💝 Free consultation • 🔒 100% confidential • ⭐ Licensed therapists
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CouplesTherapy;