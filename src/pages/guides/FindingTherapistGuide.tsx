import PillarPageTemplate from '@/components/PillarPageTemplate';

const FindingTherapistGuide = () => {
  return (
    <PillarPageTemplate
      title="How to Find the Right Therapist"
      subtitle="A step-by-step guide to finding a therapist who's the right fit for you"
      description="Learn how to find the right therapist for your needs, questions to ask potential therapists, what credentials to look for, and how to know if a therapist is a good match."
      canonicalUrl="https://chctherapy.com/guides/finding-therapist"
      publishedDate="2024-12-01"
      updatedDate="2024-12-11"
      readTime={15}
      keywords="find a therapist, how to find a therapist, choosing a therapist, therapist credentials, questions to ask therapist, right therapist for me"
      relatedServices={[
        { title: "Therapist Matching", url: "/therapist-matching" },
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Get Started", url: "/get-started" }
      ]}
      relatedArticles={[
        { title: "Finding the Right Therapist", url: "/blog/finding-right-therapist-guide" },
        { title: "Starting Therapy Guide", url: "/guides/starting-therapy" },
        { title: "FAQ", url: "/faq" }
      ]}
    >
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl font-semibold text-foreground mb-4">Coming Soon</p>
        <p>This comprehensive guide is currently being developed by our clinical team.</p>
        <p className="mt-4">Check back soon for expert tips on finding the right therapist for you.</p>
      </div>
    </PillarPageTemplate>
  );
};

export default FindingTherapistGuide;
