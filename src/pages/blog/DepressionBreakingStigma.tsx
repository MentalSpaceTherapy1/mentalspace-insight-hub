import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const DepressionBreakingStigma = () => {
  useSEO({
    title: "Depression in Adults: Breaking the Stigma and Finding Help | MentalSpace Blog",
    description: "Explore the reality of adult depression, common misconceptions, and how therapy can provide a path to recovery and healing.",
    keywords: "depression, mental health, therapy, stigma, treatment, adults",
    canonicalUrl: "/blog/depression-breaking-stigma"
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Badge className="mb-4">Depression</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Depression in Adults: Breaking the Stigma and Finding Help
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>December 18, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>Dr. Michael Chen</span>
              </div>
            </div>
          </header>

          <div className="aspect-video mb-8 overflow-hidden rounded-lg">
            <img
              src="/src/assets/depression-person.jpg"
              alt="Person dealing with depression"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Depression affects over 280 million people worldwide, yet stigma and misconceptions continue to prevent many from seeking the help they need. 
              Understanding depression and breaking down these barriers is crucial for recovery.
            </p>

            <h2>Understanding Depression Beyond Sadness</h2>
            <p>
              Depression is much more than feeling sad or going through a rough patch. It's a serious mental health condition 
              that affects how you think, feel, and handle daily activities. Unlike temporary feelings of sadness, depression 
              persists and can significantly impact every aspect of life.
            </p>

            <h2>Common Misconceptions About Depression</h2>
            <h3>"It's Just in Your Head"</h3>
            <p>
              Depression involves real changes in brain chemistry and structure. It's not a matter of willpower or character 
              weakness. Brain imaging studies show actual differences in the brains of people with depression.
            </p>

            <h3>"You Can Just Snap Out of It"</h3>
            <p>
              If recovery were that simple, no one would choose to remain depressed. Depression requires proper treatment, 
              support, and often time to heal - just like any other medical condition.
            </p>

            <h3>"Successful People Don't Get Depressed"</h3>
            <p>
              Depression doesn't discriminate based on success, wealth, or social status. Many accomplished individuals 
              have struggled with depression while maintaining their careers and responsibilities.
            </p>

            <h2>Recognizing the Signs</h2>
            <p>Depression symptoms can vary widely between individuals, but common signs include:</p>
            <ul>
              <li>Persistent feelings of sadness, emptiness, or hopelessness</li>
              <li>Loss of interest or pleasure in activities once enjoyed</li>
              <li>Significant changes in appetite or weight</li>
              <li>Sleep disturbances (insomnia or oversleeping)</li>
              <li>Fatigue or loss of energy</li>
              <li>Difficulty concentrating or making decisions</li>
              <li>Feelings of worthlessness or excessive guilt</li>
              <li>Physical symptoms like headaches or digestive issues</li>
            </ul>

            <h2>The Impact of Stigma</h2>
            <p>
              Stigma surrounding mental health creates additional barriers to treatment. Many people with depression report 
              feeling ashamed, judged, or misunderstood. This can lead to:
            </p>
            <ul>
              <li>Delayed treatment seeking</li>
              <li>Social isolation</li>
              <li>Discrimination in workplace or relationships</li>
              <li>Self-stigma and reduced self-esteem</li>
              <li>Reluctance to discuss symptoms openly</li>
            </ul>

            <h2>How Therapy Can Help</h2>
            <h3>Cognitive Behavioral Therapy (CBT)</h3>
            <p>
              CBT helps identify and change negative thought patterns that contribute to depression. It's one of the 
              most researched and effective treatments for depression.
            </p>

            <h3>Interpersonal Therapy (IPT)</h3>
            <p>
              IPT focuses on improving relationships and social functioning to help relieve symptoms. It addresses 
              how depression affects relationships and vice versa.
            </p>

            <h3>Psychodynamic Therapy</h3>
            <p>
              This approach explores unconscious thoughts and past experiences that may contribute to current depression, 
              helping develop insight and emotional awareness.
            </p>

            <h2>Breaking the Stigma: What You Can Do</h2>
            <h3>Educate Yourself and Others</h3>
            <p>
              Learn about depression as a medical condition. Share accurate information to help others understand 
              that depression is treatable and recovery is possible.
            </p>

            <h3>Use Person-First Language</h3>
            <p>
              Instead of saying someone "is depressed," try "has depression" or "is experiencing depression." 
              This emphasizes the person, not the condition.
            </p>

            <h3>Listen Without Judgment</h3>
            <p>
              If someone shares their struggle with depression, listen with empathy. Avoid offering quick fixes 
              or minimizing their experience.
            </p>

            <h2>Taking the First Step</h2>
            <p>
              Seeking help for depression is a sign of strength, not weakness. If you're experiencing symptoms 
              of depression, remember that:
            </p>
            <ul>
              <li>You're not alone - depression is common and treatable</li>
              <li>Recovery takes time, and that's okay</li>
              <li>Professional help can make a significant difference</li>
              <li>Treatment is confidential and personalized to your needs</li>
              <li>Many people go on to live fulfilling lives after treatment</li>
            </ul>

            <h2>Moving Forward with Hope</h2>
            <p>
              Depression is one of the most treatable mental health conditions. With proper support, therapy, 
              and sometimes medication, most people with depression can recover and return to fulfilling lives. 
              The journey may not be easy, but it's always worth taking that first step toward healing.
            </p>
          </div>

          <div className="mt-12 p-8 bg-muted rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">You Don't Have to Face This Alone</h3>
            <p className="text-muted-foreground mb-6">
              Our compassionate therapists understand depression and are here to support you on your journey to recovery. 
              Take the first step toward feeling better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/therapist-matching">Get Matched with a Therapist</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/mental-health-tests">Take a Depression Screening</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default DepressionBreakingStigma;