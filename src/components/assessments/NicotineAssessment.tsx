import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, AlertTriangle, Phone, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const questions = [
  "I use nicotine within 5–10 minutes of waking on most days.",
  "I use nicotine many times a day or near-continuously (e.g., frequent vaping).",
  "I find it hard to refrain from nicotine in places where it's not allowed.",
  "I get strong cravings/irritability/restlessness if I don't use for a while.",
  "I use nicotine despite health problems (e.g., cough, asthma/COPD flare, high BP).",
  "I wake at night to use nicotine (or keep nicotine by the bed).",
  "I've made serious quit attempts in the past year (≥24 h) without success.",
  "I had withdrawal (e.g., anxiety, insomnia, low mood, increased appetite) when I cut down/quit."
];

const options = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Several days" },
  { value: "2", label: "More than half the days" },
  { value: "3", label: "Nearly every day" }
];

export default function NicotineAssessment() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(""));
  const [showResults, setShowResults] = useState(false);
  const [followUps, setFollowUps] = useState({
    pregnant: false,
    cardiopulmonary: false,
    psychiatric: false,
    vapingOnly: false
  });

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer || "0"), 0);
    
    let severity = "";
    let severityDescription = "";
    
    if (totalScore <= 4) {
      severity = "Low";
      severityDescription = "Your responses suggest low nicotine dependence. This is not a diagnosis.";
    } else if (totalScore <= 9) {
      severity = "Moderate";
      severityDescription = "Your responses suggest moderate nicotine dependence. This is not a diagnosis.";
    } else if (totalScore <= 14) {
      severity = "High";
      severityDescription = "Your responses suggest high nicotine dependence. This is not a diagnosis.";
    } else {
      severity = "Very High";
      severityDescription = "Your responses suggest very high nicotine dependence. This is not a diagnosis.";
    }

    return { totalScore, severity, severityDescription };
  };

  const getRecommendations = (severity: string, totalScore: number) => {
    const timeToFirst = parseInt(answers[0] || "0") >= 2;
    const nightUse = parseInt(answers[5] || "0") >= 2;
    const heavyVaping = parseInt(answers[1] || "0") >= 2;
    const failedAttempts = parseInt(answers[6] || "0") >= 1;

    const recommendations = {
      today: [] as string[],
      thisWeek: [] as string[],
      addOns: [] as { title: string; content: string }[]
    };

    switch (severity) {
      case "Low":
        recommendations.today = [
          "Set a quit or reduction date (within 2 weeks).",
          "Text/call 1-800-QUIT-NOW to enroll in coaching and (in many states) request free NRT."
        ];
        recommendations.thisWeek = [
          "Practice the 4Ds for cravings: Delay 10 min · Deep breathe · Drink water · Do something else.",
          "If you slip, restart the clock—multiple attempts are normal.",
          "You may do fine with behavioral support alone; add medication if cravings persist."
        ];
        break;
      
      case "Moderate":
        recommendations.today = [
          "Choose one first-line option: Varenicline start 1 week before quit date; or NRT patch + fast-acting NRT; or Bupropion SR starting 1–2 weeks before quit date.",
          "Set house/car rules (100% nicotine-free)."
        ];
        recommendations.thisWeek = [
          "Pair meds with coaching (quitline or therapist). Counseling + meds beats either alone.",
          "Build a trigger plan (coffee, driving, breaks, stress) → specify an alternative (walk, water, message a friend).",
          "Re-screen: 2–4 weeks; if cravings break through, step up to High plan."
        ];
        break;
      
      case "High":
        recommendations.today = [
          "Start varenicline (first-line) or combination NRT (patch + gum/lozenge).",
          "Remove cues (lighters/devices) and stock oral substitutes (mint, water bottle)."
        ];
        recommendations.thisWeek = [
          "Schedule 2–3 coaching contacts (quitline/therapy).",
          "If still struggling by week 2–3, consider med changes under a prescriber.",
          "If you wake to use nicotine, consider a 24-h patch."
        ];
        break;
      
      case "Very High":
        recommendations.today = [
          "Priority: initiate varenicline or clinician-guided combination NRT immediately. Pair with coaching (1-800-QUIT-NOW).",
          "Enlist a support person; remove or lock away backup nicotine."
        ];
        recommendations.thisWeek = [
          "Twice-weekly coaching in the first month; plan medication refills/titration early.",
          "If psychiatric history: EAGLES showed no excess serious neuropsychiatric events with varenicline/bupropion.",
          "If pregnant/trying: use behavioral first; discuss NRT only via shared decision-making."
        ];
        break;
    }

    // Add dynamic add-ons
    if (timeToFirst) {
      recommendations.addOns.push({
        title: "High Dependence Support",
        content: "Start pharmacotherapy on day 1; prefer varenicline or combination NRT; arrange coaching contact this week."
      });
    }

    if (nightUse) {
      recommendations.addOns.push({
        title: "24-Hour Support Plan",
        content: "Consider 24-h patch or tailored patch timing + fast-acting NRT for late-evening urges."
      });
    }

    if (heavyVaping && followUps.vapingOnly) {
      recommendations.addOns.push({
        title: "Vaping-Specific Plan",
        content: "Set a quit date, reduce nicotine mg/mL and puff budget, and treat as nicotine dependence (consider varenicline or NRT; pair with coaching)."
      });
    }

    if (failedAttempts) {
      recommendations.addOns.push({
        title: "Enhanced Strategy",
        content: "Change medication class (e.g., switch NRT → varenicline or add short-acting NRT); increase contact frequency."
      });
    }

    if (followUps.psychiatric) {
      recommendations.addOns.push({
        title: "Mental Health Considerations",
        content: "EAGLES trial found no increase in serious neuropsychiatric events with varenicline or bupropion vs patch/placebo."
      });
    }

    if (followUps.pregnant) {
      recommendations.addOns.push({
        title: "Pregnancy Considerations",
        content: "Behavioral counseling first; consider NRT only with shared decision-making. Avoid varenicline/bupropion unless advised by specialist."
      });
    }

    return recommendations;
  };

  const getSafetyAlerts = () => {
    const alerts = [];
    
    if (followUps.pregnant) {
      alerts.push({
        type: "warning" as const,
        title: "Pregnancy Considerations",
        content: "Behavioral counseling is recommended first. The evidence is insufficient to recommend pharmacotherapy in pregnancy - consider NRT only with shared decision-making."
      });
    }

    if (followUps.cardiopulmonary) {
      alerts.push({
        type: "warning" as const,
        title: "Medical Review Recommended",
        content: "With severe cardiopulmonary disease, coordinate quit-medication choices with your healthcare provider. Behavioral treatment should not be delayed."
      });
    }

    return alerts;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const { totalScore, severity, severityDescription } = calculateResults();
    const recommendations = getRecommendations(severity, totalScore);
    const safetyAlerts = getSafetyAlerts();

    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/mental-health-tests")}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tests
            </Button>
            <h1 className="text-3xl font-bold text-foreground">
              Nicotine Dependence Assessment Results
            </h1>
          </div>

          {/* Safety Alerts */}
          {safetyAlerts.map((alert, index) => (
            <Alert key={index} className="border-warning/50 bg-warning/5">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <AlertDescription className="font-medium">
                <div className="font-semibold text-warning">{alert.title}</div>
                <div className="text-muted-foreground mt-1">{alert.content}</div>
              </AlertDescription>
            </Alert>
          ))}

          {/* Results Summary */}
          <Card className="border-2">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">
                <span className="text-primary">{severity}</span> Nicotine Dependence
              </CardTitle>
              <p className="text-lg text-muted-foreground">{severityDescription}</p>
              <div className="text-sm text-muted-foreground mt-2">
                Total Score: {totalScore}/24
              </div>
            </CardHeader>
          </Card>

          {/* Recommendations */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  Today
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recommendations.today.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">{rec}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recommendations.thisWeek.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm">{rec}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Dynamic Add-ons */}
          {recommendations.addOns.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Personalized Recommendations</h3>
              <div className="grid gap-4">
                {recommendations.addOns.map((addon, index) => (
                  <Card key={index} className="border-accent/20 bg-accent/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-accent-foreground">{addon.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{addon.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Resources */}
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Immediate Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                <div>
                  <div className="font-medium">National Quitline</div>
                  <div className="text-sm text-muted-foreground">Free counseling and often free NRT</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-lg font-bold text-primary">1-800-QUIT-NOW</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                <div>
                  <div className="font-medium">Crisis Support</div>
                  <div className="text-sm text-muted-foreground">24/7 crisis counseling and support</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-lg font-bold text-primary">988</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Help CTA */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6 text-center space-y-4">
              <h3 className="text-xl font-semibold text-primary">Ready for Professional Support?</h3>
              <p className="text-muted-foreground">
                Connect with our specialists for evidence-based nicotine cessation (coaching + medication planning)
              </p>
              <Button 
                onClick={() => navigate("/assessment-contact")} 
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Get Professional Help
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-muted/20 border-muted">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> Self-checks are educational and do not replace a professional evaluation. 
                For free help, call 1-800-QUIT-NOW. If you are pregnant or trying to conceive, talk with your clinician about the safest plan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/mental-health-tests")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tests
          </Button>
          <h1 className="text-3xl font-bold text-foreground">
            Nicotine Dependence Assessment
          </h1>
          <p className="text-muted-foreground">
            This self-check looks at nicotine use (cigarettes, vapes, smokeless) over the past 30 days.
          </p>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">
              {questions[currentQuestion]}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Over the past 30 days, how often have you experienced this?
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup 
              value={answers[currentQuestion]} 
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer font-medium"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Follow-up Questions (on last question) */}
        {currentQuestion === questions.length - 1 && (
          <Card className="border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-lg">Additional Information</CardTitle>
              <p className="text-sm text-muted-foreground">
                This helps us provide more personalized recommendations (optional)
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="pregnant"
                  checked={followUps.pregnant}
                  onCheckedChange={(checked) => setFollowUps(prev => ({ ...prev, pregnant: !!checked }))}
                />
                <Label htmlFor="pregnant" className="text-sm">
                  I am pregnant or trying to conceive
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="cardiopulmonary"
                  checked={followUps.cardiopulmonary}
                  onCheckedChange={(checked) => setFollowUps(prev => ({ ...prev, cardiopulmonary: !!checked }))}
                />
                <Label htmlFor="cardiopulmonary" className="text-sm">
                  I have severe heart/lung disease or recent heart attack
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="psychiatric"
                  checked={followUps.psychiatric}
                  onCheckedChange={(checked) => setFollowUps(prev => ({ ...prev, psychiatric: !!checked }))}
                />
                <Label htmlFor="psychiatric" className="text-sm">
                  I have a history of mental health conditions
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="vapingOnly"
                  checked={followUps.vapingOnly}
                  onCheckedChange={(checked) => setFollowUps(prev => ({ ...prev, vapingOnly: !!checked }))}
                />
                <Label htmlFor="vapingOnly" className="text-sm">
                  I only use vaping products (no cigarettes)
                </Label>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <Button 
            variant="outline"
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button 
            onClick={goToNext}
            disabled={!answers[currentQuestion]}
            className="bg-primary hover:bg-primary/90"
          >
            {currentQuestion === questions.length - 1 ? "View Results" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Bottom disclaimer */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            This assessment is for educational purposes only and does not replace professional medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}