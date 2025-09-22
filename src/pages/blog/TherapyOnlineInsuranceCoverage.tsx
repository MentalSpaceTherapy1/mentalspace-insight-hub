import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, CheckCircle, Shield, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import onlineTherapyHeroImage from "@/assets/online-therapy-hero.jpg";

const TherapyOnlineInsuranceCoverage = () => {
  const insuranceProviders = [
    { name: "CareSource", copay: "$0-$30", features: ["Zero-cost visits for most members", "Same-day appointments"] },
    { name: "Amerigroup", copay: "$0-$30", features: ["No referrals needed", "Integrated care coordination"] },
    { name: "Peach State Health Plan", copay: "$0-$40", features: ["Flexible copay options", "Fast-track authorization"] },
    { name: "Optum", copay: "$0-$30", features: ["Digital health tools", "24/7 crisis support"] },
    { name: "Blue Cross Blue Shield", copay: "$30-$40", features: ["Comprehensive coverage", "Extended session limits"] },
    { name: "Aetna Better Health", copay: "$0-$30", features: ["Generous session limits", "Multilingual support"] },
    { name: "Cigna", copay: "$30-$40", features: ["Coordinated medical care", "Detailed progress reporting"] },
    { name: "Alliant Health Plans", copay: "$0-$30", features: ["Community-focused care", "Cultural sensitivity"] },
    { name: "Humana", copay: "$0-$30", features: ["Age-appropriate programs", "Medicare coordination"] }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Online Therapy Covered by Insurance: Complete Guide to Affordable Mental Health Care",
    "description": "Comprehensive guide to getting online therapy covered by insurance. Learn about coverage options, accepted providers, and how to start therapy with Coping and Healing Counseling.",
    "author": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling",
      "logo": {
        "@type": "ImageObject",
        "url": "https://your-domain.com/chc-logo.png"
      }
    },
    "datePublished": "2025-09-21",
    "dateModified": "2025-09-21",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://your-domain.com/blog/therapy-online-insurance-coverage"
    },
    "image": "https://your-domain.com" + onlineTherapyHeroImage
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="Online Therapy Covered by Insurance: Complete Guide 2024 | Coping and Healing Counseling"
        description="Get online therapy covered by insurance with 9 major providers including CareSource, Aetna, BCBS, and more. Start affordable mental health care today with licensed therapists."
        keywords="online therapy insurance coverage, teletherapy insurance, mental health insurance, therapy copay, CareSource therapy, Aetna therapy, Blue Cross therapy, affordable online counseling"
        canonicalUrl="https://your-domain.com/blog/therapy-online-insurance-coverage"
        ogTitle="Online Therapy Covered by Insurance: Complete Guide 2024"
        ogDescription="Get online therapy covered by 9+ insurance providers. Low copays, no referrals needed. Start mental health care today with Coping and Healing Counseling."
        ogImage={onlineTherapyHeroImage}
        structuredData={structuredData}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </nav>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Online Therapy Covered by Insurance: Your Complete Guide to Affordable Mental Health Care
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  September 21, 2025
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  12 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={onlineTherapyHeroImage}
                  alt="Online therapy session covered by insurance - affordable mental health care"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Getting quality mental health care shouldn't break the bank. With online therapy now widely covered by insurance, 
                professional mental health support is more accessible and affordable than ever. This comprehensive guide covers 
                everything you need to know about insurance coverage for online therapy, including which providers we accept 
                and how to get started.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
                  Quick Answer: Yes, Online Therapy is Covered by Insurance
                </h2>
                <p className="mb-0">
                  Most major insurance plans now cover online therapy sessions at the same rate as in-person visits. 
                  At <strong>Coping and Healing Counseling</strong>, we accept 9+ major insurance providers with copays 
                  as low as $0 per session.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Understanding Online Therapy Insurance Coverage</h2>
              
              <p className="mb-6">
                The <a href="https://www.cms.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Centers for Medicare & Medicaid Services (CMS)</a> and most state insurance regulations now require parity between telehealth and in-person mental health services. This means your insurance coverage for online therapy should be identical to traditional therapy sessions.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What's Typically Covered:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Individual therapy sessions via video or phone</li>
                <li>Couples and family therapy online</li>
                <li>Group therapy sessions</li>
                <li>Mental health assessments and evaluations</li>
                <li>Crisis intervention and emergency consultations</li>
                <li>Ongoing treatment for diagnosed mental health conditions</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Insurance Providers We Accept at Coping and Healing Counseling</h2>
              
              <p className="mb-6">
                We're proud to be in-network with Georgia's leading insurance providers, making quality mental health care 
                accessible to thousands of families across the state. Here's a comprehensive breakdown of our accepted insurance plans:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {insuranceProviders.map((provider, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-primary">{provider.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">Copay: {provider.copay} per session</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {provider.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">Don't See Your Insurance?</h3>
                <p className="mb-3">
                  We work with additional providers not listed here and are constantly expanding our network. 
                  Many out-of-network benefits can still provide substantial coverage for your therapy sessions.
                </p>
                <p className="font-medium">Contact us for a free benefits verification to explore your options.</p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How to Verify Your Online Therapy Benefits</h2>
              
              <p className="mb-6">
                Before starting therapy, it's important to understand your specific coverage. According to the <a href="https://www.nami.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">National Alliance on Mental Illness (NAMI)</a>, 
                knowing your benefits helps avoid unexpected costs and ensures continuous care.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key Questions to Ask Your Insurance:</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Is telehealth/online therapy covered under my plan?</li>
                <li>What is my copay or coinsurance for mental health sessions?</li>
                <li>Do I need a referral from my primary care physician?</li>
                <li>How many sessions are covered per year?</li>
                <li>Is there a deductible I need to meet first?</li>
                <li>Are there any pre-authorization requirements?</li>
              </ol>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  We Handle the Verification for You
                </h3>
                <p>
                  At Coping and Healing Counseling, our administrative team will verify your benefits before your first session, 
                  so you know exactly what to expect. We'll also handle all the insurance paperwork and claims processing.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Science Behind Online Therapy Effectiveness</h2>
              
              <p className="mb-6">
                Research from the <a href="https://www.apa.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">American Psychological Association (APA)</a> consistently shows that online therapy 
                is as effective as in-person treatment for most mental health conditions. A comprehensive study published in 
                the Journal of Medical Internet Research found that online cognitive behavioral therapy showed equivalent 
                outcomes to face-to-face therapy for depression and anxiety disorders.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Conditions Successfully Treated Online:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="list-disc pl-6 space-y-1">
                  <li>Depression and mood disorders</li>
                  <li>Anxiety and panic disorders</li>
                  <li>Post-traumatic stress disorder (PTSD)</li>
                  <li>Obsessive-compulsive disorder (OCD)</li>
                  <li>Eating disorders</li>
                </ul>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Substance use disorders</li>
                  <li>Relationship and marital issues</li>
                  <li>Grief and loss counseling</li>
                  <li>ADHD and attention disorders</li>
                  <li>Bipolar disorder management</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Getting Started: Your Path to Online Therapy</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Step 1: Get Matched</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Complete our brief questionnaire to be matched with a licensed therapist who specializes in your needs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Step 2: Verify Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We'll verify your insurance coverage and explain your benefits, copays, and any requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Step 3: Start Therapy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Schedule your first session at a time that works for you, from the comfort of your own home.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Choose Coping and Healing Counseling?</h2>
              
              <p className="mb-6">
                With over 500+ successful therapy relationships and a 98% client satisfaction rate, Coping and Healing Counseling 
                has established itself as Georgia's premier online therapy provider. Our approach combines evidence-based treatments 
                with personalized care that fits your unique needs and schedule.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What Sets Us Apart:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Licensed Georgia Therapists:</strong> All our therapists are fully licensed and trained in online therapy best practices</li>
                <li><strong>Flexible Scheduling:</strong> Evening and weekend appointments available to fit your life</li>
                <li><strong>Insurance Expertise:</strong> We handle all insurance paperwork and maximize your benefits</li>
                <li><strong>Secure Platform:</strong> HIPAA-compliant technology ensures your privacy and confidentiality</li>
                <li><strong>Comprehensive Care:</strong> Individual, couples, family, and teen therapy services</li>
                <li><strong>Crisis Support:</strong> 24/7 emergency support for existing clients</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Maximizing Your Insurance Benefits</h2>
              
              <p className="mb-6">
                The <a href="https://www.samhsa.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Substance Abuse and Mental Health Services Administration (SAMHSA)</a> 
                recommends these strategies to get the most from your mental health insurance coverage:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Start therapy early - don't wait for a crisis</li>
                <li>Attend sessions regularly for better outcomes and insurance approval</li>
                <li>Keep detailed records of your sessions and progress</li>
                <li>Understand your annual session limits and plan accordingly</li>
                <li>Use in-network providers whenever possible</li>
                <li>Consider utilizing your Employee Assistance Program (EAP) if available</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common Insurance Coverage Questions</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Q: Is online therapy really as effective as in-person therapy?</h3>
                  <p className="text-muted-foreground">
                    A: Yes, extensive research shows online therapy is equally effective for most mental health conditions. 
                    The key is working with licensed professionals who are trained in telehealth delivery.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Q: Will my insurance cover online therapy the same as office visits?</h3>
                  <p className="text-muted-foreground">
                    A: Most insurance plans now provide equal coverage for telehealth and in-person services due to 
                    federal parity laws. Your copay and benefits should be identical.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Q: What if I need to switch from online to in-person therapy?</h3>
                  <p className="text-muted-foreground">
                    A: We offer flexible options and can help coordinate in-person referrals if needed. Your insurance 
                    coverage will remain the same regardless of the format.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Q: Are there any hidden costs with online therapy?</h3>
                  <p className="text-muted-foreground">
                    A: No, we believe in transparent pricing. We'll verify your exact copay before your first session, 
                    and there are no additional technology or platform fees.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Take the First Step Today</h2>
              
              <p className="mb-6">
                Don't let cost concerns prevent you from getting the mental health support you deserve. With comprehensive 
                insurance coverage and low copays, professional therapy is more affordable than you might think. Our team 
                at Coping and Healing Counseling is here to guide you through the process and ensure you get the maximum 
                benefit from your insurance coverage.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Ready to Start Your Mental Health Journey?
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  Get matched with a licensed therapist today and take advantage of your insurance benefits. 
                  Most clients pay $30 or less per session.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Get Matched with a Therapist</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/insurance">Check Insurance Coverage</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free insurance verification • No commitment required • Licensed therapists only
                </p>
              </div>

              {/* Related Resources Section */}
              <Card className="mt-12">
                <CardHeader>
                  <CardTitle className="text-2xl">Related Resources</CardTitle>
                  <p className="text-muted-foreground">
                    Explore more helpful content about mental health and therapy options.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Related Articles */}
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Related Articles</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            to="/blog/benefits-online-therapy" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            The Benefits of Online Therapy: Accessible Mental Health Care
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/blog/understanding-anxiety" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Understanding Anxiety: Signs, Symptoms, and Treatment Options
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/blog/depression-adults" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Depression in Adults: Breaking the Stigma and Finding Help
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/blog/couples-therapy-communication" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Couples Therapy: Strengthening Relationships Through Communication
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Mental Health Library */}
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Mental Health Library</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            to="/conditions/anxiety" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Anxiety Disorders Treatment
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/conditions/depression" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Depression Treatment Options
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/conditions/ptsd" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            PTSD and Trauma Recovery
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/conditions/bipolar-disorder" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Bipolar Disorder Management
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/couples-therapy" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Couples Therapy Services
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Free Mental Health Tests */}
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Free Mental Health Tests</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link 
                            to="/mental-health-tests" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Complete Mental Health Assessment
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/mental-health-tests#anxiety" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Anxiety Assessment Quiz
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/mental-health-tests#depression" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Depression Screening Test
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/mental-health-tests#ptsd" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            PTSD Symptom Checker
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/mental-health-tests#wellbeing" 
                            className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                          >
                            Overall Wellbeing Assessment
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Sources and Additional Resources:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <a href="https://www.cms.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Centers for Medicare & Medicaid Services (CMS)</a> - Telehealth Policy Guidelines</li>
                  <li>• <a href="https://www.apa.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">American Psychological Association</a> - Guidelines for the Practice of Telepsychology</li>
                  <li>• <a href="https://www.nami.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">National Alliance on Mental Illness (NAMI)</a> - Insurance and Mental Health Coverage</li>
                  <li>• <a href="https://www.samhsa.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SAMHSA</a> - Mental Health Insurance Coverage Guidelines</li>
                  <li>• Journal of Medical Internet Research - Effectiveness of Internet-Based Cognitive Behavioral Therapy</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TherapyOnlineInsuranceCoverage;