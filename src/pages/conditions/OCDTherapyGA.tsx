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
  Brain, 
  Clock, 
  Shield, 
  Users, 
  Star, 
  Phone, 
  Video, 
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Calendar
} from 'lucide-react';

const OCDTherapyGA = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online OCD Therapy in Georgia | Licensed Therapists | CHC"
        description="Get OCD therapy in Georgia with licensed therapists. ERP and CBT specialists available. Video, phone & text sessions. Most insurance accepted. Start in 24-72 hours."
        keywords="OCD therapy Georgia, online OCD treatment GA, Georgia therapists OCD, ERP therapy Georgia, obsessive compulsive disorder treatment Georgia"
        canonicalUrl="https://chctherapy.com/ocd-therapy-georgia"
        ogTitle="Online OCD Therapy in Georgia | Licensed Therapists"
        ogDescription="Professional OCD therapy in Georgia. ERP and CBT specialists available 24/7. Most insurance accepted. Start your healing journey today."
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
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Brain className="w-3 h-3 mr-1" />
                Georgia Licensed OCD Specialists
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online OCD Therapy in Georgia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Obsessive-Compulsive Disorder affects millions with intrusive thoughts and repetitive behaviors that interfere with daily life. 
                Our Georgia-licensed therapists specialize in evidence-based OCD treatments including ERP (Exposure and Response Prevention).
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional OCD therapy through secure video, phone, or text sessions. Start your recovery journey in as little as 24-72 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your OCD Specialist</Link>
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
              <h2 className="text-3xl font-bold text-center mb-12">How OCD Treatment Works at CHC</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card>
                  <CardHeader className="text-center">
                    <Brain className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">ERP Therapy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Exposure and Response Prevention, the gold standard for OCD treatment
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Flexible Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Video, phone, or secure messaging. Choose what works for your needs
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Quick Start</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Begin OCD therapy within 24-72 hours of your initial consultation
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Specialized Care</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    OCD specialists trained in ERP, ACT, and CBT for obsessive-compulsive symptoms
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
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Shield className="w-6 h-6 text-primary" />
                    Insurance & Costs in Georgia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Accepted Insurance Plans:</h4>
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
                      <h4 className="font-semibold mb-3 text-primary">OCD Therapy Options:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Individual sessions: $75-150
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          ERP intensive programs available
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
                    <CardTitle className="text-primary">All OCD Subtypes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Contamination, checking, symmetry, harm, religious, relationship, and pure-O OCD. Specialized treatment for all presentations.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Teens & Adults</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Age-appropriate OCD treatment for Georgia teens (13+) and adults, including college students and working professionals.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Families & Parents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Family therapy and parent coaching to reduce accommodation and support recovery throughout Georgia.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clinician Testimonial */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="pt-6">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <blockquote className="text-lg italic mb-6">
                    "Our ERP-based OCD treatments have helped over 90% of our Georgia clients achieve significant symptom reduction within 12-16 weeks. 
                    We specialize in evidence-based approaches that truly work for obsessive-compulsive symptoms."
                  </blockquote>
                  <cite className="font-semibold text-primary">
                    — Dr. Michael Chen, Licensed OCD Specialist, Georgia
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
                    <CardTitle className="text-lg">What is ERP therapy for OCD?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Exposure and Response Prevention (ERP) is the gold standard treatment for OCD. It involves gradually facing fears while resisting compulsions, helping break the OCD cycle.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is OCD therapy covered by insurance in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, most insurance plans in Georgia cover OCD therapy. CareSource, Peach State, and Amerigroup have $0 copays. We'll verify your benefits at no cost.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How long does OCD treatment take in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Most clients see significant improvement in 12-20 weeks with consistent ERP therapy. Treatment length varies based on OCD severity and individual progress.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you treat all types of OCD in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, our Georgia therapists treat all OCD subtypes including contamination, checking, harm, religious, relationship, and pure obsessional OCD.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is online ERP therapy as effective as in-person?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Research shows online ERP therapy is equally effective for OCD treatment. Our secure platform allows for real-time exposure exercises and response prevention coaching.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">Break Free from OCD Today</h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of Georgians who've found freedom from OCD with our specialized therapists. 
                Most insurance accepted. Start ERP therapy in 24-72 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Get Matched with an OCD Specialist</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
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

export default OCDTherapyGA;