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
  Building
} from 'lucide-react';
import { generateCountyBusinessSchema } from '@/utils/schemaGenerators';

const FultonCountyTherapy = () => {
  const countySchema = generateCountyBusinessSchema(
    "Fulton",
    "Professional online therapy serving Fulton County and Atlanta, GA. Licensed therapists accepting Aetna, CareSource, Peach State. Video and phone sessions available.",
    "https://chctherapy.com/fulton-county-therapy"
  );
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Fulton County, GA | Atlanta Therapists | CHC"
        description="Find online therapy in Fulton County and Atlanta, GA. Licensed therapists accepting Aetna, CareSource, Peach State. Video and phone sessions available."
        keywords="Fulton County therapy, Atlanta therapist, online therapy Atlanta, mental health Fulton County GA, therapist near me Atlanta"
        canonicalUrl="https://chctherapy.com/fulton-county-therapy"
        ogTitle="Online Therapy in Fulton County, GA | Atlanta Therapists"
        ogDescription="Professional online therapy serving Fulton County and Atlanta. Licensed therapists, most insurance accepted, same-week availability."
        structuredData={countySchema}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Fulton County Crisis:</strong> If you're in crisis, call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:404-730-1600" className="underline font-semibold">404-730-1600</a> (Fulton County Crisis). 
            <strong>Atlanta Crisis Center:</strong> <a href="tel:404-892-4846" className="underline font-semibold">404-892-4846</a>.
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Fulton County & Atlanta Licensed
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Fulton County, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Fulton County residents including Atlanta, Sandy Springs, Roswell, Alpharetta, and surrounding communities. 
                Our Georgia-licensed therapists understand the unique stressors of metro Atlanta life.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Convenient online therapy that fits your busy Atlanta schedule. Evening and weekend appointments available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Fulton County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Atlanta Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How We Schedule in Fulton County */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How We Schedule in Fulton County</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Atlanta Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Early morning (7 AM) and late evening (9 PM) slots for busy professionals
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Calendar className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Weekend Availability</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Saturday and Sunday appointments for working Fulton County residents
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Skip Atlanta Traffic</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    No need to drive through I-285, I-75, or I-85 traffic for appointments
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Fulton County Insurance & MCOs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Fulton County Insurance Coverage</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Popular Atlanta-Area Plans:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Aetna Better Health of Georgia</strong> - $0-40 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Blue Cross Blue Shield of Georgia</strong> - $0-35 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Kaiser Permanente Georgia</strong> - varies by plan</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>UnitedHealthcare</strong> - $0-45 copay</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Fulton County Medicaid MCOs:</h3>
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
                          <span><strong>WellCare of Georgia</strong> - $0 copay</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-muted-foreground mb-4">
                      We verify all Fulton County insurance benefits at no cost
                    </p>
                    <Button asChild>
                      <Link to="/insurance">Verify Your Atlanta-Area Insurance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fulton County Cities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Fulton County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      Atlanta Metro
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Atlanta (Buckhead, Midtown, Downtown)</li>
                      <li>Sandy Springs</li>
                      <li>Dunwoody</li>
                      <li>Brookhaven</li>
                      <li>East Point</li>
                      <li>College Park</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      North Fulton
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Alpharetta</li>
                      <li>Roswell</li>
                      <li>Johns Creek</li>
                      <li>Milton</li>
                      <li>Mountain Park</li>
                      <li>Chattahoochee Hills</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      South Fulton
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>South Fulton</li>
                      <li>Union City</li>
                      <li>Fairburn</li>
                      <li>Palmetto</li>
                      <li>Hapeville</li>
                      <li>Atlanta Hartsfield area</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Atlanta-Specific Mental Health Needs */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Atlanta Metro Mental Health Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Work-Life Balance</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      High-pressure Atlanta careers, long commutes, and competitive environments
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-primary hover:underline">
                      → Anxiety Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Relationship Challenges</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Dating in Atlanta, marriage stress, and family dynamics
                    </p>
                    <Link to="/couples-therapy-georgia" className="text-primary hover:underline">
                      → Couples Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Life Transitions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Job changes, relocating to Atlanta, empty nest, retirement
                    </p>
                    <Link to="/depression-therapy-georgia" className="text-primary hover:underline">
                      → Depression Therapy
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Fulton County Resources */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Fulton County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Fulton County Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Fulton County Crisis Line:</strong> <a href="tel:404-730-1600" className="text-blue-600">404-730-1600</a>
                    </div>
                    <div>
                      <strong>Atlanta Crisis Center:</strong> <a href="tel:404-892-4846" className="text-blue-600">404-892-4846</a>
                    </div>
                    <div>
                      <strong>Fulton County Health Dept:</strong> <a href="https://www.fultoncountyga.gov/services/health-services" className="text-blue-600" target="_blank" rel="noopener noreferrer">Mental Health Services</a>
                    </div>
                    <div>
                      <strong>NAMI Metro Atlanta:</strong> <a href="https://www.namimetroatlanta.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">namimetroatlanta.org</a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Atlanta-Area Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Georgia Crisis & Access:</strong> <a href="tel:1-800-715-4225" className="text-blue-600">1-800-715-4225</a>
                    </div>
                    <div>
                      <strong>Atlanta Warm Line:</strong> <a href="tel:1-888-945-1414" className="text-blue-600">1-888-945-1414</a>
                    </div>
                    <div>
                      <strong>211 Atlanta:</strong> Dial <a href="tel:211" className="text-blue-600">211</a> for local resources
                    </div>
                    <div>
                      <strong>Grady Hospital Crisis:</strong> 24/7 emergency psychiatric services
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

export default FultonCountyTherapy;