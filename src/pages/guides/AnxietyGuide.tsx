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

      {/* PLACEHOLDER: Sections 6-10 will be added in Part 2 */}
      <div className="my-12 p-6 bg-muted/50 rounded-xl text-center">
        <p className="text-muted-foreground italic">Content continues below... (Sections 6-10 coming in next update)</p>
      </div>
    </PillarPageTemplate>
  );
};

export default AnxietyGuide;
