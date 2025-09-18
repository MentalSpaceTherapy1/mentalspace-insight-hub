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
  Anchor, 
  Users, 
  Phone, 
  Video, 
  Waves,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Building,
  Sun
} from 'lucide-react';

const ChathamCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Chatham County, GA | Savannah Therapists & Coastal Mental Health"
        description="Online therapy in Chatham County and Savannah, GA. Licensed therapists serving coastal Georgia. Hurricane trauma, military family support, historic district residents."
        keywords="Chatham County therapy, Savannah therapist, coastal Georgia mental health, hurricane trauma therapy, military family therapy Savannah"
        canonicalUrl="https://chctherapy.com/chatham-county-therapy"
        ogTitle="Online Therapy in Chatham County, GA | Savannah Coastal Mental Health"
        ogDescription="Professional online therapy serving Savannah and coastal Georgia. Specialized hurricane trauma recovery and military family support."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Chatham County Crisis:</strong> Call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:912-356-2755" className="underline font-semibold">912-356-2755</a> (Coastal Center Crisis Line).
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 dark:from-blue-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Chatham County Licensed
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Chatham County, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Coastal mental health care for Savannah and Chatham County residents. Specialized support for hurricane recovery, military families, and historic district living challenges.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Online therapy that understands coastal Georgia's unique lifestyle, weather challenges, and community dynamics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Savannah Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Coastal Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coastal & Military Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Coastal Georgia Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Waves className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Hurricane & Storm Trauma</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    PTSD recovery from hurricanes, flooding anxiety, and disaster preparedness stress
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Anchor className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">Military Family Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Deployment stress, military spouse support, and veteran reintegration near Hunter Army Airfield
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Sun className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                    <CardTitle className="text-lg">Seasonal Wellness</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Managing heat-related mood changes and tourism industry seasonal stress
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Chatham Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Chatham County Insurance Coverage</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Coastal Georgia Plans:</h3>
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
                          <span><strong>Tricare</strong> - Military family coverage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>Cigna</strong> - $0-50 copay</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Chatham Medicaid MCOs:</h3>
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
                      We verify military and civilian insurance benefits for Chatham County residents
                    </p>
                    <Button asChild>
                      <Link to="/insurance">Verify Your Coastal Insurance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Chatham Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Chatham County Areas We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      Savannah Metro
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Savannah (Historic District)</li>
                      <li>Midtown Savannah</li>
                      <li>Southside Savannah</li>
                      <li>West Savannah</li>
                      <li>Windsor Forest</li>
                      <li>Georgetown</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      Islands & Coastal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Tybee Island</li>
                      <li>Wilmington Island</li>
                      <li>Skidaway Island</li>
                      <li>Isle of Hope</li>
                      <li>Whitemarsh Island</li>
                      <li>Thunderbolt</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      West Chatham
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Garden City</li>
                      <li>Port Wentworth</li>
                      <li>Pooler</li>
                      <li>Bloomingdale</li>
                      <li>Godley Station</li>
                      <li>Monteith</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Coastal Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Savannah Area Mental Health Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tourism Industry Stress</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Seasonal employment, service industry burnout, and living in a tourist destination
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-primary hover:underline">
                      → Work Stress Support
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hurricane Recovery</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Post-hurricane PTSD, flooding anxiety, and storm preparation stress
                    </p>
                    <Link to="/ptsd-therapy-georgia" className="text-primary hover:underline">
                      → Disaster Trauma Recovery
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Historic District Living</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Balancing preservation requirements, tourist crowds, and daily life in historic areas
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-primary hover:underline">
                      → Community Stress Support
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Chatham Resources */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Chatham County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Coastal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Coastal Center Crisis:</strong> <a href="tel:912-356-2755" className="text-blue-600">912-356-2755</a>
                    </div>
                    <div>
                      <strong>Chatham County Health Dept:</strong> <a href="https://www.chathamcountyga.gov" className="text-blue-600" target="_blank" rel="noopener noreferrer">Mental Health Services</a>
                    </div>
                    <div>
                      <strong>NAMI Coastal Georgia:</strong> <a href="https://www.namicoastalgeorgia.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">namicoastalgeorgia.org</a>
                    </div>
                    <div>
                      <strong>Hurricane Recovery Resources:</strong> FEMA disaster mental health
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Military & Community Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Georgia Crisis & Access:</strong> <a href="tel:1-800-715-4225" className="text-blue-600">1-800-715-4225</a>
                    </div>
                    <div>
                      <strong>Hunter Army Airfield:</strong> Military family support services
                    </div>
                    <div>
                      <strong>211 Coastal Georgia:</strong> Dial <a href="tel:211" className="text-blue-600">211</a> for resources
                    </div>
                    <div>
                      <strong>St. Joseph's/Candler:</strong> Behavioral health services
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

export default ChathamCountyTherapy;