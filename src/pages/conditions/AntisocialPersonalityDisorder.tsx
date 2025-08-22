import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, UserX, Users, FileText, Stethoscope } from 'lucide-react';

const AntisocialPersonalityDisorder = () => {
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
              <span className="text-muted-foreground">Antisocial Personality Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-900/30">
                  <UserX className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Antisocial Personality Disorder</h1>
                  <p className="text-xl text-muted-foreground">Personality Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Antisocial personality disorder is a mental health condition where a person consistently shows no regard for right and wrong and ignores the rights and feelings of others. People with antisocial personality disorder tend to antagonize, manipulate or treat others harshly.
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
                      They show no guilt or remorse for their behavior. Individuals with antisocial personality disorder often violate the law, becoming criminals. They may lie, behave violently or impulsively, and have problems with drug and alcohol use.
                    </p>
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
                      <li>Disregard for right and wrong</li>
                      <li>Persistent lying or deceit</li>
                      <li>Being callous, cynical and disrespectful of others</li>
                      <li>Using charm or wit to manipulate others</li>
                      <li>Arrogance, superiority and being extremely opinionated</li>
                      <li>Recurring problems with the law, including criminal behavior</li>
                      <li>Repeatedly violating the rights of others</li>
                      <li>Aggressiveness, often with physical fights or assaults</li>
                      <li>Lack of empathy for others and lack of remorse</li>
                      <li>Unnecessary risk-taking or dangerous behavior</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserX className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Treatment is challenging but possible with specialized approaches:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Cognitive Behavioral Therapy</li>
                      <li>Schema Therapy</li>
                      <li>Dialectical Behavior Therapy</li>
                      <li>Mentalization-Based Therapy</li>
                      <li>Group therapy programs</li>
                      <li>Substance abuse treatment (when applicable)</li>
                    </ul>
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
                    <CardTitle>Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Category:</strong> Personality Disorder
                    </div>
                    <div>
                      <strong>Treatment:</strong> Challenging but possible with specialized therapy
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
            <h2 className="text-3xl font-bold mb-4">Specialized Treatment Available</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              While challenging, antisocial personality disorder can be treated with specialized therapeutic approaches.
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

export default AntisocialPersonalityDisorder;