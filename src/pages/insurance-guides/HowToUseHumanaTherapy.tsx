import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Heart, Shield, DollarSign, Users, Calendar, Info } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUseHumanaTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Humana Insurance for Therapy in Georgia",
    "description": "Guide for using Humana Medicare and commercial plans for mental health therapy services",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Review Benefits",
        "text": "Check your Humana plan's mental health coverage and copay amounts"
      },
      {
        "@type": "HowToStep",
        "name": "Find Network Provider",
        "text": "Search Humana provider directory for licensed therapists in Georgia"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule Visit",
        "text": "Book appointment with insurance information and preferred times"
      },
      {
        "@type": "HowToStep",
        "name": "Attend Session",
        "text": "Pay copay at visit and receive quality mental health care"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use Humana Insurance for Therapy in Georgia | 2024 Guide"
        description="Complete guide to using Humana Medicare and commercial insurance for mental health therapy. Understand benefits, find providers, and maximize coverage."
        keywords="Humana therapy Georgia, Humana Medicare mental health, Humana provider search, Humana copay therapy, Humana Gold Plus therapy"
        canonicalUrl="https://chctherapy.com/how-to-use-humana-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-800">
              How to Use Your Humana Insurance for Therapy in Georgia
            </h1>
            <p className="text-xl mb-8 text-orange-700">
              Whether you have Humana Medicare, Medicare Advantage, or commercial coverage - this guide helps you access quality mental health therapy with confidence.
            </p>
            <Alert className="bg-orange-100 border-orange-300">
              <Heart className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-900">
                <strong>Humana Covers Mental Health:</strong> Most Humana plans include comprehensive behavioral health benefits with affordable copays or coinsurance for therapy sessions.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Plan Types Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Understanding Your Humana Plan Type</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800">Medicare Advantage</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-3">Humana Gold Plus, Honor, etc.</p>
                  <p className="text-sm text-muted-foreground">Typical therapy copay: $0-$40 per session</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800">Original Medicare + Humana</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-3">Medicare Part B coverage</p>
                  <p className="text-sm text-muted-foreground">Typically 20% coinsurance after deductible</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800">Commercial/Employer Plans</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-3">PPO, HMO, HDHP plans</p>
                  <p className="text-sm text-muted-foreground">Copay varies: $10-$50 depending on plan</p>
                </CardContent>
              </Card>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>Not sure which you have?</strong> Check your Humana ID card. Medicare Advantage cards say "Medicare Advantage" or show plan names like "Gold Plus." Commercial plans show your employer or "PPO/HMO."
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Step 1 */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <h2 className="text-3xl font-bold">Check Your Mental Health Benefits</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-orange-600" />
                      Call Humana Member Services
                    </h3>
                    <div className="space-y-2">
                      <p><strong>Medicare Advantage:</strong> 1-800-457-4708 (TTY: 711)</p>
                      <p><strong>Commercial/Employer Plans:</strong> Number on back of your ID card</p>
                      <p className="text-sm text-muted-foreground">Monday-Friday, 8am-8pm local time</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Important Questions to Ask:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"What is my copay/coinsurance for outpatient mental health therapy?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Have I met my deductible?" (Some plans require this first)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Is there a session limit per year?" (Most Humana plans have no limit)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Do I need prior authorization for therapy?" (Usually no)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Does telehealth have the same coverage as in-person?" (Usually yes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Do I need a referral from my primary care doctor?" (Most plans: no)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Or Check Your Humana Account Online:</h3>
                    <ol className="space-y-2 ml-6 list-decimal">
                      <li>Log in to <a href="https://www.humana.com" className="text-orange-600 underline" target="_blank" rel="noopener">Humana.com</a></li>
                      <li>Go to "Benefits" or "My Plan"</li>
                      <li>Look for "Mental Health" or "Behavioral Health" section</li>
                      <li>Review copay/coinsurance amounts and any notes</li>
                      <li>Download your Summary of Benefits for complete details</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step 2 */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <h2 className="text-3xl font-bold">Find a Humana In-Network Therapist</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-l-orange-600 p-6 rounded">
                    <h3 className="font-bold mb-3 text-lg">Easiest Option: Start with CHC</h3>
                    <p className="mb-4">CHC is in-network with Humana plans in Georgia. We verify your exact benefits before your first visit so there are no surprise costs.</p>
                    <Link to="/therapist-matching">
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Match with Humana Therapist
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-lg">Or Search Humana Provider Directory:</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">For Medicare Advantage:</h4>
                        <ol className="space-y-2 ml-6 list-decimal text-sm">
                          <li>Go to <a href="https://www.humana.com/finder/medical" className="text-orange-600 underline" target="_blank" rel="noopener">Humana Provider Finder</a></li>
                          <li>Select "Behavioral Health" as provider type</li>
                          <li>Enter your plan name and Georgia location</li>
                          <li>Filter by specialty, gender, language, telehealth</li>
                          <li>Check "Accepting New Patients"</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">For Commercial/Employer Plans:</h4>
                        <ol className="space-y-2 ml-6 list-decimal text-sm">
                          <li>Visit your employer benefits portal or Humana.com</li>
                          <li>Log in and go to "Find Care" or "Provider Search"</li>
                          <li>Make sure you select YOUR specific plan (not just "Humana")</li>
                          <li>Search for mental health providers in your area</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-amber-50 border-amber-200">
                    <Shield className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800">
                      <strong>Critical Step:</strong> Before booking, call the therapist's office and confirm they accept YOUR SPECIFIC Humana plan. "Humana Gold Plus" and "Humana Choice PPO" are different networks.
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
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <h2 className="text-3xl font-bold">Schedule Your First Session</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="font-medium">Have this information ready when calling:</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Humana Insurance Details</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Member ID number</li>
                        <li>• Plan name (e.g., "Gold Plus H1036-168")</li>
                        <li>• Group number (if applicable)</li>
                        <li>• Your date of birth</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Scheduling Details</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Your availability (days/times)</li>
                        <li>• In-person or telehealth preference</li>
                        <li>• Brief description of concerns</li>
                        <li>• Any therapist gender preference</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="bg-green-50 border-green-200">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>CHC Advantage:</strong> When you schedule with CHC, we verify your Humana benefits in advance and tell you EXACTLY what you'll pay before your first visit.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost Examples */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What You'll Pay: Real Humana Examples</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800">Example: Humana Gold Plus (Medicare Advantage)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan Type:</strong> Medicare Advantage HMO</p>
                    <p><strong>Mental Health Copay:</strong> $35 per session</p>
                    <p><strong>Prior Authorization:</strong> Not required</p>
                    <p><strong>Session Limit:</strong> Unlimited</p>
                    <p className="pt-3 text-green-700 font-medium">You pay $35 per visit, that's it.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Example: Humana Employer PPO</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2 text-sm">
                    <p><strong>Plan Type:</strong> Commercial PPO</p>
                    <p><strong>Deductible:</strong> $1,000 (already met)</p>
                    <p><strong>Mental Health Copay:</strong> $30 per session</p>
                    <p><strong>Telehealth:</strong> Same $30 copay</p>
                    <p className="pt-3 text-blue-700 font-medium">You pay $30 per visit (in-person or video).</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-amber-800">Example: Original Medicare + Humana Supplement</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2 text-sm">
                    <p><strong>Medicare Part B:</strong> Covers therapy</p>
                    <p><strong>You Pay:</strong> 20% coinsurance</p>
                    <p><strong>Typical Session Cost:</strong> $120-140</p>
                    <p><strong>Your 20%:</strong> $24-28 per session</p>
                    <p className="pt-3 text-amber-700 font-medium">Supplement plan may cover the 20%.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800">Example: Humana HDHP (High Deductible)</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2 text-sm">
                    <p><strong>Deductible:</strong> $2,500 (not met)</p>
                    <p><strong>Before Deductible:</strong> Full cost ($120-150/session)</p>
                    <p><strong>After Deductible:</strong> 20% coinsurance</p>
                    <p className="pt-3 text-purple-700 font-medium">Consider using HSA funds for therapy costs.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Humana-Specific Benefits */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Special Humana Mental Health Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Healthy Horizons Wellness Programs</h3>
                      <p className="text-sm text-muted-foreground">Many Humana Medicare Advantage plans include free wellness programs that complement therapy: stress management classes, mindfulness workshops, and support groups.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Heart className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">24/7 Nurse Advice Line</h3>
                      <p className="text-sm text-muted-foreground mb-2">Free 24/7 access to registered nurses who can discuss mental health concerns and help you decide if you need immediate care.</p>
                      <p className="font-semibold">1-800-457-4708</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">EAP (Employee Assistance Program)</h3>
                      <p className="text-sm text-muted-foreground">If you have Humana through an employer, ask if you have an EAP - this often includes 3-8 FREE therapy sessions per year, separate from your insurance benefits.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Care Coaches (Select Plans)</h3>
                      <p className="text-sm text-muted-foreground">Some Humana Medicare Advantage plans assign you a personal care coach who can help coordinate mental health services and provide ongoing support.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Humana Therapy FAQs</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  I have Humana Medicare Advantage - can I see any therapist who takes Medicare?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No. Medicare Advantage works differently from Original Medicare. You must see therapists specifically in your Humana plan's network. Always verify the provider accepts your exact Humana plan name before scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Does Humana have a limit on therapy sessions per year?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most Humana plans do not have session limits for medically necessary mental health therapy. Medicare law prohibits arbitrary session caps. However, your therapist must document that continued treatment is clinically appropriate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Can I use telehealth for therapy with Humana?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Humana covers telehealth mental health services, typically at the same copay/coinsurance as in-person visits. This is especially useful if you have mobility issues or live in rural areas with limited local providers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What if I need help paying for therapy if I haven't met my deductible?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ask your therapist about sliding scale fees or payment plans while you work toward meeting your deductible. Some providers offer reduced rates. You can also use HSA/FSA funds tax-free. Contact CHC to discuss options - we work with patients on financial concerns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  How do I file a complaint if I'm having trouble accessing mental health care with Humana?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Call Humana Member Services at 1-800-457-4708 and ask to file a grievance. They're required to investigate and respond within 30 days. For Medicare Advantage, you can also contact Medicare directly at 1-800-MEDICARE if you believe your rights have been violated.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Use Your Humana Benefits for Therapy?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              CHC accepts most Humana plans and makes the insurance process simple. We'll verify your coverage and explain costs upfront - no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Start with Humana Coverage
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

export default HowToUseHumanaTherapy;
