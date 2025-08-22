import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Heart, Users, Briefcase, Moon, Dumbbell, Smile, Target, Shield } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const WellbeingCheck = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      text: "Over the past 2 weeks, how satisfied have you been with your life overall?",
      icon: Smile,
      color: "text-green-500"
    },
    {
      text: "Over the past 2 weeks, how well have you been managing your work-life balance?",
      icon: Briefcase,
      color: "text-blue-500"
    },
    {
      text: "Over the past 2 weeks, how connected have you felt to family and friends?",
      icon: Users,
      color: "text-purple-500"
    },
    {
      text: "Over the past 2 weeks, how would you rate your physical health and energy levels?",
      icon: Dumbbell,
      color: "text-orange-500"
    },
    {
      text: "Over the past 2 weeks, how well have you been sleeping?",
      icon: Moon,
      color: "text-indigo-500"
    },
    {
      text: "Over the past 2 weeks, how effectively have you been managing stress?",
      icon: Shield,
      color: "text-red-500"
    },
    {
      text: "Over the past 2 weeks, how much have you engaged in activities you enjoy?",
      icon: Heart,
      color: "text-pink-500"
    },
    {
      text: "Over the past 2 weeks, how clear have you felt about your goals and sense of purpose?",
      icon: Target,
      color: "text-cyan-500"
    }
  ];

  const responseOptions = [
    { value: "0", label: "Very Poor" },
    { value: "1", label: "Poor" },
    { value: "2", label: "Fair" },
    { value: "3", label: "Good" },
    { value: "4", label: "Very Good" }
  ];

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate and show results
      showResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const showResults = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer), 0);
    const maxScore = questions.length * 4;
    
    let severity = "";
    let resultText = "";
    
    if (totalScore >= 28) {
      severity = "Excellent";
      resultText = "Your wellbeing appears to be excellent across multiple areas of life. You're doing great! Continue maintaining these positive patterns.";
    } else if (totalScore >= 21) {
      severity = "Good";
      resultText = "Your overall wellbeing is good, with some areas potentially needing attention. Consider focusing on the lower-scoring areas.";
    } else if (totalScore >= 14) {
      severity = "Moderate";
      resultText = "Your wellbeing shows moderate concerns across several areas. Professional support could help you develop strategies for improvement.";
    } else {
      severity = "Concerning";
      resultText = "Your wellbeing results suggest significant concerns that may benefit from professional support and intervention.";
    }

    // Generate personalized recommendations
    const recommendations = generateRecommendations();

    const assessmentData = {
      assessmentType: "Wellbeing Check",
      score: totalScore,
      severity,
      resultText,
      maxScore,
      addOns: recommendations
    };

    navigate('/assessment-contact', { state: assessmentData });
  };

  const generateRecommendations = () => {
    const recommendations = [];
    
    // Life satisfaction (Q1)
    if (parseInt(answers[0]) <= 2) {
      recommendations.push({
        type: "life-satisfaction",
        title: "Life Satisfaction Support",
        content: "Consider exploring what aspects of your life feel unfulfilling. Therapy can help identify values-based goals and create meaningful change."
      });
    }

    // Work-life balance (Q2)
    if (parseInt(answers[1]) <= 2) {
      recommendations.push({
        type: "work-life-balance",
        title: "Work-Life Balance",
        content: "Poor work-life balance affects overall wellbeing. Consider setting boundaries, time management strategies, and potentially discussing workload with supervisors."
      });
    }

    // Social connections (Q3)
    if (parseInt(answers[2]) <= 2) {
      recommendations.push({
        type: "social-connection",
        title: "Social Connection",
        content: "Strong relationships are crucial for wellbeing. Consider reaching out to loved ones, joining groups with shared interests, or working with a counselor on social skills."
      });
    }

    // Physical health (Q4)
    if (parseInt(answers[3]) <= 2) {
      recommendations.push({
        type: "physical-health",
        title: "Physical Health",
        content: "Physical and mental health are connected. Consider gentle exercise, nutritious eating, staying hydrated, and consulting healthcare providers if needed."
      });
    }

    // Sleep (Q5)
    if (parseInt(answers[4]) <= 2) {
      recommendations.push({
        type: "sleep-hygiene",
        title: "Sleep Quality",
        content: "Poor sleep affects all areas of wellbeing. Try consistent sleep schedules, limiting screens before bed, and creating a relaxing bedtime routine."
      });
    }

    // Stress management (Q6)
    if (parseInt(answers[5]) <= 2) {
      recommendations.push({
        type: "stress-management",
        title: "Stress Management",
        content: "Chronic stress impacts physical and mental health. Learn stress-reduction techniques like deep breathing, mindfulness, regular breaks, and professional support."
      });
    }

    // Enjoyable activities (Q7)
    if (parseInt(answers[6]) <= 2) {
      recommendations.push({
        type: "enjoyable-activities",
        title: "Engaging in Joy",
        content: "Regular enjoyable activities boost mood and resilience. Schedule time for hobbies, interests, and activities that bring you pleasure and fulfillment."
      });
    }

    // Purpose and goals (Q8)
    if (parseInt(answers[7]) <= 2) {
      recommendations.push({
        type: "purpose-goals",
        title: "Purpose & Goals",
        content: "A sense of purpose enhances wellbeing. Consider exploring your values, setting meaningful goals, and how therapy can help clarify life direction."
      });
    }

    return recommendations;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const IconComponent = currentQ.icon;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Wellbeing Check</CardTitle>
              <CardDescription>
                Question {currentQuestion + 1} of {questions.length}
              </CardDescription>
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <IconComponent className={`h-12 w-12 mx-auto mb-4 ${currentQ.color}`} />
              <h3 className="text-xl font-semibold mb-4">{currentQ.text}</h3>
            </div>

            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {responseOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50">
                  <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                  <Label htmlFor={`option-${option.value}`} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
            >
              {currentQuestion === questions.length - 1 ? 'View Results' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 space-y-4">
        {/* Crisis Support */}
        <Alert>
          <AlertDescription>
            <strong>Need immediate support?</strong> If you're having thoughts of self-harm or suicide, call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
          </AlertDescription>
        </Alert>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            This wellbeing check assesses multiple areas of your life. 
            Results are educational and do not replace professional evaluation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WellbeingCheck;