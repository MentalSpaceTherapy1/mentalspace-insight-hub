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
  Anchor,
  Waves,
  Palmtree
} from 'lucide-react';

const GlynnCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Glynn County (Brunswick), GA | Coastal Mental Health | CHC"
        description="Professional online therapy in Glynn County, Brunswick GA. Licensed therapists for coastal families, retirees, maritime workers. Hurricane trauma, seasonal mental health support."
        keywords="Glynn County therapy, Brunswick therapy, coastal Georgia therapy, St. Simons therapy, Jekyll Island therapy, maritime worker therapy, hurricane trauma therapy"
        canonicalUrl="https://chctherapy.com/glynn-county-therapy"
        ogTitle="Online Therapy in Glynn County (Brunswick), GA | Coastal Mental Health"
        ogDescription="Licensed online therapy in Glynn County, Brunswick. Coastal family support, hurricane trauma, maritime worker wellness, insurance accepted."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Glynn County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-912-264-6785" className="underline font-semibold">1-912-264-6785</a> (Glynn County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Glynn County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Brunswick & Glynn County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for coastal Georgia families, retirees, and maritime workers. 
                Licensed Georgia therapists providing specialized support for the Golden Isles community.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Brunswick, St. Simons Island, Jekyll Island, and all coastal communities with hurricane trauma support and seasonal wellness care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Glynn County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Coastal Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coastal Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Coastal Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Waves className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Hurricane & Weather Trauma</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Specialized support for hurricane trauma, storm anxiety, and weather-related stress common 
                      in coastal Georgia communities. Understanding the unique challenges of coastal living.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Hurricane PTSD & storm anxiety</li>
                      <li>• Evacuation stress & displacement</li>
                      <li>• Property loss grief</li>
                      <li>• Community rebuilding stress</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Anchor className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Maritime Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support for Brunswick's port workers, shrimpers, fishing industry workers, 
                      and other maritime professionals facing unique occupational stressors.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Work-related stress & safety anxiety</li>
                      <li>• Extended time away from family</li>
                      <li>• Seasonal employment stress</li>
                      <li>• Physical injury recovery support</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Palmtree className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Retirees & Coastal Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for the Golden Isles' significant retiree population and coastal families 
                      dealing with aging, isolation, and unique coastal community dynamics.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Retirement adjustment & purpose</li>
                      <li>• Social isolation in coastal areas</li>
                      <li>• Seasonal depression & weather mood</li>
                      <li>• Intergenerational family stress</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Glynn County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Glynn County Insurance & Medicare Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palmtree className="w-5 h-5 text-primary" />
                      Medicare & Retiree Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Medicare Advantage Plans</strong> - Various coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Medicare Supplement Plans</strong> - Accepted</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Federal Retiree Plans</strong> - FEHB coverage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Glynn County Insurance Plans
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
                  <Link to="/insurance">Verify Your Glynn County Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Glynn County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Glynn County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Brunswick Metro
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Brunswick (Downtown)</li>
                      <li>Brunswick East</li>
                      <li>Brunswick West</li>
                      <li>Dock Junction</li>
                      <li>Sterling</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Golden Isles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>St. Simons Island</li>
                      <li>Jekyll Island</li>
                      <li>Sea Island</li>
                      <li>Little St. Simons Island</li>
                      <li>Barrier Islands</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Mainland Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Country Club Estates</li>
                      <li>Altama</li>
                      <li>Arco</li>
                      <li>Thalmann</li>
                      <li>All rural Glynn County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Glynn County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Glynn County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Waves className="w-5 h-5 text-primary" />
                      Coastal & Weather-Related Trauma
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized treatment for hurricane trauma, storm anxiety, and weather-related PTSD common 
                      in coastal Georgia communities. Understanding the cyclical nature of storm seasons.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palmtree className="w-5 h-5 text-primary" />
                      Retirement & Aging Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support for the Golden Isles' significant retiree population, addressing 
                      retirement adjustment, social isolation, and aging-related mental health challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Glynn County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Glynn County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Glynn County Crisis Line:</strong>{" "}
                        <a href="tel:1-912-264-6785" className="text-blue-600 hover:underline">
                          1-912-264-6785
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>Southeast Georgia Health System:</strong>{" "}
                        <a href="tel:1-912-466-7000" className="text-blue-600 hover:underline">
                          1-912-466-7000
                        </a>
                      </li>
                      <li>
                        <strong>Glynn County Emergency Management:</strong>{" "}
                        <a href="tel:1-912-554-7400" className="text-blue-600 hover:underline">
                          1-912-554-7400
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
                        <strong>Glynn County Health Department:</strong>{" "}
                        <a href="tel:1-912-264-3200" className="text-blue-600 hover:underline">
                          1-912-264-3200
                        </a>
                      </li>
                      <li>
                        <strong>Coastal Regional Commission:</strong>{" "}
                        <a href="https://crc.ga.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          crc.ga.gov
                        </a>
                      </li>
                      <li>
                        <strong>NAMI Coastal Georgia:</strong>{" "}
                        <a href="https://namicoastalga.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          namicoastalga.org
                        </a>
                      </li>
                      <li>
                        <strong>Golden Isles Community Hospice:</strong>{" "}
                        <a href="tel:1-912-265-4735" className="text-blue-600 hover:underline">
                          1-912-265-4735
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

export default GlynnCountyTherapy;