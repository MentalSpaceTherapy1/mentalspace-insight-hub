import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PanicAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));

  const questions = [
    "I've had sudden surges of intense fear or discomfort that peaked within minutes.",
    "During these episodes, I had strong body sensations (e.g., heart racing, short of breath, chest pressure, dizziness).",
    "During an episode, I feared I might die, lose control, or \"go crazy.\"",
    "I worry about having another episode or its consequences (e.g., fainting in public).",
    "I avoid places/activities because I fear an episode (e.g., crowds, driving, travel, exercise).",
    "Some episodes came \"out of the blue\" (not only in specific triggers/situations).",
    "These symptoms have interfered with work, school, travel, or relationships.",
    "My episodes included chest pain, faintness, or concern something is medically wrong."
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
      severity = "Minimal";
      resultText = "Your responses do not indicate significant panic symptoms right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild panic symptoms. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate panic symptoms. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe panic symptoms. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Avoidance (Item 5 ≥2)
    if (answers[4] >= 2) {
      addOns.push({
        type: "exposure-ladder",
        title: "Personalized Exposure Plan",
        content: "Based on your avoidance patterns, we recommend creating a step-by-step exposure plan starting with less challenging situations and gradually working up to more difficult ones."
      });
    }

    // Unpredictable attacks (Item 6 ≥2)
    if (answers[5] >= 2) {
      addOns.push({
        type: "interoceptive-focus",
        title: "Interoceptive Exposure Focus",
        content: "Since you experience unpredictable panic episodes, interoceptive exposure (deliberately inducing harmless body sensations) can be particularly helpful alongside situational exposure."
      });
    }

    // Medical flag (Item 8 ≥1)
    if (answers[7] >= 1) {
      addOns.push({
        type: "medical-evaluation",
        title: "Medical Evaluation Recommended",
        content: "Given your physical symptoms during episodes, we recommend discussing these symptoms with your primary care provider to rule out any medical causes, especially if this was your first or worst episode."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Panic Disorder"
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
        maxScore: 24
      }
    });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const canGoNext = answers[currentQuestion] !== -1;
  const isLastQuestion = currentQuestion === questions.length - 1;

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
            Panic Attacks Assessment
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
            This self-check takes 2-3 minutes and looks at panic symptoms over the last 4 weeks. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call/text/chat 988 (available 24/7). In a medical emergency, call 911.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanicAssessment;