import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Brain, AlertCircle } from "lucide-react";
import ADHDAssessment from "@/components/assessments/ADHDAssessment";

const FreeADHDTestOnline = () => {
  const [startAssessment, setStartAssessment] = useState(false);

  if (startAssessment) {
    return <ADHDAssessment />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Free ADHD Test Online - Adult ADHD Screening",
    "description": "Take a free, confidential ADHD screening test. Professional assessment for adult ADHD symptoms. Get instant results in 3 minutes.",
    "medicalAudience": "Patient"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free ADHD Test Online | Adult ADHD Screening | Get Results in 3 Minutes"
        description="Take a free, confidential ADHD test online. Professional screening for adult ADHD symptoms. Get instant results and personalized treatment recommendations for Georgia residents."
        keywords="ADHD test, free ADHD test online, adult ADHD screening, attention deficit test, ADHD symptoms test, ADHD assessment"
        canonicalUrl="https://chctherapy.com/free-adhd-test-online"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free ADHD Test Online</h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Take a professional ADHD screening assessment for adults. Get your results in 3 minutes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-cyan-600" />
                <span className="font-medium">3 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-cyan-600" />
                <span className="font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-cyan-600" />
                <span className="font-medium">Clinically Validated</span>
              </div>
            </div>

            <Button size="lg" onClick={() => setStartAssessment(true)} className="text-lg px-12 py-6">
              Start Free ADHD Test
            </Button>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">What This Test Measures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Inattention Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mt-1 flex-shrink-0" />
                      <span>Difficulty sustaining attention on tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mt-1 flex-shrink-0" />
                      <span>Trouble organizing tasks and activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mt-1 flex-shrink-0" />
                      <span>Easily distracted by external stimuli</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mt-1 flex-shrink-0" />
                      <span>Forgetfulness in daily activities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hyperactivity & Impulsivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mt-1 flex-shrink-0" />
                      <span>Restlessness and difficulty staying seated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mt-1 flex-shrink-0" />
                      <span>Feeling constantly "on the go"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mt-1 flex-shrink-0" />
                      <span>Difficulty waiting your turn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-600 mt-1 flex-shrink-0" />
                      <span>Interrupting or intruding on others</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Take This ADHD Test?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Brain className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Validated for Adults</h3>
                  <p className="text-sm text-muted-foreground">Based on DSM-5 criteria used by ADHD specialists and psychiatrists</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Quick Assessment</h3>
                  <p className="text-sm text-muted-foreground">Takes only 3 minutes. Get immediate results and actionable insights</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Completely Private</h3>
                  <p className="text-sm text-muted-foreground">Your responses are confidential. No registration or email required</p>
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
                      This is a screening tool, not a diagnosis. Only a licensed mental health professional or psychiatrist can diagnose ADHD. A comprehensive evaluation includes clinical interview, history, and sometimes neuropsychological testing.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/adhd-therapy-georgia">
                        <Button variant="outline" size="sm">ADHD Therapy in Georgia</Button>
                      </Link>
                      <Link to="/therapist-matching">
                        <Button variant="outline" size="sm">Connect with ADHD Specialist</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Screen for ADHD?</h2>
            <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
              Take the free ADHD test now and get personalized recommendations for ADHD evaluation and treatment in Georgia.
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

export default FreeADHDTestOnline;
