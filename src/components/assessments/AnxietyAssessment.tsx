import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AnxietyAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [functionalCollapse, setFunctionalCollapse] = useState(false);
  const [medicalConcerns, setMedicalConcerns] = useState(false);

  const questions = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying", 
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it is hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen",
    "Muscle tension or body tightness (jaw/shoulders/stomach) related to stress"
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
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    // Only use items 1-7 for scoring (GAD-7 validated)
    const coreScore = answers.slice(0, 7).reduce((sum, answer) => sum + (answer >= 0 ? answer : 0), 0);
    
    let severity = "";
    let resultText = "";

    if (coreScore <= 4) {
      severity = "Minimal";
      resultText = "Your responses do not indicate significant generalized anxiety right now. This is not a diagnosis.";
    } else if (coreScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild generalized anxiety. This is not a diagnosis.";
    } else if (coreScore <= 14) {
      severity = "Moderate"; 
      resultText = "Your responses suggest moderate generalized anxiety. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe generalized anxiety. This is not a diagnosis.";
    }

    // Navigate to contact page with results
    navigate("/assessment-contact", {
      state: {
        assessmentType: "Anxiety",
        score: coreScore,
        severity: severity,
        resultText: resultText,
        functionalCollapse: functionalCollapse,
        medicalConcerns: medicalConcerns,
        dynamicAddOns: getDynamicAddOns(),
        maxScore: 21
      }
    });
  };

  const getDynamicAddOns = () => {
    const addOns = [];
    
    // Relaxation/muscle tension (items 4 or 8 >= 2)
    if (answers[3] >= 2 || answers[7] >= 2) {
      addOns.push("Applied/Progressive Muscle Relaxation and breathing exercises recommended - practice 2x daily");
    }
    
    // Restlessness (item 5 >= 2)
    if (answers[4] >= 2) {
      addOns.push("Brief movement breaks (2-5 min walks/stretching) every 60-90 minutes, paired with breathing reset");
    }
    
    // Irritability (item 6 >= 2)
    if (answers[5] >= 2) {
      addOns.push("Urge-to-act delay technique: wait 10 minutes, consider best/neutral/worst case scenarios before acting");
    }
    
    return addOns;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[currentQuestion] >= 0;
  const canGoBack = currentQuestion > 0;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const renderAdditionalQuestions = () => {
    if (currentQuestion === questions.length - 1) {
      return (
        <div className="mt-6 space-y-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-medium">Additional Information (Optional)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="functional-collapse"
              checked={functionalCollapse}
              onCheckedChange={(checked) => setFunctionalCollapse(checked as boolean)}
            />
            <Label htmlFor="functional-collapse" className="text-sm leading-relaxed">
              I cannot do essential daily tasks most days due to anxiety
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="medical-concerns" 
              checked={medicalConcerns}
              onCheckedChange={(checked) => setMedicalConcerns(checked as boolean)}
            />
            <Label htmlFor="medical-concerns" className="text-sm leading-relaxed">
              I experience chest pain, fainting, or this is my first severe anxiety episode
            </Label>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate("/mental-health-tests")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assessments
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Generalized Anxiety Assessment (GAD-7+)</CardTitle>
            <CardDescription>
              This self-check takes 2-3 minutes and looks at common anxiety symptoms from the past 2 weeks. 
              You'll get a private summary and next steps. This is not a diagnosis.
            </CardDescription>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">
                Over the last 2 weeks, how often have you been bothered by:
              </h3>
              <p className="text-xl font-medium text-foreground mb-6">
                {questions[currentQuestion]}
                {currentQuestion === 7 && (
                  <span className="block text-sm text-muted-foreground mt-2 font-normal">
                    (This item helps personalize recommendations but doesn't change your severity score)
                  </span>
                )}
              </p>
            </div>

            <RadioGroup
              value={answers[currentQuestion] >= 0 ? answers[currentQuestion].toString() : ""}
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {scaleLabels.map((label, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer font-medium">
                    {label}
                  </Label>
                  <span className="text-sm text-muted-foreground">({index})</span>
                </div>
              ))}
            </RadioGroup>

            {renderAdditionalQuestions()}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={!canGoBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex items-center gap-2"
              >
                {isLastQuestion ? "Get Results" : "Next"}
                {!isLastQuestion && <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Self-checks are educational and do not replace a professional evaluation. 
          If you feel unsafe or overwhelmed, call/text/chat 988 for immediate support.
        </div>
      </div>
    </div>
  );
};

export default AnxietyAssessment;