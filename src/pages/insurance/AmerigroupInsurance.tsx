import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Shield, DollarSign, Users, MapPin, Clock, AlertTriangle, CreditCard, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { generateWebPageSchema } from "@/utils/schemaGenerators";
import amerigroupImage from "@/assets/insurance-amerigroup.jpg";

const AmerigroupInsurance = () => {
  const costRanges = [
    { service: "Individual Therapy Session", cost: "$0-$30", note: "Varies by specific plan and provider" },
    { service: "Couples/Family Therapy", cost: "$0-$30", note: "May require prior authorization" },
    { service: "Group Therapy", cost: "$0-$15", note: "Lower cost option for community support" },
    { service: "Psychiatric Consultation", cost: "$0-$40", note: "Initial evaluation may have different rate" }
  ];

  const priorAuthInfo = [
    { service: "Individual Therapy (8-12 sessions)", required: "Usually not required", note: "Initial sessions typically approved" },
    { service: "Extended Therapy (13+ sessions)", required: "May be required", note: "Clinical review for continued care" },
    { service: "Intensive Outpatient Programs", required: "Required", note: "Pre-authorization needed before starting" },
    { service: "Specialized Therapy (EMDR, etc.)", required: "Often required", note: "Depends on provider and treatment type" }
  ];

  const conditionCoverage = [
    { condition: "Depression", link: "/mental-health-library/depression", description: "Individual therapy, group support, medication management" },
    { condition: "Anxiety Disorders", link: "/mental-health-library/anxiety", description: "CBT, exposure therapy, group programs" },
    { condition: "PTSD & Trauma", link: "/mental-health-library/ptsd", description: "Trauma-focused therapy, EMDR when authorized" },
    { condition: "Bipolar Disorder", link: "/mental-health-library/bipolar-disorder", description: "Therapy combined with psychiatric care" },
    { condition: "Substance Use", link: "/mental-health-library/substance-use-disorder", description: "Outpatient counseling, support groups" },
    { condition: "ADHD", link: "/mental-health-library/adhd", description: "Behavioral therapy, family support" }
  ];

  const faqs = [
    {
      question: "Do I need a referral for mental health services with Amerigroup?",
      answer: "No, Amerigroup members typically don't need a referral for mental health services. You can self-refer to in-network providers."
    },
    {
      question: "How many therapy sessions does Amerigroup cover per year?",
      answer: "Coverage varies by plan, but most Amerigroup plans cover 12-26 sessions per year. Extended treatment may require clinical review."
    },
    {
      question: "Does Amerigroup cover telehealth therapy sessions?",
      answer: "Yes, Amerigroup covers telehealth mental health services at the same rate as in-person sessions when provided by in-network providers."
    },
    {
      question: "What if I need crisis mental health services?",
      answer: "Crisis services are covered 24/7. Contact Amerigroup's crisis line or go to your nearest emergency room for immediate help."
    },
    {
      question: "Can I see any therapist with Amerigroup insurance?",
      answer: "For the lowest costs, choose an in-network provider. Out-of-network services may have higher costs or limited coverage."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Community-Centered Care",
      description: "Amerigroup focuses on serving diverse communities with culturally competent mental health services tailored to your background."
    },
    {
      icon: DollarSign,
      title: "Low-Cost Access",
      description: "Amerigroup members typically pay $0-$30 per session, ensuring mental health care is affordable for all income levels."
    },
    {
      icon: MapPin,
      title: "Local Network",
      description: "Strong network of local providers who understand the unique challenges facing your community."
    },
    {
      icon: Shield,
      title: "Medicaid Expertise",
      description: "Specialized experience in Medicaid managed care, ensuring seamless coverage for eligible members."
    },
    {
      icon: Clock,
      title: "Accessible Hours",
      description: "Extended hours and flexible scheduling to accommodate work and family responsibilities."
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Services",
      description: "Full range of mental health services from preventive care to intensive treatment programs."
    }
  ];

  const amerigroupServices = [
    "Individual psychotherapy and counseling",
    "Community-based mental health services", 
    "Crisis intervention and emergency care",
    "Substance abuse treatment programs",
    "Family and couples therapy",
    "Children and adolescent mental health",
    "Peer support and recovery services",
    "Psychiatric medication management",
    "Case management services",
    "Telehealth and mobile therapy options",
    "Cultural and linguistic services",
    "Trauma-informed care approaches"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Amerigroup Insurance Mental Health Coverage | Colorado Healing Center"
        description="Amerigroup members get community-focused mental health coverage with copays as low as $0. Access culturally competent therapy services in your local area."
        keywords="Amerigroup insurance, mental health coverage, Medicaid therapy, community mental health, culturally competent care"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-purple-800">
                  Amerigroup Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-purple-700">
                  Experience community-centered mental health care with Amerigroup. Our providers understand your community and are committed to culturally competent care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700">
                      Find Local Therapist
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-purple-600 text-purple-600">
                      Mental Health Screening
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={amerigroupImage}
                  alt="Amerigroup insurance community mental health coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Amerigroup Mental Health Benefits
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Amerigroup's community-focused approach ensures you receive mental health care that understands and respects your cultural background
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Session Cost</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">$0 - $30</div>
                  <p className="text-sm text-muted-foreground">
                    Affordable copays for all members
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Provider Type</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">Community</div>
                  <p className="text-sm text-muted-foreground">
                    Local providers who know your area
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Care Focus</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">Cultural</div>
                  <p className="text-sm text-muted-foreground">
                    Culturally competent mental health services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Covered */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Mental Health Services Available
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {amerigroupServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why Choose Amerigroup for Mental Health?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Focus Section */}
        <section className="py-20 px-4 bg-purple-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Community-Centered Mental Health Care
              </h2>
              <p className="text-xl text-muted-foreground">
                Amerigroup understands that effective mental health care considers your community, culture, and individual circumstances
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Cultural Competency</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Diverse network of providers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Multilingual therapy services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Community-specific programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Trauma-informed care approaches</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Accessible Care</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Conveniently located providers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Clock className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Transportation assistance programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Telehealth options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Amerigroup Mental Health Costs
            </h2>
            
            <Alert className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Costs vary by specific plan and provider. These are typical ranges for Amerigroup members. Always verify with your specific plan details.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {costRanges.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{item.cost}</div>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Prior Authorization & Visit Limits</h3>
            <div className="space-y-4 mb-12">
              {priorAuthInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{item.service}</h4>
                      <span className={`px-2 py-1 rounded text-sm ${
                        item.required === "Required" ? "bg-red-100 text-red-800" :
                        item.required === "Usually not required" ? "bg-green-100 text-green-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {item.required}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">How CHC Handles Your Benefits</h3>
            <Card className="mb-12">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                    <h4 className="font-semibold mb-2">We Check Your Benefits</h4>
                    <p className="text-sm text-muted-foreground">Our team verifies your Amerigroup coverage before your first session</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                    <h4 className="font-semibold mb-2">Clear Pricing</h4>
                    <p className="text-sm text-muted-foreground">You'll know your exact copay amount before scheduling</p>
                  </div>
                  <div className="text-center">
                    <CreditCard className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                    <h4 className="font-semibold mb-2">Simple Billing</h4>
                    <p className="text-sm text-muted-foreground">We bill Amerigroup directly - you only pay your copay</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6">Out-of-Network & Self-Pay Options</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Out-of-Network Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">If CHC is out-of-network with your Amerigroup plan:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Higher deductibles may apply</li>
                    <li>• You may pay 40-60% coinsurance</li>
                    <li>• We can provide receipts for reimbursement</li>
                    <li>• Consider in-network options first</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Self-Pay Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">If you choose to self-pay:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span>Income-based pricing as low as $75/session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <span>Individual therapy: $75-150/session</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <span>Couples therapy: $150-200/session</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Covered Conditions */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mental Health Conditions Covered by Amerigroup
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {conditionCoverage.map((condition, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Link to={condition.link} className="block">
                      <h3 className="font-semibold text-purple-600 mb-2 hover:underline">
                        {condition.condition}
                      </h3>
                      <p className="text-sm text-muted-foreground">{condition.description}</p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions - Amerigroup
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
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Access Your Amerigroup Benefits?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Connect with local, culturally competent mental health providers who understand your community and are committed to your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Find a Community Provider
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-purple-600">
                  Verify Your Coverage
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

export default AmerigroupInsurance;