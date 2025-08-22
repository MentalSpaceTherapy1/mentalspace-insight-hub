import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, AlertTriangle, Phone, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SubstanceUseAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [followUps, setFollowUps] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Used a non-prescribed drug or a prescription medication not as prescribed (e.g., higher dose/route, someone else's Rx)."
    },
    {
      id: 2, 
      text: "Used more or longer than intended."
    },
    {
      id: 3,
      text: "Had strong urges/cravings to use."
    },
    {
      id: 4,
      text: "Spent a lot of time getting, using, or recovering."
    },
    {
      id: 5,
      text: "Had problems at work/school/home or gave up activities because of use."
    },
    {
      id: 6,
      text: "Continued use despite health, mood, sleep, or relationship problems."
    },
    {
      id: 7,
      text: "Used in hazardous situations (e.g., driving, mixing with opioids/benzodiazepines)."
    },
    {
      id: 8,
      text: "Had withdrawal symptoms or used to avoid withdrawal (e.g., with opioids, benzodiazepines)."
    }
  ];

  const followUpQuestions = [
    {
      id: "primarySubstance",
      text: "What is your main substance of concern?",
      type: "select",
      options: ["Opioids", "Stimulants (cocaine, methamphetamine)", "Cannabis/Marijuana", "Benzodiazepines", "Other"]
    },
    {
      id: "route",
      text: "Primary route of use:",
      type: "select", 
      options: ["Smoke", "Swallow/Oral", "Sniff/Snort", "Inject (IV/IM)"]
    },
    {
      id: "coUse",
      text: "Do you use any of these substances together?",
      type: "multiselect",
      options: ["Alcohol", "Benzodiazepines", "Opioids"]
    },
    {
      id: "pastOverdose",
      text: "Have you ever experienced an overdose?",
      type: "boolean"
    },
    {
      id: "naloxoneAccess",
      text: "Do you have access to naloxone (Narcan)?",
      type: "boolean"
    },
    {
      id: "pregnancy",
      text: "Are you pregnant or trying to conceive?",
      type: "boolean"
    }
  ];

  const scaleOptions = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" }, 
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" }
  ];

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleFollowUp = (questionId: string, value: any) => {
    setFollowUps(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentQuestion(questions.length); // Move to follow-ups
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    
    let severity = "";
    if (totalScore <= 4) severity = "None/Minimal";
    else if (totalScore <= 9) severity = "Mild"; 
    else if (totalScore <= 14) severity = "Moderate";
    else severity = "Severe";

    // Safety flags
    const withdrawalRisk = answers[8] >= 1 || followUps.primarySubstance === "Benzodiazepines";
    const opioidRisk = followUps.primarySubstance === "Opioids" || followUps.coUse?.includes("Opioids");
    const injectionUse = followUps.route === "Inject (IV/IM)";
    const hazardousUse = answers[7] >= 1;
    const pregnancy = followUps.pregnancy;

    return {
      totalScore,
      severity,
      withdrawalRisk,
      opioidRisk,
      injectionUse,
      hazardousUse,
      pregnancy
    };
  };

  const renderResults = () => {
    const results = calculateResults();
    
    let resultString = "";
    switch (results.severity) {
      case "None/Minimal":
        resultString = "Your responses do not indicate significant substance-related concerns right now. This is not a diagnosis.";
        break;
      case "Mild":
        resultString = "Your responses suggest mild substance-related risk. This is not a diagnosis.";
        break;
      case "Moderate":
        resultString = "Your responses suggest a moderate level of substance-related problems. This is not a diagnosis.";
        break;
      case "Severe":
        resultString = "Your responses suggest severe substance-related problems. This is not a diagnosis.";
        break;
    }

    const renderRecommendations = () => {
      switch (results.severity) {
        case "None/Minimal":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>If you use at all, learn overdose basics (recognize slow/absent breathing; give naloxone and call 911)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">This Week</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>If use increases or you face a high-risk situation (new supplier, using alone), re-screen in 4-6 weeks or request a prevention consult</li>
                </ul>
              </div>
            </div>
          );
        case "Mild":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Choose a goal (reduce/abstain for 4 weeks). List 3 triggers and 3 alternatives (call a friend, walk, hydrate, shower)</li>
                  <li>If opioids may be present (even unknowingly), keep naloxone and teach a support person how to use it</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">This Week</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>MI/CBT micro-plan: urge surfing (set a 10-minute timer), delay-decide, and if-then coping</li>
                  <li>If stimulants are your main drug, start a CM-style reward plan (self-reinforcement for negative screens/abstinence days)</li>
                  <li>Re-screen in 2-4 weeks</li>
                </ul>
              </div>
            </div>
          );
        case "Moderate":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pick reduce vs. abstain and tell a support person</li>
                  <li>If benzodiazepines involved: do not stop suddenly—book a clinician to plan a slow taper</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">This Week</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Begin structured therapy (CBT/MI; add contingency management if stimulants)</li>
                  <li>Medication discussions:</li>
                  <li className="ml-4">• Opioids → buprenorphine or methadone first-line; XR-naltrexone if fully detoxified</li>
                  <li className="ml-4">• Methamphetamine → naltrexone + bupropion shows promising benefit (continue CM)</li>
                  <li className="ml-4">• Cocaine/cannabis/benzodiazepines → focus on CBT/MI/CM for stimulants and gradual taper for benzodiazepines</li>
                  <li>Follow-up: Re-screen in 2-4 weeks; escalate if limited progress</li>
                </ul>
              </div>
            </div>
          );
        case "Severe":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Safety first: Do not drive; avoid mixing opioids with benzodiazepines or alcohol; carry naloxone</li>
                  <li>If withdrawal (shakes, sweats, agitation, seizures, severe anxiety) or past overdose → urgent medical care</li>
                  <li>Do not detox from benzodiazepines or high-dose opioids without medical supervision</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">This Week (Priority)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Start specialty SUD care; for OUD, initiate MOUD (buprenorphine or methadone)</li>
                  <li>For stimulant disorders, enroll in CM plus CBT/MI</li>
                  <li>Create a relapse-prevention plan (people/places/things, coping steps, crisis contacts)</li>
                  <li>Consider FindTreatment.gov or SAMHSA Helpline 1-800-662-HELP if local access is limited</li>
                </ul>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    const renderDynamicAddOns = () => {
      const addOns = [];

      if (results.opioidRisk) {
        addOns.push(
          <Alert key="naloxone" className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription>
              <strong>Naloxone Information:</strong> Naloxone (Narcan) is available over-the-counter in all 50 states. 
              Learn how to use it: give 2-4mg nasal spray, call 911, provide rescue breathing, stay until help arrives.
              For MOUD options: buprenorphine or methadone are first-line treatments that reduce mortality and improve retention.
            </AlertDescription>
          </Alert>
        );
      }

      if (followUps.primarySubstance === "Stimulants (cocaine, methamphetamine)") {
        addOns.push(
          <Alert key="stimulants" className="border-blue-200 bg-blue-50">
            <AlertTriangle className="h-4 w-4 text-blue-600" />
            <AlertDescription>
              <strong>Stimulant Care:</strong> Contingency management (CM) is the most effective behavioral treatment. 
              For methamphetamine, naltrexone + bupropion may help but is not FDA-approved for this indication. 
              No FDA-approved medications exist, so behavioral care remains core.
            </AlertDescription>
          </Alert>
        );
      }

      if (results.withdrawalRisk) {
        addOns.push(
          <Alert key="withdrawal" className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription>
              <strong>Withdrawal Safety:</strong> Benzodiazepine and alcohol withdrawal can be dangerous. 
              Use gradual tapering (5-10% decrements), avoid rapid reductions &gt;25% every 2 weeks. 
              Do not stop abruptly - seek medical supervision.
            </AlertDescription>
          </Alert>
        );
      }

      if (results.injectionUse) {
        addOns.push(
          <Alert key="injection" className="border-purple-200 bg-purple-50">
            <AlertTriangle className="h-4 w-4 text-purple-600" />
            <AlertDescription>
              <strong>Harm Reduction:</strong> Use fentanyl test strips, never use alone, access sterile supplies via syringe services. 
              Keep naloxone available and teach others how to use it.
            </AlertDescription>
          </Alert>
        );
      }

      if (results.pregnancy) {
        addOns.push(
          <Alert key="pregnancy" className="border-pink-200 bg-pink-50">
            <AlertTriangle className="h-4 w-4 text-pink-600" />
            <AlertDescription>
              <strong>Pregnancy Care:</strong> Seek specialty perinatal care immediately. 
              For OUD, buprenorphine or methadone are recommended - do not attempt withdrawal at home. 
              Coordinate with OB and addiction specialists.
            </AlertDescription>
          </Alert>
        );
      }

      return addOns;
    };

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Non-Alcohol Substance Use Assessment Results</CardTitle>
            <CardDescription>
              Score: {results.totalScore}/24 • Severity: {results.severity}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground">{resultString}</p>
            </div>

            {/* Safety Warnings */}
            <Alert className="border-red-200 bg-red-50">
              <Phone className="h-4 w-4 text-red-600" />
              <AlertDescription>
                <strong>Crisis Support:</strong> If you're having thoughts of self-harm or feeling unsafe, 
                call or text 988 for the Suicide & Crisis Lifeline (24/7, free, confidential).
              </AlertDescription>
            </Alert>

            {/* Dynamic Safety Add-ons */}
            {renderDynamicAddOns()}

            {/* Recommendations */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Recommended Next Steps</h3>
              {renderRecommendations()}
            </div>

            {/* Important Disclaimer */}
            <Alert className="border-muted-foreground/20">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Self-checks are educational and do not replace a professional evaluation. 
                If you have withdrawal symptoms, do not stop suddenly—seek medical advice. 
                If overdose is suspected, give naloxone and call 911.
              </AlertDescription>
            </Alert>

            {/* Emergency Resources */}
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Emergency Resources</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Crisis Line: Call or text 988</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Treatment Locator: FindTreatment.gov</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>SAMHSA Helpline: 1-800-662-HELP</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setFollowUps({});
                  setShowResults(false);
                }}
                variant="outline"
              >
                Take Again
              </Button>
              <Button asChild>
                <a href="/get-started">Connect with a Therapist</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderFollowUps = () => {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
            <CardDescription>
              A few more questions to personalize your results
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {followUpQuestions.map((question, index) => (
              <div key={question.id} className="space-y-3">
                <Label className="text-base font-medium">{question.text}</Label>
                
                {question.type === "select" && (
                  <Select onValueChange={(value) => handleFollowUp(question.id, value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Please select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {question.options?.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {question.type === "boolean" && (
                  <RadioGroup onValueChange={(value) => handleFollowUp(question.id, value === "true")}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id={`${question.id}-yes`} />
                      <Label htmlFor={`${question.id}-yes`}>Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id={`${question.id}-no`} />
                      <Label htmlFor={`${question.id}-no`}>No</Label>
                    </div>
                  </RadioGroup>
                )}

                {question.type === "multiselect" && (
                  <div className="space-y-2">
                    {question.options?.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${question.id}-${option}`}
                          onCheckedChange={(checked) => {
                            const current = followUps[question.id] || [];
                            if (checked) {
                              handleFollowUp(question.id, [...current, option]);
                            } else {
                              handleFollowUp(question.id, current.filter((item: string) => item !== option));
                            }
                          }}
                        />
                        <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              <Button onClick={() => setCurrentQuestion(questions.length - 1)} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button onClick={() => setShowResults(true)}>
                Get Results
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  if (showResults) {
    return renderResults();
  }

  if (currentQuestion === questions.length) {
    return renderFollowUps();
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {currentQuestion === 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Non-Alcohol Substance Use Assessment</CardTitle>
            <CardDescription>
              This self-check takes ~2-3 minutes and looks at your substance use over the past 3 months 
              (not including alcohol). You'll get a private summary and next steps. This is not a diagnosis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              <strong>Timeframe:</strong> Last 3 months<br />
              <strong>Scale:</strong> Not at all • Several days • More than half the days • Nearly every day
            </p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            In the past 3 months, how often have you experienced this:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-base font-medium">{currentQ.text}</p>
            
            <RadioGroup 
              value={answers[currentQ.id]?.toString()} 
              onValueChange={(value) => handleAnswer(currentQ.id, parseInt(value))}
            >
              {scaleOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value.toString()} id={`q${currentQ.id}-${option.value}`} />
                  <Label htmlFor={`q${currentQ.id}-${option.value}`} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex gap-4 mt-6">
            {currentQuestion > 0 && (
              <Button onClick={handleBack} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
            <Button 
              onClick={handleNext}
              disabled={answers[currentQ.id] === undefined}
              className="ml-auto"
            >
              {currentQuestion === questions.length - 1 ? "Continue" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubstanceUseAssessment;