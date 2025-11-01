import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, CheckCircle, Brain, Shield, Clock } from 'lucide-react';

const AnxietyTherapyAlpharetta = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Anxiety Therapy in Alpharetta, GA - Coping and Healing Counseling",
    "description": "Professional anxiety therapy serving Alpharetta. Licensed therapists accepting insurance. Online therapy available.",
    "areaServed": {
      "@type": "City",
      "name": "Alpharetta",
      "state": "Georgia"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Anxiety Therapy in Alpharetta, GA | Licensed Therapists | CHC"
        description="Expert anxiety therapy in Alpharetta, GA. Licensed therapists treating GAD, panic disorder, social anxiety. Serving North Fulton. Insurance accepted."
        keywords="anxiety therapy Alpharetta, Alpharetta anxiety therapist, anxiety treatment Alpharetta GA, panic disorder therapy Alpharetta, North Fulton anxiety therapy"
        canonicalUrl="https://chctherapy.com/anxiety-therapy-alpharetta-ga"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Alpharetta, GA
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Anxiety Therapy in Alpharetta, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional anxiety treatment for Alpharetta residents. Our Georgia-licensed therapists help busy professionals and families in North Fulton manage anxiety, worry, and panic symptoms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Alpharetta Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/free-anxiety-test-online">Take Free Anxiety Test</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Anxiety in Alpharetta: Fast-Paced Living</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">19%</div>
                    <p className="text-sm text-muted-foreground">of North Fulton residents experience anxiety disorders</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">Top 5</div>
                    <p className="text-sm text-muted-foreground">Alpharetta ranks in top 5 GA cities for high-achieving professionals</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">78%</div>
                    <p className="text-sm text-muted-foreground">improvement rate with professional anxiety therapy</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Anxiety Triggers in Alpharetta</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Career & Performance Pressure</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      High concentration of tech companies, corporate headquarters, and competitive work environments create performance anxiety.
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-green-600 hover:underline">
                      → Work anxiety treatment
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Parenting & School Stress</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Top-rated schools in Alpharetta create pressure on parents and students to excel academically.
                    </p>
                    <Link to="/teen-therapy-georgia" className="text-green-600 hover:underline">
                      → Teen therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Social Comparison</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Affluent community dynamics and social expectations can trigger anxiety about keeping up.
                    </p>
                    <Link to="/social-anxiety-therapy-georgia" className="text-green-600 hover:underline">
                      → Social anxiety help
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>GA-400 Commute Stress</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Daily commute on GA-400 and traffic congestion triggers anxiety and panic symptoms.
                    </p>
                    <Link to="/free-anxiety-test-online" className="text-green-600 hover:underline">
                      → Take anxiety test
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Anxiety Disorders We Treat</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Generalized Anxiety (GAD)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Chronic worry, restlessness, difficulty concentrating
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Panic Disorder
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Sudden panic attacks, racing heart, fear of losing control
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Social Anxiety
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Fear of judgment, public speaking anxiety, social events
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Performance Anxiety
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Work presentations, test anxiety, fear of failure
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      OCD
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Intrusive thoughts, repetitive behaviors, need for order
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Health Anxiety
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Excessive worry about health, frequent doctor visits
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Insurance Accepted in Alpharetta</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-green-600">Common Plans:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Blue Cross Blue Shield</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Aetna</span>
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
                      <h3 className="font-semibold text-lg mb-4 text-green-600">Typical Copays:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>PPO Plans: $25-$40 per session</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>HMO Plans: $15-$30 per session</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Medicaid MCOs: $0 copay</span>
                        </li>
                      </ul>
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

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How Our Therapists Help</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Brain className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="font-bold mb-2">CBT for Anxiety</h3>
                    <p className="text-sm text-muted-foreground">
                      Evidence-based cognitive-behavioral techniques to manage anxious thoughts
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Shield className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="font-bold mb-2">Exposure Therapy</h3>
                    <p className="text-sm text-muted-foreground">
                      Gradual exposure to fears in a safe, controlled environment
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Clock className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="font-bold mb-2">Stress Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Practical tools for managing Alpharetta's fast-paced lifestyle
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Overcome Anxiety in Alpharetta?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Connect with a licensed anxiety therapist serving Alpharetta and North Fulton. Online therapy available.
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
                <Link to="/anxiety-therapy-atlanta-ga">
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-6 text-center">
                      <p className="font-medium text-green-600">Atlanta Anxiety Therapy →</p>
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

export default AnxietyTherapyAlpharetta;
