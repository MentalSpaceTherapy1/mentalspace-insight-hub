import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, AlertTriangle, Phone } from "lucide-react";

const DepressionAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [functionalCollapse, setFunctionalCollapse] = useState(false);

  const questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, sad, or hopeless", 
    "Sleep problems (trouble falling/staying asleep or sleeping too much)",
    "Low energy or fatigue",
    "Appetite or weight change without trying",
    "Feeling worthless or excessive guilt",
    "Trouble concentrating (work, reading, TV)",
    "Moving/speaking noticeably slower—or feeling very restless/\"keyed up\"",
    "Thoughts of being better off dead or of self‑harm"
  ];

  const options = [
    { value: "0", label: "Not at all" },
    { value: "1", label: "Several days" },
    { value: "2", label: "More than half the days" },
    { value: "3", label: "Nearly every day" }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + parseInt(val), 0);
    const item9Score = parseInt(answers[8] || "0");
    
    let severity = "";
    if (totalScore <= 4) severity = "none";
    else if (totalScore <= 9) severity = "mild";
    else if (totalScore <= 14) severity = "moderate";
    else if (totalScore <= 19) severity = "mod-severe";
    else severity = "severe";

    const crisis = item9Score >= 1;
    const priorityOutreach = (severity === "mod-severe" || severity === "severe") && functionalCollapse;

    return { totalScore, severity, crisis, priorityOutreach, item9Score };
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderResultsContent = () => {
    const results = calculateResults();
    const { totalScore, severity, crisis, item9Score } = results;

    const getSeverityString = () => {
      switch (severity) {
        case "none": return "None/Minimal";
        case "mild": return "Mild";
        case "moderate": return "Moderate";
        case "mod-severe": return "Moderately Severe";
        case "severe": return "Severe";
        default: return "";
      }
    };

    const getResultDescription = () => {
      switch (severity) {
        case "none": return "Your responses do not indicate significant depressive symptoms right now. This is not a diagnosis.";
        case "mild": return "Your responses suggest mild depressive symptoms. This is not a diagnosis.";
        case "moderate": return "Your responses suggest moderate depressive symptoms. This is not a diagnosis.";
        case "mod-severe": return "Your responses suggest moderately severe depressive symptoms. This is not a diagnosis.";
        case "severe": return "Your responses suggest severe depressive symptoms. This is not a diagnosis.";
        default: return "";
      }
    };

    const getRecommendations = () => {
      switch (severity) {
        case "none":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Keep your current routine (consistent wake time, meals, movement)</li>
                  <li>Do one small pleasant activity (call a friend, brief walk outside)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">This week (Days 1–7)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Schedule two social contacts (coffee/phone)</li>
                  <li>Track sleep/wake for 7 days to catch early patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">If symptoms persist or worsen (2–4 weeks)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Re-screen and consider a brief consult with Coping & Healing</li>
                </ul>
              </div>
            </div>
          );

        case "mild":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Start Behavioral Activation: list 6 micro-actions (2 pleasure / 2 mastery / 2 self-care). Complete any 3 today</li>
                  <li>Reduce alcohol/cannabis tonight (they can worsen mood/sleep)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">This week</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Exercise: 3 sessions (even brisk 15–20 min)</li>
                  <li>Mood tracking: Before/after each activity, rate mood 0–10 to see what helps</li>
                  <li>Add a sleep micro-plan (fixed wake time, 45–60 min wind-down, no screens in bed)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Therapy option</h4>
                <p className="text-sm">Consider a brief CBT/BA course (4–8 sessions) to build momentum. BA alone is effective for less-to-moderate severity.</p>
              </div>
            </div>
          );

        case "moderate":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Draft a Sleep Protection Plan (same wake time daily; no naps &gt;20 min; device-free last hour)</li>
                  <li>Choose one problem you can influence (e.g., bill, email backlog). Use a 3-step problem-solving sheet: define → options → next action</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">This week</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Activity Scheduling: add 5 activities (2 pleasure, 2 mastery, 1 connection)</li>
                  <li>Start CBT or BA with a clinician; if grief/role transition is central, consider IPT</li>
                  <li>Book a PCP visit to review contributing medical factors and discuss whether medication is appropriate</li>
                </ul>
              </div>
            </div>
          );

        case "mod-severe":
        case "severe":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Enlist a support person to check in with you</li>
                  <li>Remove or secure means for self-harm; avoid alcohol/illicit substances</li>
                  <li className="text-red-600 font-medium">If you have any intent or plan for self-harm → call/text/chat 988 now (24/7)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">This week (priority)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Begin structured psychotherapy (CBT/BA/IPT). For these severities, therapy + antidepressant is often recommended</li>
                  <li>Schedule a PCP/psychiatry appointment to discuss options and monitoring</li>
                  <li>Create a Safety Plan (warning signs, internal coping, people/places, crisis numbers)</li>
                </ul>
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    const getDynamicAddOns = () => {
      const addOns = [];
      const item3 = parseInt(answers[2] || "0"); // Sleep problems
      const item5 = parseInt(answers[4] || "0"); // Appetite/weight
      const item8 = parseInt(answers[7] || "0"); // Psychomotor

      if (item3 >= 2) {
        addOns.push(
          <div key="sleep" className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Sleep Support Recommended</h4>
            <p className="text-sm">Your responses indicate sleep difficulties. Consider CBT-I basics: fixed wake time, stimulus control, and sleep diary.</p>
          </div>
        );
      }

      if (item5 >= 2) {
        addOns.push(
          <div key="appetite" className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Appetite/Weight Changes Noted</h4>
            <p className="text-sm">Consider discussing eating patterns with a healthcare provider if weight loss, purging, or strong body image concerns are present.</p>
          </div>
        );
      }

      if (item8 >= 2) {
        addOns.push(
          <div key="psychomotor" className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Calming Skills Recommended</h4>
            <p className="text-sm">Try paced breathing (4-6 count) and grounding techniques (5-4-3-2-1: 5 things you see, 4 you hear, etc.).</p>
          </div>
        );
      }

      return addOns;
    };

    return (
      <div className="space-y-6">
        {crisis && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">Immediate Support Available</h3>
            </div>
            <div className="mt-3 space-y-3">
              <p className="text-red-700">Your responses indicate thoughts of self-harm. Help is available 24/7.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 988
                </Button>
                <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                  Text 988
                </Button>
                <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                  Chat at 988lifeline.org
                </Button>
              </div>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Results: {getSeverityString()} (Score: {totalScore}/27)
          </h3>
          <p className="text-muted-foreground mb-4">{getResultDescription()}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Recommended Next Steps</h4>
          {getRecommendations()}
        </div>

        {getDynamicAddOns().length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Additional Support</h4>
            <div className="space-y-3">
              {getDynamicAddOns()}
            </div>
          </div>
        )}

        {!crisis && (
          <div className="pt-4">
            <Button 
              className="w-full" 
              size="lg"
              onClick={() => navigate("/assessment-contact", {
                state: {
                  assessmentType: "Depression",
                  score: totalScore,
                  severity: getSeverityString(),
                  resultText: getResultDescription(),
                  maxScore: 27
                }
              })}
            >
              {severity === "mod-severe" || severity === "severe" 
                ? "Priority scheduling with Coping & Healing"
                : "Request an appointment with Coping & Healing"
              }
            </Button>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg text-sm text-muted-foreground">
          <p className="font-medium mb-2">Important Notice:</p>
          <p>Self-checks are educational and do not replace a professional evaluation. If you feel unsafe or have thoughts of self-harm, call/text/chat 988 (24/7). In an emergency, call 911.</p>
        </div>
      </div>
    );
  };

  const progress = showResults ? 100 : ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" onClick={() => navigate("/mental-health-tests")} className="p-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div className="text-sm text-muted-foreground">Assessment Complete</div>
            </div>
            <CardTitle>Depression Assessment Results</CardTitle>
            <CardDescription>
              Self-checks are educational and not a medical diagnosis. If you feel unsafe, use the crisis options below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderResultsContent()}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {currentQuestion === 0 && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              This self-check takes 2–4 minutes and looks at common symptoms from the past 2 weeks. 
              Your answers are private and used to generate a summary and next steps. This is not a diagnosis.
            </p>
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" onClick={() => navigate("/mental-health-tests")} className="p-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          <Progress value={progress} className="mb-4" />
          <CardTitle>Depression Assessment (PHQ-9)</CardTitle>
          <CardDescription>
            Over the last 2 weeks, how often have you been bothered by the following problem?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">{questions[currentQuestion]}</h3>
            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Functional collapse check for severe cases */}
          {currentQuestion === questions.length - 1 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="functional-collapse" 
                  checked={functionalCollapse}
                  onCheckedChange={(checked) => setFunctionalCollapse(checked as boolean)}
                />
                <Label htmlFor="functional-collapse" className="text-sm">
                  I have missed work/school, stopped eating regularly, or have difficulty getting out of bed due to these symptoms
                </Label>
              </div>
            </div>
          )}
          
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? "Complete Assessment" : "Next"}
              {currentQuestion < questions.length - 1 && <ArrowRight className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Crisis resources always visible at bottom */}
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Crisis Support:</strong> If you feel unsafe or have thoughts of harming yourself, call/text/chat 988 (24/7).
            </p>
            <div className="flex justify-center gap-2">
              <Button variant="outline" size="sm">Call 988</Button>
              <Button variant="outline" size="sm">Text 988</Button>
              <Button variant="outline" size="sm">Chat 988</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DepressionAssessment;