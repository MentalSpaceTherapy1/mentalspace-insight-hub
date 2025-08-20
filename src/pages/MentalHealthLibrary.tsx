import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Heart, Users, Activity } from 'lucide-react';

const MentalHealthLibrary = () => {
  const conditions = [
    {
      title: "Depression",
      description: "Major depression is one of the most common mental illnesses, causing people to lose pleasure in daily life.",
      category: "Mood Disorders",
      icon: Heart,
      slug: "depression"
    },
    {
      title: "Anxiety",
      description: "Anxiety disorders cause people to feel frightened, distressed and uneasy for no apparent reason.",
      category: "Anxiety Disorders", 
      icon: Brain,
      slug: "anxiety"
    },
    {
      title: "ADHD",
      description: "Attention-deficit hyperactivity disorder is one of the most common reasons children are referred for mental health services.",
      category: "Neurodevelopmental Disorders",
      icon: Activity,
      slug: "adhd"
    },
    {
      title: "PTSD",
      description: "Post-traumatic stress disorder can occur following the experience or witnessing of a traumatic event.",
      category: "Trauma Disorders",
      icon: Brain,
      slug: "ptsd"
    },
    {
      title: "Bipolar Disorder",
      description: "A mental health disorder characterized by extreme highs and lows in mood and energy.",
      category: "Mood Disorders",
      icon: Heart,
      slug: "bipolar-disorder"
    },
    {
      title: "Borderline Personality Disorder",
      description: "A disorder of emotion regulation affecting millions of people.",
      category: "Personality Disorders",
      icon: Users,
      slug: "borderline-personality-disorder"
    },
    {
      title: "Narcissistic Personality Disorder",
      description: "A serious mental health condition characterized by difficulty relating to others and lack of true self-worth.",
      category: "Personality Disorders",
      icon: Users,
      slug: "narcissistic-personality-disorder"
    },
    {
      title: "Dissociative Identity Disorder",
      description: "A severe form of dissociation that causes a lack of connection in thoughts, memory and sense of identity.",
      category: "Dissociative Disorders",
      icon: Brain,
      slug: "dissociative-identity-disorder"
    },
    {
      title: "Oppositional Defiant Disorder",
      description: "A type of behavior disorder mostly diagnosed in childhood, characterized by uncooperative and defiant behavior.",
      category: "Behavioral Disorders",
      icon: Activity,
      slug: "oppositional-defiant-disorder"
    },
    {
      title: "Body Dysmorphic Disorder",
      description: "A mental illness characterized by persistent preoccupation with perceived defects in physical appearance.",
      category: "Body-Related Disorders",
      icon: Heart,
      slug: "body-dysmorphic-disorder"
    },
    {
      title: "Panic Disorder",
      description: "Characterized by unexpected and repeated episodes of intense fear accompanied by physical symptoms.",
      category: "Anxiety Disorders",
      icon: Brain,
      slug: "panic-disorder"
    },
    {
      title: "Social Anxiety Disorder",
      description: "An anxiety disorder characterized by extreme fear or anxiety in one or more social settings.",
      category: "Anxiety Disorders",
      icon: Users,
      slug: "social-anxiety-disorder"
    },
    {
      title: "Obsessive Compulsive Disorder",
      description: "Characterized by recurrent unwanted thoughts (obsessions) or rituals (compulsions).",
      category: "Anxiety Disorders",
      icon: Brain,
      slug: "obsessive-compulsive-disorder"
    },
    {
      title: "Antisocial Personality Disorder",
      description: "A mental disorder where a person consistently shows no regard for right and wrong.",
      category: "Personality Disorders",
      icon: Users,
      slug: "antisocial-personality-disorder"
    },
    {
      title: "Adjustment Disorder",
      description: "Stress-related conditions caused by significant changes or stressors in life.",
      category: "Stress-Related Disorders",
      icon: Heart,
      slug: "adjustment-disorder"
    },
    {
      title: "Substance Use Disorder",
      description: "A disease that affects a person's brain and behavior, leading to inability to control drug use.",
      category: "Addiction Disorders",
      icon: Activity,
      slug: "substance-use-disorder"
    },
    {
      title: "Anorexia",
      description: "An eating disorder characterized by abnormally low body weight and intense fear of gaining weight.",
      category: "Eating Disorders",
      icon: Heart,
      slug: "anorexia"
    },
    {
      title: "Co-dependency",
      description: "A learned behavior that affects an individual's ability to have healthy, mutually satisfying relationships.",
      category: "Relationship Disorders",
      icon: Users,
      slug: "co-dependency"
    }
  ];

  const categories = [...new Set(conditions.map(c => c.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mental Health Library
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Comprehensive information about mental health conditions, their causes, symptoms, and treatments. 
                Understanding mental health is the first step toward healing and recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/get-started">Get Professional Help</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/emergency-resources">Emergency Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse Mental Health Conditions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore detailed information about various mental health conditions. Each page includes causes, symptoms, and treatment options.
              </p>
            </div>

            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-primary">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {conditions
                    .filter(condition => condition.category === category)
                    .map((condition) => {
                      const IconComponent = condition.icon;
                      return (
                        <Card key={condition.slug} className="hover:shadow-lg transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <IconComponent className="h-6 w-6 text-primary" />
                              </div>
                              <CardTitle className="text-xl">{condition.title}</CardTitle>
                            </div>
                            <CardDescription className="text-sm text-muted-foreground">
                              {condition.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button asChild className="w-full">
                              <Link to={`/mental-health-library/${condition.slug}`}>
                                Learn More
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you're struggling with any of these conditions, professional help is available. 
              Our licensed therapists are here to support you on your journey to wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/therapist-matching">Find a Therapist</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/get-started">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentalHealthLibrary;