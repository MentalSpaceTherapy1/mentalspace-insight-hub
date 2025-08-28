import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, Shield, Brain, MessageCircle, Video, Clock } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import therapySessionImg from '@/assets/therapy-session.jpg';
import coupleTherapyImg from '@/assets/couple-therapy.jpg';
import teenTherapyImg from '@/assets/teen-therapy-session.jpg';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Individual Therapy',
      description: 'One-on-one sessions with licensed therapists specializing in depression, anxiety, trauma, and more.',
      image: therapySessionImg,
      link: '/online-therapy',
      features: ['Depression Treatment', 'Anxiety Management', 'PTSD Support', 'Stress Management']
    },
    {
      icon: Users,
      title: 'Couples Therapy',
      description: 'Strengthen your relationship with evidence-based couples counseling and communication skills.',
      image: coupleTherapyImg,
      link: '/couples-therapy',
      features: ['Relationship Building', 'Communication Skills', 'Conflict Resolution', 'Marriage Counseling']
    },
    {
      icon: Heart,
      title: 'Teen Therapy',
      description: 'Specialized support for adolescents navigating challenges with school, relationships, and identity.',
      image: teenTherapyImg,
      link: '/teen-therapy',
      features: ['Academic Stress', 'Social Anxiety', 'Identity Issues', 'Family Dynamics']
    }
  ];

  const features = [
    {
      icon: Video,
      title: 'Flexible Sessions',
      description: 'Video, phone, or messaging - choose what works for you'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access support when you need it, on your schedule'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Your privacy and confidentiality are our top priority'
    },
    {
      icon: MessageCircle,
      title: 'Licensed Professionals',
      description: 'All therapists are licensed and experienced in their specialties'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mental Health Services - Individual, Couples & Teen Therapy | MentalSpace</title>
        <meta name="description" content="Comprehensive mental health services including individual therapy, couples counseling, and teen therapy. Licensed professionals available 24/7 for video, phone, or text sessions." />
        <meta name="keywords" content="mental health services, therapy services, individual therapy, couples therapy, teen therapy, online counseling, mental health treatment" />
        <link rel="canonical" href="https://mentalspacetherapy.lovable.app/services" />
        <meta property="og:title" content="Mental Health Services - Professional Therapy Options" />
        <meta property="og:description" content="Discover our comprehensive mental health services. Individual, couples, and teen therapy with licensed professionals." />
        <meta property="og:url" content="https://mentalspacetherapy.lovable.app/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "MentalSpace Services",
            "description": "Comprehensive mental health services including individual therapy, couples counseling, and teen therapy",
            "url": "https://mentalspacetherapy.lovable.app/services",
            "serviceType": [
              "Individual Therapy",
              "Couples Therapy", 
              "Teen Therapy",
              "Online Counseling"
            ],
            "availableService": services.map(service => ({
              "@type": "MedicalService",
              "name": service.title,
              "description": service.description,
              "serviceType": service.title
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                  Professional Mental Health Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Comprehensive therapy and counseling services designed to support your mental health journey. 
                  Connect with licensed professionals who understand your unique needs.
                </p>
                <Link to="/therapist-matching">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Evidence-based therapy approaches tailored to your specific needs and goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <LazyImage 
                          src={service.image}
                          alt={`${service.title} - Professional therapy sessions`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button asChild className="w-full">
                          <Link to={service.link}>Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-muted/50">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose MentalSpace</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Experience mental healthcare that adapts to your lifestyle and preferences
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="text-center p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container px-4">
              <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Take the first step towards better mental health with personalized support from licensed professionals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="secondary" size="lg">
                      <Link to="/therapist-matching">Match with a Therapist</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                      <Link to="/services/adults">Adult Services</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;