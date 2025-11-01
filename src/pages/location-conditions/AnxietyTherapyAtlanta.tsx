import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MapPin, CheckCircle, Clock, Shield, Phone, DollarSign, Brain } from 'lucide-react';

const AnxietyTherapyAtlanta = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Anxiety Therapy in Atlanta, GA - Coping and Healing Counseling",
    "description": "Professional anxiety therapy in Atlanta. Licensed therapists accepting insurance. Online and in-person sessions available.",
    "areaServed": {
      "@type": "City",
      "name": "Atlanta",
      "state": "Georgia"
    },
    "medicalSpecialty": "Anxiety Disorders"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Anxiety Therapy in Atlanta, GA | Licensed Anxiety Therapists | CHC"
        description="Expert anxiety therapy in Atlanta, GA. Licensed therapists treating GAD, panic disorder, social anxiety. Most insurance accepted. Evening and weekend appointments available."
        keywords="anxiety therapy Atlanta, Atlanta anxiety therapist, GAD treatment Atlanta, panic disorder therapy Atlanta GA, social anxiety counseling Atlanta"
        canonicalUrl="https://chctherapy.com/anxiety-therapy-atlanta-ga"
        ogTitle="Anxiety Therapy in Atlanta, GA | Licensed Therapists"
        ogDescription="Professional anxiety treatment in Atlanta. Licensed therapists, most insurance accepted, flexible scheduling."
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Atlanta Metro Area
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Anxiety Therapy in Atlanta, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Expert anxiety treatment for Atlanta residents. Our Georgia-licensed therapists specialize in helping busy professionals, students, and families manage anxiety, panic attacks, and chronic worry.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Buckhead, Midtown, Downtown Atlanta, Virginia Highland, East Atlanta, and surrounding neighborhoods.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Atlanta Anxiety Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/free-anxiety-test-online">Take Free Anxiety Test</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Atlanta Anxiety Statistics */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Anxiety in Atlanta: You're Not Alone</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">18.5%</div>
                    <p className="text-sm text-muted-foreground">of Atlanta adults experience anxiety disorders annually</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">1 in 5</div>
                    <p className="text-sm text-muted-foreground">Atlanta residents report high stress levels from work and traffic</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
                    <p className="text-sm text-muted-foreground">of anxiety cases improve with professional therapy</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Common Atlanta Anxiety Triggers */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Anxiety Triggers for Atlanta Residents</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Work-Related Stress</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      High-pressure jobs in Atlanta's Fortune 500 companies, tech startups, and healthcare systems can trigger anxiety and burnout.
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-green-600 hover:underline">
                      → Learn about work anxiety treatment
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Traffic & Commute Anxiety</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Atlanta's notorious traffic on I-85, I-75, and I-285 causes daily stress and triggers panic symptoms for many commuters.
                    </p>
                    <Link to="/free-anxiety-test-online" className="text-green-600 hover:underline">
                      → Take free anxiety screening
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Social & Performance Anxiety</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Networking events, presentations, and Atlanta's competitive social scene can worsen social anxiety symptoms.
                    </p>
                    <Link to="/social-anxiety-therapy-georgia" className="text-green-600 hover:underline">
                      → Social anxiety therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Pressure</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Atlanta's rising cost of living and housing market create financial anxiety for residents across income levels.
                    </p>
                    <Link to="/therapist-matching" className="text-green-600 hover:underline">
                      → Connect with therapist
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Anxiety We Treat */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Anxiety Disorders We Treat in Atlanta</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Generalized Anxiety (GAD)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Chronic worry about everyday things, difficulty relaxing, muscle tension
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Panic Disorder
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Sudden panic attacks, fear of losing control, heart palpitations
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Social Anxiety
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Fear of social situations, public speaking anxiety, worry about judgment
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Health Anxiety
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Excessive worry about illness, frequent symptom checking
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      OCD
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Intrusive thoughts, compulsive behaviors, need for certainty
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Specific Phobias
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Intense fear of specific situations, objects, or experiences
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Atlanta Insurance Coverage */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Insurance Accepted in Atlanta</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-green-600">Major Atlanta Plans:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Blue Cross Blue Shield of Georgia</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Aetna Better Health</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>UnitedHealthcare</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Cigna</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-green-600">Medicaid MCOs:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>CareSource Georgia ($0 copay)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Peach State Health Plan ($0 copay)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Amerigroup Real Solutions ($0 copay)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-sm text-muted-foreground mb-4">
                      Typical anxiety therapy copays: $0-$40 per session
                    </p>
                    <Button asChild>
                      <Link to="/insurance">View All Accepted Insurance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How Our Atlanta Anxiety Therapists Help</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Brain className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="font-bold mb-2">Cognitive-Behavioral Therapy (CBT)</h3>
                    <p className="text-sm text-muted-foreground">
                      Evidence-based techniques to identify and change anxious thought patterns
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Shield className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="font-bold mb-2">Exposure Therapy</h3>
                    <p className="text-sm text-muted-foreground">
                      Gradual, safe exposure to anxiety triggers to reduce fear response
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Clock className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="font-bold mb-2">Mindfulness & Relaxation</h3>
                    <p className="text-sm text-muted-foreground">
                      Practical skills to calm your nervous system and reduce physical anxiety
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Overcome Anxiety in Atlanta?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Connect with a licensed anxiety therapist serving Atlanta. Most insurance accepted. Evening and weekend appointments available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/therapist-matching">Find Your Atlanta Therapist</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                <Link to="/get-started">Request Appointment</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/fulton-county-therapy">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-green-600">Fulton County Therapy →</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/anxiety-therapy-georgia">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-green-600">All GA Anxiety Therapy →</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/free-anxiety-test-online">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-green-600">Free Anxiety Test →</p>
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

export default AnxietyTherapyAtlanta;
