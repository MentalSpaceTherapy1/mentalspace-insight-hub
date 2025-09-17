import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import anxietyPersonImage from "@/assets/anxiety-person.jpg";

const UnderstandingAnxiety = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="Understanding Anxiety: Signs, Symptoms, and Treatment Options"
        description="Learn about the different types of anxiety disorders and evidence-based treatment approaches that can help you manage anxiety effectively."
        keywords="anxiety disorders, anxiety symptoms, anxiety treatment, mental health, therapy"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </nav>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Understanding Anxiety: Signs, Symptoms, and Treatment Options
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 20, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  8 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={anxietyPersonImage}
                  alt="Person dealing with anxiety - understanding mental health"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Anxiety is one of the most common mental health conditions, affecting millions of people worldwide. 
                Understanding the signs, symptoms, and available treatment options is the first step toward managing 
                anxiety effectively and reclaiming your quality of life.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">What is Anxiety?</h2>
              <p className="mb-6">
                Anxiety is a natural response to stress, but when it becomes overwhelming or persistent, it can 
                interfere with daily activities and overall well-being. Anxiety disorders are characterized by 
                excessive worry, fear, or nervousness that is difficult to control.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common Types of Anxiety Disorders</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Generalized Anxiety Disorder (GAD):</strong> Persistent, excessive worry about various aspects of life</li>
                <li><strong>Panic Disorder:</strong> Recurrent panic attacks with intense fear and physical symptoms</li>
                <li><strong>Social Anxiety Disorder:</strong> Intense fear of social situations and judgment from others</li>
                <li><strong>Specific Phobias:</strong> Irrational fear of specific objects or situations</li>
                <li><strong>Agoraphobia:</strong> Fear of being in situations where escape might be difficult</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Signs and Symptoms</h2>
              <p className="mb-4">Anxiety can manifest in various ways, including:</p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Physical Symptoms:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Rapid heartbeat or palpitations</li>
                <li>Sweating or trembling</li>
                <li>Shortness of breath</li>
                <li>Muscle tension</li>
                <li>Headaches or dizziness</li>
                <li>Gastrointestinal issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Emotional and Behavioral Symptoms:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Persistent worry or fear</li>
                <li>Restlessness or feeling on edge</li>
                <li>Difficulty concentrating</li>
                <li>Irritability</li>
                <li>Sleep disturbances</li>
                <li>Avoidance of anxiety-triggering situations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Evidence-Based Treatment Options</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Therapy</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Helps identify and change negative thought patterns</li>
                <li><strong>Exposure Therapy:</strong> Gradual exposure to anxiety-triggering situations in a controlled environment</li>
                <li><strong>Acceptance and Commitment Therapy (ACT):</strong> Focuses on accepting anxiety while committing to valued actions</li>
                <li><strong>Mindfulness-Based Therapies:</strong> Incorporate meditation and mindfulness practices</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Self-Care Strategies</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Regular exercise and physical activity</li>
                <li>Proper sleep hygiene</li>
                <li>Stress management techniques</li>
                <li>Limiting caffeine and alcohol</li>
                <li>Building a strong support network</li>
                <li>Practicing relaxation techniques</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">When to Seek Professional Help</h2>
              <p className="mb-6">
                If anxiety is interfering with your daily life, relationships, work, or overall well-being, 
                it's important to seek professional help. A mental health professional can provide proper 
                diagnosis and develop a personalized treatment plan that works for you.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">Take the First Step</h3>
                <p className="mb-4">
                  Remember, seeking help for anxiety is a sign of strength, not weakness. With proper 
                  treatment and support, anxiety is highly manageable, and you can regain control of your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/therapist-matching">Request an Appointment</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/mental-health-tests">Take an Anxiety Assessment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UnderstandingAnxiety;