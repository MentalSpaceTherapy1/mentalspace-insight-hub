import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Brain } from "lucide-react";
import DepressionAssessment from "@/components/assessments/DepressionAssessment";
import AnxietyAssessment from "@/components/assessments/AnxietyAssessment";
import PanicAssessment from "@/components/assessments/PanicAssessment";
import SocialAnxietyAssessment from "@/components/assessments/SocialAnxietyAssessment";
import SpecificPhobiaAssessment from "@/components/assessments/SpecificPhobiaAssessment";
import OCDAssessment from "@/components/assessments/OCDAssessment";
import PTSDAssessment from "@/components/assessments/PTSDAssessment";
import ADHDAssessment from "@/components/assessments/ADHDAssessment";
import BipolarAssessment from "@/components/assessments/BipolarAssessment";
import InsomniaAssessment from "@/components/assessments/InsomniaAssessment";
import AlcoholUseAssessment from "@/components/assessments/AlcoholUseAssessment";
import SubstanceUseAssessment from "@/components/assessments/SubstanceUseAssessment";
import NicotineAssessment from "@/components/assessments/NicotineAssessment";
import EatingConcernsAssessment from "@/components/assessments/EatingConcernsAssessment";
import BingeEatingAssessment from "@/components/assessments/BingeEatingAssessment";
import BDDAssessment from "@/components/assessments/BDDAssessment";
import HealthAnxietyAssessment from "@/components/assessments/HealthAnxietyAssessment";
import SomaticSymptomAssessment from "@/components/assessments/SomaticSymptomAssessment";
import GriefAssessment from "@/components/assessments/GriefAssessment";
import PerinatalMoodAssessment from "@/components/assessments/PerinatalMoodAssessment";
import AngerAssessment from "@/components/assessments/AngerAssessment";
import StressBurnoutAssessment from "@/components/assessments/StressBurnoutAssessment";
import MoodTracker from "@/components/assessments/MoodTracker";

const MentalHealthTests = () => {
  const [currentAssessment, setCurrentAssessment] = useState<string | null>(null);

  const tests = [
    {
      title: "Depression Assessment",
      description: "PHQ-9 screening tool to assess symptoms of depression",
      duration: "5-10 minutes",
      icon: Brain,
      color: "bg-blue-500"
    },
    {
      title: "Anxiety Assessment", 
      description: "GAD-7 questionnaire to evaluate generalized anxiety symptoms",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-green-500"
    },
    {
      title: "Panic Assessment",
      description: "Screen for panic symptoms and episodes over the last 4 weeks",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-red-500"
    },
    {
      title: "Social Anxiety Assessment",
      description: "Screen for social/performance anxiety and fear of negative evaluation",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-purple-500"
    },
    {
      title: "Specific Phobia Assessment", 
      description: "Screen for excessive fear of specific objects or situations",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-amber-500"
    },
    {
      title: "OCD Assessment",
      description: "Screen for obsessive-compulsive symptoms and rituals",
      duration: "2-3 minutes", 
      icon: Brain,
      color: "bg-teal-500"
    },
    {
      title: "PTSD Assessment",
      description: "Screen for post-traumatic stress symptoms and trauma responses", 
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-rose-500"
    },
    {
      title: "ADHD Assessment",
      description: "Screen for attention, hyperactivity, and executive function difficulties",
      duration: "3 minutes",
      icon: Brain,
      color: "bg-cyan-500"
    },
    {
      title: "Bipolar Assessment",
      description: "Screen for hypomanic/manic episodes and mood cycling patterns",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-violet-500"
    },
    {
      title: "Insomnia Assessment",
      description: "Screen for sleep initiation, maintenance, and quality issues",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-indigo-500"
    },
    {
      title: "Alcohol Use Assessment",
      description: "Screen for unhealthy alcohol use patterns and safety risks",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-orange-500"
    },
    {
      title: "Substance Use Assessment",
      description: "Screen for unhealthy use of non-alcohol substances and safety risks",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-emerald-500"
    },
    {
      title: "Nicotine Dependence Assessment",
      description: "Screen for nicotine dependence across cigarettes, vaping, and smokeless products",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-amber-600"
    },
    {
      title: "Eating Concerns Assessment",
      description: "Screen for eating disorder risk and disordered eating patterns",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-pink-600"
    },
    {
      title: "Binge-Eating Behaviors Assessment",
      description: "Screen for binge-eating patterns and related distress/impairment",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-red-600"
    },
    {
      title: "Body Dysmorphic Disorder Assessment",
      description: "Screen for appearance-related preoccupations and repetitive behaviors",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-purple-700"
    },
    {
      title: "Health Anxiety Assessment",
      description: "Screen for excessive worry about illness and health-related behaviors",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-blue-700"
    },
    {
      title: "Somatic Symptom Assessment",
      description: "Screen for distressing physical symptoms and related thoughts/behaviors",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-gray-700"
    },
    {
      title: "Prolonged Grief Assessment",
      description: "Screen for persistent, impairing grief reactions after loss",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-slate-700"
    },
    {
      title: "Perinatal Mood & Anxiety Assessment",
      description: "Screen for depression/anxiety during pregnancy and postpartum period",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-pink-700"
    },
    {
      title: "Anger & Irritability Assessment",
      description: "Identify anger frequency, intensity, control, and harm risk",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-red-700"
    },
    {
      title: "Stress & Burnout Assessment",
      description: "Screen for burnout pattern—exhaustion, cynicism, reduced efficacy—and workplace stress",
      duration: "2-3 minutes",
      icon: Brain,
      color: "bg-yellow-700"
    },
    {
      title: "Mood Tracker",
      description: "Quick daily mood assessment to track emotional patterns",
      duration: "2-5 minutes",
      icon: Brain,
      color: "bg-pink-500"
    },
    {
      title: "Wellbeing Check",
      description: "General mental health and wellness screening tool",
      duration: "15-20 minutes",
      icon: Brain,
      color: "bg-slate-500"
    }
  ];

  // Handle assessment navigation
  const handleBackToTests = () => {
    setCurrentAssessment(null);
  };

  // Render specific assessment if selected
  if (currentAssessment === "Depression Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <DepressionAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Anxiety Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <AnxietyAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Panic Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <PanicAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Social Anxiety Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <SocialAnxietyAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Specific Phobia Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <SpecificPhobiaAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "OCD Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <OCDAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "PTSD Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <PTSDAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "ADHD Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <ADHDAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Bipolar Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <BipolarAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Insomnia Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <InsomniaAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Alcohol Use Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <AlcoholUseAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Substance Use Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <SubstanceUseAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Nicotine Dependence Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <NicotineAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Eating Concerns Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <EatingConcernsAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Binge-Eating Behaviors Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <BingeEatingAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Body Dysmorphic Disorder Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <BDDAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Health Anxiety Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <HealthAnxietyAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Somatic Symptom Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <SomaticSymptomAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Prolonged Grief Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <GriefAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Perinatal Mood & Anxiety Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <PerinatalMoodAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Anger & Irritability Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <AngerAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Stress & Burnout Assessment") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <StressBurnoutAssessment />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentAssessment === "Mood Tracker") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-8">
          <MoodTracker />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free Mental Health Tests
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Take our confidential, scientifically-backed assessments to better understand your mental health and get personalized recommendations for care.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span>Quick & Easy</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-500" />
              <span>Clinically Validated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Assessment</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our assessments are based on validated clinical tools used by mental health professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, index) => {
              const IconComponent = test.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${test.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{test.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {test.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{test.duration}</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full group-hover:bg-primary/90 transition-colors"
                      onClick={() => setCurrentAssessment(test.title)}
                    >
                      Start Assessment
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary">Important Notice</h3>
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <p className="text-muted-foreground mb-4">
                These assessments are screening tools designed to help you understand your mental health better. 
                They are not intended to diagnose or replace professional medical advice.
              </p>
              <p className="text-muted-foreground mb-6">
                If you're experiencing severe symptoms or having thoughts of self-harm, please seek immediate help 
                from a mental health professional or contact emergency services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="/emergency-resources">Emergency Resources</a>
                </Button>
                <Button asChild>
                  <a href="/get-started">Connect with a Therapist</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentalHealthTests;