import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Activity, Users, FileText, Stethoscope, MapPin, Shield, HelpCircle, ExternalLink } from 'lucide-react';

const ADHD = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is ADHD diagnosed in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Georgia requires comprehensive evaluation by licensed psychologists or psychiatrists. Assessment includes behavioral rating scales, cognitive testing, medical history, and school/work performance review. Many Georgia providers offer telehealth evaluations."
        }
      },
      {
        "@type": "Question",
        "name": "Does Georgia schools provide ADHD accommodations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Georgia schools offer 504 plans and IEPs for ADHD students. Accommodations include extended test time, quiet environments, movement breaks, and modified assignments. Contact your school's special education coordinator."
        }
      },
      {
        "@type": "Question",
        "name": "What ADHD medications are covered by Georgia insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Georgia plans cover stimulants (Adderall, Ritalin, Concerta) and non-stimulants (Strattera, Wellbutrin). Generic versions typically have lower copays. Prior authorization may be required for brand-name medications."
        }
      },
      {
        "@type": "Question",
        "name": "Can adults be diagnosed with ADHD in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Many Georgia adults receive ADHD diagnoses later in life. Adult ADHD evaluation focuses on workplace challenges, relationship difficulties, and daily functioning. Treatment can significantly improve quality of life."
        }
      },
      {
        "@type": "Question",
        "name": "Are there ADHD support groups in Georgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CHADD (Children and Adults with ADHD) has active chapters in Atlanta, Augusta, and Savannah. Many therapists run ADHD support groups, and online support is available for rural Georgia residents."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="ADHD Treatment in Georgia | Expert Diagnosis & Therapy"
        description="Find specialized ADHD treatment in Georgia. Licensed professionals providing comprehensive evaluation, therapy, and support for children and adults with ADHD."
        keywords="ADHD treatment Georgia, ADHD therapy Atlanta, Georgia ADHD testing, adult ADHD diagnosis, children ADHD treatment"
        canonicalUrl="https://chcgeorgia.com/mental-health-library/adhd"
        ogTitle="ADHD Treatment in Georgia | Expert Diagnosis & Therapy"
        ogDescription="Find specialized ADHD treatment in Georgia. Licensed professionals providing comprehensive evaluation, therapy, and support for children and adults with ADHD."
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
              <span className="text-muted-foreground">ADHD</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30">
                  <Activity className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">ADHD</h1>
                  <p className="text-xl text-muted-foreground">Attention-Deficit Hyperactivity Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                In Georgia's school systems, ADHD affects approximately 100,000 students, making it a significant focus for educational and mental health professionals statewide. From bustling Atlanta classrooms to small rural Georgia schools, educators and families are recognizing that ADHD isn't just childhood hyperactivity—it's a neurodevelopmental condition requiring comprehensive support. Georgia's strong network of pediatric specialists, school psychologists, and family therapists ensures that both children and adults receive proper diagnosis and evidence-based treatment tailored to our state's educational and cultural landscape.
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
                      Symptoms such as inattention, impulsivity and over activity are now known to continue into adulthood for a significant percentage of children with ADHD. 
                      Understanding ADHD across the lifespan is crucial for proper diagnosis and treatment.
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
                    <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <p className="text-orange-800 dark:text-orange-200 font-medium">
                        ADHD is nobody's fault. Researchers believe that biology and genes play a large role in the development of ADHD.
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      <li>30 to 40 percent of children diagnosed with ADHD have relatives with the same disorder</li>
                      <li>The exact cause or causes of ADHD are not conclusively known</li>
                      <li>Scientific evidence suggests that in many cases the disorder is genetically transmitted</li>
                      <li>Caused by an imbalance or deficiency in certain chemicals that regulate brain efficiency in controlling behavior</li>
                      <li>A 1990 study at the National Institute of Mental Health correlated ADHD with metabolic abnormalities in the brain, providing evidence that ADHD is a neurobiological disorder</li>
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
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Signs of Inattentive Behavior:</h4>
                        <ul className="space-y-1">
                          <li>Has difficulty following instructions</li>
                          <li>Has difficulty focusing on tasks</li>
                          <li>Loses things at school and at home</li>
                          <li>Forgets things often</li>
                          <li>Becomes easily distracted or has difficulty listening</li>
                          <li>Lacks attention to detail, makes careless mistakes or is disorganized</li>
                          <li>Fails to complete homework or tasks</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Signs of Hyperactive Behavior:</h4>
                        <ul className="space-y-1">
                          <li>Is fidgety</li>
                          <li>Leaves seat when shouldn't</li>
                          <li>Runs or climbs inappropriately</li>
                          <li>Talks excessively</li>
                          <li>Difficulty playing quietly</li>
                          <li>Always on the go</li>
                          <li>Blurts out answers</li>
                          <li>Has trouble waiting turn</li>
                          <li>Interrupts</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Adult ADHD Symptoms:</h4>
                        <ul className="space-y-1">
                          <li>Distractibility</li>
                          <li>Disorganization</li>
                          <li>Forgetfulness</li>
                          <li>Procrastination</li>
                          <li>Chronic lateness</li>
                          <li>Chronic boredom</li>
                          <li>Anxiety</li>
                          <li>Depression</li>
                          <li>Low self-esteem</li>
                          <li>Mood swings</li>
                          <li>Employment problems</li>
                          <li>Restlessness</li>
                          <li>Substance abuse or addictions</li>
                          <li>Relationship problems</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      The methods of treatment supported by professionals may include a combination of:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Education for the adult and his or her family and close friends</li>
                      <li>Educational/employment accommodations</li>
                      <li>Medication</li>
                      <li>Counseling</li>
                    </ul>
                    
                    <p>
                      Appropriate treatment is determined according to the severity of an individual's disorder and the type and number of associated problems.
                    </p>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        Professional treatment can significantly improve quality of life for individuals with ADHD.
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
                        <h4 className="font-semibold mb-2">ADHD Evaluation Centers</h4>
                        <ul className="space-y-1">
                          <li>Children's Healthcare of Atlanta (ADHD specialty clinic)</li>
                          <li>Georgia Regents University (adult ADHD center)</li>
                          <li>Emory Department of Psychiatry (comprehensive testing)</li>
                          <li>Private practice psychologists throughout Georgia</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">School Support in Georgia</h4>
                        <ul className="space-y-1">
                          <li>504 Plans through Georgia Department of Education</li>
                          <li>IEP services in all Georgia school districts</li>
                          <li>School psychologists for evaluation and support</li>
                          <li>ADHD accommodations (extended time, quiet spaces)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Adult ADHD Resources</h4>
                        <ul className="space-y-1">
                          <li>Workplace accommodations through Georgia Vocational Rehabilitation</li>
                          <li>CHADD support groups in Atlanta, Augusta, Savannah</li>
                          <li>Adult ADHD coaching services</li>
                          <li>Telehealth options for rural Georgia residents</li>
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
                      <p>Georgia insurance plans provide comprehensive ADHD treatment coverage:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Major Georgia Plans</h4>
                          <ul className="space-y-1">
                            <li><Link to="/aetna-insurance" className="text-primary hover:underline">Aetna</Link> - ADHD medication & therapy</li>
                            <li><Link to="/blue-cross-insurance" className="text-primary hover:underline">Blue Cross Blue Shield</Link> - Testing coverage</li>
                            <li><Link to="/cigna-insurance" className="text-primary hover:underline">Cigna</Link> - Child & adult ADHD care</li>
                            <li><Link to="/peach-state-insurance" className="text-primary hover:underline">Peach State Health Plan</Link> - Medicaid ADHD services</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Coverage Benefits</h4>
                          <ul className="space-y-1">
                            <li>ADHD evaluation: $50-200 copay</li>
                            <li>Ongoing therapy: $20-40 copay</li>
                            <li>ADHD medications: $10-50 copay</li>
                            <li>School consultations: Often covered</li>
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
                      <h4 className="font-semibold mb-2">How is ADHD diagnosed in Georgia?</h4>
                      <p className="text-muted-foreground">Georgia requires comprehensive evaluation by licensed psychologists or psychiatrists. Assessment includes behavioral rating scales, cognitive testing, medical history, and school/work performance review. Many Georgia providers offer telehealth evaluations.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Does Georgia schools provide ADHD accommodations?</h4>
                      <p className="text-muted-foreground">Yes, Georgia schools offer 504 plans and IEPs for ADHD students. Accommodations include extended test time, quiet environments, movement breaks, and modified assignments. Contact your school's special education coordinator.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">What ADHD medications are covered by Georgia insurance?</h4>
                      <p className="text-muted-foreground">Most Georgia plans cover stimulants (Adderall, Ritalin, Concerta) and non-stimulants (Strattera, Wellbutrin). Generic versions typically have lower copays. Prior authorization may be required for brand-name medications.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Can adults be diagnosed with ADHD in Georgia?</h4>
                      <p className="text-muted-foreground">Absolutely. Many Georgia adults receive ADHD diagnoses later in life. Adult ADHD evaluation focuses on workplace challenges, relationship difficulties, and daily functioning. Treatment can significantly improve quality of life.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Are there ADHD support groups in Georgia?</h4>
                      <p className="text-muted-foreground">Yes, CHADD (Children and Adults with ADHD) has active chapters in Atlanta, Augusta, and Savannah. Many therapists run ADHD support groups, and online support is available for rural Georgia residents.</p>
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
                      <p><strong>Reviewed by:</strong> Licensed Psychologist, Georgia</p>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3">Clinical Sources:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• National Institute of Mental Health (NIMH): <a href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ADHD Information</a></li>
                        <li>• Centers for Disease Control and Prevention (CDC): <a href="https://www.cdc.gov/ncbddd/adhd/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ADHD Data & Statistics</a></li>
                        <li>• Children and Adults with ADHD (CHADD): <a href="https://chadd.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ADHD Resources</a></li>
                        <li>• Georgia Department of Education: <a href="https://www.gadoe.org/Curriculum-Instruction-and-Assessment/Special-Education-Services/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Special Education Services</a></li>
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
                     <Link to="/mental-health-library/oppositional-defiant-disorder" className="block text-primary hover:underline">
                       Oppositional Defiant Disorder
                     </Link>
                     <Link to="/adhd-therapy-georgia" className="block text-primary hover:underline">
                       Georgia ADHD Therapy
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
                      <strong>Category:</strong> Neurodevelopmental Disorder
                    </div>
                    <div>
                      <strong>Heredity:</strong> 30-40% have relatives with ADHD
                    </div>
                    <div>
                      <strong>Duration:</strong> Often continues into adulthood
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
            <h2 className="text-3xl font-bold mb-4">ADHD is Manageable with Professional Support</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              With proper diagnosis and treatment, individuals with ADHD can thrive. Get the professional support you need today.
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

export default ADHD;