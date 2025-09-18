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
  GraduationCap,
  BookOpen,
  Music
} from 'lucide-react';

const ClarkeCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Clarke County (Athens), GA | UGA Student & Family Support | CHC"
        description="Professional online therapy in Clarke County, Athens GA. Licensed therapists for UGA students, faculty, families. College stress, academic anxiety, transition support."
        keywords="Clarke County therapy, Athens therapy, UGA therapy, University of Georgia counseling, college student therapy, Athens GA mental health, academic stress therapy"
        canonicalUrl="https://chctherapy.com/clarke-county-therapy"
        ogTitle="Online Therapy in Clarke County (Athens), GA | UGA Student Support"
        ogDescription="Licensed online therapy in Clarke County, Athens. UGA student support, academic stress, family therapy, insurance accepted."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Clarke County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-706-542-2273" className="underline font-semibold">1-706-542-2273</a> (UGA Counseling Center) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Clarke County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Athens & Clarke County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for University of Georgia students, faculty, families, and all Athens residents. 
                Licensed Georgia therapists specializing in college life, academic stress, and transition challenges.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving UGA campus, downtown Athens, and all Clarke County communities with flexible scheduling for busy academic lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Clarke County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check UGA Student Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* University & Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Athens Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <GraduationCap className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>UGA Students & Graduate Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support designed for college life challenges, academic pressure, social anxiety, 
                      and the unique stressors of university life in Athens.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Academic performance anxiety</li>
                      <li>• Social anxiety & college adjustment</li>
                      <li>• Grad school stress & imposter syndrome</li>
                      <li>• Relationship issues & dating stress</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <BookOpen className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Faculty & Staff</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Professional support for UGA faculty, staff, and academic professionals dealing with work stress, 
                      research pressure, and academic career challenges.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Academic burnout & work-life balance</li>
                      <li>• Research stress & publication pressure</li>
                      <li>• Tenure anxiety & career transitions</li>
                      <li>• Conference & presentation anxiety</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Music className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Athens Creative Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for Athens' vibrant music and arts community, addressing the unique challenges 
                      of creative careers and artistic expression.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Performance anxiety & stage fright</li>
                      <li>• Creative blocks & artistic pressure</li>
                      <li>• Music industry stress</li>
                      <li>• Financial stress in creative careers</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clarke County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Clarke County Insurance & Student Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      UGA Student Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>UGA Student Health Insurance</strong> - $0-20 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Graduate Student Plans</strong> - Various coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>International Student Plans</strong> - Accepted</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Clarke County Insurance Plans
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
                  <Link to="/insurance">Verify Your Clarke County Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Clarke County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Clarke County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      UGA Campus Area
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>University of Georgia Campus</li>
                      <li>Five Points</li>
                      <li>Normaltown</li>
                      <li>Boulevard Historic District</li>
                      <li>Campus Housing Areas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Downtown Athens
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Downtown Historic District</li>
                      <li>Cobbham Historic District</li>
                      <li>Newtown</li>
                      <li>West Broad Historic District</li>
                      <li>Bloomfield</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Outlying Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Winterville</li>
                      <li>Commerce (partial)</li>
                      <li>Bogart</li>
                      <li>Watkinsville (partial)</li>
                      <li>All rural Clarke County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clarke County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Clarke County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      College Life & Academic Stress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized support for the unique challenges of college life, including academic pressure, 
                      social anxiety, and major life transitions common in the Athens university environment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Music className="w-5 h-5 text-primary" />
                      Creative Arts & Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health support for Athens' renowned music and arts community, addressing performance anxiety, 
                      creative blocks, and the unique stressors of artistic careers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clarke County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Clarke County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>UGA & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>UGA Counseling & Psychological Services:</strong>{" "}
                        <a href="tel:1-706-542-2273" className="text-blue-600 hover:underline">
                          1-706-542-2273
                        </a>
                      </li>
                      <li>
                        <strong>UGA Crisis Line (24/7):</strong>{" "}
                        <a href="tel:1-706-542-2273" className="text-blue-600 hover:underline">
                          1-706-542-2273
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>Athens Regional Medical Center:</strong>{" "}
                        <a href="tel:1-706-475-7000" className="text-blue-600 hover:underline">
                          1-706-475-7000
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
                        <strong>Clarke County Health Department:</strong>{" "}
                        <a href="tel:1-706-389-6200" className="text-blue-600 hover:underline">
                          1-706-389-6200
                        </a>
                      </li>
                      <li>
                        <strong>North Georgia Health District:</strong>{" "}
                        <a href="https://nghd.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          nghd.org
                        </a>
                      </li>
                      <li>
                        <strong>NAMI Athens:</strong>{" "}
                        <a href="https://namiathens.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          namiathens.org
                        </a>
                      </li>
                      <li>
                        <strong>Athens Community Council on Aging:</strong>{" "}
                        <a href="tel:1-706-549-4850" className="text-blue-600 hover:underline">
                          1-706-549-4850
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

export default ClarkeCountyTherapy;