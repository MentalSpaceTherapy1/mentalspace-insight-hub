import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Shield, DollarSign, Zap, Brain, Award, AlertTriangle, FileText, CreditCard, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { generateWebPageSchema } from "@/utils/schemaGenerators";
import aetnaImage from "@/assets/insurance-aetna.jpg";

const AetnaInsurance = () => {
  const costRanges = [
    {
      planType: "Aetna Basic Plans",
      copay: "$20-40",
      coinsurance: "10-20%",
      deductible: "$500-2,000"
    },
    {
      planType: "Aetna Premium Plans", 
      copay: "$10-25",
      coinsurance: "0-10%",
      deductible: "$0-500"
    },
    {
      planType: "Aetna HSA Plans",
      copay: "After deductible",
      coinsurance: "10-20%", 
      deductible: "$1,500-3,000"
    }
  ];

  const priorAuthInfo = [
    {
      service: "Individual Therapy",
      requirement: "Usually no prior auth",
      visitLimit: "12-20 visits per calendar year"
    },
    {
      service: "Intensive Outpatient",
      requirement: "Prior authorization required",
      visitLimit: "Medical necessity review"
    },
    {
      service: "Family/Couples Therapy",
      requirement: "No prior auth typically",
      visitLimit: "8-12 visits per calendar year"
    }
  ];

  const conditionCoverage = [
    { condition: "Anxiety Disorders", link: "/anxiety-therapy-georgia", description: "GAD, panic disorder, social anxiety" },
    { condition: "Depression", link: "/depression-therapy-georgia", description: "Major depression, persistent depressive disorder" },
    { condition: "PTSD & Trauma", link: "/ptsd-therapy-georgia", description: "EMDR, trauma-focused CBT" },
    { condition: "ADHD", link: "/adhd-therapy-georgia", description: "Behavioral therapy, medication management" },
    { condition: "OCD", link: "/ocd-therapy-georgia", description: "ERP therapy, CBT for OCD" },
    { condition: "Bipolar Disorder", link: "/bipolar-therapy-georgia", description: "Mood stabilization, psychotherapy" }
  ];

  const faqs = [
    {
      question: "Do I need a referral from my primary care doctor?",
      answer: "Most Aetna plans do not require a referral for mental health services. You can directly contact a CHC therapist to schedule an appointment."
    },
    {
      question: "How many therapy sessions does Aetna cover per year?",
      answer: "Coverage varies by plan, but most Aetna plans provide 12-20 outpatient mental health visits per calendar year. Some plans offer unlimited visits with higher copays after the initial visits."
    },
    {
      question: "Does Aetna cover telehealth/online therapy?",
      answer: "Yes, Aetna covers telehealth mental health services at the same rate as in-person visits. This includes video therapy sessions and phone consultations."
    },
    {
      question: "What if I need more sessions than my plan covers?",
      answer: "If you exhaust your covered visits, you can continue therapy at our self-pay rates. We also offer sliding scale options based on financial need."
    },
    {
      question: "How long does it take to get approved for therapy?",
      answer: "Most outpatient therapy services don't require prior authorization. You can typically start therapy within 1-2 weeks of your initial contact with CHC."
    },
    {
      question: "Are there any exclusions in Aetna mental health coverage?",
      answer: "Aetna generally covers medically necessary mental health treatment. Excluded services typically include court-ordered evaluations, educational testing, and experimental treatments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Aetna Mental Health Coverage Guide 2024 | CHC Therapy Benefits & Costs"
        description="Complete Aetna mental health benefits guide. Copay ranges, prior auth requirements, covered conditions, and how to verify benefits. Start therapy today with CHC."
        keywords="Aetna insurance, mental health coverage, therapy copay, prior authorization, Aetna benefits verification, mental health parity"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-red-800">
                  Your Complete Aetna Mental Health Benefits Guide
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-red-700">
                  Everything you need to know about using your Aetna insurance for therapy. Get real copay ranges, coverage details, and start therapy today.
                </p>
                <Alert className="mb-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important:</strong> Ranges vary by specific plan. We'll verify your exact benefits before your first session.
                  </AlertDescription>
                </Alert>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700">
                      Find an Aetna Provider
                    </Button>
                  </Link>
                  <Link to="/get-started">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-red-600 text-red-600">
                      Verify My Benefits
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={aetnaImage}
                  alt="Aetna insurance mental health benefits verification and therapy coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Aetna Mental Health Costs by Plan Type
            </h2>
            <Alert className="mb-8 border-amber-200 bg-amber-50">
              <FileText className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Educational purposes only.</strong> Actual costs vary by specific plan. CHC will verify your exact benefits before billing.
              </AlertDescription>
            </Alert>
            <div className="grid md:grid-cols-3 gap-6">
              {costRanges.map((plan, index) => (
                <Card key={index} className="border-2 hover:border-red-200 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-700">{plan.planType}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Copay per session:</span>
                        <span className="text-red-600 font-bold">{plan.copay}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Coinsurance:</span>
                        <span className="text-red-600 font-bold">{plan.coinsurance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Annual deductible:</span>
                        <span className="text-red-600 font-bold">{plan.deductible}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prior Authorization & Limits */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Prior Authorization & Visit Limits
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {priorAuthInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{info.service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-muted-foreground">Authorization:</span>
                        <p className="text-green-600 font-medium">{info.requirement}</p>
                      </div>
                      <div>
                        <span className="font-medium text-muted-foreground">Typical limit:</span>
                        <p className="font-medium">{info.visitLimit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Alert className="mt-8">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Good news:</strong> Most therapy services start immediately without prior authorization. We handle all paperwork for you.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* How CHC Handles Your Benefits */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 text-blue-800">📘 Need Help Using Your Aetna Benefits?</h3>
              <p className="text-blue-700 mb-4">
                New to using insurance for therapy? Check out our complete step-by-step guide:
              </p>
              <Link to="/how-to-use-aetna-insurance-for-therapy-georgia">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Read: How to Use Your Aetna Insurance for Therapy →
                </Button>
              </Link>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How CHC Handles Your Aetna Benefits
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">1. We Verify Your Benefits</h3>
                  <p className="text-muted-foreground">
                    Before your first session, we contact Aetna directly to verify your specific copay, deductible status, and remaining visits for the year.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2. Clear Invoice on Day One</h3>
                  <p className="text-muted-foreground">
                    Your first invoice will show exactly what Aetna covers and your portion. No surprises - you'll see "Aetna payment: $XXX, Your copay: $XX" clearly listed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">3. We Bill Aetna Directly</h3>
                  <p className="text-muted-foreground">
                    You only pay your copay at time of service. We handle all Aetna paperwork and billing, so you can focus on your therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Out of Network & Self-Pay */}
        <section className="py-16 px-4 bg-red-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-800">
              What If I'm Out-of-Network with Aetna?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">Out-of-Network Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Many Aetna plans offer out-of-network coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Typically 50-70% coverage after deductible</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>We provide superbills for reimbursement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Help you submit claims to Aetna</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">Self-Pay Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>Individual therapy: $120-180/session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>Couples therapy: $150-200/session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>Sliding scale available based on income</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>HSA/FSA accepted</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Conditions Covered */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mental Health Conditions Covered by Aetna
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditionCoverage.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link to={item.link} className="text-red-600 hover:underline">
                        {item.condition}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <Link to={item.link}>
                      <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                        Learn More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions About Aetna Coverage
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Use Your Aetna Benefits?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              We'll verify your exact Aetna benefits and get you connected with the right therapist. Most members start therapy within 1-2 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Find My Therapist
                </Button>
              </Link>
              <Link to="/get-started">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-red-600">
                  Verify My Benefits
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

export default AetnaInsurance;