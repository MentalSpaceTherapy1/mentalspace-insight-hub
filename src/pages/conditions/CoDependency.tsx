import { ArrowLeft, Clock, Users, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import codependencyPersonImage from "@/assets/codependency-person.jpg";

const CoDependency = () => {
  return (
    <>
      <SEOHead 
        title="Codependency Treatment | Relationship Therapy & Recovery"
        description="Get professional help for codependency. Learn about healthy relationships, boundaries, and find specialized therapists for codependency recovery and healing."
        keywords="codependency, codependent relationships, relationship therapy, boundaries, enabling behavior, relationship counseling"
        canonicalUrl="https://chctherapy.com/mental-health-library/codependency"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/mental-health-library" className="hover:text-primary">Mental Health Library</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Codependency</span>
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
                Codependency
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Break free from unhealthy relationship patterns. Learn about codependency, develop 
                healthy boundaries, and build fulfilling, balanced relationships.
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
                src={codependencyPersonImage} 
                alt="People learning healthy relationship boundaries" 
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
                    Codependency is a behavioral and emotional condition that affects one's ability to 
                    have healthy, mutually satisfying relationships. It involves an excessive emotional 
                    or psychological reliance on a partner, often characterized by enabling, people-pleasing, 
                    and difficulty setting boundaries.
                  </p>
                  <p>
                    While not formally recognized as a mental health disorder, codependency can significantly 
                    impact wellbeing and relationship satisfaction. It often develops in families affected 
                    by addiction, mental illness, or abuse, but can occur in any relationship dynamic.
                  </p>
                </CardContent>
              </Card>

              {/* Signs & Patterns */}
              <Card>
                <CardHeader>
                  <CardTitle>Common Signs & Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Relationship Patterns</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Excessive caretaking of others</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Difficulty setting boundaries</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Fear of abandonment</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Enabling harmful behaviors</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Personal Struggles</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Low self-worth</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">People-pleasing behaviors</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Difficulty identifying own needs</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 shrink-0"></div>
                          <span className="text-sm">Need for control</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Origins & Causes */}
              <Card>
                <CardHeader>
                  <CardTitle>Origins & Contributing Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-400 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Family of Origin</h4>
                      <p className="text-gray-600 text-sm">
                        Growing up in families with addiction, mental illness, abuse, or dysfunction 
                        where children learned to focus on others' needs over their own.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Childhood Roles</h4>
                      <p className="text-gray-600 text-sm">
                        Taking on adult responsibilities early, becoming the "caretaker," "hero," 
                        or "peacemaker" in the family system.
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Trauma & Attachment</h4>
                      <p className="text-gray-600 text-sm">
                        Early trauma, neglect, or inconsistent caregiving that affects ability 
                        to form secure, healthy attachments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recovery & Treatment */}
              <Card>
                <CardHeader>
                  <CardTitle>Recovery & Treatment</CardTitle>
                  <CardDescription>
                    Developing healthy relationships and personal boundaries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Individual Therapy</h4>
                      <p className="text-gray-600 text-sm">
                        Working with a therapist to understand patterns, develop self-awareness, 
                        and build healthy relationship skills.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Boundary Setting</h4>
                      <p className="text-gray-600 text-sm">
                        Learning to identify personal needs, communicate limits, and maintain 
                        healthy boundaries in relationships.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Support Groups</h4>
                      <p className="text-gray-600 text-sm">
                        Co-Dependents Anonymous (CoDA) and other support groups provide 
                        community and shared experiences in recovery.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Family/Couples Therapy</h4>
                      <p className="text-gray-600 text-sm">
                        Working together to change relationship dynamics and develop 
                        healthier communication patterns.
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
                    <Link to="/couples-therapy">Couples Therapy</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Healthy Relationship Signs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Healthy Relationships Include</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium text-green-700">• Clear boundaries</div>
                    <div className="text-gray-600 text-xs ml-4">Respecting personal limits</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-green-700">• Mutual support</div>
                    <div className="text-gray-600 text-xs ml-4">Both partners give and receive</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-green-700">• Individual identity</div>
                    <div className="text-gray-600 text-xs ml-4">Maintaining personal interests</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-green-700">• Open communication</div>
                    <div className="text-gray-600 text-xs ml-4">Honest, respectful dialogue</div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/relationship-coaching" className="block text-sm text-primary hover:underline">
                    Relationship Coaching
                  </Link>
                  <Link to="/couples-therapy" className="block text-sm text-primary hover:underline">
                    Couples Therapy
                  </Link>
                  <Link to="/mental-health-library/substance-use-disorder" className="block text-sm text-primary hover:underline">
                    Substance Use Disorder
                  </Link>
                  <Link to="/mental-health-library/anxiety" className="block text-sm text-primary hover:underline">
                    Anxiety Disorders
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
                      <div className="font-medium">Common Pattern</div>
                      <div className="text-sm text-gray-600">Often learned in childhood</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Recovery</div>
                      <div className="text-sm text-gray-600">Possible with awareness & support</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium">Process</div>
                      <div className="text-sm text-gray-600">Ongoing journey of growth</div>
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
              Build Healthier, More Fulfilling Relationships
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Breaking free from codependent patterns is possible. Learn to create balanced 
              relationships while maintaining your own identity and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/therapist-matching">Find a Relationship Therapist</Link>
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

export default CoDependency;