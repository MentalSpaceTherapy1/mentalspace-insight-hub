import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useAnalytics } from "@/hooks/useAnalytics";
import { cn } from "@/lib/utils";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CareerApplication = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { submitForm, isSubmitting, isSuccess, error } = useFormSubmission();
  const { trackFormStart } = useAnalytics();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    
    // Professional Information
    licenseType: "",
    licenseNumber: "",
    yearsExperience: "",
    specializations: [] as string[],
    currentWorkSetting: "",
    
    // Availability & Preferences
    hoursPerWeek: "",
    preferredSchedule: "",
    clientTypes: [] as string[],
    therapyModes: [] as string[],
    
    // Application Details
    motivation: "",
    experience: "",
    availability: "",
    termsAccepted: false
  });

  // Track form start on mount
  useEffect(() => {
    trackFormStart('career_application');
  }, [trackFormStart]);

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  // US States
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ];

  const licenseTypes = [
    "LCSW - Licensed Clinical Social Worker",
    "LPC - Licensed Professional Counselor", 
    "LMFT - Licensed Marriage and Family Therapist",
    "LMHC - Licensed Mental Health Counselor",
    "LPCC - Licensed Professional Clinical Counselor",
    "LCPC - Licensed Clinical Professional Counselor",
    "LCP - Licensed Clinical Psychologist",
    "LCSW-C - Licensed Certified Social Worker-Clinical",
    "Other"
  ];

  const specializationOptions = [
    "Anxiety & Depression",
    "Trauma & PTSD", 
    "Couples Therapy",
    "Family Therapy",
    "Addiction Recovery",
    "ADHD",
    "Bipolar Disorder",
    "Eating Disorders",
    "Grief & Loss",
    "Life Transitions",
    "Teen & Adolescent Therapy",
    "LGBTQ+ Issues",
    "Cultural & Diversity Issues"
  ];

  const clientTypeOptions = [
    "Adults (18+)",
    "Teens (13-17)",
    "Children (6-12)",
    "Couples",
    "Families",
    "Groups"
  ];

  const therapyModeOptions = [
    "Video Sessions",
    "Phone Sessions", 
    "Text-based Therapy",
    "In-person Sessions"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = async () => {
    if (!formData.termsAccepted && currentStep === totalSteps) {
      toast({
        variant: "destructive",
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue."
      });
      return;
    }

    // Prepare form data for submission
    const submissionData = {
      ...formData,
      specializations: formData.specializations.join(', '),
      clientTypes: formData.clientTypes.join(', '),
      therapyModes: formData.therapyModes.join(', '),
      submissionDate: new Date().toISOString()
    };

    const result = await submitForm('career_application', submissionData);
    
    if (result.success) {
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. Our recruitment team will review it and contact you soon."
      });
      navigate("/thank-you");
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error || "There was an error submitting your application. Please try again."
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Personal Information
              </h2>
              <p className="text-muted-foreground">Let's start with your basic information</p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label className="text-base font-medium">First Name *</Label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-base font-medium">Last Name *</Label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">Email Address *</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">Phone Number *</Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">State *</Label>
                <Select onValueChange={(value) => handleInputChange("state", value)} value={formData.state}>
                  <SelectTrigger className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Professional Credentials
              </h2>
              <p className="text-muted-foreground">Tell us about your professional qualifications</p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="space-y-3">
                <Label className="text-base font-medium">License Type *</Label>
                <Select onValueChange={(value) => handleInputChange("licenseType", value)} value={formData.licenseType}>
                  <SelectTrigger className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200">
                    <SelectValue placeholder="Select your license type" />
                  </SelectTrigger>
                  <SelectContent>
                    {licenseTypes.map((license) => (
                      <SelectItem key={license} value={license}>
                        {license}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">License Number *</Label>
                <Input
                  value={formData.licenseNumber}
                  onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                  required
                  className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="Enter your license number"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">Years of Experience *</Label>
                <Select onValueChange={(value) => handleInputChange("yearsExperience", value)} value={formData.yearsExperience}>
                  <SelectTrigger className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200">
                    <SelectValue placeholder="Select years of experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="2-5">2-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="11-15">11-15 years</SelectItem>
                    <SelectItem value="16+">16+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">Current Work Setting</Label>
                <Select onValueChange={(value) => handleInputChange("currentWorkSetting", value)} value={formData.currentWorkSetting}>
                  <SelectTrigger className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200">
                    <SelectValue placeholder="Select current work setting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private-practice">Private Practice</SelectItem>
                    <SelectItem value="community-mental-health">Community Mental Health</SelectItem>
                    <SelectItem value="hospital">Hospital/Medical Center</SelectItem>
                    <SelectItem value="telehealth">Telehealth Platform</SelectItem>
                    <SelectItem value="school">School/Educational Setting</SelectItem>
                    <SelectItem value="nonprofit">Nonprofit Organization</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Areas of Specialization
              </h2>
              <p className="text-muted-foreground">Select your areas of expertise (choose all that apply)</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specializationOptions.map((specialization) => (
                  <div key={specialization} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                    <Checkbox
                      id={specialization}
                      checked={formData.specializations.includes(specialization)}
                      onCheckedChange={(checked) => handleArrayChange("specializations", specialization, checked as boolean)}
                    />
                    <Label 
                      htmlFor={specialization} 
                      className="text-base font-medium cursor-pointer"
                    >
                      {specialization}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Availability & Preferences
              </h2>
              <p className="text-muted-foreground">Tell us about your availability and preferred work style</p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="space-y-3">
                <Label className="text-base font-medium">Preferred Hours per Week *</Label>
                <Select onValueChange={(value) => handleInputChange("hoursPerWeek", value)} value={formData.hoursPerWeek}>
                  <SelectTrigger className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200">
                    <SelectValue placeholder="Select hours per week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-20">10-20 hours</SelectItem>
                    <SelectItem value="20-30">20-30 hours</SelectItem>
                    <SelectItem value="30-40">30-40 hours</SelectItem>
                    <SelectItem value="40+">40+ hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">Preferred Schedule</Label>
                <RadioGroup 
                  value={formData.preferredSchedule} 
                  onValueChange={(value) => handleInputChange("preferredSchedule", value)} 
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business-hours" id="business-hours" />
                    <Label htmlFor="business-hours">Business hours (9 AM - 5 PM)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="evenings" id="evenings" />
                    <Label htmlFor="evenings">Evenings (5 PM - 9 PM)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekends" id="weekends" />
                    <Label htmlFor="weekends">Weekends</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible">Flexible schedule</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-4">
                <Label className="text-base font-medium">Client Types (select all that apply)</Label>
                <div className="grid grid-cols-2 gap-3">
                  {clientTypeOptions.map((clientType) => (
                    <div key={clientType} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                      <Checkbox
                        id={clientType}
                        checked={formData.clientTypes.includes(clientType)}
                        onCheckedChange={(checked) => handleArrayChange("clientTypes", clientType, checked as boolean)}
                      />
                      <Label 
                        htmlFor={clientType} 
                        className="text-base font-medium cursor-pointer"
                      >
                        {clientType}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <Label className="text-base font-medium">Therapy Modes (select all that apply)</Label>
                <div className="grid grid-cols-2 gap-3">
                  {therapyModeOptions.map((mode) => (
                    <div key={mode} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                      <Checkbox
                        id={mode}
                        checked={formData.therapyModes.includes(mode)}
                        onCheckedChange={(checked) => handleArrayChange("therapyModes", mode, checked as boolean)}
                      />
                      <Label 
                        htmlFor={mode} 
                        className="text-base font-medium cursor-pointer"
                      >
                        {mode}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tell Us About Yourself
              </h2>
              <p className="text-muted-foreground">Help us understand your motivation and experience</p>
            </div>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-3">
                <Label className="text-base font-medium">Why do you want to join Coping & Healing? *</Label>
                <Textarea
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  required
                  className="min-h-[120px] text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="Tell us what motivates you to work with Coping & Healing..."
                />
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">Describe your relevant experience *</Label>
                <Textarea
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  required
                  className="min-h-[120px] text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="Share your professional background and relevant experience..."
                />
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">When would you be available to start? *</Label>
                <Textarea
                  value={formData.availability}
                  onChange={(e) => handleInputChange("availability", e.target.value)}
                  required
                  className="min-h-[80px] text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="Let us know your availability and any scheduling constraints..."
                />
              </div>
              
              {/* Terms */}
              <div className="flex items-start space-x-3 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                  className="mt-1"
                />
                <div className="space-y-2">
                  <Label 
                    htmlFor="terms" 
                    className="text-sm font-medium cursor-pointer leading-relaxed"
                  >
                    I agree to the terms and conditions and privacy policy. I understand that this application will be reviewed by the Coping & Healing recruitment team.
                  </Label>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.state;
      case 2:
        return formData.licenseType && formData.licenseNumber && formData.yearsExperience;
      case 3:
        return formData.specializations.length > 0;
      case 4:
        return formData.hoursPerWeek && formData.clientTypes.length > 0 && formData.therapyModes.length > 0;
      case 5:
        return formData.motivation && formData.experience && formData.availability && formData.termsAccepted;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      <Header />
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl bg-white/80 backdrop-blur-sm border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Career Application
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Join our team of mental health professionals
              </CardDescription>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mt-6">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Step {currentStep} of {totalSteps}
              </p>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              {renderStep()}
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="px-8 py-3 text-base"
                >
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="px-8 py-3 text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  {isSubmitting ? "Submitting..." : currentStep === totalSteps ? "Submit Application" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerApplication;