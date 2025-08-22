import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SocialAnxietyAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [performanceSpecific, setPerformanceSpecific] = useState(false);
  const [functionalCollapse, setFunctionalCollapse] = useState(false);

  const questions = [
    "Fear of judgment/embarrassment in social or performance situations",
    "Strong anxiety in social settings (meeting people, being observed, public speaking)",
    "Avoidance of social/performance situations or enduring them with marked distress",
    "Use of safety behaviors (scripts, camera-off, avoiding eye contact, \"just-in-case\" props)",
    "Physical symptoms in social settings (blushing, shaking, sweating, voice quiver, nausea)",
    "Post-event rumination (\"replaying\" and self-critiquing after interactions)",
    "Functional impact (work/school/relationships suffer)",
    "Duration ≥ 6 months"
  ];

  const getScaleLabels = (questionIndex: number) => {
    if (questionIndex === 7) { // Duration question
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
      resultText = "Your responses do not indicate significant social anxiety right now. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Mild";
      resultText = "Your responses suggest mild social anxiety. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate social anxiety. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe social anxiety. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Post-event rumination (Item 6 ≥2)
    if (answers[5] >= 2) {
      addOns.push({
        type: "post-event-review",
        title: "Post-Event Review Recommended",
        content: "Since you experience rumination after social interactions, we recommend using a structured post-event review focusing on facts vs. mind-reading, and scheduling a 10-minute review within 24 hours of each social exposure."
      });
    }

    // Safety behaviors (Item 4 ≥2)
    if (answers[3] >= 2) {
      addOns.push({
        type: "safety-behavior-reduction",
        title: "Safety Behavior Reduction Plan",
        content: "Based on your reliance on safety behaviors, we recommend creating a 'drop-list' ranking your safety behaviors by reliance level, then systematically removing the top one during all exposures this week."
      });
    }

    // Physical symptoms (Item 5 ≥2)
    if (answers[4] >= 2) {
      addOns.push({
        type: "interoceptive-physical",
        title: "Physical Symptom Management",
        content: "Since you experience prominent physical symptoms, interoceptive practice that mimics blushing/shaking (like brief wall-sits or holding a warm cup before speaking) paired with staying engaged can be helpful."
      });
    }

    // Performance-specific fear
    if (performanceSpecific) {
      addOns.push({
        type: "performance-ladder",
        title: "Performance-Specific Exposure Plan",
        content: "For performance anxiety, consider a graduated exposure ladder: speak to 1 person → 3 people → small group → 2-minute meeting update → 5-minute presentation. Discuss beta-blocker options with your PCP for performance-only situations if needed."
      });
    }

    // Duration < 6 months (Item 8 ≤1)
    if (answers[7] <= 1) {
      addOns.push({
        type: "early-adjustment",
        title: "Early Adjustment Period",
        content: "Since your symptoms may be more recent, they could be situational. Early CBT skills can still be very helpful, and we recommend re-screening in 4-6 weeks to monitor progress."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Social Anxiety",
      maxScore: 24
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
        maxScore: results.maxScore
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
          <h4 className="font-medium">Additional Information (Optional)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="performance-specific"
              checked={performanceSpecific}
              onCheckedChange={(checked) => setPerformanceSpecific(checked as boolean)}
            />
            <Label htmlFor="performance-specific" className="text-sm leading-relaxed">
              My anxiety is mainly related to performance situations (presentations, auditions, public speaking)
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="functional-collapse"
              checked={functionalCollapse}
              onCheckedChange={(checked) => setFunctionalCollapse(checked as boolean)}
            />
            <Label htmlFor="functional-collapse" className="text-sm leading-relaxed">
              I cannot attend essential obligations (work, school, social commitments) due to social anxiety
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
            Social Anxiety Assessment
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
            This self-check takes 2-3 minutes and looks at social/performance anxiety over the last 4 weeks. 
            You'll get a private summary and next steps. This is not a diagnosis.
            <br />
            <strong>If you feel unsafe, call/text/chat 988 (24/7). In an emergency, call 911.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialAnxietyAssessment;