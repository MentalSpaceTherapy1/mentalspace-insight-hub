import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SomaticSymptomAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [redFlagSymptoms, setRedFlagSymptoms] = useState(false);
  const [painPredominant, setPainPredominant] = useState(false);
  const [sleepProblems, setSleepProblems] = useState(false);
  const [healthAnxietyEndorsed, setHealthAnxietyEndorsed] = useState(false);
  const [cannotDoEssentials, setCannotDoEssentials] = useState(false);

  const questions = [
    "Distressing physical symptoms (e.g., pain, fatigue, dizziness, GI or neurologic sensations) most days",
    "Excessive thoughts about symptom seriousness (catastrophic predictions, worst-case thinking)",
    "High health anxiety specifically about these symptoms",
    "Spending a lot of time/energy on the symptoms (monitoring, researching, scheduling care)",
    "Frequent healthcare use/tests that bring little or short-lived reassurance",
    "Life disruption (work/school/home or relationships) because of the symptoms",
    "Activity avoidance (exercise, social, work tasks) to prevent flares or feared harm",
    "Symptoms or related worry ≥ 6 months"
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
      resultText = "Your responses do not indicate a significant somatic-symptom pattern right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest a mild somatic-symptom pattern. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest a moderate somatic-symptom pattern. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest a severe somatic-symptom pattern. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Frequent healthcare use (Item 5 ≥2) → One-Clinician Plan card
    if (answers[4] >= 2) {
      addOns.push({
        type: "one-clinician-plan",
        title: "Care Coordination Plan",
        content: "One-Clinician Plan: named lead clinician; fixed review interval; test-ordering rules; shared care plan accessible to all providers to reduce iatrogenic harm."
      });
    }

    // Activity avoidance (Item 7 ≥2) → Graded-Activity Builder
    if (answers[6] >= 2) {
      addOns.push({
        type: "graded-activity-builder",
        title: "Graded Activity Planning",
        content: "Graded-Activity Builder: pace → plan → increase 10-20%/week; track function, not symptoms. Avoid boom-and-bust cycles."
      });
    }

    // Pain predominant → Chronic Primary Pain toolkit
    if (painPredominant) {
      addOns.push({
        type: "chronic-primary-pain-toolkit",
        title: "Chronic Pain Management",
        content: "Chronic Primary Pain toolkit: exercise, psychological therapy options; de-emphasize routine opioids/benzos for chronic primary pain."
      });
    }

    // Sleep problems → CBT-I Starter
    if (sleepProblems) {
      addOns.push({
        type: "cbt-i-starter",
        title: "Sleep Improvement Program",
        content: "CBT-I Starter: stimulus control; fixed wake time; wind-down routine to improve sleep quality alongside symptom management."
      });
    }

    // High searching/checking (Items 4 or 5 ≥2) → Search-Fast rule
    if (answers[3] >= 2 || answers[4] >= 2) {
      addOns.push({
        type: "search-fast-reassurance-delay",
        title: "Information & Reassurance Control",
        content: "Search-Fast rule: single reputable source, ≤10 minutes, scheduled; block forums/apps and implement reassurance-delay plan."
      });
    }

    // Duration < 6 months (Item 8 ≤1) → Early-phase note
    if (answers[7] <= 1) {
      addOns.push({
        type: "early-phase-note",
        title: "Early-Phase Consideration",
        content: "Early-phase pattern: continue monitoring + skills; if symptoms persist to ≥6 months, consider full SSD evaluation."
      });
    }

    // Health Anxiety co-endorsement → surface Health Anxiety module
    if (healthAnxietyEndorsed) {
      addOns.push({
        type: "health-anxiety-module",
        title: "Health Anxiety Component",
        content: "Health Anxiety/IAD consideration: exposure + response prevention for uncertainty tolerance alongside somatic symptom work."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Somatic Symptom Pattern",
      maxScore: 24,
      hasRedFlags: redFlagSymptoms,
      hasFrequentHealthcareUse: answers[4] >= 2,
      hasHighAvoidance: answers[6] >= 2
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
        hasFrequentHealthcareUse: results.hasFrequentHealthcareUse,
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
              I have new focal neurological symptoms, chest pain/shortness of breath, GI bleeding, unexplained fever, or major unintentional weight loss
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="pain-predominant"
              checked={painPredominant}
              onCheckedChange={(checked) => setPainPredominant(checked as boolean)}
            />
            <Label htmlFor="pain-predominant" className="text-sm leading-relaxed">
              Pain is my primary or most distressing symptom
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="sleep-problems"
              checked={sleepProblems}
              onCheckedChange={(checked) => setSleepProblems(checked as boolean)}
            />
            <Label htmlFor="sleep-problems" className="text-sm leading-relaxed">
              I have significant sleep problems (difficulty falling/staying asleep)
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="health-anxiety-endorsed"
              checked={healthAnxietyEndorsed}
              onCheckedChange={(checked) => setHealthAnxietyEndorsed(checked as boolean)}
            />
            <Label htmlFor="health-anxiety-endorsed" className="text-sm leading-relaxed">
              I also have significant health anxiety or illness worry beyond these specific symptoms
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cannot-do-essentials"
              checked={cannotDoEssentials}
              onCheckedChange={(checked) => setCannotDoEssentials(checked as boolean)}
            />
            <Label htmlFor="cannot-do-essentials" className="text-sm leading-relaxed">
              I cannot work or care for myself due to these symptoms
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
            <strong>Note:</strong> This question asks about the overall duration of your symptoms or related worry, 
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
            Somatic Symptom Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            {currentQuestion === 7 
              ? "Overall duration of symptoms or related worry:"
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
            This self-check takes ~2-3 minutes and looks at physical-symptom distress and daily impact over the last month. 
            You'll get a private summary and next-step options. This is not a diagnosis.
            <br />
            <strong>Seek care for new warning signs (chest pain, focal weakness, GI bleeding, high fever). If you feel unsafe, call/text/chat 988.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SomaticSymptomAssessment;