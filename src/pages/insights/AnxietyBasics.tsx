import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { TLDR } from "../../../components/TLDR"; 
import { ArticleMeta } from "../../../components/ArticleMeta";
import LazyImage from "@/components/LazyImage";
import anxietyPersonImg from "@/assets/anxiety-person.jpg";

const AnxietyBasics = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
    { name: 'Understanding Anxiety Disorders', url: '/insights/anxiety-basics' }
  ];

  const tldrItems = [
    "Anxiety disorders are the most common mental health condition, affecting 40 million adults in the U.S.",
    "Symptoms include excessive worry, physical tension, and avoidance behaviors that interfere with daily life",
    "Effective treatments include Cognitive Behavioral Therapy (CBT), medication, and lifestyle changes", 
    "Early intervention and professional support significantly improve outcomes and quality of life",
    "Online therapy provides accessible, evidence-based treatment for anxiety disorders"
  ];

  const references = [
    {
      title: "Anxiety Disorders - National Institute of Mental Health",
      url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders"
    },
    {
      title: "Generalized Anxiety Disorder - Mayo Clinic",
      url: "https://www.mayoclinic.org/diseases-conditions/generalized-anxiety-disorder/symptoms-causes/syc-20360803"
    },
    {
      title: "CBT for Anxiety Disorders - American Psychological Association",
      url: "https://www.apa.org/ptsd-guideline/treatments/cognitive-behavioral-therapy"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Understanding Anxiety Disorders: Symptoms, Causes & Treatment | MentalSpace"
        description="Learn about anxiety disorders, their symptoms, causes, and effective treatments. Expert insights on CBT, therapy options, and managing anxiety for better mental health."
        keywords="anxiety disorders, anxiety symptoms, anxiety treatment, CBT anxiety, generalized anxiety disorder, panic disorder, social anxiety, anxiety therapy"
        canonicalUrl="https://mentalspacetherapy.lovable.app/insights/anxiety-basics"
        ogTitle="Understanding Anxiety Disorders: Expert Guide to Symptoms & Treatment"
        ogDescription="Comprehensive guide to anxiety disorders by licensed mental health professionals. Learn symptoms, causes, and evidence-based treatments."
        ogImage="/anxiety-person.jpg"
        breadcrumbs={breadcrumbItems}
        articleData={{
          headline: "Understanding Anxiety Disorders: A Comprehensive Guide",
          author: "MentalSpace Clinical Team", 
          datePublished: "2024-01-20",
          dateModified: "2024-01-20",
          description: "Expert guide to understanding anxiety disorders, their symptoms, causes, and effective treatment approaches including CBT and online therapy."
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <article className="container mx-auto px-4 py-8 max-w-4xl">
            <Breadcrumbs items={breadcrumbItems} />
            
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Understanding Anxiety Disorders: A Comprehensive Guide
              </h1>
              
              <ArticleMeta 
                author="Dr. Sarah Johnson, PsyD"
                reviewedBy="Dr. Michael Chen, MD, Psychiatrist"
                publishDate="2024-01-20"
                modifiedDate="2024-01-20"
              />
            </header>

            <div className="mb-8">
              <LazyImage 
                src={anxietyPersonImg}
                alt="Person experiencing anxiety symptoms showing the emotional and physical impact of anxiety disorders"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <TLDR items={tldrItems} />

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What Are Anxiety Disorders?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anxiety disorders are among the most common mental health conditions, affecting over 40 million adults in the United States each year. While it's normal to feel anxious occasionally, anxiety disorders involve persistent, excessive worry and fear that significantly interfere with daily activities, work, and relationships.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike typical stress responses, anxiety disorders create lasting patterns of distress that don't simply go away on their own. The good news is that anxiety disorders are highly treatable, and with proper support, people can learn to manage their symptoms effectively.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Common Types of Anxiety Disorders</h2>
                
                <h3 className="text-xl font-semibold mb-3">Generalized Anxiety Disorder (GAD)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  GAD involves persistent, excessive worry about various aspects of life, including work, health, finances, and family. People with GAD often find it difficult to control their worry, even when they recognize it's out of proportion to the actual threat.
                </p>

                <h3 className="text-xl font-semibold mb-3">Panic Disorder</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Characterized by recurrent panic attacks—sudden episodes of intense fear accompanied by physical symptoms like heart palpitations, sweating, and feelings of impending doom. Many people with panic disorder develop a fear of having another panic attack.
                </p>

                <h3 className="text-xl font-semibold mb-3">Social Anxiety Disorder</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Involves intense fear of social situations where one might be judged, embarrassed, or humiliated. This can significantly impact work, school, and personal relationships.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Recognizing the Symptoms</h2>
                
                <h3 className="text-xl font-semibold mb-3">Emotional Symptoms</h3>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Persistent worry or fear</li>
                  <li>Feeling restless or on edge</li>
                  <li>Irritability or mood changes</li>
                  <li>Difficulty concentrating</li>
                  <li>Sense of impending danger or doom</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Physical Symptoms</h3>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Rapid heartbeat or palpitations</li>
                  <li>Sweating or trembling</li>
                  <li>Muscle tension or headaches</li>
                  <li>Fatigue or sleep difficulties</li>
                  <li>Digestive issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Effective Treatment Approaches</h2>
                
                <h3 className="text-xl font-semibold mb-3">Cognitive Behavioral Therapy (CBT)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CBT is considered the gold standard for anxiety treatment. It helps individuals identify and change negative thought patterns and behaviors that contribute to anxiety. Research shows CBT can be as effective as medication for many anxiety disorders.
                </p>

                <h3 className="text-xl font-semibold mb-3">Exposure Therapy</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This approach gradually exposes individuals to anxiety-provoking situations in a controlled, safe environment, helping them build confidence and reduce avoidance behaviors.
                </p>

                <h3 className="text-xl font-semibold mb-3">Mindfulness and Relaxation Techniques</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practices like deep breathing, progressive muscle relaxation, and mindfulness meditation can help manage anxiety symptoms and improve overall well-being.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">The Role of Online Therapy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Online therapy has revolutionized access to mental health care, particularly for anxiety disorders. Studies show that online CBT for anxiety can be just as effective as in-person therapy, with the added benefits of convenience, accessibility, and often lower cost.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For many people with anxiety, the ability to receive treatment from the comfort of their own home reduces barriers to seeking help and can make therapy feel less intimidating.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">When to Seek Professional Help</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If anxiety is interfering with your daily life, relationships, work, or overall well-being, it's time to seek professional support. Early intervention can prevent symptoms from worsening and help you develop effective coping strategies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Remember, seeking help for anxiety is a sign of strength, not weakness. With proper treatment and support, anxiety disorders are highly manageable, and most people experience significant improvement in their symptoms and quality of life.
                </p>
              </section>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">References and Further Reading</h3>
              <ul className="space-y-2">
                {references.map((ref, index) => (
                  <li key={index}>
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Take the First Step?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Don't let anxiety hold you back. Connect with a licensed therapist who specializes in anxiety treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/therapist-matching">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request an Appointment
                  </Button>
                </Link>
                <Link to="/mental-health-tests">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Take Anxiety Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AnxietyBasics;