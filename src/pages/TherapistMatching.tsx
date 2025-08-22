import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TherapistMatching = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: undefined as Date | undefined,
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
    email: "",
    phone: "",
    state: "",
    hasInsurance: "",
    insuranceName: "",
    customInsurance: "",
    timeline: "",
    termsAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 7;
  const progressPercentage = (currentStep / totalSteps) * 100;

  // Gender options
  const genderOptions = [
    "Female",
    "Male", 
    "Non-binary",
    "Prefer not to answer",
    "Other"
  ];

  // Insurance options
  const insuranceProviders = [
    "Caresource", "Amerigroup", "Peach State", "Alliant", "UnitedHealthCare", 
    "BCBS", "Anthem", "Optum", "Humana", "VA-Optum", "Cigna", "Oscar", "Aetna", "Other"
  ];

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

  const handleInputChange = (field: string, value: string | boolean | Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
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

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Request Submitted",
      description: "Thank you for your request. A MentalSpace Therapy coordinator will contact you soon."
    });

    // Navigate to thank you page
    navigate("/thank-you");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">What's your name?</h2>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">When were you born?</h2>
            <div className="space-y-4 max-w-md mx-auto">
              <Label>Date of Birth *</Label>
              <div className="grid grid-cols-3 gap-2">
                <Select 
                  value={formData.birthMonth}
                  onValueChange={(value) => handleInputChange("birthMonth", value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">January</SelectItem>
                    <SelectItem value="2">February</SelectItem>
                    <SelectItem value="3">March</SelectItem>
                    <SelectItem value="4">April</SelectItem>
                    <SelectItem value="5">May</SelectItem>
                    <SelectItem value="6">June</SelectItem>
                    <SelectItem value="7">July</SelectItem>
                    <SelectItem value="8">August</SelectItem>
                    <SelectItem value="9">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Day"
                  type="number"
                  min="1"
                  max="31"
                  value={formData.birthDay}
                  onChange={(e) => handleInputChange("birthDay", e.target.value)}
                  required
                />
                <Input
                  placeholder="Year"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={formData.birthYear}
                  onChange={(e) => handleInputChange("birthYear", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">What is your gender?</h2>
            <RadioGroup 
              value={formData.gender} 
              onValueChange={(value) => handleInputChange("gender", value)} 
              className="space-y-4 max-w-md mx-auto"
            >
              {genderOptions.map((gender) => (
                <div key={gender} className="flex items-center space-x-2">
                  <RadioGroupItem value={gender} id={gender} />
                  <Label htmlFor={gender} className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">
                    {gender}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">How can we contact you?</h2>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Which state are you in?</h2>
            <div className="max-w-md mx-auto">
              <Select onValueChange={(value) => handleInputChange("state", value)} required>
                <SelectTrigger>
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
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Do you have health insurance?</h2>
            <div className="space-y-6 max-w-md mx-auto">
              <RadioGroup
                value={formData.hasInsurance}
                onValueChange={(value) => handleInputChange("hasInsurance", value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="insurance-yes" />
                  <Label htmlFor="insurance-yes" className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="insurance-no" />
                  <Label htmlFor="insurance-no" className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>

              {formData.hasInsurance === "yes" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="insurance">Insurance Provider</Label>
                    <Select onValueChange={(value) => handleInputChange("insuranceName", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your insurance provider" />
                      </SelectTrigger>
                      <SelectContent>
                        {insuranceProviders.map((provider) => (
                          <SelectItem key={provider} value={provider}>
                            {provider}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.insuranceName === "Other" && (
                    <div className="space-y-2">
                      <Label htmlFor="customInsurance">Insurance Provider Name</Label>
                      <Input
                        id="customInsurance"
                        value={formData.customInsurance}
                        onChange={(e) => handleInputChange("customInsurance", e.target.value)}
                        placeholder="Enter your insurance provider"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">When would you like to start therapy?</h2>
            <div className="space-y-6 max-w-md mx-auto">
              <RadioGroup
                value={formData.timeline}
                onValueChange={(value) => handleInputChange("timeline", value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-2-days" id="timeline-urgent" />
                  <Label htmlFor="timeline-urgent" className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">
                    Within 1-2 business days
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="within-week" id="timeline-week" />
                  <Label htmlFor="timeline-week" className="w-full p-4 rounded-full bg-secondary/20 cursor-pointer">
                    Within a week
                  </Label>
                </div>
              </RadioGroup>

              {/* Terms */}
              <div className="flex items-start space-x-2 p-4 bg-muted/50 rounded-lg">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the{" "}
                  <a href="/terms-conditions" className="text-primary hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  , and consent to being contacted by MentalSpace Therapy.
                </Label>
              </div>

              {/* Crisis Notice */}
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Crisis Support:</strong> If you feel unsafe or have thoughts of harming yourself, 
                  please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room immediately.
                </p>
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
        return formData.firstName && formData.lastName;
      case 2:
        return formData.birthMonth && formData.birthDay && formData.birthYear;
      case 3:
        return formData.gender;
      case 4:
        return formData.email && formData.phone;
      case 5:
        return formData.state;
      case 6:
        return formData.hasInsurance;
      case 7:
        return formData.timeline && formData.termsAccepted;
      default:
        return false;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-background p-4">
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
                Request Your <span className="text-primary">Therapy Consultation</span>
              </CardTitle>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Fill out this form to connect with a licensed therapist. We'll match you with the right 
                professional based on your needs and preferences. All information is confidential.
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
                  <Button 
                    onClick={handleNext}
                    disabled={!canProceed() || isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full"
                  >
                    {currentStep === totalSteps 
                      ? (isSubmitting ? "Submitting..." : "Request Consultation") 
                      : "Next"
                    }
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TherapistMatching;