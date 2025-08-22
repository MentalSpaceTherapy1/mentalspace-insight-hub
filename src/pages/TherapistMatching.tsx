import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
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
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                What's your name?
              </h2>
              <p className="text-muted-foreground">Let's start with the basics so we can personalize your experience</p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="space-y-3">
                <Label className="text-base font-medium">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-base font-medium">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                When were you born?
              </h2>
              <p className="text-muted-foreground">Help us match you with the right therapist for your age group</p>
            </div>
            <div className="flex justify-center">
              <div className="space-y-3">
                <Label className="text-base font-medium">Date of Birth *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[300px] justify-start text-left font-normal h-12 text-base bg-white hover:bg-gray-50 border-2 hover:border-primary/50 transition-all duration-200",
                        !formData.dateOfBirth && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5" />
                      {formData.dateOfBirth ? (
                        format(formData.dateOfBirth, "MMMM d, yyyy")
                      ) : (
                        <span>Select your birth date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.dateOfBirth}
                      onSelect={(date) => handleInputChange("dateOfBirth", date)}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                      defaultMonth={new Date(1990, 0)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                What is your gender?
              </h2>
              <p className="text-muted-foreground">This helps us match you with a therapist who understands your perspective</p>
            </div>
            <RadioGroup 
              value={formData.gender} 
              onValueChange={(value) => handleInputChange("gender", value)} 
              className="space-y-4 max-w-md mx-auto"
            >
              {genderOptions.map((gender) => (
                <div key={gender} className="flex items-center space-x-3 group">
                  <RadioGroupItem value={gender} id={gender} className="mt-0.5" />
                  <Label 
                    htmlFor={gender} 
                    className="flex-1 p-4 rounded-xl bg-white border-2 border-gray-200 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-200 group-hover:bg-primary/5 text-base font-medium"
                  >
                    {gender}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                How can we contact you?
              </h2>
              <p className="text-muted-foreground">We'll use this information to schedule your consultation</p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div className="space-y-3">
                <Label className="text-base font-medium">Email Address *</Label>
                <Input
                  id="email"
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
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Which state are you in?
              </h2>
              <p className="text-muted-foreground">This helps us ensure we can provide services in your area</p>
            </div>
            <div className="max-w-md mx-auto space-y-3">
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
        );

      case 6:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Do you have health insurance?
              </h2>
              <p className="text-muted-foreground">This helps us understand your coverage options</p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <RadioGroup
                value={formData.hasInsurance}
                onValueChange={(value) => handleInputChange("hasInsurance", value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 group">
                  <RadioGroupItem value="yes" id="insurance-yes" className="mt-0.5" />
                  <Label 
                    htmlFor="insurance-yes" 
                    className="flex-1 p-4 rounded-xl bg-white border-2 border-gray-200 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-200 group-hover:bg-primary/5 text-base font-medium"
                  >
                    Yes, I have insurance
                  </Label>
                </div>
                <div className="flex items-center space-x-3 group">
                  <RadioGroupItem value="no" id="insurance-no" className="mt-0.5" />
                  <Label 
                    htmlFor="insurance-no" 
                    className="flex-1 p-4 rounded-xl bg-white border-2 border-gray-200 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-200 group-hover:bg-primary/5 text-base font-medium"
                  >
                    No, I don't have insurance
                  </Label>
                </div>
              </RadioGroup>

              {formData.hasInsurance === "yes" && (
                <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Insurance Provider</Label>
                    <Select onValueChange={(value) => handleInputChange("insuranceName", value)} value={formData.insuranceName}>
                      <SelectTrigger className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200">
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
                    <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                      <Label className="text-base font-medium">Insurance Provider Name</Label>
                      <Input
                        id="customInsurance"
                        value={formData.customInsurance}
                        onChange={(e) => handleInputChange("customInsurance", e.target.value)}
                        placeholder="Enter your insurance provider"
                        className="h-12 text-base bg-white border-2 hover:border-primary/50 focus:border-primary transition-all duration-200"
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
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                When would you like to start?
              </h2>
              <p className="text-muted-foreground">We'll prioritize your request based on your timeline</p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <RadioGroup
                value={formData.timeline}
                onValueChange={(value) => handleInputChange("timeline", value)}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3 group">
                  <RadioGroupItem value="1-2-days" id="timeline-urgent" className="mt-0.5" />
                  <Label 
                    htmlFor="timeline-urgent" 
                    className="flex-1 p-4 rounded-xl bg-white border-2 border-gray-200 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-200 group-hover:bg-primary/5 text-base font-medium"
                  >
                    Within 1-2 business days
                  </Label>
                </div>
                <div className="flex items-center space-x-3 group">
                  <RadioGroupItem value="within-week" id="timeline-week" className="mt-0.5" />
                  <Label 
                    htmlFor="timeline-week" 
                    className="flex-1 p-4 rounded-xl bg-white border-2 border-gray-200 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-200 group-hover:bg-primary/5 text-base font-medium"
                  >
                    Within a week
                  </Label>
                </div>
              </RadioGroup>

              {/* Terms */}
              <div className="flex items-start space-x-3 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed text-gray-700">
                  I agree to the{" "}
                  <a href="/terms-conditions" className="text-primary hover:underline font-semibold">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="text-primary hover:underline font-semibold">
                    Privacy Policy
                  </a>
                  , and consent to being contacted by MentalSpace Therapy.
                </Label>
              </div>

              {/* Crisis Notice */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 p-6 rounded-xl">
                <p className="text-sm text-red-800 leading-relaxed">
                  <strong className="text-red-900">Crisis Support:</strong> If you feel unsafe or have thoughts of harming yourself, 
                  please call <strong>988</strong> (Suicide & Crisis Lifeline) or go to your nearest emergency room immediately.
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
        return formData.dateOfBirth;
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
      <main className="flex-1 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center space-y-6 pb-8">
              <div className="flex justify-center space-x-2 mb-6">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-12 rounded-full transition-all duration-500 ${
                      i < currentStep 
                        ? 'bg-gradient-to-r from-primary to-primary/80 shadow-lg' 
                        : i === currentStep - 1
                        ? 'bg-gradient-to-r from-primary/60 to-primary/40'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold">
                Request Your <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Therapy Consultation</span>
              </CardTitle>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                Fill out this form to connect with a licensed therapist. We'll match you with the right 
                professional based on your needs and preferences. All information is confidential.
              </p>
            </CardHeader>
            <CardContent className="space-y-8 px-6 md:px-8 pb-8">
              <div className="min-h-[400px] flex items-center justify-center">
                {renderStep()}
              </div>
              
              <div className="flex justify-between pt-8 border-t border-gray-100">
                {currentStep > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={handleBack}
                    className="h-12 px-6 text-base border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                  >
                    ← Back
                  </Button>
                )}
                <div className="ml-auto">
                  <Button 
                    onClick={handleNext}
                    disabled={!canProceed() || isSubmitting}
                    className="h-12 px-8 text-base bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentStep === totalSteps 
                      ? (isSubmitting ? "Submitting..." : "Request Consultation →") 
                      : "Next →"
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