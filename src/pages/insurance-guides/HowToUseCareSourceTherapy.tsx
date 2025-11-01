import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, MapPin, Heart, Calendar, Users, Clock, Info } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUseCareSourceTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use CareSource Insurance for Therapy in Georgia",
    "description": "Guide to accessing mental health services through CareSource Georgia Medicaid",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Verify Coverage",
        "text": "Check CareSource member portal or call to confirm active Georgia coverage"
      },
      {
        "@type": "HowToStep",
        "name": "Search Providers",
        "text": "Use CareSource provider directory to find behavioral health specialists"
      },
      {
        "@type": "HowToStep",
        "name": "Book Appointment",
        "text": "Schedule with CareSource member ID and insurance information"
      },
      {
        "@type": "HowToStep",
        "name": "Receive Care",
        "text": "Attend sessions with typically $0 copay for covered mental health services"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use CareSource for Therapy in Georgia | Member Guide 2024"
        description="Learn how to access mental health therapy with CareSource Georgia. Find providers, understand benefits, and start care with $0 copay for most services."
        keywords="CareSource therapy Georgia, CareSource mental health, CareSource provider search, Georgia Medicaid therapy CareSource, free therapy CareSource"
        canonicalUrl="https://chctherapy.com/how-to-use-caresource-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-800">
              How to Use CareSource for Mental Health Therapy in Georgia
            </h1>
            <p className="text-xl mb-8 text-teal-700">
              Your member-friendly guide to accessing quality mental health care through CareSource Georgia - with no hidden costs and community-focused support.
            </p>
            <Alert className="bg-teal-100 border-teal-300">
              <Heart className="h-4 w-4 text-teal-600" />
              <AlertDescription className="text-teal-900">
                <strong>CareSource Promise:</strong> Mental health therapy typically has $0 copay for CareSource Georgia members. We're committed to removing barriers to care.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Getting Started is Simple</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-bold mb-2">Check Coverage</h3>
                  <p className="text-sm text-muted-foreground">Verify your CareSource plan is active (takes 2 minutes)</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-bold mb-2">Find Provider</h3>
                  <p className="text-sm text-muted-foreground">Search local CareSource network therapists</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-bold mb-2">Start Care</h3>
                  <p className="text-sm text-muted-foreground">Schedule and attend your first session</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Step 1: Verify Coverage */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <h2 className="text-3xl font-bold">Verify Your CareSource Coverage</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-teal-600" />
                      Contact CareSource Member Services
                    </h3>
                    <div className="bg-teal-50 p-4 rounded-lg mb-4">
                      <p className="font-bold text-lg">1-855-202-0729</p>
                      <p className="text-sm text-muted-foreground">Monday-Friday, 8am-7pm EST</p>
                      <p className="text-sm text-muted-foreground">Deaf/Hard of Hearing (TTY): 1-800-255-0056</p>
                    </div>

                    <h4 className="font-semibold mb-2">Questions to Ask:</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>"Is my CareSource Georgia plan currently active?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>"What is my copay for mental health therapy?" (Usually $0)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>"Do I need a referral for behavioral health services?" (No)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>"Is telehealth mental health covered?" (Yes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>"Are there session limits per year?" (Typically no)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Or Check Your Member Portal Online:</h3>
                    <ol className="space-y-2 ml-6 list-decimal">
                      <li>Visit <a href="https://www.caresource.com/ga" className="text-teal-600 underline" target="_blank" rel="noopener">CareSource.com/GA</a></li>
                      <li>Log in to your member account (or create one)</li>
                      <li>Click "My Benefits" or "Coverage"</li>
                      <li>Look for "Behavioral Health" benefits summary</li>
                      <li>Download your member handbook for complete details</li>
                    </ol>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Pro Tip:</strong> CareSource representatives are known for being especially helpful. If you're confused about anything, don't hesitate to call - they'll walk you through it step-by-step.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step 2: Find Provider */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <h2 className="text-3xl font-bold">Find a CareSource Mental Health Provider</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-teal-50 border-l-4 border-l-teal-600 p-6 rounded">
                    <h3 className="font-bold mb-3 text-lg">Option A: Start with CHC (CareSource In-Network)</h3>
                    <p className="mb-4">CHC partners with CareSource to provide accessible, high-quality mental health care for Georgia members. We handle all the insurance details for you.</p>
                    <Link to="/therapist-matching">
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Find Your CareSource Therapist
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-lg">Option B: Search CareSource Provider Directory</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Online Search:</h4>
                        <ol className="space-y-2 ml-6 list-decimal">
                          <li>Go to <a href="https://www.caresource.com/ga/members/find-a-doctor" className="text-teal-600 underline" target="_blank" rel="noopener">CareSource Provider Search</a></li>
                          <li>Under "Provider Type," select "Behavioral Health"</li>
                          <li>Enter your city, zip code, or county</li>
                          <li>Filter by:
                            <ul className="ml-6 mt-2 space-y-1">
                              <li>• Specialty (anxiety, depression, family therapy)</li>
                              <li>• Gender preference</li>
                              <li>• Languages spoken</li>
                              <li>• Telehealth availability</li>
                            </ul>
                          </li>
                          <li>Review results and note providers accepting new patients</li>
                        </ol>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Phone Search (Easier if you're not tech-savvy):</h4>
                        <p className="mb-2">Call <strong>1-855-202-0729</strong> and say "I need help finding a mental health therapist near me."</p>
                        <p className="text-sm text-muted-foreground">The representative will search for you, check availability, and can even help you schedule.</p>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-amber-50 border-amber-200">
                    <Clock className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800">
                      <strong>Important:</strong> Before scheduling, call the provider's office to confirm they're currently accepting new CareSource patients. Directory information can sometimes be delayed.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step 3: Schedule */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <h2 className="text-3xl font-bold">Schedule Your First Therapy Session</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3">Information to Have Ready:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 text-teal-800">Your CareSource Info</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Member ID number</li>
                          <li>• Date of birth</li>
                          <li>• Georgia county you live in</li>
                          <li>• Plan type (Medicaid, Marketplace)</li>
                        </ul>
                      </div>

                      <div className="bg-teal-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 text-teal-800">Your Preferences</h4>
                        <ul className="text-sm space-y-1">
                          <li>• In-person or telehealth</li>
                          <li>• Preferred days/times</li>
                          <li>• Main concerns (anxiety, etc.)</li>
                          <li>• Language preference</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">What Happens When You Call:</h3>
                    <ol className="space-y-3 ml-6 list-decimal">
                      <li>Office staff will verify your CareSource coverage (takes ~2 minutes)</li>
                      <li>They'll confirm your copay amount (usually $0)</li>
                      <li>You'll schedule your intake appointment</li>
                      <li>You'll receive appointment confirmation (text, email, or call)</li>
                      <li>Some offices will send intake forms to fill out before your visit</li>
                    </ol>
                  </div>

                  <Alert className="bg-green-50 border-green-200">
                    <Users className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>Need Help Scheduling?</strong> CareSource Care Management can help you find and schedule with a provider. Call 1-855-202-0729 and ask for "care management assistance."
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What CareSource Covers */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What CareSource Covers for Mental Health</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Therapy Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Individual therapy (no session limit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Family therapy sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Group therapy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Couples counseling (when medically necessary)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Telehealth mental health visits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Additional Services</CardTitle>
                </CardHeader>
                <CardContent>
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
                      <span>Crisis intervention services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Substance use counseling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Case management support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CareSource Member Resources */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Exclusive CareSource Member Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3">24/7 Nurse Hotline</h3>
                  <p className="text-sm mb-3">Free nursing advice anytime, including mental health concerns.</p>
                  <p className="font-bold text-teal-700">1-866-314-2427</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3">Care Management</h3>
                  <p className="text-sm mb-3">Personalized help coordinating your mental health care.</p>
                  <p className="font-bold text-teal-700">1-855-202-0729</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-3">Transportation Help</h3>
                  <p className="text-sm mb-3">Free rides to therapy appointments (call 3 days ahead).</p>
                  <p className="font-bold text-teal-700">1-833-552-6831</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">CareSource Therapy FAQs</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  How quickly can I get a therapy appointment with CareSource?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most CareSource network providers can see you within 1-3 weeks. For urgent mental health concerns, CareSource requires providers to offer appointments within 48 hours. If you can't find an appointment, call Member Services and they'll help locate available providers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What's the difference between CareSource Medicaid and Marketplace plans?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  CareSource offers both. Medicaid plans (for eligible low-income Georgia residents) typically have $0 copay for therapy. Marketplace plans (purchased through healthcare.gov) may have copays/coinsurance depending on your specific plan. Check your member ID card - it will say which type you have.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Can I switch therapists if the first one isn't a good fit?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. You can change therapists at any time without needing approval from CareSource. Simply call a new provider and schedule. Finding the right fit is important for successful therapy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Does CareSource cover therapy for children and teens?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! CareSource covers mental health services for members of all ages, including children, teens, and young adults. They have specialized youth behavioral health programs with additional support services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What if I need therapy but also need help with housing, food, or other basics?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  CareSource offers a Community Resource Line at 1-855-202-0729. They can connect you with local resources for food assistance, housing programs, job training, and other social services that support your overall wellbeing and mental health.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-teal-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Mental Health Journey with CareSource</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              CHC is proud to partner with CareSource to make quality therapy accessible. We'll handle the insurance details - you focus on healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Find Your Therapist
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

export default HowToUseCareSourceTherapy;
