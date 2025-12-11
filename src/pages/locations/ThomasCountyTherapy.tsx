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
  Tractor,
  Factory,
  Home
} from 'lucide-react';

const ThomasCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Thomas County (Thomasville), GA | Rural Mental Health | CHC"
        description="Professional online therapy in Thomas County, Thomasville GA. Licensed therapists for farming families, rural communities. Agricultural stress, small town mental health support."
        keywords="Thomas County therapy, Thomasville therapy, rural Georgia therapy, farming family therapy, agricultural stress therapy, small town mental health"
        canonicalUrl="https://chctherapy.com/thomas-county-therapy"
        ogTitle="Online Therapy in Thomas County (Thomasville), GA | Rural Mental Health"
        ogDescription="Licensed online therapy in Thomas County, Thomasville. Rural family support, agricultural stress, small town community mental health."
        structuredData={generateCountyBusinessSchema(
          'Thomas',
          'Professional online therapy in Thomas County, Thomasville GA. Licensed therapists for farming families, rural communities. Agricultural stress, small town mental health support.',
          'https://chctherapy.com/thomas-county-therapy'
        )}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Thomas County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-229-225-4357" className="underline font-semibold">1-229-225-4357</a> (Thomas County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Thomas County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Thomasville & Thomas County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for rural Georgia families, farmers, and small town communities. 
                Licensed Georgia therapists who understand the unique challenges of agricultural and rural life.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Thomasville, rural Thomas County, and surrounding agricultural communities with flexible scheduling for busy farming seasons.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Thomas County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Rural Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rural Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Rural Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Tractor className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Agricultural Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support designed for farming families, understanding the unique stressors of 
                      agricultural life, seasonal challenges, and financial pressures of rural livelihoods.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Farm financial stress & crop failures</li>
                      <li>• Seasonal work depression</li>
                      <li>• Agricultural accident trauma</li>
                      <li>• Generational farm transition stress</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Home className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Small Town Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for small town dynamics, close-knit community challenges, privacy concerns, 
                      and the unique mental health needs of rural Georgia communities.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Small town stigma & privacy concerns</li>
                      <li>• Community gossip anxiety</li>
                      <li>• Limited local resource stress</li>
                      <li>• Rural isolation & loneliness</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Factory className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Local Industry Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care for Thomas County's manufacturing, forestry, and processing industry workers 
                      facing job-related stress and economic uncertainties.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Manufacturing job stress</li>
                      <li>• Workplace injury recovery</li>
                      <li>• Economic uncertainty anxiety</li>
                      <li>• Shift work sleep disorders</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Thomas County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Thomas County Insurance & Rural Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tractor className="w-5 h-5 text-primary" />
                      Rural & Self-Employed Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Farm Bureau Insurance</strong> - Rural coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Self-Employed Plans</strong> - ACA marketplace</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Agricultural Worker Plans</strong> - Specialized coverage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Thomas County Insurance Plans
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
                  <Link to="/insurance">Verify Your Thomas County Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Thomas County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Thomas County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Thomasville Area
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Thomasville (Downtown)</li>
                      <li>Thomasville Heights</li>
                      <li>Fletcher</li>
                      <li>Pavo</li>
                      <li>Boston</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Rural Communities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Barwick</li>
                      <li>Coolidge</li>
                      <li>Meigs</li>
                      <li>Ochlocknee</li>
                      <li>Rural farming areas</li>
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
                      <li>Cairo (partial)</li>
                      <li>Whigham</li>
                      <li>Calvary</li>
                      <li>All rural Thomas County</li>
                      <li>Farm communities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Thomas County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Thomas County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tractor className="w-5 h-5 text-primary" />
                      Agricultural & Rural Stress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized understanding of agricultural cycles, farm financial stress, weather-dependent anxiety, 
                      and the unique mental health challenges facing rural farming communities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-primary" />
                      Small Town & Community Dynamics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support that respects small town privacy concerns, community dynamics, 
                      and the unique social challenges of close-knit rural communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Thomas County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Thomas County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Thomas County Crisis Line:</strong>{" "}
                        <a href="tel:1-229-225-4357" className="text-blue-600 hover:underline">
                          1-229-225-4357
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>John D. Archbold Memorial Hospital:</strong>{" "}
                        <a href="tel:1-229-228-2000" className="text-blue-600 hover:underline">
                          1-229-228-2000
                        </a>
                      </li>
                      <li>
                        <strong>Rural Crisis Support:</strong>{" "}
                        <a href="tel:1-800-715-4225" className="text-blue-600 hover:underline">
                          1-800-715-4225
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
                        <strong>Thomas County Health Department:</strong>{" "}
                        <a href="tel:1-229-225-4135" className="text-blue-600 hover:underline">
                          1-229-225-4135
                        </a>
                      </li>
                      <li>
                        <strong>Southwest Health District:</strong>{" "}
                        <a href="https://swgahd.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          swgahd.org
                        </a>
                      </li>
                      <li>
                        <strong>Thomas County Family Connection:</strong>{" "}
                        <a href="tel:1-229-226-6486" className="text-blue-600 hover:underline">
                          1-229-226-6486
                        </a>
                      </li>
                      <li>
                        <strong>Rural Mental Health Network:</strong>{" "}
                        <a href="https://georgiaruralhealth.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          georgiaruralhealth.org
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

export default ThomasCountyTherapy;