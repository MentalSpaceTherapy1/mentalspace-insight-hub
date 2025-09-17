import { ArrowLeft, Clock, Users, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import substancePersonImage from "@/assets/substance-person.jpg";

const SubstanceUseDisorder = () => {
  return (
    <>
      <SEOHead 
        title="Substance Use Disorder Treatment | Addiction Recovery Therapy"
        description="Get professional help for substance use disorder. Learn about addiction recovery, evidence-based treatments, and find specialized therapists for lasting recovery."
        keywords="substance use disorder, addiction treatment, recovery therapy, drug addiction, alcohol addiction, addiction counseling"
        canonicalUrl="/mental-health-library/substance-use-disorder"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/mental-health-library" className="hover:text-primary">Mental Health Library</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Substance Use Disorder</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="flex items-center mb-8">
            <Link 
              to="/mental-health-library" 
              className="flex items-center text-primary hover:text-primary/80 transition-colors mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Library
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Substance Use Disorder
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Recovery is possible. Learn about substance use disorders, addiction treatment options, 
                and find specialized support for lasting recovery and wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/therapist-matching">Find a Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/get-started">Request Appointment</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={substancePersonImage} 
                alt="Person in recovery receiving professional support" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-primary" />
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p>
                    Substance Use Disorder (SUD) is a medical condition characterized by the compulsive 
                    use of alcohol or drugs despite harmful consequences. It affects brain circuits 
                    involved in reward, stress, and self-control, making it difficult to stop using 
                    substances even when they cause problems.
                  </p>
                  <p>
                    SUD is a treatable condition that affects millions of people. It can involve alcohol, 
                    prescription medications, or illegal drugs. The severity ranges from mild to severe, 
                    and recovery is possible with proper treatment and support.
                  </p>
                </CardContent>
              </Card>

              {/* Risk Factors */}
              <Card>
                <CardHeader>
                  <CardTitle>Risk Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Biological Factors</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Genetic predisposition</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Mental health disorders</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Early substance use</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Environmental Factors</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Trauma or abuse</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Peer pressure</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Chronic stress</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Signs & Symptoms */}
              <Card>
                <CardHeader>
                  <CardTitle>Signs & Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Physical Signs</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Changes in appetite or sleep</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Bloodshot eyes or dilated pupils</span>
                          </li>
                        </ul>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Tremors or coordination problems</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Poor hygiene or appearance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Behavioral Changes</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Social isolation or new friend groups</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Neglecting responsibilities</span>
                          </li>
                        </ul>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Risky or impulsive behavior</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Financial problems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Treatment & Recovery</CardTitle>
                  <CardDescription>
                    Comprehensive treatment approaches for lasting recovery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Detoxification</h4>
                      <p className="text-gray-600 text-sm">
                        Medically supervised withdrawal to safely manage physical dependence 
                        and withdrawal symptoms.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Behavioral Therapy</h4>
                      <p className="text-gray-600 text-sm">
                        Cognitive-behavioral therapy (CBT), motivational interviewing, and 
                        contingency management to change harmful patterns.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Medication-Assisted Treatment</h4>
                      <p className="text-gray-600 text-sm">
                        FDA-approved medications to reduce cravings and support recovery 
                        for certain substance use disorders.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Support Groups</h4>
                      <p className="text-gray-600 text-sm">
                        12-step programs, SMART Recovery, and peer support groups for 
                        ongoing community and accountability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Get Help Now */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Get Help Now</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" asChild>
                    <Link to="/therapist-matching">Find a Therapist</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/emergency-resources">Crisis Resources</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Conditions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/mental-health-library/depression" className="block text-sm text-primary hover:underline">
                    Depression
                  </Link>
                  <Link to="/mental-health-library/anxiety" className="block text-sm text-primary hover:underline">
                    Anxiety Disorders
                  </Link>
                  <Link to="/mental-health-library/ptsd" className="block text-sm text-primary hover:underline">
                    PTSD
                  </Link>
                  <Link to="/mental-health-library/bipolar-disorder" className="block text-sm text-primary hover:underline">
                    Bipolar Disorder
                  </Link>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Prevalence</div>
                      <div className="text-sm text-gray-600">21 million Americans affected</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Recovery</div>
                      <div className="text-sm text-gray-600">Treatment works - recovery is possible</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Treatment Duration</div>
                      <div className="text-sm text-gray-600">Varies by individual needs</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Recovery Starts with Taking the First Step
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Substance use disorders are treatable medical conditions. Our specialized addiction 
              counselors provide compassionate, evidence-based care to support your recovery journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/therapist-matching">Find an Addiction Specialist</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/mental-health-library">Back to Library</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SubstanceUseDisorder;