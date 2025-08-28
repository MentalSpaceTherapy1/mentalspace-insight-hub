const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mentalspacetherapy.lovable.app';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "MentalSpace",
  "url": baseUrl,
  "logo": `${baseUrl}/favicon.ico`,
  "description": "Professional online therapy and mental health services with licensed therapists in Georgia",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "GA",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service",
    "availableLanguage": "English",
    "areaServed": "Georgia"
  },
  "medicalSpecialty": [
    "Psychiatry",
    "Psychology", 
    "Mental Health Counseling",
    "Marriage and Family Therapy",
    "Adolescent Psychology"
  ],
  "serviceType": [
    "Online Therapy",
    "Telehealth Counseling",
    "Mental Health Services"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MentalSpace",
  "url": baseUrl,
  "description": "Professional online therapy and mental health services with licensed therapists",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};