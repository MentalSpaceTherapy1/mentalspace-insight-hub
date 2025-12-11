import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PillarPageTemplate from '@/components/PillarPageTemplate';
import { Button } from '@/components/ui/button';

const StartingTherapyGuide = () => {
  const midCta = (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Take the First Step?</h3>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        Schedule your free consultation with a CHC therapist today. We'll help you find the right fit and answer any questions you have about starting therapy.
      </p>
      <Link to="/therapist-matching">
        <Button variant="hero" size="lg">
          Schedule Free Consultation
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );

  return (
    <PillarPageTemplate
      title="The Complete Guide to Starting Therapy"
      subtitle="Everything you need to know about beginning your mental health journey—from finding the right therapist to preparing for your first session."
      description="Everything you need to know about starting therapy. Learn what to expect, how to find the right therapist, and prepare for your first session. Free consultation."
      canonicalUrl="https://chctherapy.com/guides/starting-therapy"
      publishedDate="2025-01-15"
      updatedDate="2025-01-15"
      readTime={15}
      keywords="start therapy, starting therapy, how to start therapy, first therapy session, find a therapist"
      midCta={midCta}
      relatedServices={[
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Anxiety Therapy", url: "/anxiety-therapy-georgia" },
        { title: "Depression Therapy", url: "/depression-therapy-georgia" },
        { title: "Couples Therapy", url: "/couples-therapy" }
      ]}
      relatedArticles={[
        { title: "Finding the Right Therapist", url: "/blog/finding-right-therapist-guide" },
        { title: "Benefits of Online Therapy", url: "/blog/benefits-online-therapy" },
        { title: "Understanding Anxiety", url: "/blog/understanding-anxiety" },
        { title: "Therapy Costs Guide", url: "/blog/therapy-cost-payment-options-guide" }
      ]}
    >
      {/* Section 1: Is Therapy Right for You? */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="is-therapy-right-for-you">Is Therapy Right for You?</h2>
        <p>
          Starting therapy is a significant step, and if you're reading this guide, you're already showing courage by considering it. The truth is, therapy isn't just for people in crisis—it's for anyone who wants to better understand themselves, improve their relationships, or develop healthier ways of coping with life's challenges.
        </p>
        <p>
          You might benefit from therapy if you're dealing with persistent stress, navigating a major life transition, struggling with anxiety or depression, or simply feeling "stuck" without knowing why. Therapy provides a safe, confidential space to explore your thoughts and feelings with a trained professional who can offer guidance and support.
        </p>
        <p>
          Many people wait until they're overwhelmed before seeking help, but therapy can be just as valuable for prevention and personal growth as it is for crisis intervention. Think of it like going to the gym for your mental health—you don't need to be injured to benefit from exercise, and you don't need to be in crisis to benefit from therapy.
        </p>
        <p>
          If you've been wondering whether therapy might help, that curiosity itself is often a sign that it could.
        </p>
      </section>

      {/* Section 2: Signs You Might Benefit from Therapy */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="signs-you-might-benefit">Signs You Might Benefit from Therapy</h2>
        <p>
          While everyone's situation is unique, there are common signs that suggest therapy could be helpful:
        </p>
        
        <div className="bg-muted/30 rounded-xl p-6 my-6">
          <h3 className="mt-0">Emotional signs:</h3>
          <ul className="mb-0">
            <li>Persistent feelings of sadness, hopelessness, or emptiness</li>
            <li>Anxiety that interferes with daily activities</li>
            <li>Overwhelming stress that doesn't seem to improve</li>
            <li>Mood swings or emotional reactions that feel out of proportion</li>
            <li>Feelings of worthlessness or excessive guilt</li>
          </ul>
        </div>

        <div className="bg-muted/30 rounded-xl p-6 my-6">
          <h3 className="mt-0">Behavioral signs:</h3>
          <ul className="mb-0">
            <li>Withdrawing from friends, family, or activities you once enjoyed</li>
            <li>Changes in sleep patterns—sleeping too much or too little</li>
            <li>Changes in appetite or weight</li>
            <li>Difficulty concentrating or making decisions</li>
            <li>Using alcohol, drugs, or other substances to cope</li>
          </ul>
        </div>

        <div className="bg-muted/30 rounded-xl p-6 my-6">
          <h3 className="mt-0">Life circumstance signs:</h3>
          <ul className="mb-0">
            <li>Going through a major life transition (divorce, job loss, move, new baby)</li>
            <li>Experiencing grief or loss</li>
            <li>Relationship conflicts that you can't resolve on your own</li>
            <li>Trauma or difficult experiences from your past affecting your present</li>
            <li>Feeling stuck in patterns you want to change</li>
          </ul>
        </div>

        <p>
          You don't need to check every box on this list to benefit from therapy. Even one or two of these signs can indicate that professional support could help you feel better and function more effectively.
        </p>
      </section>

      {/* Section 3: Types of Mental Health Professionals */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="types-of-mental-health-professionals">Types of Mental Health Professionals</h2>
        <p>
          Understanding the different types of mental health professionals can help you find the right fit for your needs.
        </p>

        <div className="grid gap-4 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Therapists and Counselors (LPC, LCSW, LMFT)</h3>
            <p className="mb-0">
              Licensed Professional Counselors (LPC), Licensed Clinical Social Workers (LCSW), and Licensed Marriage and Family Therapists (LMFT) provide talk therapy for individuals, couples, and families. They help you work through emotional challenges, develop coping strategies, and achieve personal goals. This is the most common type of mental health provider and is often what people mean when they say "therapist."
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Psychologists (PhD, PsyD)</h3>
            <p className="mb-0">
              Psychologists hold doctoral degrees and can provide therapy as well as psychological testing and assessments. They're particularly helpful if you need a formal diagnosis or specialized testing for conditions like ADHD or learning disabilities.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Psychiatrists (MD, DO)</h3>
            <p className="mb-0">
              Psychiatrists are medical doctors who specialize in mental health. They can diagnose conditions, provide therapy, and prescribe medication. If you think you might benefit from medication for anxiety, depression, or other conditions, a psychiatrist can help.
            </p>
          </div>
        </div>

        <h3>Which professional is right for you?</h3>
        <p>
          For most people seeking talk therapy, a licensed therapist or counselor is an excellent choice. At <Link to="/therapist-matching" className="text-primary hover:underline">Coping and Healing Counseling</Link>, our team includes licensed professionals experienced in treating a wide range of concerns. If medication might be helpful, we can coordinate with psychiatrists to ensure you receive comprehensive care. Visit our <Link to="/faq" className="text-primary hover:underline">FAQ page</Link> for more information about therapist credentials.
        </p>
      </section>

      {/* Section 4: Common Types of Therapy */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="common-types-of-therapy">Common Types of Therapy</h2>
        <p>
          Different therapy approaches work better for different concerns. Here are the most common types you might encounter:
        </p>

        <div className="space-y-4 my-6">
          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">Cognitive Behavioral Therapy (CBT)</h3>
            <p className="mb-0">
              <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">CBT</Link> is one of the most widely researched and effective forms of therapy. It focuses on the connection between your thoughts, feelings, and behaviors. By identifying and changing negative thought patterns, you can shift how you feel and act. CBT is particularly effective for anxiety, depression, and phobias.
            </p>
          </div>

          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">EMDR (Eye Movement Desensitization and Reprocessing)</h3>
            <p className="mb-0">
              <Link to="/blog/emdr-therapy" className="text-primary hover:underline">EMDR</Link> is a specialized therapy designed to help people heal from trauma and PTSD. It uses guided eye movements or other forms of bilateral stimulation to help your brain process traumatic memories. Many people experience significant relief in fewer sessions than traditional talk therapy.
            </p>
          </div>

          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">Dialectical Behavior Therapy (DBT)</h3>
            <p className="mb-0">
              DBT combines cognitive-behavioral techniques with mindfulness practices. It's especially helpful for people who experience intense emotions, struggle with self-harm, or have borderline personality disorder. DBT teaches skills for emotional regulation, distress tolerance, and interpersonal effectiveness.
            </p>
          </div>

          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">Psychodynamic Therapy</h3>
            <p className="mb-0">
              This approach explores how your past experiences, particularly from childhood, influence your current thoughts, feelings, and behaviors. It's helpful for understanding deep-seated patterns and gaining insight into unconscious motivations.
            </p>
          </div>

          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">Couples and Family Therapy</h3>
            <p className="mb-0">
              These approaches focus on relationships rather than individuals. <Link to="/couples-therapy" className="text-primary hover:underline">Couples therapy</Link> helps partners improve communication, resolve conflicts, and strengthen their connection. Family therapy addresses dynamics within the family system.
            </p>
          </div>
        </div>

        <p>
          Your therapist will work with you to determine which approach—or combination of approaches—best fits your needs and goals. Many therapists integrate techniques from multiple modalities.
        </p>
      </section>

      {/* Section 5: How to Find the Right Therapist */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="how-to-find-the-right-therapist">How to Find the Right Therapist</h2>
        <p>
          Finding the right therapist is one of the most important steps in your mental health journey. The relationship between you and your therapist—often called the "therapeutic alliance"—is one of the strongest predictors of successful outcomes.
        </p>

        <h3>Consider your specific needs</h3>
        <p>
          Start by thinking about what you want to address in therapy. Are you dealing with anxiety, depression, relationship issues, or trauma? Look for therapists who specialize in your area of concern. A therapist experienced in treating your specific challenges will have the tools and knowledge to help you most effectively.
        </p>

        <h3>Check credentials and experience</h3>
        <p>
          Ensure any therapist you're considering is licensed in your state. In Georgia, look for credentials like LPC (Licensed Professional Counselor), LCSW (Licensed Clinical Social Worker), or LMFT (Licensed Marriage and Family Therapist). Don't hesitate to ask about their experience with your particular concerns.
        </p>

        <h3>Consider practical factors</h3>
        <p>Think about what matters most to you:</p>
        <ul>
          <li>Do you prefer <Link to="/online-therapy" className="text-primary hover:underline">online therapy</Link> or in-person sessions?</li>
          <li>What days and times work for your schedule?</li>
          <li>Is the therapist's location convenient (if meeting in person)?</li>
          <li>Do they accept your <Link to="/insurance" className="text-primary hover:underline">insurance</Link>?</li>
        </ul>

        <h3>Trust your instincts about fit</h3>
        <p>
          A good therapeutic relationship feels safe and supportive. You should feel heard, respected, and comfortable being honest. It's okay if the first therapist you try isn't the right fit—finding the right match sometimes takes a few tries.
        </p>
        <p>
          At <Link to="/therapist-matching" className="text-primary hover:underline">Coping and Healing Counseling</Link>, we offer a free consultation to help match you with a therapist who fits your needs, preferences, and goals.
        </p>
      </section>

      {/* Section 6: Questions to Ask a Potential Therapist */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="questions-to-ask-a-therapist">Questions to Ask a Potential Therapist</h2>
        <p>
          Before committing to a therapist, it's helpful to ask questions during an initial consultation. Here are important questions to consider:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-muted/30 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">About their experience:</h3>
            <ul className="mb-0 text-sm space-y-1">
              <li>"What experience do you have treating [your specific concern]?"</li>
              <li>"How long have you been practicing?"</li>
              <li>"What therapy approaches do you typically use?"</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">About the process:</h3>
            <ul className="mb-0 text-sm space-y-1">
              <li>"What does a typical session look like?"</li>
              <li>"How often would we meet?"</li>
              <li>"How do you measure progress?"</li>
              <li>"How will we know when I'm ready to end therapy?"</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">About logistics:</h3>
            <ul className="mb-0 text-sm space-y-1">
              <li>"What are your fees?"</li>
              <li>"Do you accept my insurance?"</li>
              <li>"What is your cancellation policy?"</li>
              <li>"Do you offer online sessions?"</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">About fit:</h3>
            <ul className="mb-0 text-sm space-y-1">
              <li>"How would you approach my specific situation?"</li>
              <li>"What can I expect in our first few sessions?"</li>
            </ul>
          </div>
        </div>

        <p>
          A good therapist will welcome your questions and answer them openly. If a therapist seems dismissive of your concerns or unwilling to explain their approach, that may be a sign they're not the right fit.
        </p>
      </section>

      {/* Section 7: Understanding Therapy Costs */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="understanding-therapy-costs">Understanding Therapy Costs</h2>
        <p>
          Cost is a common concern when considering therapy, but there are more options than you might think to make it affordable.
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 my-6 border border-primary/10">
          <h3 className="mt-0">Insurance coverage</h3>
          <p>
            Many insurance plans cover mental health services. At Coping and Healing Counseling, we accept most major insurance providers including CareSource, Amerigroup, Peach State, Optum, BlueCross BlueShield, Aetna, Cigna, Alliant, Humana, and others. Your out-of-pocket cost depends on your specific plan—many clients pay only a copay of $0-50 per session.
          </p>
          <p className="mb-0">
            Check our <Link to="/insurance" className="text-primary hover:underline">insurance page</Link> for details on specific providers, or <Link to="/contact-us" className="text-primary hover:underline">contact us</Link> to verify your benefits.
          </p>
        </div>

        <h3>Georgia Medicaid</h3>
        <p>
          If you have Georgia Medicaid through CareSource, Amerigroup, or Peach State, you likely have coverage for mental health services at little to no cost. We proudly accept Georgia Medicaid and believe everyone deserves access to quality mental health care.
        </p>

        <h3>Self-pay options</h3>
        <p>
          For those without insurance or who prefer not to use it, Coping and Healing Counseling offers therapy at <strong>$75 per week</strong> with a minimum purchase of 4 sessions. This transparent pricing makes budgeting for your mental health straightforward.
        </p>

        <h3>Free consultation</h3>
        <p>
          We offer a free initial consultation so you can learn about our services, ask questions, and get matched with a therapist—all before committing financially. <Link to="/therapist-matching" className="text-primary hover:underline">Schedule your free consultation</Link> to get started.
        </p>
        <p>
          For a deeper dive into paying for therapy, see our <Link to="/guides/therapy-cost" className="text-primary hover:underline">complete guide to therapy costs</Link>.
        </p>
      </section>

      {/* Section 8: Preparing for Your First Session */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="preparing-for-your-first-session">Preparing for Your First Session</h2>
        <p>
          A little preparation can help you get the most out of your first therapy session. Here's how to set yourself up for success:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">✓</span>
              Practical preparations
            </h3>
            <ul className="mb-0">
              <li>Have your insurance card ready (if applicable)</li>
              <li>Make a list of any medications you're currently taking</li>
              <li>Find a private, quiet space if you're doing an <Link to="/online-therapy" className="text-primary hover:underline">online session</Link></li>
              <li>Test your technology in advance for telehealth appointments</li>
              <li>Plan to arrive (or log on) a few minutes early</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">💭</span>
              Mental preparations
            </h3>
            <ul className="mb-0">
              <li>Think about what you want to address—you don't need a perfect script, just a general idea</li>
              <li>Consider writing down a few key points you want to share</li>
              <li>Prepare any questions you have for your therapist</li>
              <li>Remind yourself that it's okay to feel nervous</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 rounded-xl p-6 my-6">
          <h3 className="mt-0">What you don't need to do:</h3>
          <ul className="mb-0">
            <li>You don't need to have everything figured out</li>
            <li>You don't need to share your entire life story in the first session</li>
            <li>You don't need to "perform" or present yourself a certain way</li>
            <li>You don't need to know exactly what you want from therapy yet</li>
          </ul>
        </div>

        <p>
          The first session is about getting started and building a foundation. Your therapist will guide the conversation and help you feel comfortable. There's no pressure to dive into deep or painful topics before you're ready.
        </p>
      </section>

      {/* PLACEHOLDER: Sections 9-13 will be added in Part 3 */}
      <div className="my-12 p-6 bg-muted/50 rounded-xl text-center">
        <p className="text-muted-foreground italic">Content continues below... (Sections 9-13 coming in next update)</p>
      </div>
    </PillarPageTemplate>
  );
};

export default StartingTherapyGuide;
