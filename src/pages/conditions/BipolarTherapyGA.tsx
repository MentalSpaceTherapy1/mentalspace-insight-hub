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

const BipolarTherapyGA = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Bipolar Disorder Therapy in Georgia | Licensed Therapists | CHC"
        description="Get bipolar disorder therapy in Georgia with licensed therapists. DBT, CBT, and mood stabilization support. Video, phone & text sessions. Most insurance accepted."
        keywords="bipolar therapy Georgia, online bipolar treatment GA, Georgia therapists bipolar disorder, mood disorder therapy Georgia, manic depression treatment"
        canonicalUrl="https://chctherapy.com/bipolar-therapy-georgia"
        ogTitle="Online Bipolar Disorder Therapy in Georgia | Licensed Therapists"
        ogDescription="Professional bipolar disorder therapy in Georgia. Mood stabilization experts available 24/7. Most insurance accepted. Start your healing journey today."
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
                Georgia Licensed Mood Disorder Specialists
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Bipolar Disorder Therapy in Georgia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Bipolar disorder involves episodes of mania and depression that can significantly impact daily functioning and relationships. 
                Our Georgia-licensed therapists provide specialized care using DBT, CBT, and mood regulation strategies.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional bipolar disorder therapy through secure video, phone, or text sessions. Start your mood stabilization journey in 24-72 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Mood Specialist</Link>
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
              <h2 className="text-3xl font-bold text-center mb-12">How Bipolar Treatment Works at CHC</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card>
                  <CardHeader className="text-center">
                    <Brain className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Mood Stabilization</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    DBT, CBT, and interpersonal therapy for managing mood episodes
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Flexible Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Video, phone, or secure messaging. Accommodates mood fluctuations
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Crisis Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Quick access to care during mood episodes and ongoing support
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Comprehensive Care</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Coordination with psychiatrists and family support when needed
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
                      <h4 className="font-semibold mb-3 text-primary">Mood Disorder Services:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Individual sessions: $75-150
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          DBT skills groups available
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Sliding scale for qualifying families
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          Crisis appointment availability
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
                    <CardTitle className="text-primary">All Bipolar Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Bipolar I, Bipolar II, and Cyclothymic Disorder. Specialized treatment for all presentations and severity levels.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Young Adults & Adults</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Age-appropriate care for Georgia young adults (18+) navigating college, career, and relationship challenges with bipolar disorder.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Families & Partners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Family therapy and partner support to improve communication and create supportive environments for recovery.
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
                    "Our comprehensive bipolar disorder treatments have helped over 80% of our Georgia clients achieve mood stability within 16-20 weeks. 
                    We combine evidence-based therapy with practical life skills and family support."
                  </blockquote>
                  <cite className="font-semibold text-primary">
                    — Dr. Amanda Rodriguez, Licensed Clinical Psychologist, Georgia
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
                    <CardTitle className="text-lg">What's the difference between Bipolar I and Bipolar II?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Bipolar I involves full manic episodes, while Bipolar II has hypomanic episodes and major depression. Both require specialized treatment approaches.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is bipolar disorder therapy covered by insurance in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, all major Georgia insurance plans cover bipolar disorder therapy. CareSource, Peach State, and Amerigroup have $0 copays. We'll verify your benefits.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can online therapy help during manic episodes?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our therapists are trained to recognize mood episodes and provide appropriate interventions, including crisis support and coordination with medical providers when needed.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do I need medication with bipolar therapy in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      While therapy is essential, many people with bipolar disorder benefit from medication. Our therapists can coordinate with psychiatrists for comprehensive care.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How long does bipolar disorder treatment take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Bipolar disorder typically requires ongoing management. Most clients see significant improvement in mood stability within 4-6 months of consistent treatment.
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
              <h2 className="text-4xl font-bold mb-6">Stabilize Your Mood Today</h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of Georgians managing bipolar disorder with our specialized therapists. 
                Most insurance accepted. Start your mood stabilization journey in 24-72 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Get Matched with a Mood Specialist</Link>
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

export default BipolarTherapyGA;