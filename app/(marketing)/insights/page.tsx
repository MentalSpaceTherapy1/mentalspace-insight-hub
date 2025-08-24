import type { Metadata } from 'next';
import Link from 'next/link';
import { getCanonicalUrl } from '@/lib/seo/canonical';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getCanonicalUrl('/insights');
  
  return {
    title: 'Mental Health Insights & Resources | Expert Articles on Therapy',
    description: 'Expert-reviewed articles on mental health topics including anxiety, depression, therapy techniques, and wellness strategies from licensed professionals.',
    keywords: 'mental health articles, therapy resources, anxiety help, depression information, mental wellness',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'Mental Health Insights & Resources | Expert Articles',
      description: 'Expert-reviewed articles on mental health topics including anxiety, depression, therapy techniques, and wellness strategies.',
      url: canonicalUrl,
      type: 'website',
    },
  };
}

const insights = [
  {
    slug: 'anxiety-basics',
    title: 'Understanding Anxiety: Basics and Treatment Options',
    description: 'A comprehensive guide to understanding anxiety disorders, their symptoms, and evidence-based treatment approaches.',
    author: 'Dr. Sarah Johnson, Licensed Psychologist',
    publishDate: '2024-01-15',
    readTime: '8 min read',
  },
  {
    slug: 'cbt-for-panic',
    title: 'Cognitive Behavioral Therapy for Panic Disorders',
    description: 'Learn how CBT techniques can help manage and overcome panic attacks through practical strategies and exercises.',
    author: 'Dr. Michael Chen, Licensed Clinical Social Worker',
    publishDate: '2024-01-10',
    readTime: '6 min read',
  },
];

export default function InsightsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Mental Health Insights
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Expert-reviewed articles and resources on mental health and therapy
        </p>

        <div className="space-y-8">
          {insights.map((insight) => (
            <article key={insight.slug} className="bg-card rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">
                    <Link 
                      href={`/insights/${insight.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {insight.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{insight.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>By {insight.author}</span>
                    <span>•</span>
                    <time dateTime={insight.publishDate}>
                      {new Date(insight.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center text-primary hover:underline mt-4 md:mt-0 md:ml-4"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}