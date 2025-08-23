import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageCircle, Activity, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import substancePerson from "@/assets/substance-person.jpg";

const SubstanceUseDisorder = () => {
  return (
    <>
      <SEOHead 
        title="Substance Use Disorder - Treatment & Recovery | MentalSpace"
        description="Learn about substance use disorder, addiction treatment options, and recovery support. Professional help for substance abuse and dependency issues."
        canonicalUrl="https://mentalspace.com/mental-health-library/substance-use-disorder"
      />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-lime-50 dark:from-amber-950/30 dark:via-yellow-950/30 dark:to-lime-950/30">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Link 
                to="/mental-health-library" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Library
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-sm font-medium mb-6">
                  <Activity className="w-4 h-4" />
                  Addiction Disorders
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Substance Use
                  <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-lime-600 bg-clip-text text-transparent"> Disorder</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A disease that affects a person's brain and behavior, leading to inability to control drug or alcohol use. Recovery is possible with proper treatment and support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/get-started">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700">
                      Find a Therapist
                    </Button>
                  </Link>
                  <Link to="/emergency-resources">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency Help
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-500 to-lime-500 p-8">
                  <img 
                    src={substancePerson} 
                    alt="Person in recovery from substance use disorder"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      Substance Use Disorder (SUD) is a medical condition characterized by the recurrent use of alcohol or drugs that causes significant impairment in health, social function, and control over substance use. It's a complex brain disease that affects the reward, motivation, and memory systems.
                    </p>
                    <p>
                      SUD can range from mild to severe and can involve various substances including alcohol, prescription medications, illegal drugs, or other substances. The condition often co-occurs with other mental health disorders.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Signs & Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Behavioral Signs</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Using more or for longer periods than intended</li>
                          <li>• Unsuccessful attempts to cut down</li>
                          <li>• Spending significant time obtaining substances</li>
                          <li>• Neglecting responsibilities</li>
                          <li>• Continued use despite problems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Physical Signs</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Tolerance (needing more to feel effects)</li>
                          <li>• Withdrawal symptoms when not using</li>
                          <li>• Changes in sleep patterns</li>
                          <li>• Weight loss or gain</li>
                          <li>• Health problems related to use</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Treatment & Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Evidence-Based Therapies</h4>
                        <p className="text-muted-foreground">
                          Cognitive-behavioral therapy, motivational interviewing, and contingency management help develop coping skills and maintain sobriety.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Medication-Assisted Treatment</h4>
                        <p className="text-muted-foreground">
                          FDA-approved medications can help manage withdrawal symptoms, reduce cravings, and support long-term recovery when appropriate.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Support Groups & Recovery Programs</h4>
                        <p className="text-muted-foreground">
                          Peer support through 12-step programs, SMART Recovery, or other support groups provides ongoing motivation and accountability.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Get Help Now</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/get-started" className="block">
                      <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Recovery Support
                      </Button>
                    </Link>
                    <Link to="/mental-health-tests" className="block">
                      <Button variant="outline" className="w-full">
                        Take Assessment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 dark:border-amber-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Recovery Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 mt-0.5 text-amber-600" />
                      <div>
                        <p className="font-medium text-foreground">SAMHSA Helpline</p>
                        <p className="text-muted-foreground">1-800-662-4357</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 text-amber-600" />
                      <span className="text-muted-foreground">Recovery is possible with proper support and treatment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 mt-0.5 text-amber-600" />
                      <span className="text-muted-foreground">Evidence-based treatments are highly effective</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-600 via-yellow-600 to-lime-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Recovery Starts with the First Step
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Our addiction specialists provide compassionate, evidence-based treatment to support your journey to recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-gray-100">
                  Start Your Recovery
                </Button>
              </Link>
              <Link to="/mental-health-library">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Back to Library
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SubstanceUseDisorder;