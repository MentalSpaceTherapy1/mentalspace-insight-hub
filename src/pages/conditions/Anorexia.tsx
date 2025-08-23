import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageCircle, Heart, Users, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import anorexiaPerson from "@/assets/anorexia-person.jpg";

const Anorexia = () => {
  return (
    <>
      <SEOHead 
        title="Anorexia Nervosa - Symptoms, Treatment & Recovery | MentalSpace"
        description="Learn about anorexia nervosa, eating disorder symptoms, and effective treatment options. Professional help for eating disorder recovery and support."
        canonicalUrl="https://mentalspace.com/mental-health-library/anorexia"
      />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 dark:from-rose-950/30 dark:via-pink-950/30 dark:to-fuchsia-950/30">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-sm font-medium mb-6">
                  <Heart className="w-4 h-4" />
                  Eating Disorders
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Anorexia
                  <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent"> Nervosa</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  An eating disorder characterized by abnormally low body weight and intense fear of gaining weight. Recovery is possible with specialized treatment and support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/get-started">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700">
                      Find a Specialist
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
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500 p-8">
                  <img 
                    src={anorexiaPerson} 
                    alt="Person in recovery from anorexia nervosa"
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
                <Card className="border-rose-200 dark:border-rose-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      Anorexia nervosa is a serious eating disorder characterized by restriction of food intake leading to significantly low body weight, intense fear of gaining weight, and distorted body image. It has the highest mortality rate of any mental health disorder.
                    </p>
                    <p>
                      The disorder typically begins during adolescence or young adulthood and affects people of all genders, though it's more commonly diagnosed in females. Early intervention and comprehensive treatment are crucial for recovery.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-rose-200 dark:border-rose-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Warning Signs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Physical Signs</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Significant weight loss</li>
                          <li>• Fatigue and weakness</li>
                          <li>• Dizziness or fainting</li>
                          <li>• Thinning hair or hair loss</li>
                          <li>• Cold intolerance</li>
                          <li>• Irregular or absent periods</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Behavioral Signs</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Severe food restriction</li>
                          <li>• Obsessive calorie counting</li>
                          <li>• Excessive exercise</li>
                          <li>• Social withdrawal, especially from meals</li>
                          <li>• Preoccupation with body size/shape</li>
                          <li>• Denial of hunger or low weight</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-rose-200 dark:border-rose-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Treatment & Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Medical Stabilization</h4>
                        <p className="text-muted-foreground">
                          Initial treatment focuses on medical stabilization, nutritional rehabilitation, and restoring healthy weight under medical supervision.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Specialized Therapy</h4>
                        <p className="text-muted-foreground">
                          Family-based treatment (FBT), cognitive-behavioral therapy (CBT-E), and dialectical behavior therapy help address underlying thoughts and behaviors.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Multidisciplinary Care</h4>
                        <p className="text-muted-foreground">
                          Recovery involves a team approach including physicians, therapists, registered dietitians, and psychiatrists working together.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-rose-200 dark:border-rose-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Get Help Now</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/get-started" className="block">
                      <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Find Eating Disorder Specialist
                      </Button>
                    </Link>
                    <Link to="/mental-health-tests" className="block">
                      <Button variant="outline" className="w-full">
                        Take Assessment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-rose-200 dark:border-rose-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Crisis Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 mt-0.5 text-rose-600" />
                      <div>
                        <p className="font-medium text-foreground">NEDA Helpline</p>
                        <p className="text-muted-foreground">1-800-931-2237</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 text-rose-600" />
                      <span className="text-muted-foreground">Recovery is possible with proper treatment and support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 mt-0.5 text-rose-600" />
                      <span className="text-muted-foreground">Early intervention improves recovery outcomes</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-rose-200 dark:border-rose-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Related Conditions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link to="/mental-health-library/body-dysmorphic-disorder" className="block text-sm text-muted-foreground hover:text-rose-600 transition-colors">
                      Body Dysmorphic Disorder
                    </Link>
                    <Link to="/mental-health-library/anxiety" className="block text-sm text-muted-foreground hover:text-rose-600 transition-colors">
                      Anxiety Disorders
                    </Link>
                    <Link to="/mental-health-library/depression" className="block text-sm text-muted-foreground hover:text-rose-600 transition-colors">
                      Depression
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-600 via-pink-600 to-fuchsia-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Recovery is Possible with Specialized Care
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Our eating disorder specialists provide evidence-based treatment in a compassionate, supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="bg-white text-rose-700 hover:bg-gray-100">
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

export default Anorexia;