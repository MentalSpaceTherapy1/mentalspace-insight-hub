import { ArrowLeft, Clock, Users, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import adjustmentPersonImage from "@/assets/adjustment-person.jpg";

const AdjustmentDisorder = () => {
  return (
    <>
      <SEOHead 
        title="Adjustment Disorder Treatment | Expert Therapy Services"
        description="Get professional help for adjustment disorder. Learn about symptoms, causes, and evidence-based treatments. Find specialized therapists to help you cope with life changes."
        keywords="adjustment disorder, life changes, stress therapy, coping skills, mental health treatment"
        canonicalUrl="https://chctherapy.com/mental-health-library/adjustment-disorder"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/mental-health-library" className="hover:text-primary">Mental Health Library</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Adjustment Disorder</span>
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
                Adjustment Disorder
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                When life changes become overwhelming, adjustment disorder can develop. Learn about symptoms, 
                causes, and effective treatments to help you adapt and thrive.
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
                src={adjustmentPersonImage} 
                alt="Person receiving support during life transition" 
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
                    Adjustment disorder is a stress-related mental health condition that occurs when someone 
                    has difficulty coping with a significant life change or stressor. It's characterized by 
                    emotional or behavioral symptoms that develop within three months of the stressor and 
                    are more severe than would normally be expected.
                  </p>
                  <p>
                    Unlike other mental health conditions, adjustment disorder is directly linked to an 
                    identifiable stressor such as job loss, divorce, moving, illness, or major life transitions. 
                    The symptoms significantly impair daily functioning but typically resolve once the person 
                    adapts to the change or the stressor is removed.
                  </p>
                </CardContent>
              </Card>

              {/* Causes */}
              <Card>
                <CardHeader>
                  <CardTitle>Common Triggers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>Major life changes (divorce, marriage, retirement)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>Work-related stress (job loss, promotion, workplace changes)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>Health problems or medical diagnosis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>Financial difficulties</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>Relationship problems or loss</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>School or academic pressures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Symptoms */}
              <Card>
                <CardHeader>
                  <CardTitle>Signs & Symptoms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Emotional Symptoms</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm">Persistent sadness or depression</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm">Anxiety and worry</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm">Feeling overwhelmed</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm">Irritability or anger</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Behavioral Changes</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm">Social withdrawal</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm">Changes in sleep patterns</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm">Difficulty concentrating</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm">Reckless behavior</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatments */}
              <Card>
                <CardHeader>
                  <CardTitle>Treatment Options</CardTitle>
                  <CardDescription>
                    Effective treatments help develop coping skills and emotional resilience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Psychotherapy</h4>
                      <p className="text-gray-600 text-sm">
                        Cognitive-behavioral therapy (CBT) and supportive counseling help develop 
                        coping strategies and process emotions related to the stressor.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Stress Management</h4>
                      <p className="text-gray-600 text-sm">
                        Learning relaxation techniques, mindfulness, and stress reduction strategies 
                        to better manage overwhelming situations.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Support Groups</h4>
                      <p className="text-gray-600 text-sm">
                        Connecting with others facing similar challenges can provide emotional 
                        support and practical coping strategies.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Medication (if needed)</h4>
                      <p className="text-gray-600 text-sm">
                        Short-term medication may be prescribed for severe anxiety or depression 
                        symptoms while developing coping skills.
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
                    <Link to="/emergency-resources">Emergency Resources</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-gray-600">Usually resolves within 6 months</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Prevalence</div>
                      <div className="text-sm text-gray-600">Affects 2-8% of population</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Treatment Success</div>
                      <div className="text-sm text-gray-600">Excellent with proper support</div>
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
              Ready to Navigate Life Changes with Professional Support?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Don't face adjustment challenges alone. Our specialized therapists can help you develop 
              the coping skills and resilience needed to thrive through life transitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/therapist-matching">Find Your Therapist</Link>
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

export default AdjustmentDisorder;