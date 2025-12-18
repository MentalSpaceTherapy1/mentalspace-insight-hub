import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { generateArticleSchema } from '@/utils/schemaGenerators';

const FirstTherapySessionWhatToExpect = () => {
  const articleSchema = generateArticleSchema(
    "Your First Therapy Session: What to Expect",
    "Nervous about your first therapy appointment? Learn exactly what happens in a first session, what to bring, and how to prepare. Make your first visit easier.",
    "https://chctherapy.com/blog/first-therapy-session-what-to-expect",
    "2024-12-18",
    "2024-12-18",
    "https://chctherapy.com/therapy-hero-og.jpg"
  );

  return (
    <>
      <SEOHead
        title="Your First Therapy Session: What to Expect | CHC Georgia"
        description="Nervous about your first therapy appointment? Learn exactly what happens in a first session, what to bring, and how to prepare. Make your first visit easier."
        canonicalUrl="https://chctherapy.com/blog/first-therapy-session-what-to-expect"
        keywords="first therapy session, what to expect therapy, first therapy appointment, first time therapy, what happens in therapy"
        ogTitle="Your First Therapy Session: What to Expect | CHC Georgia"
        ogDescription="Nervous about your first therapy appointment? Learn exactly what happens in a first session, what to bring, and how to prepare."
        ogImage="https://chctherapy.com/therapy-hero-og.jpg"
        ogType="article"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-foreground">First Therapy Session</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Getting Started</span>
              <time dateTime="2024-12-18">December 18, 2024</time>
              <span>·</span>
              <span>12 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your First Therapy Session: What to Expect
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about your first therapy appointment—from what happens 
              in the room to what to bring and how to prepare.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Deciding to start therapy is a big step. If you've never been to therapy before—or if it's 
              been a while—it's completely normal to feel nervous about what to expect.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Will you have to share everything right away? Will the therapist judge you? What if you don't 
              know what to say?
            </p>

            <p className="text-lg leading-relaxed mb-8">
              These worries are common, and understanding what actually happens in a first session can 
              help ease them. Here's everything you need to know about your first therapy appointment.
            </p>

            {/* Before Your Session */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Before Your Session</h2>
              <p className="mb-4">A little preparation can help you feel more comfortable.</p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Complete paperwork in advance</h3>
              <p className="mb-4">Most therapists send intake forms before your first session. These typically include:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Basic contact and demographic information</li>
                <li>Health history questionnaire</li>
                <li>Insurance information (if applicable)</li>
                <li>Consent forms explaining confidentiality</li>
                <li>A brief questionnaire about your current concerns</li>
              </ul>
              <p className="mb-6">Complete these ahead of time so your session can focus on you, not paperwork.</p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Think about what you want to address</h3>
              <p className="mb-4">You don't need a script, but it helps to consider:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>What prompted you to seek therapy now?</li>
                <li>What are your main concerns or symptoms?</li>
                <li>What do you hope to gain from therapy?</li>
              </ul>
              <p className="mb-6">Don't worry about having perfect answers. Your therapist will help guide the conversation.</p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Prepare practical details</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Know how to get there (or how to log in for <Link to="/online-therapy" className="text-primary hover:underline">online therapy</Link>)</li>
                <li>Plan to arrive 10-15 minutes early for in-person sessions</li>
                <li>Have your insurance card ready if using insurance</li>
                <li>Charge your device if doing teletherapy</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Set realistic expectations</h3>
              <p className="mb-6">
                Your first session is a beginning, not a solution. You're starting a process, and that's 
                enough for day one.
              </p>
            </section>

            {/* What Happens in a First Session */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Happens in a First Therapy Session</h2>
              <p className="mb-6">
                First sessions typically run 45-60 minutes (sometimes 60-90 for intake). Here's how they 
                usually unfold:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Welcome and introductions</h3>
              <p className="mb-6">
                Your therapist will greet you, introduce themselves, and help you get settled. They 
                understand you might be nervous and will try to put you at ease.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Discussion of logistics</h3>
              <p className="mb-4">Early in the session, your therapist will cover:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Confidentiality and its limits (when they must break it)</li>
                <li>Their cancellation policy</li>
                <li>How to contact them between sessions</li>
                <li>General expectations for therapy</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Getting to know you</h3>
              <p className="mb-4">
                This is the bulk of the first session. Your therapist will ask questions to understand:
              </p>
              
              <p className="font-medium mb-2 italic">Your current concerns:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>What brought you to therapy?</li>
                <li>What symptoms are you experiencing?</li>
                <li>How long have you been struggling with this?</li>
                <li>How is it affecting your daily life?</li>
              </ul>

              <p className="font-medium mb-2 italic">Your background:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Brief personal history</li>
                <li>Family background</li>
                <li>Previous therapy or mental health treatment</li>
                <li>Current life situation (work, relationships, living situation)</li>
              </ul>

              <p className="font-medium mb-2 italic">Your strengths and resources:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>What coping strategies have you tried?</li>
                <li>What support systems do you have?</li>
                <li>What's going well in your life?</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Goal setting</h3>
              <p className="mb-4">Toward the end, you might begin discussing:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>What you want to work on</li>
                <li>What "better" would look like for you</li>
                <li>Initial goals for therapy</li>
              </ul>
              <p className="mb-6">This may happen in the first session or be explored more in session two.</p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Wrap-up and next steps</h3>
              <p className="mb-4">Your therapist will:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Summarize what they learned</li>
                <li>Share initial impressions (if appropriate)</li>
                <li>Explain what to expect going forward</li>
                <li>Schedule your next appointment</li>
              </ul>
            </section>

            {/* What Your Therapist Is Doing */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Your Therapist Is Doing</h2>
              <p className="mb-6">
                Understanding the therapist's perspective can help you feel less like you're being evaluated.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">They're gathering information</h3>
              <p className="mb-6">
                Your therapist is building a picture of who you are, what you're struggling with, and how 
                they can help. They're not judging you—they're trying to understand you.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">They're assessing fit</h3>
              <p className="mb-6">
                They're also determining if they're the right therapist for your needs. If they specialize 
                in something different or think you'd benefit from a different approach, they may suggest 
                alternatives.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">They're building rapport</h3>
              <p className="mb-6">
                The relationship between you and your therapist matters enormously. They're working to 
                create a safe, comfortable environment where you can eventually share difficult things.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">They're not expecting perfection</h3>
              <p className="mb-6">
                Therapists know first sessions can be awkward. They're not expecting you to be articulate, 
                have everything figured out, or be perfectly composed. They've seen it all.
              </p>
            </section>

            {/* Common Questions */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Common Questions About First Sessions</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">Do I have to tell them everything?</h3>
              <p className="mb-6">
                No. Share what you're comfortable sharing. Trust builds over time, and you can disclose 
                more as you feel safer. Your therapist won't push you to reveal more than you're ready for.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">What if I cry?</h3>
              <p className="mb-6">
                That's completely fine and very common. Therapists always have tissues handy. Crying is 
                a natural part of processing emotions—it's not something to be embarrassed about.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">What if I don't know what to say?</h3>
              <p className="mb-6">
                Your therapist will guide the conversation. They have questions to ask and know how to 
                draw out what's relevant. You don't need to come with a speech prepared.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">What if I don't like my therapist?</h3>
              <p className="mb-6">
                It happens. Not every therapist-client pair is a good fit. Give it 2-3 sessions to get a 
                better sense, but if you feel it's not working, it's okay to try someone else. Read our{' '}
                <Link to="/guides/finding-therapist" className="text-primary hover:underline">
                  guide to finding the right therapist
                </Link>{' '}
                for more on this.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Will they give me homework?</h3>
              <p className="mb-6">
                Possibly, though usually not in the first session. Some therapists assign exercises 
                between sessions; others don't. This depends on the therapeutic approach and what 
                you're working on.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">How do I know if it's working?</h3>
              <p className="mb-6">
                Progress in therapy takes time. But over several sessions, you might notice you understand 
                yourself better, have new coping strategies, or feel even slightly more hopeful. Learn more 
                about{' '}
                <Link to="/guides/starting-therapy" className="text-primary hover:underline">
                  how to tell if therapy is working
                </Link>.
              </p>
            </section>

            {/* What to Bring */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">What to Bring to Your First Session</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">Practical items:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Completed intake paperwork (if not done digitally)</li>
                <li>Insurance card</li>
                <li>Photo ID</li>
                <li>Payment (if required)</li>
                <li>A way to schedule follow-up appointments (your calendar)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Optional but helpful:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Notes on what you want to discuss</li>
                <li>List of current medications</li>
                <li>Questions for your therapist</li>
                <li>Contact information for other healthcare providers</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">For online sessions:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Charged device with working camera and microphone</li>
                <li>Private space where you won't be interrupted</li>
                <li>Headphones for privacy</li>
                <li>Stable internet connection</li>
                <li>Backup phone number in case of technical issues</li>
              </ul>
            </section>

            {/* Tips for Getting the Most Out */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tips for Getting the Most Out of Your First Session</h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">Be honest</h3>
              <p className="mb-6">
                Your therapist can only help with what they know about. While you don't have to share 
                everything immediately, being honest about your concerns gives them what they need to help you.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Ask questions</h3>
              <p className="mb-6">
                This is your therapy. If you're confused about something, want to know more about their 
                approach, or have concerns—ask.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Notice how you feel</h3>
              <p className="mb-6">
                After the session, pay attention to how you felt with this therapist. Did you feel heard? 
                Judged? Comfortable? Your gut feeling matters.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Manage your expectations</h3>
              <p className="mb-6">
                You probably won't leave your first session transformed. That's normal. Therapy is a 
                process, and the first session is just the beginning.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Show up as you are</h3>
              <p className="mb-6">
                You don't need to present your best self or have your thoughts perfectly organized. 
                Come as you are—that's what therapy is for.
              </p>
            </section>

            {/* What Comes After */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">What Comes After the First Session</h2>
              <p className="mb-4">After your intake, your therapist will likely:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Develop a sense of what you're working with</li>
                <li>Begin formulating an approach</li>
                <li>Set tentative goals with you</li>
                <li>Establish a regular meeting schedule (typically weekly)</li>
              </ul>
              <p className="mb-6">
                The following sessions will dive deeper into your concerns and begin the actual work of 
                therapy. Some people feel relief after the first session just from talking; for others, 
                it takes a few sessions to feel comfortable.
              </p>
              <p className="mb-6">
                For more on the therapy process, read our{' '}
                <Link to="/guides/starting-therapy" className="text-primary hover:underline">
                  comprehensive guide to starting therapy
                </Link>.
              </p>
            </section>

            {/* First Session at CHC */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">First Session at CHC</h2>
              <p className="mb-6">
                At{' '}
                <Link to="/therapist-matching" className="text-primary hover:underline">
                  Coping and Healing Counseling
                </Link>, we make your first session as comfortable as possible:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Free consultation first</h3>
              <p className="mb-6">
                Before you even book a full session, we offer a free consultation to discuss your needs 
                and match you with the right therapist. This takes the pressure off your first "real" session.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Flexible options</h3>
              <p className="mb-6">
                Choose in-person or{' '}
                <Link to="/online-therapy" className="text-primary hover:underline">online therapy</Link>
                —whatever feels more comfortable for you. Many first-time therapy clients prefer starting online.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Fast scheduling</h3>
              <p className="mb-6">
                Most clients get an appointment within 24 hours. No long waits when you're ready to start.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Insurance accepted</h3>
              <p className="mb-6">
                We accept most major insurance plans, including{' '}
                <Link to="/insurance/caresource" className="text-primary hover:underline">Georgia Medicaid</Link>. 
                Check our{' '}
                <Link to="/guides/therapy-cost" className="text-primary hover:underline">therapy cost guide</Link>{' '}
                for payment details.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Supportive therapists</h3>
              <p className="mb-6">
                Our therapists specialize in creating a welcoming environment. They know first sessions 
                can feel vulnerable, and they'll meet you where you are.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to take the first step?</h2>
              <div className="space-y-3 mb-6">
                <p>
                  <Link to="/therapist-matching" className="text-primary hover:underline font-medium">
                    → Schedule your free consultation
                  </Link>
                </p>
                <p>
                  <Link to="/insurance" className="text-primary hover:underline font-medium">
                    → Check if we accept your insurance
                  </Link>
                </p>
                <p>
                  <Link to="/faq" className="text-primary hover:underline font-medium">
                    → Read our FAQ for more answers
                  </Link>
                </p>
              </div>
              <p className="text-muted-foreground">
                The hardest part is often just starting. Once you're in the room (or on the screen), it gets easier.
              </p>
            </section>
          </div>

          {/* Author/Source */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">CHC</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Coping and Healing Counseling</p>
                <p className="text-sm text-muted-foreground">
                  Licensed therapists helping Georgians navigate their mental health journey.
                </p>
              </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default FirstTherapySessionWhatToExpect;
