import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, CheckCircle, Heart, Users, MessageCircle } from 'lucide-react';

const CouplesTherapyAtlanta = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Couples Therapy in Atlanta, GA - Coping and Healing Counseling",
    "description": "Professional couples therapy in Atlanta. Licensed marriage and family therapists. Help with communication, conflict, and intimacy.",
    "areaServed": {
      "@type": "City",
      "name": "Atlanta",
      "state": "Georgia"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Couples Therapy in Atlanta, GA | Marriage Counseling | CHC"
        description="Expert couples therapy in Atlanta, GA. Licensed marriage counselors helping with communication, conflict resolution, and rebuilding intimacy. Insurance accepted."
        keywords="couples therapy Atlanta, marriage counseling Atlanta, relationship therapy Atlanta GA, marriage therapist Atlanta, couples counselor Atlanta"
        canonicalUrl="https://chctherapy.com/couples-therapy-atlanta-ga"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Atlanta Metro Area
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Couples Therapy in Atlanta, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Strengthen your relationship with expert couples therapy. Our licensed marriage and family therapists help Atlanta couples improve communication, resolve conflict, and rebuild connection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Couples Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/couples-therapy-georgia">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Relationships in Atlanta</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">50%</div>
                    <p className="text-sm text-muted-foreground">of Atlanta couples report relationship stress from work demands</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">65%</div>
                    <p className="text-sm text-muted-foreground">of couples improve significantly with professional therapy</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-pink-600 mb-2">80%</div>
                    <p className="text-sm text-muted-foreground">say therapy helped them communicate better</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Issues We Help With</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                      Communication Problems
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Learn to express needs, active listening, resolving misunderstandings
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                      Conflict & Arguments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Develop healthy conflict resolution skills, reduce fighting
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                      Intimacy Issues
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Rebuild emotional and physical connection, address mismatched needs
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                      Trust & Infidelity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Rebuild trust after betrayal, heal from affairs
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                      Life Transitions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Navigate marriage, parenting, career changes, empty nest
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                      Financial Stress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Manage money conflicts, align on financial goals
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Approach to Couples Therapy</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <MessageCircle className="h-12 w-12 text-pink-600 mb-4" />
                    <h3 className="font-bold mb-2">Gottman Method</h3>
                    <p className="text-sm text-muted-foreground">
                      Research-based approach to build friendship, manage conflict, create shared meaning
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Heart className="h-12 w-12 text-pink-600 mb-4" />
                    <h3 className="font-bold mb-2">Emotionally Focused Therapy</h3>
                    <p className="text-sm text-muted-foreground">
                      Identify emotional patterns, strengthen attachment, rebuild intimacy
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Users className="h-12 w-12 text-pink-600 mb-4" />
                    <h3 className="font-bold mb-2">Solution-Focused</h3>
                    <p className="text-sm text-muted-foreground">
                      Identify strengths, set goals, create practical solutions quickly
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
              <h2 className="text-3xl font-bold text-center mb-12">Insurance Coverage for Couples Therapy</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground mb-6">
                    Many insurance plans cover couples therapy when treating a mental health diagnosis. We accept most major Atlanta insurance plans.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Blue Cross Blue Shield</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Aetna</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">UnitedHealthcare</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Cigna</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Self-pay rates: $150-$200 per session
                    </p>
                    <Button asChild>
                      <Link to="/insurance">Check Your Insurance Coverage</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Strengthen Your Relationship?
            </h2>
            <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
              Connect with a licensed couples therapist in Atlanta. Evening and weekend appointments available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/therapist-matching">Find Couples Therapist</Link>
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
                      <p className="font-medium text-pink-600">Fulton County Therapy →</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/couples-therapy-georgia">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-pink-600">All GA Couples Therapy →</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/couples-therapy">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-pink-600">Couples Therapy Info →</p>
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

export default CouplesTherapyAtlanta;
