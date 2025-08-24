import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCanonicalUrl } from '@/lib/seo/canonical';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { breadcrumbSchema } from '@/lib/jsonld/breadcrumbs';
import { Button } from '@/src/components/ui/button';

interface ServiceData {
  slug: string;
  title: string;
  description: string;
  content: {
    whatItHelps: string[];
    whatToExpect: string;
    modalities: string[];
  };
  image: string;
}

const services: ServiceData[] = [
  {
    slug: 'adults',
    title: 'Individual Therapy for Adults',
    description: 'Evidence-based therapy for anxiety, depression, trauma, and life transitions',
    content: {
      whatItHelps: [
        'Anxiety and panic disorders',
        'Depression and mood disorders',
        'Trauma and PTSD',
        'Life transitions and adjustment',
        'Relationship difficulties',
        'Work and career stress'
      ],
      whatToExpected: 'In our telehealth sessions, you\'ll work one-on-one with a licensed therapist from the comfort of your home. Sessions are conducted via secure video platform, ensuring privacy and convenience.',
      modalities: ['Cognitive Behavioral Therapy (CBT)', 'Dialectical Behavior Therapy (DBT)', 'Acceptance and Commitment Therapy (ACT)', 'EMDR for Trauma']
    },
    image: '/src/assets/individual-therapy.jpg',
  },
  {
    slug: 'couples',
    title: 'Couples Therapy',
    description: 'Relationship counseling to strengthen communication and connection',
    content: {
      whatItHelps: [
        'Communication problems',
        'Relationship conflicts',
        'Trust and intimacy issues',
        'Pre-marital counseling',
        'Infidelity recovery',
        'Co-parenting challenges'
      ],
      whatToExpected: 'Both partners join secure video sessions to work on relationship dynamics, communication patterns, and building stronger connections together.',
      modalities: ['Gottman Method', 'Emotionally Focused Therapy (EFT)', 'Imago Relationship Therapy', 'Solution-Focused Brief Therapy']
    },
    image: '/src/assets/couple-therapy.jpg',
  },
  {
    slug: 'teens',
    title: 'Teen Therapy',
    description: 'Specialized support for adolescents navigating mental health challenges',
    content: {
      whatItHelps: [
        'Teen anxiety and depression',
        'School and social stress',
        'Identity and self-esteem issues',
        'Family relationship conflicts',
        'Behavioral challenges',
        'Academic performance concerns'
      ],
      whatToExpected: 'Teen-focused therapy sessions use age-appropriate approaches in a safe, confidential online environment. Parents may be included when appropriate.',
      modalities: ['Teen-focused CBT', 'DBT Skills Training', 'Family Systems Therapy', 'Mindfulness-based approaches']
    },
    image: '/src/assets/teen-therapy-session.jpg',
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {};
  }

  const canonicalUrl = getCanonicalUrl(`/services/${service.slug}`);
  
  return {
    title: `${service.title} | MentalSpace Therapy Services`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, online therapy Georgia, telehealth counseling`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | MentalSpace`,
      description: service.description,
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  const breadcrumbSchemaData = breadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaData) }}
      />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">What It Helps</h2>
                  <ul className="space-y-2">
                    {service.content.whatItHelps.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">What to Expect in Telehealth</h2>
                  <p className="text-muted-foreground">{service.content.whatToExpected}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-3">Treatment Modalities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.content.modalities.map((modality, index) => (
                      <div key={index} className="bg-muted/50 px-3 py-2 rounded-md text-sm">
                        {modality}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/get-started">Get Started Today</Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Most insurance plans accepted. Same-day appointments available.
                </p>
              </div>
            </div>

            <div className="relative h-96 md:h-full min-h-[400px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/insights/anxiety-basics" className="text-primary hover:underline">
                Understanding Anxiety: Basics and Treatment Options
              </Link>
              <Link href="/insights/cbt-for-panic" className="text-primary hover:underline">
                Cognitive Behavioral Therapy for Panic Disorders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}