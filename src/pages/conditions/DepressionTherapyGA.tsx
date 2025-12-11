import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Star, 
  Video, 
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Calendar,
  Brain
} from 'lucide-react';
import { generateMedicalBusinessSchema } from '@/utils/schemaGenerators';

const DepressionTherapyGA = () => {
  const medicalBusinessSchema = generateMedicalBusinessSchema(
    "Depression Therapy Georgia",
    "Professional depression therapy in Georgia with licensed therapists. Video, phone & text sessions available. Most insurance accepted. Evidence-based treatment for GA residents.",
    "https://chctherapy.com/depression-therapy-georgia",
    ["Depression Therapy", "CBT for Depression", "Behavioral Activation", "Interpersonal Therapy"]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Depression Therapy in Georgia | Licensed Therapists | CHC"
        description="Professional depression therapy in Georgia with licensed therapists. Video, phone & text sessions available. Most insurance accepted. Evidence-based treatment for GA residents."
        keywords="depression therapy Georgia, online depression treatment GA, Georgia therapists depression, CBT depression therapy Georgia, licensed therapists Georgia depression"
        canonicalUrl="https://chctherapy.com/depression-therapy-georgia"
        ogTitle="Online Depression Therapy in Georgia | Licensed Therapists"
        ogDescription="Professional depression therapy in Georgia. Licensed therapists available for video, phone or text sessions. Most insurance accepted."
        structuredData={medicalBusinessSchema}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline). 
            Visit <a href="https://dbhdd.georgia.gov" className="underline" target="_blank" rel="noopener noreferrer">dbhdd.georgia.gov</a> for more resources.
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Heart className="w-3 h-3 mr-1" />
                Georgia Licensed Therapists
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Online Depression Therapy in Georgia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Depression affects over 300,000 Georgians annually, causing persistent sadness, loss of interest, and impaired daily functioning. 
                Our licensed Georgia therapists provide evidence-based treatment to help you reclaim joy and purpose in life.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional depression therapy through secure video, phone, or text sessions. Begin your healing journey in as little as 24-72 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Georgia Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Verify Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How Treatment Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How Depression Treatment Works at CHC</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card>
                  <CardHeader className="text-center">
                    <Brain className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Evidence-Based Methods</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    CBT, IPT, DBT, mindfulness approaches proven effective for depression
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Flexible Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Video, phone, or secure messaging. Choose what feels most comfortable
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Quick Start</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Begin therapy within 24-72 hours of your initial consultation
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Ongoing Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Consistent care with your dedicated Georgia-licensed therapist
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance & Cost */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Shield className="w-6 h-6 text-blue-600" />
                    Insurance & Costs in Georgia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600">Accepted Insurance Plans:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Aetna (typical copay: $0-40)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Blue Cross Blue Shield of Georgia ($0-35)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          CareSource ($0)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Cigna ($0-45)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Humana ($0-40)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Peach State Health Plan ($0)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          Amerigroup ($0)
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600">Self-Pay Options:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Individual sessions: $75-150
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Financial assistance available
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Sliding scale for qualifying families
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          Free insurance verification
                        </li>
                      </ul>
                      
                      <Button variant="outline" asChild className="mt-4 w-full">
                        <Link to="/insurance">Check Your Benefits</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Georgia Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">New Parents & Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Specialized support for postpartum depression, perinatal mood disorders, and family transitions affecting Georgia parents.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Veterans & First Responders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Trauma-informed care for Georgia's veterans, police officers, firefighters, and EMTs dealing with service-related depression.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Diverse Communities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Culturally competent care for BIPOC communities, LGBTQIA+ individuals, seniors, and rural Georgians experiencing depression.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clinician Testimonial */}
        <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="pt-6">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <blockquote className="text-lg italic mb-6">
                    "Depression is highly treatable with the right approach. Our Georgia clients using evidence-based therapies see significant improvement - 
                    78% report reduced symptoms within 6-8 weeks, with many achieving full remission."
                  </blockquote>
                  <cite className="font-semibold text-blue-600">
                    — Dr. Michael Chen, Licensed Clinical Psychologist, Georgia
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is depression therapy covered by Blue Cross Blue Shield in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, BCBS Georgia covers depression therapy with typical copays of $15-35 per session. We'll verify your specific benefits and deductible at no cost.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How quickly can I start depression therapy in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We prioritize urgent mental health needs. Most clients begin depression therapy within 24-72 hours of their initial assessment with our Georgia-licensed therapists.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What therapy methods work best for depression?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our Georgia therapists use evidence-based treatments including Cognitive Behavioral Therapy (CBT), Interpersonal Therapy (IPT), and Dialectical Behavior Therapy (DBT) based on your specific needs.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can online therapy help severe depression?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Research shows online therapy is effective for moderate to severe depression. For severe cases, we coordinate with your physician and provide crisis support resources when needed.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you help with postpartum depression in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, we have specialized therapists trained in perinatal mental health serving Georgia mothers. We understand the unique challenges of postpartum depression and provide targeted support.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is depression therapy confidential in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Absolutely. All sessions are HIPAA-compliant and confidential. Our platform uses bank-level encryption to protect your privacy and therapy records.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">Begin Your Depression Recovery Journey</h2>
              <p className="text-xl mb-8 opacity-90">
                You don't have to face depression alone. Our licensed Georgia therapists provide compassionate, 
                evidence-based care to help you rediscover hope and joy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Get Matched with a Therapist</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/get-started">Check Insurance Coverage</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DepressionTherapyGA;