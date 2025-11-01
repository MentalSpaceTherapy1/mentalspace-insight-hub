import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin, Brain, Heart, Sun } from 'lucide-react';

const DepressionTherapyAtlanta = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Depression Therapy in Atlanta, GA - Coping and Healing Counseling",
    "description": "Professional depression therapy in Atlanta. Licensed therapists treating major depression, seasonal depression, and persistent depressive disorder.",
    "areaServed": {
      "@type": "City",
      "name": "Atlanta",
      "state": "Georgia"
    },
    "medicalSpecialty": "Depression Treatment"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Depression Therapy in Atlanta, GA | Licensed Depression Therapists | CHC"
        description="Expert depression therapy in Atlanta, GA. Licensed therapists treating major depression, seasonal affective disorder, postpartum depression. Insurance accepted."
        keywords="depression therapy Atlanta, Atlanta depression therapist, depression treatment Atlanta GA, therapist for depression Atlanta, postpartum depression Atlanta"
        canonicalUrl="https://chctherapy.com/depression-therapy-atlanta-ga"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Atlanta Metro Area
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Depression Therapy in Atlanta, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Compassionate depression treatment for Atlanta residents. Our licensed therapists help you overcome persistent sadness, low energy, and hopelessness with evidence-based therapy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Atlanta Depression Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/free-depression-test-online">Take Free Depression Test</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Depression in Atlanta: You're Not Alone</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">21%</div>
                    <p className="text-sm text-muted-foreground">of Atlantans experience depression at some point in their lives</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                    <p className="text-sm text-muted-foreground">see significant improvement with therapy and proper treatment</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">6-8</div>
                    <p className="text-sm text-muted-foreground">therapy sessions show measurable mood improvement for most people</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Types of Depression We Treat</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      Major Depressive Disorder
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Persistent sadness, loss of interest in activities, changes in sleep and appetite, difficulty concentrating
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      Persistent Depressive Disorder
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Long-term depression lasting 2+ years, low-grade but chronic depressed mood
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      Seasonal Affective Disorder (SAD)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Depression related to seasonal changes, particularly winter months in Atlanta
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      Postpartum Depression
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Depression after childbirth, feelings of inadequacy, difficulty bonding with baby
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How Our Atlanta Depression Therapists Help</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Brain className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-bold mb-2">Cognitive-Behavioral Therapy</h3>
                    <p className="text-sm text-muted-foreground">
                      Identify and challenge negative thought patterns that fuel depression
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Heart className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-bold mb-2">Interpersonal Therapy</h3>
                    <p className="text-sm text-muted-foreground">
                      Improve relationships and social connections to reduce isolation
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Sun className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-bold mb-2">Behavioral Activation</h3>
                    <p className="text-sm text-muted-foreground">
                      Re-engage with life and activities that bring meaning and joy
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Insurance Accepted in Atlanta</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground mb-6">
                    We accept most major insurance plans in Atlanta. Typical depression therapy copays: $0-$40 per session.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Blue Cross Blue Shield of Georgia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Aetna Better Health</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">CareSource Georgia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">UnitedHealthcare</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button asChild>
                      <Link to="/insurance">View All Accepted Insurance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Feel Better?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Connect with a licensed depression therapist in Atlanta. Evening and weekend appointments available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/therapist-matching">Find Your Therapist</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                <Link to="/get-started">Request Appointment</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/fulton-county-therapy">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-blue-600">Fulton County Therapy →</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/depression-therapy-georgia">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-blue-600">All GA Depression Therapy →</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/free-depression-test-online">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-blue-600">Free Depression Test →</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DepressionTherapyAtlanta;
