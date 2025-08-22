import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BDDAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [muscleDysmorphia, setMuscleDysmorphia] = useState(false);
  const [skinPicking, setSkinPicking] = useState(false);
  const [cannotDoEssentials, setCannotDoEssentials] = useState(false);

  const questions = [
    "Preoccupation with a perceived flaw or defect in appearance (face/skin/hair/body shape, etc.)",
    "Repetitive checking/camouflaging (mirrors, photos, makeup/clothing to hide)",
    "Reassurance seeking/comparing (asking others, scrolling for comparison images)",
    "Avoidance (photos, social situations, bright light, intimacy, video calls)",
    "Time spent on appearance concerns ≥1 hour/day",
    "Distress or impairment in work/school/relationships because of appearance worries",
    "Considering or seeking cosmetic/dermatologic procedures for the concern",
    "Belief strength/insight: \"It's probably true I look abnormal/ugly\" (higher = poorer insight)"
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
      resultText = "Your responses do not indicate significant BDD-type symptoms right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild BDD-type symptoms. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate BDD-type symptoms. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe BDD-type symptoms. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Procedures considered (Item 7 ≥1) → Cosmetic-procedure caution card
    if (answers[6] >= 1) {
      addOns.push({
        type: "cosmetic-caution-bdd-referral",
        title: "CRITICAL: Cosmetic Procedure Caution",
        content: "Poor outcomes in BDD; route to BDD-specialist care instead (no surgery/dermatology until treated). Cosmetic procedures rarely help BDD and may worsen symptoms."
      });
    }

    // Checking/camouflage (Item 2 ≥2) → Mirror retraining script + camouflage drop-list
    if (answers[1] >= 2) {
      addOns.push({
        type: "mirror-retraining-camouflage-drop-list",
        title: "Mirror & Camouflage Behavior Plan",
        content: "Mirror retraining: neutral lighting, fixed distance, whole-face view, describe objectively (no evaluations) for 3-5 minutes. Remove top camouflage behavior this week."
      });
    }

    // Comparison/reassurance (Item 3 ≥2) → App-limit plan and reassurance-delay
    if (answers[2] >= 2) {
      addOns.push({
        type: "comparison-limits-reassurance-delay",
        title: "Comparison & Reassurance Reduction",
        content: "App-limit plan: uninstall favorite comparison app for 7 days or set timer ≤10 min/day. Reassurance-delay: wait 30-60 minutes before asking others."
      });
    }

    // Avoidance (Item 4 ≥2) → Exposure ladder builder
    if (answers[3] >= 2) {
      addOns.push({
        type: "exposure-ladder-builder",
        title: "Graded Exposure Planning",
        content: "Exposure ladder: photos → video call → social in bright light → close conversation → unfiltered photo post. Start with least feared situation."
      });
    }

    // Poor insight (Item 8 ≥2) → Predictions vs. outcomes data-card + video feedback
    if (answers[7] >= 2) {
      addOns.push({
        type: "predictions-vs-outcomes-video-feedback",
        title: "Insight & Reality Testing Tools",
        content: "\"Predictions vs. outcomes\" tracking + video feedback instructions. Conviction can be high even as behavior changes - this is normal in BDD recovery."
      });
    }

    // Muscle dysmorphia → MD plan
    if (muscleDysmorphia) {
      addOns.push({
        type: "muscle-dysmorphia-submodule",
        title: "Muscle Dysmorphia Support",
        content: "MD plan: exposure to \"normal clothing,\" limit gym time to planned blocks, avoid steroid use. CBT-BDD remains first-line treatment."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Body Dysmorphic Disorder",
      maxScore: 24,
      hasCosmeticInterest: answers[6] >= 1,
      hasPoorInsight: answers[7] >= 2,
      hasHighAvoidance: answers[3] >= 2
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
        hasCosmeticInterest: results.hasCosmeticInterest,
        hasPoorInsight: results.hasPoorInsight,
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
          <h4 className="font-medium">Additional Information (for personalized care)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="muscle-dysmorphia"
              checked={muscleDysmorphia}
              onCheckedChange={(checked) => setMuscleDysmorphia(checked as boolean)}
            />
            <Label htmlFor="muscle-dysmorphia" className="text-sm leading-relaxed">
              My concerns focus on muscle size/definition or being \"too small/weak\"
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="skin-picking"
              checked={skinPicking}
              onCheckedChange={(checked) => setSkinPicking(checked as boolean)}
            />
            <Label htmlFor="skin-picking" className="text-sm leading-relaxed">
              I frequently pick at my skin due to appearance concerns
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cannot-do-essentials"
              checked={cannotDoEssentials}
              onCheckedChange={(checked) => setCannotDoEssentials(checked as boolean)}
            />
            <Label htmlFor="cannot-do-essentials" className="text-sm leading-relaxed">
              I cannot work/engage in relationships due to appearance worries
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
            Body Dysmorphic Disorder Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the last <strong>4 weeks</strong>, how often have you experienced the following?
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
            This self-check takes ~2-3 minutes and looks at appearance-related worries over the last 4 weeks. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call/text/chat 988 (24/7). In an emergency, call 911.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BDDAssessment;