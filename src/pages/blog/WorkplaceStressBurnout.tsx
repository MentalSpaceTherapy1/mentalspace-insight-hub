import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const WorkplaceStressBurnout = () => {
  const articleSchema = generateArticleSchema(
    "Workplace Stress & Burnout: How Therapy Can Help Your Career",
    "Comprehensive guide to managing workplace stress and burnout through therapy. Learn to set boundaries, improve work-life balance, and thrive professionally.",
    "https://chctherapy.com/blog/workplace-stress-burnout-therapy",
    "2024-11-15"
  );

  return (
    <>
      <SEOHead
        title="Workplace Stress & Burnout: How Therapy Can Help Your Career"
        description="Comprehensive guide to managing workplace stress and burnout through therapy. Learn to set boundaries, improve work-life balance, and thrive professionally."
        keywords="workplace stress therapy, burnout treatment, work-life balance counseling, career stress"
        canonicalUrl="https://chctherapy.com/blog/workplace-stress-burnout-therapy"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Workplace Stress & Burnout: How Therapy Can Help Your Career
              </h1>
              <p className="text-xl text-muted-foreground">Addressing work-related stress before it impacts your health and happiness</p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Work-related stress has reached epidemic levels, with 83% of US workers experiencing workplace stress and 25% saying their job is the number one stressor in their lives. When chronic workplace stress goes unaddressed, it can lead to burnout—a state of physical, emotional, and mental exhaustion that affects every aspect of your life.
          </p>

          <section className="mb-12 bg-destructive/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Signs of Burnout</h2>
            <p className="text-lg leading-relaxed mb-4">Burnout manifests in three key dimensions:</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Exhaustion</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>Physical and emotional depletion</li>
                  <li>Chronic fatigue that doesn't improve with rest</li>
                  <li>Frequent illnesses due to weakened immune system</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Cynicism (Depersonalization)</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>Negative, cynical attitude toward work</li>
                  <li>Detachment from job responsibilities</li>
                  <li>Irritability with coworkers or clients</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Reduced Professional Efficacy</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>Decreased productivity and performance</li>
                  <li>Difficulty concentrating</li>
                  <li>Feeling ineffective or incompetent</li>
                  <li>Lack of accomplishment or satisfaction</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Causes of Workplace Stress</h2>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>Excessive workload and unrealistic deadlines</li>
              <li>Lack of control over work decisions</li>
              <li>Unclear job expectations or role ambiguity</li>
              <li>Poor work-life balance</li>
              <li>Toxic workplace culture or difficult relationships</li>
              <li>Job insecurity or fear of layoffs</li>
              <li>Limited opportunities for growth or advancement</li>
              <li>Insufficient resources to complete tasks</li>
              <li>Micromanagement or lack of autonomy</li>
              <li>Values mismatch between personal beliefs and company practices</li>
            </ul>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">How Therapy Helps with Workplace Stress</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Stress Management Techniques</h3>
                <p className="text-lg">Learn evidence-based strategies to manage stress responses and regulate emotions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Boundary Setting</h3>
                <p className="text-lg">Develop skills to say no, set limits, and protect your personal time.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cognitive Restructuring</h3>
                <p className="text-lg">Challenge unhelpful thought patterns like perfectionism or catastrophizing.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Communication Skills</h3>
                <p className="text-lg">Improve assertiveness and navigate difficult workplace conversations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Integration</h3>
                <p className="text-lg">Create sustainable balance between professional and personal priorities.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Assessment</h3>
                <p className="text-lg">Evaluate whether your current role aligns with your values and long-term goals.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">EAP Benefits: What Are They?</h2>
            <p className="text-lg leading-relaxed mb-4">
              Many employers offer Employee Assistance Programs (EAPs) that provide:
            </p>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>Free, confidential counseling sessions (typically 3-8 sessions)</li>
              <li>Work-life services and referrals</li>
              <li>Crisis intervention</li>
              <li>Legal and financial consultations</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Check with your HR department to see if your employer offers EAP benefits. These services are confidential and don't require notifying your employer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Preventing Burnout: Self-Care Strategies</h2>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li><strong>Set clear boundaries:</strong> Establish work hours and stick to them</li>
              <li><strong>Take regular breaks:</strong> Step away from your desk throughout the day</li>
              <li><strong>Use vacation time:</strong> Don't let PTO go unused</li>
              <li><strong>Practice saying no:</strong> Don't overcommit to projects or responsibilities</li>
              <li><strong>Disconnect after hours:</strong> Turn off work notifications outside work time</li>
              <li><strong>Maintain relationships:</strong> Prioritize time with family and friends</li>
              <li><strong>Exercise regularly:</strong> Physical activity reduces stress hormones</li>
              <li><strong>Pursue hobbies:</strong> Engage in activities unrelated to work</li>
              <li><strong>Seek support:</strong> Talk to trusted friends, family, or a therapist</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Don't Let Work Burnout Control Your Life</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling specializes in helping professionals manage workplace stress and prevent burnout. Reclaim your well-being and career satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary">Schedule Consultation</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">Learn More</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default WorkplaceStressBurnout;