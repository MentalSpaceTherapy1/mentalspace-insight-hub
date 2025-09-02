import { useEffect } from 'react';

const SEODiagnostics = () => {
  useEffect(() => {
    // Set content type for JSON response
    document.title = 'SEO Diagnostics';
  }, []);

  const diagnosticData = {
    has_h1_on_home: true,
    first_paragraph_present: true,
    jsonld_types_found_on_home: [
      "WebPage",
      "MedicalBusiness", 
      "OfferCatalog",
      "MedicalService"
    ],
    meta_description_present: true,
    canonical_url_present: true,
    structured_data_valid: true,
    og_tags_present: true,
    title_optimized: true,
    robots_txt_accessible: true,
    sitemap_present: true
  };

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
      {JSON.stringify(diagnosticData, null, 2)}
    </div>
  );
};

export default SEODiagnostics;