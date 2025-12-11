import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const FamilyTherapyGuide = () => {
  const articleSchema = generateArticleSchema(
    "Family Therapy: Healing Relationships & Improving Communication",
    "Complete guide to family therapy covering benefits, when families need counseling, systemic approaches, and how to improve family dynamics.",
    "https://chctherapy.com/blog/family-therapy-guide",
    "2024-11-15"
  );

  return (
    <>
      <SEOHead
        title="Family Therapy: Healing Relationships & Improving Communication"
        description="Complete guide to family therapy covering benefits, when families need counseling, systemic approaches, and how to improve family dynamics."
        keywords="family therapy benefits, family counseling, family communication, family therapy guide"
        canonicalUrl="https://chctherapy.com/blog/family-therapy-guide"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Family Therapy: Healing Relationships & Improving Communication
              </h1>
              <p className="text-xl text-muted-foreground">Understanding how family counseling can strengthen your family bonds</p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Families are complex systems where each member's actions and emotions affect everyone else. When conflicts, communication breakdowns, or behavioral issues arise, family therapy provides a space to heal relationships, improve understanding, and develop healthier patterns together.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What Is Family Therapy?</h2>
            <p className="text-lg leading-relaxed mb-4">
              Family therapy is a type of counseling that helps family members improve communication, resolve conflicts, and understand one another better. Unlike individual therapy, family therapy views problems within the context of family relationships and dynamics.
            </p>
            <p className="text-lg leading-relaxed">
              A family therapist works with the entire family system or specific combinations of family members to address issues affecting the whole family's functioning and wellbeing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When Families Need Therapy</h2>
            <ul className="space-y-3 text-lg list-disc pl-6">
              <li>Frequent conflicts or inability to resolve disagreements</li>
              <li>Communication breakdowns between family members</li>
              <li>Child or teen behavioral issues affecting the family</li>
              <li>Substance abuse problems impacting family relationships</li>
              <li>Mental health issues in one or more family members</li>
              <li>Major life transitions (divorce, remarriage, relocation)</li>
              <li>Grief following loss of a family member</li>
              <li>Parenting challenges or disagreements</li>
              <li>Blended family adjustment difficulties</li>
              <li>Multigenerational conflicts</li>
            </ul>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Benefits of Family Therapy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Improved Communication</h3>
                <p className="text-lg">Learn to express feelings, listen actively, and understand different perspectives.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Stronger Bonds</h3>
                <p className="text-lg">Rebuild trust and connection between family members.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Conflict Resolution Skills</h3>
                <p className="text-lg">Develop healthy ways to address disagreements and solve problems together.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Understanding Family Patterns</h3>
                <p className="text-lg">Recognize unhealthy dynamics and create positive changes.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Support During Transitions</h3>
                <p className="text-lg">Navigate major changes as a united family unit.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Different Family Structures</h2>
            <p className="text-lg leading-relaxed mb-4">Family therapy adapts to various family configurations:</p>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li><strong>Nuclear families:</strong> Parents and children</li>
              <li><strong>Blended families:</strong> Stepparents, stepsiblings, half-siblings</li>
              <li><strong>Single-parent families:</strong> One parent raising children</li>
              <li><strong>Multigenerational families:</strong> Grandparents living with or raising grandchildren</li>
              <li><strong>Same-sex parent families:</strong> LGBTQ+ parents and children</li>
              <li><strong>Adoptive or foster families:</strong> Non-biological family relationships</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Strengthen Your Family Relationships</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling offers family therapy throughout Georgia to help your family communicate better and grow stronger together.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started">
                <Button size="lg" variant="secondary">Schedule Family Consultation</Button>
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

export default FamilyTherapyGuide;