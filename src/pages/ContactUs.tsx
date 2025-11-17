import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/contact-us-hero.jpg";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { useAnalytics } from "@/hooks/useAnalytics";
import { toast } from "sonner";
import ReCAPTCHA from 'react-google-recaptcha';
import { 
  generateEnhancedChallenge, 
  generateProofOfWork, 
  solveProofOfWork,
  generateCSRFToken,
  type EnhancedChallenge,
  type ProofOfWork,
  type CSRFToken
} from "@/lib/securityUtils";

const ContactUs = () => {
  const navigate = useNavigate();
  const { submitForm, isSubmitting, isSuccess, error } = useFormSubmission();
  const { trackFormStart } = useAnalytics();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
    smsConsent: false,
    timing: "",
    // Honeypots (renamed to avoid autofill heuristics)
    hpWebsite: "",
    hpCompany: "",
    hpPosition: "",
  });
  
  // Track when form was loaded for time-based validation
  const [formLoadTime] = useState(Date.now());
  const [interactionCount, setInteractionCount] = useState(0);
  const minWaitMs = 5000; // minimum wait to deter bots
  const [timeReady, setTimeReady] = useState(false);
  
  // Enhanced JS Challenge
  const [enhancedChallenge] = useState<{ challenge: any; solution: EnhancedChallenge }>(() => 
    generateEnhancedChallenge()
  );
  
  // Proof of Work Challenge
  const [proofOfWork] = useState<ProofOfWork>(() => generateProofOfWork(3));
  const [powSolution, setPowSolution] = useState<string>("");
  
  // CSRF Token
  const [csrfToken, setCSRFToken] = useState<CSRFToken | null>(null);
  
  // reCAPTCHA ref
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  
  // Initialize security measures on mount
  useEffect(() => {
    const initSecurity = async () => {
      // Generate CSRF token
      const token = await generateCSRFToken();
      setCSRFToken(token);
      
      // Solve proof of work in background
      try {
        const solution = await solveProofOfWork(proofOfWork);
        setPowSolution(solution);
      } catch (err) {
        console.error('PoW failed:', err);
      }
    };
    
    initSecurity();
  }, [proofOfWork]);

  // Enable submit only after minimum wait time
  useEffect(() => {
    const t = setTimeout(() => setTimeReady(true), minWaitMs);
    return () => clearTimeout(t);
  }, [minWaitMs]);

  const businessHours = [
    "Monday 08:00 am – 05:00 pm",
    "Tuesday 08:00 am – 05:00 pm", 
    "Wednesday 08:00 am – 05:00 pm",
    "Thursday 08:00 am – 05:00 pm",
    "Friday Set by Appointment",
    "Saturday Set by Appointment"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot detection: Check if any honeypot field was filled (with extra conditions to avoid autofill false positives)
    const honeypotFilled = Boolean(formData.hpWebsite || formData.hpCompany || formData.hpPosition);
    const timeTaken = Date.now() - formLoadTime;
    if (honeypotFilled && (interactionCount < 2 || timeTaken < 3000)) {
      console.log('Bot detected: honeypot field filled', {
        hpWebsite: formData.hpWebsite,
        hpCompany: formData.hpCompany,
        hpPosition: formData.hpPosition,
        interactionCount,
        timeTaken,
      });
      toast.error("There was an error. Please try again.");
      return;
    }
    
    // Bot detection: Check if form was filled too quickly (less than 5 seconds)
    if (timeTaken < 5000) {
      toast.error("Please take a moment to review your information.");
      return;
    }
    
    // Bot detection: Check if user interacted with form
    if (interactionCount < 3) {
      toast.error("Please fill out the form completely.");
      return;
    }
    
    // Validate Proof of Work
    if (!powSolution) {
      toast.error("Security validation in progress. Please wait a moment.");
      return;
    }
    
    // Validate CSRF Token
    if (!csrfToken) {
      toast.error("Security validation failed. Please refresh the page.");
      return;
    }
    
    // Validate email domain (block common disposable email providers)
    const disposableDomains = ['tempmail.com', 'guerrillamail.com', 'mailinator.com', '10minutemail.com', 'throwaway.email'];
    const emailDomain = formData.email.split('@')[1]?.toLowerCase();
    if (disposableDomains.includes(emailDomain)) {
      toast.error("Please use a valid email address.");
      return;
    }

    // Get reCAPTCHA token (optional - graceful degradation)
    let recaptchaToken = null;
    if (recaptchaSiteKey) {
      try {
        recaptchaToken = await recaptchaRef.current?.executeAsync();
        console.log('reCAPTCHA token obtained:', recaptchaToken ? 'success' : 'failed');
      } catch (error) {
        console.warn('reCAPTCHA execution failed, continuing without token:', error);
        // Continue submission without reCAPTCHA - graceful degradation
      }
    }
    
    try {
      // Add all security challenges to submission
      const submissionData = {
        ...formData,
        _formLoadTime: formLoadTime,
        _submitTime: Date.now(),
        _interactionCount: interactionCount,
        _enhancedChallenge: enhancedChallenge.solution,
        _proofOfWork: {
          challenge: proofOfWork.challenge,
          difficulty: proofOfWork.difficulty,
          solution: powSolution
        },
        _csrfToken: csrfToken,
        _recaptchaToken: recaptchaToken,
      };
      
      const result = await submitForm('contact_us', submissionData);
      
      if (result.success) {
        toast.success("Thank you for contacting us! We'll get back to you soon.", {
          description: "You'll receive a confirmation email shortly."
        });
        
        navigate("/contact-thank-you");
      } else {
        toast.error("There was an error submitting your message. Please try again.");
        recaptchaRef.current?.reset();
      }
    } catch (err) {
      toast.error("There was an error submitting your message. Please try again.");
      recaptchaRef.current?.reset();
    }
  };

  // Track form start on first render
  useEffect(() => {
    trackFormStart('contact_us');
  }, [trackFormStart]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Track user interactions
    setInteractionCount(prev => prev + 1);
  };

  const securityReady = Boolean(csrfToken && powSolution);
  const canSubmit = securityReady && timeReady && !isSubmitting;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Contact us" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                  Get in touch with our team to start your journey to better mental health
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <MessageCircle className="h-5 w-5" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <Clock className="h-5 w-5" />
                    <span>Same Day Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                      <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot fields - hidden from users, visible to bots */}
                      <div className="absolute -left-[9999px]" aria-hidden="true">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.hpWebsite}
                          onChange={(e) => handleInputChange("hpWebsite", e.target.value)}
                        />
                      </div>
                      <div className="absolute -left-[9999px]" aria-hidden="true">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                      <div className="absolute -left-[9999px]" aria-hidden="true">
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.position}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                        />
                      </div>
                      
                      {/* Hidden security challenge fields */}
                      <input type="hidden" name="enhanced_challenge" value={JSON.stringify(enhancedChallenge.solution)} />
                      <input type="hidden" name="pow_solution" value={powSolution} />
                      <input type="hidden" name="csrf_token" value={csrfToken?.token || ''} />
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name (Required)</Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="h-12"
                            maxLength={100}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Required)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            placeholder="(xxx) xxx-xxxx"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="h-12"
                            maxLength={20}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email (Required)</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12"
                          maxLength={255}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timing">Preferred Contact Time (Required)</Label>
                        <select
                          id="timing"
                          required
                          className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          value={formData.timing}
                          onChange={(e) => handleInputChange("timing", e.target.value)}
                        >
                          <option value="">Select preferred time</option>
                          {businessHours.map((hour, index) => (
                            <option key={index} value={hour}>{hour}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="comments">How can we help you? (Required)</Label>
                        <Textarea
                          id="comments"
                          required
                          placeholder="Please let us know what's on your mind. Have a question for us? Ask away."
                          maxLength={600}
                          className="min-h-32"
                          value={formData.comments}
                          onChange={(e) => handleInputChange("comments", e.target.value)}
                        />
                        <p className="text-sm text-muted-foreground">
                          {formData.comments.length}/600 characters
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="sms-consent"
                          checked={formData.smsConsent}
                          onCheckedChange={(checked) => handleInputChange("smsConsent", checked as boolean)}
                        />
                        <Label htmlFor="sms-consent" className="text-sm leading-relaxed">
                          By checking this box, you agree to receive SMS/Text messages from Coping & Healing Counseling. Reply STOP to unsubscribe at any time. Messages and data rates may apply. Message frequency varies.
                        </Label>
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

                      {!canSubmit && (
                        <p className="text-sm text-muted-foreground text-center">
                          Preparing secure form… This can take up to a few seconds.
                        </p>
                      )}

                      <Button type="submit" className="w-full group" size="lg" disabled={!canSubmit}>
                        {isSubmitting ? "Sending..." : !securityReady || !timeReady ? "Preparing…" : "Send Message"}
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-0 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary to-secondary p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                      <p className="text-white/90">Ready to start your journey?</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">Alpharetta, GA 30022</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <a href="tel:404-832-0102" className="text-muted-foreground hover:text-primary transition-colors">404-832-0102</a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">support@chctherapy.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      {businessHours.map((hour, index) => (
                        <div key={index} className="flex justify-between items-center py-1">
                          <span className="text-muted-foreground">{hour.split(' ')[0]}</span>
                          <span className="text-sm">{hour.split(' ').slice(1).join(' ')}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                    <p className="text-muted-foreground mb-4">
                      If you're in crisis, please reach out to emergency services or visit our emergency resources page.
                    </p>
                    <Link to="/emergency-resources">
                      <Button variant="outline" className="w-full">
                        Emergency Resources
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;