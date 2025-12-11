import PillarPageTemplate from '@/components/PillarPageTemplate';

const StartingTherapyGuide = () => {
  return (
    <PillarPageTemplate
      title="Complete Guide to Starting Therapy"
      subtitle="Everything you need to know about beginning your mental health journey"
      description="Learn how to start therapy, what to expect in your first session, how to find the right therapist, and tips for getting the most out of counseling. A complete beginner's guide."
      canonicalUrl="https://chctherapy.com/guides/starting-therapy"
      publishedDate="2024-12-01"
      updatedDate="2024-12-11"
      readTime={15}
      keywords="starting therapy, first therapy session, how to start counseling, therapy for beginners, what to expect in therapy"
      relatedServices={[
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Get Started", url: "/get-started" },
        { title: "Therapist Matching", url: "/therapist-matching" }
      ]}
      relatedArticles={[
        { title: "Finding the Right Therapist", url: "/blog/finding-right-therapist-guide" },
        { title: "Benefits of Online Therapy", url: "/blog/benefits-online-therapy" },
        { title: "Therapy Cost & Payment Guide", url: "/blog/therapy-cost-payment-options-guide" }
      ]}
    >
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl font-semibold text-foreground mb-4">Coming Soon</p>
        <p>This comprehensive guide is currently being developed by our clinical team.</p>
        <p className="mt-4">Check back soon for expert information on starting your therapy journey.</p>
      </div>
    </PillarPageTemplate>
  );
};

export default StartingTherapyGuide;
