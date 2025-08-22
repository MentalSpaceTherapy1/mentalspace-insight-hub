import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PTSDAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [traumaTiming, setTraumaTiming] = useState("");
  const [ongoingThreat, setOngoingThreat] = useState(false);
  const [functionalCollapse, setFunctionalCollapse] = useState(false);
  const [medicalConcerns, setMedicalConcerns] = useState(false);
  const [prefersMedication, setPrefersMedication] = useState(false);

  const traumaTimingOptions = [
    "Less than 1 month ago",
    "1-3 months ago", 
    "More than 3 months ago",
    "Multiple traumas over time"
  ];

  const questions = [
    "Unwanted distressing memories or flashbacks of the event(s)",
    "Nightmares about the event(s) or related content",
    "Avoiding thoughts/feelings about the event(s)",
    "Avoiding places/people/activities that remind you of the event(s)",
    "Negative beliefs/emotions (guilt, shame, blame, \"I'm unsafe,\" \"It's my fault,\" feeling detached)",
    "Feeling on guard/jumpy or easily startled (hypervigilance)",
    "Irritability/anger or difficulty calming when triggered",
    "Sleep or concentration problems from trauma-related distress"
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
      resultText = "Your responses do not indicate significant trauma-related symptoms right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild trauma-related symptoms. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate trauma-related symptoms. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe trauma-related symptoms. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Nightmares (Item 2 ≥2)
    if (answers[1] >= 2) {
      addOns.push({
        type: "nightmare-toolkit",
        title: "Nightmare Management Protocol", 
        content: "For trauma-related nightmares, consider discussing prazosin with your prescriber (specifically recommended for PTSD nightmares). Imagery Rehearsal Therapy (IRT) may also be helpful - practice rewriting nightmare endings during waking hours."
      });
    }

    // Avoidance (Items 3 or 4 ≥2)
    if (answers[2] >= 2 || answers[3] >= 2) {
      addOns.push({
        type: "trigger-hierarchy",
        title: "Trauma Exposure Hierarchy", 
        content: "Based on your avoidance patterns, we'll create a 5-step trigger hierarchy from safest to most challenging reminders, with a 'stay-until-settled' rule (no escape for 10-15 minutes or until distress drops ~50%)."
      });
    }

    // Hypervigilance (Item 6 ≥2)
    if (answers[5] >= 2) {
      addOns.push({
        type: "grounding-breathing",
        title: "Hypervigilance Management Tools",
        content: "For hypervigilance symptoms, practice grounding techniques (5-4-3-2-1 senses) and paced breathing (inhale 4s, exhale 6s) for 3-5 minutes, 2-3 times daily to help regulate your nervous system."
      });
    }

    // Irritability/anger (Item 7 ≥2)
    if (answers[6] >= 2) {
      addOns.push({
        type: "anger-regulation",
        title: "Anger Regulation Strategies",
        content: "For anger/irritability management: practice urge-delay (wait 10 minutes before reacting), use opposite action (gentle response when feeling angry), and brief movement to discharge tension."
      });
    }

    // Sleep/concentration (Item 8 ≥2)
    if (answers[7] >= 2) {
      addOns.push({
        type: "cbt-i-starter",
        title: "Sleep & Concentration Support",
        content: "For trauma-related sleep issues, implement sleep hygiene basics: fixed wake time, stimulus control (bed for sleep only), and avoid screens 1 hour before bed. Address concentration through grounding when intrusive thoughts interfere."
      });
    }

    // Active monitoring for early phase subthreshold
    const isEarlyPhase = traumaTiming === "Less than 1 month ago";
    if (isEarlyPhase && (severity === "None/Minimal" || severity === "Mild")) {
      addOns.push({
        type: "active-monitoring",
        title: "Active Monitoring Recommended",
        content: "Since your trauma occurred less than 1 month ago and symptoms are subthreshold, we recommend active monitoring with follow-up within a month rather than immediate intensive therapy. Do not pursue single-session debriefing."
      });
    }

    // Ongoing threat safety resources
    if (ongoingThreat) {
      addOns.push({
        type: "safety-resources", 
        title: "Safety Planning Priority",
        content: "Since you're in an ongoing unsafe situation, safety planning and stabilization resources take priority before trauma processing. We'll coordinate with appropriate support services and defer intensive exposure until you're in a safer environment."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Post-Traumatic Stress (PTSD)",
      maxScore: 24,
      traumaTiming,
      ongoingThreat
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
        traumaTiming: results.traumaTiming,
        ongoingThreat: results.ongoingThreat
      }
    });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoNext = answers[currentQuestion] !== -1;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const renderTimingSelection = () => {
    if (currentQuestion === 0) {
      return (
        <div className="mt-6 space-y-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium">When did your traumatic event(s) occur?</h4>
          <Select onValueChange={setTraumaTiming}>
            <SelectTrigger>
              <SelectValue placeholder="Select timing of trauma" />
            </SelectTrigger>
            <SelectContent>
              {traumaTimingOptions.map((timing) => (
                <SelectItem key={timing} value={timing}>
                  {timing}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }
    return null;
  };

  const renderAdditionalQuestions = () => {
    if (isLastQuestion) {
      return (
        <div className="mt-6 space-y-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium">Additional Information (Optional)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="ongoing-threat"
              checked={ongoingThreat}
              onCheckedChange={(checked) => setOngoingThreat(checked as boolean)}
            />
            <Label htmlFor="ongoing-threat" className="text-sm leading-relaxed">
              I am currently in an unsafe situation or ongoing threat (e.g., domestic violence, stalking)
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="functional-collapse"
              checked={functionalCollapse}
              onCheckedChange={(checked) => setFunctionalCollapse(checked as boolean)}
            />
            <Label htmlFor="functional-collapse" className="text-sm leading-relaxed">
              I cannot work, care for myself, or do essential daily tasks due to trauma symptoms
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="medical-concerns"
              checked={medicalConcerns}
              onCheckedChange={(checked) => setMedicalConcerns(checked as boolean)}
            />
            <Label htmlFor="medical-concerns" className="text-sm leading-relaxed">
              I have new chest pain, head injury, or dissociation with falls since the trauma
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="prefers-medication"
              checked={prefersMedication}
              onCheckedChange={(checked) => setPrefersMedication(checked as boolean)}
            />
            <Label htmlFor="prefers-medication" className="text-sm leading-relaxed">
              I would prefer medication as part of my treatment
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
            PTSD Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the last <strong>1 month</strong>, how often have you been bothered by the following?
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

            {renderTimingSelection()}
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
            This self-check takes ~2-3 minutes and looks at trauma-related symptoms over the last month. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call/text/chat 988 (24/7). In a medical emergency, call 911.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PTSDAssessment;