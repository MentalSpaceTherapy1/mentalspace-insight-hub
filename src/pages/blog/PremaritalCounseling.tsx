import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const PremaritalCounseling = () => {
  const articleSchema = generateArticleSchema(
    "Premarital Counseling: Building a Strong Foundation for Marriage",
    "Expert guide to premarital counseling covering topics, benefits, timing, and how pre-wedding therapy strengthens relationships.",
    "https://chctherapy.com/blog/premarital-counseling-guide",
    "2024-11-15"
  );

  return (
    <>
      <SEOHead
        title="Premarital Counseling: Building a Strong Foundation for Marriage"
        description="Expert guide to premarital counseling covering topics, benefits, timing, and how pre-wedding therapy strengthens relationships."
        keywords="premarital counseling, pre-wedding therapy, marriage preparation, premarital therapy"
        canonicalUrl="https://chctherapy.com/blog/premarital-counseling-guide"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Premarital Counseling: Building a Strong Foundation for Marriage
              </h1>
              <p className="text-xl text-muted-foreground">Invest in your future together with pre-wedding therapy</p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Planning a wedding involves countless decisions—venue, catering, guest lists. But what about preparing for the marriage itself? Premarital counseling helps couples build a strong foundation before saying "I do," addressing important topics and strengthening communication skills that will serve your relationship for decades to come.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Consider Premarital Counseling?</h2>
            <p className="text-lg leading-relaxed mb-4">Research shows that couples who participate in premarital counseling have a 30% higher success rate in their marriages. Benefits include:</p>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>Better communication and conflict resolution skills</li>
              <li>Realistic expectations about marriage</li>
              <li>Alignment on important life decisions</li>
              <li>Stronger emotional connection</li>
              <li>Tools to navigate future challenges</li>
              <li>Reduced risk of divorce</li>
            </ul>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Key Topics Covered in Premarital Counseling</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Communication Patterns</h3>
                <p className="text-lg">Learn effective communication styles and how to discuss difficult topics constructively.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conflict Resolution</h3>
                <p className="text-lg">Develop healthy ways to handle disagreements and prevent escalation.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Financial Management</h3>
                <p className="text-lg">Discuss money philosophies, budgeting, debt, and financial goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Family Planning & Parenting</h3>
                <p className="text-lg">Align on whether/when to have children and parenting approaches.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Extended Family Relationships</h3>
                <p className="text-lg">Navigate in-law relationships, boundaries, and holiday traditions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Intimacy & Sexuality</h3>
                <p className="text-lg">Discuss expectations, needs, and maintaining physical connection.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Religious & Spiritual Values</h3>
                <p className="text-lg">Address different beliefs and how they'll shape your marriage and family.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Career & Life Goals</h3>
                <p className="text-lg">Balance individual ambitions with partnership priorities.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Roles & Responsibilities</h3>
                <p className="text-lg">Clarify expectations around household duties, careers, and decision-making.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When Should You Start Premarital Counseling?</h2>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Ideal timing:</strong> 6-12 months before the wedding gives you time to work through issues without wedding planning stress.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Minimum:</strong> At least 3 months before the wedding allows for meaningful progress.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>It's never too late:</strong> Even if your wedding is soon, premarital counseling still provides valuable tools and insights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Faith-Based vs. Secular Premarital Counseling</h2>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Faith-based counseling:</strong> Incorporates religious values and principles. Many churches require premarital counseling and may offer it through clergy or Christian counselors.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Secular counseling:</strong> Focuses on relationship dynamics, communication, and practical life skills without religious framework. Ideal for couples with different faiths or no religious affiliation.
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Invest in Your Marriage Before It Begins</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling offers premarital counseling packages designed to prepare you for a lifetime of partnership. Start your marriage on the strongest foundation possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/couples-therapy">
                <Button size="lg" variant="secondary">Learn About Premarital Counseling</Button>
              </Link>
              <Link to="/get-started">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">Schedule Consultation</Button>
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PremaritalCounseling;