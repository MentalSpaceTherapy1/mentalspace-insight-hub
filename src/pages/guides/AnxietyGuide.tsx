import PillarPageTemplate from '@/components/PillarPageTemplate';

const AnxietyGuide = () => {
  return (
    <PillarPageTemplate
      title="Understanding Anxiety: Symptoms, Types & Treatment"
      subtitle="A comprehensive guide to anxiety disorders and effective treatment options"
      description="Learn about different types of anxiety disorders, recognize symptoms, understand causes, and discover effective treatment options including therapy, CBT, and medication."
      canonicalUrl="https://chctherapy.com/guides/anxiety"
      publishedDate="2024-12-01"
      updatedDate="2024-12-11"
      readTime={20}
      keywords="anxiety guide, anxiety symptoms, anxiety treatment, generalized anxiety disorder, social anxiety, panic attacks, anxiety therapy"
      relatedServices={[
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Anxiety Therapy in Georgia", url: "/anxiety-therapy-georgia" }
      ]}
      relatedArticles={[
        { title: "Understanding Anxiety", url: "/blog/understanding-anxiety" },
        { title: "CBT Therapy Guide", url: "/blog/cognitive-behavioral-therapy" },
        { title: "Social Anxiety Disorder", url: "/mental-health-library/social-anxiety-disorder" }
      ]}
    >
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl font-semibold text-foreground mb-4">Coming Soon</p>
        <p>This comprehensive guide is currently being developed by our clinical team.</p>
        <p className="mt-4">Check back soon for expert information on understanding and treating anxiety.</p>
      </div>
    </PillarPageTemplate>
  );
};

export default AnxietyGuide;
