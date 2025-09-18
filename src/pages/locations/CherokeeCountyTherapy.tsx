import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Phone, 
  Video, 
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Calendar,
  Heart,
  Brain,
  Home,
  Car,
  Building2
} from 'lucide-react';

const CherokeeCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Cherokee County (Woodstock), GA | Suburban Family Support | CHC"
        description="Professional online therapy in Cherokee County, Woodstock GA. Licensed therapists for suburban families, commuters, teens. Work-life balance, parenting stress support."
        keywords="Cherokee County therapy, Woodstock therapy, Canton therapy, suburban family therapy, commuter stress therapy, Cherokee County mental health"
        canonicalUrl="https://chctherapy.com/cherokee-county-therapy"
        ogTitle="Online Therapy in Cherokee County (Woodstock), GA | Suburban Family Support"
        ogDescription="Licensed online therapy in Cherokee County, Woodstock. Suburban family support, commuter stress, teen therapy, insurance accepted."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Cherokee County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-770-590-4357" className="underline font-semibold">1-770-590-4357</a> (Cherokee County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Cherokee County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Woodstock & Cherokee County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Cherokee County's suburban families, commuters, and teens. 
                Licensed Georgia therapists who understand the unique challenges of Atlanta metro suburban life.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Woodstock, Canton, Ball Ground, and all Cherokee County communities with flexible scheduling for busy suburban lifestyles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Cherokee County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Suburban Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Suburban Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Suburban Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Car className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Commuter Stress & Work-Life Balance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support for Cherokee County commuters dealing with Atlanta traffic stress, 
                      long work days, and the challenge of balancing career demands with suburban family life.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Commute stress & road rage management</li>
                      <li>• Work-life balance challenges</li>
                      <li>• Career pressure & advancement stress</li>
                      <li>• Time management anxiety</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Home className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Suburban Parenting & Family Dynamics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for Cherokee County parents navigating competitive school environments, 
                      extracurricular pressures, and maintaining family connections in busy suburban life.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Competitive parenting pressure</li>
                      <li>• School performance anxiety</li>
                      <li>• Extracurricular overwhelm</li>
                      <li>• Teen social media issues</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Building2 className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Professional & Executive Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care for Cherokee County's professional population, including executives, 
                      managers, and high-achievers dealing with leadership stress and success pressure.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Executive burnout & leadership stress</li>
                      <li>• Imposter syndrome</li>
                      <li>• Decision fatigue</li>
                      <li>• Success anxiety & perfectionism</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cherokee County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cherokee County Insurance & Corporate Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Corporate & Executive Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Corporate Health Plans</strong> - Most major employers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Executive Wellness Programs</strong> - EAP integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>HSA/FSA Compatible</strong> - Tax-advantaged payments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Cherokee County Insurance Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Aetna</strong> - $0-40 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Blue Cross Blue Shield</strong> - $0-35 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Cigna</strong> - $0-45 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Humana</strong> - $0-40 copay</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/insurance">Verify Your Cherokee County Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cherokee County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cherokee County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Central Cherokee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Woodstock</li>
                      <li>Holly Springs</li>
                      <li>Towne Lake</li>
                      <li>Eagle Watch</li>
                      <li>Bridgemill</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      North Cherokee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Canton</li>
                      <li>Ball Ground</li>
                      <li>Waleska</li>
                      <li>Mountain Park</li>
                      <li>Lake Arrowhead</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      East Cherokee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Buffington</li>
                      <li>Free Home</li>
                      <li>Lebanon</li>
                      <li>Nelson</li>
                      <li>All rural Cherokee County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cherokee County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cherokee County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-primary" />
                      Metro Commuter Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized treatment for Atlanta metro commuter stress, traffic anxiety, and the unique 
                      challenges of maintaining work-life balance in a fast-paced suburban environment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-primary" />
                      Suburban Family Dynamics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support addressing competitive parenting pressure, school performance anxiety, 
                      and maintaining authentic family connections in achievement-oriented suburban communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cherokee County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cherokee County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Cherokee County Crisis Line:</strong>{" "}
                        <a href="tel:1-770-590-4357" className="text-blue-600 hover:underline">
                          1-770-590-4357
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>Northside Hospital Cherokee:</strong>{" "}
                        <a href="tel:1-770-720-5100" className="text-blue-600 hover:underline">
                          1-770-720-5100
                        </a>
                      </li>
                      <li>
                        <strong>WellStar Kennestone (Emergency):</strong>{" "}
                        <a href="tel:1-770-793-5000" className="text-blue-600 hover:underline">
                          1-770-793-5000
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Local Mental Health Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Cherokee County Health Department:</strong>{" "}
                        <a href="tel:1-770-345-7371" className="text-blue-600 hover:underline">
                          1-770-345-7371
                        </a>
                      </li>
                      <li>
                        <strong>North Georgia Health District:</strong>{" "}
                        <a href="https://nghd.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          nghd.org
                        </a>
                      </li>
                      <li>
                        <strong>NAMI Cherokee County:</strong>{" "}
                        <a href="https://namicherokee.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          namicherokee.org
                        </a>
                      </li>
                      <li>
                        <strong>Cherokee County Family Connection:</strong>{" "}
                        <a href="tel:1-770-479-1248" className="text-blue-600 hover:underline">
                          1-770-479-1248
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link to="/online-therapy-georgia">← Back to Georgia Therapy Hub</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CherokeeCountyTherapy;