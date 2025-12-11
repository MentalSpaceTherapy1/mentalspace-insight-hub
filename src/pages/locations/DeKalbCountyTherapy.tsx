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
  Heart, 
  Users, 
  Phone, 
  Video, 
  GraduationCap,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Building,
  Palette
} from 'lucide-react';
import { generateCountyBusinessSchema } from '@/utils/schemaGenerators';

const DeKalbCountyTherapy = () => {
  const countySchema = generateCountyBusinessSchema(
    "DeKalb",
    "Online therapy in DeKalb County, GA. Licensed therapists in Decatur, Brookhaven, Tucker, Stone Mountain. LGBTQIA+ affirming, creative arts therapy.",
    "https://chctherapy.com/dekalb-county-therapy"
  );

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in DeKalb County, GA | Decatur & Dunwoody Therapists"
        description="Online therapy in DeKalb County, GA. Licensed therapists in Decatur, Brookhaven, Tucker, Stone Mountain. LGBTQIA+ affirming, creative arts therapy."
        keywords="DeKalb County therapy, Decatur therapist, LGBTQIA therapy Georgia, creative arts therapy Atlanta, progressive therapy DeKalb"
        canonicalUrl="https://chctherapy.com/dekalb-county-therapy"
        ogTitle="Online Therapy in DeKalb County, GA | LGBTQIA+ & Arts Therapy"
        ogDescription="Progressive, affirming online therapy serving DeKalb County's diverse communities. LGBTQIA+ specialists and creative arts therapy available."
        structuredData={countySchema}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>DeKalb County Crisis:</strong> Call{" "}
            <a href="tel:1-800-715-4225" className="underline font-semibold">1-800-715-4225</a> (Georgia Crisis Line) or{" "}
            <a href="tel:404-294-3030" className="underline font-semibold">404-294-3030</a> (DeKalb Crisis & Access Line).
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                DeKalb County Licensed
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in DeKalb County, GA
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Progressive, affirming mental health care for DeKalb County's diverse and creative communities. Serving Decatur, Brookhaven, Tucker, Stone Mountain, and surrounding areas with inclusive, culturally sensitive therapy.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                LGBTQIA+ affirming therapists, creative arts therapy, and progressive approaches to mental health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your DeKalb Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check DeKalb Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Progressive & Inclusive Therapy */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Progressive Mental Health in DeKalb County</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Heart className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">LGBTQIA+ Affirming</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Specialized support for gender identity, sexuality, coming out, and LGBTQIA+ relationships
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Palette className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Creative Arts Therapy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Art, music, and expressive therapy approaches for healing and self-discovery
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Social Justice Focus</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                    Understanding of racial trauma, social activism stress, and community healing
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* DeKalb Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">DeKalb County Insurance & Medicaid</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Popular DeKalb Plans:</h3>
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
                          <span><strong>Kaiser Permanente Georgia</strong> - varies by plan</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span><strong>UnitedHealthcare</strong> - $0-45 copay</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">DeKalb Medicaid MCOs:</h3>
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
                      We verify all DeKalb County insurance benefits with LGBTQIA+ coverage details
                    </p>
                    <Button asChild>
                      <Link to="/insurance">Check Your DeKalb Insurance</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* DeKalb Cities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">DeKalb County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      Central DeKalb
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Decatur</li>
                      <li>Avondale Estates</li>
                      <li>Scottdale</li>
                      <li>North Decatur</li>
                      <li>Belvedere Park</li>
                      <li>Candler-McAfee</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      North DeKalb
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Brookhaven</li>
                      <li>Tucker</li>
                      <li>Dunwoody (DeKalb side)</li>
                      <li>Chamblee</li>
                      <li>Doraville</li>
                      <li>North Atlanta</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Building className="w-4 h-4" />
                      East & South DeKalb
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>Stone Mountain</li>
                      <li>Clarkston</li>
                      <li>Pine Lake</li>
                      <li>Lithonia</li>
                      <li>Redan</li>
                      <li>Ellenwood</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* DeKalb Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">DeKalb County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Identity & Self-Expression</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Gender identity exploration, coming out, artistic expression, and authentic self-discovery
                    </p>
                    <Link to="/lgbtqia-therapy-georgia" className="text-primary hover:underline">
                      → LGBTQIA+ Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Social Justice & Trauma</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Racial trauma, activism burnout, community healing, and social justice stress
                    </p>
                    <Link to="/ptsd-therapy-georgia" className="text-primary hover:underline">
                      → Trauma-Informed Therapy
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Creative Community</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p className="text-muted-foreground mb-3">
                      Artist mental health, creative blocks, performance anxiety, and arts community support
                    </p>
                    <Link to="/anxiety-therapy-georgia" className="text-primary hover:underline">
                      → Creative Anxiety Support
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* DeKalb Resources */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">DeKalb County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>DeKalb County Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>DeKalb Crisis & Access:</strong> <a href="tel:404-294-3030" className="text-blue-600">404-294-3030</a>
                    </div>
                    <div>
                      <strong>DeKalb County Board of Health:</strong> <a href="https://www.dekalbhealth.net" className="text-blue-600" target="_blank" rel="noopener noreferrer">Mental Health Services</a>
                    </div>
                    <div>
                      <strong>NAMI DeKalb:</strong> <a href="https://www.namidekalb.org" className="text-blue-600" target="_blank" rel="noopener noreferrer">namidekalb.org</a>
                    </div>
                    <div>
                      <strong>Georgia Equality:</strong> LGBTQIA+ resources and advocacy
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <strong>Georgia Crisis & Access:</strong> <a href="tel:1-800-715-4225" className="text-blue-600">1-800-715-4225</a>
                    </div>
                    <div>
                      <strong>211 DeKalb County:</strong> Dial <a href="tel:211" className="text-blue-600">211</a> for resources
                    </div>
                    <div>
                      <strong>LGBT Institute at Grady:</strong> Specialized LGBTQIA+ healthcare
                    </div>
                    <div>
                      <strong>DeKalb Community Foundation:</strong> Mental health grants & programs
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

export default DeKalbCountyTherapy;