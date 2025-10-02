import React, { useState, useEffect } from 'react';
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
    timing: ""
  });

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
    
    try {
      const result = await submitForm('contact_us', formData);
      
      if (result.success) {
        toast.success("Thank you for contacting us! We'll get back to you soon.", {
          description: "You'll receive a confirmation email shortly."
        });
        
        // Navigate to thank you page
        navigate("/thank-you");
      } else {
        toast.error("There was an error submitting your message. Please try again.");
      }
    } catch (err) {
      toast.error("There was an error submitting your message. Please try again.");
    }
  };

  // Track form start on first render
  useEffect(() => {
    trackFormStart('contact_us');
  }, [trackFormStart]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

                      <Button type="submit" className="w-full group" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
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