import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCanonicalUrl } from '@/lib/seo/canonical';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TLDR } from '@/components/TLDR';
import { ArticleMeta } from '@/components/ArticleMeta';
import { breadcrumbSchema } from '@/lib/jsonld/breadcrumbs';
import { articleSchema } from '@/lib/jsonld/article';
import { Button } from '@/src/components/ui/button';

interface ArticleData {
  slug: string;
  title: string;
  description: string;
  author: string;
  reviewedBy: string;
  publishDate: string;
  modifiedDate: string;
  tldr: string[];
  content: string;
  references: Array<{
    title: string;
    url: string;
  }>;
}

const articles: ArticleData[] = [
  {
    slug: 'anxiety-basics',
    title: 'Understanding Anxiety: Basics and Treatment Options',
    description: 'A comprehensive guide to understanding anxiety disorders, their symptoms, and evidence-based treatment approaches.',
    author: 'Dr. Sarah Johnson, Licensed Psychologist',
    reviewedBy: 'Dr. Emily Rodriguez, Clinical Director',
    publishDate: '2024-01-15',
    modifiedDate: '2024-01-20',
    tldr: [
      'Anxiety disorders affect millions of Americans and are highly treatable',
      'Symptoms include excessive worry, physical tension, and avoidance behaviors',
      'Cognitive Behavioral Therapy (CBT) is the gold standard treatment',
      'Medication can be helpful when combined with therapy',
      'Early intervention leads to better outcomes'
    ],
    content: `
      <h2>What is Anxiety?</h2>
      <p>Anxiety is a natural human emotion that everyone experiences from time to time. However, when anxiety becomes persistent, excessive, and interferes with daily functioning, it may indicate an anxiety disorder.</p>
      
      <h2>Common Anxiety Disorders</h2>
      <p>There are several types of anxiety disorders, including:</p>
      <ul>
        <li>Generalized Anxiety Disorder (GAD)</li>
        <li>Social Anxiety Disorder</li>
        <li>Panic Disorder</li>
        <li>Specific Phobias</li>
      </ul>
      
      <h2>Evidence-Based Treatment Options</h2>
      <p>Research shows that anxiety disorders respond well to treatment. The most effective approaches include:</p>
      
      <h3>Cognitive Behavioral Therapy (CBT)</h3>
      <p>CBT helps individuals identify and change negative thought patterns and behaviors that contribute to anxiety. This approach has strong research support and helps people develop long-lasting coping skills.</p>
      
      <h3>Exposure Therapy</h3>
      <p>For specific phobias and social anxiety, gradual exposure to feared situations helps reduce anxiety over time through a process called habituation.</p>
      
      <h2>When to Seek Professional Help</h2>
      <p>Consider reaching out to a mental health professional if anxiety is affecting your work, relationships, or daily activities. Early intervention can prevent symptoms from worsening.</p>
    `,
    references: [
      {
        title: 'Anxiety Disorders - National Institute of Mental Health',
        url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders'
      },
      {
        title: 'Treatment of Anxiety Disorders - American Psychological Association',
        url: 'https://www.apa.org/ptsd-guideline/treatments/anxiety-disorders'
      }
    ]
  },
  {
    slug: 'cbt-for-panic',
    title: 'Cognitive Behavioral Therapy for Panic Disorders',
    description: 'Learn how CBT techniques can help manage and overcome panic attacks through practical strategies and exercises.',
    author: 'Dr. Michael Chen, Licensed Clinical Social Worker',
    reviewedBy: 'Dr. Emily Rodriguez, Clinical Director',
    publishDate: '2024-01-10',
    modifiedDate: '2024-01-15',
    tldr: [
      'CBT is highly effective for treating panic disorder with lasting results',
      'Panic attacks involve both physical symptoms and catastrophic thinking',
      'Breathing techniques and grounding exercises provide immediate relief',
      'Cognitive restructuring helps challenge panic-related thoughts',
      'Most people see significant improvement within 12-16 sessions'
    ],
    content: `
      <h2>Understanding Panic Attacks</h2>
      <p>Panic attacks are sudden episodes of intense fear that reach a peak within minutes. They involve both physical symptoms (racing heart, sweating, shortness of breath) and cognitive symptoms (fear of losing control, fear of dying).</p>
      
      <h2>How CBT Addresses Panic</h2>
      <p>Cognitive Behavioral Therapy for panic disorder focuses on breaking the cycle of fear that maintains panic attacks. The treatment addresses three key components:</p>
      
      <h3>1. Cognitive Restructuring</h3>
      <p>Learning to identify and challenge catastrophic thoughts that trigger panic, such as "I'm having a heart attack" or "I'm going crazy."</p>
      
      <h3>2. Behavioral Experiments</h3>
      <p>Testing out feared situations in a controlled way to gather evidence against catastrophic predictions.</p>
      
      <h3>3. Interoceptive Exposure</h3>
      <p>Deliberately inducing mild physical sensations similar to panic (like spinning or breathing through a straw) to reduce fear of these sensations.</p>
      
      <h2>Practical Coping Strategies</h2>
      
      <h3>4-7-8 Breathing Technique</h3>
      <ol>
        <li>Inhale for 4 counts</li>
        <li>Hold breath for 7 counts</li>
        <li>Exhale for 8 counts</li>
        <li>Repeat 3-4 times</li>
      </ol>
      
      <h3>5-4-3-2-1 Grounding</h3>
      <p>Notice 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.</p>
      
      <h2>Recovery Timeline</h2>
      <p>Most people with panic disorder see significant improvement within 12-16 CBT sessions, with many becoming panic-free by the end of treatment.</p>
    `,
    references: [
      {
        title: 'Panic Disorder Treatment Guidelines - American Psychiatric Association',
        url: 'https://www.psychiatry.org/patients-families/panic-disorder'
      },
      {
        title: 'CBT for Panic Disorder - National Center for PTSD',
        url: 'https://www.ptsd.va.gov/professional/treat/txessentials/cbt_panic.asp'
      }
    ]
  }
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  
  if (!article) {
    return {};
  }

  const canonicalUrl = getCanonicalUrl(`/insights/${article.slug}`);
  
  return {
    title: `${article.title} | MentalSpace Insights`,
    description: article.description,
    keywords: `${article.title.toLowerCase()}, mental health, therapy, anxiety treatment, depression help`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | MentalSpace`,
      description: article.description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: article.publishDate,
      modifiedTime: article.modifiedDate,
      authors: [article.author],
    },
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
    { name: article.title, url: `/insights/${article.slug}` },
  ];

  const breadcrumbSchemaData = breadcrumbSchema(breadcrumbs);
  const articleSchemaData = articleSchema(article, getCanonicalUrl(`/insights/${article.slug}`));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaData) }}
      />
      
      <article className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{article.description}</p>
            
            <ArticleMeta 
              author={article.author}
              reviewedBy={article.reviewedBy}
              publishDate={article.publishDate}
              modifiedDate={article.modifiedDate}
            />
          </header>

          <TLDR items={article.tldr} />
          
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <footer className="border-t pt-8">
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">References</h2>
              <ul className="space-y-2">
                {article.references.map((ref, index) => (
                  <li key={index}>
                    <a 
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Connect with a licensed therapist today and begin your journey to better mental health.
              </p>
              <Button asChild>
                <Link href="/get-started">Start Your Therapy Journey</Link>
              </Button>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}