import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Eye, Users, FileText, Stethoscope } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const BodyDysmorphicDisorder = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="Body Dysmorphic Disorder Treatment | BDD Therapy | Georgia"
        description="Specialized BDD therapy in Georgia. Expert treatment for Body Dysmorphic Disorder with CBT and evidence-based approaches for body image concerns."
        keywords="body dysmorphic disorder, BDD, body image therapy, appearance anxiety, CBT therapy, Georgia"
        canonicalUrl="https://chctherapy.com/conditions/body-dysmorphic-disorder"
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
              <span className="text-muted-foreground">Body Dysmorphic Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-pink-100 dark:bg-pink-900/30">
                  <Eye className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Body Dysmorphic Disorder</h1>
                  <p className="text-xl text-muted-foreground">Body Image Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Body dysmorphic disorder (BDD) is a mental health condition where a person becomes obsessed with imagined defects in their appearance. These perceived flaws are usually minor or not observable to others, but for someone with BDD, they feel significant and cause severe emotional distress.
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
                      People with BDD may focus on one or more parts of their body. The face and head are the most common areas of concern, including skin, hair, nose, eyes, or mouth. However, any part of the body can be the focus of concern. BDD typically begins during adolescence and affects men and women equally.
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
                    <p>The exact causes of BDD are not known, but research suggests several factors may contribute:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Brain differences:</strong> Some research suggests people with BDD may have abnormalities in brain structure or neurochemistry
                      </li>
                      <li>
                        <strong>Genetics:</strong> BDD appears to be more common in people whose family members also have BDD
                      </li>
                      <li>
                        <strong>Environmental factors:</strong> Childhood teasing, trauma, or abuse may contribute to developing BDD
                      </li>
                      <li>
                        <strong>Cultural factors:</strong> Living in a culture that emphasizes physical appearance may increase risk
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
                    <p>Signs and symptoms of BDD may include:</p>
                    
                    <ul className="space-y-2">
                      <li>Being extremely preoccupied with a perceived flaw that appears minor or is not observable to others</li>
                      <li>Strong belief that you have a defect that makes you ugly or deformed</li>
                      <li>Frequently examining yourself in mirrors or avoiding mirrors entirely</li>
                      <li>Excessive grooming or seeking reassurance</li>
                      <li>Attempting to hide perceived flaws with styling, makeup, or clothes</li>
                      <li>Constantly comparing your appearance with others</li>
                      <li>Avoiding social situations</li>
                      <li>Seeking cosmetic procedures with little satisfaction</li>
                      <li>Repetitive behaviors like skin picking</li>
                      <li>Seeking multiple opinions from medical providers</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                      <p className="text-pink-800 dark:text-pink-200 font-medium">
                        BDD symptoms must cause significant distress or impairment in social, work, or other important areas of functioning.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      BDD is treatable with a combination of therapy and medication. The most effective treatments include:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Cognitive Behavioral Therapy (CBT) - specifically designed for BDD</li>
                      <li>Exposure and Response Prevention</li>
                      <li>Selective Serotonin Reuptake Inhibitors (SSRIs)</li>
                      <li>Group therapy</li>
                      <li>Family therapy</li>
                      <li>Mindfulness-based approaches</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        With proper treatment, people with BDD can learn to manage symptoms and improve their quality of life significantly.
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
                    <Link to="/mental-health-library/obsessive-compulsive-disorder" className="block text-primary hover:underline">
                      Obsessive Compulsive Disorder
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
                      <strong>Category:</strong> Body Image Disorder
                    </div>
                    <div>
                      <strong>Onset:</strong> Usually begins during adolescence
                    </div>
                    <div>
                      <strong>Treatment:</strong> Highly responsive to specialized CBT and medication
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
            <h2 className="text-3xl font-bold mb-4">Overcome Body Image Concerns</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              BDD is treatable. Our specialized therapists understand body image issues and can help you develop a healthier relationship with your appearance.
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

export default BodyDysmorphicDisorder;