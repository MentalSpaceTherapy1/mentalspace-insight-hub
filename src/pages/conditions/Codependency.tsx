import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageCircle, Users, Heart, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import codependencyPerson from "@/assets/codependency-person.jpg";

const Codependency = () => {
  return (
    <>
      <SEOHead 
        title="Co-dependency - Symptoms, Treatment & Healthy Relationships | MentalSpace"
        description="Learn about co-dependency, unhealthy relationship patterns, and how to build healthy, balanced relationships. Professional guidance for codependent behavior."
        canonicalUrl="https://mentalspace.com/mental-health-library/co-dependency"
      />
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 dark:from-cyan-950/30 dark:via-sky-950/30 dark:to-blue-950/30">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  Relationship Disorders
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Co-dependency
                  <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent"> Patterns</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  A learned behavior that affects an individual's ability to have healthy, mutually satisfying relationships. Learn to build balanced, fulfilling connections.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/get-started">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700">
                      Find a Therapist
                    </Button>
                  </Link>
                  <Link to="/couples-therapy">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      <Heart className="w-4 h-4 mr-2" />
                      Couples Support
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 p-8">
                  <img 
                    src={codependencyPerson} 
                    alt="Person learning healthy relationship patterns"
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
                <Card className="border-cyan-200 dark:border-cyan-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Understanding Co-dependency</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                      Co-dependency is a behavioral pattern where individuals prioritize others' needs over their own to an unhealthy degree. It often develops from childhood experiences in dysfunctional families and can perpetuate cycles of unhealthy relationship dynamics.
                    </p>
                    <p>
                      People with codependent patterns may have difficulty setting boundaries, expressing their own needs, or maintaining their sense of identity separate from their relationships. This can lead to enabling behaviors and resentment over time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-cyan-200 dark:border-cyan-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Signs of Co-dependency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Relationship Patterns</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Difficulty setting boundaries</li>
                          <li>• Taking responsibility for others' emotions</li>
                          <li>• Fear of abandonment</li>
                          <li>• Seeking approval constantly</li>
                          <li>• Enabling unhealthy behaviors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Personal Challenges</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Poor self-esteem</li>
                          <li>• Difficulty expressing needs</li>
                          <li>• People-pleasing behaviors</li>
                          <li>• Loss of personal identity</li>
                          <li>• Chronic anxiety or stress</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-cyan-200 dark:border-cyan-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Building Healthy Relationships</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Boundary Setting</h4>
                        <p className="text-muted-foreground">
                          Learning to establish and maintain healthy boundaries is essential for balanced relationships and personal well-being.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Self-Care and Identity</h4>
                        <p className="text-muted-foreground">
                          Developing a strong sense of self, practicing self-care, and pursuing personal interests independent of relationships.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Communication Skills</h4>
                        <p className="text-muted-foreground">
                          Learning assertive communication, expressing needs directly, and practicing emotional regulation in relationships.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="border-cyan-200 dark:border-cyan-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Get Support Today</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/get-started" className="block">
                      <Button className="w-full bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Individual Therapy
                      </Button>
                    </Link>
                    <Link to="/couples-therapy" className="block">
                      <Button variant="outline" className="w-full">
                        <Users className="w-4 h-4 mr-2" />
                        Couples Counseling
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-cyan-200 dark:border-cyan-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Recovery Insights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 mt-0.5 text-cyan-600" />
                      <span className="text-muted-foreground">Healthy relationships are built on mutual respect and independence</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Activity className="w-4 h-4 mt-0.5 text-cyan-600" />
                      <span className="text-muted-foreground">Change takes time and practice with professional support</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 text-cyan-600" />
                      <span className="text-muted-foreground">Support groups can provide valuable peer connection</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-cyan-200 dark:border-cyan-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Related Topics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Link to="/mental-health-library/anxiety" className="block text-sm text-muted-foreground hover:text-cyan-600 transition-colors">
                      Anxiety Disorders
                    </Link>
                    <Link to="/mental-health-library/depression" className="block text-sm text-muted-foreground hover:text-cyan-600 transition-colors">
                      Depression
                    </Link>
                    <Link to="/mental-health-library/borderline-personality-disorder" className="block text-sm text-muted-foreground hover:text-cyan-600 transition-colors">
                      Borderline Personality Disorder
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Healthier Relationships?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Our relationship specialists can help you develop the skills for balanced, fulfilling connections with others and yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" variant="secondary" className="bg-white text-cyan-700 hover:bg-gray-100">
                  Start Your Journey
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

export default Codependency;