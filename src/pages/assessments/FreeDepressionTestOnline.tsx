import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Brain, AlertCircle } from "lucide-react";
import DepressionAssessment from "@/components/assessments/DepressionAssessment";

const FreeDepressionTestOnline = () => {
  const [startAssessment, setStartAssessment] = useState(false);

  if (startAssessment) {
    return <DepressionAssessment />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Free Depression Test Online - PHQ-9 Screening",
    "description": "Take a free, confidential depression screening test. Professional PHQ-9 assessment used by therapists. Get instant results in 5 minutes.",
    "medicalAudience": "Patient"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free Depression Test Online | PHQ-9 Assessment | Get Results in 5 Minutes"
        description="Take a free, confidential depression test online. Professional PHQ-9 screening used by therapists. Get instant results and personalized treatment recommendations for Georgia residents."
        keywords="depression test, free depression test online, PHQ-9 assessment, depression screening, major depression test, depression symptoms test"
        canonicalUrl="https://chctherapy.com/free-depression-test-online"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Depression Test Online</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Take the PHQ-9 assessment used by mental health professionals. Get your results in 5 minutes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="font-medium">5 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Clinically Validated</span>
              </div>
            </div>

            <Button size="lg" onClick={() => setStartAssessment(true)} className="text-lg px-12 py-6">
              Start Free Depression Test
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What This Test Measures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Emotional Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Persistent sad, empty, or hopeless mood</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Loss of interest in activities you used to enjoy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Feelings of worthlessness or guilt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Difficulty concentrating or making decisions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Physical Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Changes in sleep patterns (too much or too little)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Appetite or weight changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Low energy and fatigue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Psychomotor changes (moving slowly or restlessness)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Take This Depression Test?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Gold Standard Assessment</h3>
                  <p className="text-sm text-muted-foreground">PHQ-9 is the most widely used depression screening tool by healthcare providers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Quick Results</h3>
                  <p className="text-sm text-muted-foreground">Only 9 questions. Takes 5 minutes to complete and get instant results</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Private & Secure</h3>
                  <p className="text-sm text-muted-foreground">Your responses are completely confidential. No email or registration required</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Important Notice</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      This is a screening tool, not a diagnosis. Only a licensed mental health professional can diagnose depression. If you're experiencing thoughts of self-harm or suicide, please seek immediate help.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href="tel:988" className="inline-block">
                        <Button variant="outline" size="sm">Call 988 Suicide & Crisis Lifeline</Button>
                      </a>
                      <Link to="/emergency-resources">
                        <Button variant="outline" size="sm">Emergency Resources</Button>
                      </Link>
                      <Link to="/therapist-matching">
                        <Button variant="outline" size="sm">Connect with Therapist</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Understand Your Depression?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Take the free PHQ-9 test now and get personalized recommendations for depression treatment in Georgia.
            </p>
            <Button variant="secondary" size="lg" onClick={() => setStartAssessment(true)} className="text-lg px-12 py-6">
              Start Free Test Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreeDepressionTestOnline;
