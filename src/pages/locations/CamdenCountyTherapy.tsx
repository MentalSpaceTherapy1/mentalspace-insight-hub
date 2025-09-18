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
  Palmtree,
  Home
} from 'lucide-react';

const CamdenCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Camden County (Kingsland), GA | Military Family Support | CHC"
        description="Professional online therapy in Camden County, Kingsland GA. Licensed therapists for Kings Bay Naval Base families, military deployment support, coastal community mental health."
        keywords="Camden County therapy, Kingsland therapy, Kings Bay therapy, military family therapy, naval base therapy, coastal Georgia therapy, deployment support"
        canonicalUrl="https://chctherapy.com/camden-county-therapy"
        ogTitle="Online Therapy in Camden County (Kingsland), GA | Military Family Support"
        ogDescription="Licensed online therapy in Camden County, Kingsland. Kings Bay Naval Base family support, military deployment therapy, coastal mental health."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Camden County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-912-576-6985" className="underline font-semibold">1-912-576-6985</a> (Camden County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Camden County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Kingsland & Camden County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Kings Bay Naval Base families and coastal Camden County communities. 
                Licensed Georgia therapists specializing in military life, deployment challenges, and coastal living.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Kingsland, St. Marys, Woodbine, and all Camden County areas with military-informed care and coastal community support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Camden County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Military Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Military & Coastal Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Military & Coastal Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Anchor className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Naval Base Families & Deployment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Specialized mental health support for Kings Bay Naval Base families dealing with submarine deployments, 
                      military life stress, and the unique challenges of naval service.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Submarine deployment anxiety</li>
                      <li>• Military spouse isolation</li>
                      <li>• PCS transition stress</li>
                      <li>• Children's deployment adjustment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Palmtree className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Coastal Living & Environment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care addressing the unique aspects of coastal Georgia living, including hurricane preparedness, 
                      seasonal changes, and small coastal town dynamics.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Hurricane anxiety & weather trauma</li>
                      <li>• Seasonal affective patterns</li>
                      <li>• Coastal isolation challenges</li>
                      <li>• Small town privacy concerns</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Home className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Rural & Working Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for Camden County's rural families, fishing industry workers, and local businesses 
                      dealing with economic pressures and rural community challenges.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Economic uncertainty stress</li>
                      <li>• Rural healthcare access anxiety</li>
                      <li>• Fishing industry seasonal stress</li>
                      <li>• Community stigma concerns</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Camden County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Camden County Insurance & Military Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Anchor className="w-5 h-5 text-primary" />
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
                      <Shield className="w-5 h-5 text-primary" />
                      Camden County Insurance Plans
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
                  <Link to="/insurance">Verify Your Camden County Benefits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Camden County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Camden County Communities We Serve</h2>
              
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
                      <li>Kings Bay Naval Base</li>
                      <li>Kingsland</li>
                      <li>St. Marys</li>
                      <li>Military housing areas</li>
                      <li>Naval families</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Coastal Towns
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Fernandina Beach (border)</li>
                      <li>Cumberland Island area</li>
                      <li>Crooked River</li>
                      <li>Satilla River communities</li>
                      <li>Coastal fishing areas</li>
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
                      <li>Woodbine</li>
                      <li>White Oak</li>
                      <li>Tarboro</li>
                      <li>Colesburg</li>
                      <li>All rural Camden County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Camden County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Camden County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Anchor className="w-5 h-5 text-primary" />
                      Military Family & Deployment Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized treatment for Kings Bay Naval Base families, including submarine deployment anxiety, 
                      military spouse support, and children's adjustment to military life transitions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palmtree className="w-5 h-5 text-primary" />
                      Coastal Community Wellness
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support addressing coastal living challenges, including hurricane preparedness anxiety, 
                      seasonal mood changes, and the unique social dynamics of small coastal communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Camden County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Camden County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Military & Crisis Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Camden County Crisis Line:</strong>{" "}
                        <a href="tel:1-912-576-6985" className="text-blue-600 hover:underline">
                          1-912-576-6985
                        </a>
                      </li>
                      <li>
                        <strong>Kings Bay Naval Base Chaplain:</strong>{" "}
                        <a href="tel:1-912-573-4500" className="text-blue-600 hover:underline">
                          1-912-573-4500
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
                        <strong>Camden County Health Department:</strong>{" "}
                        <a href="tel:1-912-576-5757" className="text-blue-600 hover:underline">
                          1-912-576-5757
                        </a>
                      </li>
                      <li>
                        <strong>Coastal Regional Commission:</strong>{" "}
                        <a href="https://crc.ga.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          crc.ga.gov
                        </a>
                      </li>
                      <li>
                        <strong>Southeast Georgia Health System:</strong>{" "}
                        <a href="tel:1-912-466-7000" className="text-blue-600 hover:underline">
                          1-912-466-7000
                        </a>
                      </li>
                      <li>
                        <strong>Military Family Life Counselor:</strong>{" "}
                        <a href="tel:1-912-573-2955" className="text-blue-600 hover:underline">
                          1-912-573-2955
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

export default CamdenCountyTherapy;