import PillarPageTemplate from '@/components/PillarPageTemplate';

const OnlineTherapyGuide = () => {
  return (
    <PillarPageTemplate
      title="Online Therapy: Is Teletherapy Right for You?"
      subtitle="A complete guide to virtual counseling and telehealth mental health services"
      description="Learn how online therapy works, its effectiveness compared to in-person therapy, what you need for teletherapy sessions, and whether virtual counseling is right for you."
      canonicalUrl="https://chctherapy.com/guides/online-therapy"
      publishedDate="2024-12-01"
      updatedDate="2024-12-11"
      readTime={12}
      keywords="online therapy guide, teletherapy, virtual counseling, telehealth therapy, is online therapy effective, how does online therapy work"
      relatedServices={[
        { title: "Online Therapy", url: "/online-therapy" },
        { title: "Telehealth in Georgia", url: "/blog/telehealth-therapy-georgia" }
      ]}
      relatedArticles={[
        { title: "Benefits of Online Therapy", url: "/blog/benefits-online-therapy" },
        { title: "Telehealth Therapy in Georgia", url: "/blog/telehealth-therapy-georgia" },
        { title: "Insurance for Online Therapy", url: "/blog/therapy-online-insurance-coverage" }
      ]}
    >
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl font-semibold text-foreground mb-4">Coming Soon</p>
        <p>This comprehensive guide is currently being developed by our clinical team.</p>
        <p className="mt-4">Check back soon for expert information on online therapy and teletherapy options.</p>
      </div>
    </PillarPageTemplate>
  );
};

export default OnlineTherapyGuide;
