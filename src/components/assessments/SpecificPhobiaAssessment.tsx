import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SpecificPhobiaAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [specificTrigger, setSpecificTrigger] = useState("");
  const [customTrigger, setCustomTrigger] = useState("");
  const [blocksEssentialCare, setBlocksEssentialCare] = useState(false);
  const [reportsFainting, setReportsFainting] = useState(false);
  const [performanceOnly, setPerformanceOnly] = useState(false);
  const [usesSubstances, setUsesSubstances] = useState(false);

  const commonTriggers = [
    "Flying/airplanes",
    "Needles/blood/medical procedures", 
    "Heights/elevators",
    "Animals (dogs, cats, spiders, etc.)",
    "Storms/weather",
    "Choking/vomiting",
    "Enclosed spaces (claustrophobia)",
    "Driving/bridges/tunnels",
    "Public speaking/performance",
    "Other (specify)"
  ];

  const questions = [
    "Marked fear or anxiety about a specific object/situation",
    "Immediate anxiety when exposed to—or anticipating—this trigger",
    "Avoidance (or enduring with intense distress)",
    "Fear feels out of proportion to any actual danger or context",
    "Fear/avoidance interferes with life or health (e.g., skip medical care, avoid essential travel/work)",
    "Symptoms have persisted ≥ 6 months",
    "Anticipatory anxiety days in advance of the trigger",
    "Use of safety behaviors (e.g., escape routes, reassurance, \"just-in-case\" meds, alcohol/sedatives)"
  ];

  const getScaleLabels = (questionIndex: number) => {
    if (questionIndex === 5) { // Duration question
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
    
    if (totalScore <= 4) {
      severity = "None/Minimal";
      resultText = "Your responses do not indicate significant specific-phobia symptoms right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild specific-phobia symptoms. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate specific-phobia symptoms. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe specific-phobia symptoms. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Exposure ladder builder (Item 3 ≥1 or Item 7 ≥2)
    if (answers[2] >= 1 || answers[6] >= 2) {
      const trigger = customTrigger || specificTrigger;
      addOns.push({
        type: "exposure-ladder",
        title: "Personalized Exposure Ladder",
        content: `Based on your fear of ${trigger}, we recommend creating a 7-step exposure ladder starting with the least anxiety-provoking scenario (like looking at a photo) and gradually working up to direct contact or experience.`
      });
    }

    // Safety behavior drop-list (Item 8 ≥2)
    if (answers[7] >= 2) {
      addOns.push({
        type: "safety-behavior-reduction",
        title: "Safety Behavior Elimination Plan",
        content: "Since you rely on safety behaviors, create a ranked list of your coping strategies (escape routes, reassurance-seeking, 'just-in-case' items) and systematically drop the top one during all exposures this week."
      });
    }

    // BII Protocol detection
    const isBII = specificTrigger === "Needles/blood/medical procedures" || reportsFainting;
    if (isBII) {
      addOns.push({
        type: "bii-protocol",
        title: "Blood-Injection-Injury (BII) Specialized Treatment",
        content: "For blood/needle phobias, Applied Tension technique is recommended: Practice 3-5 cycles of 10-15 second strong muscle tensing followed by 20-30 second release. Use this technique during graded needle exposures under professional supervision."
      });
    }

    // Performance-only phobia
    if (performanceOnly || specificTrigger === "Public speaking/performance") {
      addOns.push({
        type: "performance-specific", 
        title: "Performance Anxiety Protocol",
        content: "For performance-specific fears, consider a graduated exposure ladder: speak to 1 person → 3 people → small group → 2-minute update → 5-minute presentation. Discuss situational beta-blocker options with your PCP if appropriate."
      });
    }

    // Essential care blocked
    if (blocksEssentialCare) {
      addOns.push({
        type: "essential-care-priority",
        title: "Priority Scheduling Recommended",
        content: "Since your phobia interferes with essential medical care or job-critical tasks, we recommend priority scheduling to coordinate exposure therapy with your healthcare team."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Specific Phobia",
      maxScore: 24,
      trigger: customTrigger || specificTrigger
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
        specificTrigger: results.trigger
      }
    });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoNext = answers[currentQuestion] !== -1;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const renderTriggerSelection = () => {
    if (currentQuestion === 0) {
      return (
        <div className="mt-6 space-y-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium">What is your specific fear or trigger?</h4>
          <Select onValueChange={setSpecificTrigger}>
            <SelectTrigger>
              <SelectValue placeholder="Select your main trigger" />
            </SelectTrigger>
            <SelectContent>
              {commonTriggers.map((trigger) => (
                <SelectItem key={trigger} value={trigger}>
                  {trigger}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {specificTrigger === "Other (specify)" && (
            <div className="space-y-2">
              <Label htmlFor="custom-trigger">Please specify your trigger:</Label>
              <Input
                id="custom-trigger"
                value={customTrigger}
                onChange={(e) => setCustomTrigger(e.target.value)}
                placeholder="Describe your specific fear"
              />
            </div>
          )}
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
              id="blocks-care"
              checked={blocksEssentialCare}
              onCheckedChange={(checked) => setBlocksEssentialCare(checked as boolean)}
            />
            <Label htmlFor="blocks-care" className="text-sm leading-relaxed">
              This fear prevents me from getting essential medical care or completing job-critical tasks
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="fainting"
              checked={reportsFainting}
              onCheckedChange={(checked) => setReportsFainting(checked as boolean)}
            />
            <Label htmlFor="fainting" className="text-sm leading-relaxed">
              I faint or nearly faint when exposed to blood, needles, or medical procedures
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="performance-only"
              checked={performanceOnly}
              onCheckedChange={(checked) => setPerformanceOnly(checked as boolean)}
            />
            <Label htmlFor="performance-only" className="text-sm leading-relaxed">
              My fear is mainly related to performance situations (public speaking, auditions)
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="substances"
              checked={usesSubstances}
              onCheckedChange={(checked) => setUsesSubstances(checked as boolean)}
            />
            <Label htmlFor="substances" className="text-sm leading-relaxed">
              I use alcohol or sedatives to help me face this fear
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
            Specific Phobia Assessment
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

            {renderTriggerSelection()}
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
            This self-check takes ~2-3 minutes and looks at a specific fear over the last 6 months. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If your fear is stopping you from needed medical care or essential tasks, prioritize support.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecificPhobiaAssessment;