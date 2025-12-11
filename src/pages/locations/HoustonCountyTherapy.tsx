import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { generateCountyBusinessSchema } from '@/utils/schemaGenerators';
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
  Plane,
  Factory,
  Home
} from 'lucide-react';

const HoustonCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Houston County (Warner Robins), GA | Air Force Base Support | CHC"
        description="Professional online therapy in Houston County, Warner Robins GA. Licensed therapists for Robins Air Force Base families, military deployment support, aerospace workers."
        keywords="Houston County therapy, Warner Robins therapy, Robins Air Force Base therapy, military family therapy, aerospace worker therapy, Perry therapy"
        canonicalUrl="https://chctherapy.com/houston-county-therapy"
        ogTitle="Online Therapy in Houston County (Warner Robins), GA | Air Force Base Support"
        ogDescription="Licensed online therapy in Houston County, Warner Robins. Robins AFB family support, military deployment therapy, aerospace worker wellness."
        structuredData={generateCountyBusinessSchema(
          'Houston',
          'Professional online therapy in Houston County, Warner Robins GA. Licensed therapists for Robins Air Force Base families, military deployment support, aerospace workers.',
          'https://chctherapy.com/houston-county-therapy'
        )}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Houston County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-478-218-2273" className="underline font-semibold">1-478-218-2273</a> (Houston County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Houston County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Warner Robins & Houston County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Robins Air Force Base families and Houston County's aerospace community. 
                Licensed Georgia therapists providing military-informed care and deployment support.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Warner Robins, Perry, Centerville, and all Houston County communities with specialized military family and aerospace worker support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Houston County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Military Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Military & Aerospace Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Military & Aerospace Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Plane className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Air Force Families & Deployment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Specialized mental health support for Robins Air Force Base families dealing with deployments, 
                      military life transitions, and the unique challenges of Air Force service.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Deployment separation anxiety</li>
                      <li>• Military spouse isolation</li>
                      <li>• PCS transition stress</li>
                      <li>• Children's deployment adjustment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Factory className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Aerospace & Defense Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care for Houston County's significant aerospace and defense contractor workforce, 
                      addressing high-security job stress and technical work pressures.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Security clearance anxiety</li>
                      <li>• High-stress technical work</li>
                      <li>• Project deadline pressure</li>
                      <li>• Defense contractor job stress</li>
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
                      Support for Houston County's civilian families, including those connected to the agricultural 
                      community, local businesses, and the Greater Macon area.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Small business owner stress</li>
                      <li>• Rural-suburban balance challenges</li>
                      <li>• Economic uncertainty concerns</li>
                      <li>• Community connection issues</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Houston County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Houston County Insurance & Military Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="w-5 h-5 text-primary" />
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
                        <span><strong>Federal Employee Health Benefits</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Defense Contractor Plans</strong> - Various coverage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Houston County Insurance Plans
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
                  <Link to="/insurance">Verify Your Houston County Benefits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Houston County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Houston County Communities We Serve</h2>
              
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
                      <li>Robins Air Force Base</li>
                      <li>Warner Robins</li>
                      <li>Bonaire</li>
                      <li>Base housing areas</li>
                      <li>Military families</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Central Houston
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Perry</li>
                      <li>Centerville</li>
                      <li>Kathleen</li>
                      <li>Elko</li>
                      <li>Byron</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Rural Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Hayneville</li>
                      <li>Galloway</li>
                      <li>Henderson</li>
                      <li>Wellston</li>
                      <li>All rural Houston County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Houston County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Houston County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plane className="w-5 h-5 text-primary" />
                      Military Family & Air Force Life
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized treatment for Robins Air Force Base families, including deployment stress, military transitions, 
                      and the unique challenges of Air Force life in Central Georgia.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Factory className="w-5 h-5 text-primary" />
                      Aerospace & Defense Industry Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support for Houston County's aerospace and defense workforce, addressing high-security job stress, 
                      technical work pressures, and the demands of defense contracting.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Houston County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Houston County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Military & Crisis Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Houston County Crisis Line:</strong>{" "}
                        <a href="tel:1-478-218-2273" className="text-blue-600 hover:underline">
                          1-478-218-2273
                        </a>
                      </li>
                      <li>
                        <strong>Robins AFB Chaplain:</strong>{" "}
                        <a href="tel:1-478-327-9437" className="text-blue-600 hover:underline">
                          1-478-327-9437
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
                        <strong>Houston County Health Department:</strong>{" "}
                        <a href="tel:1-478-218-2000" className="text-blue-600 hover:underline">
                          1-478-218-2000
                        </a>
                      </li>
                      <li>
                        <strong>Middle Georgia Regional Commission:</strong>{" "}
                        <a href="https://mg-rc.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          mg-rc.org
                        </a>
                      </li>
                      <li>
                        <strong>Houston Medical Center:</strong>{" "}
                        <a href="tel:1-478-922-4281" className="text-blue-600 hover:underline">
                          1-478-922-4281
                        </a>
                      </li>
                      <li>
                        <strong>Military Family Life Counselor:</strong>{" "}
                        <a href="tel:1-478-327-2603" className="text-blue-600 hover:underline">
                          1-478-327-2603
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

export default HoustonCountyTherapy;