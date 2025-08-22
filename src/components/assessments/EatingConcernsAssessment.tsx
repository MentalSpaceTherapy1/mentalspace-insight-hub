import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EatingConcernsAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [medicalRedFlags, setMedicalRedFlags] = useState(false);
  const [dailyPurging, setDailyPurging] = useState(false);
  const [pregnant, setPregnant] = useState(false);
  const [cannotDoEssentials, setCannotDoEssentials] = useState(false);

  const questions = [
    "Episodes of eating unusually large amounts with loss of control",
    "Restricting intake (skipping meals, fasting, rigid rules) or excessive dietary restraint",
    "Significant weight loss or others concerned you are \"too thin\"",
    "Compensatory behaviors: vomiting, laxatives/diuretics, exercise to \"undo\" eating",
    "Preoccupation with food/weight/shape (dominates thoughts)",
    "Belief you are fat or \"look wrong\" even when others disagree",
    "Secretive eating because of embarrassment/shame",
    "Fear of weight gain that strongly influences eating/activity"
  ];

  const scaleLabels = [
    "Not at all",
    "Several days", 
    "More than half the days",
    "Nearly every day"
  ];

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
      resultText = "Your responses do not indicate significant eating-related concerns right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild eating-related concerns. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate eating-related concerns. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe eating-related concerns. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Purging behaviors (Item 4 ≥1) → Medical-risk card
    if (answers[3] >= 1) {
      addOns.push({
        type: "medical-risk-labs-ecg-card",
        title: "CRITICAL: Medical Risk Assessment Needed",
        content: "Hypokalemia/arrhythmia risk; same-week labs + ECG; dental/esophageal considerations; hydrate; avoid further laxatives/diuretics."
      });
    }

    // Significant weight loss/"too thin" (Item 3 ≥1) → Refeeding-risk caution
    if (answers[2] >= 1) {
      addOns.push({
        type: "refeeding-risk-caution",
        title: "Refeeding Risk Caution",
        content: "Seek medical oversight for nutrition increases; watch electrolytes/phosphate. Medical guidance is essential for safe weight restoration."
      });
    }

    // Loss-of-control eating (Item 1 ≥2) → Binge-Eating Disorder module prompt
    if (answers[0] >= 2) {
      addOns.push({
        type: "bed-next-module",
        title: "Binge-Eating Support",
        content: "Consider Binge-Eating Disorder-focused care; include stimulus control (eat at table, no screens) and regularization tips."
      });
    }

    // Rigid rules/fear of weight gain (Items 2 or 8 ≥2) → CBT-E cognitive tools
    if (answers[1] >= 2 || answers[7] >= 2) {
      addOns.push({
        type: "cbt-e-rules-flexibility",
        title: "Rule Flexibility Training",
        content: "CBT-E cognitive tools: evaluate rules; graded flexibility tasks; \"forbidden food\" ladder for gradual exposure."
      });
    }

    // Body-image over-evaluation (Item 6 ≥2) → Body-image module
    if (answers[5] >= 2) {
      addOns.push({
        type: "body-image-module",
        title: "Body Image Support",
        content: "Body-image interventions: mirror exposure/video feedback; reduce checking/camouflage behaviors."
      });
    }

    // Pregnancy/trying → Perinatal coordination note
    if (pregnant) {
      addOns.push({
        type: "perinatal-coordination-note",
        title: "Pregnancy Coordination",
        content: "Medical + nutrition coordination; avoid dehydration; ensure prenatal vitamins; coordinate OB + ED team care."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Eating Concerns",
      maxScore: 24,
      hasMedicalRedFlags: medicalRedFlags,
      hasPurgingRisk: answers[3] >= 1,
      hasPregnancyRisk: pregnant
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
        hasMedicalRedFlags: results.hasMedicalRedFlags,
        hasPurgingRisk: results.hasPurgingRisk,
        hasPregnancyRisk: results.hasPregnancyRisk
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
          <h4 className="font-medium">Medical Safety Assessment (Critical for Triage)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="medical-red-flags"
              checked={medicalRedFlags}
              onCheckedChange={(checked) => setMedicalRedFlags(checked as boolean)}
            />
            <Label htmlFor="medical-red-flags" className="text-sm leading-relaxed">
              I have experienced fainting, chest pain, palpitations, seizures, confusion, blood in vomit/stool, blackouts, or severe dehydration
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="daily-purging"
              checked={dailyPurging}
              onCheckedChange={(checked) => setDailyPurging(checked as boolean)}
            />
            <Label htmlFor="daily-purging" className="text-sm leading-relaxed">
              I engage in daily vomiting or laxative/diuretic misuse
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="pregnant"
              checked={pregnant}
              onCheckedChange={(checked) => setPregnant(checked as boolean)}
            />
            <Label htmlFor="pregnant" className="text-sm leading-relaxed">
              I am currently pregnant or trying to conceive
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cannot-do-essentials"
              checked={cannotDoEssentials}
              onCheckedChange={(checked) => setCannotDoEssentials(checked as boolean)}
            />
            <Label htmlFor="cannot-do-essentials" className="text-sm leading-relaxed">
              I cannot work/parent safely due to eating-related concerns
            </Label>
          </div>
        </div>
      );
    }
    return null;
  };

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
            Eating Concerns Assessment
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
            This self-check takes ~2-3 minutes and looks at eating patterns over the past 3 months. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>Seek urgent medical care for fainting, chest pain, vomiting blood, blackouts, or severe dehydration.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EatingConcernsAssessment;