import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Shield, Users, AlertTriangle, Clock, Eye, MessageCircle } from "lucide-react";

const RebuildingTrustAfterInfidelity = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Rebuilding Trust After Infidelity: A Guide for Couples",
    "description": "Can your relationship survive infidelity? Learn how couples rebuild trust after an affair, what the recovery process looks like, and how therapy can help.",
    "author": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Coping and Healing Counseling",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chctherapy.com/chc-logo.png"
      }
    },
    "datePublished": "2024-01-20",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chctherapy.com/blog/rebuilding-trust-after-infidelity"
    },
    "keywords": "rebuilding trust after infidelity, trust after cheating, affair recovery, surviving infidelity, couples therapy infidelity"
  };

  return (
    <>
      <SEOHead
        title="Rebuilding Trust After Infidelity: A Guide for Couples | CHC"
        description="Can your relationship survive infidelity? Learn how couples rebuild trust after an affair, what the recovery process looks like, and how therapy can help."
        canonicalUrl="https://chctherapy.com/blog/rebuilding-trust-after-infidelity"
        keywords="rebuilding trust after infidelity, trust after cheating, affair recovery, surviving infidelity, couples therapy infidelity"
        ogTitle="Rebuilding Trust After Infidelity: A Guide for Couples"
        ogDescription="Can your relationship survive infidelity? Learn how couples rebuild trust after an affair and how therapy can help."
        ogType="article"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li>/</li>
              <li className="text-foreground">Rebuilding Trust After Infidelity</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Relationships
              </span>
              <span className="text-muted-foreground text-sm">15 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rebuilding Trust After Infidelity: A Guide for Couples
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discovering that your partner has been unfaithful is one of the most painful experiences a person can face. The betrayal shakes the very foundation of your relationship, leaving you questioning everything—your partner, your history together, and yourself.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If you're reading this, you may be wondering: Can trust be rebuilt? Is it even possible to recover from this?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The answer is yes—but it requires commitment, honesty, and usually professional help. Many couples not only survive infidelity but eventually build stronger, more honest relationships than they had before.
            </p>

            {/* Immediate Aftermath */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                The Immediate Aftermath
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The period immediately following disclosure or discovery of an affair is often chaotic and overwhelming.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">For the Betrayed Partner</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Shock, disbelief, and emotional flooding</li>
                    <li>• Obsessive thoughts and intrusive images</li>
                    <li>• Wanting to know everything—and nothing</li>
                    <li>• Rage, grief, and profound sadness</li>
                    <li>• Physical symptoms (nausea, sleep problems, panic)</li>
                    <li>• Questioning reality and your own judgment</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">For the Unfaithful Partner</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Relief that the secret is out—mixed with fear</li>
                    <li>• Guilt and shame</li>
                    <li>• Defensiveness or minimization</li>
                    <li>• Desire to "move on" quickly</li>
                    <li>• Confusion about their own feelings</li>
                    <li>• Fear of losing the relationship</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">What to Do in the Immediate Aftermath</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Don't make permanent decisions immediately.</strong> The intense emotions aren't the best foundation for life-altering choices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Create some structure.</strong> Establish basic agreements about communication and space while you process.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Get support.</strong> Individual therapy for both partners, and eventually couples therapy, is usually essential.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Take care of basic needs.</strong> Try to eat, sleep, and maintain some routine.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Can Every Relationship Survive */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Can Every Relationship Survive Infidelity?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Honest answer: No. Not every relationship can or should survive an affair. But many can—and whether yours recovers depends on several factors.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-accent/20 border border-accent/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Recovery Is More Likely When:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Both partners are committed to doing the work</li>
                    <li>• The unfaithful partner takes full responsibility</li>
                    <li>• There is genuine remorse (not just guilt about being caught)</li>
                    <li>• The affair is fully ended with no contact</li>
                    <li>• Both partners are willing to examine relationship dynamics</li>
                    <li>• There's willingness to be transparent and accountable</li>
                    <li>• Professional help is sought</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Recovery Is Less Likely When:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• The affair continues or contact is maintained</li>
                    <li>• The unfaithful partner blames the betrayed partner</li>
                    <li>• There's a pattern of repeated infidelity</li>
                    <li>• One partner has already emotionally left</li>
                    <li>• There's ongoing deception or trickle truth</li>
                    <li>• One partner refuses to participate in recovery work</li>
                    <li>• There are other serious issues not being addressed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">Questions to Consider</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Do you both want to rebuild?</li>
                  <li>• Is your partner truly remorseful, or just sorry they got caught?</li>
                  <li>• Are you staying for the right reasons (not just fear)?</li>
                  <li>• Has the affair fully ended?</li>
                  <li>• Is your partner willing to do whatever it takes?</li>
                </ul>
              </div>
            </section>

            {/* The Recovery Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                The Recovery Process: What to Expect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Affair recovery typically moves through phases, though the process isn't always linear.
              </p>

              <div className="space-y-6 mb-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Phase 1: Crisis and Disclosure</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Managing the initial shock and emotional chaos</li>
                    <li>• Getting the full truth (this may take time)</li>
                    <li>• Establishing basic stability and safety</li>
                    <li>• Deciding whether to commit to recovery</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Phase 2: Understanding and Processing</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Exploring the context of the affair (not as excuse, but for understanding)</li>
                    <li>• The betrayed partner processing their pain</li>
                    <li>• The unfaithful partner understanding the impact of their actions</li>
                    <li>• Examining relationship dynamics that may have contributed</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Phase 3: Rebuilding Trust</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Establishing transparency and accountability</li>
                    <li>• Creating new relationship agreements</li>
                    <li>• The unfaithful partner demonstrating consistent trustworthy behavior</li>
                    <li>• The betrayed partner taking risks to trust again</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Phase 4: Moving Forward</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Developing a new relationship narrative</li>
                    <li>• Rebuilding intimacy</li>
                    <li>• Addressing underlying relationship issues</li>
                    <li>• Finding meaning and growth</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/20 border border-accent/30 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-2">Timeline</h4>
                <p className="text-muted-foreground">
                  Recovery from infidelity typically takes <strong>1-3 years</strong> of consistent work. This isn't a problem to be solved in weeks or months. Patience and persistence are essential.
                </p>
              </div>
            </section>

            {/* For the Betrayed Partner */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-primary" />
                For the Betrayed Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you've been betrayed, your world has been turned upside down. Here's what helps:
              </p>

              <div className="space-y-4">
                {[
                  { title: "Your feelings are valid", text: "Whatever you're feeling—rage, devastation, confusion, even moments of love—it's all valid. Betrayal trauma is real, and you're allowed to grieve." },
                  { title: "You're not crazy", text: "The obsessive thoughts, need for details, hypervigilance, and emotional swings are normal responses to betrayal. You're not losing your mind; you're responding to a profound wound." },
                  { title: "You get to ask questions", text: "You have the right to know the truth. While obsessing over every detail isn't healthy long-term, you need enough information to understand what you're dealing with." },
                  { title: "Take your time", text: "You don't have to decide immediately whether to stay or go. Give yourself time to process before making major decisions." },
                  { title: "This is not your fault", text: "Whatever problems existed in your relationship, you didn't cause your partner to have an affair. They made that choice. The affair is 100% their responsibility." },
                  { title: "Healing takes time", text: "There's no timeline for 'getting over it.' Progress isn't linear. Be patient with yourself." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* For the Unfaithful Partner */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                For the Unfaithful Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you're the one who strayed, your behavior going forward will determine whether recovery is possible.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Take complete responsibility", text: "No excuses, no blame-shifting, no 'but you...' This is the non-negotiable foundation of recovery. Own what you did fully." },
                  { title: "End the affair completely", text: "This means no contact of any kind with the affair partner. If they're a coworker, you may need to change jobs. Half-measures don't work." },
                  { title: "Be transparent", text: "Your partner's trust is shattered. Rebuild it through radical transparency: share passwords, account for your time, be an open book." },
                  { title: "Answer questions honestly", text: "Your partner needs to understand what happened. Answer their questions truthfully. 'Trickle truth' destroys recovery." },
                  { title: "Tolerate their pain", text: "You will have to witness and sit with your partner's pain without becoming defensive, minimizing, or rushing them." },
                  { title: "Understand it takes time", text: "You may be ready to move forward, but your partner needs time. Recovery happens on their timeline, not yours." },
                  { title: "Examine yourself", text: "What allowed you to do this? What needs weren't you addressing directly? What work do you need to do on yourself?" },
                  { title: "Stay committed", text: "There will be setbacks and hard days. Consistent, patient commitment to the process is what rebuilds trust over time." }
                ].map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Role of Couples Therapy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-primary" />
                The Role of Couples Therapy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Affair recovery is extremely difficult to navigate without professional help. A skilled couples therapist provides:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">A Safe Structured Environment</h4>
                  <p className="text-muted-foreground text-sm">
                    The therapist creates a space where difficult conversations can happen productively rather than destructively.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Guidance Through the Process</h4>
                  <p className="text-muted-foreground text-sm">
                    Recovery has predictable phases and pitfalls. A therapist helps you navigate them effectively.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Help Managing Intense Emotions</h4>
                  <p className="text-muted-foreground text-sm">
                    The feelings involved in affair recovery are overwhelming. A therapist helps both partners regulate and process emotions.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Addressing Underlying Issues</h4>
                  <p className="text-muted-foreground text-sm">
                    Affairs often occur in the context of relationship problems. Therapy addresses these root issues.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                For more on what couples therapy involves, see our{" "}
                <Link to="/guides/couples-counseling" className="text-primary hover:underline font-medium">
                  couples counseling guide
                </Link>.
              </p>
            </section>

            {/* Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Common Mistakes in Affair Recovery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Avoid these pitfalls that can derail healing:
              </p>

              <div className="space-y-4">
                {[
                  { title: "Rushing the process", text: "The unfaithful partner often wants to 'move on.' But recovery cannot be rushed. Pressing too quickly usually backfires." },
                  { title: "Trickle truth", text: "Revealing information bit by bit destroys trust further. Get everything out, even if it means a harder initial conversation." },
                  { title: "Minimizing the betrayal", text: "'It didn't mean anything' doesn't help. To your partner, it was a devastating betrayal regardless of what it meant to you." },
                  { title: "Using the affair as a weapon", text: "The betrayed partner bringing up the affair in every argument prevents healing. There's a difference between processing and punishing." },
                  { title: "Expecting linear progress", text: "Recovery has good days and bad days. A trigger can bring everything flooding back months later. This is normal." },
                  { title: "Skipping professional help", text: "The intensity and complexity of affair recovery usually requires professional guidance. Going it alone makes success less likely." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Rebuilding Trust: Practical Steps */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Eye className="h-8 w-8 text-primary" />
                Rebuilding Trust: Practical Steps
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Trust is rebuilt through consistent trustworthy behavior over time. Here's what that looks like:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Transparency</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Open access to phones, accounts, and devices</li>
                    <li>• Honest answers to questions</li>
                    <li>• Proactive sharing of information</li>
                    <li>• No secrets or hidden communications</li>
                  </ul>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Accountability</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Checking in about whereabouts without being asked</li>
                    <li>• Following through on commitments</li>
                    <li>• Acknowledging mistakes promptly</li>
                    <li>• Taking responsibility without defensiveness</li>
                  </ul>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Consistency</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Showing up reliably day after day</li>
                    <li>• Aligning words and actions</li>
                    <li>• Maintaining boundaries with the affair partner</li>
                    <li>• Patience with the process even when it's hard</li>
                  </ul>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Attunement</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Noticing and responding to your partner's pain</li>
                    <li>• Being present and emotionally available</li>
                    <li>• Understanding triggers and responding with compassion</li>
                    <li>• Prioritizing the relationship</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Signs You're Healing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Signs You're Healing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Recovery is possible. Watch for these signs of progress:
              </p>

              <div className="space-y-3">
                {[
                  "The affair occupies less mental space",
                  "Triggers are less frequent and less intense",
                  "You can have conversations about it without complete emotional flooding",
                  "Moments of genuine connection return",
                  "The unfaithful partner demonstrates consistent trustworthy behavior",
                  "The betrayed partner can take small risks to trust",
                  "You're building something new rather than just trying to restore the old",
                  "There's hope for the future"
                ].map((sign, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-accent/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{sign}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Getting Help CTA */}
            <section className="mb-12">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Getting Help for Affair Recovery
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you're struggling to recover from infidelity, professional help can make the difference between healing and prolonged suffering. At{" "}
                  <Link to="/therapist-matching" className="text-primary hover:underline font-medium">
                    Coping and Healing Counseling
                  </Link>, our couples therapists have experience guiding couples through affair recovery.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We provide{" "}
                  <Link to="/couples-therapy" className="text-primary hover:underline">couples therapy</Link> specifically for affair recovery, individual therapy for processing betrayal trauma, and{" "}
                  <Link to="/online-therapy" className="text-primary hover:underline">online therapy</Link> for convenience and privacy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/therapist-matching">
                      Schedule Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/couples-therapy-georgia">
                      Couples Therapy in Georgia
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/guides/couples-counseling">
                      Couples Counseling Guide
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="border-t border-border pt-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center italic">
                Whether you stay together or ultimately part ways, you deserve support through this difficult time. Recovery is possible—and you don't have to navigate it alone.
              </p>
            </section>
          </div>

          {/* Related Articles */}
          <aside className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/couples-therapy-communication" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Communication in Couples Therapy
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    How therapy helps couples communicate better.
                  </p>
                </div>
              </Link>
              <Link to="/blog/marriage-counseling-signs" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Signs You Need Marriage Counseling
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    When to seek professional help for your relationship.
                  </p>
                </div>
              </Link>
              <Link to="/couples-therapy" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Couples Therapy Services
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Learn about our couples therapy offerings.
                  </p>
                </div>
              </Link>
            </div>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default RebuildingTrustAfterInfidelity;
