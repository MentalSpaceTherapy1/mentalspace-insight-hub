import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, User, CheckCircle, X } from "lucide-react";

const GroupVsIndividualTherapy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Group Therapy vs Individual Therapy: Which is Right for You? | Georgia"
        description="Compare group therapy and individual therapy: learn the benefits, costs, effectiveness for different conditions, and how to choose the right therapy format for your needs."
        keywords="group therapy benefits, individual therapy vs group, therapy comparison, group counseling, therapy types Georgia"
        canonicalUrl="https://chctherapy.com/blog/group-therapy-vs-individual-therapy"
        ogTitle="Group Therapy vs Individual Therapy: Complete Comparison Guide"
        ogDescription="Understand the differences between group and individual therapy to make the best choice for your mental health journey."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Group Therapy vs Individual Therapy: Which is Right for You?",
          description: "Comprehensive comparison of group therapy and individual therapy formats.",
          author: {
            "@type": "Organization",
            name: "Coping and Healing Counseling"
          },
          publisher: {
            "@type": "Organization",
            name: "Coping and Healing Counseling",
            logo: {
              "@type": "ImageObject",
              url: "https://chctherapy.com/chc-logo.png"
            }
          },
          datePublished: "2025-01-22",
          dateModified: "2025-01-22"
        }}
      />
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Therapy Options</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Group vs Individual Therapy: Making the Right Choice
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understanding the pros, cons, costs, and effectiveness of each therapy format to help you make an informed decision.
              </p>
            </div>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding Your Options</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When seeking mental health treatment, one of the first decisions you'll face is whether to pursue individual therapy, group therapy, or a combination of both. Each format offers unique benefits and considerations, and understanding these differences can help you make the best choice for your specific needs and circumstances.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This comprehensive guide will help you understand what each therapy format involves, their respective benefits and drawbacks, how they compare in terms of cost and effectiveness, and guidance on choosing the right option for your situation.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">What is Individual Therapy?</h2>
                <div className="bg-secondary/10 p-6 rounded-lg mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">One-on-One Counseling</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Individual therapy involves private, one-on-one sessions between you and a licensed therapist. Sessions typically last 45-60 minutes and occur weekly, though frequency can vary based on need. The therapy is personalized entirely to your unique situation, goals, and pace of progress.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">Benefits of Individual Therapy</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Complete privacy:</strong> Your sessions are entirely confidential, making it easier to discuss sensitive topics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Personalized treatment:</strong> Every session is tailored specifically to your needs and goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Full therapist attention:</strong> You have your therapist's undivided focus for the entire session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Flexible pacing:</strong> Progress at your own speed without pressure from group dynamics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Deep exploration:</strong> Time to thoroughly explore complex personal issues and trauma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Scheduling flexibility:</strong> Easier to find times that work with your schedule</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">Drawbacks of Individual Therapy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Higher cost:</strong> Individual sessions are typically more expensive than group therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Limited perspectives:</strong> You only receive input from your therapist, not peers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>No peer support:</strong> You miss out on the connection and support that comes from group members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Isolation:</strong> Can feel isolating without realizing others share similar struggles</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">What is Group Therapy?</h2>
                <div className="bg-secondary/10 p-6 rounded-lg mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Shared Therapeutic Experience</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Group therapy involves a licensed therapist leading a group of typically 5-15 people who share similar concerns or goals. Sessions usually last 60-90 minutes and provide a supportive environment where members can share experiences, learn from one another, and practice new skills together.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">Benefits of Group Therapy</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Universal experience:</strong> Realize you're not alone in your struggles, reducing feelings of isolation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Peer support:</strong> Build connections with others who truly understand what you're going through</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Multiple perspectives:</strong> Gain insights and feedback from various viewpoints, not just your therapist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Social skills practice:</strong> Safe environment to practice communication and relationship skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Lower cost:</strong> Generally more affordable than individual therapy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Vicarious learning:</strong> Learn from others' experiences and strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Altruism:</strong> Helping others in the group can boost your own self-esteem and recovery</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">Drawbacks of Group Therapy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Less privacy:</strong> Sharing with multiple people, though still confidential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Limited individual attention:</strong> Therapist must divide time among all group members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Fixed schedule:</strong> Must attend at scheduled group times, less flexibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Group dynamics:</strong> Challenging personalities or conflicts can sometimes arise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Slower pacing:</strong> May need to wait your turn to share or address your concerns</span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Cost Comparison</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Individual Therapy Costs</h3>
                    <p className="text-muted-foreground mb-4">In Georgia, individual therapy sessions typically cost:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>$100-$200</strong> per session (self-pay)</li>
                      <li>• <strong>$20-$60</strong> copay with insurance</li>
                      <li>• <strong>$400-$800</strong> per month (weekly sessions)</li>
                    </ul>
                  </div>
                  
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Group Therapy Costs</h3>
                    <p className="text-muted-foreground mb-4">In Georgia, group therapy sessions typically cost:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>$40-$80</strong> per session (self-pay)</li>
                      <li>• <strong>$10-$30</strong> copay with insurance</li>
                      <li>• <strong>$160-$320</strong> per month (weekly sessions)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Insurance Coverage in Georgia</h3>
                  <p className="text-muted-foreground mb-3">
                    Most Georgia insurance plans cover both individual and group therapy, though coverage details vary:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Many plans limit the number of sessions per year</li>
                    <li>• Group therapy copays are typically lower than individual</li>
                    <li>• Some plans require pre-authorization for therapy services</li>
                    <li>• Coverage may depend on diagnosis and medical necessity</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Effectiveness for Different Conditions</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Research shows that both individual and group therapy can be highly effective, but certain conditions may respond better to one format:
                </p>

                <div className="space-y-6">
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Better for Individual Therapy</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Complex trauma or PTSD:</strong> Requires deep, personalized processing</li>
                      <li>• <strong>Personality disorders:</strong> Need for individualized treatment approach</li>
                      <li>• <strong>Severe depression:</strong> May benefit from more focused attention</li>
                      <li>• <strong>Highly personal issues:</strong> Relationship problems, sexual concerns</li>
                      <li>• <strong>Crisis situations:</strong> Immediate, intensive intervention needed</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Better for Group Therapy</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Substance use disorders:</strong> Peer support is crucial for recovery</li>
                      <li>• <strong>Social anxiety:</strong> Practice social skills in supportive environment</li>
                      <li>• <strong>Grief and loss:</strong> Connection with others experiencing similar loss</li>
                      <li>• <strong>Chronic illness management:</strong> Share coping strategies with peers</li>
                      <li>• <strong>Life transitions:</strong> Divorce, parenting, career changes</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Equally Effective for Both</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Depression:</strong> Both formats show significant benefits</li>
                      <li>• <strong>Anxiety disorders:</strong> Effective with either approach</li>
                      <li>• <strong>Eating disorders:</strong> Often benefits from combination of both</li>
                      <li>• <strong>Anger management:</strong> Can work well in either setting</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Decision-Making Flowchart</h2>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-6">Ask yourself these questions to help determine the best fit:</p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground mb-2">1. Do I feel comfortable sharing in a group setting?</p>
                      <p className="text-sm text-muted-foreground">• <strong>Yes:</strong> Group therapy may work well</p>
                      <p className="text-sm text-muted-foreground">• <strong>No:</strong> Consider starting with individual therapy</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground mb-2">2. Is my issue highly personal or stigmatized?</p>
                      <p className="text-sm text-muted-foreground">• <strong>Yes:</strong> Individual therapy offers more privacy</p>
                      <p className="text-sm text-muted-foreground">• <strong>No:</strong> Group therapy could provide valuable peer support</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground mb-2">3. What's my budget for therapy?</p>
                      <p className="text-sm text-muted-foreground">• <strong>Limited budget:</strong> Group therapy is more affordable</p>
                      <p className="text-sm text-muted-foreground">• <strong>More flexible budget:</strong> Individual therapy offers more personalization</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground mb-2">4. Do I need immediate, intensive support?</p>
                      <p className="text-sm text-muted-foreground">• <strong>Yes:</strong> Individual therapy provides focused attention</p>
                      <p className="text-sm text-muted-foreground">• <strong>No:</strong> Group therapy can provide ongoing support</p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground mb-2">5. Would I benefit from hearing others' experiences?</p>
                      <p className="text-sm text-muted-foreground">• <strong>Yes:</strong> Group therapy offers multiple perspectives</p>
                      <p className="text-sm text-muted-foreground">• <strong>Not sure:</strong> Individual therapy keeps focus on your experience</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">The Combination Approach</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Many people find that combining both individual and group therapy provides the most comprehensive treatment. This approach allows you to:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Address personal issues deeply in individual sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Practice social skills and receive peer support in group sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Benefit from both therapist focus and community connection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Process group experiences in individual therapy</span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Talk to your therapist about whether a combination approach might be right for you. Many treatment plans incorporate both formats at different stages of recovery.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Making Your Decision</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Remember, there's no universally "right" choice between group and individual therapy. The best option depends on your:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Personal preferences and comfort level</li>
                  <li>Specific mental health concerns</li>
                  <li>Financial situation and insurance coverage</li>
                  <li>Current life circumstances and availability</li>
                  <li>Treatment goals and desired outcomes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  At Coping and Healing Counseling, we offer both individual and group therapy options throughout Georgia. Our experienced therapists can help you determine which format—or combination of formats—will best support your mental health journey.
                </p>
              </section>

            </div>
          </div>
        </article>

        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Let's Find the Right Therapy Format for You
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a consultation to discuss your options and determine whether individual therapy, group therapy, or a combination is best for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/get-started">Schedule Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact-us">Ask Us Questions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/blog/benefits-online-therapy" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">Benefits of Online Therapy</h3>
                  <p className="text-muted-foreground text-sm">Explore teletherapy options for both individual and group formats.</p>
                </div>
              </Link>
              <Link to="/blog/therapy-cost-payment-options-guide" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">Therapy Cost Guide</h3>
                  <p className="text-muted-foreground text-sm">Understand therapy costs and payment options in Georgia.</p>
                </div>
              </Link>
              <Link to="/blog/finding-right-therapist-guide" className="group">
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary text-foreground">Finding the Right Therapist</h3>
                  <p className="text-muted-foreground text-sm">Learn how to choose a therapist who fits your needs.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default GroupVsIndividualTherapy;