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
  Star, 
  Phone, 
  Video, 
  Wifi,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Calendar,
  Heart,
  Brain
} from 'lucide-react';

const GeorgiaTherapyHub = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Georgia | Insurance, Availability & How to Start | CHC"
        description="Find online therapy in Georgia. Licensed therapists accepting Aetna, CareSource, Peach State, Amerigroup. Serving all Georgia counties including rural areas."
        keywords="online therapy Georgia, Georgia therapist, mental health Georgia, therapy insurance Georgia, rural therapy Georgia, Georgia counseling"
        canonicalUrl="https://chctherapy.com/online-therapy-georgia"
        ogTitle="Online Therapy in Georgia | Insurance, Availability & How to Start"
        ogDescription="Professional online therapy serving all of Georgia. Licensed therapists, most insurance accepted, 24-72 hour start times."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Georgia Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis & Access Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline). 
            Visit <a href="https://dbhdd.georgia.gov" className="underline" target="_blank" rel="noopener noreferrer">dbhdd.georgia.gov</a> for local resources.
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Serving All Georgia Counties
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Georgia
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for all Georgians, from Atlanta to rural counties. 
                Our licensed Georgia therapists provide accessible, affordable online therapy with most insurance plans accepted.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving 159 Georgia counties with flexible scheduling, multiple session formats, and same-week availability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Georgia Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Georgia Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How We Serve Georgia */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How We Serve Georgia</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card>
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Video Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    High-quality video therapy for Georgia residents with reliable internet
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Phone Therapy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Perfect for rural Georgia areas with limited broadband access
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Flexible Scheduling</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Evening and weekend appointments across Georgia time zones
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Georgia Licensed</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    All therapists licensed by Georgia Composite Board
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Georgia Insurance & MCOs */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Georgia Insurance & Medicaid Coverage</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Private Insurance Plans
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
                        <span><strong>Blue Cross Blue Shield of Georgia</strong> - $0-35 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Cigna</strong> - $0-45 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Humana</strong> - $0-40 copay</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Georgia Medicaid MCOs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>CareSource</strong> - $0 copay statewide</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Peach State Health Plan</strong> - $0 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Amerigroup</strong> - $0 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>WellCare</strong> - Available in select counties</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/insurance">Verify Your Georgia Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Georgia Counties We Serve */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Georgia Counties & Cities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Metro Atlanta
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/fulton-county-therapy" className="text-blue-600 hover:underline">Fulton County (Atlanta)</Link></li>
                      <li><Link to="/dekalb-county-therapy" className="text-blue-600 hover:underline">DeKalb County</Link></li>
                      <li><Link to="/gwinnett-county-therapy" className="text-blue-600 hover:underline">Gwinnett County</Link></li>
                      <li><Link to="/cobb-county-therapy" className="text-blue-600 hover:underline">Cobb County</Link></li>
                      <li><Link to="/cherokee-county-therapy" className="text-blue-600 hover:underline">Cherokee County</Link></li>
                      <li><Link to="/forsyth-county-therapy" className="text-blue-600 hover:underline">Forsyth County</Link></li>
                      <li><Link to="/clayton-county-therapy" className="text-blue-600 hover:underline">Clayton County</Link></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      South Georgia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/lowndes-county-therapy" className="text-blue-600 hover:underline">Lowndes County (Valdosta)</Link></li>
                      <li><Link to="/thomas-county-therapy" className="text-blue-600 hover:underline">Thomas County (Thomasville)</Link></li>
                      <li><Link to="/colquitt-county-therapy" className="text-blue-600 hover:underline">Colquitt County (Moultrie)</Link></li>
                      <li><Link to="/houston-county-therapy" className="text-blue-600 hover:underline">Houston County (Warner Robins)</Link></li>
                      <li><Link to="/muscogee-county-therapy" className="text-blue-600 hover:underline">Muscogee County (Columbus)</Link></li>
                      <li><Link to="/bibb-county-therapy" className="text-blue-600 hover:underline">Bibb County (Macon)</Link></li>
                      <li>Worth, Mitchell, Baker Counties</li>
                      <li>All rural South Georgia counties</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Coastal Georgia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/chatham-county-therapy" className="text-blue-600 hover:underline">Chatham County (Savannah)</Link></li>
                      <li><Link to="/glynn-county-therapy" className="text-blue-600 hover:underline">Glynn County (Brunswick)</Link></li>
                      <li><Link to="/camden-county-therapy" className="text-blue-600 hover:underline">Camden County (Kingsland)</Link></li>
                      <li>Liberty, McIntosh Counties</li>
                      <li>All coastal and barrier island areas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      North & East Georgia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><Link to="/hall-county-therapy" className="text-blue-600 hover:underline">Hall County (Gainesville)</Link></li>
                      <li><Link to="/richmond-county-therapy" className="text-blue-600 hover:underline">Richmond County (Augusta)</Link></li>
                      <li><Link to="/clarke-county-therapy" className="text-blue-600 hover:underline">Clarke County (Athens/UGA)</Link></li>
                      <li>Habersham, Rabun, Towns Counties</li>
                      <li>All mountain and rural counties</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mental Health Conditions */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Mental Health Conditions We Treat in Georgia</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <Link to="/anxiety-therapy-georgia" className="font-semibold text-primary hover:underline">
                      Anxiety Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <Link to="/depression-therapy-georgia" className="font-semibold text-primary hover:underline">
                      Depression Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <Link to="/ptsd-therapy-georgia" className="font-semibold text-primary hover:underline">
                      PTSD Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <Link to="/adhd-therapy-georgia" className="font-semibold text-primary hover:underline">
                      ADHD Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <Link to="/ocd-therapy-georgia" className="font-semibold text-primary hover:underline">
                      OCD Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <Link to="/bipolar-therapy-georgia" className="font-semibold text-primary hover:underline">
                      Bipolar Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                    <Link to="/couples-therapy-georgia" className="font-semibold text-primary hover:underline">
                      Couples Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <Link to="/teen-therapy-georgia" className="font-semibold text-primary hover:underline">
                      Teen Therapy
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Plus grief therapy, perinatal mood support, social anxiety, and LGBTQIA+ affirming care
                </p>
                <Button variant="outline" asChild>
                  <Link to="/mental-health-library">View All Conditions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How to Start */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">How to Start Therapy in Georgia</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Get Matched</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete our Georgia therapist matching form. We'll find the best fit for your needs and location.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Verify Insurance</h3>
                  <p className="text-muted-foreground text-sm">
                    We check your Georgia insurance benefits and explain your coverage at no cost.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Start Sessions</h3>
                  <p className="text-muted-foreground text-sm">
                    Begin therapy within 24-72 hours via video, phone, or secure messaging.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Start Your Georgia Mental Health Journey</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Georgia Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Georgia Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Georgia Crisis & Access Line:</strong> <a href="tel:1-800-715-4225" className="text-blue-600">1-800-715-4225</a>
                    </div>
                    <div>
                      <strong>Suicide & Crisis Lifeline:</strong> <a href="tel:988" className="text-blue-600">988</a>
                    </div>
                    <div>
                      <strong>Crisis Text Line:</strong> Text HOME to <a href="sms:741741" className="text-blue-600">741741</a>
                    </div>
                    <div>
                      <strong>Georgia Department of Behavioral Health:</strong> <a href="https://dbhdd.georgia.gov" className="text-blue-600" target="_blank" rel="noopener noreferrer">dbhdd.georgia.gov</a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Local Georgia Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>NAMI Georgia:</strong> <a href="https://namiga.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">namiga.org</a>
                    </div>
                    <div>
                      <strong>Georgia Warm Line:</strong> <a href="tel:1-888-945-1414" className="text-blue-600">1-888-945-1414</a>
                    </div>
                    <div>
                      <strong>211 Georgia:</strong> Dial <a href="tel:211" className="text-blue-600">211</a> for local resources
                    </div>
                    <div>
                      <strong>Rural Health Network:</strong> Support for rural Georgia counties
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GeorgiaTherapyHub;