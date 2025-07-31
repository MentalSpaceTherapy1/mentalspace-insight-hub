import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your privacy and security are our top priorities. Learn how we protect and handle your information.
            </p>
            <Link to="/">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="space-y-8">
                
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This Privacy Policy ("Policy") governs the use of the services provided by MentalSpace ("Company," "we," "us," or "our"), located at Alpharetta, GA. By accessing our website or utilizing our services, you agree to comply with and be bound by this Privacy Policy.
                  </p>
                </div>

                <Separator />

                {/* Information We Collect */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Personal Information</h3>
                      <p className="text-muted-foreground">Such as your name, email address, phone number, and other identifying information.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">2.2 Health Information</h3>
                      <p className="text-muted-foreground">Such as medical history, therapy records, and other health-related information.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">2.3 Technical Information</h3>
                      <p className="text-muted-foreground">Such as IP addresses, browser type, device information, and other technical details related to your use of our website.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* How We Use Your Information */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use your information to provide, maintain, and improve our services, communicate with you, ensure compliance with legal requirements, and protect the safety and security of our platform and users.
                  </p>
                </div>

                <Separator />

                {/* How We Share Your Information */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Share Your Information</h2>
                  <p className="text-muted-foreground mb-4">We may share your information with third parties under the following circumstances:</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Service Providers</h3>
                      <p className="text-muted-foreground">With third-party vendors who assist us in providing our services.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Legal Requirements</h3>
                      <p className="text-muted-foreground">When required by law or in response to legal processes.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Business Transfers</h3>
                      <p className="text-muted-foreground">In connection with a merger, acquisition, or other business transactions.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.4 Consent</h3>
                      <p className="text-muted-foreground">With your consent or at your direction.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Your Choices and Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Choices and Rights</h2>
                  <p className="text-muted-foreground mb-4">You have certain choices and rights regarding your information, including:</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.1 Access and Correction</h3>
                      <p className="text-muted-foreground">You may access and correct your personal information by contacting us.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Opt-Out</h3>
                      <p className="text-muted-foreground">You may opt-out of receiving promotional communications from us.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.3 Complaints</h3>
                      <p className="text-muted-foreground">You may lodge a complaint with the relevant regulatory authority if you believe your privacy rights have been violated.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Security Measures */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Security Measures</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement reasonable security measures to protect your information, including encryption, firewalls, and access controls. However, no security measures are 100% foolproof, and we cannot guarantee the absolute security of your information.
                  </p>
                </div>

                <Separator />

                {/* Third-Party Links */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites, and this Privacy Policy does not apply to them.
                  </p>
                </div>

                <Separator />

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for children under the age of 13, and we do not knowingly collect information from children under 13. If we become aware that we have collected information from a child under 13, we will take appropriate steps to delete that information.
                  </p>
                </div>

                <Separator />

                {/* Changes to This Privacy Policy */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending an email to registered users.
                  </p>
                </div>

                <Separator />

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                  <p className="text-muted-foreground mb-6">
                    For any questions or concerns regarding this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-foreground">support@chctherapy.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-foreground">404 832 0102</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Alpharetta, GA</span>
                    </div>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="text-center pt-8 border-t">
                  <p className="text-sm text-muted-foreground">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;