import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BingeEatingAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [compensation, setCompensation] = useState(false);
  const [nightEating, setNightEating] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [probableOSA, setProbableOSA] = useState(false);
  const [pregnant, setPregnant] = useState(false);
  const [cannotDoEssentials, setCannotDoEssentials] = useState(false);

  const questions = [
    "I had episodes of eating an unusually large amount of food in a short period with loss of control",
    "During those episodes, I ate much more rapidly than normal",
    "I ate until uncomfortably full",
    "I ate when not physically hungry",
    "I ate alone because of embarrassment",
    "I felt disgusted, depressed, or very guilty after eating",
    "How often did binge episodes occur (typical week over the past 3 months)?",
    "Distress or impairment (work/school/relationships/health) due to binge eating"
  ];

  const getScaleLabels = (questionIndex: number) => {
    if (questionIndex === 6) {
      // Item 7 uses banded frequency
      return [
        "None",
        "Less than 1 day/week",
        "1-3 days/week", 
        "4+ days/week"
      ];
    }
    return [
      "Not at all",
      "Several days", 
      "More than half the days",
      "Nearly every day"
    ];
  };

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(value);
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

  const calculateResults = () => {
    const totalScore = answers.reduce((sum, answer) => sum + Math.max(0, answer), 0);
    
    let severity = "";
    let resultText = "";
    
    if (totalScore <= 4) {
      severity = "None/Minimal";
      resultText = "Your responses do not indicate significant binge-eating symptoms right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild binge-eating symptoms. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate binge-eating symptoms. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe binge-eating symptoms. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // High episode frequency (Item 7 ≥2) → Priority Therapy flag + Evening High-Risk Routine
    if (answers[6] >= 2) {
      addOns.push({
        type: "priority-therapy-evening-routine-builder",
        title: "High-Frequency Episode Support",
        content: "Priority therapy scheduling + Evening high-risk routine builder (structured activities 7-11 pm, kitchen closed, pre-planned snack)."
      });
    }

    // Embarrassment/eating alone (Item 5 ≥2) → Shame-resilience card
    if (answers[4] >= 2) {
      addOns.push({
        type: "shame-resilience-social-eating-exposure",
        title: "Social Eating Support",
        content: "Shame-resilience interventions: graded social-eating exposures; values-based reasons for recovery."
      });
    }

    // Guilt/disgust (Item 6 ≥2) → Self-compassion & relapse-learning worksheet
    if (answers[5] >= 2) {
      addOns.push({
        type: "self-compassion-relapse-learning",
        title: "Self-Compassion Tools",
        content: "Self-compassion & relapse-learning worksheet: separate lapse from relapse; \"next best step\" plan."
      });
    }

    // Not hungry (Item 4 ≥2) → Hunger/fullness retraining
    if (answers[3] >= 2) {
      addOns.push({
        type: "hunger-fullness-retraining",
        title: "Hunger Awareness Training",
        content: "Hunger/fullness retraining using 0-10 scale; eat at 3-7 window to reconnect with body signals."
      });
    }

    // Rapid eating (Item 2 ≥2) → Pace tools
    if (answers[1] >= 2) {
      addOns.push({
        type: "pacing-20min-meal",
        title: "Mindful Eating Pace Tools",
        content: "Pace tools: put utensil down between bites; 20-minute meal target for mindful consumption."
      });
    }

    // Night eating → Evening routine + sleep skills
    if (nightEating) {
      addOns.push({
        type: "evening-routine-cbt-i-lite",
        title: "Night Eating Support",
        content: "Evening routine + sleep skills: wind-down, light snack with protein/fiber, screens-off, consistent wake time."
      });
    }

    // Compensation → Bulimia/Eating-Concerns module + medical-risk note
    if (compensation) {
      addOns.push({
        type: "bulimia-module-medical-risk-note",
        title: "CRITICAL: Compensatory Behavior Risk",
        content: "Bulimia/Eating-Concerns assessment needed + medical-risk evaluation (electrolytes/ECG if purging)."
      });
    }

    // Medical conditions → PCP coordination card
    if (diabetes || probableOSA || pregnant) {
      addOns.push({
        type: "pcp-coordination-card",
        title: "Medical Coordination Needed",
        content: "PCP coordination for metabolic/OSA evaluation; perinatal counseling if pregnant/trying to conceive."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Binge-Eating Behaviors",
      maxScore: 24,
      hasCompensation: compensation,
      hasMedicalRisk: diabetes || probableOSA || pregnant,
      hasHighFrequency: answers[6] >= 2
    };
  };

  const handleFinish = () => {
    const results = calculateResults();
    navigate("/assessment-contact", { 
      state: {
        assessmentType: results.assessmentType,
        score: results.score,
        severity: results.severity,
        resultText: results.resultText,
        addOns: results.addOns,
        maxScore: results.maxScore,
        hasCompensation: results.hasCompensation,
        hasMedicalRisk: results.hasMedicalRisk,
        hasHighFrequency: results.hasHighFrequency
      }
    });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoNext = answers[currentQuestion] !== -1;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const renderAdditionalQuestions = () => {
    if (isLastQuestion) {
      return (
        <div className="mt-6 space-y-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium">Additional Information (for personalized care)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="compensation"
              checked={compensation}
              onCheckedChange={(checked) => setCompensation(checked as boolean)}
            />
            <Label htmlFor="compensation" className="text-sm leading-relaxed">
              I engage in vomiting, laxatives/diuretics, or excessive exercise to "undo" eating
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="night-eating"
              checked={nightEating}
              onCheckedChange={(checked) => setNightEating(checked as boolean)}
            />
            <Label htmlFor="night-eating" className="text-sm leading-relaxed">
              I eat ≥25% of my daily intake after the evening meal or have nocturnal eating episodes
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="diabetes"
              checked={diabetes}
              onCheckedChange={(checked) => setDiabetes(checked as boolean)}
            />
            <Label htmlFor="diabetes" className="text-sm leading-relaxed">
              I have diabetes or blood sugar concerns
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="probable-osa"
              checked={probableOSA}
              onCheckedChange={(checked) => setProbableOSA(checked as boolean)}
            />
            <Label htmlFor="probable-osa" className="text-sm leading-relaxed">
              I have probable sleep apnea (snoring, daytime sleepiness)
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="pregnant"
              checked={pregnant}
              onCheckedChange={(checked) => setPregnant(checked as boolean)}
            />
            <Label htmlFor="pregnant" className="text-sm leading-relaxed">
              I am pregnant or trying to conceive
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cannot-do-essentials"
              checked={cannotDoEssentials}
              onCheckedChange={(checked) => setCannotDoEssentials(checked as boolean)}
            />
            <Label htmlFor="cannot-do-essentials" className="text-sm leading-relaxed">
              I cannot fulfill major role obligations due to binge eating
            </Label>
          </div>
        </div>
      );
    }
    return null;
  };

  const scaleLabels = getScaleLabels(currentQuestion);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/mental-health-tests")}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          
          <Progress value={progress} className="mb-6" />
          
          <CardTitle className="text-xl text-center mb-2">
            Binge-Eating Behaviors Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the last <strong>3 months</strong>, how often have you experienced the following?
          </p>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-6 leading-relaxed">
                {questions[currentQuestion]}
              </h3>
            </div>

            <RadioGroup 
              value={answers[currentQuestion]?.toString() || ""} 
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {scaleLabels.map((label, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-sm leading-relaxed"
                  >
                    <span className="font-medium">{index}</span> - {label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {renderAdditionalQuestions()}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              {isLastQuestion ? (
                <Button
                  onClick={handleFinish}
                  disabled={!canGoNext}
                  className="flex items-center gap-2"
                >
                  View Results
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!canGoNext}
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="fixed bottom-4 left-4 right-4 max-w-4xl mx-auto">
        <div className="bg-muted/80 backdrop-blur-sm rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground">
            This self-check takes ~2-3 minutes and looks at binge-eating patterns over the past 3 months. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call/text/chat 988 (24/7). In a medical emergency, call 911.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BingeEatingAssessment;