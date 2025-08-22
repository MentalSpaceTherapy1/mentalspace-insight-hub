import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BipolarAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [psychosis, setPsychosis] = useState(false);
  const [antidepressantOnly, setAntidepressantOnly] = useState(false);
  const [canBecomePregnant, setCanBecomePregnant] = useState(false);
  const [functionalCollapse, setFunctionalCollapse] = useState(false);
  const [irregularRoutines, setIrregularRoutines] = useState(false);

  const questions = [
    "Unusually elevated, expansive, or irritable mood",
    "Decreased need for sleep (felt rested with far less sleep than usual)",
    "Increased talkativeness or pressure to keep talking",
    "Racing thoughts or flight of ideas",
    "Easily distracted; hard to stay on one task",
    "Markedly increased activity or psychomotor agitation (projects, pacing, goal-directed drive)",
    "Risky or uncharacteristic behaviors (spending, sex, driving, investments, substances)",
    "Clear functional impact (others noticed change, job/relationship disruption, need for hospitalization)"
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
    
    if (totalScore <= 6) {
      severity = "Low";
      resultText = "Your responses suggest low likelihood of a recent hypomanic/manic episode. This is not a diagnosis.";
    } else if (totalScore <= 11) {
      severity = "Possible";
      resultText = "Your responses suggest a possible hypomanic/manic episode pattern. This is not a diagnosis.";
    } else if (totalScore <= 16) {
      severity = "Moderate";
      resultText = "Your responses suggest a moderate likelihood of hypomania/mania. This is not a diagnosis.";
    } else {
      severity = "High";
      resultText = "Your responses suggest a high likelihood of mania/hypomania. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Sleep ↓ (Item 2 ≥2) + Risky acts (Item 7 ≥2) → Pause Major Decisions
    if (answers[1] >= 2 && answers[6] >= 2) {
      addOns.push({
        type: "pause-major-decisions",
        title: "Decision-Making Safeguards Recommended",
        content: "Given your decreased sleep need and risky behaviors, implement a 72-hour pause on major decisions (spending, travel, job changes). Consider freezing credit cards and enlisting a financial/decision buddy for major purchases."
      });
    }

    // Impairment (Item 8 ≥2) → Priority Scheduling
    if (answers[7] >= 2) {
      addOns.push({
        type: "priority-scheduling",
        title: "Priority Psychiatric Care Needed",
        content: "Since others have noticed significant changes in your functioning, consider combination treatment (mood stabilizer + second-generation antipsychotic) and priority scheduling for immediate evaluation."
      });
    }

    // Psychosis → Crisis Overlay
    if (psychosis) {
      addOns.push({
        type: "urgent-evaluation",
        title: "URGENT: Immediate Psychiatric Evaluation Required",
        content: "The presence of psychotic symptoms (delusions, hallucinations) requires immediate psychiatric evaluation. Consider emergency services if you feel unsafe or are having thoughts of harming yourself or others."
      });
    }

    // Antidepressant only → Medication Safety
    if (antidepressantOnly) {
      addOns.push({
        type: "antidepressant-safety",
        title: "Medication Safety Alert",
        content: "Antidepressants alone can worsen mood cycling in bipolar disorder. Discuss with your prescriber about adding a mood stabilizer or second-generation antipsychotic, or supervised tapering of the antidepressant."
      });
    }

    // Can become pregnant → Valproate Warning
    if (canBecomePregnant) {
      addOns.push({
        type: "valproate-warning",
        title: "Important: Valproate Safety Warning",
        content: "If valproate/divalproex is recommended, it should NOT be used in women of childbearing potential unless other options are unsuitable and a formal pregnancy-prevention program is in place due to severe birth defect risks."
      });
    }

    // Irregular routines → IPSRT Routine Builder
    if (irregularRoutines) {
      addOns.push({
        type: "ipsrt-routine-builder",
        title: "Rhythm Stabilization Plan",
        content: "Irregular sleep/wake cycles can trigger mood episodes. Implement Interpersonal & Social Rhythm Therapy (IPSRT) principles: fixed wake time, consistent meals, regular bedtime routine, and stable social activities."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Bipolar Spectrum - Hypomania/Mania",
      maxScore: 24,
      hasPsychosis: psychosis
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
        hasPsychosis: results.hasPsychosis
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
          <h4 className="font-medium">Additional Information (Important for Safety)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="psychosis"
              checked={psychosis}
              onCheckedChange={(checked) => setPsychosis(checked as boolean)}
            />
            <Label htmlFor="psychosis" className="text-sm leading-relaxed">
              I experienced delusions (false beliefs) or hallucinations (seeing/hearing things others don't)
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="antidepressant-only"
              checked={antidepressantOnly}
              onCheckedChange={(checked) => setAntidepressantOnly(checked as boolean)}
            />
            <Label htmlFor="antidepressant-only" className="text-sm leading-relaxed">
              I am currently taking an antidepressant (SSRI, SNRI, etc.) without a mood stabilizer
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="can-become-pregnant"
              checked={canBecomePregnant}
              onCheckedChange={(checked) => setCanBecomePregnant(checked as boolean)}
            />
            <Label htmlFor="can-become-pregnant" className="text-sm leading-relaxed">
              I am a woman of childbearing potential (ages 12-55) or could become pregnant
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="functional-collapse"
              checked={functionalCollapse}
              onCheckedChange={(checked) => setFunctionalCollapse(checked as boolean)}
            />
            <Label htmlFor="functional-collapse" className="text-sm leading-relaxed">
              I cannot work, care for myself, or do essential daily tasks due to mood symptoms
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="irregular-routines"
              checked={irregularRoutines}
              onCheckedChange={(checked) => setIrregularRoutines(checked as boolean)}
            />
            <Label htmlFor="irregular-routines" className="text-sm leading-relaxed">
              I have very irregular sleep/wake times, meals, or work schedules
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
            Bipolar Spectrum Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            During your <strong>worst 7 days in the past 12 months</strong>, how often did you experience the following?
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
            This self-check looks at signs of elevated or irritable mood over the past year and how they affected sleep, energy, and decisions. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call/text/chat 988. In an emergency, call 911.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BipolarAssessment;