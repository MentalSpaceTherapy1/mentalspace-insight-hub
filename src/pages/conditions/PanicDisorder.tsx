import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Zap, Users, FileText, Stethoscope } from 'lucide-react';

const PanicDisorder = () => {
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
              <span className="text-muted-foreground">Panic Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                  <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Panic Disorder</h1>
                  <p className="text-xl text-muted-foreground">Anxiety Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Panic disorder is a type of anxiety disorder where you have repeated attacks of intense fear that something bad will happen when there's no real danger. These attacks, called panic attacks, can happen anytime, anywhere, and without warning.
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
                      Panic attacks are sudden episodes of intense fear that can include physical symptoms like heart palpitations, sweating, and shortness of breath. While panic attacks can be scary, they are not dangerous. With panic disorder, you may worry constantly about when the next attack will happen and avoid places where attacks have occurred before.
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
                    <p>The exact causes of panic disorder are not fully understood, but several factors may contribute:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Genetics:</strong> Having a family member with panic disorder increases your risk
                      </li>
                      <li>
                        <strong>Brain chemistry:</strong> Changes in brain function and chemical imbalances may play a role
                      </li>
                      <li>
                        <strong>Major stress:</strong> Significant life changes, loss, or trauma can trigger panic disorder
                      </li>
                      <li>
                        <strong>Temperament:</strong> Being more sensitive to stress or prone to negative emotions
                      </li>
                      <li>
                        <strong>Medical conditions:</strong> Certain physical health problems can sometimes trigger panic attacks
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
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Physical Symptoms of Panic Attacks:</h4>
                        <ul className="space-y-1">
                          <li>Rapid, pounding heart rate</li>
                          <li>Sweating</li>
                          <li>Trembling or shaking</li>
                          <li>Shortness of breath or difficulty breathing</li>
                          <li>Feelings of choking</li>
                          <li>Chest pain or discomfort</li>
                          <li>Nausea or stomach upset</li>
                          <li>Dizziness or feeling faint</li>
                          <li>Numbness or tingling sensations</li>
                          <li>Chills or hot flashes</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Emotional Symptoms:</h4>
                        <ul className="space-y-1">
                          <li>Fear of losing control or "going crazy"</li>
                          <li>Fear of dying</li>
                          <li>Feeling detached from reality</li>
                          <li>Intense fear or terror</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <p className="text-emerald-800 dark:text-emerald-200 font-medium">
                        Panic attacks typically peak within 10 minutes and rarely last longer than 30 minutes.
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
                      Panic disorder is highly treatable. Most people who receive treatment see significant improvement within weeks to months:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Cognitive Behavioral Therapy (CBT)</li>
                      <li>Exposure therapy</li>
                      <li>Panic-focused psychodynamic psychotherapy</li>
                      <li>Medications (antidepressants, anti-anxiety medications)</li>
                      <li>Relaxation techniques</li>
                      <li>Breathing exercises</li>
                      <li>Lifestyle changes (exercise, stress management)</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        With proper treatment, up to 90% of people with panic disorder can recover completely.
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
                    <Link to="/mental-health-library/social-anxiety-disorder" className="block text-primary hover:underline">
                      Social Anxiety Disorder
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
                      <strong>Category:</strong> Anxiety Disorder
                    </div>
                    <div>
                      <strong>Attack Duration:</strong> Usually peaks within 10 minutes
                    </div>
                    <div>
                      <strong>Recovery Rate:</strong> Up to 90% with proper treatment
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
            <h2 className="text-3xl font-bold mb-4">Break Free from Panic Attacks</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Panic disorder is highly treatable. Learn coping strategies and regain control over your life with professional support.
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

export default PanicDisorder;