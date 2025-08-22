import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NicotineAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [pregnant, setPregnant] = useState(false);
  const [cardiopulmonary, setCardiopulmonary] = useState(false);
  const [psychiatric, setPsychiatric] = useState(false);
  const [vapingOnly, setVapingOnly] = useState(false);

  const questions = [
    "I use nicotine within 5–10 minutes of waking on most days",
    "I use nicotine many times a day or near-continuously (e.g., frequent vaping)",
    "I find it hard to refrain from nicotine in places where it's not allowed",
    "I get strong cravings/irritability/restlessness if I don't use for a while",
    "I use nicotine despite health problems (e.g., cough, asthma/COPD flare, high BP)",
    "I wake at night to use nicotine (or keep nicotine by the bed)",
    "I've made serious quit attempts in the past year (≥24 h) without success",
    "I had withdrawal (e.g., anxiety, insomnia, low mood, increased appetite) when I cut down/quit"
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
      severity = "Low";
      resultText = "Your responses suggest low nicotine dependence. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate nicotine dependence. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "High";
      resultText = "Your responses suggest high nicotine dependence. This is not a diagnosis.";
    } else {
      severity = "Very High";
      resultText = "Your responses suggest very high nicotine dependence. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Time-to-first use (Item 1 ≥2) → High dependence card
    if (answers[0] >= 2) {
      addOns.push({
        type: "high-dependence-start-meds",
        title: "High Dependence Support",
        content: "Start pharmacotherapy on day 1; prefer varenicline or combination NRT; arrange coaching contact this week."
      });
    }

    // Night use (Item 6 ≥2) → 24-h patch timing
    if (answers[5] >= 2) {
      addOns.push({
        type: "24h-patch-timing",
        title: "24-Hour Support Plan",
        content: "Consider 24-h patch or tailored patch timing + fast-acting NRT for late-evening urges."
      });
    }

    // Heavy/near-continuous vaping (Item 2 ≥2) and vaping only → Vaping-only plan
    if (answers[1] >= 2 && vapingOnly) {
      addOns.push({
        type: "vaping-only-plan",
        title: "Vaping-Specific Plan",
        content: "Set a quit date, reduce nicotine mg/mL and puff budget, and treat as nicotine dependence (consider varenicline or NRT; pair with coaching)."
      });
    }

    // Prior failed attempts (Item 7 ≥1) → Rescue strategy
    if (answers[6] >= 1) {
      addOns.push({
        type: "rescue-strategy",
        title: "Enhanced Strategy",
        content: "Change medication class (e.g., switch NRT → varenicline or add short-acting NRT); increase contact frequency."
      });
    }

    // Psychiatric comorbidity → EAGLES reassurance
    if (psychiatric) {
      addOns.push({
        type: "eagles-reassurance",
        title: "Mental Health Considerations",
        content: "EAGLES trial found no increase in serious neuropsychiatric events with varenicline or bupropion vs patch/placebo."
      });
    }

    // Perinatal → Perinatal cessation card
    if (pregnant) {
      addOns.push({
        type: "perinatal-cessation",
        title: "Pregnancy Considerations",
        content: "Behavioral counseling first; consider NRT only with shared decision-making. Avoid varenicline/bupropion unless advised by specialist."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Nicotine Dependence",
      maxScore: 24,
      hasPregnancyRisk: pregnant,
      hasCardioRisk: cardiopulmonary
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
        hasPregnancyRisk: results.hasPregnancyRisk,
        hasCardioRisk: results.hasCardioRisk
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
          <h4 className="font-medium">Additional Information (for personalized recommendations)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="pregnant"
              checked={pregnant}
              onCheckedChange={(checked) => setPregnant(checked as boolean)}
            />
            <Label htmlFor="pregnant" className="text-sm leading-relaxed">
              I am pregnant or trying to conceive
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cardiopulmonary"
              checked={cardiopulmonary}
              onCheckedChange={(checked) => setCardiopulmonary(checked as boolean)}
            />
            <Label htmlFor="cardiopulmonary" className="text-sm leading-relaxed">
              I have severe heart/lung disease or recent heart attack
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="psychiatric"
              checked={psychiatric}
              onCheckedChange={(checked) => setPsychiatric(checked as boolean)}
            />
            <Label htmlFor="psychiatric" className="text-sm leading-relaxed">
              I have a history of mental health conditions
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="vaping-only"
              checked={vapingOnly}
              onCheckedChange={(checked) => setVapingOnly(checked as boolean)}
            />
            <Label htmlFor="vaping-only" className="text-sm leading-relaxed">
              I only use vaping products (no cigarettes)
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
            Nicotine Dependence Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the past <strong>30 days</strong>, how often have you experienced the following?
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
            This self-check takes ~2-3 minutes and looks at nicotine use over the past 30 days. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>For free help, call 1-800-QUIT-NOW. If you are pregnant or trying to conceive, talk with your clinician about the safest plan.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NicotineAssessment;