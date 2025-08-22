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
    
    // Sleep ↓ (Item 2 ≥2) + Risky acts (Item 7 ≥2) → "Pause Major Decisions" banner
    if (answers[1] >= 2 && answers[6] >= 2) {
      addOns.push({
        type: "pause-major-decisions-impulse-lock",
        title: "Decision-Making Safeguards Required",
        content: "Based on your decreased sleep and risky behaviors, implement a 3-step money/impulsivity lock: freeze credit cards, implement a 72-hour rule for major decisions, and enlist a trusted decision buddy for purchases over $100."
      });
    }

    // Impairment (Item 8 ≥2) → Priority Scheduling + combination treatment
    if (answers[7] >= 2) {
      addOns.push({
        type: "priority-scheduling-combo-treatment",
        title: "Priority Scheduling & Combination Treatment",
        content: "Given the clear functional impact, priority scheduling is recommended. Consider combination treatment (mood stabilizer + second-generation antipsychotic) rather than monotherapy for more effective symptom control."
      });
    }

    // Psychosis → Crisis Overlay with urgent-care routing
    if (psychosis) {
      addOns.push({
        type: "urgent-evaluation-banner",
        title: "URGENT: Crisis Intervention Required",
        content: "The presence of psychotic symptoms requires immediate psychiatric evaluation. If you're experiencing delusions, hallucinations, or feel unsafe, call 911 or go to the nearest emergency room immediately."
      });
    }

    // Antidepressant only → Medication Safety card
    if (antidepressantOnly) {
      addOns.push({
        type: "antidepressant-safety-note",
        title: "Medication Safety Alert: Antidepressant Risk",
        content: "Antidepressants alone can worsen cycling and trigger mania in bipolar disorder. Discuss with your prescriber about adding a mood stabilizer/SGA or supervised taper of the antidepressant. Avoid antidepressant monotherapy."
      });
    }

    // Can become pregnant → Valproate Warning card
    if (canBecomePregnant) {
      addOns.push({
        type: "valproate-warning",
        title: "Critical: Valproate Safety Warning for Women",
        content: "Do not start or continue valproate/divalproex unless other options are unsuitable and a formal pregnancy-prevention program is in place. Valproate causes severe birth defects and developmental delays (NICE/MHRA & WHO guidelines)."
      });
    }

    // Irregular routines → IPSRT Routine Builder
    if (irregularRoutines) {
      addOns.push({
        type: "ipsrt-routine-builder",
        title: "IPSRT Routine Builder: Rhythm Stabilization",
        content: "Irregular sleep/wake/meal patterns can trigger mood episodes. Build an Interpersonal & Social Rhythm Therapy (IPSRT) routine: fixed sleep/wake times, consistent meals, regular social activities, and limited night shifts."
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
          <h4 className="font-medium">Additional Information (Critical for Safety Assessment)</h4>
          
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
              I am a woman/girl of childbearing potential (ages 12-55)
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="functional-collapse"
              checked={functionalCollapse}
              onCheckedChange={(checked) => setFunctionalCollapse(checked as boolean)}
            />
            <Label htmlFor="functional-collapse" className="text-sm leading-relaxed">
              I cannot work or care for myself due to these symptoms (major role failure)
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="irregular-routines"
              checked={irregularRoutines}
              onCheckedChange={(checked) => setIrregularRoutines(checked as boolean)}
            />
            <Label htmlFor="irregular-routines" className="text-sm leading-relaxed">
              I have very irregular sleep/wake/meal times or work night shifts frequently
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