import { Link } from 'react-router-dom';
import PillarPageTemplate from '@/components/PillarPageTemplate';

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
    </PillarPageTemplate>
  );
};

export default DepressionGuide;
