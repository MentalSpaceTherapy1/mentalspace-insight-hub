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
  Waves,
  Mountain,
  Home
} from 'lucide-react';

const ForsythCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Forsyth County (Cumming), GA | Lake Lanier Family Support | CHC"
        description="Professional online therapy in Forsyth County, Cumming GA. Licensed therapists for lakefront families, affluent communities. Teen pressure, parenting stress, family dynamics."
        keywords="Forsyth County therapy, Cumming therapy, Lake Lanier therapy, affluent family therapy, teen anxiety therapy, Forsyth County mental health"
        canonicalUrl="https://chctherapy.com/forsyth-county-therapy"
        ogTitle="Online Therapy in Forsyth County (Cumming), GA | Lake Lanier Family Support"
        ogDescription="Licensed online therapy in Forsyth County, Cumming. Lake Lanier family support, teen pressure, affluent community mental health."
        structuredData={generateCountyBusinessSchema(
          'Forsyth',
          'Professional online therapy in Forsyth County, Cumming GA. Licensed therapists for lakefront families, affluent communities. Teen pressure, parenting stress, family dynamics.',
          'https://chctherapy.com/forsyth-county-therapy'
        )}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Forsyth County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-770-781-2007" className="underline font-semibold">1-770-781-2007</a> (Forsyth County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Forsyth County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Cumming & Forsyth County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Lake Lanier families and Forsyth County's affluent communities. 
                Licensed Georgia therapists who understand the unique pressures of high-achieving suburban life.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Cumming, Lake Lanier communities, and all Forsyth County areas with specialized support for teen pressure and family dynamics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Forsyth County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Lake Lanier Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Affluent Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Lake Lanier Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Waves className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>High-Achieving Teen Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support for Forsyth County teens facing intense academic pressure, college prep stress, 
                      and social anxiety in highly competitive school environments.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Academic perfectionism & college prep anxiety</li>
                      <li>• Social media pressure & comparison</li>
                      <li>• Extracurricular overwhelm</li>
                      <li>• Teen depression & anxiety</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Home className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Affluent Family Dynamics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for high-income families navigating success pressure, work-life balance challenges, 
                      and maintaining authentic relationships in achievement-oriented communities.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Executive parent stress & time management</li>
                      <li>• Family communication issues</li>
                      <li>• Success anxiety & imposter syndrome</li>
                      <li>• Maintaining family values amid success</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Mountain className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Lake Lifestyle & Seasonal Wellness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care addressing the unique aspects of lakefront living, seasonal depression, 
                      and the social pressures of affluent lake communities.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Seasonal mood disorders</li>
                      <li>• Social isolation in luxury communities</li>
                      <li>• Lifestyle maintenance pressure</li>
                      <li>• Community social anxiety</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Forsyth County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Forsyth County Insurance & Premium Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mountain className="w-5 h-5 text-primary" />
                      Premium & Executive Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Executive Health Plans</strong> - Premium coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>High-Deductible Health Plans</strong> - HSA compatible</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Concierge Medicine Plans</strong> - Accepted</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Forsyth County Insurance Plans
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
                        <span><strong>UnitedHealthcare</strong> - $0-50 copay</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/insurance">Verify Your Forsyth County Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Forsyth County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Forsyth County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Lake Lanier Area
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Cumming</li>
                      <li>Lake Lanier Islands</li>
                      <li>Lanier Point</li>
                      <li>Chestatee</li>
                      <li>Lakefront communities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Suburban Forsyth
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Suwanee (partial)</li>
                      <li>Johns Creek (partial)</li>
                      <li>Matt</li>
                      <li>Daves Creek</li>
                      <li>Suburban neighborhoods</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      North Forsyth
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Coal Mountain</li>
                      <li>Oscarville</li>
                      <li>Drew</li>
                      <li>Haw Creek</li>
                      <li>All rural Forsyth County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Forsyth County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Forsyth County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Waves className="w-5 h-5 text-primary" />
                      High-Achieving Teen & Family Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized treatment for the unique pressures facing families in Forsyth County's high-achieving 
                      communities, including academic stress, perfectionism, and social comparison anxiety.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mountain className="w-5 h-5 text-primary" />
                      Affluent Community Dynamics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support addressing the specific challenges of affluent communities, including 
                      success pressure, lifestyle maintenance stress, and authentic relationship building.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Forsyth County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Forsyth County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Forsyth County Crisis Line:</strong>{" "}
                        <a href="tel:1-770-781-2007" className="text-blue-600 hover:underline">
                          1-770-781-2007
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>Northside Hospital Forsyth:</strong>{" "}
                        <a href="tel:1-770-844-3200" className="text-blue-600 hover:underline">
                          1-770-844-3200
                        </a>
                      </li>
                      <li>
                        <strong>Northeast Georgia Medical Center:</strong>{" "}
                        <a href="tel:1-770-219-9000" className="text-blue-600 hover:underline">
                          1-770-219-9000
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
                        <strong>Forsyth County Health Department:</strong>{" "}
                        <a href="tel:1-770-781-6800" className="text-blue-600 hover:underline">
                          1-770-781-6800
                        </a>
                      </li>
                      <li>
                        <strong>North Georgia Health District:</strong>{" "}
                        <a href="https://nghd.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          nghd.org
                        </a>
                      </li>
                      <li>
                        <strong>NAMI Forsyth County:</strong>{" "}
                        <a href="https://namiforsyth.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          namiforsyth.org
                        </a>
                      </li>
                      <li>
                        <strong>Forsyth County Family Connection:</strong>{" "}
                        <a href="tel:1-770-886-2703" className="text-blue-600 hover:underline">
                          1-770-886-2703
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

export default ForsythCountyTherapy;