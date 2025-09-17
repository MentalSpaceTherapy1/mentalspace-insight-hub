import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ptsdPersonImage from "@/assets/ptsd-person.jpg";

const PTSDRecovery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <SEOHead
        title="PTSD Recovery: Healing from Trauma with Professional Support"
        description="Explore evidence-based treatments for PTSD and how therapy can help individuals process trauma and reclaim their lives."
        keywords="PTSD recovery, trauma therapy, post traumatic stress disorder, trauma treatment, PTSD healing"
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </nav>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                PTSD Recovery: Healing from Trauma with Professional Support
              </h1>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 8, 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  9 min read
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={ptsdPersonImage}
                  alt="Person recovering from PTSD - trauma healing and recovery"
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Post-Traumatic Stress Disorder (PTSD) can develop after experiencing or witnessing a traumatic event. 
                While the effects of trauma can be overwhelming, recovery is possible with proper treatment and support. 
                Understanding PTSD and available treatments is the first step toward healing.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Understanding PTSD</h2>
              <p className="mb-6">
                PTSD is a mental health condition that can occur after experiencing or witnessing traumatic events such as:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Military combat or war experiences</li>
                <li>Physical or sexual assault</li>
                <li>Serious accidents or natural disasters</li>
                <li>Sudden death of a loved one</li>
                <li>Childhood abuse or neglect</li>
                <li>Medical emergencies or life-threatening illnesses</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Common PTSD Symptoms</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Re-experiencing Symptoms</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Intrusive memories or flashbacks</li>
                <li>Nightmares related to the trauma</li>
                <li>Severe emotional distress when reminded of the event</li>
                <li>Physical reactions to trauma reminders</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Avoidance Symptoms</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Avoiding trauma-related thoughts or feelings</li>
                <li>Avoiding places, people, or activities that trigger memories</li>
                <li>Emotional numbing or detachment</li>
                <li>Loss of interest in previously enjoyed activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Negative Changes in Thinking and Mood</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Negative thoughts about oneself or the world</li>
                <li>Persistent guilt, shame, or self-blame</li>
                <li>Difficulty experiencing positive emotions</li>
                <li>Feeling disconnected from family and friends</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Changes in Physical and Emotional Reactions</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Being easily startled or hypervigilant</li>
                <li>Self-destructive behavior</li>
                <li>Problems concentrating</li>
                <li>Sleep disturbances or insomnia</li>
                <li>Irritability or aggressive behavior</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Evidence-Based PTSD Treatments</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</h3>
              <p className="mb-4">
                Helps individuals process traumatic memories and change negative thought patterns related to the trauma. 
                This approach teaches coping strategies and helps reduce avoidance behaviors.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Eye Movement Desensitization and Reprocessing (EMDR)</h3>
              <p className="mb-4">
                Uses bilateral stimulation (typically eye movements) while recalling traumatic memories to help 
                the brain process and integrate these experiences in a healthier way.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Prolonged Exposure Therapy</h3>
              <p className="mb-4">
                Gradually and safely exposes individuals to trauma-related memories, feelings, and situations 
                to reduce the power these triggers have over their lives.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cognitive Processing Therapy (CPT)</h3>
              <p className="mb-4">
                Focuses on helping individuals understand how trauma has affected their thoughts and feelings, 
                and teaches skills to challenge and modify unhelpful trauma-related thoughts.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">The Recovery Process</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Phase 1: Stabilization and Safety</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Establishing a sense of safety and stability</li>
                <li>Learning coping skills and emotional regulation</li>
                <li>Building a therapeutic relationship</li>
                <li>Addressing any immediate safety concerns</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Phase 2: Processing and Integration</h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Working through traumatic memories</li>
                <li>Processing emotions related to the trauma</li>
                <li>Challenging negative beliefs about self and world</li>
                <li>Developing a coherent narrative of the experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Phase 3: Reconnection and Growth</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Rebuilding relationships and social connections</li>
                <li>Engaging in meaningful activities and goals</li>
                <li>Developing a sense of empowerment and agency</li>
                <li>Finding meaning and purpose beyond the trauma</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Supporting Recovery</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Self-Care Strategies</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Mindfulness and grounding techniques:</strong> Staying present and managing flashbacks</li>
                <li><strong>Regular exercise:</strong> Reducing stress hormones and improving mood</li>
                <li><strong>Healthy sleep habits:</strong> Establishing routines that promote restful sleep</li>
                <li><strong>Social support:</strong> Maintaining connections with supportive friends and family</li>
                <li><strong>Stress management:</strong> Learning healthy ways to cope with daily stressors</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Building a Support Network</h3>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Professional mental health support</li>
                <li>Support groups with other trauma survivors</li>
                <li>Trusted friends and family members</li>
                <li>Faith or spiritual communities</li>
                <li>Peer support specialists</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Signs of Recovery</h2>
              <p className="mb-4">Recovery from PTSD is a gradual process, and progress may include:</p>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                <li>Reduced frequency and intensity of symptoms</li>
                <li>Improved ability to manage triggers</li>
                <li>Better sleep quality and patterns</li>
                <li>Increased engagement in daily activities</li>
                <li>Stronger relationships and social connections</li>
                <li>Greater sense of hope and purpose</li>
                <li>Improved emotional regulation</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Hope for Healing</h2>
              <p className="mb-6">
                PTSD can feel overwhelming, but recovery is possible. Many people who have experienced trauma 
                go on to live fulfilling, meaningful lives. With proper treatment, support, and time, you can 
                process your experiences, develop healthy coping strategies, and reclaim your life.
              </p>

              <p className="mb-6">
                Remember that healing isn't linear – there may be setbacks along the way, and that's normal. 
                What matters is having the right support and continuing to move forward, one step at a time.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">Begin Your Healing Journey</h3>
                <p className="mb-4">
                  If you're struggling with PTSD or trauma, professional help is available. Our experienced 
                  trauma therapists use evidence-based treatments to help you process your experiences and 
                  reclaim your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/mental-health-library/ptsd">Learn More About PTSD</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/therapist-matching">Find a Trauma Therapist</Link>
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

export default PTSDRecovery;