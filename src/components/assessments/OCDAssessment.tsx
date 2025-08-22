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

const OCDAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [ocdTheme, setOcdTheme] = useState("");
  const [familyAccommodates, setFamilyAccommodates] = useState(false);
  const [safetyRisks, setSafetyRisks] = useState(false);

  const ocdThemes = [
    "Contamination/cleanliness",
    "Checking/harm prevention", 
    "Symmetry/\"just-right\" feelings",
    "Forbidden/taboo thoughts (sexual, religious, aggressive)",
    "Order/arrangement",
    "Hoarding/collecting",
    "Counting/repeating",
    "Multiple themes",
    "Other/unsure"
  ];

  const questions = [
    "Unwanted intrusive thoughts/images/urges (e.g., contamination, harm, sexual, religious, symmetry/\"just-right\")",
    "Attempts to neutralize/suppress intrusions (e.g., reassurance seeking, mental rituals, praying, counting)",
    "Compulsions/rituals (checking, washing, ordering, repeating, mental reviews)",
    "On most days, obsessions/compulsions take ≥ 1 hour of my time",
    "I feel very distressed if I try to delay/prevent rituals",
    "I avoid people/places/situations that might trigger intrusions or rituals",
    "My fears/rituals feel necessary/realistic (I do not see them as excessive)",
    "Symptoms interfere with work/school/relationships or cause major inconvenience"
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
      resultText = "Your responses do not indicate significant OCD-type symptoms right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild OCD-type symptoms. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate OCD-type symptoms. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe OCD-type symptoms. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Compulsions ≥ 1 h/day (Item 4 ≥2)
    if (answers[3] >= 2) {
      addOns.push({
        type: "daily-erp-scheduler",
        title: "Daily ERP Schedule Recommended",
        content: "Since your compulsions take significant time daily, we recommend structured Exposure and Response Prevention (ERP) practice in 15-45 minute blocks most days of the week."
      });
    }

    // Avoidance prominent (Item 6 ≥2)
    if (answers[5] >= 2) {
      addOns.push({
        type: "erp-ladder-builder",
        title: "Personalized ERP Exposure Ladder",
        content: `Based on your ${ocdTheme} theme and avoidance patterns, we'll create a step-by-step exposure ladder starting with less challenging situations and gradually working up to your most feared scenarios.`
      });
    }

    // Poor insight (Item 7 ≥2)
    if (answers[6] >= 2) {
      addOns.push({
        type: "insight-behavioral-experiment",
        title: "Insight Building Exercises",
        content: "Since your rituals feel very necessary, we recommend 'Thoughts ≠ Facts' experiments and behavioral evidence worksheets to help you test your predictions against reality through video monitoring and self-observation."
      });
    }

    // Theme-specific interventions
    if (ocdTheme === "Forbidden/taboo thoughts (sexual, religious, aggressive)") {
      addOns.push({
        type: "intrusive-not-intent-education",
        title: "Intrusive Thoughts Education",
        content: "Intrusive thoughts are common and do NOT equal intent or moral character. We'll use both imaginal and in-vivo ERP techniques specifically designed for taboo themes, focusing on accepting uncertainty rather than seeking reassurance."
      });
    }

    if (ocdTheme === "Contamination/cleanliness") {
      addOns.push({
        type: "response-prevention-rules",
        title: "Contamination-Specific ERP Rules",
        content: "For contamination OCD, we'll establish response-prevention rules: no extra soap, set rinse times, no post-exposure gloves or sanitizing, and systematic exposure to feared contaminants."
      });
    }

    if (ocdTheme === "Checking/harm prevention") {
      addOns.push({
        type: "one-check-rule",
        title: "Checking Reduction Protocol",
        content: "We'll implement the 'one-check rule' with delayed checking timers to help you reduce excessive checking behaviors while building tolerance for uncertainty."
      });
    }

    if (ocdTheme === "Symmetry/\"just-right\" feelings") {
      addOns.push({
        type: "mismatch-exercises",
        title: "Symmetry Mismatch Exercises",
        content: "For symmetry/just-right OCD, we'll practice purposeful asymmetry exercises and sitting with 'not just right' feelings without correcting or arranging."
      });
    }

    // Family accommodation
    if (familyAccommodates) {
      addOns.push({
        type: "accommodation-reduction-plan",
        title: "Family Accommodation Reduction",
        content: "Since family members accommodate your OCD, we'll create a structured plan with scripted responses, delayed reassurance protocols, and collaborative ritual prevention strategies."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Obsessive-Compulsive Disorder (OCD)",
      maxScore: 24,
      theme: ocdTheme
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
        ocdTheme: results.theme
      }
    });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoNext = answers[currentQuestion] !== -1;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const renderThemeSelection = () => {
    if (currentQuestion === 0) {
      return (
        <div className="mt-6 space-y-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium">What is your main OCD theme or pattern?</h4>
          <Select onValueChange={setOcdTheme}>
            <SelectTrigger>
              <SelectValue placeholder="Select your main OCD theme" />
            </SelectTrigger>
            <SelectContent>
              {ocdThemes.map((theme) => (
                <SelectItem key={theme} value={theme}>
                  {theme}
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
              id="family-accommodates"
              checked={familyAccommodates}
              onCheckedChange={(checked) => setFamilyAccommodates(checked as boolean)}
            />
            <Label htmlFor="family-accommodates" className="text-sm leading-relaxed">
              Family members or partners help me with my rituals or avoid triggering my OCD
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="safety-risks"
              checked={safetyRisks}
              onCheckedChange={(checked) => setSafetyRisks(checked as boolean)}
            />
            <Label htmlFor="safety-risks" className="text-sm leading-relaxed">
              My compulsions create safety risks (e.g., excessive chemical use, disrupted caregiving, dangerous checking)
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
            OCD Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the last <strong>4 weeks</strong>, how often have you been bothered by the following?
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

            {renderThemeSelection()}
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
            This self-check takes 2-3 minutes and looks at OCD-type symptoms over the last 4 weeks. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call/text/chat 988 (24/7). In a medical emergency, call 911.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OCDAssessment;