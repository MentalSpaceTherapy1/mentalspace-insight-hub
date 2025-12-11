// Schema.org structured data generators for SEO

export const BUSINESS_INFO = {
  name: "Coping and Healing Counseling",
  url: "https://chctherapy.com",
  telephone: "(404) 832-0102",
  email: "support@chctherapy.com",
  logo: "https://chctherapy.com/chc-logo.png"
};

// County coordinates for LocalBusiness geo data
export const COUNTY_COORDINATES: Record<string, { lat: number; lng: number; city: string }> = {
  "Fulton": { lat: 33.7904, lng: -84.4503, city: "Atlanta" },
  "Gwinnett": { lat: 33.9562, lng: -84.0261, city: "Lawrenceville" },
  "Cobb": { lat: 33.9411, lng: -84.5752, city: "Marietta" },
  "DeKalb": { lat: 33.7748, lng: -84.2281, city: "Decatur" },
  "Chatham": { lat: 32.0286, lng: -81.1821, city: "Savannah" },
  "Richmond": { lat: 33.4735, lng: -82.0105, city: "Augusta" },
  "Bibb": { lat: 32.8065, lng: -83.6974, city: "Macon" },
  "Muscogee": { lat: 32.5102, lng: -84.8749, city: "Columbus" },
  "Hall": { lat: 34.3037, lng: -83.8193, city: "Gainesville" },
  "Lowndes": { lat: 30.8327, lng: -83.2785, city: "Valdosta" },
  "Clarke": { lat: 33.9519, lng: -83.3576, city: "Athens" },
  "Glynn": { lat: 31.2136, lng: -81.4915, city: "Brunswick" },
  "Thomas": { lat: 30.8658, lng: -83.9571, city: "Thomasville" },
  "Cherokee": { lat: 34.2412, lng: -84.4858, city: "Canton" },
  "Forsyth": { lat: 34.2073, lng: -84.1243, city: "Cumming" },
  "Camden": { lat: 30.9191, lng: -81.6148, city: "Kingsland" },
  "Colquitt": { lat: 31.1871, lng: -83.7668, city: "Moultrie" },
  "Clayton": { lat: 33.5416, lng: -84.3653, city: "Jonesboro" },
  "Houston": { lat: 32.4609, lng: -83.6324, city: "Warner Robins" }
};

/**
 * Generate Article schema for blog posts
 */
export const generateArticleSchema = (
  headline: string,
  description: string,
  canonicalUrl: string,
  datePublished: string,
  dateModified?: string,
  imageUrl?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "author": {
    "@type": "Organization",
    "name": BUSINESS_INFO.name,
    "url": BUSINESS_INFO.url
  },
  "publisher": {
    "@type": "Organization",
    "name": BUSINESS_INFO.name,
    "url": BUSINESS_INFO.url,
    "logo": {
      "@type": "ImageObject",
      "url": BUSINESS_INFO.logo
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": canonicalUrl
  },
  ...(imageUrl && {
    "image": {
      "@type": "ImageObject",
      "url": imageUrl
    }
  })
});

/**
 * Generate MedicalBusiness schema for service pages
 */
export const generateMedicalBusinessSchema = (
  serviceName: string,
  description: string,
  canonicalUrl: string,
  services: string[] = []
) => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": `${BUSINESS_INFO.name} - ${serviceName}`,
  "description": description,
  "url": canonicalUrl,
  "telephone": BUSINESS_INFO.telephone,
  "email": BUSINESS_INFO.email,
  "areaServed": {
    "@type": "State",
    "name": "Georgia",
    "sameAs": "https://en.wikipedia.org/wiki/Georgia_(U.S._state)"
  },
  "medicalSpecialty": "Psychiatric",
  "availableService": services.map(service => ({
    "@type": "MedicalTherapy",
    "name": service
  })),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${serviceName} Services`,
    "itemListElement": services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service
      }
    }))
  }
});

/**
 * Generate LocalBusiness schema with geo data for county pages
 */
export const generateCountyBusinessSchema = (
  countyName: string,
  description: string,
  canonicalUrl: string
) => {
  const coords = COUNTY_COORDINATES[countyName] || { lat: 33.7904, lng: -84.4503, city: "Atlanta" };
  
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `${BUSINESS_INFO.name} - ${countyName} County`,
    "description": description,
    "url": canonicalUrl,
    "telephone": BUSINESS_INFO.telephone,
    "email": BUSINESS_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": coords.city,
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${countyName} County, Georgia`
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "medicalSpecialty": "Psychiatric",
    "priceRange": "$$"
  };
};

/**
 * Generate WebPage schema for informational pages like insurance guides
 */
export const generateWebPageSchema = (
  title: string,
  description: string,
  canonicalUrl: string,
  aboutName: string
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": canonicalUrl,
  "isPartOf": {
    "@type": "WebSite",
    "name": BUSINESS_INFO.name,
    "url": BUSINESS_INFO.url
  },
  "about": {
    "@type": "Thing",
    "name": aboutName
  }
});

/**
 * Generate MedicalWebPage schema for condition pages
 */
export const generateMedicalWebPageSchema = (
  conditionName: string,
  description: string,
  canonicalUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": `${conditionName} - Mental Health Information`,
  "description": description,
  "url": canonicalUrl,
  "medicalAudience": {
    "@type": "MedicalAudience",
    "audienceType": "Patient"
  },
  "about": {
    "@type": "MedicalCondition",
    "name": conditionName
  },
  "lastReviewed": new Date().toISOString().split('T')[0],
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "cssSelector": "main"
  }
});

/**
 * Combine multiple schemas into an array for pages with multiple schema types
 */
export const combineSchemas = (...schemas: object[]) => schemas;
