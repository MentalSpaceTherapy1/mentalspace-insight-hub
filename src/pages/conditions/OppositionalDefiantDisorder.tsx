import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, AlertTriangle, Users, FileText, Stethoscope } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { generateMedicalWebPageSchema } from '@/utils/schemaGenerators';

const OppositionalDefiantDisorder = () => {
  const medicalWebPageSchema = generateMedicalWebPageSchema(
    "Oppositional Defiant Disorder",
    "Expert ODD treatment for children and teens in Georgia. Specialized therapy for Oppositional Defiant Disorder with family-centered approach.",
    "https://chctherapy.com/mental-health-library/oppositional-defiant-disorder"
  );

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="Oppositional Defiant Disorder Treatment | ODD Therapy | Georgia"
        description="Expert ODD treatment for children and teens in Georgia. Specialized therapy for Oppositional Defiant Disorder with family-centered approach."
        keywords="oppositional defiant disorder, ODD, child behavior therapy, teen therapy, conduct disorder, Georgia"
        canonicalUrl="https://chctherapy.com/mental-health-library/oppositional-defiant-disorder"
        structuredData={medicalWebPageSchema}
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
              <span className="text-muted-foreground">Oppositional Defiant Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
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
                  <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Oppositional Defiant Disorder</h1>
                  <p className="text-xl text-muted-foreground">Behavioral Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Oppositional defiant disorder (ODD) is a behavioral disorder that involves a frequent and persistent pattern of anger, irritability, arguing, defiance or vindictiveness toward parents and other authority figures. Most children sometimes disobey, argue with parents, or defy authority. However, ODD is much more serious.
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
                      ODD is more common in boys than in girls. Some studies have shown that it affects 20% of school-age children. However, most experts believe that the actual percentage is lower than that. The condition usually presents before 8 years of age but not later than adolescence.
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
                    <p>The exact cause of ODD is unknown, but it is believed that multiple factors play a role:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Biological:</strong> Some children may be born with inherited traits like difficulty regulating mood or differences in brain development
                      </li>
                      <li>
                        <strong>Environmental:</strong> Problems with parenting may contribute to ODD, including lack of supervision, inconsistent discipline, or abuse
                      </li>
                      <li>
                        <strong>Psychological:</strong> Children may develop ODD as a way to assert their independence or because they have learned that aggressive behavior gets them what they want
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
                    <p>ODD symptoms include patterns of behavior that are:</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Angry and Irritable Mood:</h4>
                        <ul className="space-y-1">
                          <li>Often loses temper</li>
                          <li>Is often touchy or easily annoyed</li>
                          <li>Is often angry and resentful</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Argumentative and Defiant Behavior:</h4>
                        <ul className="space-y-1">
                          <li>Often argues with authority figures</li>
                          <li>Often actively defies rules and requests</li>
                          <li>Often deliberately annoys others</li>
                          <li>Often blames others for mistakes or misbehavior</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Vindictiveness:</h4>
                        <ul className="space-y-1">
                          <li>Has been spiteful or vindictive at least twice within the past 6 months</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <p className="text-red-800 dark:text-red-200 font-medium">
                        These behaviors must occur more often than is typical for the child's age and cause significant problems.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Treatment for ODD usually involves multiple approaches and may take time to be effective. Early treatment is important to help prevent the condition from worsening.
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Parent training programs</li>
                      <li>Individual therapy for the child</li>
                      <li>Family therapy</li>
                      <li>Cognitive behavioral therapy (CBT)</li>
                      <li>Social skills training</li>
                      <li>School-based interventions</li>
                      <li>Medication (for co-occurring conditions)</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        With proper treatment and support, children with ODD can learn better ways to manage their behavior and emotions.
                      </p>
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
                    <Link to="/mental-health-library/adhd" className="block text-primary hover:underline">
                      ADHD
                    </Link>
                    <Link to="/mental-health-library/anxiety" className="block text-primary hover:underline">
                      Anxiety
                    </Link>
                    <Link to="/mental-health-library/depression" className="block text-primary hover:underline">
                      Depression
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Category:</strong> Behavioral Disorder
                    </div>
                    <div>
                      <strong>Age of Onset:</strong> Usually before age 8
                    </div>
                    <div>
                      <strong>Treatment:</strong> Responds well to behavioral interventions and family therapy
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
            <h2 className="text-3xl font-bold mb-4">Help Your Child Manage Difficult Behaviors</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              ODD is treatable. Our family therapists can help you and your child develop better communication and behavioral strategies.
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

export default OppositionalDefiantDisorder;