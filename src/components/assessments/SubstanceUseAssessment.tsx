import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, AlertTriangle, Phone } from "lucide-react";

const SubstanceUseAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [functionalCollapse, setFunctionalCollapse] = useState(false);
  const [followUps, setFollowUps] = useState<Record<string, any>>({});

  const questions = [
    "Used a non-prescribed drug or a prescription medication not as prescribed (e.g., higher dose/route, someone else's Rx)",
    "Used more or longer than intended",
    "Had strong urges/cravings to use",
    "Spent a lot of time getting, using, or recovering",
    "Had problems at work/school/home or gave up activities because of use",
    "Continued use despite health, mood, sleep, or relationship problems",
    "Used in hazardous situations (e.g., driving, mixing with opioids/benzodiazepines)",
    "Had withdrawal symptoms or used to avoid withdrawal (e.g., with opioids, benzodiazepines)"
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

  const handleFollowUp = (key: string, value: any) => {
    setFollowUps({ ...followUps, [key]: value });
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + parseInt(val), 0);
    
    let severity = "";
    if (totalScore <= 4) severity = "none";
    else if (totalScore <= 9) severity = "mild";
    else if (totalScore <= 14) severity = "moderate";
    else severity = "severe";

    const withdrawalRisk = parseInt(answers[7] || "0") >= 1 || followUps.primarySubstance === "Benzodiazepines";
    const opioidRisk = followUps.primarySubstance === "Opioids" || (followUps.coUse && followUps.coUse.includes("Opioids"));
    const injectionUse = followUps.route === "Inject (IV/IM)";
    const hazardousUse = parseInt(answers[6] || "0") >= 1;
    const pregnancy = followUps.pregnancy === true;
    const crisis = false; // No direct crisis detection in substance use assessment
    const priorityOutreach = (severity === "severe") || (severity === "moderate" && functionalCollapse);

    return { 
      totalScore, 
      severity, 
      withdrawalRisk, 
      opioidRisk, 
      injectionUse, 
      hazardousUse, 
      pregnancy, 
      crisis, 
      priorityOutreach 
    };
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
    const { totalScore, severity, withdrawalRisk, opioidRisk, injectionUse, pregnancy } = results;

    const getSeverityString = () => {
      switch (severity) {
        case "none": return "None/Minimal";
        case "mild": return "Mild";
        case "moderate": return "Moderate";
        case "severe": return "Severe";
        default: return "";
      }
    };

    const getResultDescription = () => {
      switch (severity) {
        case "none": return "Your responses do not indicate significant substance-related concerns right now. This is not a diagnosis.";
        case "mild": return "Your responses suggest mild substance-related risk. This is not a diagnosis.";
        case "moderate": return "Your responses suggest a moderate level of substance-related problems. This is not a diagnosis.";
        case "severe": return "Your responses suggest severe substance-related problems. This is not a diagnosis.";
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
                  <li>If you use at all, learn overdose basics (recognize slow/absent breathing; give naloxone and call 911)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">This week</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>If use increases or you face a high-risk situation (new supplier, using alone), re-screen in 4-6 weeks or request a prevention consult</li>
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
                  <li>Choose a goal (reduce/abstain for 4 weeks). List 3 triggers and 3 alternatives (call a friend, walk, hydrate, shower)</li>
                  <li>If opioids may be present (even unknowingly), keep naloxone and teach a support person how to use it</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">This week</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>MI/CBT micro-plan: urge surfing (set a 10-minute timer), delay-decide, and if-then coping</li>
                  <li>If stimulants are your main drug, start a CM-style reward plan (self-reinforcement for negative screens/abstinence days)</li>
                  <li>Re-screen in 2-4 weeks</li>
                </ul>
              </div>
            </div>
          );

        case "moderate":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pick reduce vs. abstain and tell a support person</li>
                  <li>If benzodiazepines involved: do not stop suddenly—book a clinician to plan a slow taper</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">This week</h4>
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

        case "severe":
          return (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Today</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Safety first: Do not drive; avoid mixing opioids with benzodiazepines or alcohol; carry naloxone</li>
                  <li>If withdrawal (shakes, sweats, agitation, seizures, severe anxiety) or past overdose → urgent medical care</li>
                  <li className="text-red-600 font-medium">Do not detox from benzodiazepines or high-dose opioids without medical supervision</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">This week (priority)</h4>
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

    const getDynamicAddOns = () => {
      const addOns = [];

      if (opioidRisk) {
        addOns.push(
          <div key="naloxone" className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Naloxone Information</h4>
            <p className="text-sm">Naloxone (Narcan) is available over-the-counter in all 50 states. Learn how to use it: give 2-4mg nasal spray, call 911, provide rescue breathing, stay until help arrives. For MOUD options: buprenorphine or methadone are first-line treatments that reduce mortality and improve retention.</p>
          </div>
        );
      }

      if (followUps.primarySubstance === "Stimulants (cocaine, methamphetamine)") {
        addOns.push(
          <div key="stimulants" className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Stimulant Care</h4>
            <p className="text-sm">Contingency management (CM) is the most effective behavioral treatment. For methamphetamine, naltrexone + bupropion may help but is not FDA-approved for this indication. No FDA-approved medications exist, so behavioral care remains core.</p>
          </div>
        );
      }

      if (withdrawalRisk) {
        addOns.push(
          <div key="withdrawal" className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Withdrawal Safety</h4>
            <p className="text-sm">Benzodiazepine and alcohol withdrawal can be dangerous. Use gradual tapering (5-10% decrements), avoid rapid reductions &gt;25% every 2 weeks. Do not stop abruptly - seek medical supervision.</p>
          </div>
        );
      }

      if (injectionUse) {
        addOns.push(
          <div key="injection" className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Harm Reduction</h4>
            <p className="text-sm">Use fentanyl test strips, never use alone, access sterile supplies via syringe services. Keep naloxone available and teach others how to use it.</p>
          </div>
        );
      }

      if (pregnancy) {
        addOns.push(
          <div key="pregnancy" className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Pregnancy Care</h4>
            <p className="text-sm">Seek specialty perinatal care immediately. For OUD, buprenorphine or methadone are recommended - do not attempt withdrawal at home. Coordinate with OB and addiction specialists.</p>
          </div>
        );
      }

      return addOns;
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Results: {getSeverityString()} (Score: {totalScore}/24)
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

        <div className="pt-4">
          <Button 
            className="w-full" 
            size="lg"
            onClick={() => navigate("/assessment-contact", {
              state: {
                assessmentType: "Substance Use",
                score: totalScore,
                severity: getSeverityString(),
                resultText: getResultDescription(),
                maxScore: 24
              }
            })}
          >
            {severity === "severe" || (severity === "moderate" && functionalCollapse)
              ? "Priority scheduling with MentalSpace Therapy"
              : "Request an appointment with MentalSpace Therapy"
            }
          </Button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg text-sm text-muted-foreground">
          <p className="font-medium mb-2">Important Notice:</p>
          <p>Self-checks are educational and do not replace a professional evaluation. If you have withdrawal symptoms, do not stop suddenly—seek medical advice. If overdose is suspected, give naloxone and call 911.</p>
        </div>
      </div>
    );
  };

  const renderFollowUpQuestions = () => {
    return (
      <div className="space-y-6">
        <div>
          <Label className="text-base font-medium">What is your main substance of concern?</Label>
          <Select onValueChange={(value) => handleFollowUp("primarySubstance", value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Please select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Opioids">Opioids</SelectItem>
              <SelectItem value="Stimulants (cocaine, methamphetamine)">Stimulants (cocaine, methamphetamine)</SelectItem>
              <SelectItem value="Cannabis/Marijuana">Cannabis/Marijuana</SelectItem>
              <SelectItem value="Benzodiazepines">Benzodiazepines</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-base font-medium">Primary route of use:</Label>
          <Select onValueChange={(value) => handleFollowUp("route", value)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Please select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Smoke">Smoke</SelectItem>
              <SelectItem value="Swallow/Oral">Swallow/Oral</SelectItem>
              <SelectItem value="Sniff/Snort">Sniff/Snort</SelectItem>
              <SelectItem value="Inject (IV/IM)">Inject (IV/IM)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-base font-medium mb-3 block">Do you use any of these substances together?</Label>
          <div className="space-y-2">
            {["Alcohol", "Benzodiazepines", "Opioids"].map((substance) => (
              <div key={substance} className="flex items-center space-x-2">
                <Checkbox
                  id={substance}
                  onCheckedChange={(checked) => {
                    const current = followUps.coUse || [];
                    if (checked) {
                      handleFollowUp("coUse", [...current, substance]);
                    } else {
                      handleFollowUp("coUse", current.filter((item: string) => item !== substance));
                    }
                  }}
                />
                <Label htmlFor={substance}>{substance}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-base font-medium mb-3 block">Have you ever experienced an overdose?</Label>
          <RadioGroup onValueChange={(value) => handleFollowUp("pastOverdose", value === "true")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="overdose-yes" />
              <Label htmlFor="overdose-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="overdose-no" />
              <Label htmlFor="overdose-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-base font-medium mb-3 block">Do you have access to naloxone (Narcan)?</Label>
          <RadioGroup onValueChange={(value) => handleFollowUp("naloxoneAccess", value === "true")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="naloxone-yes" />
              <Label htmlFor="naloxone-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="naloxone-no" />
              <Label htmlFor="naloxone-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-base font-medium mb-3 block">Are you pregnant or trying to conceive?</Label>
          <RadioGroup onValueChange={(value) => handleFollowUp("pregnancy", value === "true")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="pregnancy-yes" />
              <Label htmlFor="pregnancy-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="pregnancy-no" />
              <Label htmlFor="pregnancy-no">No</Label>
            </div>
          </RadioGroup>
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
            <CardTitle>Non-Alcohol Substance Use Assessment Results</CardTitle>
            <CardDescription>
              Self-checks are educational and not a medical diagnosis. If you have withdrawal symptoms or feel unsafe, seek immediate medical care.
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
              This self-check takes ~2-3 minutes and looks at your substance use over the past 3 months 
              (not including alcohol). Your answers are private and used to generate a summary and next steps. This is not a diagnosis.
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
          <CardTitle>Non-Alcohol Substance Use Assessment</CardTitle>
          <CardDescription>
            Over the last 3 months, how often have you experienced the following?
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

          {/* Follow-up questions on last question */}
          {currentQuestion === questions.length - 1 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-4">Additional Information</h4>
                {renderFollowUpQuestions()}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="functional-collapse" 
                    checked={functionalCollapse}
                    onCheckedChange={(checked) => setFunctionalCollapse(checked as boolean)}
                  />
                  <Label htmlFor="functional-collapse" className="text-sm">
                    I have missed work/school, stopped taking care of myself, or cannot perform essential daily activities due to substance use
                  </Label>
                </div>
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
              If you're experiencing thoughts of self-harm or need immediate help:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call 988
              </Button>
              <Button variant="outline" size="sm">
                Text 988
              </Button>
              <Button variant="outline" size="sm">
                SAMHSA: 1-800-662-HELP
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubstanceUseAssessment;