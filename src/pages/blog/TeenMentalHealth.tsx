import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import teenTherapyHeroImage from "@/assets/teen-therapy-hero.jpg";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const TeenMentalHealth = () => {
  const articleSchema = generateArticleSchema(
    "Teen Mental Health: Supporting Adolescents Through Challenging Times",
    "Understanding the unique mental health challenges teens face and how therapy can provide crucial support during adolescence.",
    "https://chctherapy.com/blog/teen-mental-health",
    "2024-12-10",
    "2024-12-10",
    "https://chctherapy.com/therapy-hero-og.jpg"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="Teen Mental Health: Supporting Adolescents Through Challenging Times"
        description="Understanding the unique mental health challenges teens face and how therapy can provide crucial support during adolescence."
        keywords="teen mental health, adolescent therapy, teenage depression, teen anxiety, youth counseling"
        canonicalUrl="https://chctherapy.com/blog/teen-mental-health"
        structuredData={articleSchema}
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
                Teen Mental Health: Supporting Adolescents Through Challenging Times
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 10, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  6 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={teenTherapyHeroImage}
                  alt="Teen therapy session - supporting adolescent mental health"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Adolescence is a time of significant physical, emotional, and social changes. While these changes 
                are a normal part of development, they can also create unique mental health challenges that require 
                understanding, support, and sometimes professional intervention.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Understanding Teen Mental Health</h2>
              <p className="mb-6">
                The teenage years bring rapid brain development, hormonal changes, and new social pressures. 
                These factors can make teens more vulnerable to mental health issues, but with proper support, 
                they can also develop resilience and coping skills that last a lifetime.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common Mental Health Challenges for Teens</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Anxiety Disorders</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Social anxiety about peer acceptance and performance</li>
                <li>Academic pressure and test anxiety</li>
                <li>Generalized worry about the future</li>
                <li>Panic attacks in response to stress</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Depression</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Persistent sadness or irritability</li>
                <li>Loss of interest in activities</li>
                <li>Changes in sleep and appetite</li>
                <li>Feelings of worthlessness or hopelessness</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Behavioral Issues</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Risk-taking behaviors</li>
                <li>Substance experimentation</li>
                <li>Self-harm or suicidal thoughts</li>
                <li>Eating disorders</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Warning Signs to Watch For</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Emotional Changes</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Extreme mood swings or prolonged sadness</li>
                <li>Increased irritability or anger</li>
                <li>Loss of interest in friends and activities</li>
                <li>Expressing feelings of hopelessness</li>
                <li>Excessive worry or fear</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Behavioral Changes</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Significant changes in academic performance</li>
                <li>Withdrawal from family and friends</li>
                <li>Changes in sleep patterns or appetite</li>
                <li>Increased conflict with authority figures</li>
                <li>Risk-taking or self-destructive behaviors</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How Therapy Helps Teens</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Providing a Safe Space</h3>
              <p className="mb-4">
                Therapy offers teens a confidential environment where they can express themselves without 
                judgment and explore their thoughts and feelings openly.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Developing Coping Skills</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Stress management:</strong> Learning healthy ways to handle academic and social pressure</li>
                <li><strong>Emotion regulation:</strong> Understanding and managing intense emotions</li>
                <li><strong>Problem-solving:</strong> Developing skills to address challenges independently</li>
                <li><strong>Communication:</strong> Improving relationships with family and peers</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Building Self-Esteem</h3>
              <p className="mb-6">
                Therapy helps teens develop a positive self-image and understand their worth beyond external 
                validation from peers or academic achievements.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Effective Therapy Approaches for Teens</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cognitive Behavioral Therapy (CBT)</h3>
              <p className="mb-4">
                Helps teens identify and change negative thought patterns and behaviors that contribute to 
                their mental health challenges.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Dialectical Behavior Therapy (DBT)</h3>
              <p className="mb-4">
                Teaches mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness skills.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Family Therapy</h3>
              <p className="mb-4">
                Involves family members to improve communication and address systemic issues that may 
                be affecting the teen's mental health.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Supporting Your Teen</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">For Parents and Caregivers:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Listen without judgment and validate their feelings</li>
                <li>Maintain open, honest communication</li>
                <li>Be patient with mood swings and behavioral changes</li>
                <li>Encourage professional help when needed</li>
                <li>Model healthy coping strategies</li>
                <li>Stay involved while respecting their growing independence</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
              <p className="mb-6">
                Consider professional support if your teen experiences:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Persistent symptoms lasting more than two weeks</li>
                <li>Significant impairment in school or social functioning</li>
                <li>Thoughts of self-harm or suicide</li>
                <li>Substance abuse</li>
                <li>Extreme behavioral changes</li>
                <li>Family relationships becoming severely strained</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Importance of Early Intervention</h2>
              <p className="mb-6">
                Early intervention in teen mental health can prevent more serious problems later in life. 
                With proper support, teens can develop resilience, healthy coping mechanisms, and a strong 
                foundation for adult mental wellness.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Ready to Start Your Mental Health Journey?
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  If you're concerned about a teenager's mental health, don't wait. Early intervention and 
                  professional support can make a significant difference in their well-being and future success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Find a Teen Therapist</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/teen-therapy">Learn About Teen Therapy</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free consultation • Teen-specialized therapists • Family-friendly approach
                </p>
              </div>

              {/* Related Resources Section */}
              <div className="mt-12 relative">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl blur-3xl -z-10"></div>
                
                <div className="relative bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                      <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                      <span className="text-sm font-medium text-primary">Explore More</span>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                      Related Resources
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      Support teen mental health with these carefully curated resources
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Related Articles */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">Related Articles</h3>
                        </div>
                        <div className="space-y-3">
                          <Link 
                            to="/blog/understanding-anxiety" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              Understanding Anxiety: Signs, Symptoms, and Treatment Options
                            </span>
                          </Link>
                          <Link 
                            to="/blog/depression-adults" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              Depression in Adults: Breaking the Stigma and Finding Help
                            </span>
                          </Link>
                          <Link 
                            to="/blog/benefits-online-therapy" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">
                              The Benefits of Online Therapy: Accessible Mental Health Care
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Mental Health Library */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="font-semibold text-lg text-purple-600 dark:text-purple-400">Mental Health Library</h3>
                        </div>
                        <div className="space-y-3">
                          <Link 
                            to="/teen-therapy" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Teen Therapy Services
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-library/anxiety" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Anxiety Disorders Treatment
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-library/depression" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">
                              Depression Treatment Options
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Free Mental Health Tests */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-card border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-300/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                            <ClipboardList className="h-5 w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="font-semibold text-lg text-green-600 dark:text-green-400">Free Mental Health Tests</h3>
                        </div>
                        <div className="space-y-3">
                          <Link 
                            to="/mental-health-tests" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Complete Mental Health Assessment
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-tests#anxiety" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Teen Anxiety Assessment
                            </span>
                          </Link>
                          <Link 
                            to="/mental-health-tests#depression" 
                            className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">
                              Teen Depression Screening
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 text-center">
                    <Link to="/therapist-matching">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                        <Star className="h-4 w-4" />
                        <span>Start Your Journey Today</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeenMentalHealth;