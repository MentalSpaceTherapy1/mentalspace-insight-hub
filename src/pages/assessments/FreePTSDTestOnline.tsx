import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Brain, AlertCircle } from "lucide-react";
import PTSDAssessment from "@/components/assessments/PTSDAssessment";

const FreePTSDTestOnline = () => {
  const [startAssessment, setStartAssessment] = useState(false);

  if (startAssessment) {
    return <PTSDAssessment />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Free PTSD Test Online - Trauma Screening",
    "description": "Take a free, confidential PTSD screening test. Professional trauma assessment used by therapists. Get instant results in 3 minutes.",
    "medicalAudience": "Patient"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free PTSD Test Online | Trauma Screening | Get Results in 3 Minutes"
        description="Take a free, confidential PTSD test online. Professional trauma screening used by therapists. Get instant results and personalized treatment recommendations for Georgia residents."
        keywords="PTSD test, free PTSD test online, trauma screening, post traumatic stress disorder test, PTSD symptoms test, trauma assessment"
        canonicalUrl="https://chctherapy.com/free-ptsd-test-online"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free PTSD Test Online</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Take a professional trauma screening assessment. Get your results in 3 minutes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-rose-600" />
                <span className="font-medium">3 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-rose-600" />
                <span className="font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-rose-600" />
                <span className="font-medium">Clinically Validated</span>
              </div>
            </div>

            <Button size="lg" onClick={() => setStartAssessment(true)} className="text-lg px-12 py-6">
              Start Free PTSD Test
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What This Test Measures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Re-experiencing Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600 mt-1 flex-shrink-0" />
                      <span>Intrusive memories or flashbacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600 mt-1 flex-shrink-0" />
                      <span>Distressing dreams or nightmares</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600 mt-1 flex-shrink-0" />
                      <span>Emotional distress from reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600 mt-1 flex-shrink-0" />
                      <span>Physical reactions to trauma cues</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Avoidance & Negative Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600 mt-1 flex-shrink-0" />
                      <span>Avoiding trauma-related thoughts or reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600 mt-1 flex-shrink-0" />
                      <span>Emotional numbness or detachment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600 mt-1 flex-shrink-0" />
                      <span>Hypervigilance and feeling on guard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-600 mt-1 flex-shrink-0" />
                      <span>Difficulty sleeping or concentrating</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Take This PTSD Test?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Brain className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Evidence-Based Screening</h3>
                  <p className="text-sm text-muted-foreground">Used by trauma specialists and PTSD treatment programs nationwide</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Fast & Simple</h3>
                  <p className="text-sm text-muted-foreground">Takes only 3 minutes. Get instant results and next steps</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Safe & Anonymous</h3>
                  <p className="text-sm text-muted-foreground">Your responses are private. No personal information stored</p>
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
                      This is a screening tool, not a diagnosis. Only a licensed trauma specialist can diagnose PTSD. If you're experiencing a crisis or thoughts of self-harm, please seek immediate help.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a href="tel:988" className="inline-block">
                        <Button variant="outline" size="sm">Call 988 Crisis Lifeline</Button>
                      </a>
                      <Link to="/emergency-resources">
                        <Button variant="outline" size="sm">Emergency Resources</Button>
                      </Link>
                      <Link to="/ptsd-therapy-georgia">
                        <Button variant="outline" size="sm">PTSD Therapy in Georgia</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-rose-600 to-pink-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Screen for PTSD?</h2>
            <p className="text-xl mb-8 text-rose-100 max-w-2xl mx-auto">
              Take the free trauma screening now and get personalized recommendations for PTSD treatment in Georgia.
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

export default FreePTSDTestOnline;
