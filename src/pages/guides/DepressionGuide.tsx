import { Link } from 'react-router-dom';
import PillarPageTemplate from '@/components/PillarPageTemplate';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const DepressionGuide = () => {
  return (
    <PillarPageTemplate
      title="Understanding Depression: A Complete Guide"
      subtitle="Learn to recognize the signs of depression, understand what causes it, and discover effective treatment options that can help you feel like yourself again."
      description="Complete guide to depression. Recognize the signs, understand causes, and learn about effective treatment options including therapy. Help is available."
      canonicalUrl="https://chctherapy.com/guides/depression"
      publishedDate="2025-01-15"
      updatedDate="2025-01-15"
      readTime={20}
      keywords="depression guide, depression symptoms, depression causes, depression treatment, major depressive disorder, clinical depression, depression therapy, signs of depression"
      relatedServices={[
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Depression Therapy in Georgia", url: "/depression-therapy-georgia" }
      ]}
      relatedArticles={[
        { title: "Depression in Adults", url: "/blog/depression-adults" },
        { title: "CBT for Depression", url: "/blog/cognitive-behavioral-therapy" },
        { title: "Starting Therapy Guide", url: "/guides/starting-therapy" },
        { title: "Finding a Therapist", url: "/guides/finding-therapist" }
      ]}
      midCta={
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center my-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">You Don't Have to Face Depression Alone</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our compassionate therapists specialize in depression treatment and are here to help you find your way back to feeling like yourself. Take the first step today.
          </p>
          <Link to="/therapist-matching">
            <Button variant="hero" size="lg">
              Schedule Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      }
    >
      {/* Section 1: What Is Depression? */}
      <section className="mb-12">
        <h2 id="what-is-depression" className="text-2xl md:text-3xl font-bold text-foreground mb-6">What Is Depression?</h2>
        
        <p className="text-muted-foreground mb-4">
          Depression is more than just feeling sad or going through a rough patch. It's a serious mental health condition that affects how you feel, think, and handle daily activities. Unlike ordinary sadness, which passes with time, depression persists and can significantly impact your quality of life.
        </p>
        
        <p className="text-muted-foreground mb-4">
          Clinical depression—also called major depressive disorder—is one of the most common mental health conditions, affecting more than 21 million adults in the United States each year. It can affect anyone regardless of age, gender, race, or background.
        </p>
        
        <p className="text-muted-foreground mb-4">
          The most important thing to understand about depression is that it's not a character flaw or weakness. You can't simply "snap out of it" through willpower alone. Depression is a medical condition with biological, psychological, and social components, and like other medical conditions, it responds to proper treatment.
        </p>
        
        <p className="text-muted-foreground">
          If you're experiencing depression, know that effective treatments exist. Most people who receive appropriate care experience significant improvement in their symptoms. Recovery is not only possible—it's expected with the right support.
        </p>
      </section>

      {/* Section 2: Depression vs. Sadness */}
      <section className="mb-12">
        <h2 id="depression-vs-sadness" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Depression vs. Sadness</h2>
        
        <p className="text-muted-foreground mb-4">
          Everyone feels sad sometimes. Sadness is a normal human emotion that arises in response to disappointment, loss, or difficult circumstances. But depression is different from ordinary sadness in important ways.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Normal sadness:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Has a clear cause or trigger</li>
            <li>Lifts when circumstances improve or time passes</li>
            <li>Doesn't significantly impair daily functioning</li>
            <li>Allows you to still experience moments of pleasure</li>
            <li>Typically lasts days, not weeks or months</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Depression:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>May occur without an obvious cause</li>
            <li>Persists regardless of circumstances</li>
            <li>Interferes with work, relationships, and self-care</li>
            <li>Makes it difficult to enjoy anything, even things you used to love</li>
            <li>Lasts at least two weeks, often much longer</li>
            <li>Includes physical symptoms (sleep changes, appetite changes, fatigue)</li>
            <li>May include thoughts of worthlessness or suicide</li>
          </ul>
        </div>
        
        <p className="text-muted-foreground mb-4">
          A key distinction is that sadness is typically temporary and situational, while depression is persistent and pervasive. With sadness, you might feel down but can still function and find moments of happiness. With depression, a heavy fog settles over everything, making even small tasks feel overwhelming.
        </p>
        
        <p className="text-muted-foreground">
          If you've been feeling persistently down for more than two weeks and it's affecting your daily life, you may be experiencing depression rather than ordinary sadness.
        </p>
      </section>

      {/* Section 3: Common Signs and Symptoms */}
      <section className="mb-12">
        <h2 id="common-signs-and-symptoms" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Common Signs and Symptoms of Depression</h2>
        
        <p className="text-muted-foreground mb-6">
          Depression manifests differently in different people, but there are common signs to watch for. You don't need to experience every symptom to have depression—even a few persistent symptoms warrant attention.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Emotional symptoms:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Persistent sad, anxious, or "empty" mood</li>
            <li>Feelings of hopelessness or pessimism</li>
            <li>Feelings of guilt, worthlessness, or helplessness</li>
            <li>Loss of interest or pleasure in hobbies and activities</li>
            <li>Irritability, frustration, or restlessness</li>
            <li>Feeling emotionally numb or disconnected</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Physical symptoms:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Fatigue and decreased energy</li>
            <li>Sleep problems—insomnia or sleeping too much</li>
            <li>Appetite changes—eating too little or too much</li>
            <li>Unexplained aches, pains, headaches, or digestive problems</li>
            <li>Slowed movement or speech</li>
            <li>Restlessness or inability to sit still</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Cognitive symptoms:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Difficulty concentrating, remembering, or making decisions</li>
            <li>Negative, self-critical thoughts</li>
            <li>Thoughts of death or suicide</li>
            <li>Difficulty seeing a positive future</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Behavioral symptoms:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Withdrawing from friends and family</li>
            <li>Neglecting responsibilities or self-care</li>
            <li>Missing work or school</li>
            <li>Avoiding activities you once enjoyed</li>
            <li>Moving or speaking more slowly than usual</li>
          </ul>
        </div>
        
        <p className="text-muted-foreground">
          Symptoms typically persist for at least two weeks and represent a change from previous functioning. If you're experiencing several of these symptoms, our <Link to="/free-depression-test-online" className="text-primary hover:underline">free depression test</Link> can help you assess whether professional support might help.
        </p>
      </section>

      {/* Section 4: Types of Depression */}
      <section className="mb-12">
        <h2 id="types-of-depression" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Types of Depression</h2>
        
        <p className="text-muted-foreground mb-6">
          "Depression" encompasses several related conditions, each with distinct features. Understanding the type you're experiencing can help guide treatment.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Major Depressive Disorder (MDD)</h3>
          <p className="text-muted-foreground">
            The most common form of depression, MDD involves severe symptoms that interfere with daily life. Symptoms must be present most of the day, nearly every day, for at least two weeks. Some people experience a single episode, while others have recurring episodes throughout their lives.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Persistent Depressive Disorder (Dysthymia)</h3>
          <p className="text-muted-foreground">
            This is a chronic, low-grade depression lasting at least two years. Symptoms are less severe than major depression but more persistent. People with dysthymia may feel like depression is just "part of who they are" because it's been present so long.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Seasonal Affective Disorder (SAD)</h3>
          <p className="text-muted-foreground">
            SAD is depression that follows a seasonal pattern, typically beginning in fall or winter when daylight decreases and lifting in spring. Symptoms often include fatigue, oversleeping, carbohydrate cravings, and weight gain.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Postpartum Depression</h3>
          <p className="text-muted-foreground">
            More than "baby blues," <Link to="/blog/postpartum-depression" className="text-primary hover:underline">postpartum depression</Link> is a serious condition affecting some mothers (and fathers) after childbirth. Symptoms include severe sadness, anxiety, exhaustion, and difficulty bonding with the baby.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Bipolar Depression</h3>
          <p className="text-muted-foreground">
            People with <Link to="/mental-health-library/bipolar-disorder" className="text-primary hover:underline">bipolar disorder</Link> experience episodes of depression alternating with episodes of mania or hypomania (elevated mood, energy, and activity). Treatment differs from other forms of depression, making accurate diagnosis essential.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Situational Depression (Adjustment Disorder)</h3>
          <p className="text-muted-foreground">
            This type develops in response to a specific stressful event—divorce, job loss, death of a loved one. While triggered by circumstances, symptoms may be severe enough to warrant treatment.
          </p>
        </div>
        
        <p className="text-muted-foreground">
          Many people experience features of multiple types. A mental health professional can help clarify your diagnosis and recommend appropriate treatment.
        </p>
      </section>

      {/* Section 5: What Causes Depression? */}
      <section className="mb-12">
        <h2 id="what-causes-depression" className="text-2xl md:text-3xl font-bold text-foreground mb-6">What Causes Depression?</h2>
        
        <p className="text-muted-foreground mb-6">
          Depression doesn't have a single cause. It typically results from a combination of factors that vary from person to person.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Biological factors:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Brain chemistry:</strong> Imbalances in neurotransmitters like serotonin, norepinephrine, and dopamine play a role in depression</li>
            <li><strong>Genetics:</strong> Depression runs in families—having a close relative with depression increases your risk</li>
            <li><strong>Hormones:</strong> Hormonal changes (during pregnancy, postpartum, menopause, or due to thyroid problems) can trigger depression</li>
            <li><strong>Medical conditions:</strong> Chronic illness, chronic pain, and certain medications can contribute to depression</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Psychological factors:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Thinking patterns:</strong> Negative, self-critical, or pessimistic thinking styles increase vulnerability</li>
            <li><strong>Low self-esteem:</strong> Persistent feelings of inadequacy or self-criticism</li>
            <li><strong>Poor coping skills:</strong> Limited ability to manage stress and adversity</li>
            <li><strong>Perfectionism:</strong> Unrealistic standards and harsh self-judgment</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Life experiences:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Trauma:</strong> Abuse, violence, neglect, or other traumatic experiences, especially in childhood</li>
            <li><strong>Loss:</strong> Death of a loved one, end of a relationship, job loss</li>
            <li><strong>Chronic stress:</strong> Ongoing difficulties with work, relationships, finances, or health</li>
            <li><strong>Isolation:</strong> Loneliness and lack of social support</li>
            <li><strong>Major life changes:</strong> Even positive changes can trigger depression in vulnerable individuals</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Social and environmental factors:</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Lack of social support</li>
            <li>Relationship problems</li>
            <li>Financial difficulties</li>
            <li>Discrimination or marginalization</li>
            <li>Living in stressful or unsafe environments</li>
          </ul>
        </div>
        
        <p className="text-muted-foreground">
          Understanding what contributed to your depression can inform treatment, but identifying a cause isn't necessary to benefit from therapy. Effective treatments work regardless of why depression developed.
        </p>
      </section>

      {/* Section 6: How Depression Is Diagnosed */}
      <section className="mb-12">
        <h2 id="how-depression-is-diagnosed" className="text-2xl md:text-3xl font-bold text-foreground mb-6">How Depression Is Diagnosed</h2>
        
        <p className="text-muted-foreground mb-6">
          If you think you might have depression, getting a proper evaluation is the first step toward feeling better. Here's what to expect:
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Self-assessment</h3>
          <p className="text-muted-foreground">
            Many people start by taking a screening tool to evaluate their symptoms. Our <Link to="/free-depression-test-online" className="text-primary hover:underline">free depression test</Link> can help you understand whether your symptoms suggest depression. While these tests aren't diagnostic, they can help you decide whether to seek professional evaluation.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Professional evaluation</h3>
          <p className="text-muted-foreground mb-3">
            A mental health professional will conduct a comprehensive assessment that typically includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>A detailed conversation about your symptoms, when they started, and how severe they are</li>
            <li>Questions about your medical history, current medications, and substance use</li>
            <li>Discussion of your family mental health history</li>
            <li>Evaluation of how symptoms are affecting your work, relationships, and daily functioning</li>
            <li>Assessment for other conditions that may co-occur with depression, such as anxiety</li>
            <li>Ruling out medical conditions that can cause depression-like symptoms (thyroid disorders, vitamin deficiencies)</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Diagnostic criteria</h3>
          <p className="text-muted-foreground">
            Mental health professionals use the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders) to diagnose depression. For major depressive disorder, you must have at least five symptoms (including depressed mood or loss of interest) present most of the day, nearly every day, for at least two weeks.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Why diagnosis matters</h3>
          <p className="text-muted-foreground">
            An accurate diagnosis ensures you receive appropriate treatment. Different types of depression may respond better to different approaches, and distinguishing depression from other conditions (like bipolar disorder) is crucial for effective care.
          </p>
        </div>
        
        <p className="text-muted-foreground">
          If you've been struggling with depression symptoms, don't wait—<Link to="/therapist-matching" className="text-primary hover:underline">reach out to a professional</Link> who can provide a thorough evaluation and guide you toward the right treatment.
        </p>
      </section>

      {/* Section 7: Treatment Options for Depression */}
      <section className="mb-12">
        <h2 id="treatment-options" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Treatment Options for Depression</h2>
        
        <p className="text-muted-foreground mb-6">
          Depression is highly treatable. With appropriate care, most people experience significant improvement, and many achieve full remission of symptoms.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Psychotherapy (Talk Therapy)</h3>
          <p className="text-muted-foreground">
            Therapy is a first-line treatment for depression and is effective for all severity levels. Working with a trained therapist, you'll explore the roots of your depression, develop healthier thinking patterns, and learn coping skills. Unlike medication, therapy addresses underlying causes and provides lasting benefits that continue after treatment ends.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Medication</h3>
          <p className="text-muted-foreground mb-3">
            Antidepressant medications can be effective, especially for moderate to severe depression. Common types include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
            <li>SSRIs (Selective Serotonin Reuptake Inhibitors) — most commonly prescribed</li>
            <li>SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)</li>
            <li>Bupropion</li>
            <li>Tricyclic antidepressants</li>
            <li>MAOIs (Monoamine Oxidase Inhibitors)</li>
          </ul>
          <p className="text-muted-foreground">
            Medications typically take 4-6 weeks to reach full effectiveness. Finding the right medication may require trying more than one. Medication works best when combined with therapy.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Combination treatment</h3>
          <p className="text-muted-foreground">
            Research consistently shows that combining therapy and medication is more effective than either alone for moderate to severe depression. Your treatment plan should be tailored to your specific situation.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Lifestyle interventions</h3>
          <p className="text-muted-foreground mb-3">
            Lifestyle changes can significantly support depression recovery:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Regular exercise (proven to have antidepressant effects)</li>
            <li>Consistent sleep schedule</li>
            <li>Balanced nutrition</li>
            <li>Limiting alcohol (a depressant)</li>
            <li>Social connection</li>
            <li>Sunlight exposure or light therapy (especially for seasonal depression)</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Other treatments</h3>
          <p className="text-muted-foreground mb-3">
            For treatment-resistant depression, additional options include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>TMS (Transcranial Magnetic Stimulation)</li>
            <li>ECT (Electroconvulsive Therapy)</li>
            <li>Ketamine therapy</li>
          </ul>
        </div>
        
        <p className="text-muted-foreground">
          At <Link to="/therapist-matching" className="text-primary hover:underline">Coping and Healing Counseling</Link>, we work with you to develop a personalized treatment approach based on your symptoms, preferences, and circumstances.
        </p>
      </section>

      {/* Section 8: Therapy Approaches for Depression */}
      <section className="mb-12">
        <h2 id="therapy-approaches" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Therapy Approaches for Depression</h2>
        
        <p className="text-muted-foreground mb-6">
          Several therapeutic approaches have strong evidence for treating depression. Understanding your options helps you make informed decisions about your care.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Cognitive Behavioral Therapy (CBT)</h3>
          <p className="text-muted-foreground mb-3">
            <Link to="/blog/cognitive-behavioral-therapy" className="text-primary hover:underline">CBT</Link> is one of the most researched and effective treatments for depression. It focuses on the relationship between thoughts, feelings, and behaviors. In CBT, you'll learn to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-3">
            <li>Identify negative thought patterns that contribute to depression</li>
            <li>Challenge and reframe distorted thinking</li>
            <li>Develop more balanced, realistic perspectives</li>
            <li>Increase activities that bring pleasure or accomplishment</li>
            <li>Build problem-solving skills</li>
          </ul>
          <p className="text-muted-foreground">
            Research shows CBT is as effective as medication for many people, with benefits that last longer after treatment ends.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Behavioral Activation</h3>
          <p className="text-muted-foreground">
            This approach focuses specifically on increasing engagement with positive activities. Depression often leads to withdrawal, which worsens mood, creating a vicious cycle. Behavioral activation breaks this cycle by gradually increasing meaningful activities, even when motivation is low.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Interpersonal Therapy (IPT)</h3>
          <p className="text-muted-foreground">
            IPT focuses on improving relationships and communication patterns that may contribute to depression. It addresses four key areas: grief, role transitions, role disputes (conflicts), and interpersonal deficits. IPT is particularly helpful when depression is linked to relationship issues or life changes.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Psychodynamic Therapy</h3>
          <p className="text-muted-foreground">
            This approach explores how past experiences, especially from childhood, shape current patterns of thinking and relating. It can help you understand deep-rooted patterns and gain insight into unconscious factors contributing to depression.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Mindfulness-Based Cognitive Therapy (MBCT)</h3>
          <p className="text-muted-foreground">
            MBCT combines cognitive therapy with <Link to="/blog/mindfulness-therapy" className="text-primary hover:underline">mindfulness practices</Link>. It's particularly effective for preventing relapse in people who've had multiple depressive episodes. You'll learn to observe thoughts without getting caught up in them and develop a different relationship with negative thinking.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">EMDR (Eye Movement Desensitization and Reprocessing)</h3>
          <p className="text-muted-foreground">
            When depression is rooted in trauma, <Link to="/blog/emdr-therapy" className="text-primary hover:underline">EMDR</Link> can be highly effective. It helps the brain process traumatic memories that may be fueling depression.
          </p>
        </div>
        
        <p className="text-muted-foreground">
          Your therapist will recommend the approach—or combination of approaches—best suited to your situation and preferences.
        </p>
      </section>

      {/* Section 9: Self-Care Strategies for Depression */}
      <section className="mb-12">
        <h2 id="self-care-strategies" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Self-Care Strategies for Depression</h2>
        
        <p className="text-muted-foreground mb-6">
          While professional treatment is important, there are also things you can do on your own to support recovery. These strategies work best alongside therapy, not as replacements for it.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Get moving</h3>
          <p className="text-muted-foreground">
            Exercise is one of the most powerful natural antidepressants. Research shows regular physical activity can be as effective as medication for mild to moderate depression. You don't need intense workouts—even a 30-minute walk can help. Start small and build gradually.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Prioritize sleep</h3>
          <p className="text-muted-foreground mb-3">
            Depression often disrupts sleep, and poor sleep worsens depression. Practice good sleep hygiene:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Keep a consistent sleep schedule (even on weekends)</li>
            <li>Create a relaxing bedtime routine</li>
            <li>Avoid screens before bed</li>
            <li>Limit caffeine, especially after noon</li>
            <li>Make your bedroom dark, quiet, and cool</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Maintain social connections</h3>
          <p className="text-muted-foreground">
            Depression makes you want to isolate, but isolation worsens depression. Push yourself to maintain contact with supportive people, even when you don't feel like it. You don't need to talk about depression—just being around others helps.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Structure your days</h3>
          <p className="text-muted-foreground mb-3">
            Depression thrives in unstructured time. Create a simple daily routine that includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Regular wake and sleep times</li>
            <li>Basic self-care (showering, eating)</li>
            <li>At least one activity outside the house</li>
            <li>Something that gives you a sense of accomplishment</li>
            <li>Something that brings even small pleasure</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Be kind to yourself</h3>
          <p className="text-muted-foreground mb-3">
            Depression comes with harsh self-criticism. Practice self-compassion:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Talk to yourself as you would a friend</li>
            <li>Acknowledge that depression is hard and you're doing your best</li>
            <li>Celebrate small victories</li>
            <li>Let go of perfectionism</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Limit alcohol and substances</h3>
          <p className="text-muted-foreground">
            Alcohol is a depressant that worsens mood over time. While it may provide temporary relief, it interferes with sleep, depletes serotonin, and can interact with medications. The same applies to recreational drugs.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Get sunlight</h3>
          <p className="text-muted-foreground">
            Exposure to natural light helps regulate mood-related brain chemistry. Try to get outside during daylight hours, especially in the morning. For seasonal depression, a light therapy box may help.
          </p>
        </div>
        
        <p className="text-muted-foreground">
          These strategies support recovery but aren't substitutes for professional treatment if you have clinical depression.
        </p>
      </section>

      {/* Section 10: When to Seek Professional Help */}
      <section className="mb-12">
        <h2 id="when-to-seek-help" className="text-2xl md:text-3xl font-bold text-foreground mb-6">When to Seek Professional Help</h2>
        
        <p className="text-muted-foreground mb-6">
          Depression is a serious condition that benefits from professional treatment. Consider seeking help if:
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Your symptoms persist</h3>
          <p className="text-muted-foreground">
            If you've been experiencing depression symptoms most days for two weeks or more, professional support can help. Don't wait until things get worse.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Daily life is affected</h3>
          <p className="text-muted-foreground">
            When depression interferes with your ability to work, maintain relationships, care for yourself, or meet responsibilities, it's time to reach out.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">Self-help isn't enough</h3>
          <p className="text-muted-foreground">
            If you've been trying to manage on your own—exercising, reaching out to friends, practicing self-care—but symptoms persist, professional treatment can make a real difference.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">You're having trouble functioning</h3>
          <p className="text-muted-foreground">
            Difficulty getting out of bed, neglecting basic hygiene, calling in sick to work, or withdrawing completely from others are signs that professional help is needed.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">You're using unhealthy coping mechanisms</h3>
          <p className="text-muted-foreground">
            If you're turning to alcohol, drugs, food, or other unhealthy behaviors to cope with depression, therapy can help you develop healthier strategies.
          </p>
        </div>
        
        <div className="mb-6 p-6 bg-destructive/10 border border-destructive/20 rounded-xl">
          <h3 className="text-xl font-semibold text-foreground mb-3">You're having thoughts of suicide or self-harm</h3>
          <p className="text-muted-foreground mb-4">
            If you're thinking about hurting yourself or ending your life, please reach out immediately:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li><strong>Call or text 988</strong> (Suicide & Crisis Lifeline)</li>
            <li><strong>Text HOME to 741741</strong> (Crisis Text Line)</li>
            <li>Go to your nearest emergency room</li>
            <li>Visit our <Link to="/emergency-resources" className="text-primary hover:underline">emergency resources page</Link></li>
          </ul>
        </div>
        
        <p className="text-muted-foreground mb-4">
          You don't have to be in crisis to deserve help. If depression is affecting your quality of life, that's reason enough to seek support.
        </p>
        
        <p className="text-muted-foreground">
          At Coping and Healing Counseling, we offer <Link to="/therapist-matching" className="text-primary hover:underline">free consultations</Link> to help you determine the best path forward. Most clients can get an appointment within 24 hours.
        </p>
      </section>
    </PillarPageTemplate>
  );
};

export default DepressionGuide;
