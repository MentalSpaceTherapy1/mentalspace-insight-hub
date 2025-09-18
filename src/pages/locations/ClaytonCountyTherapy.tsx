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
  Plane,
  Home,
  Building2
} from 'lucide-react';

const ClaytonCountyTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Online Therapy in Clayton County (Jonesboro), GA | Diverse Community Support | CHC"
        description="Professional online therapy in Clayton County, Jonesboro GA. Licensed therapists for diverse families, airport workers, suburban communities. Cultural sensitivity, family support."
        keywords="Clayton County therapy, Jonesboro therapy, Forest Park therapy, diverse community therapy, airport worker therapy, Clayton County mental health"
        canonicalUrl="https://chctherapy.com/clayton-county-therapy"
        ogTitle="Online Therapy in Clayton County (Jonesboro), GA | Diverse Community Support"
        ogDescription="Licensed online therapy in Clayton County, Jonesboro. Diverse community support, cultural sensitivity, airport worker wellness."
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Crisis Banner */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 rounded-none border-b">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Clayton County Crisis Support:</strong> If you're in crisis, call{" "}
            <a href="tel:1-770-996-4357" className="underline font-semibold">1-770-996-4357</a> (Clayton County Crisis Line) or{" "}
            <a href="tel:988" className="underline font-semibold">988</a> (Suicide & Crisis Lifeline)
          </AlertDescription>
        </Alert>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Clayton County, Georgia
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Online Therapy in Jonesboro & Clayton County
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                Professional mental health care for Clayton County's diverse communities and hardworking families. 
                Licensed Georgia therapists providing culturally sensitive support for all backgrounds and ethnicities.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Jonesboro, Forest Park, Morrow, and all Clayton County communities with affordable, accessible mental health care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/therapist-matching">Find Your Clayton County Therapist</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6">
                  <Link to="/get-started">Check Diverse Insurance Options</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Diverse Community Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Specialized Support for Diverse Communities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Users className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Culturally Diverse Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health support that honors Clayton County's rich cultural diversity, with therapists who understand 
                      various cultural backgrounds, immigration stress, and multicultural family dynamics.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Cultural identity & belonging issues</li>
                      <li>• Immigration & acculturation stress</li>
                      <li>• Intergenerational family conflicts</li>
                      <li>• Language barrier anxiety</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Plane className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Airport & Transportation Workers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Support for Clayton County's significant population of Hartsfield-Jackson Airport employees, 
                      transportation workers, and logistics professionals dealing with shift work and job stress.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Shift work sleep disorders</li>
                      <li>• Job security anxiety</li>
                      <li>• Workplace safety stress</li>
                      <li>• Travel industry pressures</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Building2 className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>Working Class & Service Families</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mental health care for Clayton County's hardworking families in service industries, retail, 
                      and essential work, addressing economic stress and work-life balance challenges.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Financial stress & job insecurity</li>
                      <li>• Multiple job management</li>
                      <li>• Essential worker burnout</li>
                      <li>• Healthcare access concerns</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clayton County Insurance Coverage */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Clayton County Insurance & Medicaid Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-primary" />
                      Medicaid & Low-Income Plans
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>CareSource</strong> - $0 copay Medicaid MCO</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Peach State Health Plan</strong> - $0 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Amerigroup</strong> - $0 copay coverage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Sliding Scale Options</strong> - Income-based pricing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Clayton County Insurance Plans
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
                        <span><strong>Kaiser Permanente</strong> - $10-30 copay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Humana</strong> - $0-40 copay</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/insurance">Verify Your Clayton County Insurance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Clayton County Areas Served */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Clayton County Communities We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Central Clayton
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Jonesboro</li>
                      <li>Forest Park</li>
                      <li>Morrow</li>
                      <li>Lake City</li>
                      <li>Riverdale</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      Airport Area
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>College Park</li>
                      <li>Hapeville</li>
                      <li>Airport corridor</li>
                      <li>East Point (partial)</li>
                      <li>Aviation communities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      South Clayton
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>Lovejoy</li>
                      <li>Hampton</li>
                      <li>Ellenwood</li>
                      <li>Rex</li>
                      <li>All rural Clayton County</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clayton County Mental Health Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Clayton County Mental Health Specialties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Cultural Diversity & Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized support for Clayton County's multicultural community, addressing cultural identity challenges, 
                      immigration stress, and helping families navigate between different cultural values and American life.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Working Class Family Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mental health care addressing the unique stressors of working-class families, including financial stress, 
                      multiple job management, healthcare access concerns, and maintaining family stability on limited resources.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Clayton County Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Clayton County Mental Health Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Crisis & Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Clayton County Crisis Line:</strong>{" "}
                        <a href="tel:1-770-996-4357" className="text-blue-600 hover:underline">
                          1-770-996-4357
                        </a>
                      </li>
                      <li>
                        <strong>National Suicide Prevention Lifeline:</strong>{" "}
                        <a href="tel:988" className="text-blue-600 hover:underline">
                          988
                        </a>
                      </li>
                      <li>
                        <strong>Southern Regional Medical Center:</strong>{" "}
                        <a href="tel:1-770-991-8000" className="text-blue-600 hover:underline">
                          1-770-991-8000
                        </a>
                      </li>
                      <li>
                        <strong>Piedmont Henry Hospital:</strong>{" "}
                        <a href="tel:1-678-604-1000" className="text-blue-600 hover:underline">
                          1-678-604-1000
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
                        <strong>Clayton County Health Department:</strong>{" "}
                        <a href="tel:1-770-339-4260" className="text-blue-600 hover:underline">
                          1-770-339-4260
                        </a>
                      </li>
                      <li>
                        <strong>District 3 Public Health:</strong>{" "}
                        <a href="https://dph.georgia.gov/locations/district-3" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          dph.georgia.gov/district-3
                        </a>
                      </li>
                      <li>
                        <strong>NAMI Clayton County:</strong>{" "}
                        <a href="https://namiclayton.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          namiclayton.org
                        </a>
                      </li>
                      <li>
                        <strong>Clayton County Community Services:</strong>{" "}
                        <a href="tel:1-770-477-3631" className="text-blue-600 hover:underline">
                          1-770-477-3631
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

export default ClaytonCountyTherapy;