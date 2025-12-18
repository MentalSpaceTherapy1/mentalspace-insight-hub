import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Lock, FileText, Users, AlertTriangle, Eye, Scale, MessageCircle } from "lucide-react";

const TherapyConfidentiality = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Is Therapy Confidential? Your Privacy Rights Explained",
    "description": "Worried about therapy privacy? Learn what therapists can and can't share, when confidentiality has limits, and how your information is protected. HIPAA explained.",
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
    "datePublished": "2024-01-25",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chctherapy.com/blog/therapy-confidentiality"
    },
    "keywords": "is therapy confidential, therapy privacy, therapist confidentiality, HIPAA therapy, what can therapists share"
  };

  return (
    <>
      <SEOHead
        title="Is Therapy Confidential? Your Privacy Rights Explained | CHC"
        description="Worried about therapy privacy? Learn what therapists can and can't share, when confidentiality has limits, and how your information is protected. HIPAA explained."
        canonicalUrl="https://chctherapy.com/blog/therapy-confidentiality"
        keywords="is therapy confidential, therapy privacy, therapist confidentiality, HIPAA therapy, what can therapists share"
        ogTitle="Is Therapy Confidential? Your Privacy Rights Explained"
        ogDescription="Learn what therapists can and can't share, when confidentiality has limits, and how your information is protected."
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
              <li className="text-foreground">Therapy Confidentiality</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Therapy Basics
              </span>
              <span className="text-muted-foreground text-sm">11 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Is Therapy Confidential? Your Privacy Rights Explained
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              One of the most common concerns people have about starting therapy is privacy. You might wonder: Will my therapist keep what I say private? Who might find out I'm in therapy? What if I say something I regret?
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              These concerns are completely understandable. Therapy requires vulnerability, and vulnerability requires safety. Knowing that your words won't come back to haunt you is essential for honest, effective therapy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The good news: therapy is confidential. But there are limits and nuances worth understanding. Here's everything you need to know about therapy privacy.
            </p>

            {/* The Short Answer */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                The Short Answer: Yes, Therapy Is Confidential
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Therapists are legally and ethically bound to keep what you share in therapy private. This isn't just a policy—it's the law.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4">What confidentiality means:</h4>
                <ul className="space-y-3">
                  {[
                    "Your therapist cannot share what you discuss with anyone without your written permission",
                    "The fact that you're in therapy is confidential",
                    "Your records are protected",
                    "Information doesn't go to employers, family members, or friends",
                    "Even if someone calls asking about you, your therapist cannot confirm you're a client"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6">
                This protection allows you to speak freely about your deepest thoughts, fears, and experiences without worrying they'll be shared.
              </p>
            </section>

            {/* Legal Protections */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Scale className="h-8 w-8 text-primary" />
                Legal Protections: HIPAA and State Laws
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Several legal frameworks protect your therapy privacy:
              </p>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">HIPAA (Health Insurance Portability and Accountability Act)</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    HIPAA is a federal law that protects your health information, including mental health records. Under HIPAA:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Your therapist must keep your information secure</li>
                    <li>• Information can only be shared with your written authorization</li>
                    <li>• You have the right to access your own records</li>
                    <li>• Violations carry significant penalties</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">State Licensing Laws</h4>
                  <p className="text-muted-foreground text-sm">
                    Each state has laws governing therapist conduct. Breaching confidentiality can result in loss of license, legal action, and professional sanctions.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Privileged Communication</h4>
                  <p className="text-muted-foreground text-sm">
                    In most states, therapist-client communication is "privileged," meaning your therapist cannot be forced to testify about what you've shared (with some exceptions).
                  </p>
                </div>
              </div>
            </section>

            {/* What's Protected */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lock className="h-8 w-8 text-primary" />
                What's Protected?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Essentially everything related to your therapy:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/20 border border-accent/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Protected information includes:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Everything you say in sessions</li>
                    <li>• Your diagnosis (if any)</li>
                    <li>• Treatment notes and records</li>
                    <li>• The fact that you're in therapy at all</li>
                    <li>• Appointment times and dates</li>
                    <li>• Payment and billing information</li>
                    <li>• Any documents or materials you share</li>
                  </ul>
                </div>
                <div className="bg-accent/20 border border-accent/30 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">Your therapist cannot tell:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Your employer that you're in therapy</li>
                    <li>• Your spouse what you discussed</li>
                    <li>• Your parents (if you're an adult)</li>
                    <li>• Your friends or family members</li>
                    <li>• Anyone who calls asking about you</li>
                    <li>• Social media or online platforms</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6">
                Even seemingly innocent information—confirming you're a client, sharing that you missed an appointment—requires your permission.
              </p>
            </section>

            {/* Limits of Confidentiality */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                The Limits of Confidentiality
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While confidentiality is the rule, there are specific exceptions where therapists are legally or ethically required to break confidentiality. Your therapist should explain these at the start of treatment.
              </p>

              <div className="space-y-6">
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Danger to Self</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    If you express serious intent to harm yourself and have a plan, your therapist may need to take action to protect you—contacting emergency services, notifying family members, or facilitating hospitalization.
                  </p>
                  <div className="bg-background/50 rounded-lg p-4 mt-3">
                    <p className="text-muted-foreground text-sm">
                      <strong>Important nuance:</strong> Talking about suicidal thoughts doesn't automatically break confidentiality. Therapists are trained to assess risk. Discussing passive thoughts is different from active intent with a plan. Many clients worry that mentioning any suicidal thought will result in hospitalization—this isn't the case.
                    </p>
                  </div>
                </div>

                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Danger to Others</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    If you make a credible threat to harm a specific, identifiable person, your therapist may be required to warn the potential victim or notify law enforcement. This comes from the "Tarasoff" case, which established a "duty to warn."
                  </p>
                  <div className="bg-background/50 rounded-lg p-4 mt-3">
                    <p className="text-muted-foreground text-sm">
                      <strong>Important nuance:</strong> Expressing anger at someone ("I'm so mad at my boss I could kill him") is not the same as a credible threat. Therapists are trained to assess when statements represent venting versus genuine danger.
                    </p>
                  </div>
                </div>

                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Child or Elder Abuse</h4>
                  <p className="text-muted-foreground text-sm">
                    Therapists are "mandated reporters," meaning they're legally required to report known or suspected child abuse or neglect, and abuse of elderly or dependent adults. Past abuse that is no longer occurring generally doesn't require reporting, though laws vary by state.
                  </p>
                </div>

                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Court Orders</h4>
                  <p className="text-muted-foreground text-sm">
                    In rare cases, a judge can order the release of therapy records or compel a therapist to testify. This typically happens in child custody disputes, criminal cases, or personal injury lawsuits. Your therapist will typically fight to protect your records and notify you if records are subpoenaed.
                  </p>
                </div>
              </div>
            </section>

            {/* Confidentiality and Insurance */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                Confidentiality and Insurance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you use insurance for therapy, some information is shared with your insurer:
              </p>

              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-foreground mb-4">What insurance companies receive:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Your diagnosis</li>
                  <li>• Dates of service</li>
                  <li>• Type of service provided</li>
                  <li>• Sometimes brief treatment summaries</li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Using insurance creates a record that you received mental health treatment. This becomes part of your medical records. While insurers are also bound by HIPAA, the information does exist beyond your therapist's office.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-2">For maximum privacy:</h4>
                <p className="text-muted-foreground text-sm">
                  Some clients choose to pay out-of-pocket to avoid any insurance record. If privacy is a significant concern for you, discuss options with your therapist. See our{" "}
                  <Link to="/guides/therapy-cost" className="text-primary hover:underline">therapy cost guide</Link> for self-pay options.
                </p>
              </div>
            </section>

            {/* Different Situations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                Confidentiality in Different Situations
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Couples Therapy</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Confidentiality in{" "}
                    <Link to="/couples-therapy" className="text-primary hover:underline">couples therapy</Link> works differently. The "client" is the relationship, not either individual.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Common policies:</strong> What you say together in session is shared between all parties. Information from individual sessions may or may not be shared with your partner. Ask your couples therapist about their specific confidentiality policy.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Teen Therapy</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    When a minor is in therapy, parents typically have some legal right to information—but good therapists balance this with the teen's need for privacy.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Common approach:</strong> Parents receive general information about progress and safety concerns, while specific session content remains private. Learn more in our{" "}
                    <Link to="/teen-therapy-georgia" className="text-primary hover:underline">teen therapy</Link> section.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Online Therapy</h4>
                  <p className="text-muted-foreground text-sm">
                    <Link to="/online-therapy" className="text-primary hover:underline">Online therapy</Link> is subject to the same confidentiality protections as in-person therapy. Legitimate teletherapy platforms are HIPAA-compliant, meaning your sessions are encrypted and secure. Use a private space, headphones, and secure WiFi for additional privacy.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Group Therapy</h4>
                  <p className="text-muted-foreground text-sm">
                    In group therapy, the therapist maintains confidentiality, but other group members aren't bound by the same legal requirements. Groups typically establish confidentiality agreements, but enforcement is limited.
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Eye className="h-8 w-8 text-primary" />
                Your Rights Regarding Your Records
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You have rights when it comes to your therapy records:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Right to access", text: "You can request copies of your therapy records." },
                  { title: "Right to amend", text: "You can request amendments if your records contain errors." },
                  { title: "Right to restrict disclosure", text: "You can request restrictions on how your information is used." },
                  { title: "Right to accounting", text: "You can request a record of who has accessed your information." },
                  { title: "Right to confidential communication", text: "You can request that your therapist communicate with you in specific ways." }
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{right.title}</p>
                      <p className="text-muted-foreground text-sm">{right.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Questions to Ask */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-primary" />
                Questions to Ask Your Therapist
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At the start of therapy, don't hesitate to ask:
              </p>

              <div className="bg-card border border-border rounded-xl p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• What is your confidentiality policy?</li>
                  <li>• What are the limits of confidentiality?</li>
                  <li>• If you had to break confidentiality, how would that work?</li>
                  <li>• What information goes to my insurance company?</li>
                  <li>• What is your policy on couples/family sessions and confidentiality?</li>
                  <li>• How do you handle requests for records?</li>
                  <li>• How are my records stored and protected?</li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6">
                A good therapist welcomes these questions and will explain their policies clearly.
              </p>
            </section>

            {/* Getting Help CTA */}
            <section className="mb-12">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Shield className="h-7 w-7 text-primary" />
                  Privacy at Coping and Healing Counseling
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At{" "}
                  <Link to="/therapist-matching" className="text-primary hover:underline font-medium">
                    Coping and Healing Counseling
                  </Link>, we take your privacy seriously:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• All therapists follow HIPAA guidelines and ethical standards</li>
                  <li>• We use secure, HIPAA-compliant technology for{" "}
                    <Link to="/online-therapy" className="text-primary hover:underline">online therapy</Link>
                  </li>
                  <li>• We explain confidentiality and its limits at the start of treatment</li>
                  <li>• Records are stored securely</li>
                  <li>• We never share your information without proper authorization</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                  Your privacy matters to us. We understand that trusting us with your story requires knowing that trust won't be violated.
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
                      Starting Therapy Guide
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
                You can speak freely here. That's what therapy is for.
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
              <Link to="/blog/how-to-know-therapy-is-working" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Is Therapy Working?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Signs of progress in therapy.
                  </p>
                </div>
              </Link>
              <Link to="/online-therapy" className="group">
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Online Therapy
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Secure, private online sessions.
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

export default TherapyConfidentiality;
