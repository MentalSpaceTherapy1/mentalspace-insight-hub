import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Shield, AlertTriangle, Search, FileText, Clock, Info } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUseOptumTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Optum/UnitedHealthcare Insurance for Therapy in Georgia",
    "description": "Navigate Optum and UnitedHealthcare mental health benefits for therapy in Georgia",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Understand Your Plan",
        "text": "Identify whether you have UHC commercial, Medicare Advantage, or Optum-managed behavioral health"
      },
      {
        "@type": "HowToStep",
        "name": "Verify Benefits",
        "text": "Call to confirm mental health copay, deductible, and whether Optum manages your behavioral health"
      },
      {
        "@type": "HowToStep",
        "name": "Find Provider",
        "text": "Search the correct provider directory based on your specific plan type"
      },
      {
        "@type": "HowToStep",
        "name": "Begin Therapy",
        "text": "Schedule and attend therapy with verified network provider"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use Optum/UnitedHealthcare for Therapy in Georgia | Complete Guide"
        description="Master navigating Optum and UnitedHealthcare insurance for mental health therapy. Understand complex plans, find right providers, avoid billing surprises."
        keywords="Optum therapy Georgia, UnitedHealthcare mental health, Optum behavioral health, UHC therapy copay, Optum provider search Georgia"
        canonicalUrl="https://chctherapy.com/how-to-use-optum-unitedhealthcare-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-800">
              How to Navigate Optum/UnitedHealthcare for Therapy in Georgia
            </h1>
            <p className="text-xl mb-8 text-indigo-700">
              Optum and UnitedHealthcare plans can be complex. This guide breaks down exactly how to access mental health therapy with your specific plan - no confusing insurance jargon.
            </p>
            <Alert className="bg-indigo-100 border-indigo-300">
              <Info className="h-4 w-4 text-indigo-600" />
              <AlertDescription className="text-indigo-900">
                <strong>Important:</strong> Optum and UnitedHealthcare are related but have different networks. Understanding YOUR specific plan type is critical to finding the right therapist.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Understanding the Complexity */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">First: Understand Your Plan Type</h2>
            
            <Alert className="mb-8 bg-amber-50 border-amber-300">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Why This Matters:</strong> Many UnitedHealthcare plans use Optum to manage behavioral health separately. This means your therapist might need to be in the Optum network, NOT the UnitedHealthcare medical network. Getting this wrong = surprise bills.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-indigo-200">
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="text-indigo-800">UnitedHealthcare Medical Network</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-3"><strong>Applies to:</strong></p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Some employer PPO/HMO plans</li>
                    <li>• UHC Medicare Advantage (AARP plans)</li>
                    <li>• UHC Community Plan (Medicaid)</li>
                  </ul>
                  <p className="text-sm mt-3 font-medium text-indigo-700">For these plans, therapists must be in UHC network.</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Optum Behavioral Health Network</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-3"><strong>Applies to:</strong></p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Many employer mental health benefits</li>
                    <li>• Plans that "carve out" behavioral health</li>
                    <li>• Some EAP (Employee Assistance) programs</li>
                  </ul>
                  <p className="text-sm mt-3 font-medium text-blue-700">For these plans, therapists must be in Optum network.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-l-4 border-l-indigo-600">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2 text-lg">How to Know Which You Have:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Check your ID card:</strong> If it says "Behavioral Health by Optum" or lists an Optum phone number for mental health, you have Optum-managed behavioral health.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Call the number on your card:</strong> Ask directly: "Is my mental health coverage managed by UnitedHealthcare or by Optum?"</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step 1 */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <h2 className="text-3xl font-bold">Verify Your Mental Health Benefits</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-indigo-600" />
                      Call the RIGHT Number for Your Plan
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-1">If Your Card Says "Optum Behavioral Health":</p>
                        <p className="text-lg font-bold text-indigo-700">1-877-468-1016</p>
                        <p className="text-sm text-muted-foreground">Optum Behavioral Health Member Services</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">If You Have UnitedHealthcare (No Optum Mention):</p>
                        <p className="text-lg font-bold text-indigo-700">1-800-328-5979</p>
                        <p className="text-sm text-muted-foreground">UnitedHealthcare Member Services</p>
                      </div>

                      <div>
                        <p className="font-semibold mb-1">If You Have UHC Medicare Advantage (AARP):</p>
                        <p className="text-lg font-bold text-indigo-700">1-800-457-8506</p>
                        <p className="text-sm text-muted-foreground">AARP Medicare Advantage Member Services</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Critical Questions to Ask:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Is my mental health coverage managed by Optum or UnitedHealthcare?" (MOST IMPORTANT)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"What is my copay for outpatient mental health therapy?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Have I met my deductible? Does therapy count toward it?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Do I need prior authorization for outpatient therapy?" (Usually no, but some plans yes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Is there a session limit per year?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Does telehealth have the same copay as in-person?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Do I have EAP benefits with free sessions?" (Separate from insurance)</span>
                      </li>
                    </ul>
                  </div>

                  <Alert>
                    <FileText className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Pro Tip:</strong> Ask them to email or mail you a summary of your mental health benefits. Having it in writing prevents confusion later.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step 2 */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <h2 className="text-3xl font-bold">Find the RIGHT In-Network Provider</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <Alert className="bg-amber-50 border-amber-300">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800">
                      <strong>CRITICAL:</strong> You must search the correct directory. Searching UnitedHealthcare when you have Optum-managed behavioral health will show wrong providers and lead to denied claims.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-l-indigo-600 p-6 rounded">
                    <h3 className="font-bold mb-3 text-lg">Easiest Option: Start with CHC</h3>
                    <p className="mb-4">CHC is in-network with both UnitedHealthcare and Optum networks in Georgia. We'll verify which network you need and handle all the complexity for you.</p>
                    <Link to="/therapist-matching">
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Match with UHC/Optum Therapist
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h3 className="font-bold mb-4 text-lg">Or Search Provider Directories Yourself:</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Search className="h-5 w-5 text-indigo-600" />
                          If You Have Optum-Managed Behavioral Health:
                        </h4>
                        <ol className="space-y-2 ml-6 list-decimal text-sm">
                          <li>Go to <a href="https://www.optum.com/en/behavioral-health.html" className="text-indigo-600 underline" target="_blank" rel="noopener">LiveAndWorkWell.com</a></li>
                          <li>Enter access code (find on your ID card or ask employer HR)</li>
                          <li>Click "Find Care" → "Find a Provider"</li>
                          <li>Select "Behavioral Health" and enter Georgia location</li>
                          <li>Filter by therapist type, specialty, telehealth options</li>
                        </ol>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Search className="h-5 w-5 text-indigo-600" />
                          If You Have UnitedHealthcare (Not Optum-Managed):
                        </h4>
                        <ol className="space-y-2 ml-6 list-decimal text-sm">
                          <li>Go to <a href="https://www.uhc.com" className="text-indigo-600 underline" target="_blank" rel="noopener">UHC.com</a></li>
                          <li>Log in to your account</li>
                          <li>Click "Find Care & Costs" → "Find a Doctor"</li>
                          <li>Select "Mental Health Professional"</li>
                          <li>Enter your plan ID and Georgia location</li>
                          <li>Review results for providers accepting new patients</li>
                        </ol>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          <Search className="h-5 w-5 text-indigo-600" />
                          If You Have UHC Medicare Advantage:
                        </h4>
                        <ol className="space-y-2 ml-6 list-decimal text-sm">
                          <li>Go to <a href="https://www.uhcmedicaresolutions.com" className="text-indigo-600 underline" target="_blank" rel="noopener">UHCMedicareSolutions.com</a></li>
                          <li>Use the provider search tool</li>
                          <li>Select your specific plan from dropdown</li>
                          <li>Search "Behavioral Health" in Georgia</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-red-50 border-red-300">
                    <Shield className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      <strong>Before Scheduling:</strong> ALWAYS call the therapist's office and verify they accept your EXACT plan (e.g., "UHC Choice Plus through XYZ Employer" or "Optum behavioral health through ABC Company"). Generic "UnitedHealthcare" confirmation isn't enough.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step 3 */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <h2 className="text-3xl font-bold">Schedule and Confirm Everything</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="font-medium">When calling to schedule, provide:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Insurance Information</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Member ID number</li>
                        <li>• Plan name and group number</li>
                        <li>• State if it's Optum or UnitedHealthcare</li>
                        <li>• Employer name (if employer plan)</li>
                      </ul>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Confirm Before Your Visit</h4>
                      <ul className="text-sm space-y-1">
                        <li>• "You verified I'm in-network, correct?"</li>
                        <li>• "What will my copay be?"</li>
                        <li>• "Do I need prior authorization?"</li>
                        <li>• "Will you bill my insurance directly?"</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="bg-green-50 border-green-200 mt-4">
                    <Clock className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>CHC Guarantee:</strong> When you work with CHC, we verify your EXACT UnitedHealthcare or Optum coverage before your first visit and confirm your out-of-pocket cost in writing. No surprises, ever.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Common UHC/Optum Problems & Solutions</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2 text-red-700">Problem: "Your therapist is out-of-network" (But they said they take UHC)</h3>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Why:</strong> They're in UHC network but NOT Optum network (or vice versa).</p>
                  <p className="text-sm font-medium">Solution: Before first visit, have therapist call to verify benefits. Get confirmation in writing of in-network status.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2 text-amber-700">Problem: Claim denied for "prior authorization required"</h3>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Why:</strong> Some UHC/Optum plans require authorization after certain number of sessions.</p>
                  <p className="text-sm font-medium">Solution: Ask your therapist to submit authorization. They handle this, not you. Usually approved quickly.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2 text-blue-700">Problem: Billed full cost instead of copay</h3>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Why:</strong> Deductible not met, or coding error by provider.</p>
                  <p className="text-sm font-medium">Solution: Call member services with EOB. They'll explain if it's deductible or if there was an error. Provider can rebill if wrong code used.</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2 text-purple-700">Problem: Can't find ANY available therapists in network</h3>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Why:</strong> Network is narrow, or directory is outdated.</p>
                  <p className="text-sm font-medium">Solution: File a "network adequacy complaint" with member services. They may authorize out-of-network provider at in-network rates. Or call CHC - we maintain current availability.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">UHC/Optum Therapy FAQs</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Why is this so confusing compared to other insurance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  UnitedHealthcare owns Optum, but they operate as separate networks. Many employers choose to have Optum manage just the behavioral health part of their UHC plan (called "carve-out"). This saves employers money but creates confusion for members. Always verify which network manages YOUR mental health coverage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  I have an EAP through my employer - is that the same as my UHC insurance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No! EAP (Employee Assistance Program) is separate and typically provides 3-8 FREE therapy sessions before you even use your insurance. Ask your HR department about EAP - it's often through Optum or another company. Use those free sessions first, then transition to your insurance coverage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Can I appeal if my therapy claim is denied?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. UnitedHealthcare and Optum must provide an appeals process. Call member services within 180 days of the denial and request an appeal. They'll tell you how to submit documentation. For complex appeals, ask your therapist's billing office to help - they deal with this often.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Does UHC/Optum cover telehealth therapy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, both UnitedHealthcare and Optum cover telehealth mental health services, typically at the same copay/coinsurance as in-person. Some plans even have LOWER copays for telehealth. Verify with your specific plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  My employer just switched to UHC - can I keep my current therapist?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Only if your therapist is in the UHC or Optum network (whichever your new plan uses). Call your therapist's office and give them your new insurance info - they'll verify. If they're not in-network, ask UHC about "continuity of care" provisions that may let you finish treatment with them for a limited time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Skip the Confusion - Let CHC Handle Your UHC/Optum Coverage</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              We're in-network with both networks and verify your exact coverage before you start. You focus on therapy, we handle the insurance maze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Start with UHC/Optum Coverage
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline">
                  Need Help? Contact Us
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

export default HowToUseOptumTherapy;
