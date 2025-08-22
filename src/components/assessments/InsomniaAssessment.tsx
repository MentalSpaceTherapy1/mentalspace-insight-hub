import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";

const InsomniaAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(8).fill(-1));
  const [suspectedOSA, setSuspectedOSA] = useState(false);
  const [rlsSymptoms, setRlsSymptoms] = useState(false);
  const [veryShortSleepHighEnergy, setVeryShortSleepHighEnergy] = useState(false);
  const [nightmares, setNightmares] = useState(false);
  const [drowsyDriving, setDrowsyDriving] = useState(false);
  const [pregnancy, setPregnancy] = useState(false);

  const questions = [
    "Trouble falling asleep (typically >30 minutes)",
    "Trouble staying asleep (frequent awakenings)",
    "Early morning waking with difficulty returning to sleep",
    "Sleep is unrefreshing (non-restorative)",
    "Daytime sleepiness/fatigue or reduced functioning from poor sleep",
    "Irregular schedule (variable bed/wake times, shift work, naps >30 min)",
    "Evening stimulants/substances (caffeine/nicotine/alcohol/THC) affect sleep",
    "Worry about sleep (clock-watching, dread of the night)"
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
    
    if (totalScore <= 5) {
      severity = "None/Minimal";
      resultText = "Your responses do not suggest significant insomnia symptoms right now. This is not a diagnosis.";
    } else if (totalScore <= 10) {
      severity = "Mild";
      resultText = "Your responses suggest mild insomnia symptoms. This is not a diagnosis.";
    } else if (totalScore <= 16) {
      severity = "Moderate";
      resultText = "Your responses suggest moderate insomnia symptoms. This is not a diagnosis.";
    } else {
      severity = "Severe";
      resultText = "Your responses suggest severe insomnia symptoms. This is not a diagnosis.";
    }

    // Generate dynamic add-ons based on responses
    const addOns = [];
    
    // Irregular schedule / shift work (Item 6 ≥2) → Circadian Stabilizer
    if (answers[5] >= 2) {
      addOns.push({
        type: "circadian-stabilizer",
        title: "Circadian Rhythm Stabilization Plan",
        content: "For irregular schedules/shift work: anchor wake time consistently, get morning light exposure, maintain consistent meal timing. If working shifts, use strategic light exposure, plan dark/nap timing, and create compromise schedules for days off."
      });
    }

    // Evening stimulants/substances (Item 7 ≥2) → Reduction Plan
    if (answers[6] >= 2) {
      addOns.push({
        type: "evening-substance-reduction",
        title: "Evening Stimulant/Substance Reduction Plan",
        content: "Substance timing modifications: stop caffeine after noon (or 8 hours before bed), taper nicotine after 8 PM, avoid alcohol within 3 hours of bedtime, and avoid THC as a sleep aid as it can cause sleep fragmentation."
      });
    }

    // Sleep worry (Item 8 ≥2) → Cognitive toolkit
    if (answers[7] >= 2) {
      addOns.push({
        type: "cognitive-toolkit",
        title: "Sleep Anxiety Cognitive Toolkit",
        content: "For sleep worry and clock-watching: turn clock away, practice paradoxical intention ('try to stay awake calmly'), schedule 15-minute 'worry time' earlier in day, and use brief thought records to challenge catastrophic sleep predictions."
      });
    }

    // Suspected OSA → STOP-Bang screen + PCP referral
    if (suspectedOSA) {
      addOns.push({
        type: "osa-referral",
        title: "Sleep Apnea Evaluation Recommended",
        content: "Based on snoring, witnessed breathing pauses, or daytime somnolence, consider completing STOP-Bang screening and schedule evaluation with your primary care provider or sleep clinic for possible sleep study."
      });
    }

    // Nightmares → Nightmare Toolkit + PTSD screen
    if (nightmares) {
      addOns.push({
        type: "nightmare-toolkit-ptsd-prompt",
        title: "Nightmare Management & Trauma Screening",
        content: "For trauma-related nightmares, consider Imagery Rehearsal Therapy and completing a PTSD screening. Address underlying trauma alongside sleep interventions for comprehensive care."
      });
    }

    // RLS → PCP evaluation
    if (rlsSymptoms) {
      addOns.push({
        type: "rls-primary-care-prompt",
        title: "Restless Legs Syndrome Evaluation",
        content: "RLS symptoms require medical evaluation including iron studies (ferritin levels). Primary care assessment is recommended before implementing sleep restriction protocols."
      });
    }

    // Drowsy driving safety
    if (drowsyDriving) {
      addOns.push({
        type: "drowsy-driving-safety",
        title: "URGENT: Drowsy Driving Safety Alert",
        content: "Do not drive when sleepy. If you're nodding off while driving or at work, seek urgent sleep evaluation. This is a serious safety risk that requires immediate attention."
      });
    }

    // Mania risk (very short sleep + high energy)
    if (veryShortSleepHighEnergy) {
      addOns.push({
        type: "bipolar-screen-sleep-caution",
        title: "Bipolar Screening & Sleep Restriction Caution",
        content: "Very short sleep with high energy may indicate mood episodes. Consider bipolar screening. Sleep restriction should be used cautiously and under clinical supervision if bipolar disorder is suspected."
      });
    }

    return {
      score: totalScore,
      severity,
      resultText,
      addOns,
      assessmentType: "Insomnia / Sleep Difficulty",
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
          <h4 className="font-medium">Additional Information (For Safety & Medical Screening)</h4>
          
          <div className="flex items-start space-x-2">
            <Checkbox
              id="suspected-osa"
              checked={suspectedOSA}
              onCheckedChange={(checked) => setSuspectedOSA(checked as boolean)}
            />
            <Label htmlFor="suspected-osa" className="text-sm leading-relaxed">
              I snore loudly, others have noticed breathing pauses during sleep, or I have morning headaches
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="rls-symptoms"
              checked={rlsSymptoms}
              onCheckedChange={(checked) => setRlsSymptoms(checked as boolean)}
            />
            <Label htmlFor="rls-symptoms" className="text-sm leading-relaxed">
              I have an urge to move my legs that's worse at rest/evening and relieved by movement
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="short-sleep-high-energy"
              checked={veryShortSleepHighEnergy}
              onCheckedChange={(checked) => setVeryShortSleepHighEnergy(checked as boolean)}
            />
            <Label htmlFor="short-sleep-high-energy" className="text-sm leading-relaxed">
              I sleep very little (2-4 hours) but feel high energy, elevated mood, or unusually productive
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="nightmares"
              checked={nightmares}
              onCheckedChange={(checked) => setNightmares(checked as boolean)}
            />
            <Label htmlFor="nightmares" className="text-sm leading-relaxed">
              I experience frequent nightmares or trauma-related sleep disturbances
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="drowsy-driving"
              checked={drowsyDriving}
              onCheckedChange={(checked) => setDrowsyDriving(checked as boolean)}
            />
            <Label htmlFor="drowsy-driving" className="text-sm leading-relaxed">
              I nod off while driving or have fallen asleep at work due to sleepiness
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="pregnancy"
              checked={pregnancy}
              onCheckedChange={(checked) => setPregnancy(checked as boolean)}
            />
            <Label htmlFor="pregnancy" className="text-sm leading-relaxed">
              I am currently pregnant or trying to become pregnant
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
            Insomnia/Sleep Assessment
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm mb-4">
            Over the last <strong>2 weeks</strong>, how often have you been bothered by the following?
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
            This self-check takes ~2-3 minutes and looks at your sleep over the past 2 weeks. 
            You'll get a private summary and next-step options. This is not a diagnosis.
            <br />
            <strong>Do not drive if sleepy. If snoring with pauses or severe daytime sleepiness are present, seek a medical evaluation.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsomniaAssessment;