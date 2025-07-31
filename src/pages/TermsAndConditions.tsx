import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileText, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import termsHero from "@/assets/terms-hero.jpg";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${termsHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6 animate-fade-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                <FileText className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
              Clear guidelines and policies that govern your use of our mental health services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Link to="/">
                <Button variant="secondary" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/privacy-policy">
                <Button variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10">
                  Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="space-y-8">
                
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms and Conditions ("Terms") govern the use of the services provided by MentalSpace ("Company," "we," "us," or "our"), located at Alpharetta, GA. By accessing our website at http://www.chctherapy.com or utilizing our services, you agree to comply with and be bound by these Terms.
                  </p>
                </div>

                <Separator />

                {/* Services */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
                  <p className="text-muted-foreground mb-4">We offer a variety of therapy and counseling services, including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Individual Therapy</li>
                    <li>Kids & Teens Therapy (7 to 17)</li>
                    <li>Couples Therapy</li>
                    <li>Specialized support for various mental health challenges such as Depression, Anxiety, Trauma, LGBTQIA+ Challenges, Substance/Addictive Challenges, etc.</li>
                    <li>Life, Relationship, Business Coaching</li>
                  </ul>
                </div>

                <Separator />

                {/* Eligibility */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Eligibility</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Age Requirements</h3>
                      <p className="text-muted-foreground">Users must be at least 18 years old to create an account and access our services without parental consent. Minors between the ages of 7 and 17 may access our services with the explicit consent and supervision of a parent or legal guardian.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Legal Capacity</h3>
                      <p className="text-muted-foreground">By using our services, you represent and warrant that you have the legal capacity to enter into a binding contract in your jurisdiction.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">3.3 Restrictions</h3>
                      <p className="text-muted-foreground">Our services are not available to individuals who have been suspended or removed from our system for any reason, including violation of these Terms.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Licensed and Non-Licensed Therapists */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Licensed and Non-Licensed Therapists</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Licensed Therapists</h3>
                      <p className="text-muted-foreground">Our licensed therapists hold valid and current licenses to practice in their respective fields. They adhere to the highest professional standards and comply with all applicable laws and regulations.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Non-Licensed Therapists and Coaches</h3>
                      <p className="text-muted-foreground">Our non-licensed therapists and coaches are mastered levels and trained professionals who provide support and guidance in various areas. While they may not hold specific licenses, they are qualified to offer valuable insights and assistance.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Therapist Selection</h3>
                      <p className="text-muted-foreground">Clients have the option to choose between therapists and coaches based on their preferences and needs. We provide transparent information about the qualifications and expertise of each professional.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.4 Oversight and Supervision</h3>
                      <p className="text-muted-foreground">All therapists and coaches, whether licensed or not, are subject to oversight and supervision to ensure the quality and integrity of our services.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Registration and Account */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Registration and Account</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.1 Account Creation</h3>
                      <p className="text-muted-foreground">To access certain features and services, users must create an account by providing accurate and complete information. This includes a valid email address, password, and other requested details.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Account Security</h3>
                      <p className="text-muted-foreground">Users are responsible for maintaining the confidentiality of their account credentials and are solely responsible for all activities that occur under their account.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.3 Account Termination</h3>
                      <p className="text-muted-foreground">We reserve the right to suspend or terminate accounts that violate these Terms or any applicable laws.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Confidentiality and Privacy */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidentiality and Privacy</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">6.1 Client Confidentiality</h3>
                      <p className="text-muted-foreground">We uphold strict confidentiality standards in accordance with applicable laws and professional ethics. All communications between clients and therapists are kept confidential unless required by law to disclose.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">6.2 Data Protection</h3>
                      <p className="text-muted-foreground">We implement robust security measures to protect personal and sensitive information. Our data handling practices are detailed in our Privacy Policy, which is incorporated into these Terms by reference.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">6.3 Third-Party Disclosure</h3>
                      <p className="text-muted-foreground">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law or as detailed in our Privacy Policy.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Fees and Payment */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Fees and Payment</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">7.1 Pricing</h3>
                      <p className="text-muted-foreground">Our services are offered at various price points, including flexible and affordable plans. All pricing details will be provided at the time of purchase.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">7.2 Payment Methods</h3>
                      <p className="text-muted-foreground">We accept various payment methods, including credit cards, debit cards, and other online payment options. All payments must be made through our secure payment gateway.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">7.3 Subscription Plans</h3>
                      <p className="text-muted-foreground">Some services may be offered on a subscription basis. Subscription terms, including billing cycles and renewal policies, will be clearly stated at the time of purchase.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">7.4 Late Payments</h3>
                      <p className="text-muted-foreground">Failure to make timely payments may result in suspension or termination of services. Additional fees may apply for late payments.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">7.5 Refunds</h3>
                      <p className="text-muted-foreground">Refund requests must be made in accordance with our refund policy, as stated at the time of purchase. Certain restrictions and conditions may apply.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Cancellation and Refund Policy */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Cancellation and Refund Policy</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">8.1 Cancellation by Client</h3>
                      <p className="text-muted-foreground">Clients may cancel services in accordance with the cancellation policy provided at the time of purchase. Cancellation fees may apply.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">8.2 Cancellation by Company</h3>
                      <p className="text-muted-foreground">We reserve the right to cancel services for reasons including, but not limited to, non-payment, misconduct, or violation of these Terms. In such cases, refunds may be provided at our sole discretion.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">8.3 Refund Process</h3>
                      <p className="text-muted-foreground">Refunds, if applicable, will be processed through the original payment method within a reasonable time frame. Clients must comply with all requirements and provide necessary information to facilitate the refund process.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Intellectual Property</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">9.1 Ownership</h3>
                      <p className="text-muted-foreground">All content on our website, including text, graphics, logos, images, videos, and software, is the exclusive property of MentalSpace or its licensors and is protected by international copyright laws.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">9.2 License</h3>
                      <p className="text-muted-foreground">We grant users a limited, non-exclusive, non-transferable license to access and use our website and services for personal, non-commercial purposes, in accordance with these Terms.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">9.3 Prohibited Uses</h3>
                      <p className="text-muted-foreground">Users may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise exploit any content on our website without our express written consent.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">9.4 Trademarks</h3>
                      <p className="text-muted-foreground">All trademarks, service marks, and trade names used on our website are the property of MentalSpace or its licensors and may not be used without our express written consent.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">10.1 Disclaimer of Warranties</h3>
                      <p className="text-muted-foreground">Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">10.2 Limitation on Damages</h3>
                      <p className="text-muted-foreground">To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, arising out of or related to the use or inability to use our services.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">10.3 Indemnification</h3>
                      <p className="text-muted-foreground">You agree to indemnify, defend, and hold harmless MentalSpace, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">11.1 Jurisdiction</h3>
                      <p className="text-muted-foreground">These Terms shall be governed by and construed in accordance with the laws of the state of Georgia, without regard to its conflict of law principles.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">11.2 Dispute Resolution</h3>
                      <p className="text-muted-foreground">Any disputes arising out of or related to these Terms or our services shall be resolved through binding arbitration in the state of Georgia, in accordance with the rules of the American Arbitration Association.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">11.3 Waiver of Class Actions</h3>
                      <p className="text-muted-foreground">You agree to resolve any disputes with us on an individual basis and waive the right to participate in any class or representative action.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">12.1 Communication Channels</h3>
                      <p className="text-muted-foreground mb-4">For any questions, concerns, or feedback regarding these Terms or our services, please contact us through the following channels:</p>
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
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">12.2 Response Time</h3>
                      <p className="text-muted-foreground">We strive to respond to all inquiries within a reasonable time frame. Please allow up to 48 hours for a response during regular business hours.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Amendments */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">13. Amendments</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">13.1 Notification of Changes</h3>
                      <p className="text-muted-foreground">We reserve the right to amend, modify, or update these Terms at any time. We will provide notice of any significant changes by posting a notice on our website or sending an email to registered users.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">13.2 Acceptance of Changes</h3>
                      <p className="text-muted-foreground">Continued use of our services after any amendments constitutes acceptance of the new Terms. It is your responsibility to review these Terms periodically to stay informed about any changes.</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Miscellaneous */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">14. Miscellaneous</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">14.1 Severability</h3>
                      <p className="text-muted-foreground">If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">14.2 Entire Agreement</h3>
                      <p className="text-muted-foreground">These Terms, along with any other agreements or policies referenced herein, constitute the entire agreement between you and MentalSpace and supersede all prior or contemporaneous communications and proposals.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">14.3 No Waiver</h3>
                      <p className="text-muted-foreground">Our failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">14.4 Assignment</h3>
                      <p className="text-muted-foreground">You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign or transfer our rights and obligations under these Terms at our sole discretion.</p>
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

export default TermsAndConditions;