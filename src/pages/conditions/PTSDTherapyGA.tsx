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
  Shield, 
  Clock, 
  Users, 
  Star, 
  Video, 
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Calendar,
  Brain,
  Zap
} from 'lucide-react';

const PTSDTherapyGA = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online PTSD & Trauma Therapy in Georgia | Licensed Therapists | CHC"
        description="Professional PTSD and trauma therapy in Georgia. EMDR, CPT, and trauma-focused therapy with licensed therapists. Most insurance accepted. Specialized care for veterans and trauma survivors."
        keywords="PTSD therapy Georgia, trauma therapy GA, EMDR Georgia, veterans therapy Georgia, licensed trauma therapists Georgia"
        canonicalUrl="https://chctherapy.com/ptsd-therapy-georgia"
        ogTitle="Online PTSD & Trauma Therapy in Georgia | Licensed Therapists"
        ogDescription="Professional PTSD and trauma therapy in Georgia. EMDR and trauma-focused treatment with licensed therapists. Specialized care for veterans and trauma survivors."
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
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Shield className="w-3 h-3 mr-1" />
                Trauma-Specialized Georgia Therapists
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Online PTSD & Trauma Therapy in Georgia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                PTSD affects over 150,000 Georgians, including veterans, first responders, and trauma survivors. 
                Our specialized trauma therapists provide evidence-based treatment including EMDR, CPT, and trauma-focused therapy.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Trauma-informed care through secure video, phone, or text sessions. Begin healing with licensed Georgia trauma specialists.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find a Trauma Specialist</Link>
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
              <h2 className="text-3xl font-bold text-center mb-12">How PTSD & Trauma Treatment Works at CHC</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card>
                  <CardHeader className="text-center">
                    <Zap className="w-12 h-12 text-red-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">EMDR & Trauma-Focused</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    EMDR, CPT, TF-CBT, and somatic approaches specifically for trauma recovery
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-red-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Safe Environment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Therapy from your safe space via secure video, phone, or messaging
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-red-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Evening and weekend sessions available for working professionals and veterans
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 text-red-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Specialized Therapists</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Licensed Georgia therapists with advanced trauma and PTSD training
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
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Shield className="w-6 h-6 text-red-600" />
                    Insurance & Costs in Georgia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-600">Accepted Insurance Plans:</h4>
                      <ul className="space-y-2 text-sm">
                         <li className="flex items-center gap-2">
                           <CheckCircle className="w-4 h-4 text-green-600" />
                           Aetna (typical copay: $0-40)
                         </li>
                         <li className="flex items-center gap-2">
                           <CheckCircle className="w-4 h-4 text-green-600" />
                           TRICARE (veterans coverage)
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
                         <li className="flex items-center gap-2">
                           <CheckCircle className="w-4 h-4 text-green-600" />
                           VA Community Care Network
                         </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-red-600">Specialized Services:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          EMDR sessions: $75-150
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          Veterans financial assistance
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          First responder discounts
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-red-600" />
                          Priority scheduling for trauma cases
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
              <h2 className="text-3xl font-bold text-center mb-12">Georgia Trauma Survivors We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Veterans & Military</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Specialized care for Georgia veterans from Fort Benning, Fort Gordon, and Robins AFB dealing with combat trauma, military sexual trauma, and deployment stress.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">First Responders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Trauma-informed therapy for Georgia police officers, firefighters, EMTs, and emergency personnel dealing with critical incident stress and cumulative trauma.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Trauma Survivors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Compassionate care for survivors of accidents, violence, abuse, natural disasters, and other traumatic events affecting Georgia communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clinician Testimonial */}
        <section className="py-16 bg-red-50 dark:bg-red-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card>
                <CardContent className="pt-6">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <blockquote className="text-lg italic mb-6">
                    "PTSD is treatable. Using EMDR and trauma-focused therapies, we've helped over 400 Georgia veterans and trauma survivors 
                    significantly reduce symptoms. 82% of our clients report meaningful improvement within 12-16 sessions."
                  </blockquote>
                  <cite className="font-semibold text-red-600">
                    — Dr. Maria Rodriguez, Licensed Clinical Psychologist & EMDR Specialist, Georgia
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
                    <CardTitle className="text-lg">Is PTSD therapy covered by TRICARE in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, TRICARE covers PTSD therapy including EMDR. We're credentialed with TRICARE and the VA Community Care Network to serve Georgia veterans and military families.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What is EMDR and how does it help PTSD?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      EMDR (Eye Movement Desensitization and Reprocessing) is a proven trauma therapy that helps the brain process traumatic memories. It's highly effective for PTSD and can be conducted safely online.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you treat first responders in Georgia?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, we have specialized programs for Georgia police, firefighters, and EMTs. We understand the unique stressors of first responder work and offer flexible scheduling and specialized discounts.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can online therapy effectively treat severe PTSD?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Research shows online EMDR and trauma therapy are as effective as in-person treatment for PTSD. Our secure platform ensures safety while providing access from your comfortable environment.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How long does PTSD treatment typically take?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Treatment length varies by individual. Many clients see improvement in 8-12 sessions, with EMDR often showing faster results. We create personalized treatment plans based on your specific trauma and goals.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you help with military sexual trauma (MST)?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, we have trauma specialists trained in military sexual trauma. All MST-related therapy is covered by the VA at no cost, and we provide confidential, specialized care for survivors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-4xl font-bold mb-6">Healing from Trauma is Possible</h2>
              <p className="text-xl mb-8 opacity-90">
                You've survived the trauma. Now let our specialized Georgia therapists help you heal and reclaim your life. 
                PTSD is treatable, and recovery is possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find a Trauma Specialist</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-red-600">
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

export default PTSDTherapyGA;