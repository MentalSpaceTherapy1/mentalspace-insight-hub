import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Brain, Users, FileText, Stethoscope, MapPin, Shield, HelpCircle, ExternalLink } from 'lucide-react';

const Anxiety = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What triggers anxiety in Georgia residents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common triggers include job stress in Atlanta's competitive market, rural isolation, severe weather events, and financial pressures. Georgia's humid climate can also worsen physical anxiety symptoms like sweating and difficulty breathing."
        }
      },
      {
        "@type": "Question",
        "name": "Does Georgia Medicaid cover anxiety treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Georgia Medicaid (Peach State Health Plan) covers anxiety therapy, medication, and crisis intervention. Coverage includes individual and group therapy with licensed providers throughout Georgia's Community Service Board network."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get anxiety therapy online in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Georgia residents can access licensed therapists via telehealth, which is especially beneficial for those in rural areas or with transportation challenges. Most insurance plans cover online therapy sessions."
        }
      },
      {
        "@type": "Question",
        "name": "How is anxiety different from normal worry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Normal worry is temporary and situation-specific. Anxiety disorders involve persistent, excessive fear that interferes with daily activities, lasts weeks or months, and causes physical symptoms like rapid heartbeat or sweating."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do during an anxiety attack in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use 4-7-8 breathing technique, ground yourself with 5-4-3-2-1 method, call Georgia Crisis Line (1-800-715-4225) if needed. Emergency rooms in Atlanta, Augusta, Savannah provide crisis intervention."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Anxiety Treatment in Georgia | Licensed Therapists & Support"
        description="Find effective anxiety treatment in Georgia. Experienced therapists specializing in anxiety disorders with flexible scheduling and insurance acceptance. Relief is possible."
        keywords="anxiety treatment Georgia, anxiety therapy Atlanta, Georgia anxiety counseling, panic attack help, social anxiety treatment"
        canonicalUrl="https://chcgeorgia.com/mental-health-library/anxiety"
        ogTitle="Anxiety Treatment in Georgia | Licensed Therapists & Support"
        ogDescription="Find effective anxiety treatment in Georgia. Experienced therapists specializing in anxiety disorders with flexible scheduling and insurance acceptance."
        ogImage="/therapy-hero-og.jpg"
        structuredData={faqSchema}
      />
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/mental-health-library" className="text-primary hover:underline">
                Mental Health Library
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">Anxiety</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                  <Brain className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Anxiety</h1>
                  <p className="text-xl text-muted-foreground">Anxiety Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Georgia residents face unique anxiety triggers—from Atlanta's high-pressure business environment to rural communities' isolation, severe weather concerns, and economic uncertainty. Nearly 300,000 Georgians struggle with anxiety disorders, but effective treatment is available. Our state's warm Southern hospitality extends to mental healthcare, with compassionate therapists who understand how Georgia's culture, climate, and lifestyle can impact anxiety levels.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/therapist-matching">Find a Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/therapist-matching">Request an Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Left untreated, anxiety disorders can dramatically reduce productivity and significantly diminish an individual's quality of life. 
                      Understanding the difference between normal anxiety and anxiety disorders is crucial for seeking appropriate help.
                    </p>
                  </CardContent>
                </Card>

                {/* Causes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Causes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <ul className="space-y-3">
                      <li>
                        <strong>Stress:</strong> It's normal to feel stressed about a final exam or job interview. During these times, 
                        you might have feelings of apprehension or unexplained thoughts of impending doom, which is how anxiety is being characterized.
                      </li>
                      <li>
                        <strong>Trauma:</strong> Anxiety is a way that the brain and body has reacted to the traumatic experience – sometimes as a protective measure. 
                        When we're feeling attacked it makes sense to be on guard and not trust others. For people who have been through trauma, 
                        those thoughts and protective behaviors continue even when danger is gone.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Symptoms */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-primary" />
                      Symptoms
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <ul className="space-y-2">
                      <li>Feeling restless</li>
                      <li>Heart racing and/or excessive sweating</li>
                      <li>Feeling tired</li>
                      <li>Difficulty concentrating or losing their train of thought</li>
                      <li>Irritability</li>
                      <li>Muscle pain, tightness, or soreness</li>
                      <li>Difficulty sleeping – both falling asleep or staying asleep or being rested</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Anxiety is about worry and fear. Worry and fear happens when something causes you to learn to be scared and worried. 
                      This learning process affects your thoughts and your body, for example by causing your heart to race or excessive sweating.
                    </p>
                    
                    <p>
                      While there are many ways to treat Anxiety, Therapy is one of them. It can be a great way to change behaviors, 
                      gain confidence, learn new skills, and talk with someone openly and honestly.
                    </p>
                    
                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        Professional therapy can help you develop effective coping strategies and tools to manage anxiety symptoms.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* How to Get Help in Georgia */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      How to Get Help in Georgia
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Crisis Support</h4>
                        <ul className="space-y-1">
                          <li>Georgia Crisis & Access Line: <strong>1-800-715-4225</strong> (24/7)</li>
                          <li>Crisis Text Line: Text HOME to <strong>741741</strong></li>
                          <li>NAMI Georgia HelpLine: <strong>1-800-950-6264</strong></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Finding Anxiety Specialists</h4>
                        <ul className="space-y-1">
                          <li>Georgia Psychological Association provider directory</li>
                          <li>Community Service Boards (anxiety groups in all counties)</li>
                          <li>University counseling centers (anxiety specialty clinics)</li>
                          <li>Private practice anxiety specialists in major Georgia cities</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Georgia Anxiety Resources</h4>
                        <ul className="space-y-1">
                          <li>Anxiety support groups in Atlanta, Augusta, Columbus, Savannah</li>
                          <li>Online therapy for rural Georgia residents</li>
                          <li>Workplace anxiety programs through major Georgia employers</li>
                          <li>Youth anxiety programs through Georgia schools</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Insurance Coverage */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Which Plans Often Cover This
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <div className="space-y-4">
                      <p>Georgia insurance plans typically provide excellent anxiety treatment coverage:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Top Georgia Plans</h4>
                          <ul className="space-y-1">
                            <li><Link to="/aetna-insurance" className="text-primary hover:underline">Aetna</Link> - Unlimited telehealth sessions</li>
                            <li><Link to="/blue-cross-insurance" className="text-primary hover:underline">Blue Cross Blue Shield</Link> - Large provider network</li>
                            <li><Link to="/cigna-insurance" className="text-primary hover:underline">Cigna</Link> - Same-day appointments</li>
                            <li><Link to="/humana-insurance" className="text-primary hover:underline">Humana</Link> - Senior anxiety programs</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Coverage Details</h4>
                          <ul className="space-y-1">
                            <li>Individual therapy: $15-40 copay</li>
                            <li>Group therapy: $10-20 copay</li>
                            <li>Anxiety medication: Covered</li>
                            <li>Crisis care: No copay</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">What triggers anxiety in Georgia residents?</h4>
                      <p className="text-muted-foreground">Common triggers include job stress in Atlanta's competitive market, rural isolation, severe weather events, and financial pressures. Georgia's humid climate can also worsen physical anxiety symptoms like sweating and difficulty breathing.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Does Georgia Medicaid cover anxiety treatment?</h4>
                      <p className="text-muted-foreground">Yes, Georgia Medicaid (Peach State Health Plan) covers anxiety therapy, medication, and crisis intervention. Coverage includes individual and group therapy with licensed providers throughout Georgia's Community Service Board network.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Can I get anxiety therapy online in Georgia?</h4>
                      <p className="text-muted-foreground">Absolutely. Georgia residents can access licensed therapists via telehealth, which is especially beneficial for those in rural areas or with transportation challenges. Most insurance plans cover online therapy sessions.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">How is anxiety different from normal worry?</h4>
                      <p className="text-muted-foreground">Normal worry is temporary and situation-specific. Anxiety disorders involve persistent, excessive fear that interferes with daily activities, lasts weeks or months, and causes physical symptoms like rapid heartbeat or sweating.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What should I do during an anxiety attack in Georgia?</h4>
                      <p className="text-muted-foreground">Use 4-7-8 breathing technique, ground yourself with 5-4-3-2-1 method, call Georgia Crisis Line (1-800-715-4225) if needed. Emergency rooms in Atlanta, Augusta, Savannah provide crisis intervention.</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Sources */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-primary" />
                      Sources & Additional Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm space-y-2">
                      <p><strong>Last reviewed:</strong> January 2024</p>
                      <p><strong>Next review:</strong> January 2025</p>
                      <p><strong>Reviewed by:</strong> Licensed Professional Counselor, Georgia</p>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3">Clinical Sources:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• National Institute of Mental Health (NIMH): <a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Anxiety Disorders Information</a></li>
                        <li>• American Psychological Association (APA): <a href="https://www.apa.org/topics/anxiety/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Anxiety Resources</a></li>
                        <li>• Anxiety and Depression Association of America: <a href="https://adaa.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Treatment Resources</a></li>
                        <li>• Georgia Psychological Association: <a href="https://www.gapsychology.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Find Georgia Therapists</a></li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Get Help Now</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button asChild className="w-full">
                      <Link to="/therapist-matching">Schedule with a Therapist</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link to="/emergency-resources">Emergency Resources</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Related Conditions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     <Link to="/mental-health-library/panic-disorder" className="block text-primary hover:underline">
                       Panic Disorder
                     </Link>
                     <Link to="/mental-health-library/social-anxiety-disorder" className="block text-primary hover:underline">
                       Social Anxiety Disorder
                     </Link>
                     <Link to="/mental-health-library/ptsd" className="block text-primary hover:underline">
                       PTSD
                     </Link>
                     <Link to="/anxiety-therapy-georgia" className="block text-primary hover:underline">
                       Georgia Anxiety Therapy
                     </Link>
                     <Link to="/get-started" className="block text-primary hover:underline">
                       Get Started Today
                     </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Category:</strong> Anxiety Disorder
                    </div>
                    <div>
                      <strong>Impact:</strong> Can significantly reduce quality of life if untreated
                    </div>
                    <div>
                      <strong>Treatment:</strong> Highly responsive to therapy and professional care
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Take Control of Your Anxiety</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Anxiety is treatable. Learn effective coping strategies and regain control of your life with professional support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/therapist-matching">Find Your Therapist</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/mental-health-library">Back to Library</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Anxiety;