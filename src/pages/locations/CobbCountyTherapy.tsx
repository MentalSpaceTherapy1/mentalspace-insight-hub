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
  Briefcase,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Building,
  Heart
} from 'lucide-react';
import { generateCountyBusinessSchema } from '@/utils/schemaGenerators';

const CobbCountyTherapy = () => {
  const countySchema = generateCountyBusinessSchema(
    "Cobb",
    "Online therapy in Cobb County, GA. Licensed therapists in Marietta, Kennesaw, Smyrna, Acworth. Corporate employee programs, executive stress management.",
    "https://chctherapy.com/cobb-county-therapy"
  );

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Cobb County, GA | Marietta & Kennesaw Therapists"
        description="Online therapy in Cobb County, GA. Licensed therapists in Marietta, Kennesaw, Smyrna, Acworth. Corporate employee programs, executive stress management."
        keywords="Cobb County therapy, Marietta therapist, Kennesaw therapy, executive therapy Georgia, corporate mental health Cobb County"
        canonicalUrl="https://chctherapy.com/cobb-county-therapy"
        ogTitle="Online Therapy in Cobb County, GA | Executive & Corporate Support"
        ogDescription="Professional online therapy serving Cobb County professionals and families. Specialized corporate and executive mental health services."
        structuredData={countySchema}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Cobb County Crisis:</strong> Call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:770-422-0202" className="underline font-semibold">770-422-0202</a> (Cobb County Community Services Board).
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Cobb County Licensed
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Cobb County, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health support for Cobb County's business professionals and families. Serving Marietta, Kennesaw, Smyrna, Powder Springs, and corporate communities throughout the county.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Executive coaching, corporate stress management, and family therapy that fits your professional schedule.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Cobb County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Corporate Benefits</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate & Executive Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Corporate Mental Health in Cobb County</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Briefcase className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Executive Stress Management</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Leadership challenges, decision fatigue, and work-life balance for Cobb County executives
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Flexible Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Early morning (6 AM) and late evening sessions for busy professionals
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">EAP Integration</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Seamless coordination with Employee Assistance Programs and HR benefits
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cobb County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cobb County Insurance & Corporate Plans</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Corporate Insurance Plans:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Blue Cross Blue Shield of Georgia</strong> - $0-35 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Aetna</strong> - $0-40 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Cigna</strong> - $0-50 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>UnitedHealthcare</strong> - $0-45 copay</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Cobb County Medicaid:</h3>
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
                          <span><strong>WellCare of Georgia</strong> - $0 copay</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Amerigroup Real Solutions</strong> - $0 copay</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-muted-foreground mb-4">
                      We verify all Cobb County corporate and individual insurance benefits
                    </p>
                    <Button asChild>
                      <Link to="/insurance">Verify Your Corporate Benefits</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cobb County Cities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cobb County Areas We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      Central Cobb
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Marietta</li>
                      <li>Smyrna</li>
                      <li>Vinings</li>
                      <li>Fair Oaks</li>
                      <li>Mableton</li>
                      <li>Austell</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      North Cobb
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Kennesaw</li>
                      <li>Acworth</li>
                      <li>Woodstock (Cobb side)</li>
                      <li>Powder Springs</li>
                      <li>Due West</li>
                      <li>Hiram</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      East Cobb
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>East Cobb (Marietta)</li>
                      <li>Roswell (Cobb areas)</li>
                      <li>Sandy Plains</li>
                      <li>Johnson Ferry</li>
                      <li>Sewell Mill</li>
                      <li>Paper Mill</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cobb County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cobb County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Executive Burnout</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      High-pressure corporate environments, leadership stress, and decision fatigue
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-primary hover:underline">
                      → Executive Stress Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Work-Life Integration</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Balancing demanding careers with family life in Cobb County's professional community
                    </p>
                    <Link to="/couples-therapy-georgia" className="text-primary hover:underline">
                      → Marriage & Career Balance
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Teen Achievement Pressure</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Academic excellence expectations and competitive sports culture in Cobb schools
                    </p>
                    <Link to="/teen-therapy-georgia" className="text-primary hover:underline">
                      → Teen Performance Anxiety
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cobb County Resources */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Cobb County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Cobb County Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Cobb County CSB Crisis:</strong> <a href="tel:770-422-0202" className="text-blue-600">770-422-0202</a>
                    </div>
                    <div>
                      <strong>Cobb & Douglas Public Health:</strong> <a href="https://www.cobbanddouglashealth.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">Mental Health Services</a>
                    </div>
                    <div>
                      <strong>NAMI Cobb County:</strong> <a href="https://www.namicobb.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">namicobb.org</a>
                    </div>
                    <div>
                      <strong>Cobb Family Connection:</strong> Family support & resources
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Professional Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Georgia Crisis & Access:</strong> <a href="tel:1-800-715-4225" className="text-blue-600">1-800-715-4225</a>
                    </div>
                    <div>
                      <strong>211 Cobb County:</strong> Dial <a href="tel:211" className="text-blue-600">211</a> for resources
                    </div>
                    <div>
                      <strong>Cobb Chamber EAP Directory:</strong> Employee assistance programs
                    </div>
                    <div>
                      <strong>WellStar Health System:</strong> Behavioral health services
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

export default CobbCountyTherapy;