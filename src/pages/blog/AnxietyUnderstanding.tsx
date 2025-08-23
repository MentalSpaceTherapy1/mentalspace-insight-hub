import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const AnxietyUnderstanding = () => {
  useSEO({
    title: "Understanding Anxiety: Signs, Symptoms, and Treatment Options | MentalSpace Blog",
    description: "Learn about the different types of anxiety disorders and evidence-based treatment approaches that can help you manage anxiety effectively.",
    keywords: "anxiety, anxiety disorders, treatment, therapy, mental health, symptoms",
    canonicalUrl: "/blog/understanding-anxiety"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Badge className="mb-4">Anxiety</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Understanding Anxiety: Signs, Symptoms, and Treatment Options
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>December 20, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>Dr. Sarah Johnson</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img
              src="/src/assets/anxiety-person.jpg"
              alt="Person dealing with anxiety"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Anxiety affects millions of people worldwide, yet it remains one of the most misunderstood mental health conditions. 
              Understanding the signs, symptoms, and available treatments can be the first step toward managing anxiety effectively.
            </p>

            <h2>What is Anxiety?</h2>
            <p>
              Anxiety is a natural human response to stress or perceived threats. It becomes a disorder when these feelings 
              are persistent, excessive, and interfere with daily life. Unlike normal worry, anxiety disorders involve intense 
              fear or anxiety that is disproportionate to the actual situation.
            </p>

            <h2>Common Types of Anxiety Disorders</h2>
            <h3>Generalized Anxiety Disorder (GAD)</h3>
            <p>
              GAD involves persistent and excessive worry about various aspects of life, including work, health, family, 
              and everyday situations. People with GAD find it difficult to control their worry, even when they recognize 
              it's excessive.
            </p>

            <h3>Social Anxiety Disorder</h3>
            <p>
              This involves intense fear of social situations where one might be judged, embarrassed, or humiliated. 
              It goes beyond normal shyness and can significantly impact work, school, and relationships.
            </p>

            <h3>Panic Disorder</h3>
            <p>
              Characterized by recurrent panic attacks - sudden episodes of intense fear accompanied by physical symptoms 
              like heart palpitations, shortness of breath, and dizziness.
            </p>

            <h2>Recognizing the Signs and Symptoms</h2>
            <p>Anxiety manifests differently in each person, but common symptoms include:</p>
            <ul>
              <li>Persistent worry or fear</li>
              <li>Restlessness or feeling on edge</li>
              <li>Difficulty concentrating</li>
              <li>Physical symptoms like rapid heartbeat, sweating, or trembling</li>
              <li>Sleep disturbances</li>
              <li>Avoiding certain situations or places</li>
              <li>Irritability or mood changes</li>
            </ul>

            <h2>Evidence-Based Treatment Options</h2>
            <h3>Cognitive Behavioral Therapy (CBT)</h3>
            <p>
              CBT is one of the most effective treatments for anxiety disorders. It helps identify and change negative 
              thought patterns and behaviors that contribute to anxiety. Through CBT, individuals learn coping strategies 
              and problem-solving skills.
            </p>

            <h3>Exposure Therapy</h3>
            <p>
              This approach gradually exposes individuals to feared situations in a controlled, safe environment. 
              Over time, this reduces the anxiety response and helps build confidence.
            </p>

            <h3>Mindfulness and Relaxation Techniques</h3>
            <p>
              Practices like meditation, deep breathing exercises, and progressive muscle relaxation can help manage 
              anxiety symptoms and reduce overall stress levels.
            </p>

            <h3>Medication</h3>
            <p>
              In some cases, medication may be recommended alongside therapy. Common options include SSRIs, SNRIs, 
              and short-term use of anti-anxiety medications. Always consult with a healthcare provider for proper evaluation.
            </p>

            <h2>Self-Care Strategies</h2>
            <p>While professional treatment is important, these self-care practices can complement therapy:</p>
            <ul>
              <li>Regular exercise and physical activity</li>
              <li>Maintaining a consistent sleep schedule</li>
              <li>Limiting caffeine and alcohol</li>
              <li>Practicing stress management techniques</li>
              <li>Building a support network</li>
              <li>Engaging in enjoyable activities</li>
            </ul>

            <h2>When to Seek Professional Help</h2>
            <p>
              Consider reaching out to a mental health professional if anxiety is interfering with your daily life, 
              relationships, work, or overall well-being. Early intervention can prevent symptoms from worsening and 
              improve long-term outcomes.
            </p>

            <h2>Moving Forward</h2>
            <p>
              Remember that anxiety is treatable, and recovery is possible. With the right support and treatment approach, 
              individuals with anxiety disorders can lead fulfilling, productive lives. The first step is recognizing 
              that help is available and that seeking treatment is a sign of strength, not weakness.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-muted rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
            <p className="text-muted-foreground mb-6">
              If you're struggling with anxiety, professional support can make a significant difference. 
              Our licensed therapists specialize in anxiety treatment and are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/therapist-matching">Request an Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/mental-health-tests">Take an Anxiety Assessment</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AnxietyUnderstanding;