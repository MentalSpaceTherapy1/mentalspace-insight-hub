import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, FileText, CreditCard, Clock, AlertTriangle, Search, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUseCignaTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Cigna Insurance for Therapy in Georgia",
    "description": "Complete guide to using Cigna insurance benefits for mental health therapy in Georgia",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Verify Cigna Benefits",
        "text": "Call Cigna or check myCigna app to confirm mental health coverage and copay"
      },
      {
        "@type": "HowToStep",
        "name": "Search for Provider",
        "text": "Use Cigna provider directory to find in-network Georgia therapists"
      },
      {
        "@type": "HowToStep",
        "name": "Book Appointment",
        "text": "Contact therapist with insurance details to schedule first session"
      },
      {
        "@type": "HowToStep",
        "name": "Pay Copay",
        "text": "Pay your copay at the visit - therapist bills Cigna for the rest"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use Cigna Insurance for Therapy in Georgia | Complete 2024 Guide"
        description="Step-by-step guide to using Cigna insurance for therapy in Georgia. Learn benefits verification, provider search, copay details, and how to maximize your Cigna mental health coverage."
        keywords="how to use Cigna for therapy, Cigna therapy benefits, Cigna mental health coverage Georgia, Cigna therapist search, Cigna copay guide"
        canonicalUrl="https://chctherapy.com/how-to-use-cigna-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-800">
              How to Use Your Cigna Insurance for Therapy in Georgia
            </h1>
            <p className="text-xl mb-8 text-emerald-700">
              Complete step-by-step guide to navigating your Cigna benefits, finding in-network therapists, and getting the most from your mental health coverage.
            </p>
            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Quick Start:</strong> Cigna doesn't require referrals for therapy. Follow this guide and start within 1-2 weeks.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">4 Simple Steps to Start Therapy with Cigna</h2>
            
            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-2xl font-bold">Check Your Cigna Mental Health Benefits</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-emerald-600" />
                        Call Cigna Customer Service
                      </h4>
                      <p className="mb-2">Call <strong>1-800-244-6224</strong> (number on your Cigna card) and ask these questions:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"What is my copay for outpatient behavioral health services?" (Typically $20-40)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Have I met my annual deductible?" (Some Cigna plans require this first)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"How many therapy sessions does my plan cover per year?" (Often unlimited)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Do I need prior authorization for therapy?" (Usually no for standard therapy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Is telehealth therapy covered at the same rate?" (Usually yes)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Search className="h-5 w-5 text-emerald-600" />
                        Or Use the myCigna App/Website
                      </h4>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>Log in to <a href="https://my.cigna.com" className="text-emerald-600 underline" target="_blank" rel="noopener">myCigna.com</a> or open the myCigna app</li>
                        <li>Go to "Coverage" → "Medical"</li>
                        <li>Look for "Mental Health" or "Behavioral Health" section</li>
                        <li>Review your copay, deductible, coinsurance, and visit limits</li>
                      </ol>
                    </div>

                    <Alert className="bg-amber-50 border-amber-200">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800">
                        <strong>Important:</strong> Take a screenshot or write down your benefits. This helps avoid confusion if there's a billing question later.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-2xl font-bold">Find an In-Network Cigna Provider in Georgia</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3">Option A: Use CHC's Cigna Network</h4>
                      <p className="mb-4">CHC therapists are in-network with most Cigna plans in Georgia. We verify your benefits and handle all billing.</p>
                      <Link to="/therapist-matching">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          Match with Cigna Therapist
                        </Button>
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">Option B: Search Cigna's Provider Directory</h4>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>Visit <a href="https://www.cigna.com/findcare" className="text-emerald-600 underline" target="_blank" rel="noopener">Cigna Find Care</a></li>
                        <li>Select "Mental Health Provider" or "Behavioral Health"</li>
                        <li>Enter your location: Georgia city or zip code</li>
                        <li>Filter by:
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Provider type: Psychologist, LPC, LCSW, LMFT</li>
                            <li>• Specialty: Your concern (anxiety, depression, trauma, etc.)</li>
                            <li>• Telehealth: Yes (if you want online therapy)</li>
                            <li>• Gender preference (if applicable)</li>
                          </ul>
                        </li>
                      </ol>
                    </div>

                    <Alert>
                      <FileText className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Pro Tip:</strong> Always confirm with the therapist's office that they accept your specific Cigna plan (not just "Cigna") before booking. Plans vary.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-2xl font-bold">Schedule Your First Therapy Session</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="font-medium">When contacting the therapist, have this information ready:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Cigna Insurance Card:</strong> Member ID, group number, plan type (PPO, HMO, OAP)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Availability:</strong> Preferred days and times (mornings, evenings, weekends)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Therapy Goals:</strong> Brief description of what brings you to therapy
                        </div>
                      </li>
                    </ul>

                    <Alert className="bg-green-50 border-green-200 mt-6">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>CHC Difference:</strong> We verify your exact Cigna copay before your first session and explain all costs upfront - no surprise bills.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <h3 className="text-2xl font-bold">Attend Your Session & Understand Billing</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-emerald-600" />
                        What You'll Pay at Your Appointment
                      </h4>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="font-bold text-lg mb-2">Your Copay Only</p>
                        <p className="text-muted-foreground">Example: $35 copay? That's all you pay at the visit. Your therapist bills Cigna for the remainder.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">How Cigna Billing Works:</h4>
                      <ol className="space-y-3 ml-6 list-decimal">
                        <li>You pay your copay at time of service</li>
                        <li>Therapist files claim with Cigna after each session</li>
                        <li>Cigna processes claim (typically 7-14 days)</li>
                        <li>Cigna pays therapist directly</li>
                        <li>You receive Explanation of Benefits (EOB) in mail or myCigna app</li>
                      </ol>
                    </div>

                    <Alert className="bg-blue-50 border-blue-200">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>Reading Your EOB:</strong> If you already paid your copay, the "amount you owe" should be $0. If there's a balance shown, contact the therapist's billing office immediately.
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
            <h2 className="text-3xl font-bold mb-8 text-center">5 Common Cigna Therapy Mistakes to Avoid</h2>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-emerald-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Confusing "Cigna network" with "your specific plan network"</h3>
                  <p className="text-muted-foreground">Cigna OAP, PPO, LocalPlus, and HMO have different networks. Confirm the therapist accepts YOUR exact plan.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Not checking if you have a deductible</h3>
                  <p className="text-muted-foreground">Some Cigna plans require meeting a deductible first. Until you do, you'll pay full session cost ($120-150), not your copay.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Assuming all therapy types are covered the same</h3>
                  <p className="text-muted-foreground">Individual therapy typically has full coverage. Couples/family therapy may have different copays or limits. Always verify.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Going out-of-network without checking reimbursement rates</h3>
                  <p className="text-muted-foreground">Out-of-network therapists may be reimbursed at only 50-60% by Cigna. You'll pay much more. Stick with in-network providers.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Waiting until you're in crisis to find a therapist</h3>
                  <p className="text-muted-foreground">Good therapists often have 2-4 week waits. Start your search early so you have support when you need it.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Real Cost Examples */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Real Cigna Therapy Costs in Georgia</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Example 1: Cigna OAP Plan (Deductible Met)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Cigna Open Access Plus</p>
                    <p><strong>Deductible:</strong> Met</p>
                    <p><strong>Copay:</strong> $30 per session</p>
                    <p className="pt-3 font-bold text-green-800">You pay: $30 per therapy session ✓</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Example 2: Cigna HDHP (Deductible NOT Met)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Cigna High Deductible</p>
                    <p><strong>Deductible:</strong> $2,500 (not met)</p>
                    <p><strong>Session cost:</strong> $135</p>
                    <p className="pt-3 font-bold text-amber-800">You pay: $135/session until deductible met, then $25 copay</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Example 3: Cigna LocalPlus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Cigna LocalPlus HMO</p>
                    <p><strong>Deductible:</strong> $0</p>
                    <p><strong>Copay:</strong> $20 per session</p>
                    <p className="pt-3 font-bold text-blue-800">You pay: $20 per therapy session ✓</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Example 4: Out-of-Network with Cigna</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Cigna PPO (has OON benefits)</p>
                    <p><strong>Session cost:</strong> $160</p>
                    <p><strong>Cigna reimburses:</strong> 60% = $96</p>
                    <p className="pt-3 font-bold text-purple-800">You pay: $64/session + submit claims yourself</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Cigna Therapy FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Does Cigna have a session limit for therapy?</AccordionTrigger>
                <AccordionContent>
                  Most Cigna plans offer unlimited outpatient mental health visits per year with no session limits. However, some plans (particularly older plans or specific employers) may have limits. Always verify your specific plan when calling member services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Can I switch therapists if I'm not happy?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can switch to any in-network Cigna therapist at any time. Therapist fit is crucial for successful therapy. At CHC, we'll help you find a better match if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Does Cigna cover online/telehealth therapy?</AccordionTrigger>
                <AccordionContent>
                  Yes, Cigna covers telehealth therapy at the same rate as in-person sessions. Your copay and benefits are the same whether you see your therapist via video or in their office.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What if I run out of sessions or my plan has a limit?</AccordionTrigger>
                <AccordionContent>
                  If your Cigna plan has a session limit and you reach it, you can continue therapy by paying out-of-pocket. CHC offers self-pay rates ($120-180/session) and sliding scale options based on income.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Will my therapy show up on my insurance statements?</AccordionTrigger>
                <AccordionContent>
                  Yes, your Explanation of Benefits (EOB) will show the date and diagnosis code, but not session details. If you're on a family plan, the primary policyholder receives EOBs for all members. For complete privacy, consider self-pay options.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Use Your Cigna Benefits for Therapy?
            </h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              CHC is in-network with most Cigna plans. We'll verify your benefits and get you connected with the right therapist fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Find Cigna Therapist in Georgia
                </Button>
              </Link>
              <Link to="/get-started">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                  Verify My Cigna Benefits
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-emerald-100 text-sm">
              Start therapy within 1-2 weeks
            </p>
          </div>
        </section>

        {/* Related */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/insurance/cigna">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-emerald-600">Cigna Coverage Details →</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/mental-health-tests">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-emerald-600">Free Mental Health Assessments →</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/online-therapy-georgia">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-emerald-600">Georgia Therapy Hub →</p>
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

export default HowToUseCignaTherapy;
