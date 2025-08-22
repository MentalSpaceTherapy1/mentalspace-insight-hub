import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PerinatalMoodAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  
  // Additional follow-up questions
  const [status, setStatus] = useState("");
  const [breastfeeding, setBreastfeeding] = useState(false);
  const [bipolarHistory, setBipolarHistory] = useState(false);
  const [psychosisFlags, setPsychosisFlags] = useState(false);
  const [intrusiveThoughts, setIntrusiveThoughts] = useState(false);
  const [lowSupport, setLowSupport] = useState(false);

  const questions = [
    "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
    "Over the last 2 weeks, how often have you had little interest or pleasure in doing things (including bonding with your baby or usual activities)?",
    "Over the last 2 weeks, how often have you felt anxious, worried, or keyed up, including intrusive worries about your baby's health or safety?",
    "Over the last 2 weeks, how often have you had sleep trouble (beyond normal infant care needs) or exhaustion that doesn't improve with rest?",
    "Over the last 2 weeks, how often have you experienced appetite changes or weight changes?",
    "Over the last 2 weeks, how often have you felt guilt or worthlessness, such as 'I'm a bad parent/partner'?",
    "Over the last 2 weeks, how often have you had difficulty concentrating or making decisions?",
    "Over the last 2 weeks, how often have you felt irritable or angry in ways that feel out of proportion?",
    "Over the last 2 weeks, how often have you had thoughts of self-harm or that your baby/family would be better off without you?"
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
      resultText = "Your responses do not indicate significant perinatal mood/anxiety symptoms right now. This is not a diagnosis.";
    } else if (score <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild perinatal mood/anxiety symptoms. This is not a diagnosis.";
    } else if (score <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate perinatal mood/anxiety symptoms. This is not a diagnosis.";
    } else if (score <= 19) {
      severity = "Moderately Severe";
      resultText = "Your responses suggest significant perinatal mood/anxiety symptoms. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest significant perinatal mood/anxiety symptoms. This is not a diagnosis.";
    }

    // Check for crisis indicators
    const crisisFlag = parseInt(answers[8] || "0") >= 1;
    const emergencyFlag = psychosisFlags;

    const recommendations = generateRecommendations(score, severity, crisisFlag, emergencyFlag);

    return {
      score,
      severity,
      resultText,
      recommendations,
      crisisFlag,
      emergencyFlag,
      additionalInfo: {
        status,
        breastfeeding,
        bipolarHistory,
        psychosisFlags,
        intrusiveThoughts,
        lowSupport
      }
    };
  };

  const generateRecommendations = (score: number, severity: string, crisisFlag: boolean, emergencyFlag: boolean) => {
    if (crisisFlag || emergencyFlag) {
      return {
        today: [
          "Contact emergency services immediately",
          "Call, text, or chat 988 for crisis support",
          "Go to your nearest emergency department",
          "Ensure you are not alone - contact a trusted support person"
        ],
        thisWeek: [
          "Arrange immediate psychiatric evaluation",
          "Contact your OB/GYN or midwife",
          "Remove access to means of self-harm"
        ],
        followUp: "Emergency care needed - do not delay treatment"
      };
    }

    if (score <= 4) {
      return {
        today: [
          "Keep sleep protection (shared nighttime duties, naps when safe)",
          "Get 5-15 minutes of daylight",
          "Write one ask for support this week (meal, 1-hour break)"
        ],
        thisWeek: [
          "If stressors are high or you have a history of perinatal depression, consider preventive CBT/IPT sessions",
          "Re-screen in 2-4 weeks"
        ],
        followUp: "Consider prevention consult with MentalSpace Therapy"
      };
    } else if (score <= 9) {
      return {
        today: [
          "Choose one mood action (brief walk, shower, 10-minute tidy) and one connection (text/call)",
          "Start a sleep micro-plan (fixed wake time, devices out of bed; one planned nap if possible)"
        ],
        thisWeek: [
          "Begin brief CBT/IPT-perinatal skills: activity scheduling, problem-solving around caregiving",
          "If breastfeeding: review lactation-compatible medication options if needed"
        ],
        followUp: "Re-screen in 2-4 weeks"
      };
    } else if (score <= 14) {
      return {
        today: [
          "Identify two strongest symptoms and pick one skill for each",
          "If intrusive harm thoughts occur without intention, use label-and-allow technique",
          "Enlist support for daily care tasks"
        ],
        thisWeek: [
          "Start structured CBT/IPT with weekly sessions",
          "Discuss medication options if symptoms impair function (often sertraline if breastfeeding)",
          "Follow ACOG guidelines for perinatal treatment"
        ],
        followUp: "Re-screen in 2-4 weeks; escalate if limited response"
      };
    } else {
      return {
        today: [
          "Enlist a support person to assist with sleep coverage and daily care",
          "Remove alcohol/illicit substances",
          "If you've slept <2-3 hours total for >24-48h with racing thoughts, seek same-day evaluation"
        ],
        thisWeek: [
          "Begin weekly CBT/IPT sessions",
          "Arrange medication evaluation (SSRI/SNRI for depression/anxiety)",
          "If breastfeeding, review drug-lactation compatibility",
          "Do not use antidepressant monotherapy if bipolar disorder is suspected"
        ],
        followUp: "Priority scheduling within 24-72 hours"
      };
    }
  };

  const handleFinish = () => {
    const results = calculateResults();
    navigate('/assessment-contact', { 
      state: { 
        assessmentType: 'Perinatal Mood & Anxiety Assessment',
        ...results
      } 
    });
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Crisis warning for question 9
  const showCrisisWarning = currentQuestion === 8 && answers[8] && parseInt(answers[8]) >= 1;

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
            <CardTitle>Perinatal Mood & Anxiety Assessment</CardTitle>
            <CardDescription>
              This assessment looks at mood and anxiety symptoms during pregnancy or the first year after birth. 
              This takes 2-3 minutes and is not a diagnosis.
            </CardDescription>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {showCrisisWarning && (
              <Alert className="border-red-500 bg-red-50">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-red-800">
                  If you're having thoughts of self-harm or harming others, please seek immediate help. 
                  Call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
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
                
                <div>
                  <Label className="text-sm font-medium">Current status:</Label>
                  <RadioGroup value={status} onValueChange={setStatus} className="mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pregnant" id="pregnant" />
                      <Label htmlFor="pregnant">Pregnant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="early-postpartum" id="early-postpartum" />
                      <Label htmlFor="early-postpartum">≤6 weeks postpartum</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="postpartum" id="postpartum" />
                      <Label htmlFor="postpartum">6 weeks-12 months postpartum</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="breastfeeding" 
                      checked={breastfeeding} 
                      onCheckedChange={(checked) => setBreastfeeding(checked === true)} 
                    />
                    <Label htmlFor="breastfeeding">Currently breastfeeding/chestfeeding</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bipolar-history" 
                      checked={bipolarHistory} 
                      onCheckedChange={(checked) => setBipolarHistory(checked === true)} 
                    />
                    <Label htmlFor="bipolar-history">History of bipolar disorder or psychosis</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="psychosis-flags" 
                      checked={psychosisFlags} 
                      onCheckedChange={(checked) => setPsychosisFlags(checked === true)} 
                    />
                    <Label htmlFor="psychosis-flags">Racing thoughts with little/no sleep, hearing/seeing things, severe confusion, or urges to harm self/infant</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="intrusive-thoughts" 
                      checked={intrusiveThoughts} 
                      onCheckedChange={(checked) => setIntrusiveThoughts(checked === true)} 
                    />
                    <Label htmlFor="intrusive-thoughts">Intrusive harm thoughts without intent/plan</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="low-support" 
                      checked={lowSupport} 
                      onCheckedChange={(checked) => setLowSupport(checked === true)} 
                    />
                    <Label htmlFor="low-support">Intimate partner violence or lack of support</Label>
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
            If you have thoughts of harming yourself or anyone else, call/text/chat{" "}
            <a href="tel:988" className="text-primary hover:underline font-medium">988</a> or go to the nearest emergency department.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerinatalMoodAssessment;