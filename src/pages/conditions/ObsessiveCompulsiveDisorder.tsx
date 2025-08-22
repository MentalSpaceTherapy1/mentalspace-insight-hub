import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, RefreshCw, Users, FileText, Stethoscope } from 'lucide-react';

const ObsessiveCompulsiveDisorder = () => {
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
              <span className="text-muted-foreground">Obsessive Compulsive Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30">
                  <RefreshCw className="w-8 h-8 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Obsessive Compulsive Disorder</h1>
                  <p className="text-xl text-muted-foreground">Anxiety-Related Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Obsessive-compulsive disorder (OCD) features a pattern of unwanted thoughts and fears (obsessions) that lead you to do repetitive behaviors (compulsions). These obsessions and compulsions interfere with daily activities and cause significant distress.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/therapist-matching">Find a Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/get-started">Request an Appointment</Link>
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
                      You may try to ignore or stop your obsessions, but that only increases your distress and anxiety. Ultimately, you feel driven to perform compulsive acts to try to ease your stress. Despite efforts to ignore or get rid of bothersome thoughts or urges, they keep coming back. This leads to more ritualistic behavior — the vicious cycle of OCD.
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
                    <p>The causes of OCD aren't fully understood, but risk factors include:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Biology:</strong> OCD may be a result of changes in your body's own natural chemistry or brain functions
                      </li>
                      <li>
                        <strong>Genetics:</strong> OCD may have a genetic component, but specific genes have yet to be identified
                      </li>
                      <li>
                        <strong>Learning:</strong> Obsessive fears and compulsive behaviors can be learned from watching family members or gradually learned over time
                      </li>
                      <li>
                        <strong>Stress:</strong> Stressful life events may trigger symptoms in people prone to developing OCD
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
                        <h4 className="font-semibold text-lg mb-3">Obsession Symptoms:</h4>
                        <ul className="space-y-2">
                          <li>Fear of contamination or dirt</li>
                          <li>Doubting and having difficulty tolerating uncertainty</li>
                          <li>Needing things orderly and symmetrical</li>
                          <li>Aggressive or horrific thoughts about losing control</li>
                          <li>Unwanted thoughts, including aggression, or sexual or religious subjects</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Compulsion Symptoms:</h4>
                        <ul className="space-y-2">
                          <li>Washing and cleaning</li>
                          <li>Checking</li>
                          <li>Counting</li>
                          <li>Orderliness</li>
                          <li>Following a strict routine</li>
                          <li>Demanding reassurance</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Common Examples:</h4>
                        <ul className="space-y-2">
                          <li>Hand-washing until your skin becomes raw</li>
                          <li>Checking doors repeatedly to make sure they're locked</li>
                          <li>Checking the stove repeatedly to make sure it's off</li>
                          <li>Counting in certain patterns</li>
                          <li>Silently repeating a prayer, word or phrase</li>
                          <li>Arranging your canned goods to face the same way</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-violet-50 dark:bg-violet-950/20 rounded-lg border border-violet-200 dark:border-violet-800">
                      <p className="text-violet-800 dark:text-violet-200 font-medium">
                        OCD usually begins in the teen or young adult years, but it can start in childhood.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      OCD treatment may not result in a cure, but it can help bring symptoms under control so that they don't rule your daily life. The main treatments include:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Exposure and Response Prevention (ERP) therapy</li>
                      <li>Cognitive Behavioral Therapy (CBT)</li>
                      <li>Acceptance and Commitment Therapy (ACT)</li>
                      <li>Medications (selective serotonin reuptake inhibitors)</li>
                      <li>Intensive outpatient programs</li>
                      <li>Deep brain stimulation (for severe cases)</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        ERP therapy is considered the gold standard treatment for OCD, with success rates of 60-80%.
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
                    <Link to="/mental-health-library/anxiety" className="block text-primary hover:underline">
                      Anxiety
                    </Link>
                    <Link to="/mental-health-library/body-dysmorphic-disorder" className="block text-primary hover:underline">
                      Body Dysmorphic Disorder
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
                      <strong>Category:</strong> Anxiety-Related Disorder
                    </div>
                    <div>
                      <strong>Treatment:</strong> ERP therapy has 60-80% success rate
                    </div>
                    <div>
                      <strong>Onset:</strong> Usually begins in teen or young adult years
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
            <h2 className="text-3xl font-bold mb-4">Break Free from OCD Cycles</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              OCD is highly treatable with specialized therapy. Learn to manage obsessions and compulsions with evidence-based treatments.
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

export default ObsessiveCompulsiveDisorder;