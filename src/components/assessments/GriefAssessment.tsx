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

const GriefAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [timeSinceLoss, setTimeSinceLoss] = useState("");
  const [circumstances, setCircumstances] = useState("");
  const [multipleLosses, setMultipleLosses] = useState(false);
  const [sleepDisturbance, setSleepDisturbance] = useState(false);
  const [substanceUse, setSubstanceUse] = useState(false);
  const [childrenAffected, setChildrenAffected] = useState(false);
  const [cannotDoEssentials, setCannotDoEssentials] = useState(false);

  const questions = [
    "Intense yearning/longing for the person who died",
    "Preoccupation with the deceased or the circumstances of the death",
    "Difficulty accepting the death; feeling it shouldn't have happened",
    "Avoiding reminders (people, places, objects, photos, dates) of the loss",
    "Intense emotional pain (sorrow, anger, bitterness) related to the loss",
    "Identity disruption (feeling that part of you died or you don't know who you are without them)",
    "Feeling life is meaningless or inability to re-engage in life roles/routines",
    "Intense loneliness/isolation since the loss"
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
      resultText = "Your responses do not suggest a persistent grief reaction right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest a mild grief reaction. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest a moderate, persistent grief reaction. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest a severe, persistent grief reaction. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Avoidance (Item 4 ≥2) → Situational Approach Builder
    if (answers[3] >= 2) {
      addOns.push({
        type: "situational-approach-builder",
        title: "Situational Approach Planning",
        content: "5-step plan to visit avoided places/objects with a support person; stay long enough for feelings to crest and settle (10-20 min). This is a core CGT element."
      });
    }

    // Meaninglessness/identity disruption (Items 6-7 ≥2) → Restoration-of-Life Plan
    if (answers[5] >= 2 || answers[6] >= 2) {
      addOns.push({
        type: "restoration-of-life-plan",
        title: "Life Restoration Planning",
        content: "Restoration-of-Life Plan: values map → 3 small weekly goals → schedule with accountability. Focus on CGT 'restoration' work."
      });
    }

    // Loneliness (Item 8 ≥2) → Connection rituals + graded social re-entry
    if (answers[7] >= 2) {
      addOns.push({
        type: "connection-rituals-social-reentry",
        title: "Social Connection Support",
        content: "Connection rituals + graded social re-entry: coffee with one person → small group → community activity."
      });
    }

    // Violent/accidental/suicide loss → PTSD screener + specialized resources
    if (circumstances === "violent/accidental" || circumstances === "suicide") {
      addOns.push({
        type: "ptsd-screener-specialized-bereavement",
        title: "Trauma-Informed Grief Support",
        content: "PTSD screener + resources for specialized bereavement support. Violent/accidental/suicide losses often require additional trauma-focused care."
      });
    }

    // Sleep disturbance → CBT-I starter
    if (sleepDisturbance) {
      addOns.push({
        type: "cbt-i-starter",
        title: "Sleep Support for Grief",
        content: "CBT-I starter: fixed wake time; leave bed if awake ~20 min; wind-down routine. Grief is commonly linked with poor sleep."
      });
    }

    // Substance use to cope → Alcohol/Substance modules
    if (substanceUse) {
      addOns.push({
        type: "alcohol-substance-module",
        title: "Substance Use Support",
        content: "Brief intervention for substance use coping; medications where indicated alongside grief-focused therapy."
      });
    }

    // Children/dependents → Family support card
    if (childrenAffected) {
      addOns.push({
        type: "family-support-card",
        title: "Family Grief Support",
        content: "Family support: age-appropriate language; maintain routines; school liaison for children affected by the loss."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Prolonged/Complicated Grief",
      maxScore: 24,
      timeSinceLoss,
      circumstances,
      hasHighAvoidance: answers[3] >= 2,
      hasIdentityDisruption: answers[5] >= 2 || answers[6] >= 2
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
        timeSinceLoss: results.timeSinceLoss,
        circumstances: results.circumstances,
        hasHighAvoidance: results.hasHighAvoidance,
        hasIdentityDisruption: results.hasIdentityDisruption
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
          
          <div className="space-y-2">
            <Label htmlFor="time-since-loss">Time since the death</Label>
            <Select onValueChange={setTimeSinceLoss} required>
              <SelectTrigger>
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<6-months">Less than 6 months</SelectItem>
                <SelectItem value="6-12-months">6-12 months</SelectItem>
                <SelectItem value=">12-months">More than 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="circumstances">Circumstances of death</Label>
            <Select onValueChange={setCircumstances} required>
              <SelectTrigger>
                <SelectValue placeholder="Select circumstances" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="expected">Expected (illness, old age)</SelectItem>
                <SelectItem value="sudden">Sudden but natural</SelectItem>
                <SelectItem value="violent/accidental">Violent/accidental</SelectItem>
                <SelectItem value="suicide">Suicide</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="multiple-losses"
              checked={multipleLosses}
              onCheckedChange={(checked) => setMultipleLosses(checked as boolean)}
            />
            <Label htmlFor="multiple-losses" className="text-sm leading-relaxed">
              I have experienced multiple losses in a short period
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="sleep-disturbance"
              checked={sleepDisturbance}
              onCheckedChange={(checked) => setSleepDisturbance(checked as boolean)}
            />
            <Label htmlFor="sleep-disturbance" className="text-sm leading-relaxed">
              I have major sleep disturbance related to the loss
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="substance-use"
              checked={substanceUse}
              onCheckedChange={(checked) => setSubstanceUse(checked as boolean)}
            />
            <Label htmlFor="substance-use" className="text-sm leading-relaxed">
              I use alcohol or drugs to cope with the grief
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="children-affected"
              checked={childrenAffected}
              onCheckedChange={(checked) => setChildrenAffected(checked as boolean)}
            />
            <Label htmlFor="children-affected" className="text-sm leading-relaxed">
              Children or dependents are also affected by this loss
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="cannot-do-essentials"
              checked={cannotDoEssentials}
              onCheckedChange={(checked) => setCannotDoEssentials(checked as boolean)}
            />
            <Label htmlFor="cannot-do-essentials" className="text-sm leading-relaxed">
              I cannot work or care for myself due to grief
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
            Prolonged Grief Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the past <strong>1 month</strong>, how often have you experienced the following?
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
                  disabled={!canGoNext || !timeSinceLoss || !circumstances}
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
            This self-check takes ~2-3 minutes and looks at bereavement-related symptoms over the last month. 
            You'll get a private summary and next-step options. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call, text, or chat 988 (24/7 Suicide & Crisis Lifeline).</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GriefAssessment;