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
  GraduationCap,
  Stethoscope,
  Home
} from 'lucide-react';

const BibbCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Bibb County (Macon), GA | Medical & Educational Support | CHC"
        description="Professional online therapy in Bibb County, Macon GA. Licensed therapists for Mercer University students, medical workers, central Georgia families. Student counseling, healthcare worker support."
        keywords="Bibb County therapy, Macon therapy, Mercer University therapy, medical worker therapy, central Georgia therapy, student counseling Macon"
        canonicalUrl="https://chctherapy.com/bibb-county-therapy"
        ogTitle="Online Therapy in Bibb County (Macon), GA | Medical & Educational Support"
        ogDescription="Licensed online therapy in Bibb County, Macon. Mercer University student support, medical worker wellness, central Georgia family therapy."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Bibb County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-478-751-6442" className="underline font-semibold">1-478-751-6442</a> (Bibb County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Bibb County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Macon & Bibb County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Macon's educational and medical communities in Central Georgia. 
                Licensed Georgia therapists providing specialized support for students, healthcare workers, and families.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Macon, Mercer University, and all Bibb County communities with academic support, medical worker wellness, and family therapy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Bibb County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Student Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Educational & Medical Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Macon Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <GraduationCap className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Mercer University Students & Faculty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support for Mercer University's diverse academic community, including undergraduate, graduate, 
                      medical, and law students dealing with academic pressure and career stress.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Medical school stress & imposter syndrome</li>
                      <li>• Law school pressure & anxiety</li>
                      <li>• Graduate program burnout</li>
                      <li>• Academic performance anxiety</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Stethoscope className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Healthcare & Medical Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for Macon's significant healthcare workforce, including hospital staff, medical residents, 
                      and healthcare professionals dealing with high-stress medical environments.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Medical resident burnout</li>
                      <li>• Healthcare worker PTSD</li>
                      <li>• Compassion fatigue</li>
                      <li>• Work-life balance in medicine</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Home className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Central Georgia Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care for Bibb County families, including those connected to government, education, 
                      and service industries in Georgia's geographic center.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Family relationship dynamics</li>
                      <li>• Parenting stress & teen issues</li>
                      <li>• Economic pressure & job stress</li>
                      <li>• Community connection challenges</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bibb County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Bibb County Insurance & Student Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Student & Academic Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Mercer University Health Plan</strong> - Student coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Graduate Student Plans</strong> - Med/Law students</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Academic Employee Plans</strong> - Faculty/staff</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Bibb County Insurance Plans
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
                        <span><strong>CareSource</strong> - Medicaid MCO</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Peach State Health Plan</strong> - Medicaid</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/insurance">Verify Your Bibb County Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bibb County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Bibb County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Central Macon
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Downtown Macon</li>
                      <li>Historic Intown</li>
                      <li>College Hill Corridor</li>
                      <li>Mercer University area</li>
                      <li>Medical District</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      North Macon
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>North Macon</li>
                      <li>Ingleside</li>
                      <li>Shirley Hills</li>
                      <li>Bloomfield</li>
                      <li>Vineville</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      South Bibb
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Lizella</li>
                      <li>Payne City</li>
                      <li>Dry Branch</li>
                      <li>Jeffersonville</li>
                      <li>All rural Bibb County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bibb County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Bibb County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Academic & Professional Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized support for Mercer University's academic community, addressing the unique pressures of 
                      medical school, law school, and graduate programs in Central Georgia's educational hub.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-primary" />
                      Healthcare Worker Wellness
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support for Macon's healthcare community, including medical residents, hospital staff, 
                      and healthcare professionals dealing with high-stress medical environments and patient care responsibilities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bibb County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Bibb County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Bibb County Crisis Line:</strong>{" "}
                        <a href="tel:1-478-751-6442" className="text-blue-600 hover:underline">
                          1-478-751-6442
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>Atrium Health Navicent:</strong>{" "}
                        <a href="tel:1-478-633-1000" className="text-blue-600 hover:underline">
                          1-478-633-1000
                        </a>
                      </li>
                      <li>
                        <strong>Coliseum Medical Centers:</strong>{" "}
                        <a href="tel:1-478-765-7000" className="text-blue-600 hover:underline">
                          1-478-765-7000
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
                        <strong>Bibb County Health Department:</strong>{" "}
                        <a href="tel:1-478-749-0179" className="text-blue-600 hover:underline">
                          1-478-749-0179
                        </a>
                      </li>
                      <li>
                        <strong>Mercer University Counseling Services:</strong>{" "}
                        <a href="tel:1-478-301-2862" className="text-blue-600 hover:underline">
                          1-478-301-2862
                        </a>
                      </li>
                      <li>
                        <strong>Middle Georgia Regional Commission:</strong>{" "}
                        <a href="https://mg-rc.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          mg-rc.org
                        </a>
                      </li>
                      <li>
                        <strong>NAMI Middle Georgia:</strong>{" "}
                        <a href="https://namimiddlega.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          namimiddlega.org
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

export default BibbCountyTherapy;