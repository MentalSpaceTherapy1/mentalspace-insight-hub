import PillarPageTemplate from '@/components/PillarPageTemplate';

const TherapyCostGuide = () => {
  return (
    <PillarPageTemplate
      title="How to Pay for Therapy: Insurance & Cost Guide"
      subtitle="Understanding therapy costs, insurance coverage, and affordable options"
      description="Learn how much therapy costs, how to use insurance for mental health care, Medicaid coverage in Georgia, sliding scale options, and tips for making therapy affordable."
      canonicalUrl="https://chctherapy.com/guides/therapy-cost"
      publishedDate="2024-12-01"
      updatedDate="2024-12-11"
      readTime={14}
      keywords="therapy cost, how much does therapy cost, insurance for therapy, Medicaid therapy Georgia, affordable therapy, mental health insurance coverage"
      relatedServices={[
        { title: "Insurance Information", url: "/insurance" },
        { title: "Online Therapy", url: "/online-therapy" }
      ]}
      relatedArticles={[
        { title: "Therapy Cost & Payment Options", url: "/blog/therapy-cost-payment-options-guide" },
        { title: "Insurance Coverage for Online Therapy", url: "/blog/therapy-online-insurance-coverage" }
      ]}
    >
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl font-semibold text-foreground mb-4">Coming Soon</p>
        <p>This comprehensive guide is currently being developed by our clinical team.</p>
        <p className="mt-4">Check back soon for expert information on therapy costs and insurance coverage.</p>
      </div>
    </PillarPageTemplate>
  );
};

export default TherapyCostGuide;
