import PillarPageTemplate from '@/components/PillarPageTemplate';

const CouplesCounselingGuide = () => {
  return (
    <PillarPageTemplate
      title="Couples Therapy: Everything You Need to Know"
      subtitle="A complete guide to couples counseling and strengthening your relationship"
      description="Learn when to seek couples therapy, what to expect in sessions, how it works, and how marriage counseling can help improve communication and strengthen your relationship."
      canonicalUrl="https://chctherapy.com/guides/couples-counseling"
      publishedDate="2024-12-01"
      updatedDate="2024-12-11"
      readTime={16}
      keywords="couples therapy guide, marriage counseling, couples counseling, relationship therapy, when to get couples therapy, how couples therapy works"
      relatedServices={[
        { title: "Couples Therapy", url: "/couples-therapy" },
        { title: "Relationship Coaching", url: "/relationship-coaching" },
        { title: "Couples Therapy in Georgia", url: "/couples-therapy-georgia" }
      ]}
      relatedArticles={[
        { title: "Signs You Need Marriage Counseling", url: "/blog/marriage-counseling-signs" },
        { title: "Couples Therapy Communication", url: "/blog/couples-therapy-communication" },
        { title: "Premarital Counseling", url: "/blog/premarital-counseling" }
      ]}
    >
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl font-semibold text-foreground mb-4">Coming Soon</p>
        <p>This comprehensive guide is currently being developed by our clinical team.</p>
        <p className="mt-4">Check back soon for expert information on couples therapy and relationship counseling.</p>
      </div>
    </PillarPageTemplate>
  );
};

export default CouplesCounselingGuide;
