import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Shield, DollarSign, Heart, Phone, Globe, AlertTriangle, CreditCard, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import humanaImage from "@/assets/insurance-humana.jpg";

const HumanaInsurance = () => {
  const costRanges = [
    { service: "Individual Therapy Session", cost: "$0-$30", note: "Varies by specific plan and provider" },
    { service: "Couples/Family Therapy", cost: "$0-$30", note: "Wellness-focused pricing" },
    { service: "Group Therapy", cost: "$0-$15", note: "Community support with wellness incentives" },
    { service: "Psychiatric Consultation", cost: "$0-$40", note: "Integrated with primary care" }
  ];

  const faqs = [
    {
      question: "Do I need a referral for mental health services with Humana?",
      answer: "Most Humana plans don't require a referral for mental health services. You can access in-network providers directly through their integrated care model."
    },
    {
      question: "How does Humana's integrated care approach work?",
      answer: "Humana coordinates your mental health care with your primary care provider for comprehensive wellness, often resulting in better outcomes and lower costs."
    },
    {
      question: "Does Humana offer wellness incentives for mental health?",
      answer: "Yes, many Humana plans offer wellness rewards and incentives for participating in mental health programs and achieving health goals."
    }
  ];
  const benefits = [
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Humana's approach to mental health focuses on your overall wellbeing, connecting mental health to physical health."
    },
    {
      icon: DollarSign,
      title: "Affordable Care",
      description: "Humana members typically pay $0-$30 per session, making mental health care accessible to everyone."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Access Humana's mental health resources and crisis support lines available around the clock."
    },
    {
      icon: Globe,
      title: "Telehealth Options",
      description: "Humana covers both in-person and virtual therapy sessions for maximum convenience and accessibility."
    },
    {
      icon: Shield,
      title: "Integrated Care",
      description: "Your mental health care is coordinated with your primary care for comprehensive health management."
    },
    {
      icon: CheckCircle,
      title: "Preventive Focus",
      description: "Humana emphasizes preventive mental health care to help you maintain wellness before issues become severe."
    }
  ];

  const humanaServices = [
    "Individual therapy and counseling",
    "Behavioral health assessments", 
    "Depression and anxiety treatment",
    "Substance abuse counseling",
    "Couples and family therapy",
    "Group therapy sessions",
    "Psychiatric medication management",
    "Crisis intervention services",
    "Telehealth and virtual therapy",
    "Wellness coaching and support",
    "Chronic condition mental health support",
    "Medicare Advantage mental health benefits"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Humana Insurance Mental Health Coverage | Colorado Healing Center"
        description="Humana members enjoy comprehensive mental health coverage with copays as low as $0. Learn about your Humana therapy benefits and holistic wellness approach."
        keywords="Humana insurance, mental health coverage, Humana therapy benefits, telehealth, holistic wellness"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-800">
                  Humana Mental Health Coverage
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-green-700">
                  Experience Humana's holistic approach to mental wellness. Our integrated care model connects your mental health to your overall wellbeing for better outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/therapist-matching">
                    <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700">
                      Start Your Wellness Journey
                    </Button>
                  </Link>
                  <Link to="/mental-health-tests">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-green-600 text-green-600">
                      Wellness Assessment
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={humanaImage}
                  alt="Humana insurance mental health and wellness coverage"
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Humana Advantage */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Humana Difference in Mental Health
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Humana's integrated approach to healthcare means your mental health care is connected to your overall wellness plan
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Copay</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">$0 - $30</div>
                  <p className="text-sm text-muted-foreground">
                    Average per session with wellness incentives
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Access</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">
                    Mental health support and crisis resources
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Care Model</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">Integrated</div>
                  <p className="text-sm text-muted-foreground">
                    Mental health connected to overall wellness
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
                Mental Health Services Covered by Humana
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {humanaServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg border">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
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
              Humana Mental Health Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-green-600" />
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wellness-Focused Section */}
        <section className="py-20 px-4 bg-green-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Humana's Wellness-First Approach
              </h2>
              <p className="text-xl text-muted-foreground">
                At Humana, mental health is part of your complete wellness journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Integrated Care Benefits</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mental health connected to physical health</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Coordinated care with your primary doctor</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Wellness incentives and rewards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Heart className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Preventive mental health focus</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Additional Resources</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Phone className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 nurse helpline for mental health</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Globe className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>MyHumana app for wellness tracking</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Case management for complex needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Medicare Advantage mental health benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown and Comprehensive Sections */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Humana Mental Health Costs
            </h2>
            
            <Alert className="mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Important:</strong> Costs vary by specific plan. These are typical ranges for Humana members. Always verify with your plan details.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {costRanges.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600 mb-2">{item.cost}</div>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6">Self-Pay Options</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Self-Pay Rates</CardTitle>
                </CardHeader>
                <CardContent>
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
              <Card>
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-sm">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Your Wellness Journey with Humana
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Experience the benefits of integrated mental health care. Your mental wellness is connected to your overall health, and we're here to support both.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/therapist-matching">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Begin Your Journey
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
                  Check Your Benefits
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

export default HumanaInsurance;