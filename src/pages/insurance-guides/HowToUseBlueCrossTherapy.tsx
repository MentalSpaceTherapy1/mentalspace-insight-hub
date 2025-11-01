import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, FileText, CreditCard, Clock, AlertTriangle, Search, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUseBlueCrossTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Blue Cross Blue Shield Insurance for Therapy in Georgia",
    "description": "Step-by-step guide to using your BCBS insurance benefits for mental health therapy in Georgia",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check Your Benefits",
        "text": "Call BCBS member services or check online to verify mental health coverage and copay"
      },
      {
        "@type": "HowToStep",
        "name": "Find In-Network Provider",
        "text": "Search Blue Cross provider directory for Georgia-licensed therapists"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule First Session",
        "text": "Contact therapist with insurance information to book appointment"
      },
      {
        "@type": "HowToStep",
        "name": "Pay Copay at Visit",
        "text": "Pay your copay at session - therapist bills Blue Cross directly"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use Blue Cross Blue Shield for Therapy in Georgia | 2024 Guide"
        description="Complete guide to using your BCBS insurance for therapy in Georgia. Learn benefits verification, provider search, copay details, and how to avoid surprise bills."
        keywords="how to use Blue Cross for therapy, BCBS therapy benefits, Blue Cross mental health coverage Georgia, BCBS therapist search, Blue Cross copay"
        canonicalUrl="https://chctherapy.com/how-to-use-blue-cross-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
              How to Use Your Blue Cross Blue Shield Insurance for Therapy in Georgia
            </h1>
            <p className="text-xl mb-8 text-blue-700">
              Simple step-by-step guide to understanding your BCBS benefits, finding in-network therapists, and maximizing your mental health coverage.
            </p>
            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Quick Start:</strong> Blue Cross typically doesn't require referrals for therapy. You can start within 1-2 weeks using this guide.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">4 Steps to Start Therapy with Blue Cross</h2>
            
            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-2xl font-bold">Verify Your Mental Health Benefits</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-blue-600" />
                        Call Blue Cross Member Services
                      </h4>
                      <p className="mb-2">Call the number on your insurance card (typically <strong>1-800-810-2583</strong>) and ask:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"What is my copay for outpatient mental health?" (Usually $0-35 for BCBS GA)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Have I met my deductible?" (Some plans require this first)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Is there a session limit per year?" (Many BCBS plans have unlimited visits)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Do I need prior authorization?" (Usually no for outpatient therapy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Does telehealth have the same copay?" (Usually yes)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Search className="h-5 w-5 text-blue-600" />
                        Or Check Your Blue Cross Account Online
                      </h4>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>Log in to <a href="https://www.bcbsga.com" className="text-blue-600 underline" target="_blank" rel="noopener">BCBSGA.com</a> or your state's Blue Cross portal</li>
                        <li>Navigate to "My Benefits" or "Coverage Information"</li>
                        <li>Look for "Mental Health" or "Behavioral Health Services"</li>
                        <li>Note your copay, deductible, and any visit limits</li>
                      </ol>
                    </div>

                    <Alert className="bg-amber-50 border-amber-200">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800">
                        <strong>BCBS Georgia Specific:</strong> If you have Blue Cross Blue Shield of Georgia, mental health coverage is often excellent with low copays and unlimited visits.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-2xl font-bold">Find an In-Network Therapist in Georgia</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3">Option A: Use CHC's Blue Cross Providers</h4>
                      <p className="mb-4">CHC is in-network with Blue Cross Blue Shield of Georgia. We verify your benefits before your first session.</p>
                      <Link to="/therapist-matching">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Match with BCBS Therapist
                        </Button>
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">Option B: Search Blue Cross Provider Directory</h4>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>Go to <a href="https://www.bcbsga.com/findadoctor" className="text-blue-600 underline" target="_blank" rel="noopener">BCBS Find a Doctor</a></li>
                        <li>Select "Mental Health Professional" or "Behavioral Health"</li>
                        <li>Filter by:
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Location: Your Georgia city/zip code</li>
                            <li>• Provider Type: Psychologist, LPC, LCSW</li>
                            <li>• Specialty: Anxiety, depression, trauma, etc.</li>
                            <li>• Telehealth: Check if you want online therapy</li>
                          </ul>
                        </li>
                      </ol>
                    </div>

                    <Alert>
                      <FileText className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Always verify with the therapist's office that they're currently in-network with your specific Blue Cross plan before booking.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-2xl font-bold">Schedule Your First Appointment</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="font-medium">Have this information ready when you contact the therapist:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Insurance Details:</strong> Blue Cross member ID, group number, plan name (PPO, HMO, etc.)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Scheduling Preferences:</strong> Your available times (mornings, evenings, weekends)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Main Concern:</strong> Brief description (anxiety, depression, relationship issues, etc.)
                        </div>
                      </li>
                    </ul>

                    <Alert className="bg-green-50 border-green-200 mt-6">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>CHC Promise:</strong> We verify your exact Blue Cross copay before your first visit and explain all costs upfront - zero surprises.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <h3 className="text-2xl font-bold">Attend Your Session & Understand the Bill</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                        What You'll Pay
                      </h4>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="font-bold text-lg mb-2">Only Your Copay (at the appointment)</p>
                        <p className="text-muted-foreground">Example: If your copay is $25, that's all you pay. Your therapist bills Blue Cross for the rest.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">What Happens Next:</h4>
                      <ol className="space-y-3 ml-6 list-decimal">
                        <li>Therapist submits claim to Blue Cross after each session</li>
                        <li>Blue Cross processes claim (typically 1-3 weeks)</li>
                        <li>Blue Cross sends payment to therapist</li>
                        <li>You receive Explanation of Benefits (EOB) showing what was paid</li>
                      </ol>
                    </div>

                    <Alert className="bg-blue-50 border-blue-200">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>Reading Your EOB:</strong> If you already paid your copay at the visit, the "patient responsibility" should show $0. If it shows a balance, contact billing immediately.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">5 Common Mistakes to Avoid with Blue Cross</h2>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Not confirming the therapist takes YOUR specific BCBS plan</h3>
                  <p className="text-muted-foreground">BCBS of Georgia vs. BCBS Federal vs. BCBS from another state - these are different! Always verify your exact plan is accepted.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Assuming "Blue Cross" means low costs everywhere</h3>
                  <p className="text-muted-foreground">Out-of-network therapists may be partially covered but you'll pay significantly more. Always choose in-network providers.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Forgetting to check if your deductible is met</h3>
                  <p className="text-muted-foreground">Some BCBS plans require meeting a deductible before copays apply. If your deductible isn't met, you'll pay full session cost ($120-150) until you reach it.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Not using telehealth when it's available</h3>
                  <p className="text-muted-foreground">BCBS covers telehealth at the same rate as in-person. Save time and gas by using video therapy when appropriate.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Delaying therapy because you think it's complicated</h3>
                  <p className="text-muted-foreground">CHC makes it simple - we handle all Blue Cross paperwork and verification. You just show up for therapy.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Real Cost Examples */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Real Blue Cross Therapy Costs in Georgia</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Example 1: BCBS GA PPO (Met Deductible)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Blue Choice PPO</p>
                    <p><strong>Deductible:</strong> Met</p>
                    <p><strong>Copay:</strong> $25 per session</p>
                    <p className="pt-3 font-bold text-green-800">You pay: $25 per therapy session ✓</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Example 2: BCBS GA HMO</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Blue Essentials HMO</p>
                    <p><strong>Deductible:</strong> $0</p>
                    <p><strong>Copay:</strong> $15 per session</p>
                    <p className="pt-3 font-bold text-blue-800">You pay: $15 per therapy session ✓</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Example 3: BCBS HSA Plan (Deductible NOT Met)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Blue Choice HSA</p>
                    <p><strong>Deductible:</strong> $1,500 (not met)</p>
                    <p><strong>Session cost:</strong> $130</p>
                    <p className="pt-3 font-bold text-amber-800">You pay: $130/session until deductible met, then $20 copay</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Example 4: Federal BCBS Employee Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> BCBS Standard Option</p>
                    <p><strong>Deductible:</strong> Met</p>
                    <p><strong>Copay:</strong> $30 per session</p>
                    <p className="pt-3 font-bold text-purple-800">You pay: $30 per therapy session ✓</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Blue Cross Therapy FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Does Blue Cross have a limit on therapy sessions?</AccordionTrigger>
                <AccordionContent>
                  Many Blue Cross Blue Shield of Georgia plans offer unlimited outpatient mental health visits per year. However, some plans (especially HSA plans) may have limits. Always verify your specific plan's coverage when you call member services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Can I see a therapist outside Georgia with BCBS GA?</AccordionTrigger>
                <AccordionContent>
                  For telehealth, many BCBS GA plans allow you to see Georgia-licensed therapists while traveling. However, the therapist must be licensed in Georgia, not the state you're visiting. Always confirm with your plan if you'll be receiving ongoing care while out of state.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What's the difference between BCBS GA and BCBS from another state?</AccordionTrigger>
                <AccordionContent>
                  Each state's Blue Cross is an independent company with different networks and benefits. If you have BCBS from another state but live in Georgia, you may have limited in-network options. Contact CHC to verify if we're in-network with your specific plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Does couples therapy cost more with Blue Cross?</AccordionTrigger>
                <AccordionContent>
                  Most Blue Cross plans cover couples therapy at the same copay as individual therapy if it's medically necessary (e.g., treating relationship distress affecting mental health). However, some plans may classify it differently. CHC can verify your couples therapy coverage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Will my therapy appear on my Blue Cross statements?</AccordionTrigger>
                <AccordionContent>
                  Yes, you'll receive an Explanation of Benefits (EOB) showing the date of service and diagnosis code. Specific session details remain confidential. If you're on a family plan, the primary member receives all EOBs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Use Your Blue Cross Benefits for Therapy?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              CHC is in-network with Blue Cross Blue Shield of Georgia. We'll verify your benefits and get you started quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Find BCBS Therapist in Georgia
                </Button>
              </Link>
              <Link to="/get-started">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                  Verify My Blue Cross Benefits
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              Start therapy within 1-2 weeks
            </p>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/insurance/blue-cross">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-blue-600">Blue Cross Coverage Details →</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/mental-health-tests">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-blue-600">Free Mental Health Screenings →</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/online-therapy-georgia">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-blue-600">Georgia Online Therapy →</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToUseBlueCrossTherapy;
