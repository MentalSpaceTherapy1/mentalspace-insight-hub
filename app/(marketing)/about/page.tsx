import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/lib/seo/canonical';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getCanonicalUrl('/about');
  
  return {
    title: 'About MentalSpace | Licensed Online Therapy in Georgia',
    description: 'Learn about our mission to provide accessible, professional online therapy services with licensed mental health professionals throughout Georgia.',
    keywords: 'about MentalSpace, online therapy Georgia, licensed therapists, mental health professionals',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'About MentalSpace | Licensed Online Therapy',
      description: 'Learn about our mission to provide accessible, professional online therapy services with licensed mental health professionals.',
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          About MentalSpace
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At MentalSpace, we believe everyone deserves access to high-quality mental health care. 
              We're dedicated to providing convenient, professional online therapy services that break 
              down barriers to mental health treatment throughout Georgia.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Why Choose MentalSpace?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Licensed Professionals</h3>
                <p>All our therapists are licensed mental health professionals with specialized training in evidence-based treatments.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Convenient Access</h3>
                <p>Connect with your therapist from the comfort of your home through our secure telehealth platform.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Personalized Care</h3>
                <p>We match you with therapists who specialize in your specific concerns and treatment goals.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Insurance Accepted</h3>
                <p>We work with most major insurance plans to make therapy accessible and affordable.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground">
              We use evidence-based therapeutic approaches including Cognitive Behavioral Therapy (CBT), 
              Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), and EMDR. 
              Our therapists work collaboratively with you to develop personalized treatment plans that 
              address your unique needs and goals.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="mb-4">
              Take the first step toward better mental health. Our team is here to support you 
              on your journey to wellness.
            </p>
            <a 
              href="/get-started" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}