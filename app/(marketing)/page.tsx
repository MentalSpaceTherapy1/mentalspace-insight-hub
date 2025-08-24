import type { Metadata } from 'next';
import { Hero } from '@/src/components/Hero';
import { Services } from '@/src/components/Services';
import { HowItWorks } from '@/src/components/HowItWorks';
import { Comparison } from '@/src/components/Comparison';
import { getCanonicalUrl } from '@/lib/seo/canonical';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getCanonicalUrl('/');
  
  return {
    title: 'Online Therapy in Georgia | Licensed Mental Health Services | MentalSpace',
    description: 'Professional online therapy services in Georgia with licensed therapists. Anxiety, depression, couples therapy, teen counseling. Secure telehealth platform. Get started today.',
    keywords: 'online therapy Georgia, telehealth counseling, licensed therapists, mental health services, anxiety therapy, depression counseling, couples therapy',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'Online Therapy in Georgia | Licensed Mental Health Services',
      description: 'Professional online therapy services in Georgia with licensed therapists. Anxiety, depression, couples therapy, teen counseling.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: '/therapy-hero-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Online therapy services in Georgia',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Online Therapy in Georgia | Licensed Mental Health Services',
      description: 'Professional online therapy services in Georgia with licensed therapists. Get started today.',
      images: ['/therapy-hero-og.jpg'],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Comparison />
    </>
  );
}