import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Get in touch with our team to start your journey to better mental health
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name (Required)</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Required)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Required)</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timing">Timings (Required)</Label>
                      <select
                        id="timing"
                        required
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
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
                      <Label htmlFor="comments">Comments (Required)</Label>
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
                        By checking this box, you agree to receive SMS/Text messages from Coping & Healing Counseling and MentalSpace Therapy. Reply STOP to unsubscribe at any time. Messages and data rates may apply. Message frequency varies.
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>Alpharetta, GA 30022</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>404-832-0102</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>support@chctherapy.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <Clock className="h-6 w-6 mr-2 text-primary" />
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      {businessHours.map((hour, index) => (
                        <p key={index} className="text-muted-foreground">{hour}</p>
                      ))}
                    </div>
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