import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Info } from 'lucide-react';

interface FormData {
  country: string;
  gender: string;
  age: string;
  sexuality: string;
  relationshipStatus: string;
  religionImportance: string;
  therapyReasons: string[];
  therapistStyle: string;
  physicalHealth: string;
}

const TherapistMatchingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    country: '',
    gender: '',
    age: '',
    sexuality: '',
    relationshipStatus: '',
    religionImportance: '',
    therapyReasons: [],
    therapistStyle: '',
    physicalHealth: ''
  });

  const totalSteps = 9;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const updatedReasons = checked 
      ? [...formData.therapyReasons, value]
      : formData.therapyReasons.filter(reason => reason !== value);
    updateFormData('therapyReasons', updatedReasons);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Which country are you in?</h2>
            <Select value={formData.country} onValueChange={(value) => updateFormData('country', value)}>
              <SelectTrigger className="w-full max-w-md mx-auto">
                <SelectValue placeholder="United States" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">What is your gender identity?</h2>
            <RadioGroup value={formData.gender} onValueChange={(value) => updateFormData('gender', value)} className="space-y-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="woman" id="woman" />
                <Label htmlFor="woman" className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">Woman</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="man" id="man" />
                <Label htmlFor="man" className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">Man</Label>
              </div>
            </RadioGroup>
            <button className="text-primary underline">More options</button>
            <div className="bg-secondary/10 p-4 rounded-lg flex items-start space-x-3">
              <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Gender plays an important role in shaping personal identity and experiences. 
                This information will help your therapist create a more personalized approach.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">How old are you?</h2>
            <Select value={formData.age} onValueChange={(value) => updateFormData('age', value)}>
              <SelectTrigger className="w-full max-w-md mx-auto">
                <SelectValue placeholder="Select your age" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18-25">18-25</SelectItem>
                <SelectItem value="26-35">26-35</SelectItem>
                <SelectItem value="36-45">36-45</SelectItem>
                <SelectItem value="46-55">46-55</SelectItem>
                <SelectItem value="56-65">56-65</SelectItem>
                <SelectItem value="65+">65+</SelectItem>
              </SelectContent>
            </Select>
            <div className="bg-secondary/10 p-4 rounded-lg flex items-start space-x-3">
              <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">Did you know?</p>
                <p>Almost a fifth of older adults in the United States have experienced depression. 
                (Geriatric Mental Health Foundation, 2008)</p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">How do you identify?</h2>
            <RadioGroup value={formData.sexuality} onValueChange={(value) => updateFormData('sexuality', value)} className="space-y-4">
              {['Straight', 'Gay', 'Lesbian', 'Bi or Pan', 'Prefer not to say'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                  <Label htmlFor={option.toLowerCase()} className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <button className="text-primary underline">More options</button>
            <div className="bg-secondary/10 p-4 rounded-lg flex items-start space-x-3">
              <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Your answer will help us match you to a suitable therapist as well as help your therapist 
                create a treatment plan that respects your identity and experiences.
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">What is your relationship status?</h2>
            <RadioGroup value={formData.relationshipStatus} onValueChange={(value) => updateFormData('relationshipStatus', value)} className="space-y-4">
              {['Single', 'In a relationship', 'Married', 'Divorced', 'Widowed', 'Other'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                  <Label htmlFor={option.toLowerCase()} className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">How important is religion in your life?</h2>
            <RadioGroup value={formData.religionImportance} onValueChange={(value) => updateFormData('religionImportance', value)} className="space-y-4">
              {['Very important', 'Important', 'Somewhat important', 'Not important at all'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                  <Label htmlFor={option.toLowerCase()} className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <div className="bg-secondary/10 p-4 rounded-lg flex items-start space-x-3">
              <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                We ask questions about religion so we can match you to a therapist who can empathize with your background.
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">What led you to consider therapy today?</h2>
            <div className="space-y-4">
              {[
                "I've been feeling depressed",
                "I feel anxious or overwhelmed",
                "My mood is interfering with my job/school performance",
                "I struggle with building or maintaining relationships",
                "I can't find purpose and meaning in my life",
                "I am grieving",
                "I have experienced trauma",
                "I need to talk through a specific challenge",
                "I want to gain self confidence",
                "I want to improve myself but I don't know where to start",
                "Recommended to me (friend, family, doctor)",
                "Just exploring",
                "Other"
              ].map((reason) => (
                <div key={reason} className="flex items-center space-x-2">
                  <Checkbox 
                    id={reason}
                    checked={formData.therapyReasons.includes(reason)}
                    onCheckedChange={(checked) => handleCheckboxChange(reason, checked as boolean)}
                  />
                  <Label htmlFor={reason} className="text-sm cursor-pointer">{reason}</Label>
                </div>
              ))}
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg flex items-start space-x-3">
              <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                This is a preliminary question to understand what you are going through, 
                you will have more opportunities to explain or elaborate on your feelings and challenges later on.
              </p>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Would you prefer a therapist who is gentle or direct?</h2>
            <RadioGroup value={formData.therapistStyle} onValueChange={(value) => updateFormData('therapistStyle', value)} className="space-y-4">
              {['Gentle', 'Somewhat gentle', 'No preference', 'Somewhat direct', 'Direct'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                  <Label htmlFor={option.toLowerCase()} className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">How would you rate your current physical health?</h2>
            <RadioGroup value={formData.physicalHealth} onValueChange={(value) => updateFormData('physicalHealth', value)} className="space-y-4">
              {['Good', 'Fair', 'Poor'].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                  <Label htmlFor={option.toLowerCase()} className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <div className="bg-secondary/10 p-4 rounded-lg flex items-start space-x-3">
              <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>Studies show that exercise can help with depression as effectively as antidepressant medication.</p>
                <p className="italic">(Psychosomatic Medicine, 2007)</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center space-x-2 mb-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`h-2 w-8 rounded-full ${
                    i < currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <CardTitle className="text-3xl font-bold">
              Help us match you to the <span className="text-primary">right therapist</span>
            </CardTitle>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              It's important to have a therapist who you can establish a personal connection with. 
              The following questions are designed to match you to a licensed therapist based on your 
              therapy needs and personal preferences.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {renderStep()}
            
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              <div className="ml-auto">
                {currentStep < totalSteps ? (
                  <Button 
                    onClick={handleNext}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full"
                  >
                    Next
                  </Button>
                ) : (
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full"
                    onClick={() => {
                      // Handle form submission
                      console.log('Form completed:', formData);
                    }}
                  >
                    Find My Therapist
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TherapistMatchingForm;