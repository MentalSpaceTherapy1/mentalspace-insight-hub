import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Zap, Users, FileText, Stethoscope } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const BipolarDisorder = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="Bipolar Disorder Treatment & Support | Coping & Healing Therapy"
        description="Expert therapy for bipolar disorder in Georgia. Learn about symptoms, treatment options, and connect with licensed therapists specializing in mood disorders."
        keywords="bipolar disorder, mood disorder therapy, mania treatment, depression treatment, Georgia mental health"
        canonicalUrl="https://chctherapy.com/mental-health-library/bipolar-disorder"
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
              <span className="text-muted-foreground">Bipolar Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Bipolar Disorder</h1>
                  <p className="text-xl text-muted-foreground">Mood Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Bipolar disorder is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). These mood swings can affect sleep, energy, activity, judgment, behavior and the ability to think clearly.
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
                      Episodes of mood swings may occur rarely or multiple times a year. While most people will experience some emotional symptoms between episodes, some may not experience any. Although bipolar disorder is a lifelong condition, you can manage your mood swings and other symptoms by following a treatment plan.
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
                    <p>The exact cause of bipolar disorder is unknown, but several factors may be involved:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Biological differences:</strong> People with bipolar disorder appear to have physical changes in their brains.
                      </li>
                      <li>
                        <strong>Genetics:</strong> Bipolar disorder is more common in people who have a first-degree relative with the condition.
                      </li>
                      <li>
                        <strong>Stress:</strong> A stressful event such as death in the family, serious illness, or divorce may trigger an episode.
                      </li>
                      <li>
                        <strong>Brain chemistry:</strong> Imbalances in neurotransmitters may play a role in the development of bipolar disorder.
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
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Manic Episode Symptoms:</h4>
                        <ul className="space-y-1">
                          <li>Abnormally upbeat, jumpy or wired</li>
                          <li>Increased activity, energy or agitation</li>
                          <li>Exaggerated sense of well-being and self-confidence</li>
                          <li>Decreased need for sleep</li>
                          <li>Unusual talkativeness</li>
                          <li>Racing thoughts</li>
                          <li>Poor decision-making</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Depressive Episode Symptoms:</h4>
                        <ul className="space-y-1">
                          <li>Depressed mood or sadness</li>
                          <li>Marked loss of interest or feeling no pleasure</li>
                          <li>Significant weight loss or gain</li>
                          <li>Insomnia or sleeping too much</li>
                          <li>Fatigue or loss of energy</li>
                          <li>Feelings of worthlessness or guilt</li>
                          <li>Decreased ability to think or concentrate</li>
                          <li>Thinking about, planning or attempting suicide</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <p className="text-purple-800 dark:text-purple-200 font-medium">
                        Bipolar disorder typically begins in the teenage years or early adulthood and continues throughout life.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Bipolar disorder is a lifelong condition, but you can manage symptoms with a comprehensive treatment plan that typically includes:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Medications (mood stabilizers, antipsychotics, antidepressants)</li>
                      <li>Psychotherapy (cognitive behavioral therapy, family therapy, group therapy)</li>
                      <li>Lifestyle changes and self-management strategies</li>
                      <li>Regular monitoring and support</li>
                      <li>Treatment for co-occurring conditions</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        With proper treatment, many people with bipolar disorder can manage their symptoms and live fulfilling lives.
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
                    <Link to="/mental-health-library/depression" className="block text-primary hover:underline">
                      Depression
                    </Link>
                    <Link to="/mental-health-library/anxiety" className="block text-primary hover:underline">
                      Anxiety
                    </Link>
                    <Link to="/mental-health-library/substance-use-disorder" className="block text-primary hover:underline">
                      Substance Use Disorder
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
                      <strong>Onset:</strong> Usually begins in teenage years or early adulthood
                    </div>
                    <div>
                      <strong>Management:</strong> Lifelong condition that can be effectively managed
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
            <h2 className="text-3xl font-bold mb-4">Manage Your Bipolar Disorder</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bipolar disorder is manageable with the right treatment plan. Our mental health professionals can help you stabilize your mood and improve your quality of life.
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

export default BipolarDisorder;