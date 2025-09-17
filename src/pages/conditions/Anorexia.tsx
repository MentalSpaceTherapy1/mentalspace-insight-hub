import { ArrowLeft, Clock, Users, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import anorexiaPersonImage from "@/assets/anorexia-person.jpg";

const Anorexia = () => {
  return (
    <>
      <SEOHead 
        title="Anorexia Nervosa Treatment | Eating Disorder Therapy"
        description="Get professional help for anorexia nervosa. Learn about symptoms, causes, and specialized eating disorder treatments. Find qualified therapists for recovery support."
        keywords="anorexia nervosa, eating disorder treatment, anorexia therapy, eating disorder recovery, body image therapy"
        canonicalUrl="/mental-health-library/anorexia"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/mental-health-library" className="hover:text-primary">Mental Health Library</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Anorexia Nervosa</span>
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
                Anorexia Nervosa
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Recovery from anorexia is possible with specialized care. Learn about this serious 
                eating disorder and find professional support for lasting healing and wellness.
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
                src={anorexiaPersonImage} 
                alt="Person receiving support for eating disorder recovery" 
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
                    Anorexia nervosa is a serious eating disorder characterized by restriction of food 
                    intake, leading to significantly low body weight, intense fear of gaining weight, 
                    and distorted body image. It has the highest mortality rate of any mental health 
                    disorder, making early intervention and specialized treatment crucial.
                  </p>
                  <p>
                    This complex condition affects not just eating behaviors but also thoughts, emotions, 
                    and physical health. Recovery requires comprehensive treatment addressing medical, 
                    nutritional, and psychological aspects of the disorder.
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
                      <h4 className="font-semibold text-gray-900 mb-3">Psychological Factors</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Perfectionism</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Low self-esteem</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Anxiety disorders</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Obsessive-compulsive traits</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Environmental Factors</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Cultural pressure for thinness</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Dieting and weight loss attempts</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Trauma or stressful life events</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Participation in weight-focused activities</span>
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
                            <span className="text-sm">Significant weight loss</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Fatigue and weakness</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Hair loss or thinning</span>
                          </li>
                        </ul>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Irregular menstruation</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Cold intolerance</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm">Dizziness or fainting</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Behavioral & Emotional Signs</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Severe food restriction</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Intense fear of weight gain</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Distorted body image</span>
                          </li>
                        </ul>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Social withdrawal</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Obsession with food and calories</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm">Excessive exercise</span>
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
                    Comprehensive, specialized treatment for eating disorder recovery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Medical Monitoring</h4>
                      <p className="text-gray-600 text-sm">
                        Regular medical care to address physical complications and monitor 
                        vital signs, heart function, and nutritional status.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Nutritional Rehabilitation</h4>
                      <p className="text-gray-600 text-sm">
                        Working with registered dietitians to restore healthy eating patterns 
                        and normalize relationship with food.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Psychotherapy</h4>
                      <p className="text-gray-600 text-sm">
                        Cognitive-behavioral therapy (CBT), family-based treatment (FBT), 
                        and dialectical behavior therapy (DBT) to address underlying issues.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Family Support</h4>
                      <p className="text-gray-600 text-sm">
                        Family therapy and education to create a supportive environment 
                        for recovery and prevent relapse.
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
                    <Link to="/therapist-matching">Find a Specialist</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/emergency-resources">Crisis Support</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Conditions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/mental-health-library/anxiety" className="block text-sm text-primary hover:underline">
                    Anxiety Disorders
                  </Link>
                  <Link to="/mental-health-library/depression" className="block text-sm text-primary hover:underline">
                    Depression
                  </Link>
                  <Link to="/mental-health-library/obsessive-compulsive-disorder" className="block text-sm text-primary hover:underline">
                    OCD
                  </Link>
                  <Link to="/mental-health-library/body-dysmorphic-disorder" className="block text-sm text-primary hover:underline">
                    Body Dysmorphic Disorder
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
                      <div className="font-medium">Demographics</div>
                      <div className="text-sm text-gray-600">90-95% female, typically teens/young adults</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Recovery Rate</div>
                      <div className="text-sm text-gray-600">60-70% with proper treatment</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Treatment Duration</div>
                      <div className="text-sm text-gray-600">Often 1-2+ years for full recovery</div>
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
              Recovery is Possible with Specialized Care
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Anorexia nervosa requires specialized treatment from professionals experienced in eating 
              disorder recovery. Take the first step toward healing and reclaiming your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/therapist-matching">Find an Eating Disorder Specialist</Link>
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

export default Anorexia;