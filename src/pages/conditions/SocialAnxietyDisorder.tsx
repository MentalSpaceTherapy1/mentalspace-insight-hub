import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Users2, Users, FileText, Stethoscope } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { generateMedicalWebPageSchema } from '@/utils/schemaGenerators';

const SocialAnxietyDisorder = () => {
  const medicalSchema = generateMedicalWebPageSchema(
    'Social Anxiety Disorder',
    'Specialized social anxiety therapy in Georgia. Overcome social phobia with expert treatment. Connect with therapists experienced in social anxiety disorder.',
    'https://chctherapy.com/mental-health-library/social-anxiety-disorder'
  );

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="Social Anxiety Disorder Treatment | Social Phobia Therapy | Georgia"
        description="Specialized social anxiety therapy in Georgia. Overcome social phobia with expert treatment. Connect with therapists experienced in social anxiety disorder."
        keywords="social anxiety, social phobia, public speaking anxiety, social fear, anxiety therapy, Georgia"
        canonicalUrl="https://chctherapy.com/mental-health-library/social-anxiety-disorder"
        structuredData={medicalSchema}
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
              <span className="text-muted-foreground">Social Anxiety Disorder</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-900/30">
                  <Users2 className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Social Anxiety Disorder</h1>
                  <p className="text-xl text-muted-foreground">Anxiety Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Social anxiety disorder (social phobia) is an intense, persistent fear of being watched and judged by others. This fear can affect work, school, and your other day-to-day activities. It can even make it hard to make and keep friends.
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
                      Everyone has felt anxious or embarrassed at one time or another. But people with social anxiety disorder worry about these and other things for weeks before they happen. Social anxiety disorder is a common type of anxiety disorder that affects millions of people.
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
                    <p>Several factors may contribute to the development of social anxiety disorder:</p>
                    
                    <ul className="space-y-3">
                      <li>
                        <strong>Family history:</strong> You're more likely to develop social anxiety disorder if your biological parents or siblings have the condition
                      </li>
                      <li>
                        <strong>Negative experiences:</strong> Children who experience teasing, bullying, rejection, ridicule or humiliation may be more prone to social anxiety disorder
                      </li>
                      <li>
                        <strong>Temperament:</strong> Children who are shy, timid, withdrawn or restrained may be at greater risk
                      </li>
                      <li>
                        <strong>New social demands:</strong> Social anxiety disorder symptoms typically start in the teenage years but meeting new people or public speaking may trigger symptoms for the first time
                      </li>
                      <li>
                        <strong>Physical condition:</strong> Sometimes social anxiety disorder is linked to a medical condition like facial disfigurement or stuttering
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
                        <h4 className="font-semibold mb-2">Emotional and Behavioral Symptoms:</h4>
                        <ul className="space-y-1">
                          <li>Fear of situations where you may be judged negatively</li>
                          <li>Worry about embarrassing or humiliating yourself</li>
                          <li>Intense fear of interacting or talking with strangers</li>
                          <li>Fear that others will notice that you look anxious</li>
                          <li>Avoiding doing things or speaking to people out of fear of embarrassment</li>
                          <li>Avoiding situations where you might be the center of attention</li>
                          <li>Anxiety in anticipation of a feared activity or event</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Physical Symptoms:</h4>
                        <ul className="space-y-1">
                          <li>Blushing</li>
                          <li>Fast heartbeat</li>
                          <li>Trembling</li>
                          <li>Sweating</li>
                          <li>Upset stomach or nausea</li>
                          <li>Trouble catching your breath</li>
                          <li>Dizziness or lightheadedness</li>
                          <li>Feeling that your mind has gone blank</li>
                          <li>Muscle tension</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-sky-50 dark:bg-sky-950/20 rounded-lg border border-sky-200 dark:border-sky-800">
                      <p className="text-sky-800 dark:text-sky-200 font-medium">
                        Social anxiety disorder usually begins in early to mid-teens, though it can sometimes start in younger children or adults.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users2 className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Social anxiety disorder can be treated effectively. Treatment options include:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>Cognitive Behavioral Therapy (CBT)</li>
                      <li>Exposure therapy</li>
                      <li>Group therapy</li>
                      <li>Social skills training</li>
                      <li>Medications (antidepressants, anti-anxiety medications)</li>
                      <li>Relaxation techniques</li>
                      <li>Mindfulness and stress management</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        With proper treatment, many people with social anxiety disorder can learn to manage their symptoms effectively and participate fully in social activities.
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
                    <Link to="/mental-health-library/panic-disorder" className="block text-primary hover:underline">
                      Panic Disorder
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
                      <strong>Onset:</strong> Usually begins in early to mid-teens
                    </div>
                    <div>
                      <strong>Treatment:</strong> Highly treatable with therapy and sometimes medication
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
            <h2 className="text-3xl font-bold mb-4">Overcome Social Fears</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Social anxiety is treatable. Learn to build confidence in social situations and reduce anxiety with professional support.
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

export default SocialAnxietyDisorder;