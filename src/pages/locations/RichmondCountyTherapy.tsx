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
  Stethoscope,
  GraduationCap,
  Factory
} from 'lucide-react';

const RichmondCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Richmond County (Augusta), GA | Licensed Therapists | CHC"
        description="Professional online therapy in Richmond County, Augusta GA. Licensed therapists accepting insurance, same-week appointments. Military family support & medical worker wellness."
        keywords="Richmond County therapy, Augusta therapy, Georgia therapy, online therapy Augusta, military family therapy, medical worker therapy, Richmond County mental health"
        canonicalUrl="https://chctherapy.com/richmond-county-therapy"
        ogTitle="Online Therapy in Richmond County (Augusta), GA | Licensed Therapists"
        ogDescription="Licensed online therapy in Richmond County, Augusta. Military family support, medical worker wellness, insurance accepted."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Richmond County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-706-210-5200" className="underline font-semibold">1-706-210-5200</a> (Augusta Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Richmond County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Augusta & Richmond County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Augusta's military families, medical professionals, and all Richmond County residents. 
                Licensed Georgia therapists providing specialized support for the CSRA community.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Fort Gordon, Augusta University, and all Richmond County communities with flexible scheduling and military-informed care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Richmond County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Augusta Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Military & Medical Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Augusta Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Military Families & Veterans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Specialized support for Fort Gordon families, deployment stress, PCS transitions, and veteran reintegration. 
                      Military-informed therapists who understand the unique challenges of service life.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Deployment & separation anxiety</li>
                      <li>• PCS move stress</li>
                      <li>• Military spouse support</li>
                      <li>• Veteran PTSD treatment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Stethoscope className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Healthcare Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support for Augusta University Health System, AU Medical Center, and other healthcare professionals. 
                      Understanding the unique stressors of medical work.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Burnout prevention & recovery</li>
                      <li>• Compassion fatigue</li>
                      <li>• Work-life balance</li>
                      <li>• Secondary trauma support</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <GraduationCap className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Students & Educators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for Augusta University students, faculty, and Richmond County educators. 
                      Academic stress, career transitions, and educational challenges.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Academic performance anxiety</li>
                      <li>• Graduate school stress</li>
                      <li>• Teacher burnout</li>
                      <li>• Career transition support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Richmond County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Richmond County Insurance & Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Military & Federal Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>TRICARE</strong> - Active duty & family coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>VA Benefits</strong> - Veteran mental health services</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Federal Employee Health Benefits</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Richmond County Insurance Plans
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
                  <Link to="/insurance">Verify Your Richmond County Benefits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Richmond County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Richmond County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Augusta Metro
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Augusta (Downtown)</li>
                      <li>Forest Hills</li>
                      <li>Hill Acres</li>
                      <li>Summerville</li>
                      <li>West Augusta</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Military Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Fort Gordon</li>
                      <li>Signal Hill</li>
                      <li>Richmond Hill</li>
                      <li>Belvedere</li>
                      <li>Grovetown</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Surrounding Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Hephzibah</li>
                      <li>Blythe</li>
                      <li>Waynesboro</li>
                      <li>Thomson</li>
                      <li>All rural Richmond County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Richmond County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Richmond County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      Military & Veteran Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized treatment for military families and veterans, including PTSD, deployment stress, 
                      and transition challenges common in the Fort Gordon and Augusta military community.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Factory className="w-5 h-5 text-primary" />
                      Healthcare Worker Wellness
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support for Augusta's large healthcare community, addressing burnout, 
                      compassion fatigue, and the unique stressors of medical and nursing professionals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Richmond County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Richmond County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Augusta Crisis Line:</strong>{" "}
                        <a href="tel:1-706-210-5200" className="text-blue-600 hover:underline">
                          1-706-210-5200
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>Veterans Crisis Line:</strong>{" "}
                        <a href="tel:1-800-273-8255" className="text-blue-600 hover:underline">
                          1-800-273-8255 (Press 1)
                        </a>
                      </li>
                      <li>
                        <strong>Augusta University Health Emergency:</strong>{" "}
                        <a href="tel:1-706-721-2273" className="text-blue-600 hover:underline">
                          1-706-721-2273
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
                        <strong>Richmond County Health Department:</strong>{" "}
                        <a href="tel:1-706-721-5800" className="text-blue-600 hover:underline">
                          1-706-721-5800
                        </a>
                      </li>
                      <li>
                        <strong>CSRA Regional Commission:</strong>{" "}
                        <a href="https://csrarc.ga.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          csrarc.ga.gov
                        </a>
                      </li>
                      <li>
                        <strong>NAMI Augusta:</strong>{" "}
                        <a href="https://namiaugusta.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          namiaugusta.org
                        </a>
                      </li>
                      <li>
                        <strong>Fort Gordon Family Life Chaplain:</strong>{" "}
                        <a href="tel:1-706-791-2113" className="text-blue-600 hover:underline">
                          1-706-791-2113
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

export default RichmondCountyTherapy;