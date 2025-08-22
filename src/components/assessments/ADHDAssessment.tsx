import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ADHDAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(9).fill(-1));
  const [safetyCriticalErrors, setSafetyCriticalErrors] = useState(false);
  const [cvRisk, setCvRisk] = useState(false);
  const [substanceRisk, setSubstanceRisk] = useState(false);
  const [sleepConcerns, setSleepConcerns] = useState(false);

  const questions = [
    "Difficulty sustaining attention in tasks/meetings or during reading",
    "Careless mistakes on details (work, bills, emails)",
    "Disorganization/time-management problems (materials, deadlines, clutter)",
    "Avoids or struggles with tasks requiring sustained mental effort (reports, forms)",
    "Loses/misplaces essentials (keys, ID, phone)",
    "Forgetful in daily activities (appointments, returns, messages)",
    "Restless/fidgety or difficulty staying seated when expected",
    "Impulsivity (interrupts, blurts out, talks over others, hasty decisions/spending)",
    "Some of these patterns were present before age 12"
  ];

  const getScaleLabels = (questionIndex: number) => {
    if (questionIndex === 8) { // Childhood onset question
      return ["No", "Unsure", "Maybe", "Yes"];
    }
    return ["Not at all", "Several days", "More than half the days", "Nearly every day"];
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
    
    if (totalScore <= 8) {
      severity = "None/Minimal";
      resultText = "Your responses do not suggest significant ADHD-related difficulties right now. This is not a diagnosis.";
    } else if (totalScore <= 13) {
      severity = "Possible";
      resultText = "Your responses suggest a possible ADHD-related pattern. This is not a diagnosis.";
    } else if (totalScore <= 19) {
      severity = "Moderate";
      resultText = "Your responses suggest a moderate likelihood of ADHD-related difficulties. This is not a diagnosis.";
    } else {
      severity = "High";
      resultText = "Your responses suggest a high likelihood of ADHD-related difficulties. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Disorganization (Item 3 ≥2)
    if (answers[2] >= 2) {
      addOns.push({
        type: "two-container-workflow",
        title: "Organization System: Two-Container Workflow",
        content: "For disorganization issues, implement the 'Two-Container' system: one inbox (everything lands here) and one Next Actions list (≤8 items). Add a 3-stage file rule: To-Do / Waiting / Archive."
      });
    }

    // Forgetful (Item 6 ≥2)
    if (answers[5] >= 2) {
      addOns.push({
        type: "cue-checklists",
        title: "Memory Support: Cue-Based Checklists",
        content: "For forgetfulness, create cue-based checklists with phone widgets: 'leave-home' checklist (keys, wallet, phone) and 'close-down' checklist (save work, lock doors, set alarm)."
      });
    }

    // Impulsivity (Item 8 ≥2)
    if (answers[7] >= 2) {
      addOns.push({
        type: "urge-delay-spending",
        title: "Impulse Control: Delay & Spending Rules",
        content: "For impulsivity, practice 10-minute 'urge-to-act delay' before responding or making decisions. Implement spending guardrails: 48-hour rule for purchases >$100, freeze cards for large amounts if needed."
      });
    }

    // Onset unclear (Item 9 ≤1)
    if (answers[8] <= 1) {
      addOns.push({
        type: "lifecourse-clarification",
        title: "Developmental History Needed",
        content: "ADHD requires some symptoms before age 12 and across multiple settings. For your diagnostic evaluation, gather parent/teacher reports or old report cards to clarify childhood patterns."
      });
    }

    // CV screening flag
    if (cvRisk) {
      addOns.push({
        type: "cardio-screening",
        title: "Cardiovascular Screening Required",
        content: "Before starting stimulant medication, you'll need BP/HR monitoring and CV history review. ECG is only needed if there are red flags (heart disease, fainting, concerning family history)."
      });
    }

    // Substance misuse risk
    if (substanceRisk) {
      addOns.push({
        type: "non-stimulant-first",
        title: "Non-Stimulant Treatment Consideration",
        content: "Given substance use concerns, non-stimulant medications (atomoxetine) may be considered first-line, with additional diversion safeguards like pill counts and shared-care monitoring if stimulants are used."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Adult ADHD / Executive Function",
      maxScore: 27
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
        maxScore: results.maxScore
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
          <h4 className="font-medium">Additional Information (Optional)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="safety-critical"
              checked={safetyCriticalErrors}
              onCheckedChange={(checked) => setSafetyCriticalErrors(checked as boolean)}
            />
            <Label htmlFor="safety-critical" className="text-sm leading-relaxed">
              I have safety-critical job errors, traffic incidents, or risk of job loss due to these symptoms
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cv-risk"
              checked={cvRisk}
              onCheckedChange={(checked) => setCvRisk(checked as boolean)}
            />
            <Label htmlFor="cv-risk" className="text-sm leading-relaxed">
              I have high blood pressure, heart problems, or history of fainting/dizziness
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="substance-risk"
              checked={substanceRisk}
              onCheckedChange={(checked) => setSubstanceRisk(checked as boolean)}
            />
            <Label htmlFor="substance-risk" className="text-sm leading-relaxed">
              I have concerns about substance misuse or medication diversion
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="sleep-concerns"
              checked={sleepConcerns}
              onCheckedChange={(checked) => setSleepConcerns(checked as boolean)}
            />
            <Label htmlFor="sleep-concerns" className="text-sm leading-relaxed">
              I sleep very little but feel high energy, or have periods of risky behavior/spending sprees
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
            Adult ADHD Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the last <strong>6 months</strong>, how often have you been bothered by the following?
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
            This self-check takes ~3 minutes and looks at attention, organization, activity level, and impulsivity over the last 6 months. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call/text/chat 988 (24/7). In a medical emergency, call 911.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ADHDAssessment;