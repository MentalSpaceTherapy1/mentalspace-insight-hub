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
  Wifi,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Calendar,
  TreePine
} from 'lucide-react';

const LowndesCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Lowndes County, GA | Valdosta Therapists | CHC"
        description="Find online therapy in Lowndes County and Valdosta, GA. Licensed therapists accepting CareSource, Peach State, Amerigroup. Phone and video sessions for rural South Georgia."
        keywords="Lowndes County therapy, Valdosta therapist, online therapy Valdosta, mental health Lowndes County GA, rural Georgia therapy"
        canonicalUrl="https://chctherapy.com/lowndes-county-therapy"
        ogTitle="Online Therapy in Lowndes County, GA | Valdosta Therapists"
        ogDescription="Professional online therapy serving Lowndes County and Valdosta. Licensed therapists, most insurance accepted, phone sessions for rural areas."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>South Georgia Crisis:</strong> If you're in crisis, call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:229-293-0123" className="underline font-semibold">229-293-0123</a> (South Georgia Medical Center Crisis). 
            <strong>Valdosta Crisis:</strong> <a href="tel:229-333-7673" className="underline font-semibold">229-333-7673</a>.
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <TreePine className="w-3 h-3 mr-1" />
                South Georgia Licensed
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Lowndes County, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Lowndes County residents including Valdosta, Hahira, Lake Park, and surrounding South Georgia communities. 
                Our Georgia-licensed therapists understand rural life challenges and provide accessible care.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Phone and video therapy options perfect for rural South Georgia. No need to drive long distances for quality mental health care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your South Georgia Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Rural Georgia Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How We Schedule in Lowndes County */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How We Schedule in Lowndes County</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Phone-First Option</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Perfect for areas with limited internet - high-quality phone therapy sessions
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Rural-Friendly Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Early morning and evening appointments to fit farming and work schedules
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Low-Bandwidth Video</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Video sessions that work with slower rural internet connections
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Lowndes County Insurance & MCOs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Lowndes County Insurance Coverage</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Rural Georgia Insurance Plans:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Blue Cross Blue Shield of Georgia</strong> - $0-35 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Aetna Better Health</strong> - $0-40 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Humana</strong> - $0-40 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Cigna</strong> - $0-45 copay</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Lowndes County Medicaid MCOs:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>CareSource Georgia</strong> - $0 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Peach State Health Plan</strong> - $0 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Amerigroup Real Solutions</strong> - $0 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>WellCare of Georgia</strong> - Available in region</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-muted-foreground mb-4">
                      We verify all South Georgia insurance benefits at no cost
                    </p>
                    <Button asChild>
                      <Link to="/insurance">Verify Your Rural Georgia Insurance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Rural Connectivity Solutions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Internet & Phone Options for Rural Lowndes County</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wifi className="w-5 h-5 text-primary" />
                      Broadband Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Windstream:</strong> DSL and fiber in Valdosta area
                    </div>
                    <div>
                      <strong>Mediacom:</strong> Cable internet in select areas
                    </div>
                    <div>
                      <strong>HughesNet/Viasat:</strong> Satellite internet for remote areas
                    </div>
                    <div>
                      <strong>Cellular Hotspots:</strong> Verizon, AT&T mobile data options
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Our video sessions work with connections as low as 1 Mbps
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Phone Therapy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Landline Friendly:</strong> Works with traditional phone service
                    </div>
                    <div>
                      <strong>Cell Phone Options:</strong> Any carrier with voice service
                    </div>
                    <div>
                      <strong>No Internet Required:</strong> Full therapy sessions by phone
                    </div>
                    <div>
                      <strong>Private & Secure:</strong> HIPAA-compliant phone therapy
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Many clients prefer phone therapy for its convenience and privacy
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Lowndes County Communities */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">South Georgia Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <TreePine className="w-4 h-4" />
                      Lowndes County Cities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Valdosta</li>
                      <li>Hahira</li>
                      <li>Lake Park</li>
                      <li>Remerton</li>
                      <li>Dasher</li>
                      <li>Naylor</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <TreePine className="w-4 h-4" />
                      Nearby Counties
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Brooks County</li>
                      <li>Echols County</li>
                      <li>Lanier County</li>
                      <li>Berrien County</li>
                      <li>Cook County</li>
                      <li>Colquitt County</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Users className="w-4 h-4" />
                      Rural Specialties
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Agricultural stress management</li>
                      <li>Rural isolation and depression</li>
                      <li>Economic challenges</li>
                      <li>Limited healthcare access</li>
                      <li>Substance use support</li>
                      <li>Veterans services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* South Georgia Mental Health Needs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Rural South Georgia Mental Health Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Agricultural Stress</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Weather, crop prices, equipment costs, and financial pressures on farming families
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-primary hover:underline">
                      → Anxiety Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Rural Isolation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Geographic isolation, limited social connections, and seasonal depression
                    </p>
                    <Link to="/depression-therapy-georgia" className="text-primary hover:underline">
                      → Depression Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Access Challenges</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Limited local mental health resources, long drives to appointments
                    </p>
                    <Link to="/online-therapy-georgia" className="text-primary hover:underline">
                      → Online Therapy Solutions
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Lowndes County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Lowndes County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Local Valdosta Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>South GA Medical Center Crisis:</strong> <a href="tel:229-293-0123" className="text-blue-600">229-293-0123</a>
                    </div>
                    <div>
                      <strong>Valdosta Crisis Line:</strong> <a href="tel:229-333-7673" className="text-blue-600">229-333-7673</a>
                    </div>
                    <div>
                      <strong>Lowndes County Health Dept:</strong> <a href="tel:229-333-5277" className="text-blue-600">229-333-5277</a>
                    </div>
                    <div>
                      <strong>River Edge Behavioral Health:</strong> Crisis and outpatient services
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>South Georgia Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Georgia Crisis & Access:</strong> <a href="tel:1-800-715-4225" className="text-blue-600">1-800-715-4225</a>
                    </div>
                    <div>
                      <strong>GA Farm Bureau Stress Line:</strong> <a href="tel:1-800-532-5879" className="text-blue-600">1-800-532-5879</a>
                    </div>
                    <div>
                      <strong>211 South Georgia:</strong> Dial <a href="tel:211" className="text-blue-600">211</a> for local resources
                    </div>
                    <div>
                      <strong>Rural Health Network:</strong> Support for agricultural communities
                    </div>
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

export default LowndesCountyTherapy;