import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HealthAnxietyAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [redFlagSymptoms, setRedFlagSymptoms] = useState(false);
  const [comorbidGAD, setComorbidGAD] = useState(false);
  const [comorbidDepression, setComorbidDepression] = useState(false);
  const [cannotDoEssentials, setCannotDoEssentials] = useState(false);

  const questions = [
    "Excessive worry that you currently have or will soon develop a serious illness",
    "Misinterpreting normal sensations (e.g., heartbeat, gut feelings, twitches) as signs of serious disease",
    "Reassurance-seeking or checking (self-exam, repeated vitals, repeated portal messages/tests)",
    "Health-related Internet searching (\"cyberchondria\": scrolling symptoms, forums, imaging results)",
    "Avoidance of health information, news, exercise, or medical appointments due to fear",
    "Persistence despite normal exams/tests (worry returns quickly or never settles)",
    "Interference/impairment (work/school/relationships/finances) from health worry or behaviors",
    "Duration ≥ 6 months of health preoccupation"
  ];

  const getScaleLabels = (questionIndex: number) => {
    if (questionIndex === 7) {
      // Item 8 uses different scale for duration
      return [
        "No",
        "Unsure",
        "Maybe", 
        "Yes"
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
      resultText = "Your responses do not indicate significant health anxiety right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild health anxiety. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate health anxiety. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe health anxiety. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Reassurance/Checking high (Item 3 ≥2) → Reassurance-Delay/Limit Plan
    if (answers[2] >= 2) {
      addOns.push({
        type: "reassurance-delay-checking-reduction",
        title: "Reassurance & Checking Reduction Plan",
        content: "Reassurance-Delay/Limit Plan: ask once, then wait 24h; include body-checking reduction checklist. Checking/reassurance perpetuates health anxiety."
      });
    }

    // Internet-searching high (Item 4 ≥2) → Search-Fast Plan
    if (answers[3] >= 2) {
      addOns.push({
        type: "search-fast-plan",
        title: "Internet Search Control Plan",
        content: "Search-Fast Plan: single reputable source; 10-minute cap; no forums; no late-night searching. Consider site-blocking/app limits for 2 weeks."
      });
    }

    // Avoidance high (Item 5 ≥2) → Graded Approach Builder
    if (answers[4] >= 2) {
      addOns.push({
        type: "graded-approach-builder",
        title: "Graded Approach Planning",
        content: "Graded Approach Builder: book routine care; read vetted info in steps; attend one planned appointment without excessive preparation."
      });
    }

    // Persistence despite normal tests (Item 6 ≥2) → Testing-Boundary Agreement
    if (answers[5] >= 2) {
      addOns.push({
        type: "testing-boundary-agreement",
        title: "Medical Testing Boundaries",
        content: "Testing-Boundary Agreement with PCP: what constitutes clinically meaningful change that merits re-evaluation vs. when to defer to scheduled follow-ups."
      });
    }

    // Duration < 6 months (Item 8 ≤1) → Early-phase note
    if (answers[7] <= 1) {
      addOns.push({
        type: "early-phase-note",
        title: "Early-Phase Health Anxiety",
        content: "Early-phase consideration: many improve with brief CBT-style skills; re-screen in 4-6 weeks if monitoring approach is chosen."
      });
    }

    // Comorbid conditions → combined pathway
    if (comorbidGAD || comorbidDepression) {
      addOns.push({
        type: "combined-cbt-pathway",
        title: "Combined Treatment Approach",
        content: "Combined pathway: CBT-HA + CBT-GAD/CBT-D; consider SSRI/SNRI if indicated for multiple conditions."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Health Anxiety / Illness Anxiety",
      maxScore: 24,
      hasRedFlags: redFlagSymptoms,
      hasHighChecking: answers[2] >= 2,
      hasHighAvoidance: answers[4] >= 2
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
        hasRedFlags: results.hasRedFlags,
        hasHighChecking: results.hasHighChecking,
        hasHighAvoidance: results.hasHighAvoidance
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
          <h4 className="font-medium">Additional Information (for safety and personalized care)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="red-flag-symptoms"
              checked={redFlagSymptoms}
              onCheckedChange={(checked) => setRedFlagSymptoms(checked as boolean)}
            />
            <Label htmlFor="red-flag-symptoms" className="text-sm leading-relaxed">
              I have new chest pain/shortness of breath, focal neurological symptoms, severe bleeding, high fever with rigidity, or head injury
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="comorbid-gad"
              checked={comorbidGAD}
              onCheckedChange={(checked) => setComorbidGAD(checked as boolean)}
            />
            <Label htmlFor="comorbid-gad" className="text-sm leading-relaxed">
              I also have generalized anxiety or worry about many life areas
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="comorbid-depression"
              checked={comorbidDepression}
              onCheckedChange={(checked) => setComorbidDepression(checked as boolean)}
            />
            <Label htmlFor="comorbid-depression" className="text-sm leading-relaxed">
              I also have symptoms of depression or low mood
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cannot-do-essentials"
              checked={cannotDoEssentials}
              onCheckedChange={(checked) => setCannotDoEssentials(checked as boolean)}
            />
            <Label htmlFor="cannot-do-essentials" className="text-sm leading-relaxed">
              I cannot fulfill major responsibilities due to health worries or behaviors
            </Label>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderTimeframeNote = () => {
    if (currentQuestion === 7) {
      return (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Note:</strong> This question asks about the overall duration of your health preoccupation, 
            not just the past 4 weeks.
          </p>
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
            Health Anxiety Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            {currentQuestion === 7 
              ? "Overall duration of health preoccupation:"
              : "Over the last 4 weeks, how often have you experienced the following?"
            }
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

            {renderTimeframeNote()}
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
            This self-check takes ~2-3 minutes and looks at health-related worry and behaviors in the last month. 
            You'll get a private summary and next-step options. This is not a diagnosis.
            <br />
            <strong>If you have new or severe symptoms, seek medical care. If you feel unsafe, call/text/chat 988 (24/7).</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthAnxietyAssessment;