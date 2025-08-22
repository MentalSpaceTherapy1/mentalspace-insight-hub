import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AlcoholUseAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [priorWithdrawalSeizure, setPriorWithdrawalSeizure] = useState(false);
  const [dailyHeavyUse, setDailyHeavyUse] = useState(false);
  const [pregnantOrTrying, setPregnantOrTrying] = useState(false);
  const [liverDisease, setLiverDisease] = useState(false);
  const [cannotDoEssentials, setCannotDoEssentials] = useState(false);

  const questions = [
    "I drank alcohol (any amount)",
    "On a single occasion, I had 4+ drinks (many women/lower-body-weight people) or 5+ drinks (many men) within ~2 hours (binge/heavy episode)",
    "I drank more or longer than intended",
    "I had memory gaps/blackouts after drinking",
    "I tried to cut down or stop but couldn't",
    "Drinking interfered with work/school/home or created conflict",
    "I engaged in hazardous situations (e.g., driving, mixing alcohol with sedatives/opioids)",
    "I used a morning drink or had withdrawal symptoms (shakes, sweating, nausea, insomnia, anxiety)"
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
      resultText = "Your responses do not indicate unhealthy alcohol use right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild risky drinking. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate unhealthy alcohol use. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe unhealthy alcohol use. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Binge/heavy episodes (Item 2 ≥2) → Binge-Risk Plan
    if (answers[1] >= 2) {
      addOns.push({
        type: "binge-risk-plan",
        title: "Binge-Risk Reduction Plan",
        content: "For binge episodes: limit to max 1 drink/hour, cap at 3-4 per occasion (lower if advised by clinician), drink water between alcoholic drinks, eat before drinking, have a pre-planned exit strategy, and pre-book ride-share transportation."
      });
    }

    // Hazardous use (Item 7 ≥1) → Safety Override card
    if (answers[6] >= 1) {
      addOns.push({
        type: "safety-override-no-driving-no-mixing",
        title: "CRITICAL: Safety Override Required",
        content: "Never drive after any amount of drinking. Never mix alcohol with opioids, benzodiazepines, or sedatives—this combination can be fatal. If you have already mixed these substances, seek immediate medical advice."
      });
    }

    // Morning drink/withdrawal (Item 8 ≥1) → Withdrawal Safety card
    const withdrawalFlag = answers[7] >= 1 || priorWithdrawalSeizure || dailyHeavyUse;
    if (withdrawalFlag) {
      addOns.push({
        type: "withdrawal-safety-asam",
        title: "URGENT: Withdrawal Safety Assessment Required",
        content: "Warning signs include morning shakes, sweats, nausea, anxiety, or insomnia when cutting down. Do NOT quit alcohol abruptly without medical supervision. Consider thiamine supplementation. Seek immediate medical evaluation for withdrawal management per ASAM guidelines."
      });
    }

    // Pregnant/trying (follow-up = Yes) → Abstinence required notice
    if (pregnantOrTrying) {
      addOns.push({
        type: "perinatal-abstinence-required",
        title: "Pregnancy Safety: Complete Abstinence Required",
        content: "There is no known safe amount, time, or type of alcohol during pregnancy (CDC guidelines). Complete abstinence is recommended if pregnant or trying to conceive. Request perinatal-informed specialty care for additional support."
      });
    }

    // Liver disease (follow-up = Yes) → Medication selection note
    if (liverDisease) {
      addOns.push({
        type: "medication-selection-consider-acamprosate",
        title: "Liver Disease: Medication Selection Considerations",
        content: "With liver disease present, many prescribers prefer acamprosate over naltrexone due to different metabolism pathways. Discuss all risks and benefits of alcohol use disorder medications with your healthcare provider."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Alcohol Use",
      maxScore: 24,
      hasWithdrawalRisk: withdrawalFlag,
      hasHazardousUse: answers[6] >= 1
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
        hasWithdrawalRisk: results.hasWithdrawalRisk,
        hasHazardousUse: results.hasHazardousUse
      }
    });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoNext = answers[currentQuestion] !== -1;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const renderStandardDrinkInfo = () => {
    if (currentQuestion === 0) {
      return (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-2">What counts as "one standard drink"?</h4>
          <p className="text-sm text-blue-700">
            A standard drink ≈ 14g (0.6 fl oz) of pure alcohol: 12 oz beer (5% alcohol), 5 oz wine (12% alcohol), 
            or 1.5 oz spirits (40% alcohol). Mixed drinks or large pours may contain multiple standard drinks.
          </p>
        </div>
      );
    }
    return null;
  };

  const renderAdditionalQuestions = () => {
    if (isLastQuestion) {
      return (
        <div className="mt-6 space-y-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium">Additional Information (Critical for Safety Assessment)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="prior-withdrawal-seizure"
              checked={priorWithdrawalSeizure}
              onCheckedChange={(checked) => setPriorWithdrawalSeizure(checked as boolean)}
            />
            <Label htmlFor="prior-withdrawal-seizure" className="text-sm leading-relaxed">
              I have had withdrawal seizures or delirium tremens (DTs) in the past
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="daily-heavy-use"
              checked={dailyHeavyUse}
              onCheckedChange={(checked) => setDailyHeavyUse(checked as boolean)}
            />
            <Label htmlFor="daily-heavy-use" className="text-sm leading-relaxed">
              I drink heavily on a daily basis or need alcohol to function normally
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="pregnant-or-trying"
              checked={pregnantOrTrying}
              onCheckedChange={(checked) => setPregnantOrTrying(checked as boolean)}
            />
            <Label htmlFor="pregnant-or-trying" className="text-sm leading-relaxed">
              I am pregnant or trying to become pregnant
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="liver-disease"
              checked={liverDisease}
              onCheckedChange={(checked) => setLiverDisease(checked as boolean)}
            />
            <Label htmlFor="liver-disease" className="text-sm leading-relaxed">
              I have liver disease or elevated liver enzymes
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cannot-do-essentials"
              checked={cannotDoEssentials}
              onCheckedChange={(checked) => setCannotDoEssentials(checked as boolean)}
            />
            <Label htmlFor="cannot-do-essentials" className="text-sm leading-relaxed">
              I cannot work or care for myself/family due to alcohol use
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
            Alcohol Use Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the last <strong>3 months</strong>, how often have you experienced the following?
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

            {renderStandardDrinkInfo()}
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
            This self-check takes ~2-3 minutes and looks at alcohol use over the past 3 months. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>Do not drive after drinking. If you have morning shakes, prior withdrawal, or feel unwell when you cut down, seek medical care—do not detox alone.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlcoholUseAssessment;