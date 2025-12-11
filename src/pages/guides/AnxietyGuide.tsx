import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PillarPageTemplate from '@/components/PillarPageTemplate';
import { Button } from '@/components/ui/button';

const AnxietyGuide = () => {
  const midCta = (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-foreground mb-4">Struggling with Anxiety?</h3>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        You don't have to face anxiety alone. Our licensed therapists specialize in evidence-based anxiety treatment. Schedule your free consultation today.
      </p>
      <Link to="/therapist-matching">
        <Button variant="hero" size="lg">
          Get Matched with a Therapist
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );

  const endCta = (
    <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 rounded-2xl p-8 md:p-10 text-center border border-primary/20">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Take the First Step Toward Relief</h3>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Anxiety is treatable, and you deserve to feel better. Schedule a free consultation with one of our anxiety specialists and start your journey to calm. Appointments available within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/therapist-matching">
          <Button variant="hero" size="lg">
            Schedule Free Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <a href="tel:404-832-0102" className="text-primary hover:underline font-medium">
          Or call us at (404) 832-0102
        </a>
      </div>
    </div>
  );

  return (
    <PillarPageTemplate
      title="Understanding Anxiety: A Complete Guide"
      subtitle="Learn to recognize anxiety symptoms, understand different anxiety disorders, and discover effective treatment options to help you find relief."
      description="Complete guide to anxiety disorders. Learn to recognize symptoms, understand different types of anxiety, and discover effective treatment options including therapy."
      canonicalUrl="https://chctherapy.com/guides/anxiety"
      publishedDate="2025-01-15"
      updatedDate="2025-01-15"
      readTime={18}
      keywords="anxiety guide, anxiety symptoms, anxiety treatment, generalized anxiety disorder, social anxiety, panic attacks, anxiety therapy"
      midCta={midCta}
      endCta={endCta}
      relatedServices={[
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Anxiety Therapy in Georgia", url: "/anxiety-therapy-georgia" },
        { title: "Depression Therapy", url: "/depression-therapy-georgia" },
        { title: "PTSD Therapy", url: "/ptsd-therapy-georgia" }
      ]}
      relatedArticles={[
        { title: "Understanding Anxiety", url: "/blog/understanding-anxiety" },
        { title: "CBT Therapy Guide", url: "/blog/cognitive-behavioral-therapy" },
        { title: "EMDR Therapy", url: "/blog/emdr-therapy" },
        { title: "Mindfulness & Therapy", url: "/blog/mindfulness-therapy" }
      ]}
    >
      {/* Section 1: What Is Anxiety? */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="what-is-anxiety">What Is Anxiety?</h2>
        <p>
          Anxiety is your body's natural response to stress—a feeling of fear or worry about what's to come. Everyone experiences anxiety at some point, whether it's before a job interview, when making a big decision, or during times of uncertainty. In these situations, anxiety is normal and can even be helpful, keeping you alert and focused.
        </p>
        <p>
          However, when anxiety becomes persistent, overwhelming, or disproportionate to the situation, it may indicate an anxiety disorder. Anxiety disorders are among the most common mental health conditions, affecting approximately 40 million adults in the United States each year.
        </p>
        <p>
          The good news is that anxiety disorders are highly treatable. With the right support—whether through therapy, lifestyle changes, or a combination of approaches—most people experience significant relief from their symptoms.
        </p>
        <p>
          If anxiety is interfering with your daily life, relationships, or ability to function, know that you're not alone and help is available. This guide will help you understand anxiety better and explore your options for finding relief.
        </p>
      </section>

      {/* Section 2: Anxiety vs. Normal Worry */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="anxiety-vs-normal-worry">Anxiety vs. Normal Worry</h2>
        <p>
          It's important to distinguish between everyday worry and an anxiety disorder. Here's how they differ:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-foreground">Normal anxiety:</h3>
            <ul className="mb-0">
              <li>Is triggered by a specific situation or stressor</li>
              <li>Feels proportionate to the actual threat or challenge</li>
              <li>Subsides once the situation is resolved</li>
              <li>Doesn't significantly impair daily functioning</li>
              <li>Comes and goes</li>
            </ul>
          </div>

          <div className="bg-card border border-primary/30 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Anxiety disorder:</h3>
            <ul className="mb-0">
              <li>May occur without an obvious trigger</li>
              <li>Feels excessive or out of proportion to the situation</li>
              <li>Persists even after the stressor is gone</li>
              <li>Interferes with work, relationships, and daily activities</li>
              <li>Is constant or frequently recurring</li>
            </ul>
          </div>
        </div>

        <p>
          For example, feeling nervous before giving a presentation is normal anxiety. But if you spend weeks dreading the presentation, lose sleep over it, experience physical symptoms like nausea or heart palpitations, and consider calling in sick to avoid it—that may indicate an anxiety disorder.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-6">
          <p className="mb-0">
            <strong>The key question is:</strong> Is anxiety controlling your life, or are you controlling it? If anxiety is making decisions for you, limiting your experiences, or causing significant distress, it may be time to seek professional support.
          </p>
        </div>
      </section>

      {/* Section 3: Common Symptoms of Anxiety */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="symptoms-of-anxiety">Common Symptoms of Anxiety</h2>
        <p>
          Anxiety affects your mind and body in many ways. Recognizing the symptoms is the first step toward getting help.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-muted/30 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold text-primary">Emotional & Mental</h3>
            <ul className="mb-0 text-sm space-y-1">
              <li>Persistent worry or fear that's hard to control</li>
              <li>Feeling restless, on edge, or keyed up</li>
              <li>Difficulty concentrating or mind going blank</li>
              <li>Irritability</li>
              <li>Sense of impending doom or danger</li>
              <li>Feeling detached from yourself or reality</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold text-primary">Physical</h3>
            <ul className="mb-0 text-sm space-y-1">
              <li>Racing or pounding heart</li>
              <li>Shortness of breath or feeling smothered</li>
              <li>Chest tightness or pain</li>
              <li>Sweating, trembling, or shaking</li>
              <li>Nausea, stomach upset, or digestive issues</li>
              <li>Dizziness or lightheadedness</li>
              <li>Muscle tension, aches, or headaches</li>
              <li>Fatigue and exhaustion</li>
              <li>Sleep problems</li>
            </ul>
          </div>

          <div className="bg-muted/30 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold text-primary">Behavioral</h3>
            <ul className="mb-0 text-sm space-y-1">
              <li>Avoiding situations that trigger anxiety</li>
              <li>Seeking constant reassurance from others</li>
              <li>Procrastination or difficulty making decisions</li>
              <li>Compulsive behaviors (checking, counting, repeating)</li>
              <li>Social withdrawal</li>
            </ul>
          </div>
        </div>

        <p>
          You don't need to experience all of these symptoms to have an anxiety disorder. Even a few persistent symptoms that interfere with your quality of life warrant attention.
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-5 mt-6">
          <p className="mb-0">
            If you're unsure whether your symptoms indicate anxiety, our <Link to="/free-anxiety-test-online" className="text-primary hover:underline font-medium">free anxiety test</Link> can help you assess your symptoms.
          </p>
        </div>
      </section>

      {/* Section 4: Types of Anxiety Disorders */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="types-of-anxiety-disorders">Types of Anxiety Disorders</h2>
        <p>
          "Anxiety disorder" is an umbrella term that includes several distinct conditions. Understanding the different types can help you identify what you might be experiencing.
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Generalized Anxiety Disorder (GAD)</h3>
            <p className="mb-0">
              GAD involves persistent, excessive worry about many different areas of life—work, health, family, money, everyday matters. The worry is difficult to control and occurs more days than not for at least six months. Physical symptoms like muscle tension, fatigue, and sleep problems are common.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Social Anxiety Disorder</h3>
            <p className="mb-0">
              Also called social phobia, this involves intense fear of social situations where you might be judged, embarrassed, or scrutinized by others. It goes beyond shyness—people with <Link to="/mental-health-library/social-anxiety-disorder" className="text-primary hover:underline">social anxiety</Link> may avoid social situations entirely or endure them with extreme distress.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Panic Disorder</h3>
            <p className="mb-0">
              Panic disorder involves recurrent, unexpected panic attacks—sudden surges of intense fear that peak within minutes. Symptoms include heart palpitations, sweating, trembling, shortness of breath, and feelings of impending doom. People with <Link to="/mental-health-library/panic-disorder" className="text-primary hover:underline">panic disorder</Link> often fear having another attack and may avoid places where attacks have occurred.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Specific Phobias</h3>
            <p className="mb-0">
              Phobias are intense, irrational fears of specific objects or situations—heights, flying, spiders, blood, enclosed spaces, and many others. The fear is excessive relative to the actual danger and leads to avoidance behavior.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Obsessive-Compulsive Disorder (OCD)</h3>
            <p className="mb-0">
              <Link to="/mental-health-library/obsessive-compulsive-disorder" className="text-primary hover:underline">OCD</Link> involves unwanted, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce anxiety. Common obsessions include fears of contamination, harm, or making mistakes; common compulsions include cleaning, checking, counting, or arranging.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Post-Traumatic Stress Disorder (PTSD)</h3>
            <p className="mb-0">
              <Link to="/mental-health-library/ptsd" className="text-primary hover:underline">PTSD</Link> develops after experiencing or witnessing a traumatic event. Symptoms include flashbacks, nightmares, severe anxiety, and avoidance of trauma reminders. Learn more in our <Link to="/guides/trauma-ptsd" className="text-primary hover:underline">guide to trauma and PTSD</Link>.
            </p>
          </div>
        </div>

        <p>
          Many people experience symptoms of more than one type of anxiety disorder, and anxiety often co-occurs with depression. A thorough evaluation with a mental health professional can help clarify your diagnosis and guide treatment.
        </p>
      </section>

      {/* Section 5: What Causes Anxiety? */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="what-causes-anxiety">What Causes Anxiety?</h2>
        <p>
          Anxiety disorders don't have a single cause—they result from a complex interaction of factors.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-primary text-base">Biological factors:</h3>
            <ul className="mb-0 text-sm space-y-2">
              <li><strong>Brain chemistry:</strong> Imbalances in neurotransmitters like serotonin, dopamine, and norepinephrine can contribute to anxiety</li>
              <li><strong>Genetics:</strong> Anxiety disorders tend to run in families, suggesting a hereditary component</li>
              <li><strong>Physical health:</strong> Certain medical conditions (thyroid disorders, heart conditions) and substances (caffeine, medications) can trigger or worsen anxiety</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-primary text-base">Psychological factors:</h3>
            <ul className="mb-0 text-sm space-y-2">
              <li><strong>Personality:</strong> Some personality traits, like perfectionism or a tendency toward negative thinking, increase vulnerability</li>
              <li><strong>Coping skills:</strong> Limited or unhealthy coping strategies can make it harder to manage stress</li>
              <li><strong>Cognitive patterns:</strong> Patterns like catastrophizing (expecting the worst) or overestimating danger maintain anxiety</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-primary text-base">Environmental factors:</h3>
            <ul className="mb-0 text-sm space-y-2">
              <li><strong>Trauma:</strong> Past traumatic experiences, especially in childhood, increase risk for anxiety disorders</li>
              <li><strong>Chronic stress:</strong> Ongoing stress from work, relationships, finances, or health can trigger anxiety</li>
              <li><strong>Major life changes:</strong> Events like divorce, job loss, moving, or having a baby can precipitate anxiety</li>
              <li><strong>Learned behavior:</strong> Growing up with anxious parents or in an unpredictable environment can shape anxious responses</li>
            </ul>
          </div>
        </div>

        <p>
          Understanding the factors contributing to your anxiety can help guide treatment. However, knowing the cause isn't necessary to benefit from therapy—effective treatments work regardless of why anxiety developed.
        </p>
      </section>

      {/* Section 6: How Anxiety Is Diagnosed */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="how-anxiety-is-diagnosed">How Anxiety Is Diagnosed</h2>
        <p>
          If you think you might have an anxiety disorder, the first step is getting a proper evaluation. Here's what that process typically looks like:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-primary">Self-assessment</h3>
            <p className="mb-0">
              Many people start by taking a screening tool to assess their symptoms. Our <Link to="/free-anxiety-test-online" className="text-primary hover:underline">free anxiety test</Link> can help you understand whether your symptoms warrant professional attention. While these tests aren't diagnostic, they can help you decide whether to seek further evaluation.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-primary">Professional evaluation</h3>
            <p className="mb-2">A mental health professional will conduct a thorough assessment that includes:</p>
            <ul className="mb-0">
              <li>Discussing your symptoms, their severity, and how long you've experienced them</li>
              <li>Reviewing your medical history and any medications you're taking</li>
              <li>Asking about your personal and family mental health history</li>
              <li>Understanding how anxiety impacts your daily functioning</li>
              <li>Ruling out medical conditions that can mimic anxiety (like thyroid problems)</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-primary">Diagnostic criteria</h3>
            <p className="mb-0">
              Mental health professionals use the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders) to diagnose anxiety disorders. Each disorder has specific criteria related to symptom type, duration, and impact on functioning.
            </p>
          </div>
        </div>

        <h3>Why diagnosis matters</h3>
        <p>
          A proper diagnosis helps guide treatment. Different anxiety disorders may respond better to different therapeutic approaches, and understanding exactly what you're dealing with allows for more targeted, effective care.
        </p>
        <p>
          Don't self-diagnose—if you suspect you have an anxiety disorder, <Link to="/therapist-matching" className="text-primary hover:underline">reach out to a professional</Link> who can provide an accurate assessment and recommend appropriate treatment.
        </p>
      </section>

      {/* Section 7: Treatment Options for Anxiety */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="treatment-options">Treatment Options for Anxiety</h2>
        <p>
          The good news about anxiety disorders is that they're highly treatable. Most people experience significant improvement with proper treatment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="mt-0 text-primary">Psychotherapy (Talk Therapy)</h3>
            <p className="mb-0">
              Therapy is considered a first-line treatment for anxiety disorders. Working with a trained therapist, you'll learn to understand your anxiety, identify triggers, and develop skills to manage symptoms. Therapy addresses the root causes of anxiety, providing lasting benefits that continue after treatment ends.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0">Medication</h3>
            <p className="mb-2">For some people, medication can be an effective part of anxiety treatment. Common options include:</p>
            <ul className="mb-0 text-sm">
              <li>SSRIs and SNRIs (antidepressants that also treat anxiety)</li>
              <li>Buspirone (an anti-anxiety medication)</li>
              <li>Benzodiazepines (for short-term or acute anxiety)</li>
              <li>Beta-blockers (for physical symptoms like rapid heartbeat)</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0">Lifestyle modifications</h3>
            <p className="mb-2">Certain lifestyle changes can significantly reduce anxiety:</p>
            <ul className="mb-0 text-sm">
              <li>Regular exercise (proven to reduce anxiety symptoms)</li>
              <li>Adequate sleep</li>
              <li>Limiting caffeine and alcohol</li>
              <li>Stress management techniques</li>
              <li>Healthy diet</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0">Combination approach</h3>
            <p className="mb-0">
              Many people benefit from a combination of therapy, lifestyle changes, and sometimes medication. Your treatment plan should be tailored to your specific needs, symptoms, and preferences.
            </p>
          </div>
        </div>

        <p>
          At <Link to="/therapist-matching" className="text-primary hover:underline">Coping and Healing Counseling</Link>, we work with you to develop a personalized treatment approach that fits your life and goals.
        </p>
      </section>

      {/* Section 8: Therapy Approaches for Anxiety */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="therapy-approaches">Therapy Approaches for Anxiety</h2>
        <p>
          Several therapy approaches have proven effective for treating anxiety disorders. Understanding your options can help you make informed decisions about your care.
        </p>

        <div className="space-y-4 my-6">
          <div className="pl-6 border-l-4 border-primary/50">
            <h3 className="mt-0">Cognitive Behavioral Therapy (CBT)</h3>
            <p className="mb-2">
              <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">CBT</Link> is the gold standard treatment for anxiety disorders. It focuses on the connection between thoughts, feelings, and behaviors. In CBT, you'll learn to:
            </p>
            <ul className="mb-2">
              <li>Identify and challenge anxious thoughts</li>
              <li>Recognize cognitive distortions (like catastrophizing or mind-reading)</li>
              <li>Develop more balanced, realistic thinking patterns</li>
              <li>Gradually face feared situations through exposure</li>
            </ul>
            <p className="mb-0 text-sm text-muted-foreground">
              Research consistently shows CBT is highly effective for all types of anxiety disorders, with benefits that last long after therapy ends.
            </p>
          </div>

          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">Exposure Therapy</h3>
            <p className="mb-0">
              A component of CBT, exposure therapy involves gradually and systematically facing feared situations or objects. By confronting fears in a controlled, supportive way, you learn that anxiety decreases naturally over time and that feared outcomes often don't occur. Exposure is particularly effective for phobias, social anxiety, OCD, and PTSD.
            </p>
          </div>

          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">EMDR (Eye Movement Desensitization and Reprocessing)</h3>
            <p className="mb-0">
              <Link to="/blog/emdr-therapy" className="text-primary hover:underline">EMDR</Link> is especially effective when anxiety is rooted in past trauma. It helps the brain process traumatic memories, reducing their emotional charge and the anxiety they trigger. Learn more in our <Link to="/guides/trauma-ptsd" className="text-primary hover:underline">trauma and PTSD guide</Link>.
            </p>
          </div>

          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">Acceptance and Commitment Therapy (ACT)</h3>
            <p className="mb-0">
              ACT helps you accept anxious thoughts and feelings rather than fighting them, while committing to actions aligned with your values. It's particularly helpful for people who've struggled with trying to control or eliminate anxiety.
            </p>
          </div>

          <div className="pl-6 border-l-4 border-primary/30">
            <h3 className="mt-0">Mindfulness-Based Therapies</h3>
            <p className="mb-0">
              Approaches like Mindfulness-Based Stress Reduction (MBSR) teach you to observe thoughts and feelings without judgment, reducing reactivity to anxiety triggers. <Link to="/blog/mindfulness-therapy" className="text-primary hover:underline">Mindfulness practices</Link> can be valuable standalone treatments or complements to other therapies.
            </p>
          </div>
        </div>

        <p>
          Your therapist will recommend the approach—or combination of approaches—best suited to your specific type of anxiety and personal preferences.
        </p>
      </section>

      {/* Section 9: Self-Help Strategies for Managing Anxiety */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="self-help-strategies">Self-Help Strategies for Managing Anxiety</h2>
        <p>
          While professional treatment is important for anxiety disorders, there are also strategies you can use on your own to manage symptoms.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">🌬️</span>
              Breathing techniques
            </h3>
            <p className="mb-2 text-sm">When anxiety spikes, your breathing becomes shallow and rapid. Deep breathing activates your body's relaxation response:</p>
            <ul className="mb-0 text-sm">
              <li>Try 4-7-8 breathing: Inhale for 4 counts, hold for 7, exhale for 8</li>
              <li>Practice diaphragmatic (belly) breathing</li>
              <li>Use breathing exercises at the first sign of anxiety, not just during panic</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">🎯</span>
              Grounding techniques
            </h3>
            <p className="mb-2 text-sm">Grounding brings you back to the present moment when anxiety pulls you into worried thoughts:</p>
            <ul className="mb-0 text-sm">
              <li>5-4-3-2-1 technique: Name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste</li>
              <li>Focus on physical sensations (feet on floor, hands on desk)</li>
              <li>Hold something cold or textured</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">💪</span>
              Lifestyle habits
            </h3>
            <p className="mb-2 text-sm">Daily habits significantly impact anxiety levels:</p>
            <ul className="mb-0 text-sm">
              <li>Exercise regularly—even a 30-minute walk helps</li>
              <li>Prioritize sleep (7-9 hours for most adults)</li>
              <li>Limit caffeine, especially after noon</li>
              <li>Reduce alcohol (it worsens anxiety long-term)</li>
              <li>Eat regular, balanced meals</li>
            </ul>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="mt-0 text-primary flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">💭</span>
              Thought management
            </h3>
            <ul className="mb-0 text-sm">
              <li>Write down worried thoughts to externalize them</li>
              <li>Ask yourself: "Is this thought helpful? Is it realistic?"</li>
              <li>Schedule "worry time"—a set period to address concerns</li>
              <li>Practice self-compassion; don't criticize yourself for feeling anxious</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/30 rounded-xl p-6 my-6">
          <h3 className="mt-0">Stress reduction</h3>
          <ul className="mb-0">
            <li>Build relaxation into your routine (meditation, yoga, hobbies)</li>
            <li>Set boundaries to protect your energy</li>
            <li>Break overwhelming tasks into smaller steps</li>
            <li>Connect with supportive people</li>
          </ul>
        </div>

        <p>
          These strategies are most effective when used consistently, not just during acute anxiety. However, if self-help isn't enough, don't hesitate to seek professional support.
        </p>
      </section>

      {/* Section 10: When to Seek Professional Help */}
      <section className="mb-12 pb-10 border-b border-border/40">
        <h2 id="when-to-seek-help">When to Seek Professional Help</h2>
        <p>
          Self-help strategies are valuable, but sometimes professional support is necessary. Consider seeking help if:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">Your anxiety is persistent</h3>
            <p className="mb-0 text-sm text-muted-foreground">
              Occasional anxiety is normal, but if you've been experiencing significant anxiety most days for several weeks or months, professional help can make a real difference.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">Anxiety interferes with daily life</h3>
            <p className="mb-0 text-sm text-muted-foreground">
              If anxiety is affecting your ability to work, maintain relationships, care for yourself, or enjoy activities, it's time to reach out.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">You're avoiding things because of anxiety</h3>
            <p className="mb-0 text-sm text-muted-foreground">
              When you start making decisions based on avoiding anxiety—skipping social events, not applying for jobs, avoiding driving—anxiety is controlling your life.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">Physical symptoms are significant</h3>
            <p className="mb-0 text-sm text-muted-foreground">
              Frequent panic attacks, persistent physical symptoms (chronic muscle tension, stomach problems, headaches), or sleep problems warrant professional attention.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">You're using unhealthy coping mechanisms</h3>
            <p className="mb-0 text-sm text-muted-foreground">
              If you're relying on alcohol, drugs, food, or other unhealthy behaviors to manage anxiety, therapy can help you develop healthier strategies.
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="mt-0 text-base font-semibold">You just want support</h3>
            <p className="mb-0 text-sm text-muted-foreground">
              You don't need to be in crisis to benefit from therapy. If anxiety is bothering you and you want help, that's reason enough.
            </p>
          </div>
        </div>

        <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5 my-6">
          <h3 className="mt-0 text-destructive">If you've had thoughts of self-harm</h3>
          <p className="mb-0">
            If anxiety has led to thoughts of hurting yourself, please reach out immediately. Contact the 988 Suicide & Crisis Lifeline by calling or texting 988, or visit our <Link to="/emergency-resources" className="text-primary hover:underline font-medium">emergency resources page</Link>.
          </p>
        </div>

        <p>
          At Coping and Healing Counseling, we offer <Link to="/therapist-matching" className="text-primary hover:underline">free consultations</Link> to help you determine if therapy is right for you. Appointments are available within 24 hours.
        </p>
      </section>

      {/* PLACEHOLDER: Sections 11-13 will be added in Part 3 */}
      <div className="my-12 p-6 bg-muted/50 rounded-xl text-center">
        <p className="text-muted-foreground italic">Content continues below... (Sections 11-13 coming in next update)</p>
      </div>
    </PillarPageTemplate>
  );
};

export default AnxietyGuide;
