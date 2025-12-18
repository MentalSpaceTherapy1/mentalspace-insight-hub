import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Heart, TrendingUp, MessageCircle, Clock, AlertTriangle, Target, Sparkles } from "lucide-react";

const HowToKnowTherapyIsWorking = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Know If Therapy Is Working: Signs of Progress",
    "description": "Wondering if therapy is helping? Learn the signs that therapy is working, what progress really looks like, and when to talk to your therapist about concerns.",
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
    "datePublished": "2024-01-22",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chctherapy.com/blog/how-to-know-therapy-is-working"
    },
    "keywords": "how to know if therapy is working, signs therapy is helping, therapy progress, is therapy working, therapy not working"
  };

  return (
    <>
      <SEOHead
        title="How to Know If Therapy Is Working: Signs of Progress | CHC"
        description="Wondering if therapy is helping? Learn the signs that therapy is working, what progress really looks like, and when to talk to your therapist about concerns."
        canonicalUrl="https://chctherapy.com/blog/how-to-know-therapy-is-working"
        keywords="how to know if therapy is working, signs therapy is helping, therapy progress, is therapy working, therapy not working"
        ogTitle="How to Know If Therapy Is Working: Signs of Progress"
        ogDescription="Wondering if therapy is helping? Learn the signs that therapy is working and what progress really looks like."
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
              <li className="text-foreground">How to Know If Therapy Is Working</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Therapy Process
              </span>
              <span className="text-muted-foreground text-sm">12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How to Know If Therapy Is Working: Signs of Progress
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You've been going to therapy for a few weeks—or maybe a few months—and you're wondering: Is this actually helping? It's a common question, and an important one.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Therapy is an investment of your time, money, and emotional energy. You deserve to know if it's paying off.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The challenge is that therapeutic progress doesn't always look the way you'd expect. Sometimes things feel worse before they get better. Sometimes change is so gradual you don't notice it. And sometimes you're making progress in ways you haven't learned to recognize yet.
            </p>

            {/* What Progress Looks Like */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                What Progress in Therapy Really Looks Like
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                First, let's reset expectations. Progress in therapy is rarely:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-muted-foreground"><strong className="text-foreground">Linear</strong> – it has ups and downs</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-muted-foreground"><strong className="text-foreground">Dramatic</strong> – it's usually gradual</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-muted-foreground"><strong className="text-foreground">Constant</strong> – there are plateaus</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-muted-foreground"><strong className="text-foreground">Universal</strong> – different areas improve at different rates</p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">Real therapeutic progress often looks like:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Small shifts in how you respond to situations</li>
                  <li>• Gradually increasing self-awareness</li>
                  <li>• Slowly feeling more like yourself</li>
                  <li>• Building skills that feel awkward at first, then natural</li>
                  <li>• Two steps forward, one step back—but overall movement forward</li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6 italic">
                Don't expect to leave every session feeling "better." Sometimes the most productive sessions are the hardest ones.
              </p>
            </section>

            {/* Signs Therapy Is Working */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                Signs Therapy Is Working
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here are concrete indicators that therapy is helping you, even if you don't feel dramatically different:
              </p>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    You Understand Yourself Better
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You can identify your emotions more easily</li>
                    <li>• You notice patterns in your thoughts and behavior</li>
                    <li>• You understand why you react the way you do</li>
                    <li>• You're connecting present struggles to past experiences</li>
                    <li>• You can catch yourself in old patterns</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3 italic">
                    This self-awareness is foundational. Even if you're still struggling, understanding yourself better is progress.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">You're More Aware of Your Thoughts</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You notice negative self-talk that used to be invisible</li>
                    <li>• You can recognize cognitive distortions (catastrophizing, black-and-white thinking)</li>
                    <li>• You sometimes catch yourself mid-thought and question it</li>
                    <li>• You're curious about your thoughts rather than just accepting them</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3 italic">
                    Awareness precedes change. Noticing unhelpful thoughts is the first step toward changing them.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Your Coping Has Improved</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You have new strategies for managing difficult emotions</li>
                    <li>• You're using healthier coping mechanisms more often</li>
                    <li>• You can calm yourself down faster than before</li>
                    <li>• You're reaching for old unhealthy coping behaviors less frequently</li>
                    <li>• Stressful situations feel slightly more manageable</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    You're Experiencing Your Emotions More Fully
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Emotions feel more accessible (if you were numb)</li>
                    <li>• Emotions feel less overwhelming (if you were flooded)</li>
                    <li>• You can sit with difficult feelings without immediate escape</li>
                    <li>• You're crying in session (often a sign of important work)</li>
                    <li>• You're feeling things you'd been avoiding</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3 italic">
                    This can feel like getting worse—especially if you were numb before. But feeling your feelings is essential to processing them.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Your Relationships Are Shifting</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You're communicating more honestly</li>
                    <li>• You're setting boundaries you couldn't before</li>
                    <li>• You're recognizing unhealthy relationship patterns</li>
                    <li>• You're responding differently to conflict</li>
                    <li>• You feel more connected to some people, appropriately less to others</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">You're Trying New Things</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You're taking small risks you avoided before</li>
                    <li>• You're experimenting with new behaviors between sessions</li>
                    <li>• You're doing "homework" or practicing skills</li>
                    <li>• You're making changes in your daily life based on therapy insights</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3 italic">
                    Action is a crucial part of progress. Insight alone doesn't create change—applying it does.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    You Feel Heard and Understood
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Your therapist "gets" you</li>
                    <li>• You feel safe being honest</li>
                    <li>• You don't feel judged</li>
                    <li>• You can share difficult things you've never told anyone</li>
                    <li>• You feel a genuine connection</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3 italic">
                    The therapeutic relationship itself is healing. Feeling truly understood—maybe for the first time—is significant.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Your Symptoms Have Decreased</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Anxiety is less intense or less frequent</li>
                    <li>• Depression lifts somewhat</li>
                    <li>• Panic attacks are less severe or common</li>
                    <li>• Sleep has improved</li>
                    <li>• Physical symptoms of stress have reduced</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3 italic">
                    Symptom relief may take time. Give treatment at least 8-12 sessions before expecting significant symptom change.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">You're More Resilient</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Setbacks don't throw you as much</li>
                    <li>• You recover from hard days faster</li>
                    <li>• You have more tolerance for discomfort</li>
                    <li>• You can face things you used to avoid</li>
                    <li>• Difficult situations feel more manageable</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What Progress Doesn't Look Like */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What Progress Doesn't Look Like
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Be careful not to dismiss real progress because it doesn't match expectations:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Progress doesn't require:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Feeling happy all the time</li>
                    <li>• Never struggling again</li>
                    <li>• Immediate relief after sessions</li>
                    <li>• Solving all your problems</li>
                    <li>• Never having setbacks</li>
                    <li>• Feeling dramatically different</li>
                  </ul>
                </div>
                <div className="bg-accent/20 border border-accent/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">These are NOT signs therapy isn't working:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Having hard sessions</li>
                    <li>• Crying or feeling upset</li>
                    <li>• Things feeling worse temporarily</li>
                    <li>• Not knowing what to talk about sometimes</li>
                    <li>• Progress being slow</li>
                    <li>• Still having symptoms (they may be reduced)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-primary" />
                How Long Before You See Progress?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Timeframes vary based on many factors, but general guidelines:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">First few sessions (1-4)</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Building rapport</li>
                    <li>• Assessment and understanding your situation</li>
                    <li>• Beginning to feel comfortable</li>
                    <li>• Not much change yet—and that's normal</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Early therapy (5-12 sessions)</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Starting to see patterns</li>
                    <li>• Developing initial insights</li>
                    <li>• Learning new skills</li>
                    <li>• May start feeling some relief</li>
                    <li>• Or may feel worse as you address difficult material</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-bold text-foreground mb-2">Ongoing therapy (3-6+ months)</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Deeper work and processing</li>
                    <li>• Meaningful behavioral changes</li>
                    <li>• Sustained symptom relief</li>
                    <li>• Relationship improvements</li>
                    <li>• Integration of insights into daily life</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6">
                Some concerns resolve relatively quickly; others—especially those involving trauma, personality patterns, or longstanding issues—take longer. Discuss expectations with your therapist.
              </p>
            </section>

            {/* Questions to Ask Yourself */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Questions to Ask Yourself
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Periodically check in with yourself:
              </p>

              <div className="bg-card border border-border rounded-xl p-6">
                <ol className="space-y-3 text-muted-foreground">
                  <li>1. Am I more aware of my patterns than when I started?</li>
                  <li>2. Do I understand myself better?</li>
                  <li>3. Am I using any new coping strategies?</li>
                  <li>4. Are my symptoms any different (frequency, intensity, duration)?</li>
                  <li>5. Am I functioning better in daily life?</li>
                  <li>6. Do I feel heard and understood by my therapist?</li>
                  <li>7. Am I willing to be honest in sessions?</li>
                  <li>8. Am I trying things differently outside of therapy?</li>
                  <li>9. Would the person I was when I started therapy notice any changes in me now?</li>
                  <li>10. Do I have hope that things can improve?</li>
                </ol>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6">
                You don't need to answer "yes" to all of these, especially early on. But if you're answering "no" to most after several months, it may be time to discuss concerns with your therapist.
              </p>
            </section>

            {/* When to Talk to Your Therapist */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                When to Talk to Your Therapist About Concerns
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you're unsure whether therapy is working, <strong className="text-foreground">tell your therapist.</strong> This is one of the most important conversations you can have.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Bring it up if:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You've been in therapy for 2-3 months with no noticeable change</li>
                    <li>• You consistently dread sessions</li>
                    <li>• You don't feel understood by your therapist</li>
                    <li>• You're not sure what you're working on or toward</li>
                    <li>• Something about the relationship feels off</li>
                    <li>• You're questioning whether to continue</li>
                  </ul>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">How to bring it up:</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li>"I've been wondering if I'm making progress. Can we talk about how therapy is going?"</li>
                    <li>"I'm not sure therapy is helping. What do you think?"</li>
                    <li>"I want to check in about our work together and whether we're on the right track."</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                A good therapist will welcome this conversation. They can help you identify progress you may be missing, adjust the approach if needed, or discuss whether a different type of therapy or therapist might be better suited to your needs.
              </p>
            </section>

            {/* When Therapy Might Not Be Working */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                When Therapy Might Not Be Working
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sometimes therapy genuinely isn't working. Signs to consider:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">The fit is wrong:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You don't feel comfortable with your therapist</li>
                    <li>• Your communication styles don't mesh</li>
                    <li>• You can't be honest</li>
                    <li>• Your therapist doesn't seem to understand your issues</li>
                    <li>• You feel judged or misunderstood</li>
                  </ul>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">The approach isn't right:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• The type of therapy doesn't match your needs</li>
                    <li>• You need more structure (or less)</li>
                    <li>• Your therapist doesn't have expertise in your specific issue</li>
                    <li>• You're not being challenged enough (or pushed too hard)</li>
                  </ul>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Something else is needed:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You might benefit from medication in addition to therapy</li>
                    <li>• You may need a different level of care</li>
                    <li>• External circumstances are preventing progress</li>
                    <li>• Other issues need to be addressed first</li>
                  </ul>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">You're not fully engaged:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• You're not being honest in sessions</li>
                    <li>• You're not applying insights outside therapy</li>
                    <li>• You're not attending consistently</li>
                    <li>• You're not doing the work between sessions</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                If therapy isn't working, the solution might be adjusting your current therapy, switching therapists, trying a different approach, or addressing barriers to engagement. For guidance, see our guide on{" "}
                <Link to="/guides/finding-therapist" className="text-primary hover:underline font-medium">
                  finding the right therapist
                </Link>.
              </p>
            </section>

            {/* How to Maximize Progress */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                How to Maximize Your Progress
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Give therapy the best chance of working:
              </p>

              <div className="space-y-4">
                {[
                  { title: "Attend consistently", text: "Regular attendance matters. Canceling frequently or having long gaps between sessions disrupts momentum." },
                  { title: "Be honest", text: "Therapy only works with the material you provide. Being honest—even about things you're ashamed of—is essential." },
                  { title: "Do the work between sessions", text: "Apply insights. Practice skills. Do homework if assigned. Therapy happens one hour a week; life happens the other 167 hours." },
                  { title: "Be patient", text: "Real change takes time. Give therapy at least 3-6 months before drawing conclusions." },
                  { title: "Communicate with your therapist", text: "Share what's working and what isn't. Ask questions. Be an active participant in your treatment." },
                  { title: "Track your progress", text: "Keep a journal or notes. It's easy to forget where you started. Looking back at early entries can reveal progress you've missed." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-accent/20 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Getting Help CTA */}
            <section className="mb-12">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Getting the Most from Your Therapy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At{" "}
                  <Link to="/therapist-matching" className="text-primary hover:underline font-medium">
                    Coping and Healing Counseling
                  </Link>, we're committed to helping you make real progress. Our therapists set clear goals collaboratively, check in regularly about how therapy is going, adjust approaches based on what's working, and welcome honest feedback about the process.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We offer{" "}
                  <Link to="/therapist-matching" className="text-primary hover:underline">free consultations</Link> to discuss your needs and{" "}
                  <Link to="/online-therapy" className="text-primary hover:underline">online therapy throughout Georgia</Link>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/therapist-matching">
                      Schedule Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/guides/starting-therapy">
                      Learn About Our Process
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/faq">
                      Explore FAQs
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="border-t border-border pt-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center italic">
                You deserve therapy that works. Let's make sure yours does.
              </p>
            </section>
          </div>

          {/* Related Articles */}
          <aside className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/first-therapy-session-what-to-expect" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Your First Therapy Session
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    What to expect in your first appointment.
                  </p>
                </div>
              </Link>
              <Link to="/blog/finding-right-therapist-guide" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Finding the Right Therapist
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    How to find a therapist who's right for you.
                  </p>
                </div>
              </Link>
              <Link to="/blog/cognitive-behavioral-therapy" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Cognitive Behavioral Therapy
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Understanding one of the most effective therapy approaches.
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

export default HowToKnowTherapyIsWorking;
