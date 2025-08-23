import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph tags
    if (ogTitle) {
      let ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute('content', ogTitle);
      }
    }

    if (ogDescription) {
      let ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (ogDescMeta) {
        ogDescMeta.setAttribute('content', ogDescription);
      }
    }

    if (ogImage) {
      let ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      }
    }

    // Update structured data
    if (structuredData) {
      // Remove existing structured data for this page
      const existingScript = document.querySelector('#page-structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-structured-data';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Update URL in Open Graph
    const currentUrl = window.location.href;
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute('content', currentUrl);
    }

  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, structuredData]);
};

// Pre-defined SEO configurations for common pages
export const SEO_CONFIGS = {
  home: {
    title: "MentalSpace - Online Therapy & Mental Health Services | Licensed Therapists Available 24/7",
    description: "Professional online therapy and mental health services. Connect with licensed therapists anytime, anywhere. Individual therapy, couples counseling, teen therapy, and life coaching. Most insurance accepted.",
    keywords: "online therapy, mental health, licensed therapists, counseling, psychology, depression, anxiety, couples therapy, teen therapy, life coaching",
    ogTitle: "MentalSpace - Professional Online Therapy Services",
    ogDescription: "Connect with licensed therapists anytime, anywhere. Professional mental health support that fits your schedule."
  },
  onlineTherapy: {
    title: "Online Therapy Services - Licensed Therapists | MentalSpace",
    description: "Convenient online therapy with licensed professionals. Video, phone, or text sessions available. Treat depression, anxiety, trauma, and more. Insurance accepted.",
    keywords: "online therapy, teletherapy, virtual counseling, licensed therapists, depression treatment, anxiety therapy",
    ogTitle: "Online Therapy Services - Professional & Convenient",
    ogDescription: "Get therapy that fits your schedule. Licensed therapists available for video, phone, or text sessions."
  },
  couplesTherapy: {
    title: "Couples Therapy & Relationship Counseling Online | MentalSpace",
    description: "Professional couples therapy and relationship counseling online. Strengthen your relationship with licensed therapists. Flexible scheduling and insurance accepted.",
    keywords: "couples therapy, relationship counseling, marriage therapy, online couples counseling, relationship problems",
    ogTitle: "Couples Therapy & Relationship Counseling Online",
    ogDescription: "Strengthen your relationship with professional couples therapy. Licensed therapists available online."
  },
  teenTherapy: {
    title: "Teen Therapy & Adolescent Counseling Services | MentalSpace",
    description: "Specialized therapy for teenagers aged 13-17. Help your teen navigate challenges with licensed adolescent counselors. Online sessions available.",
    keywords: "teen therapy, adolescent counseling, teenage depression, teen anxiety, youth mental health",
    ogTitle: "Teen Therapy & Adolescent Counseling Services",
    ogDescription: "Specialized therapy for teenagers. Licensed counselors help teens navigate challenges and build resilience."
  },
  lifeCoaching: {
    title: "Life Coaching Services Online - Personal Development | MentalSpace",
    description: "Professional life coaching to help you achieve your goals. Career coaching, relationship coaching, and personal development with certified coaches.",
    keywords: "life coaching, personal development, career coaching, relationship coaching, goal setting",
    ogTitle: "Professional Life Coaching Services Online",
    ogDescription: "Achieve your goals with professional life coaching. Career, relationship, and personal development support."
  }
};