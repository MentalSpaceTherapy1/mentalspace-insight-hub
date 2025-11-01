import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Heart, Star, Users, Shield, Sparkles, Info } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const HowToUseAlliantTherapy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Alliant Health Plan for Therapy in Georgia",
    "description": "Guide to accessing mental health therapy with Alliant Health insurance in Georgia",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Review Benefits",
        "text": "Check your Alliant Health plan's mental health coverage and wellness programs"
      },
      {
        "@type": "HowToStep",
        "name": "Find Provider",
        "text": "Search Alliant's quality-focused provider network for therapists"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule Care",
        "text": "Book appointment and access integrated wellness support"
      },
      {
        "@type": "HowToStep",
        "name": "Engage in Treatment",
        "text": "Receive therapy with whole-person care approach"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Use Alliant Health Plan for Therapy in Georgia | Wellness Guide"
        description="Access mental health therapy through Alliant Health with integrated wellness programs. Find providers, understand benefits, and maximize your whole-person care."
        keywords="Alliant Health therapy Georgia, Alliant mental health, Alliant provider search, Alliant wellness programs, therapy Alliant insurance"
        canonicalUrl="https://chctherapy.com/how-to-use-alliant-insurance-for-therapy-georgia"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-800">
              How to Use Alliant Health Plan for Mental Health Therapy in Georgia
            </h1>
            <p className="text-xl mb-8 text-emerald-700">
              Access quality mental health care through Alliant Health's integrated wellness approach - combining therapy with comprehensive support programs for your complete wellbeing.
            </p>
            <Alert className="bg-emerald-100 border-emerald-300">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <AlertDescription className="text-emerald-900">
                <strong>Alliant Advantage:</strong> Mental health therapy is part of Alliant's whole-person care model, with added wellness programs and integrated support at no extra cost.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* What Makes Alliant Different */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">The Alliant Health Difference</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-emerald-200">
                <CardContent className="pt-6 text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold mb-2">Quality-Focused Network</h3>
                  <p className="text-sm text-muted-foreground">Carefully selected providers committed to excellence in care</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-200">
                <CardContent className="pt-6 text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold mb-2">Integrated Wellness</h3>
                  <p className="text-sm text-muted-foreground">Mental health connected with physical health and lifestyle support</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-200">
                <CardContent className="pt-6 text-center">
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold mb-2">Member-Centric</h3>
                  <p className="text-sm text-muted-foreground">Personalized care coordination and support throughout your journey</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-l-emerald-600">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3 text-lg">What Alliant Covers for Mental Health:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Individual therapy sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Family and couples counseling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Group therapy programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Psychiatric services and medication management</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Telehealth mental health visits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Crisis intervention services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Substance use disorder treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Behavioral health case management</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step 1 */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <h2 className="text-3xl font-bold">Understand Your Alliant Mental Health Benefits</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-emerald-600" />
                      Contact Alliant Health Member Services
                    </h3>
                    <div className="space-y-2">
                      <p className="text-lg font-bold text-emerald-700">1-888-311-5390</p>
                      <p className="text-sm text-muted-foreground">Monday-Friday, 8am-6pm EST</p>
                      <p className="text-sm text-muted-foreground">TTY: 711 for hearing/speech impaired</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Key Questions to Ask:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"What is my copay/coinsurance for mental health therapy?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Have I met my deductible? Does it apply to mental health?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Are there session limits per year?" (Many Alliant plans have generous or unlimited coverage)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Do I need prior authorization for outpatient therapy?" (Usually not)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"Does telehealth have the same coverage as in-person?" (Typically yes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>"What wellness programs are included with my plan?"</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Or Check Your Member Portal:</h3>
                    <ol className="space-y-2 ml-6 list-decimal text-sm">
                      <li>Visit <a href="https://www.alliantplans.com" className="text-emerald-600 underline" target="_blank" rel="noopener">AlliantPlans.com</a></li>
                      <li>Log in to your member account</li>
                      <li>Navigate to "Benefits" or "Coverage Details"</li>
                      <li>Look for "Behavioral Health" or "Mental Health Services"</li>
                      <li>Download your Summary of Benefits and Coverage (SBC)</li>
                      <li>Explore wellness program offerings in your portal</li>
                    </ol>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Alliant Plus:</strong> Ask about care coordination services. Alliant assigns care coordinators who can help you navigate mental health benefits and connect different aspects of your care.
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
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <h2 className="text-3xl font-bold">Find an Alliant Quality Network Provider</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-l-emerald-600 p-6 rounded">
                    <h3 className="font-bold mb-3 text-lg">Recommended: Start with CHC</h3>
                    <p className="mb-4">CHC is in-network with Alliant Health Plans in Georgia. We align with Alliant's quality-focused approach and integrate seamlessly with their wellness programs.</p>
                    <Link to="/therapist-matching">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        Find Your Alliant Therapist
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 text-lg">Or Search Alliant Provider Network:</h3>
                    
                    <div className="bg-muted/50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Online Provider Search:</h4>
                      <ol className="space-y-2 ml-6 list-decimal text-sm">
                        <li>Go to <a href="https://www.alliantplans.com/find-a-provider" className="text-emerald-600 underline" target="_blank" rel="noopener">Alliant Provider Finder</a></li>
                        <li>Select "Behavioral Health" or "Mental Health" as provider type</li>
                        <li>Enter your Georgia location (city or zip code)</li>
                        <li>Choose your plan from the dropdown menu</li>
                        <li>Filter by:
                          <ul className="ml-6 mt-2 space-y-1">
                            <li>• Provider specialty (anxiety, depression, trauma)</li>
                            <li>• Age groups served (adults, children, seniors)</li>
                            <li>• Gender preference</li>
                            <li>• Language</li>
                            <li>• Telehealth availability</li>
                            <li>• Accepting new patients</li>
                          </ul>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Need Personal Assistance?</h4>
                      <p className="text-sm mb-2">Call <strong>1-888-311-5390</strong> and ask for help finding a mental health provider.</p>
                      <p className="text-sm text-muted-foreground">Alliant's member services team can search for you, check availability, and even connect you with care coordination for ongoing support.</p>
                    </div>
                  </div>

                  <Alert className="bg-amber-50 border-amber-200">
                    <Shield className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800">
                      <strong>Verify Before Scheduling:</strong> Always call the provider's office to confirm they're currently accepting new Alliant patients with your specific plan. Ask them to verify coverage with Alliant before your first appointment.
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
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <h2 className="text-3xl font-bold">Schedule and Prepare for Your Session</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3">Information to Provide When Scheduling:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Insurance Details</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Alliant member ID number</li>
                          <li>• Plan name and group number</li>
                          <li>• Primary care provider (if applicable)</li>
                          <li>• Date of birth</li>
                        </ul>
                      </div>

                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Personal Preferences</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Preferred appointment times</li>
                          <li>• In-person or telehealth</li>
                          <li>• Main concerns or goals</li>
                          <li>• Any special accommodations needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">What to Expect:</h3>
                    <ol className="space-y-2 ml-6 list-decimal text-sm">
                      <li>Provider office will verify your Alliant coverage and eligibility</li>
                      <li>They'll confirm your copay/coinsurance amount</li>
                      <li>You'll schedule your initial assessment appointment</li>
                      <li>You may receive intake forms to complete before your visit</li>
                      <li>Alliant may reach out to offer care coordination support (optional but helpful)</li>
                    </ol>
                  </div>

                  <Alert className="bg-green-50 border-green-200">
                    <Heart className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      <strong>CHC + Alliant Partnership:</strong> When you choose CHC, we coordinate directly with Alliant's care management team to ensure your mental health care is integrated with your overall wellness plan.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Wellness Programs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Exclusive Alliant Wellness Programs</h2>
            <p className="text-center text-muted-foreground mb-8">Complement your therapy with these included wellness benefits:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-emerald-600" />
                    Mindfulness & Stress Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-2">Access to guided meditation apps, stress management workshops, and relaxation resources at no additional cost.</p>
                  <p className="text-xs text-muted-foreground">Ask your care coordinator about enrollment</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-600" />
                    Peer Support Groups
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-2">Free virtual support groups for anxiety, depression, grief, and other mental health challenges - led by trained facilitators.</p>
                  <p className="text-xs text-muted-foreground">Check member portal for schedule</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-emerald-600" />
                    Lifestyle Coaching
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-2">One-on-one coaching for sleep improvement, nutrition for mental health, exercise motivation, and healthy habit building.</p>
                  <p className="text-xs text-muted-foreground">Included with select Alliant plans</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                    24/7 Nurse Advice Line
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm mb-2">Speak with registered nurses anytime about mental health concerns, medication questions, or when to seek care.</p>
                  <p className="text-xs font-semibold">1-888-311-5390</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Alliant Health Therapy FAQs</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What makes Alliant's mental health coverage different?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Alliant takes a whole-person, value-based approach. Your mental health care is integrated with your physical health, and you have access to wellness programs that complement therapy. They also emphasize quality provider networks and personalized care coordination.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  What is a care coordinator and how can they help with my mental health?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Alliant care coordinators are health professionals who help you navigate your care. They can assist with finding therapists, coordinating between your mental health and medical providers, connecting you to wellness programs, and addressing barriers to care like transportation or medication costs. This service is included at no extra charge.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Does Alliant have limits on therapy sessions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most Alliant plans do not impose arbitrary session limits for medically necessary mental health treatment. Your therapist works with you to determine appropriate treatment length. If extended treatment is needed, your provider can coordinate with Alliant to ensure continued coverage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  Can I use Alliant's wellness programs alongside therapy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! Alliant encourages using wellness programs to support your therapy. Mindfulness apps, support groups, lifestyle coaching, and other programs can enhance your mental health treatment outcomes. Your therapist and care coordinator can help you identify which programs would be most beneficial.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card px-6 rounded-lg border">
                <AccordionTrigger className="hover:no-underline">
                  How does Alliant coordinate my mental health care with my other healthcare?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Alliant uses an integrated care model. With your permission, your therapist can communicate with your primary care doctor and other providers to ensure coordinated treatment. This is especially important for conditions like depression or anxiety that can affect physical health. Your care coordinator facilitates these connections.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Integrated Mental Health Care with Alliant</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              CHC partners with Alliant Health to provide quality therapy within a whole-person wellness framework. We handle the details - you focus on feeling better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Start with Alliant Coverage
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

export default HowToUseAlliantTherapy;
