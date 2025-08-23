import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageCircle, Heart, Users, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import adjustmentPerson from "@/assets/adjustment-person.jpg";

const AdjustmentDisorder = () => {
  return (
    <>
      <SEOHead 
        title="Adjustment Disorder - Symptoms, Causes & Treatment | MentalSpace"
        description="Learn about adjustment disorder, its symptoms, causes, and effective treatment options. Professional help for stress-related mental health challenges."
        canonicalUrl="https://mentalspace.com/mental-health-library/adjustment-disorder"
      />
      <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 dark:from-lime-950/30 dark:via-green-950/30 dark:to-emerald-950/30">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-sm font-medium mb-6">
                  <Heart className="w-4 h-4" />
                  Stress-Related Disorders
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Adjustment
                  <span className="bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent"> Disorder</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Stress-related conditions caused by significant changes or stressors in life. Understanding and treating adjustment disorders effectively.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/get-started">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700">
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
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-lime-500 via-green-500 to-emerald-500 p-8">
                  <img 
                    src={adjustmentPerson} 
                    alt="Person dealing with adjustment disorder"
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
                <Card className="border-lime-200 dark:border-lime-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      Adjustment disorders are stress-related conditions that occur when someone has difficulty coping with a specific stressor or life change. These disorders involve emotional or behavioral symptoms that develop within three months of the stressful event and are more severe than would normally be expected.
                    </p>
                    <p>
                      Common triggers include divorce, job loss, moving to a new place, illness, financial problems, or relationship changes. The symptoms cause significant distress and impair functioning in important areas of life.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-lime-200 dark:border-lime-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Symptoms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Emotional Symptoms</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Persistent sadness or hopelessness</li>
                          <li>• Excessive worry or anxiety</li>
                          <li>• Feeling overwhelmed</li>
                          <li>• Mood swings</li>
                          <li>• Loss of enjoyment in activities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Behavioral Symptoms</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Changes in sleep patterns</li>
                          <li>• Social withdrawal</li>
                          <li>• Decreased performance at work/school</li>
                          <li>• Reckless or impulsive behavior</li>
                          <li>• Difficulty concentrating</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-lime-200 dark:border-lime-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Treatment Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Psychotherapy</h4>
                        <p className="text-muted-foreground">
                          Cognitive-behavioral therapy (CBT) and supportive therapy help develop coping strategies, process emotions, and adapt to life changes effectively.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Stress Management</h4>
                        <p className="text-muted-foreground">
                          Learning relaxation techniques, mindfulness practices, and healthy coping mechanisms to manage stress and build resilience.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Support Systems</h4>
                        <p className="text-muted-foreground">
                          Building strong support networks through family, friends, support groups, or community resources to provide emotional support during difficult transitions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-lime-200 dark:border-lime-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Get Help Now</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/get-started" className="block">
                      <Button className="w-full bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Therapy Today
                      </Button>
                    </Link>
                    <Link to="/mental-health-tests" className="block">
                      <Button variant="outline" className="w-full">
                        Take Assessment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-lime-200 dark:border-lime-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 text-lime-600" />
                      <span className="text-muted-foreground">Affects people of all ages during life transitions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Activity className="w-4 h-4 mt-0.5 text-lime-600" />
                      <span className="text-muted-foreground">Usually resolves within 6 months with proper support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 mt-0.5 text-lime-600" />
                      <span className="text-muted-foreground">Highly treatable with appropriate interventions</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Support for Life Changes?
            </h2>
            <p className="text-xl text-lime-100 mb-8">
              Our specialized therapists understand adjustment challenges and can help you develop effective coping strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="bg-white text-lime-700 hover:bg-gray-100">
                  Find Your Therapist
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

export default AdjustmentDisorder;