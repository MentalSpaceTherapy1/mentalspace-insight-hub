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

  const handleInputChange = (field: string, value: string | boolean | Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Request Therapy Consultation</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fill out this form to connect with a licensed therapist who matches your needs. All information is confidential.
              </p>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please provide your details so we can match you with the right therapist and contact you to schedule your consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Date of Birth and Gender */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
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
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => handleInputChange("gender", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                        <SelectContent>
                          {genderOptions.map((gender) => (
                            <SelectItem key={gender} value={gender}>
                              {gender}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
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
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
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

                  {/* Insurance */}
                  <div className="space-y-4">
                    <Label>Do you have health insurance? *</Label>
                    <RadioGroup
                      value={formData.hasInsurance}
                      onValueChange={(value) => handleInputChange("hasInsurance", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="insurance-yes" />
                        <Label htmlFor="insurance-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="insurance-no" />
                        <Label htmlFor="insurance-no">No</Label>
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

                  {/* Timeline */}
                  <div className="space-y-4">
                    <Label>When would you like to receive therapy? *</Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) => handleInputChange("timeline", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-2-days" id="timeline-urgent" />
                        <Label htmlFor="timeline-urgent">Within 1-2 business days</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="within-week" id="timeline-week" />
                        <Label htmlFor="timeline-week">Within a week</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start space-x-2">
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

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request Therapy Consultation"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Your information is kept confidential and secure. A licensed therapist coordinator 
                will review your request and contact you within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TherapistMatching;