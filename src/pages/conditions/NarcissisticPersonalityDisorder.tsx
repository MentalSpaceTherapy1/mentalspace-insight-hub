import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Crown, Users, FileText, Stethoscope } from 'lucide-react';

const NarcissisticPersonalityDisorder = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
              <span className="text-muted-foreground">Narcissistic Personality Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                  <Crown className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Narcissistic Personality Disorder</h1>
                  <p className="text-xl text-muted-foreground">Personality Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Narcissistic personality disorder (NPD) is a mental health condition in which people have an unreasonably high sense of their own importance. They need and seek too much attention and want people to admire them. People with this disorder may lack the ability to understand or care about the feelings of others.
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
                      But behind this mask of extreme confidence, people with NPD are not sure of their self-worth and are easily upset by the slightest criticism. Having narcissistic personality disorder can make relationships and everyday life difficult. Treatment involves counseling.
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
                    <p>The cause of narcissistic personality disorder isn't known. However, several factors may contribute:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Environment:</strong> Parent-child relationships with either too much adoration or too much criticism that don't match the child's actual experiences and achievements.
                      </li>
                      <li>
                        <strong>Genetics:</strong> Inherited characteristics may play a role in developing NPD.
                      </li>
                      <li>
                        <strong>Neurobiology:</strong> The connection between the brain, behavior and thinking patterns.
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
                    <p>Signs and symptoms of narcissistic personality disorder may include:</p>
                    
                    <ul className="space-y-2">
                      <li>Grandiose sense of self-importance</li>
                      <li>Lives in a fantasy world that supports their delusions of grandeur</li>
                      <li>Needs constant praise and admiration</li>
                      <li>Sense of entitlement</li>
                      <li>Exploits others without guilt or shame</li>
                      <li>Frequently demeans, intimidates, bullies, or belittles others</li>
                      <li>Inability or unwillingness to recognize the needs and feelings of others</li>
                      <li>Extremely sensitive to criticism</li>
                      <li>Expects to be recognized as superior</li>
                      <li>Makes achievements and talents seem bigger than they are</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                        NPD affects more males than females and often begins in early adulthood.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Treatment for narcissistic personality disorder centers around talk therapy, also called psychotherapy. People with NPD often don't think they need treatment, which can make treatment challenging.
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Dialectical Behavior Therapy (DBT)</li>
                      <li>Cognitive Behavioral Therapy (CBT)</li>
                      <li>Schema Therapy</li>
                      <li>Mentalization-Based Therapy</li>
                      <li>Family therapy (when appropriate)</li>
                      <li>Group therapy</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        With consistent therapy, people with NPD can develop healthier relationships and more realistic self-perception.
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
                    <Link to="/mental-health-library/borderline-personality-disorder" className="block text-primary hover:underline">
                      Borderline Personality Disorder
                    </Link>
                    <Link to="/mental-health-library/antisocial-personality-disorder" className="block text-primary hover:underline">
                      Antisocial Personality Disorder
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
                      <strong>Category:</strong> Personality Disorder
                    </div>
                    <div>
                      <strong>Gender:</strong> More common in males
                    </div>
                    <div>
                      <strong>Treatment:</strong> Challenging but possible with consistent therapy
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
            <h2 className="text-3xl font-bold mb-4">Change is Possible with the Right Support</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Professional therapy can help develop healthier relationship patterns and more realistic self-awareness.
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

export default NarcissisticPersonalityDisorder;