import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { generateArticleSchema } from "@/utils/schemaGenerators";

const BuildingSelfEsteem = () => {
  const articleSchema = generateArticleSchema(
    "Building Self-Esteem: Therapy Techniques for Greater Confidence",
    "Learn how therapy builds self-esteem and confidence. Explore CBT techniques, causes of low self-worth, and practical strategies for improvement.",
    "https://chctherapy.com/blog/building-self-esteem-therapy",
    "2024-11-15"
  );

  return (
    <>
      <SEOHead
        title="Building Self-Esteem: Therapy Techniques for Greater Confidence"
        description="Learn how therapy builds self-esteem and confidence. Explore CBT techniques, causes of low self-worth, and practical strategies for improvement."
        keywords="building self-esteem, confidence therapy, self-worth counseling, low self-esteem treatment"
        canonicalUrl="https://chctherapy.com/blog/building-self-esteem-therapy"
        structuredData={articleSchema}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Building Self-Esteem: Therapy Techniques for Greater Confidence
              </h1>
              <p className="text-xl text-muted-foreground">Develop lasting confidence and self-worth through proven therapeutic approaches</p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            Self-esteem—how you value and perceive yourself—profoundly impacts every area of life. Low self-esteem can lead to anxiety, depression, relationship difficulties, and missed opportunities. While building self-esteem takes time and effort, therapy provides evidence-based techniques and support to help you develop genuine, lasting confidence.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Understanding Self-Esteem</h2>
            <p className="text-lg leading-relaxed mb-4">
              Self-esteem consists of two components:
            </p>
            <ul className="space-y-3 text-lg list-disc pl-6">
              <li><strong>Self-worth:</strong> Your fundamental belief about your value as a person</li>
              <li><strong>Self-confidence:</strong> Belief in your abilities to handle situations and challenges</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Healthy self-esteem doesn't mean thinking you're perfect or better than others. It means accepting yourself with all your strengths and weaknesses, treating yourself with compassion, and believing you deserve respect and happiness.
            </p>
          </section>

          <section className="mb-12 bg-accent/10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Signs of Low Self-Esteem</h2>
            <ul className="space-y-2 text-lg list-disc pl-6">
              <li>Negative self-talk and harsh self-criticism</li>
              <li>Difficulty accepting compliments</li>
              <li>Comparing yourself unfavorably to others</li>
              <li>Perfectionism or fear of failure</li>
              <li>People-pleasing and difficulty saying no</li>
              <li>Avoiding challenges or new experiences</li>
              <li>Excessive worry about others' opinions</li>
              <li>Difficulty making decisions</li>
              <li>Tolerating poor treatment in relationships</li>
              <li>Social anxiety or withdrawal</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Root Causes of Low Self-Esteem</h2>
            <p className="text-lg leading-relaxed mb-4">
              Understanding where low self-esteem originates helps in addressing it:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Childhood Experiences</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>Critical or neglectful parenting</li>
                  <li>Bullying or social rejection</li>
                  <li>Academic struggles or being compared to siblings</li>
                  <li>Trauma or abuse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Life Experiences</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>Relationship failures or rejection</li>
                  <li>Job loss or career setbacks</li>
                  <li>Financial difficulties</li>
                  <li>Chronic illness or disability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Social and Cultural Factors</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>Unrealistic social media comparisons</li>
                  <li>Societal beauty or success standards</li>
                  <li>Discrimination or marginalization</li>
                  <li>Cultural expectations and pressures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Mental Health Conditions</h3>
                <ul className="list-disc pl-6 text-lg">
                  <li>Depression and anxiety disorders</li>
                  <li>Body dysmorphic disorder</li>
                  <li>Eating disorders</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">How Therapy Builds Self-Esteem</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Cognitive Behavioral Therapy (CBT)</h3>
                <p className="text-lg leading-relaxed mb-3">
                  CBT is highly effective for improving self-esteem:
                </p>
                <ul className="list-disc pl-6 text-lg space-y-2">
                  <li><strong>Identify negative core beliefs:</strong> Uncover automatic thoughts like "I'm not good enough"</li>
                  <li><strong>Challenge distorted thinking:</strong> Examine evidence for and against negative beliefs</li>
                  <li><strong>Reframe thoughts:</strong> Develop balanced, realistic self-perceptions</li>
                  <li><strong>Behavioral experiments:</strong> Test new beliefs through action</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Compassion-Focused Therapy</h3>
                <p className="text-lg">
                  Learn to treat yourself with the same kindness you'd offer a friend. Replace self-criticism with self-compassion and understanding.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Assertiveness Training</h3>
                <p className="text-lg">
                  Practice expressing needs, setting boundaries, and communicating confidently without aggression or passivity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Exploring Origins</h3>
                <p className="text-lg">
                  Process past experiences that shaped your self-image and develop new narratives about yourself.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Practical Self-Esteem Building Exercises</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Practice Self-Compassion</h3>
                <p className="text-lg">When you make a mistake, respond to yourself as you would to a friend: with understanding rather than harsh judgment.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Challenge Negative Self-Talk</h3>
                <p className="text-lg">Notice critical thoughts and ask: "Would I say this to someone I care about?" Replace with realistic, balanced statements.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Celebrate Small Wins</h3>
                <p className="text-lg">Acknowledge daily accomplishments, no matter how small. Keep a success journal.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Set Achievable Goals</h3>
                <p className="text-lg">Break large goals into smaller steps. Each completion builds confidence.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Practice Self-Care</h3>
                <p className="text-lg">Treat yourself with respect through healthy eating, exercise, sleep, and enjoyable activities.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">6. Limit Social Media</h3>
                <p className="text-lg">Reduce exposure to comparison-inducing content. Remember social media shows curated highlights, not reality.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">7. Surround Yourself with Positive People</h3>
                <p className="text-lg">Spend time with supportive people who appreciate you. Distance yourself from those who diminish your worth.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">8. Practice Assertiveness</h3>
                <p className="text-lg">Start saying no to requests that don't serve you. Express your needs and opinions respectfully.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">9. Accept Compliments</h3>
                <p className="text-lg">Instead of deflecting praise, simply say "thank you" and let it in.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">10. Focus on Growth, Not Perfection</h3>
                <p className="text-lg">View mistakes as learning opportunities. Progress matters more than perfection.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Impact of Social Media on Self-Esteem</h2>
            <p className="text-lg leading-relaxed mb-4">
              Social media significantly impacts self-esteem, especially for younger people:
            </p>
            <ul className="space-y-2 text-lg list-disc pl-6 mb-4">
              <li>Constant comparison to others' curated lives</li>
              <li>Validation-seeking through likes and comments</li>
              <li>Cyberbullying and negative comments</li>
              <li>FOMO (fear of missing out)</li>
              <li>Unrealistic beauty and lifestyle standards</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Setting boundaries with social media—limiting time, unfollowing accounts that trigger comparison, and remembering posts don't reflect reality—protects self-esteem.
            </p>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-4">Build Lasting Confidence with Professional Support</h2>
            <p className="text-lg mb-6">
              Coping and Healing Counseling helps clients develop genuine self-esteem and confidence through evidence-based therapy. Start your journey to self-acceptance today.
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

export default BuildingSelfEsteem;