import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Users, FileText, Stethoscope, MapPin, HelpCircle, ExternalLink } from 'lucide-react';
import { generateMedicalWebPageSchema, combineSchemas } from '@/utils/schemaGenerators';

const PTSD = () => {
  const medicalWebPageSchema = generateMedicalWebPageSchema(
    "PTSD",
    "Find specialized PTSD treatment in Georgia. Trauma-informed therapists providing EMDR, CPT, and evidence-based trauma therapy.",
    "https://chctherapy.com/mental-health-library/ptsd"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What trauma events commonly cause PTSD in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Georgia, common PTSD triggers include car accidents on I-285 and I-75, severe weather events (tornadoes, hurricanes), military combat (high veteran population), workplace accidents, and domestic violence. Rural Georgia experiences unique trauma from agricultural accidents."
        }
      },
      {
        "@type": "Question",
        "name": "Does the VA cover PTSD treatment in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Georgia veterans receive comprehensive PTSD coverage through VA medical centers in Atlanta, Augusta, and Dublin. Services include individual therapy, group therapy, EMDR, and medication management with no copays for service-connected conditions."
        }
      },
      {
        "@type": "Question",
        "name": "How soon after trauma should I seek PTSD help in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seek help immediately if symptoms persist beyond one month. Georgia's crisis services are available 24/7 (1-800-715-4225). Early intervention within 3 months of trauma significantly improves treatment outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best PTSD therapy available in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evidence-based treatments include EMDR, Cognitive Processing Therapy, and Prolonged Exposure therapy. Many Georgia therapists specialize in trauma treatment, with some offering intensive outpatient programs for faster recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Can PTSD affect work performance in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PTSD can impact concentration, memory, and emotional regulation at work. Georgia employers must provide reasonable accommodations under ADA. Employee assistance programs are available through major Georgia employers."
        }
      }
    ]
  };

  const combinedSchema = combineSchemas(faqSchema, medicalWebPageSchema);

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="PTSD Treatment in Georgia | Trauma-Informed Therapy & Support"
        description="Find specialized PTSD treatment in Georgia. Trauma-informed therapists providing EMDR, CPT, and evidence-based trauma therapy. Support for veterans and civilians."
        keywords="PTSD treatment Georgia, trauma therapy Atlanta, Georgia veterans PTSD, EMDR therapy, trauma counseling"
        canonicalUrl="https://chctherapy.com/mental-health-library/ptsd"
        ogTitle="PTSD Treatment in Georgia | Trauma-Informed Therapy & Support"
        ogDescription="Find specialized PTSD treatment in Georgia. Trauma-informed therapists providing EMDR, CPT, and evidence-based trauma therapy."
        ogImage="/therapy-hero-og.jpg"
        structuredData={combinedSchema}
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
              <span className="text-muted-foreground">PTSD</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30">
                  <Shield className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">PTSD</h1>
                  <p className="text-xl text-muted-foreground">Post-Traumatic Stress Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Georgia has one of the largest veteran populations in the Southeast, with over 700,000 veterans calling our state home. Additionally, Georgia residents face unique trauma exposure from severe weather events, high-traffic accidents on major interstates, and workplace incidents. Whether you're a service member dealing with combat trauma, a civilian who experienced a car accident, or someone affected by domestic violence, Georgia's network of trauma-informed therapists understands the cultural and environmental factors that influence healing in the South.
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
                      Most people who go through traumatic events may have temporary difficulty adjusting and coping, but with time and good self-care, they usually get better. If the symptoms get worse, last for months or even years, and interfere with your day-to-day functioning, you may have PTSD.
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
                    <p>PTSD can develop after exposure to a potentially traumatic event that is beyond a typical stressor. These events may include:</p>
                    
                    <ul className="space-y-2">
                      <li>Combat exposure</li>
                      <li>Physical or sexual assault</li>
                      <li>Accidents</li>
                      <li>Natural disasters</li>
                      <li>Witnessing death or serious injury</li>
                      <li>Childhood abuse or neglect</li>
                      <li>Medical emergencies</li>
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
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Re-experiencing symptoms:</h4>
                        <ul className="space-y-1">
                          <li>Flashbacks or reliving the trauma</li>
                          <li>Nightmares</li>
                          <li>Severe emotional distress when reminded of trauma</li>
                          <li>Physical reactions to reminders</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Avoidance symptoms:</h4>
                        <ul className="space-y-1">
                          <li>Avoiding trauma-related thoughts or feelings</li>
                          <li>Avoiding trauma-related places or people</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Mood and thinking changes:</h4>
                        <ul className="space-y-1">
                          <li>Negative thoughts about self or world</li>
                          <li>Guilt, shame, or blame</li>
                          <li>Decreased interest in activities</li>
                          <li>Feeling detached from others</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <p className="text-red-800 dark:text-red-200 font-medium">
                        PTSD symptoms must persist for more than a month and cause significant distress or impairment to be diagnosed.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      PTSD is treatable. Effective treatments include trauma-focused psychotherapy and medications. Treatment typically involves helping people learn skills to manage symptoms and develop ways of coping.
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Cognitive Processing Therapy (CPT)</li>
                      <li>Prolonged Exposure (PE) therapy</li>
                      <li>Eye Movement Desensitization and Reprocessing (EMDR)</li>
                      <li>Cognitive Behavioral Therapy (CBT)</li>
                      <li>Medications (when appropriate)</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        Professional treatment can significantly reduce PTSD symptoms and improve quality of life.
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
                        <h4 className="font-semibold mb-2">Veterans Services</h4>
                        <ul className="space-y-1">
                          <li>Atlanta VA Medical Center: <strong>(404) 321-6111</strong></li>
                          <li>Augusta VA Medical Center: <strong>(706) 733-0188</strong></li>
                          <li>Dublin VA Medical Center: <strong>(478) 272-1210</strong></li>
                          <li>Vet Centers in Atlanta, Augusta, Columbus, Savannah</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Crisis Support</h4>
                        <ul className="space-y-1">
                          <li>Veterans Crisis Line: <strong>1-800-273-8255</strong> (Press 1)</li>
                          <li>Georgia Crisis & Access Line: <strong>1-800-715-4225</strong></li>
                          <li>National Suicide Prevention Lifeline: <strong>988</strong></li>
                          <li>Crisis Text Line: Text HOME to <strong>741741</strong></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Civilian Trauma Services</h4>
                        <ul className="space-y-1">
                          <li>Georgia Network to End Sexual Assault (GNESA)</li>
                          <li>Rape crisis centers in all major Georgia cities</li>
                          <li>Domestic violence shelters statewide</li>
                          <li>Hospital-based trauma counseling programs</li>
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
                      <p>Georgia insurance plans provide comprehensive PTSD treatment coverage:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Major Georgia Plans</h4>
                          <ul className="space-y-1">
                            <li><Link to="/aetna-insurance" className="text-primary hover:underline">Aetna</Link> - EMDR & trauma therapy</li>
                            <li><Link to="/blue-cross-insurance" className="text-primary hover:underline">Blue Cross Blue Shield</Link> - Extensive trauma network</li>
                            <li><Link to="/cigna-insurance" className="text-primary hover:underline">Cigna</Link> - Specialized PTSD programs</li>
                            <li><strong>VA Benefits</strong> - Full coverage for veterans</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Trauma Treatment Coverage</h4>
                          <ul className="space-y-1">
                            <li>EMDR therapy: Covered</li>
                            <li>Individual trauma therapy: $20-50 copay</li>
                            <li>Group therapy: $10-25 copay</li>
                            <li>Crisis intervention: No copay</li>
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
                      <h4 className="font-semibold mb-2">What trauma events commonly cause PTSD in Georgia?</h4>
                      <p className="text-muted-foreground">In Georgia, common PTSD triggers include car accidents on I-285 and I-75, severe weather events (tornadoes, hurricanes), military combat (high veteran population), workplace accidents, and domestic violence. Rural Georgia experiences unique trauma from agricultural accidents.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Does the VA cover PTSD treatment in Georgia?</h4>
                      <p className="text-muted-foreground">Yes, Georgia veterans receive comprehensive PTSD coverage through VA medical centers in Atlanta, Augusta, and Dublin. Services include individual therapy, group therapy, EMDR, and medication management with no copays for service-connected conditions.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">How soon after trauma should I seek PTSD help in Georgia?</h4>
                      <p className="text-muted-foreground">Seek help immediately if symptoms persist beyond one month. Georgia's crisis services are available 24/7 (1-800-715-4225). Early intervention within 3 months of trauma significantly improves treatment outcomes.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What's the best PTSD therapy available in Georgia?</h4>
                      <p className="text-muted-foreground">Evidence-based treatments include EMDR, Cognitive Processing Therapy, and Prolonged Exposure therapy. Many Georgia therapists specialize in trauma treatment, with some offering intensive outpatient programs for faster recovery.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Can PTSD affect work performance in Georgia?</h4>
                      <p className="text-muted-foreground">Yes, PTSD can impact concentration, memory, and emotional regulation at work. Georgia employers must provide reasonable accommodations under ADA. Employee assistance programs are available through major Georgia employers.</p>
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
                      <p><strong>Reviewed by:</strong> Licensed Clinical Social Worker, Trauma Specialist, Georgia</p>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3">Clinical Sources:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• National Institute of Mental Health (NIMH): <a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PTSD Information</a></li>
                        <li>• American Psychological Association (APA): <a href="https://www.apa.org/topics/ptsd/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PTSD Resources</a></li>
                        <li>• National Center for PTSD: <a href="https://www.ptsd.va.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VA PTSD Treatment</a></li>
                        <li>• Georgia Department of Veterans Affairs: <a href="https://veterans.georgia.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Georgia Veteran Services</a></li>
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
                     <Link to="/mental-health-library/anxiety" className="block text-primary hover:underline">
                       Anxiety
                     </Link>
                     <Link to="/mental-health-library/depression" className="block text-primary hover:underline">
                       Depression
                     </Link>
                     <Link to="/mental-health-library/substance-use-disorder" className="block text-primary hover:underline">
                       Substance Use Disorder
                     </Link>
                     <Link to="/ptsd-therapy-georgia" className="block text-primary hover:underline">
                       Georgia PTSD Therapy
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
                      <strong>Category:</strong> Trauma-Related Disorder
                    </div>
                    <div>
                      <strong>Trigger:</strong> Exposure to traumatic events
                    </div>
                    <div>
                      <strong>Treatment:</strong> Highly responsive to trauma-focused therapy
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
            <h2 className="text-3xl font-bold mb-4">Healing from Trauma is Possible</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              PTSD is treatable. Our trauma-informed therapists are here to help you process your experiences and reclaim your life.
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

export default PTSD;