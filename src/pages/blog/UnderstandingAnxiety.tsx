import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, BookOpen, Brain, ClipboardList, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import anxietyPersonImage from "@/assets/anxiety-person.jpg";

const UnderstandingAnxiety = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="Understanding Anxiety: Signs, Symptoms, and Treatment Options"
        description="Learn about the different types of anxiety disorders and evidence-based treatment approaches that can help you manage anxiety effectively."
        keywords="anxiety disorders, anxiety symptoms, anxiety treatment, mental health, therapy"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </nav>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Understanding Anxiety: Signs, Symptoms, and Treatment Options
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 20, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  8 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={anxietyPersonImage}
                  alt="Person dealing with anxiety - understanding mental health"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Anxiety is one of the most common mental health conditions, affecting millions of people worldwide. 
                Understanding the signs, symptoms, and available treatment options is the first step toward managing 
                anxiety effectively and reclaiming your quality of life.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What is Anxiety?</h2>
              <p className="mb-6">
                Anxiety is a natural response to stress, but when it becomes overwhelming or persistent, it can 
                interfere with daily activities and overall well-being. Anxiety disorders are characterized by 
                excessive worry, fear, or nervousness that is difficult to control.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common Types of Anxiety Disorders</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Generalized Anxiety Disorder (GAD):</strong> Persistent, excessive worry about various aspects of life</li>
                <li><strong>Panic Disorder:</strong> Recurrent panic attacks with intense fear and physical symptoms</li>
                <li><strong>Social Anxiety Disorder:</strong> Intense fear of social situations and judgment from others</li>
                <li><strong>Specific Phobias:</strong> Irrational fear of specific objects or situations</li>
                <li><strong>Agoraphobia:</strong> Fear of being in situations where escape might be difficult</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Signs and Symptoms</h2>
              <p className="mb-4">Anxiety can manifest in various ways, including:</p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Physical Symptoms:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Rapid heartbeat or palpitations</li>
                <li>Sweating or trembling</li>
                <li>Shortness of breath</li>
                <li>Muscle tension</li>
                <li>Headaches or dizziness</li>
                <li>Gastrointestinal issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Emotional and Behavioral Symptoms:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Persistent worry or fear</li>
                <li>Restlessness or feeling on edge</li>
                <li>Difficulty concentrating</li>
                <li>Irritability</li>
                <li>Sleep disturbances</li>
                <li>Avoidance of anxiety-triggering situations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Evidence-Based Treatment Options</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Therapy</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps identify and change negative thought patterns</li>
                <li><strong>Exposure Therapy:</strong> Gradual exposure to anxiety-triggering situations in a controlled environment</li>
                <li><strong>Acceptance and Commitment Therapy (ACT):</strong> Focuses on accepting anxiety while committing to valued actions</li>
                <li><strong>Mindfulness-Based Therapies:</strong> Incorporate meditation and mindfulness practices</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Self-Care Strategies</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Regular exercise and physical activity</li>
                <li>Proper sleep hygiene</li>
                <li>Stress management techniques</li>
                <li>Limiting caffeine and alcohol</li>
                <li>Building a strong support network</li>
                <li>Practicing relaxation techniques</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
              <p className="mb-6">
                If anxiety is interfering with your daily life, relationships, work, or overall well-being, 
                it's important to seek professional help. A mental health professional can provide proper 
                diagnosis and develop a personalized treatment plan that works for you.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mt-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  Ready to Start Your Mental Health Journey?
                </h3>
                <p className="text-center mb-6 text-muted-foreground">
                  Remember, seeking help for anxiety is a sign of strength, not weakness. With proper 
                  treatment and support, anxiety is highly manageable, and you can regain control of your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to="/therapist-matching">Request an Appointment</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/mental-health-tests">Take an Anxiety Assessment</Link>
                  </Button>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Free consultation • Licensed therapists • Confidential assessments
                </p>
              </div>

              {/* Related Resources Section */}
              <div className="mt-12 relative">
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
                      Continue your anxiety management journey with these carefully curated resources
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
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
                          <Link to="/blog/depression-adults" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">Depression in Adults: Breaking the Stigma</span>
                          </Link>
                          <Link to="/blog/benefits-online-therapy" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 font-medium">The Benefits of Online Therapy</span>
                          </Link>
                        </div>
                      </div>
                    </div>
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
                          <Link to="/mental-health-library/anxiety" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-purple-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400 font-medium">Anxiety Disorders Treatment</span>
                          </Link>
                        </div>
                      </div>
                    </div>
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
                          <Link to="/mental-health-tests#anxiety" className="group/link flex items-start gap-2 p-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                            <ArrowRight className="h-4 w-4 text-green-500 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                            <span className="text-sm text-muted-foreground group-hover/link:text-green-600 dark:group-hover/link:text-green-400 font-medium">Anxiety Assessment Quiz</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default UnderstandingAnxiety;