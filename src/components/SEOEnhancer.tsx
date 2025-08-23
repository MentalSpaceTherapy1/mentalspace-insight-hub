import { useEffect } from 'react';

// Enhanced SEO component for E-E-A-T and medical credibility
const SEOEnhancer = () => {
  useEffect(() => {
    // Add medical organization structured data for better E-E-A-T
    const addMedicalCredibilityData = () => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'medical-credibility-data';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "MentalSpace",
        "alternateName": "MentalSpace Online Therapy",
        "description": "Licensed mental health professionals providing evidence-based online therapy and counseling services",
        "url": "https://mentalspace-insight-hub.lovable.app",
        "identifier": {
          "@type": "PropertyValue",
          "name": "NPI",
          "value": "Healthcare Provider Network"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "State Licensed Mental Health Professionals",
            "description": "All therapists are licensed in their respective states with current credentials"
          },
          {
            "@type": "EducationalOccupationalCredential", 
            "name": "HIPAA Compliance Certification",
            "description": "Full compliance with healthcare privacy and security regulations"
          }
        ],
        "knows": [
          {
            "@type": "Thing",
            "name": "Cognitive Behavioral Therapy (CBT)"
          },
          {
            "@type": "Thing", 
            "name": "Dialectical Behavior Therapy (DBT)"
          },
          {
            "@type": "Thing",
            "name": "Eye Movement Desensitization and Reprocessing (EMDR)"
          },
          {
            "@type": "Thing",
            "name": "Acceptance and Commitment Therapy (ACT)"
          }
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "name": "Insurance Coverage Accepted", 
            "description": "Most major insurance plans accepted including Aetna, BCBS, Cigna"
          },
          {
            "@type": "Offer",
            "name": "Same-Week Appointment Availability",
            "description": "New client appointments typically available within the same week"
          }
        ]
      });
      document.head.appendChild(script);
    };

    // Add FAQ structured data for better AEO
    const addFAQData = () => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'faq-structured-data';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can I start online therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most new clients can schedule their first appointment within the same week. After completing our brief assessment, we'll match you with a licensed therapist who meets your specific needs and preferences."
            }
          },
          {
            "@type": "Question",
            "name": "Are online therapy sessions as effective as in-person therapy?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Research shows that online therapy is equally effective as in-person therapy for most mental health conditions, including depression, anxiety, PTSD, and relationship issues. Our licensed therapists use the same evidence-based treatments in virtual sessions."
            }
          },
          {
            "@type": "Question",
            "name": "Is online therapy covered by insurance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and others. We also offer affordable self-pay options and accept HSA/FSA payments."
            }
          },
          {
            "@type": "Question", 
            "name": "What types of mental health conditions do you treat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our licensed therapists specialize in treating depression, anxiety disorders, PTSD, ADHD, bipolar disorder, relationship issues, and many other mental health conditions using evidence-based therapeutic approaches."
            }
          }
        ]
      });
      document.head.appendChild(script);
    };

    // Add breadcrumb structured data for better navigation understanding
    const addBreadcrumbData = () => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'breadcrumb-data';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mentalspace-insight-hub.lovable.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Online Therapy Services",
            "item": "https://mentalspace-insight-hub.lovable.app/online-therapy"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mental Health Tests",
            "item": "https://mentalspace-insight-hub.lovable.app/mental-health-tests"
          }
        ]
      });
      document.head.appendChild(script);
    };

    // Initialize enhanced SEO
    addMedicalCredibilityData();
    addFAQData();
    addBreadcrumbData();

    // Add E-E-A-T signals
    const addEEATSignals = () => {
      // Add author information meta tag
      const authorMeta = document.createElement('meta');
      authorMeta.name = 'author';
      authorMeta.content = 'MentalSpace Clinical Team - Licensed Mental Health Professionals';
      document.head.appendChild(authorMeta);

      // Add medical disclaimer
      const disclaimer = document.createElement('meta');
      disclaimer.name = 'medical-disclaimer';
      disclaimer.content = 'This website provides general information about mental health. Always consult with qualified healthcare providers for professional medical advice.';
      document.head.appendChild(disclaimer);
    };

    addEEATSignals();
  }, []);

  return null;
};

export default SEOEnhancer;