import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getCanonicalUrl } from '@/lib/seo/canonical';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getCanonicalUrl('/services');
  
  return {
    title: 'Therapy Services | Online Mental Health Treatment in Georgia',
    description: 'Comprehensive online therapy services including individual therapy, couples counseling, teen therapy, and life coaching. Licensed therapists in Georgia.',
    keywords: 'therapy services Georgia, individual therapy, couples counseling, teen therapy, online mental health treatment',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'Therapy Services | Online Mental Health Treatment in Georgia',
      description: 'Comprehensive online therapy services including individual therapy, couples counseling, teen therapy, and life coaching.',
      url: canonicalUrl,
      type: 'website',
    },
  };
}

const services = [
  {
    slug: 'adults',
    title: 'Individual Therapy for Adults',
    description: 'Evidence-based therapy for anxiety, depression, trauma, and life transitions',
    image: '/src/assets/individual-therapy.jpg',
  },
  {
    slug: 'couples',
    title: 'Couples Therapy',
    description: 'Relationship counseling to strengthen communication and connection',
    image: '/src/assets/couple-therapy.jpg',
  },
  {
    slug: 'teens',
    title: 'Teen Therapy',
    description: 'Specialized support for adolescents navigating mental health challenges',
    image: '/src/assets/teen-therapy-session.jpg',
  },
];

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Professional Therapy Services
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Comprehensive online mental health treatment with licensed therapists in Georgia
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}