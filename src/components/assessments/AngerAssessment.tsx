import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, AlertTriangle, Shield } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AngerAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  
  // Additional follow-up questions
  const [sleepLoss, setSleepLoss] = useState(false);
  const [shortSleepHighEnergy, setShortSleepHighEnergy] = useState(false);

  const questions = [
    "Over the last 2 weeks, how often have you felt irritable or angry most days (low frustration tolerance)?",
    "Over the last 2 weeks, how often have you had anger surges (yelling, cursing, slamming doors)?",
    "Over the last 2 weeks, how often have you found it hard to control what you said or did when angry?",
    "Over the last 2 weeks, how often have you noticed body signs (muscle tension, heat in face, pounding heart) that were hard to settle?",
    "Over the last 2 weeks, how often have you said or done things you regret (insults, cutting remarks, hostile texts)?",
    "Over the last 2 weeks, how often has anger impacted your work, relationships, or legal standing (warnings, conflicts, HR write-ups)?",
    "Over the last 2 weeks, how often have you used alcohol, cannabis, or other drugs before or during anger episodes?",
    "Over the last 2 weeks, how often have you threatened or hurt someone or damaged property when angry?"
  ];

  const responseLabels = [
    "Not at all",
    "Several days", 
    "More than half the days",
    "Nearly every day"
  ];

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleBackToTests = () => {
    navigate('/mental-health-tests');
  };

  const calculateResults = () => {
    const score = answers.reduce((total, answer) => total + parseInt(answer || "0"), 0);
    
    let severity = "";
    let resultText = "";
    
    if (score <= 4) {
      severity = "None/Minimal";
      resultText = "Your responses do not indicate significant anger/irritability problems right now. This is not a diagnosis.";
    } else if (score <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild anger/irritability. This is not a diagnosis.";
    } else if (score <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate anger/irritability. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe anger/irritability. This is not a diagnosis.";
    }

    // Safety and risk flags
    const harmRisk = parseInt(answers[7] || "0") >= 1; // Item 8: threats/harm
    const substanceFlag = parseInt(answers[6] || "0") >= 2; // Item 7: substance use
    const highArousal = parseInt(answers[3] || "0") >= 2; // Item 4: body signs
    const roleImpact = parseInt(answers[5] || "0") >= 2; // Item 6: work/relationship impact
    const regretHarm = parseInt(answers[4] || "0") >= 2; // Item 5: regretful actions
    const controlIssues = parseInt(answers[2] || "0") >= 2; // Item 3: control problems

    const showSafetyOverlay = harmRisk;
    const priorityOutreach = (severity === "Severe") || 
                           (severity === "Moderate" && (roleImpact || regretHarm || harmRisk));

    const recommendations = generateRecommendations(score, severity, {
      harmRisk,
      substanceFlag,
      highArousal,
      roleImpact,
      regretHarm,
      controlIssues,
      showSafetyOverlay
    });

    return {
      score,
      severity,
      resultText,
      recommendations,
      showSafetyOverlay,
      priorityOutreach,
      riskFlags: {
        harmRisk,
        substanceFlag,
        highArousal,
        roleImpact,
        regretHarm,
        controlIssues
      },
      additionalInfo: {
        sleepLoss,
        shortSleepHighEnergy
      }
    };
  };

  const generateRecommendations = (score: number, severity: string, flags: any) => {
    if (flags.showSafetyOverlay) {
      return {
        today: [
          "SAFETY FIRST: If you might harm someone or destroy property, remove yourself from the situation",
          "If danger is imminent, call 911",
          "Call, text, or chat 988 for crisis support",
          "If experiencing partner violence, contact the Domestic Violence Hotline for safety planning",
          "Eliminate alcohol/other drugs during conflicts"
        ],
        thisWeek: [
          "Begin weekly CBT-anger or DBT skills therapy immediately",
          "Create a written behavior contract (triggers, time-outs, alternatives)",
          "Consider couples work only when safe and both partners want it",
          "Individual therapy + safety planning is preferable when violence is present"
        ],
        followUp: "PRIORITY: Emergency safety planning and immediate professional support needed"
      };
    }

    if (score <= 4) {
      return {
        today: [
          "Identify one small trigger and your earliest body cue (e.g., jaw clench)",
          "Practice paced breathing: inhale 4 seconds, exhale 6 seconds for 3 minutes"
        ],
        thisWeek: [
          "Do one values-consistent action where mild irritation would usually derail you",
          "Re-screen in 4-6 weeks if irritation grows"
        ],
        followUp: "Consider preventive skills consult with MentalSpace Therapy"
      };
    } else if (score <= 9) {
      return {
        today: [
          "Learn the S.T.O.P. skill (Stop–Take a breath–Observe–Proceed on purpose)",
          "Draft a Trigger→Thought→Action chain for one recent flare; write a reappraisal"
        ],
        thisWeek: [
          "Time-out plan: step away 10-20 min when arousal ≥7/10; always return to resolve",
          "Communication swap: use 'I-statements' + specific ask in your next hard conversation",
          "Brief CBT-anger/DBT skills coaching"
        ],
        followUp: "Re-screen in 2-4 weeks"
      };
    } else if (score <= 14) {
      return {
        today: [
          "Build a 5-step exposure/skills ladder for a real trigger",
          "At each rung: S.T.O.P., reappraise, urge-surf for 10 min, then respond",
          "If using substances, delay drinking/using until after conflicts are resolved"
        ],
        thisWeek: [
          "Start structured CBT-anger (weekly): trigger analysis, cognitive restructuring",
          "Consider DBT skills blocks (distress tolerance, emotion regulation, mindfulness)",
          "Practice behavioral rehearsal/role-plays and planned exposure to triggers"
        ],
        followUp: "Re-screen in 2-4 weeks; escalate if limited change"
      };
    } else {
      return {
        today: [
          "SAFETY FIRST: Remove yourself if you might harm someone or destroy property",
          "Call 911 if danger is imminent; use 988 for crisis support",
          "Eliminate alcohol/other drugs during conflicts",
          "Create immediate safety plan if violence risk exists"
        ],
        thisWeek: [
          "Begin weekly CBT-anger or DBT skills (or combined) immediately",
          "Between-session practice every 1-2 days",
          "Create written behavior contract with specific triggers and consequences",
          "Treat underlying disorders (depression, PTSD, bipolar, ADHD) if present"
        ],
        followUp: "PRIORITY: Immediate professional intervention within 24-72 hours"
      };
    }
  };

  const handleFinish = () => {
    const results = calculateResults();
    navigate('/assessment-contact', { 
      state: { 
        assessmentType: 'Anger & Irritability Assessment',
        ...results
      } 
    });
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Safety warning for question 8 (threats/harm)
  const showSafetyWarning = currentQuestion === 7 && answers[7] && parseInt(answers[7]) >= 1;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={handleBackToTests}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Assessments
        </Button>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Anger & Irritability Assessment</CardTitle>
            <CardDescription>
              This assessment looks at anger and irritability over the last 2 weeks. 
              This takes 2-3 minutes and is not a diagnosis.
            </CardDescription>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {showSafetyWarning && (
              <Alert className="border-red-500 bg-red-50">
                <Shield className="h-4 w-4" />
                <AlertDescription className="text-red-800">
                  <strong>Safety Alert:</strong> If you are in immediate danger or someone else is at risk of harm, 
                  call 911 immediately. For crisis support, call/text/chat 988. If experiencing partner violence, 
                  contact the Domestic Violence Hotline for safety planning.
                </AlertDescription>
              </Alert>
            )}

            <div>
              <h3 className="text-lg font-medium mb-4">{questions[currentQuestion]}</h3>
              
              <RadioGroup 
                value={answers[currentQuestion] || ""} 
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {responseLabels.map((label, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer">
                      {label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Additional questions on last question */}
            {isLastQuestion && (
              <div className="space-y-4 pt-4 border-t">
                <h4 className="font-medium">Additional Information (Optional)</h4>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="sleep-loss" 
                      checked={sleepLoss} 
                      onCheckedChange={(checked) => setSleepLoss(checked === true)} 
                    />
                    <Label htmlFor="sleep-loss">Sleep loss contributing to irritability</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="short-sleep-high-energy" 
                      checked={shortSleepHighEnergy} 
                      onCheckedChange={(checked) => setShortSleepHighEnergy(checked === true)} 
                    />
                    <Label htmlFor="short-sleep-high-energy">Very short sleep with high energy (may suggest bipolar screening)</Label>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              {isLastQuestion ? (
                <Button 
                  onClick={handleFinish}
                  disabled={!answers[currentQuestion]}
                  className="bg-primary hover:bg-primary/90"
                >
                  View Results
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                >
                  Next
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="max-w-2xl mx-auto mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Important:</strong> This self-check is educational and does not replace professional evaluation. 
            If someone is in immediate danger, call <strong>911</strong>. For emotional crisis support, 
            call/text/chat <a href="tel:988" className="text-primary hover:underline font-medium">988</a>. 
            If you are experiencing partner violence, you can create a personalized safety plan through the 
            <a href="https://www.thehotline.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium ml-1">
              Domestic Violence Hotline
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AngerAssessment;