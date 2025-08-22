import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Heart, Users, FileText, Stethoscope } from 'lucide-react';

const Depression = () => {
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
              <span className="text-muted-foreground">Depression</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/mental-health-library">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Depression</h1>
                  <p className="text-xl text-muted-foreground">Mood Disorder</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Major depression is one of the most common mental illnesses. Depression causes people to lose pleasure in daily life and can complicate other medical conditions. While certain factors increase the risk of developing depression, it can affect anyone, at any age, and of any race or ethnic group.
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
                      Depression is never a "normal" part of life, no matter what your demographics or health situation. 
                      People often resist treatment because they believe depression isn't serious, that they can treat it themselves, 
                      or that it is a personal weakness rather than a serious medical condition.
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
                    <p>Many things can contribute to clinical depression. For some people, several factors seem to be involved, while for others a single factor can cause the illness.</p>
                    
                    <ul className="space-y-3">
                      <li><strong>Cognitive:</strong> People with negative thinking patterns and low self-esteem are more likely to develop clinical depression.</li>
                      <li><strong>Gender:</strong> More women experience depression than men. While the reasons for this are still unclear, they may include hormonal changes during menstruation, pregnancy, childbirth, and menopause.</li>
                      <li><strong>Co-occurrence:</strong> Depression is more likely to occur along with certain illnesses, such as heart disease, cancer, Parkinson's disease, diabetes, Alzheimer's disease, Multiple Sclerosis, and hormonal disorders.</li>
                      <li><strong>Situational:</strong> Difficult life events, including divorce, financial problems, or the death of a loved one can contribute to depression.</li>
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
                      <li>Persistent sad, anxious, or "empty" mood</li>
                      <li>Sleeping too much or too little; middle of the night or early morning waking</li>
                      <li>Weight fluctuations; reduced appetite and weight loss, or increased appetite and weight gain</li>
                      <li>Loss of pleasure and interest in activities once enjoyed, including sex</li>
                      <li>Restlessness, irritability</li>
                      <li>Persistent physical symptoms that do not respond to treatment (such as chronic pain or digestive disorders)</li>
                      <li>Difficulty concentrating, remembering, or making decisions</li>
                      <li>Fatigue or loss of energy</li>
                      <li>Feeling guilty, hopeless, or worthless</li>
                      <li>Thoughts of suicide or death</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <p className="text-amber-800 dark:text-amber-200 font-medium">
                        A quick, easy, and confidential way to determine if you may be experiencing depression is to take a screening. 
                        A screening is not a diagnosis, but a way of understanding if your symptoms are having enough of an impact that you should seek help.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Treatments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                      Depression is very treatable, with the overwhelming majority of those who seek treatment showing improvement. 
                      The choice of treatment depends on the pattern, severity, persistence of depressive symptoms, and the history of the illness. 
                      As with many illnesses, early treatment is more effective and helps prevent the likelihood of serious recurrences.
                    </p>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        Depression must be treated by a physician or qualified mental health professional.
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
                      Anxiety Disorders
                    </Link>
                    <Link to="/mental-health-library/bipolar-disorder" className="block text-primary hover:underline">
                      Bipolar Disorder
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
                      <strong>Category:</strong> Mood Disorder
                    </div>
                    <div>
                      <strong>Prevalence:</strong> One of the most common mental illnesses
                    </div>
                    <div>
                      <strong>Treatability:</strong> Very treatable with professional help
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Healing Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Depression is highly treatable. Our licensed therapists are here to provide the support and professional care you deserve.
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

export default Depression;