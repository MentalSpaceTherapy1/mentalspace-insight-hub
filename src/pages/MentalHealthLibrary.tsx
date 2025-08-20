import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Heart, Users, Activity, ArrowRight, Sparkles } from 'lucide-react';

// Import person images
import depressionPerson from '@/assets/depression-person.jpg';
import anxietyPerson from '@/assets/anxiety-person.jpg';
import adhdPerson from '@/assets/adhd-person.jpg';
import ptsdPerson from '@/assets/ptsd-person.jpg';
import bipolarPerson from '@/assets/bipolar-person.jpg';
import bpdPerson from '@/assets/bpd-person.jpg';

const MentalHealthLibrary = () => {
  const conditions = [
    {
      title: "Depression",
      description: "Major depression is one of the most common mental illnesses, causing people to lose pleasure in daily life.",
      category: "Mood Disorders",
      icon: Heart,
      slug: "depression",
      image: depressionPerson,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50 via-purple-50 to-pink-50",
      darkBgGradient: "from-blue-950/30 via-purple-950/30 to-pink-950/30"
    },
    {
      title: "Anxiety",
      description: "Anxiety disorders cause people to feel frightened, distressed and uneasy for no apparent reason.",
      category: "Anxiety Disorders", 
      icon: Brain,
      slug: "anxiety",
      image: anxietyPerson,
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      bgGradient: "from-green-50 via-teal-50 to-cyan-50",
      darkBgGradient: "from-green-950/30 via-teal-950/30 to-cyan-950/30"
    },
    {
      title: "ADHD",
      description: "Attention-deficit hyperactivity disorder is one of the most common reasons children are referred for mental health services.",
      category: "Neurodevelopmental Disorders",
      icon: Activity,
      slug: "adhd",
      image: adhdPerson,
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-50 via-amber-50 to-yellow-50",
      darkBgGradient: "from-orange-950/30 via-amber-950/30 to-yellow-950/30"
    },
    {
      title: "PTSD",
      description: "Post-traumatic stress disorder can occur following the experience or witnessing of a traumatic event.",
      category: "Trauma Disorders",
      icon: Brain,
      slug: "ptsd",
      image: ptsdPerson,
      gradient: "from-red-500 via-rose-500 to-pink-500",
      bgGradient: "from-red-50 via-rose-50 to-pink-50",
      darkBgGradient: "from-red-950/30 via-rose-950/30 to-pink-950/30"
    },
    {
      title: "Bipolar Disorder",
      description: "A mental health disorder characterized by extreme highs and lows in mood and energy.",
      category: "Mood Disorders",
      icon: Heart,
      slug: "bipolar-disorder",
      image: bipolarPerson,
      gradient: "from-indigo-500 via-purple-500 to-violet-500",
      bgGradient: "from-indigo-50 via-purple-50 to-violet-50",
      darkBgGradient: "from-indigo-950/30 via-purple-950/30 to-violet-950/30"
    },
    {
      title: "Borderline Personality Disorder",
      description: "A disorder of emotion regulation affecting millions of people.",
      category: "Personality Disorders",
      icon: Users,
      slug: "borderline-personality-disorder",
      image: bpdPerson,
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      bgGradient: "from-emerald-50 via-teal-50 to-green-50",
      darkBgGradient: "from-emerald-950/30 via-teal-950/30 to-green-950/30"
    },
    {
      title: "Narcissistic Personality Disorder",
      description: "A serious mental health condition characterized by difficulty relating to others and lack of true self-worth.",
      category: "Personality Disorders",
      icon: Users,
      slug: "narcissistic-personality-disorder",
      image: bpdPerson,
      gradient: "from-slate-500 via-gray-500 to-zinc-500",
      bgGradient: "from-slate-50 via-gray-50 to-zinc-50",
      darkBgGradient: "from-slate-950/30 via-gray-950/30 to-zinc-950/30"
    },
    {
      title: "Dissociative Identity Disorder",
      description: "A severe form of dissociation that causes a lack of connection in thoughts, memory and sense of identity.",
      category: "Dissociative Disorders",
      icon: Brain,
      slug: "dissociative-identity-disorder",
      image: ptsdPerson,
      gradient: "from-fuchsia-500 via-purple-500 to-violet-500",
      bgGradient: "from-fuchsia-50 via-purple-50 to-violet-50",
      darkBgGradient: "from-fuchsia-950/30 via-purple-950/30 to-violet-950/30"
    },
    {
      title: "Oppositional Defiant Disorder",
      description: "A type of behavior disorder mostly diagnosed in childhood, characterized by uncooperative and defiant behavior.",
      category: "Behavioral Disorders",
      icon: Activity,
      slug: "oppositional-defiant-disorder",
      image: adhdPerson,
      gradient: "from-red-500 via-orange-500 to-amber-500",
      bgGradient: "from-red-50 via-orange-50 to-amber-50",
      darkBgGradient: "from-red-950/30 via-orange-950/30 to-amber-950/30"
    },
    {
      title: "Body Dysmorphic Disorder",
      description: "A mental illness characterized by persistent preoccupation with perceived defects in physical appearance.",
      category: "Body-Related Disorders",
      icon: Heart,
      slug: "body-dysmorphic-disorder",
      image: anxietyPerson,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-50 via-rose-50 to-red-50",
      darkBgGradient: "from-pink-950/30 via-rose-950/30 to-red-950/30"
    },
    {
      title: "Panic Disorder",
      description: "Characterized by unexpected and repeated episodes of intense fear accompanied by physical symptoms.",
      category: "Anxiety Disorders",
      icon: Brain,
      slug: "panic-disorder",
      image: anxietyPerson,
      gradient: "from-sky-500 via-blue-500 to-indigo-500",
      bgGradient: "from-sky-50 via-blue-50 to-indigo-50",
      darkBgGradient: "from-sky-950/30 via-blue-950/30 to-indigo-950/30"
    },
    {
      title: "Social Anxiety Disorder",
      description: "An anxiety disorder characterized by extreme fear or anxiety in one or more social settings.",
      category: "Anxiety Disorders",
      icon: Users,
      slug: "social-anxiety-disorder",
      image: anxietyPerson,
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      bgGradient: "from-teal-50 via-cyan-50 to-blue-50",
      darkBgGradient: "from-teal-950/30 via-cyan-950/30 to-blue-950/30"
    },
    {
      title: "Obsessive Compulsive Disorder",
      description: "Characterized by recurrent unwanted thoughts (obsessions) or rituals (compulsions).",
      category: "Anxiety Disorders",
      icon: Brain,
      slug: "obsessive-compulsive-disorder",
      image: anxietyPerson,
      gradient: "from-violet-500 via-indigo-500 to-blue-500",
      bgGradient: "from-violet-50 via-indigo-50 to-blue-50",
      darkBgGradient: "from-violet-950/30 via-indigo-950/30 to-blue-950/30"
    },
    {
      title: "Antisocial Personality Disorder",
      description: "A mental disorder where a person consistently shows no regard for right and wrong.",
      category: "Personality Disorders",
      icon: Users,
      slug: "antisocial-personality-disorder",
      image: bpdPerson,
      gradient: "from-stone-500 via-neutral-500 to-gray-500",
      bgGradient: "from-stone-50 via-neutral-50 to-gray-50",
      darkBgGradient: "from-stone-950/30 via-neutral-950/30 to-gray-950/30"
    },
    {
      title: "Adjustment Disorder",
      description: "Stress-related conditions caused by significant changes or stressors in life.",
      category: "Stress-Related Disorders",
      icon: Heart,
      slug: "adjustment-disorder",
      image: depressionPerson,
      gradient: "from-lime-500 via-green-500 to-emerald-500",
      bgGradient: "from-lime-50 via-green-50 to-emerald-50",
      darkBgGradient: "from-lime-950/30 via-green-950/30 to-emerald-950/30"
    },
    {
      title: "Substance Use Disorder",
      description: "A disease that affects a person's brain and behavior, leading to inability to control drug use.",
      category: "Addiction Disorders",
      icon: Activity,
      slug: "substance-use-disorder",
      image: ptsdPerson,
      gradient: "from-amber-500 via-yellow-500 to-lime-500",
      bgGradient: "from-amber-50 via-yellow-50 to-lime-50",
      darkBgGradient: "from-amber-950/30 via-yellow-950/30 to-lime-950/30"
    },
    {
      title: "Anorexia",
      description: "An eating disorder characterized by abnormally low body weight and intense fear of gaining weight.",
      category: "Eating Disorders",
      icon: Heart,
      slug: "anorexia",
      image: depressionPerson,
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      bgGradient: "from-rose-50 via-pink-50 to-fuchsia-50",
      darkBgGradient: "from-rose-950/30 via-pink-950/30 to-fuchsia-950/30"
    },
    {
      title: "Co-dependency",
      description: "A learned behavior that affects an individual's ability to have healthy, mutually satisfying relationships.",
      category: "Relationship Disorders",
      icon: Users,
      slug: "co-dependency",
      image: bpdPerson,
      gradient: "from-cyan-500 via-sky-500 to-blue-500",
      bgGradient: "from-cyan-50 via-sky-50 to-blue-50",
      darkBgGradient: "from-cyan-950/30 via-sky-950/30 to-blue-950/30"
    }
  ];

  const categories = [...new Set(conditions.map(c => c.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 py-20">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/50 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-white/30 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center text-white animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-bold">
                  Mental Health Library
                </h1>
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
                🧠 Discover comprehensive information about mental health conditions with real stories of hope and recovery. 
                Your journey to understanding and healing starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl group" asChild>
                  <Link to="/get-started">
                    Get Professional Help
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-violet-600 hover:scale-105 transition-all duration-300" asChild>
                  <Link to="/emergency-resources">Emergency Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                🌟 Browse Mental Health Conditions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet real people on their journey to recovery. Each condition is presented with hope, understanding, and professional guidance.
              </p>
            </div>

            {categories.map((category, categoryIndex) => (
              <div key={category} className="mb-16 animate-fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {category}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {conditions
                    .filter(condition => condition.category === category)
                    .map((condition, index) => {
                      const IconComponent = condition.icon;
                      return (
                        <div key={condition.slug} className="group animate-scale-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                          <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                            {/* Image with gradient overlay */}
                            <div className="relative h-48 overflow-hidden">
                              <img 
                                src={condition.image} 
                                alt={`Person representing ${condition.title}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-br ${condition.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                              <div className={`absolute inset-0 bg-gradient-to-t ${condition.bgGradient} dark:${condition.darkBgGradient} opacity-20`}></div>
                              
                              {/* Icon overlay */}
                              <div className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                <IconComponent className="h-6 w-6 text-white" />
                              </div>
                              
                              {/* Category badge */}
                              <div className="absolute bottom-4 left-4">
                                <span className="px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                  {condition.category}
                                </span>
                              </div>
                            </div>

                            <CardHeader className="pb-3">
                              <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                {condition.title}
                              </CardTitle>
                              <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                {condition.description}
                              </CardDescription>
                            </CardHeader>
                            
                            <CardContent className="pt-0">
                              <Button asChild className={`w-full bg-gradient-to-r ${condition.gradient} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                                <Link to={`/mental-health-library/${condition.slug}`}>
                                  Learn More & Find Hope
                                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
            <div className="max-w-4xl mx-auto text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                ✨ Ready to Transform Your Life? ✨
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
                🌈 You don't have to face this alone. Our compassionate licensed therapists are here to guide 
                you toward healing, growth, and the life you deserve. Take the first brave step today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-4 group" asChild>
                  <Link to="/therapist-matching">
                    🤝 Find Your Perfect Therapist Match
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300 text-lg px-8 py-4" asChild>
                  <Link to="/get-started">🚀 Start Your Journey Now</Link>
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-semibold">Licensed Professionals</div>
                  <div className="text-white/80">Qualified therapists ready to help</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-2xl mb-2">💝</div>
                  <div className="font-semibold">Personalized Care</div>
                  <div className="text-white/80">Treatment tailored just for you</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-2xl mb-2">🌟</div>
                  <div className="font-semibold">Proven Results</div>
                  <div className="text-white/80">Thousands of success stories</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentalHealthLibrary;