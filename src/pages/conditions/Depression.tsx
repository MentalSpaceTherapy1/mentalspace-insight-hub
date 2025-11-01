import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Heart, Users, FileText, Stethoscope, MapPin, Shield, HelpCircle, ExternalLink, Brain } from 'lucide-react';

const Depression = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the early signs of depression in Georgia residents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Early signs include persistent sadness lasting more than 2 weeks, loss of interest in activities, sleep changes, fatigue, and difficulty concentrating. Georgia's high humidity and seasonal changes can sometimes worsen symptoms."
        }
      },
      {
        "@type": "Question", 
        "name": "Does insurance cover depression therapy in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most major Georgia insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and Peach State Health Plan cover depression therapy. Coverage typically includes 12-20 sessions per year with varying copays."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I see a therapist for depression in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Most Georgia residents can schedule within 1-2 weeks for initial consultations. Telehealth options through our network can often provide same-week appointments, especially important in rural Georgia areas."
        }
      },
      {
        "@type": "Question",
        "name": "What therapy approaches work best for depression?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy show excellent results. Our Georgia therapists often combine these with mindfulness techniques, which can be particularly effective given Georgia's slower pace of life."
        }
      },
      {
        "@type": "Question",
        "name": "Are there Georgia-specific depression resources?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Georgia offers the Georgia Crisis & Access Line (1-800-715-4225), county mental health centers, and community support groups. Rural Georgia residents have access to telehealth through our statewide network."
        }
      },
      {
        "@type": "Question",
        "name": "Can seasonal changes affect depression in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Georgia's mild winters typically cause less seasonal depression than northern states. However, hot, humid summers can increase irritability and mood changes. Air-conditioned therapy sessions provide comfortable healing environments."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Depression Therapy in Georgia | Expert Treatment & Support"
        description="Find compassionate depression therapy in Georgia. Licensed therapists specializing in depression treatment with insurance coverage. Get help today - you're not alone."
        keywords="depression therapy Georgia, depression treatment Atlanta, Georgia mental health, depression counseling, Georgia therapists"
        canonicalUrl="https://chctherapy.com/mental-health-library/depression"
        ogTitle="Depression Therapy in Georgia | Expert Treatment & Support"
        ogDescription="Find compassionate depression therapy in Georgia. Licensed therapists specializing in depression treatment with insurance coverage."
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
              <span className="text-muted-foreground">Depression</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Depression</h1>
                  <p className="text-xl text-muted-foreground">Mood Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                In Georgia, approximately 400,000 adults experience major depression annually, making it one of our state's most pressing mental health challenges. From Atlanta's urban stress to rural Georgia's isolation, depression affects Georgians across all communities. The good news? Depression is highly treatable, and Georgia residents have access to exceptional care through our comprehensive network of licensed therapists who understand the unique cultural and environmental factors affecting mental health in the Peach State.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/therapist-matching">Find a Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/therapist-matching">Request an Appointment</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/mental-health-tests">
                    <Brain className="mr-2 h-5 w-5" />
                    Take Depression Test
                  </Link>
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
                      Depression is never a "normal" part of life, no matter what your demographics or health situation. 
                      People often resist treatment because they believe depression isn't serious, that they can treat it themselves, 
                      or that it is a personal weakness rather than a serious medical condition.
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
                    <p>Many things can contribute to clinical depression. For some people, several factors seem to be involved, while for others a single factor can cause the illness.</p>
                    
                    <ul className="space-y-3">
                      <li><strong>Cognitive:</strong> People with negative thinking patterns and low self-esteem are more likely to develop clinical depression.</li>
                      <li><strong>Gender:</strong> More women experience depression than men. While the reasons for this are still unclear, they may include hormonal changes during menstruation, pregnancy, childbirth, and menopause.</li>
                      <li><strong>Co-occurrence:</strong> Depression is more likely to occur along with certain illnesses, such as heart disease, cancer, Parkinson's disease, diabetes, Alzheimer's disease, Multiple Sclerosis, and hormonal disorders.</li>
                      <li><strong>Situational:</strong> Difficult life events, including divorce, financial problems, or the death of a loved one can contribute to depression.</li>
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
                      <li>Persistent sad, anxious, or "empty" mood</li>
                      <li>Sleeping too much or too little; middle of the night or early morning waking</li>
                      <li>Weight fluctuations; reduced appetite and weight loss, or increased appetite and weight gain</li>
                      <li>Loss of pleasure and interest in activities once enjoyed, including sex</li>
                      <li>Restlessness, irritability</li>
                      <li>Persistent physical symptoms that do not respond to treatment (such as chronic pain or digestive disorders)</li>
                      <li>Difficulty concentrating, remembering, or making decisions</li>
                      <li>Fatigue or loss of energy</li>
                      <li>Feeling guilty, hopeless, or worthless</li>
                      <li>Thoughts of suicide or death</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <p className="text-amber-800 dark:text-amber-200 font-medium">
                        A quick, easy, and confidential way to determine if you may be experiencing depression is to take a screening. 
                        A screening is not a diagnosis, but a way of understanding if your symptoms are having enough of an impact that you should seek help.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Depression is very treatable, with the overwhelming majority of those who seek treatment showing improvement. 
                      The choice of treatment depends on the pattern, severity, persistence of depressive symptoms, and the history of the illness. 
                      As with many illnesses, early treatment is more effective and helps prevent the likelihood of serious recurrences.
                    </p>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        Depression must be treated by a physician or qualified mental health professional.
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
                        <h4 className="font-semibold mb-2">Immediate Support</h4>
                        <ul className="space-y-1">
                          <li>Georgia Crisis & Access Line: <strong>1-800-715-4225</strong> (24/7)</li>
                          <li>National Suicide Prevention Lifeline: <strong>988</strong></li>
                          <li>Crisis Text Line: Text HOME to <strong>741741</strong></li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Finding Therapists in Georgia</h4>
                        <ul className="space-y-1">
                          <li>Community Service Boards in all 159 Georgia counties</li>
                          <li>University counseling centers (UGA, Georgia Tech, Emory)</li>
                          <li>Private practice therapists in metro Atlanta, Augusta, Savannah</li>
                          <li>Telehealth options for rural Georgia residents</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Georgia-Specific Resources</h4>
                        <ul className="space-y-1">
                          <li>Georgia Department of Behavioral Health and Developmental Disabilities</li>
                          <li>NAMI Georgia chapters in major cities</li>
                          <li>Faith-based counseling through Georgia churches</li>
                          <li>Employee assistance programs through major Georgia employers</li>
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
                      <p>Most major insurance plans in Georgia provide comprehensive depression treatment coverage:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Major Georgia Plans</h4>
                          <ul className="space-y-1">
                            <li><Link to="/aetna-insurance" className="text-primary hover:underline">Aetna</Link> - Covers 12-20 sessions/year</li>
                            <li><Link to="/blue-cross-insurance" className="text-primary hover:underline">Blue Cross Blue Shield</Link> - Extensive network</li>
                            <li><Link to="/cigna-insurance" className="text-primary hover:underline">Cigna</Link> - Telehealth coverage</li>
                            <li><Link to="/peach-state-insurance" className="text-primary hover:underline">Peach State Health Plan</Link> - Medicaid option</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Typical Coverage</h4>
                          <ul className="space-y-1">
                            <li>Individual therapy: $20-50 copay</li>
                            <li>Group therapy: $10-25 copay</li>
                            <li>Medication management: Covered</li>
                            <li>Crisis intervention: Fully covered</li>
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
                      <h4 className="font-semibold mb-2">What are the early signs of depression in Georgia residents?</h4>
                      <p className="text-muted-foreground">Early signs include persistent sadness lasting more than 2 weeks, loss of interest in activities, sleep changes, fatigue, and difficulty concentrating. Georgia's high humidity and seasonal changes can sometimes worsen symptoms.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Does insurance cover depression therapy in Georgia?</h4>
                      <p className="text-muted-foreground">Yes, most major Georgia insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and Peach State Health Plan cover depression therapy. Coverage typically includes 12-20 sessions per year with varying copays.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">How quickly can I see a therapist for depression in Georgia?</h4>
                      <p className="text-muted-foreground">Most Georgia residents can schedule within 1-2 weeks for initial consultations. Telehealth options through our network can often provide same-week appointments, especially important in rural Georgia areas.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What therapy approaches work best for depression?</h4>
                      <p className="text-muted-foreground">Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy show excellent results. Our Georgia therapists often combine these with mindfulness techniques, which can be particularly effective given Georgia's slower pace of life.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Are there Georgia-specific depression resources?</h4>
                      <p className="text-muted-foreground">Yes, Georgia offers the Georgia Crisis & Access Line (1-800-715-4225), county mental health centers, and community support groups. Rural Georgia residents have access to telehealth through our statewide network.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Can seasonal changes affect depression in Georgia?</h4>
                      <p className="text-muted-foreground">Georgia's mild winters typically cause less seasonal depression than northern states. However, hot, humid summers can increase irritability and mood changes. Air-conditioned therapy sessions provide comfortable healing environments.</p>
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
                      <p><strong>Reviewed by:</strong> Licensed Clinical Social Worker, Georgia</p>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3">Clinical Sources:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• National Institute of Mental Health (NIMH): <a href="https://www.nimh.nih.gov/health/topics/depression/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Depression Information</a></li>
                        <li>• American Psychological Association (APA): <a href="https://www.apa.org/topics/depression/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Depression Resources</a></li>
                        <li>• Centers for Disease Control and Prevention (CDC): <a href="https://www.cdc.gov/mentalhealth/basics/mental-illness/depression.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mental Health and Depression</a></li>
                        <li>• Georgia Department of Behavioral Health: <a href="https://dbhdd.georgia.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">State Mental Health Resources</a></li>
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
                       Anxiety Disorders
                     </Link>
                     <Link to="/mental-health-library/bipolar-disorder" className="block text-primary hover:underline">
                       Bipolar Disorder
                     </Link>
                     <Link to="/mental-health-library/ptsd" className="block text-primary hover:underline">
                       PTSD
                     </Link>
                     <Link to="/depression-therapy-georgia" className="block text-primary hover:underline">
                       Georgia Depression Therapy
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
                      <strong>Category:</strong> Mood Disorder
                    </div>
                    <div>
                      <strong>Prevalence:</strong> One of the most common mental illnesses
                    </div>
                    <div>
                      <strong>Treatability:</strong> Very treatable with professional help
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Healing Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Depression is highly treatable. Our licensed therapists are here to provide the support and professional care you deserve.
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

export default Depression;