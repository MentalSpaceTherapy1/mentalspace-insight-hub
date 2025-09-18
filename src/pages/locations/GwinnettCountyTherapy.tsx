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
  Users, 
  Phone, 
  Video, 
  Wifi,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Building,
  Globe,
  School
} from 'lucide-react';

const GwinnettCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Gwinnett County, GA | Lawrenceville & Duluth Therapists"
        description="Online therapy in Gwinnett County, GA. Licensed therapists in Lawrenceville, Duluth, Norcross, Sugar Hill. Multilingual support, teen therapy, family counseling."
        keywords="Gwinnett County therapy, Lawrenceville therapist, Duluth therapy, multilingual therapy Georgia, teen therapy Gwinnett"
        canonicalUrl="https://chctherapy.com/gwinnett-county-therapy"
        ogTitle="Online Therapy in Gwinnett County, GA | Multilingual Support"
        ogDescription="Professional online therapy serving Gwinnett County's diverse communities. Spanish, Korean, and other language support available."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Gwinnett Crisis Support:</strong> Call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:770-339-6080" className="underline font-semibold">770-339-6080</a> (Gwinnett Crisis Services).
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Gwinnett County Licensed
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Gwinnett County, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Culturally sensitive mental health care for Gwinnett County's diverse communities. Serving Lawrenceville, Duluth, Norcross, Sugar Hill, and surrounding areas with multilingual support.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Online therapy that respects your cultural background and language preferences. Evening and weekend sessions available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Gwinnett Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Verify Gwinnett Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Multilingual & Cultural Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Multilingual Therapy in Gwinnett</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Spanish-Speaking Therapists</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Native Spanish speakers familiar with Latino/Hispanic cultural experiences
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Globe className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Asian Cultural Competency</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Understanding of Korean, Vietnamese, Chinese, and Indian family dynamics
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Teen & Family Focus</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Specialized support for immigrant families and multi-generational households
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gwinnett Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Gwinnett County Insurance & Medicaid</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Popular Gwinnett Plans:</h3>
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
                          <span><strong>Cigna</strong> - $0-50 copay</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Gwinnett Medicaid MCOs:</h3>
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
                      We verify all Gwinnett County insurance benefits at no cost
                    </p>
                    <Button asChild>
                      <Link to="/insurance">Check Your Gwinnett Insurance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gwinnett Cities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Gwinnett County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      Central Gwinnett
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Lawrenceville</li>
                      <li>Snellville</li>
                      <li>Lilburn</li>
                      <li>Stone Mountain (Gwinnett side)</li>
                      <li>Grayson</li>
                      <li>Loganville</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      North Gwinnett
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Duluth</li>
                      <li>Sugar Hill</li>
                      <li>Suwanee</li>
                      <li>Buford</li>
                      <li>Berkeley Lake</li>
                      <li>Braselton (Gwinnett side)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      West Gwinnett
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Norcross</li>
                      <li>Peachtree Corners</li>
                      <li>Tucker (Gwinnett side)</li>
                      <li>Doraville</li>
                      <li>Berkeley Lake</li>
                      <li>Chamblee (Gwinnett areas)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gwinnett-Specific Mental Health Needs */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Gwinnett County Mental Health Focus</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cultural Transitions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Immigration stress, cultural identity, generational differences in diverse Gwinnett families
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-primary hover:underline">
                      → Cultural Anxiety Support
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Academic Pressure</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      High school competition, college prep stress, and parental expectations in Gwinnett schools
                    </p>
                    <Link to="/teen-therapy-georgia" className="text-primary hover:underline">
                      → Teen Academic Stress
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Family Dynamics</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Multi-generational households, language barriers, and balancing traditions with American culture
                    </p>
                    <Link to="/couples-therapy-georgia" className="text-primary hover:underline">
                      → Family Therapy
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gwinnett Resources */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Gwinnett County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Gwinnett County Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Gwinnett Crisis Services:</strong> <a href="tel:770-339-6080" className="text-blue-600">770-339-6080</a>
                    </div>
                    <div>
                      <strong>Gwinnett County Health Dept:</strong> <a href="https://www.gnrhealth.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">Mental Health Services</a>
                    </div>
                    <div>
                      <strong>NAMI Gwinnett:</strong> <a href="https://www.namigwinnett.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">namigwinnett.org</a>
                    </div>
                    <div>
                      <strong>Multicultural Services:</strong> Various community centers in Duluth & Norcross
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Additional Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Georgia Crisis & Access:</strong> <a href="tel:1-800-715-4225" className="text-blue-600">1-800-715-4225</a>
                    </div>
                    <div>
                      <strong>211 Gwinnett:</strong> Dial <a href="tel:211" className="text-blue-600">211</a> for local resources
                    </div>
                    <div>
                      <strong>Gwinnett Family Connection:</strong> Family support services
                    </div>
                    <div>
                      <strong>Language Line:</strong> Translation services available
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

export default GwinnettCountyTherapy;