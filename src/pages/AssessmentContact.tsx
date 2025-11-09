import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Shield, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useAssessmentSubmission } from "@/hooks/useAssessmentSubmission";
import { useAnalytics } from "@/hooks/useAnalytics";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SEOHead from "@/components/SEOHead";
import ReCAPTCHA from 'react-google-recaptcha';

const AssessmentContact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const assessmentData = location.state;
  const { submitForm, isSubmitting: isSubmittingContact } = useFormSubmission();
  const { saveAssessment, isSubmitting: isSavingAssessment } = useAssessmentSubmission();
  const { trackFormStart } = useAnalytics();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  
  // Get assessment results from navigation state
  const assessmentResults = location.state as {
    assessmentType: string;
    score: number;
    severity: string;
    resultText: string;
    addOns?: Array<{
      type: string;
      title: string;
      content: string;
    }>;
    maxScore?: number;
  } | null;

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

  // Remove the local isSubmitting state since we're using the hook

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

  useEffect(() => {
    if (!assessmentResults) {
      navigate("/mental-health-tests");
    }
  }, [assessmentResults, navigate]);

  const handleInputChange = (field: string, value: string | boolean | Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast.error("Please accept the terms and conditions to proceed.");
      return;
    }

    // Get reCAPTCHA token (only if configured)
    let recaptchaToken = null;
    if (recaptchaSiteKey) {
      recaptchaToken = await recaptchaRef.current?.executeAsync();
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA verification.");
        recaptchaRef.current?.reset();
        return;
      }
    }

    try {
      // First save the assessment data if it exists
      if (assessmentResults) {
        const sessionId = `assessment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        await saveAssessment({
          sessionId,
          assessmentType: assessmentResults.assessmentType || 'unknown',
          answers: (assessmentResults as any).answers || {},
          score: assessmentResults.score,
          severity: assessmentResults.severity,
          recommendations: (assessmentResults as any).recommendations || [],
          additionalInfo: (assessmentResults as any).additionalInfo || {},
        });
      }

      // Then submit the contact form
      const result = await submitForm('assessment_contact', {
        ...formData,
        _recaptchaToken: recaptchaToken,
        assessmentData: assessmentResults ? {
          type: assessmentResults.assessmentType,
          score: assessmentResults.score,
          severity: assessmentResults.severity,
        } : null,
      });

      if (result.success) {
        toast.success("Thank you! We'll contact you within 24 hours to schedule your consultation.");
        navigate('/thank-you');
      } else {
        toast.error("There was an error submitting your information. Please try again.");
        recaptchaRef.current?.reset();
      }
    } catch (err) {
      toast.error("There was an error submitting your information. Please try again.");
      recaptchaRef.current?.reset();
    }
  };

  // Track form start on first render
  useEffect(() => {
    trackFormStart('assessment_contact');
  }, [trackFormStart]);

  if (!assessmentResults) {
    return null;
  }

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "none/minimal":
        return "text-green-600 bg-green-50 border-green-200";
      case "mild":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "moderate":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "moderately severe":
      case "severe":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead 
        title="Assessment Results - Contact Us | Coping & Healing Therapy"
        description="Schedule an appointment to discuss your mental health assessment results with our therapists."
        noindex={true}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/mental-health-tests")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assessments
          </Button>

          {/* Assessment Results */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Your {assessmentResults.assessmentType} Assessment Results</CardTitle>
              <CardDescription>
                Self-checks are educational and do not replace a professional evaluation. 
                If you feel unsafe or have thoughts of self-harm, call/text/chat 988 (24/7).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`p-4 rounded-lg border-2 mb-4 ${getSeverityColor(assessmentResults.severity)}`}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Severity Level: {assessmentResults.severity}</h3>
                  <span className="text-sm font-medium">
                    Score: {assessmentResults.score}/{(assessmentResults as any).maxScore || 27}
                  </span>
                </div>
                <p className="text-sm">{assessmentResults.resultText}</p>
              </div>
              
              {assessmentResults.severity !== "None/Minimal" && assessmentResults.severity !== "Minimal" && (
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Recommended Next Steps:</h4>
                  <p className="text-sm text-blue-700">
                    Based on your results, we recommend connecting with a mental health professional. 
                    Complete the form below to schedule a consultation with Coping & Healing.
                  </p>
                </div>
              )}

              {/* Dynamic Add-Ons */}
              {assessmentResults.addOns && assessmentResults.addOns.length > 0 && (
                <div className="space-y-3 mt-4">
                  {assessmentResults.addOns.map((addon, index) => (
                    <div key={index} className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-800 mb-2">{addon.title}</h4>
                      <p className="text-sm text-amber-700">{addon.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Request Therapy Consultation</CardTitle>
              <CardDescription>
                Fill out this form to connect with a licensed therapist. All information is confidential.
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
                    <Link to="/terms-conditions" className="text-primary hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    , and consent to being contacted by Coping & Healing.
                  </Label>
                </div>

                {/* Crisis Notice */}
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Crisis Support:</strong> If you feel unsafe or have thoughts of harming yourself, 
                    call/text/chat 988 (24/7 Suicide & Crisis Lifeline). In an emergency, call 911.
                  </p>
                </div>

                {/* reCAPTCHA - only render if site key is configured */}
                {recaptchaSiteKey && (
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey={recaptchaSiteKey}
                    />
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmittingContact || isSavingAssessment}
                >
                  {(isSubmittingContact || isSavingAssessment) ? "Processing..." : "Request Therapy Consultation"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AssessmentContact;