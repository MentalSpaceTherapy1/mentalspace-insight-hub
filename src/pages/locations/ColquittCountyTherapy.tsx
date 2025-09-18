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
  Tractor,
  Factory,
  Home
} from 'lucide-react';

const ColquittCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Colquitt County (Moultrie), GA | Agricultural Community Support | CHC"
        description="Professional online therapy in Colquitt County, Moultrie GA. Licensed therapists for farming families, agricultural workers, rural communities. Farm stress, rural mental health."
        keywords="Colquitt County therapy, Moultrie therapy, agricultural therapy, farming family therapy, rural Georgia therapy, farm stress therapy, Colquitt County mental health"
        canonicalUrl="https://chctherapy.com/colquitt-county-therapy"
        ogTitle="Online Therapy in Colquitt County (Moultrie), GA | Agricultural Community Support"
        ogDescription="Licensed online therapy in Colquitt County, Moultrie. Agricultural family support, farm stress therapy, rural community mental health."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Colquitt County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-229-985-4357" className="underline font-semibold">1-229-985-4357</a> (Colquitt County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Colquitt County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Moultrie & Colquitt County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for South Georgia's agricultural heartland. 
                Licensed Georgia therapists who understand farming families, rural life, and agricultural community challenges.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Moultrie, Norman Park, Funston, and all Colquitt County farming communities with flexible scheduling for agricultural seasons.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Colquitt County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Agricultural Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Agricultural Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Agricultural Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Tractor className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Farming Families & Agricultural Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support tailored for Colquitt County's farming families, understanding the unique 
                      stressors of agricultural life, crop seasons, and farm economics.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Crop failure & weather anxiety</li>
                      <li>• Agricultural financial stress</li>
                      <li>• Harvest season burnout</li>
                      <li>• Multi-generational farm transitions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Factory className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Agricultural Industry Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for workers in Colquitt County's processing plants, agricultural equipment facilities, 
                      and related industries facing job stress and seasonal employment challenges.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Processing plant work stress</li>
                      <li>• Seasonal employment anxiety</li>
                      <li>• Workplace injury recovery</li>
                      <li>• Economic instability concerns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Home className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Rural Community & Small Town Life</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care addressing small town dynamics, rural isolation, limited resources, 
                      and the unique social challenges of tight-knit agricultural communities.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Rural isolation & loneliness</li>
                      <li>• Small town stigma concerns</li>
                      <li>• Limited healthcare access anxiety</li>
                      <li>• Community relationship stress</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Colquitt County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Colquitt County Insurance & Rural Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tractor className="w-5 h-5 text-primary" />
                      Agricultural & Self-Employed Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Farm Bureau Insurance</strong> - Agricultural coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Self-Employed Plans</strong> - ACA marketplace</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Agricultural Worker Coverage</strong> - Specialized plans</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Colquitt County Insurance Plans
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
                  <Link to="/insurance">Verify Your Colquitt County Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Colquitt County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Colquitt County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Central Colquitt
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Moultrie</li>
                      <li>Doerun</li>
                      <li>Norman Park</li>
                      <li>Ellenton</li>
                      <li>Riverside</li>
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
                      <li>Funston</li>
                      <li>Berlin</li>
                      <li>Autreyville</li>
                      <li>Coolidge (partial)</li>
                      <li>Agricultural areas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Farming Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Peanut farming regions</li>
                      <li>Cotton farming areas</li>
                      <li>Livestock operations</li>
                      <li>Agricultural districts</li>
                      <li>All rural Colquitt County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Colquitt County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Colquitt County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tractor className="w-5 h-5 text-primary" />
                      Agricultural Stress & Farm Life
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized understanding of agricultural cycles, weather-dependent anxiety, crop insurance stress, 
                      and the unique financial pressures facing South Georgia farming families.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-primary" />
                      Rural Community Mental Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support that respects rural community values, addresses isolation challenges, 
                      and understands the limited mental health resources available in agricultural areas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Colquitt County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Colquitt County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Colquitt County Crisis Line:</strong>{" "}
                        <a href="tel:1-229-985-4357" className="text-blue-600 hover:underline">
                          1-229-985-4357
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>Colquitt Regional Medical Center:</strong>{" "}
                        <a href="tel:1-229-985-3420" className="text-blue-600 hover:underline">
                          1-229-985-3420
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
                        <strong>Colquitt County Health Department:</strong>{" "}
                        <a href="tel:1-229-616-7450" className="text-blue-600 hover:underline">
                          1-229-616-7450
                        </a>
                      </li>
                      <li>
                        <strong>Southwest Health District:</strong>{" "}
                        <a href="https://swgahd.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          swgahd.org
                        </a>
                      </li>
                      <li>
                        <strong>Rural Mental Health Network:</strong>{" "}
                        <a href="https://georgiaruralhealth.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          georgiaruralhealth.org
                        </a>
                      </li>
                      <li>
                        <strong>Colquitt County Family Connection:</strong>{" "}
                        <a href="tel:1-229-616-7430" className="text-blue-600 hover:underline">
                          1-229-616-7430
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

export default ColquittCountyTherapy;