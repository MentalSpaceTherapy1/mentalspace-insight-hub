import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Heart, MapPin, Users, Shield, Clock, Info } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUsePeachStateTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Peach State Health Plan for Therapy in Georgia",
    "description": "Complete guide to accessing mental health therapy with Peach State Medicaid in Georgia",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check Coverage",
        "text": "Verify Peach State Health Plan coverage is active and includes mental health"
      },
      {
        "@type": "HowToStep",
        "name": "Find Provider",
        "text": "Search for Peach State network therapists in your Georgia region"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule",
        "text": "Call provider with Peach State member ID to book appointment"
      },
      {
        "@type": "HowToStep",
        "name": "Receive Care",
        "text": "Attend therapy session with typically $0 copay for covered services"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use Peach State Health Plan for Therapy in Georgia | 2024 Guide"
        description="Step-by-step guide to accessing mental health therapy with Peach State Medicaid in Georgia. Find providers, understand benefits, and get care at $0 copay."
        keywords="Peach State therapy Georgia, Peach State Health Plan mental health, Georgia Medicaid therapy, Peach State provider search, free therapy Peach State"
        canonicalUrl="https://chctherapy.com/how-to-use-peach-state-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-rose-800">
              How to Access Therapy with Peach State Health Plan in Georgia
            </h1>
            <p className="text-xl mb-8 text-rose-700">
              Your friendly guide to using Peach State Medicaid for mental health therapy - from finding providers to understanding your $0 copay benefits across Georgia.
            </p>
            <Alert className="bg-rose-100 border-rose-300">
              <Heart className="h-4 w-4 text-rose-600" />
              <AlertDescription className="text-rose-900">
                <strong>Peach State Promise:</strong> Mental health therapy is fully covered with $0 copay for most Peach State members. Your mental health matters.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What Peach State Covers for Mental Health</h2>
            
            <Card className="mb-8 border-l-4 border-l-rose-600">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-3 text-rose-800">Therapy Services:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Individual counseling (no session limits)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Family therapy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Group therapy sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Telehealth mental health visits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Crisis intervention</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-rose-800">Additional Services:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Psychiatric evaluations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Medication management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Substance use disorder treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Case management support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Peer support services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                <strong>No Referral Needed:</strong> Peach State members can access mental health therapy directly - no referral from your primary care doctor required.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">4 Simple Steps to Start Therapy</h2>
            
            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-2xl font-bold">Verify Your Peach State Coverage</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="bg-rose-50 p-6 rounded-lg">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-rose-600" />
                        Contact Peach State Member Services
                      </h4>
                      <p className="mb-2"><strong>Phone:</strong> 1-800-704-1484</p>
                      <p className="text-sm text-muted-foreground mb-2">Available 24/7</p>
                      <p className="text-sm text-muted-foreground">TTY for hearing impaired: 1-877-760-9375</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Questions to Ask:</h4>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Is my Peach State coverage currently active?"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"What is my copay for mental health therapy?" (Usually $0)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Do I need a referral for mental health services?" (No)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Is telehealth therapy covered?" (Yes)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Are there any session limits?" (Typically no)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Or Check Online:</h4>
                      <ol className="space-y-2 ml-6 list-decimal text-sm">
                        <li>Visit <a href="https://www.pshp.com" className="text-rose-600 underline" target="_blank" rel="noopener">PSHP.com</a></li>
                        <li>Log in to your member portal (or call to create account)</li>
                        <li>Navigate to "My Benefits" section</li>
                        <li>Look for "Behavioral Health" or "Mental Health Services"</li>
                        <li>Review your Summary of Benefits</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-2xl font-bold">Find a Peach State Network Provider</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-l-rose-600 p-6 rounded">
                      <h4 className="font-bold mb-3 text-lg">Best Option: Start with CHC</h4>
                      <p className="mb-4">CHC is in-network with Peach State Health Plan and serves members across Georgia. We make accessing mental health care simple and stress-free.</p>
                      <Link to="/therapist-matching">
                        <Button className="bg-rose-600 hover:bg-rose-700">
                          Find Your Peach State Therapist
                        </Button>
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 text-lg">Or Search Peach State Provider Directory:</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold mb-2">Online Search:</h5>
                          <ol className="space-y-2 ml-6 list-decimal text-sm">
                            <li>Go to <a href="https://www.pshp.com/find-a-provider" className="text-rose-600 underline" target="_blank" rel="noopener">Peach State Provider Search</a></li>
                            <li>Select "Behavioral Health" as provider type</li>
                            <li>Enter your city, county, or zip code in Georgia</li>
                            <li>Filter by:
                              <ul className="ml-6 mt-2 space-y-1">
                                <li>• Specialty (depression, anxiety, trauma, etc.)</li>
                                <li>• Distance from your location</li>
                                <li>• Gender preference</li>
                                <li>• Accepting new patients</li>
                                <li>• Telehealth availability</li>
                              </ul>
                            </li>
                            <li>Review provider profiles and contact information</li>
                          </ol>
                        </div>

                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Need Help Searching?</h5>
                          <p className="text-sm mb-2">Call Peach State at <strong>1-800-704-1484</strong> and say:</p>
                          <p className="text-sm italic">"I need help finding a mental health therapist near me who accepts new patients."</p>
                          <p className="text-sm mt-2 text-muted-foreground">Representatives can search for you, check current availability, and even call providers on your behalf.</p>
                        </div>
                      </div>
                    </div>

                    <Alert className="bg-amber-50 border-amber-200">
                      <Info className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800">
                        <strong>Important:</strong> Provider directories can have outdated information. Always call the therapist's office to confirm they're currently accepting new Peach State patients before scheduling.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-2xl font-bold">Schedule Your First Appointment</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="font-medium">When you call to schedule, have ready:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-rose-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Your Information</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Peach State member ID number</li>
                          <li>• Your date of birth</li>
                          <li>• Current address and phone</li>
                          <li>• Georgia county of residence</li>
                        </ul>
                      </div>

                      <div className="bg-rose-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Your Preferences</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Available days and times</li>
                          <li>• In-person or telehealth</li>
                          <li>• Main reason for seeking therapy</li>
                          <li>• Any special needs or requests</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">What Happens Next:</h4>
                      <ol className="space-y-2 ml-6 list-decimal text-sm">
                        <li>Office staff will verify your Peach State coverage (takes ~2-3 minutes)</li>
                        <li>They'll schedule your intake appointment (first session)</li>
                        <li>You'll receive confirmation via call, text, or email</li>
                        <li>Some offices send intake paperwork to complete beforehand</li>
                        <li>You may receive appointment reminders</li>
                      </ol>
                    </div>

                    <Alert className="bg-green-50 border-green-200">
                      <Clock className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>Typical Wait Time:</strong> Most Peach State network providers can schedule you within 1-3 weeks. For urgent concerns, ask about expedited appointments.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <h3 className="text-2xl font-bold">Attend Your Session ($0 Copay)</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                      <h4 className="text-2xl font-bold text-green-800 mb-2">Your Cost: $0</h4>
                      <p className="text-green-700">Almost all Peach State Georgia Medicaid members pay nothing for mental health therapy sessions. There are no copays, no deductibles, no surprise bills.</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">What to Bring to Your First Visit:</h4>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Your Peach State member ID card</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Photo ID (driver's license, state ID, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>List of any current medications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Completed intake forms (if sent ahead)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Notes about what you want to discuss</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Peach State Member Resources */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Special Resources for Peach State Members</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-rose-600" />
                    Care Coordination Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">Peach State offers free care coordinators who can:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Help you find mental health providers</li>
                    <li>• Coordinate care between providers</li>
                    <li>• Connect you to community resources</li>
                    <li>• Assist with transportation needs</li>
                  </ul>
                  <p className="font-bold mt-3">1-800-704-1484</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose-600" />
                    24/7 Crisis Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">Mental health crisis? Call Peach State's 24/7 behavioral health crisis line:</p>
                  <div className="bg-rose-50 p-3 rounded">
                    <p className="font-bold">1-800-715-4225</p>
                    <p className="text-sm text-muted-foreground">Available anytime, day or night</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-rose-600" />
                    Transportation Assistance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">Can't get to your therapy appointments? Peach State provides free non-emergency medical transportation.</p>
                  <p className="font-bold">1-844-549-8353</p>
                  <p className="text-xs text-muted-foreground mt-1">Call at least 2 business days before appointment</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose-600" />
                    Member Advocates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Having trouble accessing mental health care? Peach State member advocates help resolve issues with providers, appointments, or coverage.</p>
                  <p className="font-bold mt-2">1-800-704-1484</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Peach State Therapy FAQs</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Do I really pay nothing for therapy with Peach State?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! For the vast majority of Peach State members, mental health therapy sessions have a $0 copay. This is standard for Georgia Medicaid. There are no deductibles or surprise bills. Just show your Peach State card and receive care.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What if I need therapy but my coverage is about to renew?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Start therapy now! Even if your renewal is pending, you can begin treatment. If there's a gap, contact Georgia Gateway (1-877-423-4746) immediately to complete renewal. Peach State can help advocate for continuity of care during renewal issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Can I see a therapist outside my region or county?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Peach State allows you to see any in-network provider anywhere in Georgia, regardless of which region or county you live in. Telehealth makes this even easier - work with a therapist from anywhere in the state.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Does Peach State cover therapy for children and teens?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! Peach State covers mental health services for members of all ages, including children, adolescents, and young adults. They also offer specialized programs like Wraparound services for youth with complex needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What if I can't find a therapist accepting new Peach State patients?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Call Peach State Member Services at 1-800-704-1484 and explain the situation. They're required to ensure you have access to timely mental health care. They can help find available providers or arrange for an out-of-network provider to see you at in-network rates if necessary.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Therapy with Peach State?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              CHC makes using Peach State for mental health simple. We're in-network, we handle the paperwork, and we're here to support your healing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  Match with Therapist
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline">
                  Have Questions? Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToUsePeachStateTherapy;
