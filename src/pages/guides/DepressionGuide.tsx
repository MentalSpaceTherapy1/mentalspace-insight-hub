import PillarPageTemplate from '@/components/PillarPageTemplate';

const DepressionGuide = () => {
  return (
    <PillarPageTemplate
      title="Understanding Depression: Symptoms & Treatment"
      subtitle="A comprehensive guide to depression and paths to recovery"
      description="Learn about depression symptoms, causes, types, and effective treatments. Understand the difference between sadness and clinical depression, and discover how therapy can help."
      canonicalUrl="https://chctherapy.com/guides/depression"
      publishedDate="2024-12-01"
      updatedDate="2024-12-11"
      readTime={18}
      keywords="depression guide, depression symptoms, depression treatment, clinical depression, major depressive disorder, depression therapy, signs of depression"
      relatedServices={[
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Depression Therapy in Georgia", url: "/depression-therapy-georgia" }
      ]}
      relatedArticles={[
        { title: "Depression in Adults", url: "/blog/depression-adults" },
        { title: "Depression Information", url: "/mental-health-library/depression" },
        { title: "CBT for Depression", url: "/blog/cognitive-behavioral-therapy" }
      ]}
    >
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl font-semibold text-foreground mb-4">Coming Soon</p>
        <p>This comprehensive guide is currently being developed by our clinical team.</p>
        <p className="mt-4">Check back soon for expert information on understanding and treating depression.</p>
      </div>
    </PillarPageTemplate>
  );
};

export default DepressionGuide;
