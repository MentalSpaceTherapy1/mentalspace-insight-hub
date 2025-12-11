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
  Wifi,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Calendar,
  Mountain
} from 'lucide-react';

const HallCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Hall County, GA | Gainesville Therapists | CHC"
        description="Find online therapy in Hall County and Gainesville, GA. Licensed therapists accepting CareSource, Peach State, Amerigroup. Video and phone sessions for North Georgia."
        keywords="Hall County therapy, Gainesville therapist, online therapy Gainesville, mental health Hall County GA, North Georgia therapy"
        canonicalUrl="https://chctherapy.com/hall-county-therapy"
        ogTitle="Online Therapy in Hall County, GA | Gainesville Therapists"
        ogDescription="Professional online therapy serving Hall County and Gainesville. Licensed therapists, most insurance accepted, mountain-friendly phone sessions."
        structuredData={generateCountyBusinessSchema(
          'Hall',
          'Find online therapy in Hall County and Gainesville, GA. Licensed therapists accepting CareSource, Peach State, Amerigroup. Video and phone sessions for North Georgia.',
          'https://chctherapy.com/hall-county-therapy'
        )}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>North Georgia Crisis:</strong> If you're in crisis, call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:770-503-7404" className="underline font-semibold">770-503-7404</a> (Northeast Georgia Medical Center Crisis). 
            <strong>Gainesville:</strong> <a href="tel:770-718-4357" className="underline font-semibold">770-718-4357</a>.
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <Mountain className="w-3 h-3 mr-1" />
                North Georgia Mountains Licensed
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Hall County, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Hall County residents including Gainesville, Oakwood, Flowery Branch, Lula, and surrounding North Georgia mountain communities. 
                Our Georgia-licensed therapists understand mountain living and seasonal challenges.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Phone and video therapy perfect for mountain areas. Quality mental health care without the drive to Atlanta.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your North Georgia Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Mountain Area Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How We Schedule in Hall County */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How We Schedule in Hall County</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Mountain className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Mountain-Friendly</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Sessions that work with mountain weather and seasonal schedules
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Reliable Phone Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Perfect for areas with spotty internet or mountain connectivity issues
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Lake & Tourism Schedule</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Flexible hours for Lake Lanier tourism and hospitality workers
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Hall County Insurance & MCOs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Hall County Insurance Coverage</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">North Georgia Insurance Plans:</h3>
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
                          <span><strong>UnitedHealthcare</strong> - $0-45 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Humana</strong> - $0-40 copay</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Hall County Medicaid MCOs:</h3>
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
                      We verify all North Georgia insurance benefits at no cost
                    </p>
                    <Button asChild>
                      <Link to="/insurance">Verify Your North Georgia Insurance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mountain Area Connectivity */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Internet & Phone Options for North Georgia Mountains</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wifi className="w-5 h-5 text-primary" />
                      Mountain Broadband
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Windstream:</strong> Fiber and DSL in Gainesville area
                    </div>
                    <div>
                      <strong>Charter Spectrum:</strong> Cable internet in cities
                    </div>
                    <div>
                      <strong>NTUAConnect:</strong> Local fiber in select areas
                    </div>
                    <div>
                      <strong>Satellite Internet:</strong> HughesNet/Viasat for remote mountains
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Weather-resistant connections work even during mountain storms
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Mountain Phone Coverage
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Verizon:</strong> Strong mountain coverage in Hall County
                    </div>
                    <div>
                      <strong>AT&T:</strong> Good coverage near Lake Lanier
                    </div>
                    <div>
                      <strong>T-Mobile:</strong> Coverage in cities, expanding rural
                    </div>
                    <div>
                      <strong>Landline Service:</strong> Reliable for remote mountain areas
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Phone therapy works with any carrier - no special setup needed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Hall County Communities */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">North Georgia Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Mountain className="w-4 h-4" />
                      Hall County Cities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Gainesville</li>
                      <li>Oakwood</li>
                      <li>Flowery Branch</li>
                      <li>Lula</li>
                      <li>Braselton</li>
                      <li>Gillsville</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Mountain className="w-4 h-4" />
                      Mountain Communities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Lake Lanier area</li>
                      <li>Clermont</li>
                      <li>Helen vicinity</li>
                      <li>Mountain foothills</li>
                      <li>Remote cabins</li>
                      <li>Seasonal residents</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Users className="w-4 h-4" />
                      Mountain Life Specialties
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Seasonal depression (mountain winters)</li>
                      <li>Tourism industry stress</li>
                      <li>Isolation in remote areas</li>
                      <li>Weather-related anxiety</li>
                      <li>Retirement adjustment</li>
                      <li>Outdoor recreation therapy</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* North Georgia Mental Health Needs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">North Georgia Mountain Mental Health Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Seasonal Challenges</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Winter isolation, seasonal depression, and weather-related stress
                    </p>
                    <Link to="/depression-therapy-georgia" className="text-primary hover:underline">
                      → Depression Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tourism Industry Stress</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Hospitality work pressure, seasonal employment, Lake Lanier tourism stress
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-primary hover:underline">
                      → Anxiety Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Retirement & Relocation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Adjustment to mountain living, retirement transitions, life changes
                    </p>
                    <Link to="/grief-therapy-georgia" className="text-primary hover:underline">
                      → Grief & Transition Therapy
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Hall County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Hall County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Local Gainesville Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Northeast Georgia Medical Center:</strong> <a href="tel:770-503-7404" className="text-blue-600">770-503-7404</a>
                    </div>
                    <div>
                      <strong>Gainesville Crisis Line:</strong> <a href="tel:770-718-4357" className="text-blue-600">770-718-4357</a>
                    </div>
                    <div>
                      <strong>Hall County Health Dept:</strong> <a href="tel:770-535-8246" className="text-blue-600">770-535-8246</a>
                    </div>
                    <div>
                      <strong>Avita Community Partners:</strong> Mental health services
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>North Georgia Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Georgia Crisis & Access:</strong> <a href="tel:1-800-715-4225" className="text-blue-600">1-800-715-4225</a>
                    </div>
                    <div>
                      <strong>GA Mountains Health District:</strong> Regional mental health
                    </div>
                    <div>
                      <strong>211 North Georgia:</strong> Dial <a href="tel:211" className="text-blue-600">211</a> for local resources
                    </div>
                    <div>
                      <strong>Mountain Area Support:</strong> Specialized for mountain communities
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

export default HallCountyTherapy;