import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Phone, MessageSquare, Globe, ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Question {
  id: string;
  text: string;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: 'exhaustion',
    text: 'Emotional/physical exhaustion after or before workdays',
    options: [
      { value: '0', label: 'Not at all' },
      { value: '1', label: 'Several days' },
      { value: '2', label: 'More than half the days' },
      { value: '3', label: 'Nearly every day' }
    ]
  },
  {
    id: 'cynicism',
    text: 'Mental distance/cynicism toward work (detached, irritable, "what\'s the point")',
    options: [
      { value: '0', label: 'Not at all' },
      { value: '1', label: 'Several days' },
      { value: '2', label: 'More than half the days' },
      { value: '3', label: 'Nearly every day' }
    ]
  },
  {
    id: 'efficacy',
    text: 'Feeling less effective/competent at work than usual',
    options: [
      { value: '0', label: 'Not at all' },
      { value: '1', label: 'Several days' },
      { value: '2', label: 'More than half the days' },
      { value: '3', label: 'Nearly every day' }
    ]
  },
  {
    id: 'sleep',
    text: 'Sleep problems tied to work (rumination, early waking)',
    options: [
      { value: '0', label: 'Not at all' },
      { value: '1', label: 'Several days' },
      { value: '2', label: 'More than half the days' },
      { value: '3', label: 'Nearly every day' }
    ]
  },
  {
    id: 'errors',
    text: 'Errors or near-misses at work due to fatigue/stress',
    options: [
      { value: '0', label: 'Not at all' },
      { value: '1', label: 'Several days' },
      { value: '2', label: 'More than half the days' },
      { value: '3', label: 'Nearly every day' }
    ]
  },
  {
    id: 'avoidance',
    text: 'Avoiding/delaying key tasks, or presenteeism (there but not productive)',
    options: [
      { value: '0', label: 'Not at all' },
      { value: '1', label: 'Several days' },
      { value: '2', label: 'More than half the days' },
      { value: '3', label: 'Nearly every day' }
    ]
  },
  {
    id: 'somatic',
    text: 'Tension headaches, GI upset, muscle pain on workdays',
    options: [
      { value: '0', label: 'Not at all' },
      { value: '1', label: 'Several days' },
      { value: '2', label: 'More than half the days' },
      { value: '3', label: 'Nearly every day' }
    ]
  },
  {
    id: 'workload',
    text: 'Work overload + low control/support (too much to do, little autonomy/backup)',
    options: [
      { value: '0', label: 'Not at all' },
      { value: '1', label: 'Several days' },
      { value: '2', label: 'More than half the days' },
      { value: '3', label: 'Nearly every day' }
    ]
  }
];

const followUpQuestions = [
  {
    id: 'safetyCritical',
    text: 'Does your job involve safety-critical work (driving, machinery, patient care, public safety)?',
    type: 'yesno'
  },
  {
    id: 'teamLead',
    text: 'Are you in a team lead or management role?',
    type: 'yesno'
  }
];

export default function StressBurnoutAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const totalSteps = questions.length + followUpQuestions.length;
  const progress = ((currentStep) / totalSteps) * 100;

  const handleResponse = (questionId: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    const mainScore = questions.reduce((sum, question) => {
      return sum + parseInt(responses[question.id] || '0');
    }, 0);

    let severity = '';
    let severityColor = '';
    if (mainScore <= 4) {
      severity = 'None/Minimal';
      severityColor = 'text-green-600';
    } else if (mainScore <= 9) {
      severity = 'Mild';
      severityColor = 'text-yellow-600';
    } else if (mainScore <= 14) {
      severity = 'Moderate';
      severityColor = 'text-orange-600';
    } else {
      severity = 'Severe';
      severityColor = 'text-red-600';
    }

    // Safety flags
    const errorsFlag = parseInt(responses.errors || '0') >= 1;
    const safetyCritical = responses.safetyCritical === 'yes';
    const showSafetyBanner = errorsFlag && safetyCritical;
    
    // Dynamic flags
    const demandsLowControl = parseInt(responses.workload || '0') >= 2;
    const cynicismFlag = parseInt(responses.cynicism || '0') >= 2;
    const efficacyFlag = parseInt(responses.efficacy || '0') >= 2;
    const sleepFlag = parseInt(responses.sleep || '0') >= 2;
    const somaticFlag = parseInt(responses.somatic || '0') >= 2;
    const teamLead = responses.teamLead === 'yes';

    return {
      score: mainScore,
      severity,
      severityColor,
      showSafetyBanner,
      demandsLowControl,
      cynicismFlag,
      efficacyFlag,
      sleepFlag,
      somaticFlag,
      teamLead,
      errorsFlag
    };
  };

  const getRecommendations = (results: ReturnType<typeof calculateResults>) => {
    const { severity, score } = results;

    if (severity === 'None/Minimal') {
      return {
        meaning: "Your responses do not indicate a current work-related burnout pattern. This is not a diagnosis.",
        today: [
          "Protect a fixed stop time and a 10-minute wind-down before bed",
          "Plan two micro-breaks tomorrow (90–120-minute focus cycles)"
        ],
        thisWeek: [
          "Clarify top-3 priorities with your manager; park non-urgent items"
        ]
      };
    } else if (severity === 'Mild') {
      return {
        meaning: "Your responses suggest mild burnout-type stress. This is not a diagnosis.",
        today: [
          "Do a 3-step unhook routine after work: device off → 5-minute breath walk → 2-sentence day-close note",
          "Start a sleep anchor (fixed wake time; phones out of bed)"
        ],
        thisWeek: [
          "Try a CBT-SM micro-plan (identify trigger → reframe → choose one workable action)",
          "Begin mindfulness 10 min/day (breath, body scan, or mindful walk)",
          "Block two no-meeting hours for deep work",
          "Re-screen in 2–4 weeks"
        ]
      };
    } else if (severity === 'Moderate') {
      return {
        meaning: "Your responses suggest a moderate burnout-type pattern. This is not a diagnosis.",
        today: [
          "Write a Job Demands–Resources (JD-R) map: top overloads vs. resources; pick one demand to reduce and one resource to increase this week",
          "If you had near-misses, handoff safety-critical tasks today; sleep 7–9 h over next 2–3 nights"
        ],
        thisWeek: [
          "Start structured CBT-based stress management or MBSR/MBI program",
          "Negotiate one workload/autonomy change using risk-assessment framing",
          "If sleep is a driver, begin CBT-I starter (fixed wake; stimulus control)",
          "Re-screen in 2–4 weeks; escalate if minimal change"
        ]
      };
    } else {
      return {
        meaning: "Your responses suggest a severe burnout-type pattern. This is not a diagnosis.",
        today: [
          "Safety & stabilization: if making errors or driving drowsy, pause safety-critical work; schedule recovery sleep tonight",
          "Identify a support person; set an auto-reply to narrow response windows",
          "Remove alcohol/THC as sleep aids (worsen sleep)"
        ],
        thisWeek: [
          "Priority access to CBT-based stress program or MBSR/MBI, plus weekly therapy",
          "Arrange a manager meeting using WHO/HSE structure (identify risks, agree actions, set review dates)",
          "Consider temporary workload reduction, rota adjustments, or short restorative leave per organizational policy",
          "Run Depression/Anxiety co-screens; if positive, begin indicated care"
        ]
      };
    }
  };

  const renderQuestion = () => {
    if (currentStep < questions.length) {
      const question = questions[currentStep];
      const currentResponse = responses[question.id];

      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {question.text}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Over the last 4 weeks, how often have you experienced this?
            </p>
            <RadioGroup
              value={currentResponse}
              onValueChange={(value) => handleResponse(question.id, value)}
              className="space-y-3"
            >
              {question.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                  <Label htmlFor={`${question.id}-${option.value}`} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      );
    } else {
      const followUpIndex = currentStep - questions.length;
      const question = followUpQuestions[followUpIndex];
      const currentResponse = responses[question.id];

      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {question.text}
            </h3>
            <RadioGroup
              value={currentResponse}
              onValueChange={(value) => handleResponse(question.id, value)}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id={`${question.id}-yes`} />
                <Label htmlFor={`${question.id}-yes`} className="flex-1 cursor-pointer">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id={`${question.id}-no`} />
                <Label htmlFor={`${question.id}-no`} className="flex-1 cursor-pointer">
                  No
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      );
    }
  };

  const renderResults = () => {
    const results = calculateResults();
    const recommendations = getRecommendations(results);

    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Assessment Results</h2>
          <div className="space-y-2">
            <p className="text-lg">
              Total Score: <span className="font-semibold">{results.score}/24</span>
            </p>
            <p className="text-lg">
              Severity Level: <span className={`font-semibold ${results.severityColor}`}>{results.severity}</span>
            </p>
          </div>
        </div>

        {results.showSafetyBanner && (
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Safety Alert:</strong> You've reported errors/near-misses in safety-critical work. Consider reducing or handing off safety-critical tasks until you're well-rested, and notify your supervisor per policy.
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>What This Means</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{recommendations.meaning}</p>
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Burnout is classified by the WHO as an occupational phenomenon—exhaustion, mental distance/cynicism, reduced efficacy—not a medical diagnosis.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Today:</h4>
              <ul className="list-disc list-inside space-y-1">
                {recommendations.today.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">This Week:</h4>
              <ul className="list-disc list-inside space-y-1">
                {recommendations.thisWeek.map((item, index) => (
                  <li key={index} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Add-ons */}
        {results.demandsLowControl && (
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">Manager Conversation Kit</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-800">
              <p className="mb-2">High demands with low control detected. Consider:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create a Job Demands-Resources map with your manager</li>
                <li>Request specific changes to workload or autonomy</li>
                <li>Use HSE Management Standards risk-assessment framework</li>
                <li>Set review dates for agreed changes</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {results.cynicismFlag && (
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Values & Job-Crafting</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              <p className="mb-2">Mental distance from work detected. Try:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Re-align tasks with your strengths and impact areas</li>
                <li>Add a "why it matters" step to task beginnings</li>
                <li>Identify small ways to craft your role toward your values</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {results.efficacyFlag && (
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Efficacy Building</CardTitle>
            </CardHeader>
            <CardContent className="text-green-800">
              <p className="mb-2">Reduced work effectiveness noted. Consider:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Track 2 daily wins/completions (however small)</li>
                <li>Request clearer scope/definitions for ambiguous tasks</li>
                <li>Break large projects into smaller, measurable steps</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {results.sleepFlag && (
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Sleep & Recovery</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800">
              <p className="mb-2">Work-related sleep problems detected. Try:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Fixed wake time (even on weekends)</li>
                <li>Leave bed if awake for ~20 minutes</li>
                <li>Create a 30-minute wind-down routine</li>
                <li>Consider CBT-I (Cognitive Behavioral Therapy for Insomnia)</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {results.somaticFlag && (
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Physical Tension Relief</CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-800">
              <p className="mb-2">Stress-related physical symptoms noted. Try:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Brief movement breaks every 90-120 minutes</li>
                <li>Diaphragmatic breathing (4 counts in, 6 counts out)</li>
                <li>Posture resets and neck/shoulder rolls</li>
                <li>Progressive muscle relaxation before bed</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {results.teamLead && (
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800">Manager Skills Pack</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-800">
              <p className="mb-2">As a team lead/manager, consider:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Hold psychologically safe check-ins with your team</li>
                <li>Practice workload triage and realistic deadline setting</li>
                <li>Ensure predictable time off for your team and yourself</li>
                <li>Follow WHO workplace guidance and Surgeon General Framework</li>
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Crisis Support Box */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Crisis Support Available 24/7
            </CardTitle>
          </CardHeader>
          <CardContent className="text-red-800">
            <p className="mb-3">If you feel unsafe or hopeless:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Call 988</span> - Suicide & Crisis Lifeline
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="font-semibold">Text 988</span> - Crisis text support
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="font-semibold">Chat at 988lifeline.org</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {!results.showSafetyBanner && (
          <Card>
            <CardHeader>
              <CardTitle>Professional Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Consider professional support for CBT-based stress management, mindfulness-based training, and help preparing an organizational plan.
              </p>
              <Button className="w-full">
                Request an appointment with MentalSpace Therapy
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="text-center pt-4">
          <Button 
            variant="outline" 
            onClick={() => {
              setShowResults(false);
              setCurrentStep(0);
              setResponses({});
            }}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Take Assessment Again
          </Button>
        </div>
      </div>
    );
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        {renderResults()}
      </div>
    );
  }

  const currentQuestion = currentStep < questions.length ? questions[currentStep] : followUpQuestions[currentStep - questions.length];
  const currentResponse = responses[currentQuestion.id];
  const canProceed = currentResponse !== undefined;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Stress & Burnout Assessment</CardTitle>
              <CardDescription>
                Question {currentStep + 1} of {totalSteps}
              </CardDescription>
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent>
          {renderQuestion()}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed}
            >
              {currentStep === totalSteps - 1 ? 'View Results' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          This self-check takes ~2-3 minutes and looks at stress and burnout-type symptoms related to work over the last 4 weeks. 
          You'll get a private summary and next steps. This is not a diagnosis.
        </p>
      </div>
    </div>
  );
}