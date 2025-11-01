import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Brain, AlertCircle } from "lucide-react";
import AnxietyAssessment from "@/components/assessments/AnxietyAssessment";

const FreeAnxietyTestOnline = () => {
  const [startAssessment, setStartAssessment] = useState(false);

  if (startAssessment) {
    return <AnxietyAssessment />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Free Anxiety Test Online - GAD-7 Assessment",
    "description": "Take a free, confidential anxiety screening test. Professional GAD-7 assessment used by therapists. Get instant results in 2 minutes.",
    "medicalAudience": "Patient"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free Anxiety Test Online | GAD-7 Assessment | Get Results in 2 Minutes"
        description="Take a free, confidential anxiety test online. Professional GAD-7 assessment used by therapists. Get instant results and personalized treatment recommendations for Georgia residents."
        keywords="anxiety test, free anxiety test online, GAD-7 assessment, anxiety screening, generalized anxiety disorder test, anxiety symptoms test"
        canonicalUrl="https://chctherapy.com/free-anxiety-test-online"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Anxiety Test Online</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Take the GAD-7 assessment used by mental health professionals. Get your results in 2 minutes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="font-medium">2 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-green-600" />
                <span className="font-medium">Clinically Validated</span>
              </div>
            </div>

            <Button size="lg" onClick={() => setStartAssessment(true)} className="text-lg px-12 py-6">
              Start Free Anxiety Test
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What This Test Measures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Generalized Anxiety Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Excessive worry about everyday things</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Difficulty controlling worry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Restlessness and feeling on edge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Trouble relaxing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Physical Anxiety Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Muscle tension and aches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Fatigue and low energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Difficulty concentrating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Sleep problems and irritability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Take This Anxiety Test?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Brain className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Clinically Validated</h3>
                  <p className="text-sm text-muted-foreground">GAD-7 is the gold standard anxiety screening used by therapists worldwide</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Quick & Easy</h3>
                  <p className="text-sm text-muted-foreground">Just 7 questions. Takes only 2 minutes to complete</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Completely Private</h3>
                  <p className="text-sm text-muted-foreground">Your responses are confidential. No personal information required</p>
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
                      This is a screening tool, not a diagnosis. Only a licensed mental health professional can diagnose anxiety disorders. If you're experiencing severe anxiety symptoms or thoughts of self-harm, please seek immediate help.
                    </p>
                    <div className="flex flex-wrap gap-4">
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

        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Understand Your Anxiety?</h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Take the free GAD-7 test now and get personalized recommendations for anxiety treatment in Georgia.
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

export default FreeAnxietyTestOnline;
