import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SettingHealthyBoundaries = () => {
  return (
    <>
      <SEOHead
        title="Setting Healthy Boundaries: A Therapist's Guide to Saying No"
        description="Learn how to set healthy boundaries in relationships, work, and family. Practical communication scripts and therapy techniques for better boundaries."
        keywords="setting boundaries, healthy boundaries therapy, learning to say no, boundary setting"
        canonicalUrl="https://chctherapy.com/blog/setting-healthy-boundaries-guide"
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Setting Healthy Boundaries: A Therapist's Guide to Saying No
              </h1>
            </div>
          </div>
        </section>
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Boundaries are essential for healthy relationships and personal well-being. They define where you end and others begin, protecting your time, energy, emotions, and values. Yet many people struggle with setting boundaries, fearing they'll hurt others or be seen as selfish. Learning to set healthy boundaries is a crucial skill that therapy can help you develop.
          </p>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Types of Boundaries</h2>
            <ul className="space-y-3 text-lg list-disc pl-6">
              <li><strong>Physical:</strong> Personal space, touch, privacy</li>
              <li><strong>Emotional:</strong> Sharing feelings, taking on others' emotions</li>
              <li><strong>Time:</strong> How you spend your time, availability</li>
              <li><strong>Mental:</strong> Thoughts, opinions, values</li>
              <li><strong>Material:</strong> Money, possessions, resources</li>
              <li><strong>Sexual:</strong> Physical intimacy, comfort levels</li>
            </ul>
          </section>
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Learn to Set Healthy Boundaries</h2>
            <p className="text-lg mb-6">Coping and Healing Counseling helps you develop assertiveness skills and set boundaries that protect your well-being.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started"><Button size="lg" variant="secondary">Schedule Consultation</Button></Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default SettingHealthyBoundaries;