import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, FileText, Heart, Users, ShieldCheck, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUseAmerigroupTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Amerigroup Insurance for Therapy in Georgia",
    "description": "Complete guide to accessing mental health services with Amerigroup Medicaid in Georgia",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Confirm Eligibility",
        "text": "Verify your Amerigroup Medicaid coverage is active and includes mental health benefits"
      },
      {
        "@type": "HowToStep",
        "name": "Find Provider",
        "text": "Search for Amerigroup-approved mental health providers in your Georgia county"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule Appointment",
        "text": "Call provider with your Amerigroup member ID to schedule intake session"
      },
      {
        "@type": "HowToStep",
        "name": "Attend Session",
        "text": "Attend your appointment - most Amerigroup mental health visits have $0 copay"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use Amerigroup for Therapy in Georgia | Complete 2024 Guide"
        description="Step-by-step guide to accessing mental health therapy with Amerigroup Medicaid in Georgia. Learn about $0 copays, provider search, and community resources."
        keywords="Amerigroup therapy Georgia, Amerigroup mental health, Georgia Medicaid therapy, Amerigroup provider search, free therapy Amerigroup"
        canonicalUrl="https://chctherapy.com/how-to-use-amerigroup-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">
              How to Access Therapy with Amerigroup in Georgia
            </h1>
            <p className="text-xl mb-8 text-purple-700">
              Your complete guide to navigating Amerigroup Medicaid mental health benefits, finding community providers, and getting the care you deserve at little to no cost.
            </p>
            <Alert className="bg-purple-100 border-purple-300">
              <Heart className="h-4 w-4 text-purple-600" />
              <AlertDescription className="text-purple-900">
                <strong>Good News:</strong> Most Amerigroup mental health therapy sessions have $0 copay. Mental health care is a covered essential benefit under Georgia Medicaid.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Understanding Amerigroup */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Understanding Your Amerigroup Mental Health Benefits</h2>
            
            <Card className="mb-8 border-l-4 border-l-purple-600">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">What Amerigroup Covers for Mental Health:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Individual therapy sessions (unlimited)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Group therapy sessions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Family counseling services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Crisis intervention services</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Psychiatric evaluations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Medication management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Telehealth mental health visits</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Substance use counseling</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <ShieldCheck className="h-4 w-4" />
              <AlertDescription>
                <strong>No Session Limits:</strong> Unlike some insurance, Amerigroup doesn't cap the number of therapy sessions per year. Your provider determines what's medically necessary.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Your Step-by-Step Guide to Starting Therapy</h2>
            
            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-2xl font-bold">Confirm Your Amerigroup Coverage is Active</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="font-medium mb-3">Before scheduling, verify your coverage:</p>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-purple-600" />
                        Call Amerigroup Member Services
                      </h4>
                      <p className="mb-2"><strong>Phone:</strong> 1-800-454-3730 (TTY: 711)</p>
                      <p className="text-sm text-muted-foreground">Available Monday-Friday, 8am-8pm EST</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Questions to Ask:</h4>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Is my Amerigroup coverage currently active?"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Do I need a referral for mental health services?" (Usually no)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"What is my copay for outpatient therapy?" (Typically $0)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Is telehealth mental health covered?" (Yes, same as in-person)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-2xl font-bold">Find an Amerigroup-Approved Provider</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 text-purple-700">Option A: Start with CHC (Amerigroup In-Network)</h4>
                      <p className="mb-4">CHC accepts Amerigroup and specializes in making Georgia Medicaid mental health access simple and welcoming.</p>
                      <Link to="/therapist-matching">
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          Match with Amerigroup Therapist
                        </Button>
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">Option B: Use Amerigroup Provider Search</h4>
                      <ol className="space-y-3 ml-6 list-decimal">
                        <li>Visit <a href="https://www.myamerigroup.com/ga" className="text-purple-600 underline" target="_blank" rel="noopener">MyAmerigroup.com/GA</a></li>
                        <li>Click "Find a Provider" or "Provider Search"</li>
                        <li>Select:
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• <strong>Category:</strong> "Behavioral Health" or "Mental Health"</li>
                            <li>• <strong>Your County:</strong> Enter your Georgia location</li>
                            <li>• <strong>Specialty:</strong> Therapist/Counselor/Psychologist</li>
                            <li>• <strong>Filter:</strong> "Accepting New Patients"</li>
                          </ul>
                        </li>
                        <li>Call providers to verify they're still accepting Amerigroup</li>
                      </ol>
                    </div>

                    <Alert className="bg-amber-50 border-amber-200">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800">
                        <strong>Important:</strong> Amerigroup provider directories sometimes have outdated info. Always call to confirm the practice is accepting new Amerigroup patients before scheduling.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-2xl font-bold">Schedule Your First Appointment</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="font-medium">When you call, have ready:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Insurance Information</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Amerigroup member ID number</li>
                          <li>• Your date of birth</li>
                          <li>• County of residence</li>
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Personal Details</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Your scheduling preferences</li>
                          <li>• Brief reason for seeking therapy</li>
                          <li>• Telehealth or in-person preference</li>
                        </ul>
                      </div>
                    </div>

                    <Alert className="bg-green-50 border-green-200 mt-4">
                      <Clock className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>Typical Wait Time:</strong> Most Amerigroup providers can see you within 1-3 weeks. Crisis services are available same-day or next-day.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <h3 className="text-2xl font-bold">Attend Your Session (Usually $0 Cost)</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                      <h4 className="text-2xl font-bold text-green-800 mb-2">Most Likely: $0 Copay</h4>
                      <p className="text-green-700">The vast majority of Amerigroup Georgia Medicaid members pay nothing out-of-pocket for mental health therapy sessions.</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">What to Bring to Your First Visit:</h4>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Amerigroup member ID card</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Photo ID (driver's license, state ID)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>List of current medications (if any)</span>
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

        {/* Unique Amerigroup Resources */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Special Amerigroup Member Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Community Health Workers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">Amerigroup offers free community health workers who can help you:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Find mental health providers</li>
                    <li>• Navigate appointments</li>
                    <li>• Access transportation</li>
                    <li>• Connect to local resources</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-purple-600" />
                    Crisis Support Line
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">24/7 mental health crisis support for Amerigroup members:</p>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-bold">1-800-715-4225</p>
                    <p className="text-sm text-muted-foreground">Free, confidential, always available</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    Non-Emergency Medical Transport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">Can't get to appointments? Amerigroup covers rides to therapy:</p>
                  <p className="font-bold">1-844-678-1104</p>
                  <p className="text-xs text-muted-foreground">Call 2 business days before appointment</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-purple-600" />
                    Member Advocates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Having trouble accessing care? Amerigroup member advocates can help resolve issues with providers or coverage.</p>
                  <p className="font-bold mt-2">1-800-454-3730</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Common Amerigroup Therapy Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Do I really not have to pay anything for therapy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  For most Amerigroup Georgia Medicaid members, mental health therapy sessions have a $0 copay. Some limited plans may have a small copay ($1-3), but this is rare. Verify with your specific plan by calling member services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What if my coverage is about to expire?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Georgia Medicaid renewals happen annually. If your coverage is ending soon, contact Georgia Gateway (1-877-423-4746) immediately to renew. Don't wait until it expires - renewal can take weeks to process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Can I see a therapist outside my county?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, Amerigroup allows you to see any in-network provider in Georgia, regardless of county. Telehealth makes this even easier - you can work with a therapist anywhere in Georgia from your home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What if I need help finding a provider?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Call Amerigroup's Member Services at 1-800-454-3730 and ask for help finding a mental health provider. They can search their system and even call providers for you to check availability. It's a free service included with your coverage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Is therapy covered if I'm pregnant or postpartum?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. Perinatal mental health (depression/anxiety during and after pregnancy) is fully covered. Amerigroup also has special maternal health programs with additional support services - ask your provider about enrollment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Therapy with Your Amerigroup Coverage?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              CHC makes using Amerigroup for mental health simple. We handle all paperwork and verification - you just focus on feeling better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Match with Therapist
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline">
                  Questions? Contact Us
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

export default HowToUseAmerigroupTherapy;
