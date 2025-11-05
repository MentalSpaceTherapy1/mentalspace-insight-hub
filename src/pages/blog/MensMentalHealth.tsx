import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MensMentalHealth = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Men's Mental Health: Breaking Stigma & Finding Therapy That Works",
    "description": "Comprehensive guide addressing men's mental health challenges, breaking down barriers to seeking help, and finding effective therapy approaches.",
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
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  return (
    <>
      <SEOHead
        title="Men's Mental Health: Breaking Stigma & Finding Therapy | CHC"
        description="Expert guide to men's mental health covering unique challenges, overcoming barriers to seeking help, and therapy approaches that work for men."
        keywords="men's mental health, therapy for men, male depression treatment, men and therapy, mental health stigma men"
        canonicalUrl="https://chctherapy.com/blog/mens-mental-health-therapy-guide"
        ogTitle="Men's Mental Health: Complete Guide to Breaking Stigma & Getting Help"
        ogDescription="Addressing men's mental health challenges and finding effective therapy. Learn how to overcome barriers and find support that works."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        structuredData={structuredData}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Men's Mental Health: Breaking Stigma & Finding Therapy That Works
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Understanding men's unique mental health challenges and how to get the support you deserve
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                <span>Published: January 15, 2025</span>
                <span>•</span>
                <span>16 min read</span>
                <span>•</span>
                <span>Men's Health</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Men face unique challenges when it comes to mental health. Despite experiencing depression, anxiety, and other mental health conditions at significant rates, men are far less likely than women to seek professional help. In fact, research shows that men are only about half as likely as women to receive mental health treatment—even though men die by suicide at nearly four times the rate of women.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This disparity isn't because men don't struggle with mental health—it's because societal expectations, stigma, and traditional masculine norms create barriers to seeking help. Messages like "man up," "be strong," and "don't show weakness" discourage men from acknowledging emotional pain or reaching out for support.
            </p>
            <p className="text-lg leading-relaxed">
              But here's the truth: Seeking therapy is not a sign of weakness. It's an act of courage and self-awareness. This comprehensive guide addresses men's mental health challenges, explores why men are reluctant to seek help, and provides practical guidance on finding therapy that works for you.
            </p>
          </section>

          {/* The Stats */}
          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Men's Mental Health by the Numbers</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Understanding the scope of men's mental health issues helps illustrate why this topic deserves attention:
            </p>

            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3 text-2xl">•</span>
                <span><strong>1 in 10 men</strong> experience depression or anxiety, but less than half seek treatment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3 text-2xl">•</span>
                <span><strong>Male suicide rate</strong> is 3.7 times higher than the female suicide rate in the United States</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3 text-2xl">•</span>
                <span><strong>40% of men</strong> say they wouldn't talk to anyone about their mental health</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3 text-2xl">•</span>
                <span><strong>77%</strong> of men report feeling stress regularly, yet men are significantly less likely to seek professional help</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3 text-2xl">•</span>
                <span>Men are <strong>more likely to use substances</strong> (alcohol, drugs) to cope with emotional difficulties rather than seeking therapy</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3 text-2xl">•</span>
                <span><strong>Middle-aged white men</strong> have the highest suicide rate of any demographic group in the U.S.</span>
              </li>
            </ul>
          </section>

          {/* Why Men Don't Seek Help */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Why Men Don't Seek Mental Health Help</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Multiple factors contribute to men's reluctance to seek therapy. Understanding these barriers is the first step in overcoming them.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">1. Traditional Masculine Norms</h3>
                <p className="text-lg leading-relaxed mb-4">
                  From a young age, boys are socialized to be:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                  <li><strong>Strong and stoic:</strong> "Real men don't cry" or show vulnerability</li>
                  <li><strong>Self-reliant:</strong> Asking for help is seen as dependence or weakness</li>
                  <li><strong>Problem-solvers:</strong> Men are expected to fix things themselves</li>
                  <li><strong>Emotionally controlled:</strong> Expressing feelings other than anger is discouraged</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  These messages create a barrier to seeking help. Admitting emotional struggle can feel like admitting failure or inadequacy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">2. Stigma and Fear of Judgment</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Many men worry about how seeking therapy will be perceived:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Fear of being seen as "crazy" or "weak"</li>
                  <li>Concern that others will think less of them</li>
                  <li>Worry that mental health struggles could affect career prospects</li>
                  <li>Belief that they should be able to handle problems on their own</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">3. Different Symptom Presentation</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Men often experience and express mental health issues differently than women:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                  <li><strong>Externalized symptoms:</strong> Instead of sadness, men may exhibit anger, irritability, or aggression</li>
                  <li><strong>Risk-taking behaviors:</strong> Reckless driving, substance abuse, or dangerous activities</li>
                  <li><strong>Physical complaints:</strong> Headaches, digestive problems, chronic pain instead of acknowledging emotional distress</li>
                  <li><strong>Workaholism:</strong> Burying oneself in work to avoid dealing with feelings</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  Because these symptoms don't always look like "classic" depression or anxiety, men may not recognize they need help, or others may not identify their struggles as mental health issues.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">4. Lack of Awareness and Emotional Vocabulary</h3>
                <p className="text-lg leading-relaxed">
                  Many men struggle to identify or articulate their emotions because they weren't taught emotional literacy. Terms like "I feel stressed" or "I'm not myself lately" may be the extent of their ability to describe complex emotional experiences, making it difficult to recognize when professional help is needed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">5. Perception That Therapy Is for Women</h3>
                <p className="text-lg leading-relaxed">
                  The fact that women utilize mental health services at higher rates has created a perception that therapy is a "feminine" activity. Some men feel uncomfortable in therapy settings or worry they won't relate to their therapist.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mental Health Issues */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Common Mental Health Issues Affecting Men</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Depression in Men</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Male depression often looks different from depression in women. Instead of sadness, men may experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                  <li>Persistent irritability, anger, or aggression</li>
                  <li>Increased risk-taking or reckless behavior</li>
                  <li>Loss of interest in work, family, or hobbies</li>
                  <li>Physical symptoms like fatigue, headaches, digestive problems</li>
                  <li>Difficulty concentrating or making decisions</li>
                  <li>Increased alcohol or drug use</li>
                  <li>Social withdrawal or isolation</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  Depression in men is often undiagnosed or misdiagnosed because symptoms don't match traditional depression criteria.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Anxiety Disorders</h3>
                <p className="text-lg leading-relaxed mb-4">
                  While anxiety affects women at higher rates, millions of men struggle with anxiety disorders. Men may experience:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Generalized worry about work, finances, or family</li>
                  <li>Social anxiety, particularly in professional settings</li>
                  <li>Panic attacks (often misinterpreted as heart problems)</li>
                  <li>Performance anxiety (sexual, professional)</li>
                  <li>Avoidance of situations that trigger anxiety</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Substance Use Disorders</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Men are more likely than women to use substances to cope with emotional pain:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Alcohol abuse or dependence</li>
                  <li>Drug use (prescription or illegal)</li>
                  <li>Using substances to numb feelings or avoid problems</li>
                  <li>Denial about substance use being a problem</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                  Substance use often co-occurs with depression or anxiety, creating a cycle that's difficult to break without professional help.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Post-Traumatic Stress Disorder (PTSD)</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Men, particularly veterans and first responders, experience PTSD at significant rates:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Intrusive memories or flashbacks</li>
                  <li>Hypervigilance and difficulty relaxing</li>
                  <li>Avoidance of reminders of traumatic events</li>
                  <li>Emotional numbness or detachment</li>
                  <li>Difficulty with relationships and intimacy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Relationship and Intimacy Issues</h3>
                <p className="text-lg leading-relaxed">
                  Men frequently struggle with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
                  <li>Communication difficulties in romantic relationships</li>
                  <li>Divorce or separation stress</li>
                  <li>Difficulty expressing emotions to partners</li>
                  <li>Sexual performance concerns</li>
                  <li>Work-life balance affecting relationships</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Work-Related Stress and Burnout</h3>
                <p className="text-lg leading-relaxed">
                  Pressure to be the provider or achieve professionally creates significant stress:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg mt-4">
                  <li>Job-related anxiety or performance pressure</li>
                  <li>Financial stress and provider expectations</li>
                  <li>Career transitions or job loss</li>
                  <li>Burnout from overwork</li>
                  <li>Identity crisis related to career changes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Signs You Should Seek Help */}
          <section className="mb-12 bg-destructive/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Warning Signs You Should Seek Help</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Consider seeking professional support if you're experiencing:
            </p>

            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Persistent feelings of sadness, hopelessness, or irritability lasting more than two weeks</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Loss of interest in activities you used to enjoy</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Difficulty sleeping or sleeping too much</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Increased use of alcohol or drugs to cope</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Anger or irritability affecting your relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Withdrawal from friends, family, or social activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Difficulty concentrating or making decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Physical symptoms like headaches, digestive issues, or chronic pain</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Reckless behavior or increased risk-taking</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Relationship or work problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-3">✓</span>
                <span>Thoughts of self-harm or suicide</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-destructive/20 border-2 border-destructive rounded-lg">
              <p className="text-lg font-bold mb-2">⚠️ If you're having thoughts of suicide:</p>
              <p className="text-lg">
                Call or text <strong>988</strong> (Suicide & Crisis Lifeline) immediately or go to your nearest emergency room. Help is available 24/7.
              </p>
            </div>
          </section>

          {/* Therapy Approaches for Men */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Therapy Approaches That Work for Men</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Effective therapy for men often focuses on practical, solution-oriented approaches that align with how many men prefer to address problems:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Cognitive Behavioral Therapy (CBT)</h3>
                <p className="text-lg leading-relaxed mb-4">
                  CBT is highly effective for men because it's:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
                  <li><strong>Goal-oriented:</strong> Focuses on specific problems and solutions</li>
                  <li><strong>Structured:</strong> Clear framework and measurable progress</li>
                  <li><strong>Practical:</strong> Provides concrete tools and techniques</li>
                  <li><strong>Short-term:</strong> Typically 12-20 sessions</li>
                  <li><strong>Evidence-based:</strong> Proven effectiveness for depression, anxiety, PTSD</li>
                </ul>
                <p className="text-lg leading-relaxed">
                  CBT helps identify and change negative thought patterns and behaviors, which resonates with men who prefer action-oriented solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Acceptance and Commitment Therapy (ACT)</h3>
                <p className="text-lg leading-relaxed mb-4">
                  ACT appeals to men by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Focusing on values and meaningful living</li>
                  <li>Emphasizing acceptance rather than dwelling on feelings</li>
                  <li>Teaching practical mindfulness techniques</li>
                  <li>Helping men align actions with their values</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Solution-Focused Brief Therapy (SFBT)</h3>
                <p className="text-lg leading-relaxed mb-4">
                  SFBT is particularly effective for men because it:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Focuses on solutions rather than problems</li>
                  <li>Identifies strengths and resources</li>
                  <li>Sets concrete, achievable goals</li>
                  <li>Emphasizes what's working rather than what's wrong</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">EMDR for Trauma</h3>
                <p className="text-lg leading-relaxed mb-4">
                  For men dealing with PTSD or traumatic experiences:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Requires less verbal processing of trauma</li>
                  <li>Evidence-based for PTSD treatment</li>
                  <li>Can produce results relatively quickly</li>
                  <li>Particularly helpful for veterans and first responders</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Group Therapy</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Men-only therapy groups can be powerful because:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Reduces isolation—realize you're not alone</li>
                  <li>Learn from others facing similar challenges</li>
                  <li>Male camaraderie and peer support</li>
                  <li>More comfortable environment for some men</li>
                  <li>Often more affordable than individual therapy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Find the Right Therapist */}
          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-foreground">How to Find a Male-Friendly Therapist</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Consider Therapist Gender</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Some men prefer working with male therapists, feeling they'll better understand their experiences. Others prefer female therapists or don't have a preference. What matters most is finding someone you feel comfortable with and who has experience working with men's issues.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Look for Specific Expertise</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Seek therapists who specialize in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Men's mental health or men's issues</li>
                  <li>Your specific concern (depression, anxiety, PTSD, substance use, etc.)</li>
                  <li>Solution-focused or CBT approaches</li>
                  <li>Relevant populations (veterans, first responders, executives, etc.)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Coping and Healing Counseling for Men</h3>
                <p className="text-lg leading-relaxed mb-4">
                  At Coping and Healing Counseling, we understand the unique challenges men face in seeking therapy. Our approach includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>Therapists experienced in working with men</li>
                  <li>Evidence-based, practical treatment approaches</li>
                  <li>Online therapy for privacy and convenience</li>
                  <li>Flexible scheduling including evenings and weekends</li>
                  <li>Stigma-free, non-judgmental environment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Take Advantage of Initial Consultations</h3>
                <p className="text-lg leading-relaxed">
                  Most therapists offer brief phone consultations. Use this opportunity to ask about their approach, experience with men's issues, and whether they think they can help with your specific concerns. You should feel respected and understood—if not, try another therapist.
                </p>
              </div>
            </div>
          </section>

          {/* Overcoming Barriers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Overcoming Barriers to Seeking Help</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Reframe What It Means to Seek Help</h3>
                <p className="text-lg leading-relaxed">
                  Seeking therapy isn't weakness—it's taking responsibility for your mental health the same way you would for physical health. You wouldn't hesitate to see a doctor for a broken bone; mental health deserves the same attention. Therapy provides tools to improve your life, relationships, and overall well-being.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Start with Online Therapy</h3>
                <p className="text-lg leading-relaxed">
                  If the idea of sitting in a therapist's office feels uncomfortable, online therapy offers a more private, convenient option. You can attend sessions from home, reducing barriers and making it easier to take that first step.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Frame It as Performance Enhancement</h3>
                <p className="text-lg leading-relaxed">
                  Many men find it easier to think of therapy as "performance coaching" for life—similar to working with a sports coach or business consultant. Therapy provides strategies to perform better in relationships, work, and personal goals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Remember: Many Successful Men Use Therapy</h3>
                <p className="text-lg leading-relaxed">
                  Athletes, executives, military leaders, and high performers regularly work with therapists or mental health professionals. It's not a sign of failure—it's a tool for success.
                </p>
              </div>
            </div>
          </section>

          {/* Self-Care */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Self-Care Strategies to Support Mental Health</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              While therapy is essential for many mental health challenges, these strategies can support your overall well-being:
            </p>

            <ul className="space-y-3 text-lg">
              <li><strong>Exercise regularly:</strong> Physical activity is proven to reduce depression and anxiety</li>
              <li><strong>Connect with others:</strong> Maintain friendships and talk to people you trust</li>
              <li><strong>Limit alcohol:</strong> While it may provide temporary relief, alcohol worsens depression</li>
              <li><strong>Get adequate sleep:</strong> Aim for 7-9 hours nightly</li>
              <li><strong>Practice stress management:</strong> Try meditation, deep breathing, or progressive muscle relaxation</li>
              <li><strong>Set boundaries at work:</strong> Don't sacrifice all personal time for career</li>
              <li><strong>Pursue hobbies:</strong> Engage in activities you find meaningful</li>
              <li><strong>Be open with your partner:</strong> Communication strengthens relationships</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Taking the First Step</h2>
            <p className="text-lg leading-relaxed mb-6">
              If you're reading this article, you've already taken an important step—recognizing that mental health matters. Seeking help doesn't mean you're broken or weak. It means you're taking control of your life and health.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Mental health challenges don't discriminate, and they don't resolve on their own. With the right support, you can overcome depression, anxiety, trauma, or whatever you're facing. Therapy provides tools to not just survive, but thrive.
            </p>
            <p className="text-lg leading-relaxed">
              Your mental health matters. You deserve support. And taking that first step to reach out is one of the strongest things you can do.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Mental Health?</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling offers confidential, judgment-free therapy for men throughout Georgia. Take the first step toward better mental health today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary">
                  Schedule a Confidential Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/depression-adults" className="group">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    Recognizing and Treating Depression in Adults
                  </h3>
                  <p className="text-muted-foreground">
                    Understanding depression symptoms and effective treatment options.
                  </p>
                </div>
              </Link>
              <Link to="/blog/understanding-anxiety" className="group">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    Understanding Anxiety: Symptoms & Treatment
                  </h3>
                  <p className="text-muted-foreground">
                    Learn about anxiety disorders and how to manage them effectively.
                  </p>
                </div>
              </Link>
              <Link to="/blog/ptsd-recovery" className="group">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    PTSD Recovery: A Path to Healing
                  </h3>
                  <p className="text-muted-foreground">
                    Evidence-based approaches to recovering from trauma.
                  </p>
                </div>
              </Link>
              <Link to="/blog/benefits-online-therapy" className="group">
                <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                    The Benefits of Online Therapy
                  </h3>
                  <p className="text-muted-foreground">
                    Discover the convenience and effectiveness of virtual therapy.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default MensMentalHealth;