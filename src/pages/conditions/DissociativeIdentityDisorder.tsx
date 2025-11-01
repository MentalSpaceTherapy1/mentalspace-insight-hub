import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Split, Users, FileText, Stethoscope } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const DissociativeIdentityDisorder = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="Dissociative Identity Disorder Treatment | DID Therapy | Georgia"
        description="Specialized treatment for Dissociative Identity Disorder (DID) in Georgia. Expert trauma-informed therapy for multiple personality disorder."
        keywords="dissociative identity disorder, DID, multiple personality disorder, trauma therapy, dissociation treatment, Georgia"
        canonicalUrl="https://chctherapy.com/conditions/dissociative-identity-disorder"
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
              <span className="text-muted-foreground">Dissociative Identity Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                  <Split className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Dissociative Identity Disorder</h1>
                  <p className="text-xl text-muted-foreground">Dissociative Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Dissociative identity disorder (DID), previously known as multiple personality disorder, is a mental health condition where a person has two or more separate personalities or identities. These different identities or personalities control a person's behavior at different times.
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
                      Each identity may have a unique name, personal history, and characteristics, including obvious differences in voice, gender, mannerisms, and even such physical qualities as the need for eyeglasses. There are often gaps in memory, which may be as simple as forgetting everyday events or as severe as forgetting important personal information.
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
                    <p>DID is usually caused by past trauma. Factors that may contribute include:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Severe childhood trauma:</strong> Physical, sexual, or emotional abuse during childhood
                      </li>
                      <li>
                        <strong>Neglect:</strong> Severe emotional neglect or abandonment in early childhood
                      </li>
                      <li>
                        <strong>Natural disasters:</strong> Experiencing or witnessing traumatic events like natural disasters
                      </li>
                      <li>
                        <strong>War or combat:</strong> Exposure to war-related trauma
                      </li>
                      <li>
                        <strong>Medical trauma:</strong> Experiencing painful or frightening medical procedures
                      </li>
                    </ul>
                    
                    <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                      <p className="text-indigo-800 dark:text-indigo-200 font-medium">
                        DID appears to be a way for the mind to cope with severe trauma, especially in childhood.
                      </p>
                    </div>
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
                    <p>The main symptoms of DID include:</p>
                    
                    <ul className="space-y-2">
                      <li>Having two or more distinct identities or personality states</li>
                      <li>Ongoing gaps in memory about everyday events, personal information, and trauma</li>
                      <li>The symptoms cause significant distress or problems in social, work, or other areas of functioning</li>
                      <li>Feeling like multiple people are talking or living inside your head</li>
                      <li>Feeling as though you are sometimes watching yourself act</li>
                      <li>Finding items you don't remember buying or receiving</li>
                      <li>Writing in a handwriting style that isn't familiar to you</li>
                      <li>Having knowledge of skills you don't remember learning</li>
                      <li>Being told by others that you have acted completely differently</li>
                      <li>Feeling detached from your emotions and body</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <p className="text-amber-800 dark:text-amber-200 font-medium">
                        DID is often misunderstood and stigmatized. It's a real condition that requires professional treatment.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Split className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Treatment for DID primarily involves psychotherapy. The goals of treatment include integrating the separate identities into one primary identity, helping process traumatic memories, and developing coping skills.
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Trauma-focused psychotherapy</li>
                      <li>Cognitive Behavioral Therapy (CBT)</li>
                      <li>Dialectical Behavior Therapy (DBT)</li>
                      <li>EMDR (Eye Movement Desensitization and Reprocessing)</li>
                      <li>Family therapy</li>
                      <li>Creative therapies (art, music, movement)</li>
                      <li>Medications (for associated symptoms like depression or anxiety)</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        Recovery from DID is possible with specialized treatment from trauma-informed mental health professionals.
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
                    <Link to="/mental-health-library/ptsd" className="block text-primary hover:underline">
                      PTSD
                    </Link>
                    <Link to="/mental-health-library/depression" className="block text-primary hover:underline">
                      Depression
                    </Link>
                    <Link to="/mental-health-library/anxiety" className="block text-primary hover:underline">
                      Anxiety
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Category:</strong> Dissociative Disorder
                    </div>
                    <div>
                      <strong>Origin:</strong> Usually develops from severe childhood trauma
                    </div>
                    <div>
                      <strong>Treatment:</strong> Requires specialized trauma-informed therapy
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
            <h2 className="text-3xl font-bold mb-4">Specialized Help for Complex Trauma</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              DID is a treatable condition. Our trauma-informed specialists understand complex dissociation and can guide your healing journey.
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

export default DissociativeIdentityDisorder;