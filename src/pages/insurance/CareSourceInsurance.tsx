import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Shield, DollarSign, Users, Clock, Heart, AlertTriangle, FileText, CreditCard, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import careSourceImage from "@/assets/insurance-caresource.jpg";

const CareSourceInsurance = () => {
  const costRanges = [
    {
      planType: "CareSource Georgia Medicaid",
      copay: "$0",
      coinsurance: "0%",
      deductible: "$0"
    },
    {
      planType: "CareSource Marketplace Plans", 
      copay: "$0-15",
      coinsurance: "0-10%",
      deductible: "$0-1,000"
    },
    {
      planType: "CareSource Medicare Advantage",
      copay: "$0-20",
      coinsurance: "0-20%", 
      deductible: "$0-500"
    }
  ];

  const priorAuthInfo = [
    {
      service: "Individual Therapy",
      requirement: "No prior authorization",
      visitLimit: "Unlimited with medical necessity"
    },
    {
      service: "Intensive Outpatient",
      requirement: "Prior authorization required",
      visitLimit: "Based on treatment plan"
    },
    {
      service: "Family Therapy",
      requirement: "No prior auth",
      visitLimit: "Based on medical necessity"
    }
  ];

  const conditionCoverage = [
    { condition: "Anxiety Disorders", link: "/anxiety-therapy-georgia", description: "Panic attacks, social anxiety, generalized anxiety" },
    { condition: "Depression", link: "/depression-therapy-georgia", description: "Major depression, seasonal depression, postpartum" },
    { condition: "PTSD & Trauma", link: "/ptsd-therapy-georgia", description: "Childhood trauma, EMDR therapy, complex PTSD" },
    { condition: "ADHD", link: "/adhd-therapy-georgia", description: "Adult and teen ADHD, behavioral interventions" },
    { condition: "Substance Use", link: "/mental-health-library/substance-use-disorder", description: "Addiction counseling, dual diagnosis treatment" },
    { condition: "Teen Mental Health", link: "/teen-therapy-georgia", description: "Adolescent depression, anxiety, behavioral issues" }
  ];

  const faqs = [
    {
      question: "Do I need a referral for mental health services with CareSource?",
      answer: "No referral is needed for outpatient mental health services. You can contact CHC directly to schedule an appointment with your CareSource Medicaid coverage."
    },
    {
      question: "Are there any copays with CareSource Medicaid?",
      answer: "CareSource Georgia Medicaid typically has $0 copays for mental health services. However, some CareSource marketplace or Medicare plans may have small copays."
    },
    {
      question: "How many therapy sessions does CareSource cover?",
      answer: "CareSource Medicaid covers unlimited mental health visits when medically necessary. Your therapist will work with CareSource to ensure continued authorization for ongoing treatment."
    },
    {
      question: "Does CareSource cover telehealth therapy?",
      answer: "Yes, CareSource covers telehealth mental health services at the same rate as in-person visits, making therapy accessible from your home."
    },
    {
      question: "What if I have a crisis outside of business hours?",
      answer: "CareSource covers crisis services 24/7. Call the Georgia Crisis & Access Line at 1-800-715-4225 or go to your nearest emergency room for immediate help."
    },
    {
      question: "Can I see a therapist the same day I call?",
      answer: "We strive to offer same-day or next-day appointments for urgent mental health needs. CareSource supports rapid access to care for members in crisis."
    }
  ];

  const coverageDetails = [
    "Individual psychotherapy sessions",
    "Group therapy programs", 
    "Couples and family counseling",
    "Psychiatric evaluations",
    "Crisis intervention services",
    "Substance abuse counseling",
    "Specialized trauma therapy",
    "Teen and adolescent counseling"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="CareSource Mental Health Coverage Guide 2024 | Medicaid Therapy Benefits | CHC"
        description="Complete CareSource Medicaid mental health benefits guide. $0 copays, no referrals needed, unlimited visits. Start therapy today with CareSource coverage."
        keywords="CareSource insurance, Medicaid mental health, CareSource therapy benefits, $0 copay therapy, CareSource Georgia"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-800">
                  Your Complete CareSource Mental Health Benefits Guide
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-green-700">
                  CareSource Medicaid makes mental health care accessible with $0 copays and no referrals needed. Get the support you deserve today.
                </p>
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>Great news:</strong> Most CareSource Medicaid plans have $0 copays for therapy services.
                  </AlertDescription>
                </Alert>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700">
                      Start Therapy Today
                    </Button>
                  </Link>
                  <Link to="/get-started">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-green-600 text-green-600">
                      Verify My Benefits
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={careSourceImage}
                  alt="CareSource Medicaid mental health benefits and therapy coverage"
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
              CareSource Mental Health Costs by Plan Type
            </h2>
            <Alert className="mb-8 border-amber-200 bg-amber-50">
              <FileText className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Educational purposes only.</strong> CareSource Medicaid typically has $0 costs. We'll verify your specific plan details.
              </AlertDescription>
            </Alert>
            <div className="grid md:grid-cols-3 gap-6">
              {costRanges.map((plan, index) => (
                <Card key={index} className="border-2 hover:border-green-200 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">{plan.planType}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Copay per session:</span>
                        <span className="text-green-600 font-bold">{plan.copay}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Coinsurance:</span>
                        <span className="text-green-600 font-bold">{plan.coinsurance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Annual deductible:</span>
                        <span className="text-green-600 font-bold">{plan.deductible}</span>
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
                        <span className="font-medium text-muted-foreground">Visit limits:</span>
                        <p className="font-medium">{info.visitLimit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Alert className="mt-8">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription>
                <strong>CareSource advantage:</strong> No referrals needed and unlimited visits when medically necessary.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* How CHC Handles Your Benefits */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How CHC Handles Your CareSource Benefits
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">1. We Verify Your CareSource Plan</h3>
                  <p className="text-muted-foreground">
                    We confirm your CareSource plan type (Medicaid, Marketplace, or Medicare) and verify your specific mental health benefits and copay amounts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2. Transparent Billing from Day One</h3>
                  <p className="text-muted-foreground">
                    For CareSource Medicaid: You'll see "$0 copay" on your invoice. For other CareSource plans: Clear breakdown showing "CareSource payment: $XXX, Your copay: $X".
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">3. We Handle All CareSource Paperwork</h3>
                  <p className="text-muted-foreground">
                    From prior authorizations to treatment plans, we manage all CareSource requirements so you can focus on your mental health journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Pay Alternative */}
        <section className="py-16 px-4 bg-green-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">
              Don't Have CareSource? Self-Pay Options Available
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Sliding Scale Therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>Income-based pricing as low as $40/session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>No insurance verification delays</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>Same high-quality care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>Flexible payment plans available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Standard Self-Pay Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <span>Individual therapy: $120-180/session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <span>Couples therapy: $150-200/session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <span>HSA/FSA accepted</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <span>Cash, card, or payment plans</span>
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
              Mental Health Conditions Covered by CareSource
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditionCoverage.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link to={item.link} className="text-green-600 hover:underline">
                        {item.condition}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <Link to={item.link}>
                      <Button variant="outline" size="sm" className="border-green-200 text-green-600 hover:bg-green-50">
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
              Frequently Asked Questions About CareSource Coverage
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
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Use Your CareSource Benefits?
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              With CareSource Medicaid, you can start therapy today with $0 copays. No referrals needed - just call and schedule your first appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Start Therapy Today
                </Button>
              </Link>
              <Link to="/get-started">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
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

export default CareSourceInsurance;