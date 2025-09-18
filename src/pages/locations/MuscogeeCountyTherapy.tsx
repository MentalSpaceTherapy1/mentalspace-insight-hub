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
  Factory,
  GraduationCap,
  Home
} from 'lucide-react';

const MuscogeeCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Muscogee County (Columbus), GA | Fort Benning Military Support | CHC"
        description="Professional online therapy in Muscogee County, Columbus GA. Licensed therapists for Fort Benning families, military deployment support, manufacturing workers, Columbus State students."
        keywords="Muscogee County therapy, Columbus therapy, Fort Benning therapy, military family therapy, Columbus State therapy, manufacturing worker therapy"
        canonicalUrl="https://chctherapy.com/muscogee-county-therapy"
        ogTitle="Online Therapy in Muscogee County (Columbus), GA | Fort Benning Military Support"
        ogDescription="Licensed online therapy in Muscogee County, Columbus. Fort Benning family support, military deployment therapy, student counseling, manufacturing worker wellness."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Muscogee County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-706-327-3999" className="underline font-semibold">1-706-327-3999</a> (Muscogee County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Muscogee County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Columbus & Muscogee County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Fort Benning military families and the diverse Columbus community. 
                Licensed Georgia therapists providing military-informed care, student support, and industrial worker wellness.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Columbus, Fort Benning, and all Muscogee County communities with specialized support for military life and working families.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Muscogee County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Military Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Military & Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Columbus Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Shield className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Fort Benning Military Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Specialized mental health support for Fort Benning families dealing with infantry training stress, 
                      deployments, and the unique challenges of Army life in Columbus.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Infantry training family stress</li>
                      <li>• Deployment separation anxiety</li>
                      <li>• Military spouse support groups</li>
                      <li>• PCS relocation challenges</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <GraduationCap className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Columbus State Students & Faculty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care for Columbus State University students and faculty, addressing academic stress, 
                      career transitions, and college life challenges in West Georgia.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Academic performance anxiety</li>
                      <li>• College adjustment disorders</li>
                      <li>• Graduate program stress</li>
                      <li>• Career transition anxiety</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Factory className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Manufacturing & Industrial Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for Columbus's significant manufacturing workforce, including textile, automotive, 
                      and industrial workers facing job-related stress and economic pressures.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Manufacturing job stress</li>
                      <li>• Shift work sleep disorders</li>
                      <li>• Workplace injury recovery</li>
                      <li>• Economic uncertainty anxiety</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Muscogee County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Muscogee County Insurance & Military Benefits</h2>
              
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
                        <span><strong>TRICARE Reserve Select</strong> - National Guard/Reserve</span>
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
                      Muscogee County Insurance Plans
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
                  <Link to="/insurance">Verify Your Muscogee County Benefits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Muscogee County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Muscogee County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Military Communities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Fort Benning</li>
                      <li>Military housing areas</li>
                      <li>Infantry families</li>
                      <li>Ranger training families</li>
                      <li>Military retirees</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Columbus Metro
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Columbus (Downtown)</li>
                      <li>Midtown</li>
                      <li>Green Island Hills</li>
                      <li>Wynnton</li>
                      <li>Lakebottom</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Outlying Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Bibb City</li>
                      <li>Upatoi</li>
                      <li>Columbus State area</li>
                      <li>Industrial districts</li>
                      <li>All rural Muscogee County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Muscogee County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Muscogee County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Military Family & Infantry Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized treatment for Fort Benning families, including infantry training stress, deployment anxiety, 
                      and the unique challenges of Army life in West Georgia's military community.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Factory className="w-5 h-5 text-primary" />
                      Industrial Worker & Student Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support for Columbus's diverse workforce and Columbus State University community, 
                      addressing manufacturing stress, academic pressure, and career transition challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Muscogee County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Muscogee County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Military & Crisis Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Muscogee County Crisis Line:</strong>{" "}
                        <a href="tel:1-706-327-3999" className="text-blue-600 hover:underline">
                          1-706-327-3999
                        </a>
                      </li>
                      <li>
                        <strong>Fort Benning Chaplain:</strong>{" "}
                        <a href="tel:1-706-545-2050" className="text-blue-600 hover:underline">
                          1-706-545-2050
                        </a>
                      </li>
                      <li>
                        <strong>Military Crisis Line:</strong>{" "}
                        <a href="tel:1-800-273-8255" className="text-blue-600 hover:underline">
                          1-800-273-8255 (Press 1)
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
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
                        <strong>Muscogee County Health Department:</strong>{" "}
                        <a href="tel:1-706-321-6300" className="text-blue-600 hover:underline">
                          1-706-321-6300
                        </a>
                      </li>
                      <li>
                        <strong>West Central Health District:</strong>{" "}
                        <a href="https://wchd.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          wchd.org
                        </a>
                      </li>
                      <li>
                        <strong>Columbus State University Counseling:</strong>{" "}
                        <a href="tel:1-706-507-8700" className="text-blue-600 hover:underline">
                          1-706-507-8700
                        </a>
                      </li>
                      <li>
                        <strong>Piedmont Columbus Regional:</strong>{" "}
                        <a href="tel:1-706-571-1000" className="text-blue-600 hover:underline">
                          1-706-571-1000
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

export default MuscogeeCountyTherapy;