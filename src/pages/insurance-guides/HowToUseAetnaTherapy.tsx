import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, FileText, CreditCard, Clock, AlertTriangle, Search, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUseAetnaTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Aetna Insurance for Therapy in Georgia",
    "description": "Step-by-step guide to using your Aetna insurance benefits for mental health therapy in Georgia",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Check Your Benefits",
        "text": "Call Aetna member services or check online portal to verify mental health coverage"
      },
      {
        "@type": "HowToStep",
        "name": "Find In-Network Provider",
        "text": "Search for Georgia-licensed therapists in Aetna's provider directory"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule First Session",
        "text": "Contact therapist and provide insurance information to schedule"
      },
      {
        "@type": "HowToStep",
        "name": "Attend Session & Pay Copay",
        "text": "Pay only your copay at time of service - therapist bills Aetna directly"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use Aetna Insurance for Therapy in Georgia | Complete 2024 Guide"
        description="Step-by-step guide to using your Aetna insurance for therapy in Georgia. Learn how to check benefits, find providers, avoid surprise bills, and maximize your mental health coverage."
        keywords="how to use Aetna for therapy, Aetna therapy benefits guide, Aetna mental health coverage Georgia, check Aetna therapy benefits, Aetna provider search"
        canonicalUrl="https://chctherapy.com/how-to-use-aetna-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-800">
              How to Use Your Aetna Insurance for Therapy in Georgia
            </h1>
            <p className="text-xl mb-8 text-red-700">
              Complete step-by-step guide to understanding your benefits, avoiding surprise bills, and getting the most from your Aetna mental health coverage.
            </p>
            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Quick Start:</strong> Most Aetna plans don't require referrals for therapy. You can start within 1-2 weeks by following this guide.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">4 Simple Steps to Start Therapy with Aetna</h2>
            
            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-2xl font-bold">Check Your Mental Health Benefits</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-red-600" />
                        Call Aetna Member Services
                      </h4>
                      <p className="mb-2">Call <strong>1-800-872-3862</strong> and ask these specific questions:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"What is my copay for outpatient mental health visits?" (Usually $20-40)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"How much is left on my deductible?" (Some plans require meeting deductible first)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"How many therapy visits are covered per year?" (Typically 12-20)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Is prior authorization required for therapy?" (Usually no for outpatient)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>"Does telehealth therapy have the same copay as in-person?" (Usually yes)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Search className="h-5 w-5 text-red-600" />
                        Or Check Online
                      </h4>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>Log in to <a href="https://www.aetna.com" className="text-red-600 underline" target="_blank" rel="noopener">Aetna.com</a></li>
                        <li>Go to "Coverage & Benefits" → "Medical Benefits"</li>
                        <li>Look for "Behavioral Health" or "Mental Health" section</li>
                        <li>Note your copay, deductible, and visit limits</li>
                      </ol>
                    </div>

                    <Alert className="bg-amber-50 border-amber-200">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800">
                        <strong>Pro Tip:</strong> Write down your reference number when you call. If there's ever a billing issue, having this reference number proves you verified coverage.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-2xl font-bold">Find an In-Network Georgia Provider</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3">Option A: Use CHC's Aetna Providers</h4>
                      <p className="mb-4">CHC therapists are in-network with most Aetna plans in Georgia. We verify your benefits for you.</p>
                      <Link to="/therapist-matching">
                        <Button className="bg-red-600 hover:bg-red-700">
                          Match with Aetna Therapist
                        </Button>
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">Option B: Search Aetna's Provider Directory</h4>
                      <ol className="space-y-2 ml-6 list-decimal">
                        <li>Go to <a href="https://www.aetna.com/find-care" className="text-red-600 underline" target="_blank" rel="noopener">Aetna Find Care</a></li>
                        <li>Select "Behavioral Health Providers"</li>
                        <li>Filter by:
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Location: Georgia (your city/zip)</li>
                            <li>• Type: "Psychologist" or "Licensed Professional Counselor"</li>
                            <li>• Specialty: Your concern (anxiety, depression, etc.)</li>
                            <li>• Telehealth: Yes (if you want online therapy)</li>
                          </ul>
                        </li>
                      </ol>
                    </div>

                    <Alert>
                      <FileText className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important:</strong> Before booking, confirm with the therapist's office that they're still in-network with your specific Aetna plan. Provider directories can be outdated.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-2xl font-bold">Schedule Your First Session</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="font-medium">When you call or submit an online request, have this information ready:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Insurance Card Info:</strong> Member ID, Group number, Aetna plan name
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Preferred Times:</strong> Your available days/times (evenings, weekends, etc.)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <strong>Brief Concern:</strong> What you want help with (anxiety, relationships, stress, etc.)
                        </div>
                      </li>
                    </ul>

                    <Alert className="bg-green-50 border-green-200 mt-6">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        <strong>CHC Advantage:</strong> When you schedule with CHC, we verify your exact Aetna benefits before your first session and tell you your copay upfront - no surprises.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <h3 className="text-2xl font-bold">Attend Session & Understand Billing</h3>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-red-600" />
                        What You'll Pay
                      </h4>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="font-bold text-lg mb-2">Your Copay Only (at time of service)</p>
                        <p className="text-muted-foreground">Example: If your plan has a $30 copay, you pay $30 per session. Aetna pays the rest directly to your therapist.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">What Happens Behind the Scenes:</h4>
                      <ol className="space-y-3 ml-6 list-decimal">
                        <li>Your therapist submits a claim to Aetna after each session</li>
                        <li>Aetna processes the claim (usually 2-4 weeks)</li>
                        <li>Aetna sends payment to therapist and Explanation of Benefits (EOB) to you</li>
                        <li>EOB shows what Aetna paid and your copay (already collected)</li>
                      </ol>
                    </div>

                    <Alert className="bg-blue-50 border-blue-200">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>Understanding Your EOB:</strong> The "amount you owe" on your EOB should be $0 if you already paid your copay at the appointment. If it shows a balance, contact the therapist's billing office immediately.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">5 Common Mistakes to Avoid</h2>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Not verifying the therapist is still in-network</h3>
                  <p className="text-muted-foreground">Provider directories get outdated. Always call to confirm with the therapist's office before your first visit.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Assuming all Aetna plans are the same</h3>
                  <p className="text-muted-foreground">Aetna HMO, PPO, and HSA plans have different copays and rules. Always verify YOUR specific plan.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Forgetting about your deductible</h3>
                  <p className="text-muted-foreground">If you haven't met your annual deductible, you'll pay the full session cost until you do (typically $120-150/session), then copays kick in.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Not tracking your visit limit</h3>
                  <p className="text-muted-foreground">Most Aetna plans cover 12-20 visits per year. After that, you'll pay out-of-pocket unless your plan has unlimited coverage.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-600">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">❌ Waiting too long to start therapy</h3>
                  <p className="text-muted-foreground">Good therapists book up fast, especially in Georgia. Start searching as soon as you verify benefits.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Real-World Cost Examples</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Example 1: PPO Plan (Deductible Met)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Aetna Choice PPO</p>
                    <p><strong>Deductible:</strong> Already met</p>
                    <p><strong>Copay:</strong> $30 per session</p>
                    <p className="pt-3 font-bold text-green-800">You pay: $30 per therapy session ✓</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-800">Example 2: HSA Plan (Deductible NOT Met)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Aetna HSA</p>
                    <p><strong>Deductible:</strong> $2,000 (haven't met yet)</p>
                    <p><strong>Session cost:</strong> $140</p>
                    <p className="pt-3 font-bold text-amber-800">You pay: $140 per session until deductible met, then $25 copay</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Example 3: Premium PPO Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Aetna Signature Administrators PPO</p>
                    <p><strong>Deductible:</strong> $0</p>
                    <p><strong>Copay:</strong> $10 per session</p>
                    <p className="pt-3 font-bold text-blue-800">You pay: $10 per therapy session ✓</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-800">Example 4: Out-of-Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan:</strong> Aetna Open Access (has OON coverage)</p>
                    <p><strong>Session cost:</strong> $150</p>
                    <p><strong>Aetna covers:</strong> 60% after deductible = $90</p>
                    <p className="pt-3 font-bold text-purple-800">You pay: $60 per session + submit claim for reimbursement</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What if I need more sessions than Aetna covers?</AccordionTrigger>
                <AccordionContent>
                  Most Aetna plans cover 12-20 outpatient visits per year. If you need more, you have options: (1) Pay out-of-pocket at CHC's self-pay rate ($120-180/session), (2) Request additional sessions from Aetna based on medical necessity (your therapist can help with this), or (3) Switch to a sliding scale payment option.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Does telehealth therapy count toward my visit limit?</AccordionTrigger>
                <AccordionContent>
                  Yes, telehealth/video therapy sessions count the same as in-person visits toward your annual visit limit. The good news is they usually have the same copay as in-person therapy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can I switch therapists if the first one isn't a good fit?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! Therapist fit is crucial for success. You can switch to another Aetna in-network provider at any time without penalty. At CHC, we'll help you find a better match if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Will therapy show up on my insurance statement?</AccordionTrigger>
                <AccordionContent>
                  Yes, your Explanation of Benefits (EOB) from Aetna will show therapy claims. The EOB includes the date of service and diagnosis code but not details of what you discussed. If you're on a family plan, the primary policyholder will receive EOBs for all covered members.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What happens if my Aetna plan changes mid-year?</AccordionTrigger>
                <AccordionContent>
                  If your employer changes plans or you switch jobs, notify your therapist immediately. CHC will verify your new benefits and confirm we're still in-network. If we're not, we can provide out-of-network superbills or help you transition to an in-network provider.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Therapy with Your Aetna Insurance?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              CHC handles all the verification and billing for you. We'll confirm your exact Aetna copay before your first session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Find Aetna Therapist in Georgia
                </Button>
              </Link>
              <Link to="/get-started">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                  Request Benefits Verification
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-red-100 text-sm">
              Most members start therapy within 1-2 weeks
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/insurance/aetna">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-red-600">Aetna Coverage Details →</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/mental-health-tests">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-red-600">Free Mental Health Tests →</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/online-therapy-georgia">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <p className="font-medium text-red-600">Georgia Therapy Services →</p>
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

export default HowToUseAetnaTherapy;
