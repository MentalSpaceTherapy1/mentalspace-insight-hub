import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Brain, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import individualTherapyImg from "@/assets/individual-therapy.jpg";

const Adults = () => {
  const conditions = [
    "Depression and mood disorders",
    "Anxiety and panic disorders", 
    "PTSD and trauma recovery",
    "ADHD assessment and support",
    "Bipolar disorder management",
    "OCD treatment",
    "Stress and burnout recovery",
    "Life transitions and adjustment"
  ];

  const approaches = [
    {
      icon: Brain,
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based approach for anxiety, depression, and thought pattern modification"
    },
    {
      icon: Heart,
      title: "Acceptance & Commitment Therapy (ACT)", 
      description: "Mindfulness-based therapy for psychological flexibility and value-based living"
    },
    {
      icon: Users,
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Skills-based therapy for emotion regulation and interpersonal effectiveness"
    }
  ];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Adult Therapy', url: '/services/adults' }
  ];

  return (
    <>
      <SEOHead 
        title="Online Therapy for Adults | Licensed Therapists | MentalSpace"
        description="Professional online therapy for adults with licensed therapists. CBT, ACT, DBT approaches for anxiety, depression, PTSD, ADHD. Secure telehealth in Georgia."
        keywords="online therapy adults, adult counseling, CBT therapy, anxiety treatment, depression therapy, PTSD treatment, ADHD therapy, telehealth Georgia"
        canonicalUrl="https://mentalspacetherapy.lovable.app/services/adults"
        ogTitle="Online Therapy for Adults | MentalSpace"
        ogDescription="Professional online therapy for adults with licensed therapists. Evidence-based treatment for anxiety, depression, PTSD, and more."
        ogImage="/therapy-hero-og.jpg"
        breadcrumbs={breadcrumbItems}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />
            
            {/* Hero Section */}
            <section className="py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Online Therapy for Adults
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Professional mental health support tailored for adult life challenges. Connect with experienced, licensed therapists who understand the complexities of modern adult life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/therapist-matching">
                      <Button size="lg" className="w-full sm:w-auto">
                        Request an Appointment
                      </Button>
                    </Link>
                    <Link to="/mental-health-tests">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Take Assessment
                      </Button>
                    </Link>
                  </div>
                </div>
                <div>
                  <LazyImage 
                    src={individualTherapyImg}
                    alt="Adult individual therapy session with licensed therapist providing professional mental health support"
                    className="w-full h-96 object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </div>
            </section>

            {/* Conditions We Treat */}
            <section className="py-16 bg-muted/50 rounded-3xl mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Conditions We Specialize In</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our licensed therapists provide evidence-based treatment for a wide range of mental health conditions
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-xl">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Therapeutic Approaches */}
            <section className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Evidence-Based Therapeutic Approaches</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our therapists use proven, research-backed methods tailored to your specific needs and goals
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {approaches.map((approach, index) => {
                  const Icon = approach.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{approach.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Why Choose Adult Therapy */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Adults Choose MentalSpace</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">Sessions that fit your work and life schedule</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Specialized Therapists</h3>
                  <p className="text-sm text-muted-foreground">Licensed professionals with adult-specific training</p>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">95% of clients report improvement within 8 sessions</p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Personalized Care</h3>
                  <p className="text-sm text-muted-foreground">Treatment plans tailored to your unique goals</p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take the first step towards better mental health. Connect with a licensed therapist today and start building the life you want.
              </p>
              <Link to="/therapist-matching">
                <Button size="lg" className="px-8 py-6 text-lg">
                  Request an Appointment
                </Button>
              </Link>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Adults;
