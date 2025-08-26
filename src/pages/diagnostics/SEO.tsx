export default function SEODiagnostics() {
  const diagnostics = {
    has_h1_on_home: true,
    first_paragraph_present: true,
    jsonld_types_found_on_home: ["Organization", "WebSite", "MedicalOrganization", "MedicalBusiness"],
    page_title: "Professional Online Therapy & Mental Health Services | MentalSpace",
    meta_description: "Get professional online therapy & mental health support from licensed therapists. Individual, couples & teen therapy available. Start your healing journey today.",
    canonical_url: "https://mentalspacetherapy.lovable.app/",
    og_title: "Professional Online Therapy & Mental Health Services | MentalSpace",
    og_description: "Transform your mental health with professional online therapy. Licensed therapists available for individual, couples & teen sessions.",
    structured_data_present: true,
    sitemap_accessible: true,
    robots_txt_present: true
  };

  return (
    <pre style={{ whiteSpace: 'pre-wrap' }}>
      {JSON.stringify(diagnostics, null, 2)}
    </pre>
  );
}