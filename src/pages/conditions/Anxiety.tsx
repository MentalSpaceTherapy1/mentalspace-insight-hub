import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Brain, Users, FileText, Stethoscope } from 'lucide-react';

const Anxiety = () => {
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
              <span className="text-muted-foreground">Anxiety</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                  <Brain className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Anxiety</h1>
                  <p className="text-xl text-muted-foreground">Anxiety Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Most people experience feelings of anxiety before an important event such as a big exam, business presentation or first date. 
                Anxiety disorders, however, are illnesses that cause people to feel frightened, distressed and uneasy for no apparent reason.
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
                      Left untreated, anxiety disorders can dramatically reduce productivity and significantly diminish an individual's quality of life. 
                      Understanding the difference between normal anxiety and anxiety disorders is crucial for seeking appropriate help.
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
                    <ul className="space-y-3">
                      <li>
                        <strong>Stress:</strong> It's normal to feel stressed about a final exam or job interview. During these times, 
                        you might have feelings of apprehension or unexplained thoughts of impending doom, which is how anxiety is being characterized.
                      </li>
                      <li>
                        <strong>Trauma:</strong> Anxiety is a way that the brain and body has reacted to the traumatic experience – sometimes as a protective measure. 
                        When we're feeling attacked it makes sense to be on guard and not trust others. For people who have been through trauma, 
                        those thoughts and protective behaviors continue even when danger is gone.
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
                    <ul className="space-y-2">
                      <li>Feeling restless</li>
                      <li>Heart racing and/or excessive sweating</li>
                      <li>Feeling tired</li>
                      <li>Difficulty concentrating or losing their train of thought</li>
                      <li>Irritability</li>
                      <li>Muscle pain, tightness, or soreness</li>
                      <li>Difficulty sleeping – both falling asleep or staying asleep or being rested</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Anxiety is about worry and fear. Worry and fear happens when something causes you to learn to be scared and worried. 
                      This learning process affects your thoughts and your body, for example by causing your heart to race or excessive sweating.
                    </p>
                    
                    <p>
                      While there are many ways to treat Anxiety, Therapy is one of them. It can be a great way to change behaviors, 
                      gain confidence, learn new skills, and talk with someone openly and honestly.
                    </p>
                    
                    <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        Professional therapy can help you develop effective coping strategies and tools to manage anxiety symptoms.
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
                    <Link to="/mental-health-library/panic-disorder" className="block text-primary hover:underline">
                      Panic Disorder
                    </Link>
                    <Link to="/mental-health-library/social-anxiety-disorder" className="block text-primary hover:underline">
                      Social Anxiety Disorder
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
                      <strong>Category:</strong> Anxiety Disorder
                    </div>
                    <div>
                      <strong>Impact:</strong> Can significantly reduce quality of life if untreated
                    </div>
                    <div>
                      <strong>Treatment:</strong> Highly responsive to therapy and professional care
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
            <h2 className="text-3xl font-bold mb-4">Take Control of Your Anxiety</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Anxiety is treatable. Learn effective coping strategies and regain control of your life with professional support.
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

export default Anxiety;