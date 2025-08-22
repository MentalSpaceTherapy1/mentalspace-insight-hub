import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Waves, Users, FileText, Stethoscope } from 'lucide-react';

const BorderlinePersonalityDisorder = () => {
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
              <span className="text-muted-foreground">Borderline Personality Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-900/30">
                  <Waves className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Borderline Personality Disorder</h1>
                  <p className="text-xl text-muted-foreground">Personality Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Borderline personality disorder (BPD) is a mental health disorder that impacts the way you think and feel about yourself and others, causing problems functioning in everyday life. It involves issues with self-image, difficulty managing emotions and behavior, and patterns of unstable relationships.
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
                      With borderline personality disorder, you have an intense fear of abandonment or instability, and you may have difficulty tolerating being alone. Yet inappropriate anger, impulsiveness and frequent mood swings may push others away, even though you want to have loving and lasting relationships.
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
                    <p>As with other mental health disorders, the causes of BPD aren't fully understood. Several factors may contribute:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Genetics:</strong> Some studies suggest that BPD may be inherited or strongly associated with other mental health disorders in family members.
                      </li>
                      <li>
                        <strong>Brain abnormalities:</strong> Some research has shown changes in certain areas of the brain involved in emotion regulation and impulse control.
                      </li>
                      <li>
                        <strong>Environmental factors:</strong> Many people with BPD report experiencing traumatic life events, such as abuse, abandonment or adversity during childhood.
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
                    <p>Signs and symptoms of borderline personality disorder may include:</p>
                    
                    <ul className="space-y-2">
                      <li>An intense fear of abandonment</li>
                      <li>A pattern of unstable intense relationships</li>
                      <li>Rapid changes in self-identity and self-image</li>
                      <li>Periods of stress-related paranoia and loss of contact with reality</li>
                      <li>Impulsive and risky behavior</li>
                      <li>Suicidal threats or behavior or self-injury</li>
                      <li>Wide mood swings lasting from a few hours to a few days</li>
                      <li>Ongoing feelings of emptiness</li>
                      <li>Inappropriate, intense anger or problems controlling anger</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
                      <p className="text-teal-800 dark:text-teal-200 font-medium">
                        BPD usually begins by early adulthood and affects more women than men.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Waves className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      BPD has historically been viewed as difficult to treat. However, with newer, evidence-based treatment, many people with BPD experience fewer and less severe symptoms, improved functioning, and an improved quality of life.
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Dialectical Behavior Therapy (DBT)</li>
                      <li>Cognitive Behavioral Therapy (CBT)</li>
                      <li>Schema-Focused Therapy</li>
                      <li>Mentalization-Based Therapy</li>
                      <li>Systems Training for Emotional Predictability</li>
                      <li>Medications (for specific symptoms)</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        Recovery from BPD is possible. With proper treatment, many people learn to manage their symptoms effectively.
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
                    <Link to="/mental-health-library/ptsd" className="block text-primary hover:underline">
                      PTSD
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
                      <strong>Gender:</strong> More common in women
                    </div>
                    <div>
                      <strong>Treatment:</strong> Evidence-based therapies are highly effective
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
            <h2 className="text-3xl font-bold mb-4">Recovery from BPD is Possible</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              With specialized therapy like DBT, you can learn to manage intense emotions and build stable, healthy relationships.
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

export default BorderlinePersonalityDisorder;