import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarDays, TrendingUp, Moon, Zap, Heart, Brain, ArrowLeft, Save } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface MoodEntry {
  date: string;
  mood: number;
  energy: number;
  sleep: number;
  anxiety: number;
  activities: string[];
  notes: string;
}

const moodLabels = [
  'Terrible', 'Very Poor', 'Poor', 'Below Average', 'Fair', 
  'Average', 'Good', 'Very Good', 'Great', 'Excellent'
];

const energyLabels = [
  'Exhausted', 'Very Low', 'Low', 'Below Average', 'Fair',
  'Average', 'Good', 'High', 'Very High', 'Energized'
];

const sleepLabels = [
  'Terrible', 'Very Poor', 'Poor', 'Restless', 'Fair',
  'Average', 'Good', 'Refreshing', 'Great', 'Perfect'
];

const anxietyLabels = [
  'None', 'Minimal', 'Slight', 'Mild', 'Moderate',
  'Noticeable', 'High', 'Very High', 'Severe', 'Overwhelming'
];

const commonActivities = [
  'Exercise/Physical Activity',
  'Social Time with Friends/Family',
  'Work/School',
  'Relaxation/Rest',
  'Creative Activities',
  'Outdoor Time/Nature',
  'Meditation/Mindfulness',
  'Reading/Learning',
  'Entertainment (TV/Movies/Games)',
  'Household Tasks',
  'Self-Care Activities',
  'Medical/Therapy Appointments'
];

export default function MoodTracker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [moodData, setMoodData] = useState({
    mood: [5],
    energy: [5],
    sleep: [5],
    anxiety: [5],
    activities: [] as string[],
    notes: ''
  });
  const [savedEntries, setSavedEntries] = useState<MoodEntry[]>([]);
  const [showSaved, setShowSaved] = useState(false);

  const totalSteps = 5;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  // Load saved entries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('moodTrackerEntries');
    if (saved) {
      setSavedEntries(JSON.parse(saved));
    }
  }, []);

  const handleSliderChange = (field: string, value: number[]) => {
    setMoodData(prev => ({ ...prev, [field]: value }));
  };

  const handleActivityToggle = (activity: string) => {
    setMoodData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleNotesChange = (notes: string) => {
    setMoodData(prev => ({ ...prev, notes }));
  };

  const saveEntry = () => {
    const entry: MoodEntry = {
      date: new Date().toISOString().split('T')[0],
      mood: moodData.mood[0],
      energy: moodData.energy[0],
      sleep: moodData.sleep[0],
      anxiety: moodData.anxiety[0],
      activities: moodData.activities,
      notes: moodData.notes
    };

    const newEntries = [entry, ...savedEntries.filter(e => e.date !== entry.date)];
    setSavedEntries(newEntries);
    localStorage.setItem('moodTrackerEntries', JSON.stringify(newEntries));
    setShowSaved(true);
  };

  const resetTracker = () => {
    setCurrentStep(0);
    setMoodData({
      mood: [5],
      energy: [5],
      sleep: [5],
      anxiety: [5],
      activities: [],
      notes: ''
    });
    setShowSaved(false);
  };

  const getInsights = () => {
    if (savedEntries.length < 3) return null;

    const recent = savedEntries.slice(0, 7); // Last 7 entries
    const avgMood = recent.reduce((sum, entry) => sum + entry.mood, 0) / recent.length;
    const avgEnergy = recent.reduce((sum, entry) => sum + entry.energy, 0) / recent.length;
    const avgSleep = recent.reduce((sum, entry) => sum + entry.sleep, 0) / recent.length;
    const avgAnxiety = recent.reduce((sum, entry) => sum + entry.anxiety, 0) / recent.length;

    const insights = [];
    
    if (avgMood >= 7) {
      insights.push("Your mood has been consistently good recently! 😊");
    } else if (avgMood <= 4) {
      insights.push("Your mood has been lower lately. Consider reaching out for support if this continues.");
    }

    if (avgEnergy <= 3) {
      insights.push("Your energy levels have been low. Focus on sleep, nutrition, and gentle movement.");
    }

    if (avgSleep <= 4) {
      insights.push("Sleep quality seems to be affecting you. Consider sleep hygiene practices.");
    }

    if (avgAnxiety >= 7) {
      insights.push("Anxiety levels have been elevated. Breathing exercises and relaxation techniques may help.");
    }

    return insights;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">How is your mood today?</h3>
              <p className="text-muted-foreground">Rate your overall emotional state</p>
            </div>
            <div className="space-y-4">
              <div className="px-4">
                <Slider
                  value={moodData.mood}
                  onValueChange={(value) => handleSliderChange('mood', value)}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {moodData.mood[0]}/10
                </div>
                <div className="text-lg text-muted-foreground">
                  {moodLabels[moodData.mood[0] - 1]}
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">What's your energy level?</h3>
              <p className="text-muted-foreground">How energetic or tired do you feel?</p>
            </div>
            <div className="space-y-4">
              <div className="px-4">
                <Slider
                  value={moodData.energy}
                  onValueChange={(value) => handleSliderChange('energy', value)}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {moodData.energy[0]}/10
                </div>
                <div className="text-lg text-muted-foreground">
                  {energyLabels[moodData.energy[0] - 1]}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Moon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">How did you sleep last night?</h3>
              <p className="text-muted-foreground">Rate the quality of your sleep</p>
            </div>
            <div className="space-y-4">
              <div className="px-4">
                <Slider
                  value={moodData.sleep}
                  onValueChange={(value) => handleSliderChange('sleep', value)}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {moodData.sleep[0]}/10
                </div>
                <div className="text-lg text-muted-foreground">
                  {sleepLabels[moodData.sleep[0] - 1]}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Brain className="h-12 w-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">How anxious do you feel?</h3>
              <p className="text-muted-foreground">Rate your current anxiety level</p>
            </div>
            <div className="space-y-4">
              <div className="px-4">
                <Slider
                  value={moodData.anxiety}
                  onValueChange={(value) => handleSliderChange('anxiety', value)}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {moodData.anxiety[0]}/10
                </div>
                <div className="text-lg text-muted-foreground">
                  {anxietyLabels[moodData.anxiety[0] - 1]}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <CalendarDays className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">What did you do today?</h3>
              <p className="text-muted-foreground">Select activities that apply (optional)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {commonActivities.map((activity) => (
                <div key={activity} className="flex items-center space-x-2">
                  <Checkbox
                    id={activity}
                    checked={moodData.activities.includes(activity)}
                    onCheckedChange={() => handleActivityToggle(activity)}
                  />
                  <Label htmlFor={activity} className="text-sm cursor-pointer">
                    {activity}
                  </Label>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional notes (optional)</Label>
              <Textarea
                id="notes"
                placeholder="How are you feeling? Any specific thoughts or events worth noting..."
                value={moodData.notes}
                onChange={(e) => handleNotesChange(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderSummary = () => {
    const insights = getInsights();
    const todayEntry = savedEntries.find(entry => entry.date === new Date().toISOString().split('T')[0]);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Save className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Entry Saved!</h2>
          <p className="text-muted-foreground">
            Your mood data for {new Date().toLocaleDateString()} has been recorded.
          </p>
        </div>

        {todayEntry && (
          <Card>
            <CardHeader>
              <CardTitle>Today's Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">{todayEntry.mood}/10</div>
                  <div className="text-sm text-muted-foreground">Mood</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{todayEntry.energy}/10</div>
                  <div className="text-sm text-muted-foreground">Energy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{todayEntry.sleep}/10</div>
                  <div className="text-sm text-muted-foreground">Sleep</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{todayEntry.anxiety}/10</div>
                  <div className="text-sm text-muted-foreground">Anxiety</div>
                </div>
              </div>
              
              {todayEntry.activities.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {todayEntry.activities.map((activity, index) => (
                      <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {todayEntry.notes && (
                <div>
                  <h4 className="font-semibold mb-2">Notes:</h4>
                  <p className="text-sm text-muted-foreground">{todayEntry.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {insights && insights.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Weekly Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {insights.map((insight, index) => (
                  <Alert key={index}>
                    <AlertDescription>{insight}</AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {savedEntries.length >= 7 && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {savedEntries.slice(0, 7).map((entry, index) => (
                  <div key={entry.date} className="flex items-center justify-between text-sm">
                    <span>{new Date(entry.date).toLocaleDateString()}</span>
                    <div className="flex gap-4">
                      <span className="text-pink-600">Mood: {entry.mood}</span>
                      <span className="text-yellow-600">Energy: {entry.energy}</span>
                      <span className="text-blue-600">Sleep: {entry.sleep}</span>
                      <span className="text-purple-600">Anxiety: {entry.anxiety}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center space-y-4">
          <Button onClick={resetTracker} className="w-full">
            Track Another Day
          </Button>
          <p className="text-sm text-muted-foreground">
            Your data is stored locally on your device and never shared.
          </p>
        </div>
      </div>
    );
  };

  if (showSaved) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        {renderSummary()}
      </div>
    );
  }

  const canProceed = currentStep < 4 || (currentStep === 4);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Daily Mood Tracker</CardTitle>
              <CardDescription>
                Step {currentStep + 1} of {totalSteps}
              </CardDescription>
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent>
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={() => {
                if (currentStep === totalSteps - 1) {
                  saveEntry();
                } else {
                  setCurrentStep(currentStep + 1);
                }
              }}
              disabled={!canProceed}
            >
              {currentStep === totalSteps - 1 ? 'Save Entry' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          Track your daily mood patterns to better understand your mental health. 
          Your data stays private on your device.
        </p>
      </div>
    </div>
  );
}