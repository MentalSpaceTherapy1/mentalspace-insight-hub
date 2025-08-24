interface ArticleData {
  title: string;
  description: string;
  author: string;
  reviewedBy: string;
  publishDate: string;
  modifiedDate: string;
  references: Array<{
    title: string;
    url: string;
  }>;
}

export function articleSchema(article: ArticleData, canonicalUrl: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mentalspacetherapy.lovable.app';
  
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "reviewedBy": {
      "@type": "Person",
      "name": article.reviewedBy
    },
    "publisher": {
      "@type": "Organization",
      "name": "MentalSpace",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.ico`
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "citation": article.references.map(ref => ({
      "@type": "CreativeWork",
      "name": ref.title,
      "url": ref.url
    }))
  };
}