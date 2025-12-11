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
  Calendar,
  GraduationCap
} from 'lucide-react';
import { generateMedicalBusinessSchema } from '@/utils/schemaGenerators';

const TeenTherapyGA = () => {
  const medicalBusinessSchema = generateMedicalBusinessSchema(
    "Teen Therapy Georgia",
    "Get teen therapy in Georgia with licensed adolescent specialists. Anxiety, depression, and behavioral support for teens 13-18. Video, phone & text sessions.",
    "https://chctherapy.com/teen-therapy-georgia",
    ["Teen Therapy", "Adolescent Counseling", "Teen Anxiety Therapy", "Teen Depression Therapy"]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Teen Therapy in Georgia | Licensed Adolescent Therapists | CHC"
        description="Get teen therapy in Georgia with licensed adolescent specialists. Anxiety, depression, and behavioral support for teens 13-18. Video, phone & text sessions."
        keywords="teen therapy Georgia, adolescent counseling GA, teenage mental health Georgia, teen depression therapy Georgia, teen anxiety treatment"
        canonicalUrl="https://chctherapy.com/teen-therapy-georgia"
        ogTitle="Online Teen Therapy in Georgia | Licensed Adolescent Therapists"
        ogDescription="Professional teen therapy in Georgia. Support for adolescent mental health challenges. Most insurance accepted. Start your teen's healing journey today."
        structuredData={medicalBusinessSchema}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Teen Crisis Support:</strong> If your teen is in crisis, call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline). 
            <strong>Teen Crisis Text Line:</strong> Text HOME to <a href="sms:741741" className="underline font-semibold">741741</a>.
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <GraduationCap className="w-3 h-3 mr-1" />
                Georgia Licensed Teen Specialists
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Teen Therapy in Georgia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Adolescence brings unique challenges including academic pressure, social anxiety, identity questions, and emotional regulation difficulties. 
                Our Georgia-licensed teen specialists provide age-appropriate, evidence-based mental health support for adolescents 13-18.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional teen therapy through secure video, phone, or text sessions. Convenient online format that teens prefer and parents trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Teen Therapist</Link>
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
              <h2 className="text-3xl font-bold text-center mb-12">How Teen Therapy Works at CHC</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card>
                  <CardHeader className="text-center">
                    <GraduationCap className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Teen-Focused Methods</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    CBT, DBT, ACT, and motivational interviewing designed for adolescents
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Teen-Preferred Format</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Video, text, and phone sessions that teens find comfortable and engaging
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Flexible Timing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    After-school and weekend appointments that fit Georgia teen schedules
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Family Involvement</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Parent consultation and family therapy sessions when beneficial
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
                      <h4 className="font-semibold mb-3 text-primary">Teen Services:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Individual teen sessions: $75-150
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Teen group therapy available
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Family sessions included
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          After-school and weekend slots
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
              <h2 className="text-3xl font-bold text-center mb-12">Georgia Teens We Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Academic & Social Stress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Georgia teens struggling with school pressure, college prep, social anxiety, peer relationships, and identity development.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Mental Health Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Teen depression, anxiety, ADHD, self-harm, eating concerns, and substance use issues affecting Georgia adolescents.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Behavioral & Family Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Oppositional behavior, family conflict, divorce adjustment, and life transitions affecting Georgia teens and families.
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
                    "Our teen-focused therapy approach has helped over 90% of our Georgia adolescent clients achieve significant improvement in mood and functioning within 12-16 weeks. 
                    We meet teens where they are and use methods they find engaging and effective."
                  </blockquote>
                  <cite className="font-semibold text-primary">
                    — Dr. Ashley Johnson, Licensed Adolescent Specialist, Georgia
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
                    <CardTitle className="text-lg">At what age can teens start therapy in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We provide therapy for adolescents ages 13-18 in Georgia. Teens 14+ can consent to mental health treatment, while younger teens typically need parent consent.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Is teen therapy covered by insurance in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, all major Georgia insurance plans cover teen mental health services. CareSource, Peach State, and Amerigroup have $0 copays for adolescent therapy.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Will parents be involved in teen therapy sessions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Teen sessions are private, but we may include parents in some sessions or provide separate parent consultation when beneficial for treatment progress.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do teens prefer online therapy in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Many Georgia teens prefer online therapy because it's more convenient, reduces stigma, and uses technology they're comfortable with. It also eliminates transportation barriers.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do I know if my teen needs therapy?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Warning signs include persistent mood changes, academic decline, social withdrawal, risky behaviors, sleep changes, or expressions of hopelessness. Trust your parental instincts.
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
              <h2 className="text-4xl font-bold mb-6">Give Your Teen the Support They Need</h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of Georgia families who've seen their teens thrive with our specialized therapists. 
                Early intervention makes a difference. Most insurance accepted. Start today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Get Matched with a Teen Specialist</Link>
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

export default TeenTherapyGA;