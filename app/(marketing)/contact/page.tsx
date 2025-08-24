import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/lib/seo/canonical';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const canonicalUrl = getCanonicalUrl('/contact');
  
  return {
    title: 'Contact MentalSpace | Get Started with Online Therapy',
    description: 'Contact our team to learn more about our online therapy services or to schedule your first appointment with a licensed therapist in Georgia.',
    keywords: 'contact MentalSpace, online therapy appointment, schedule therapy, mental health consultation',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'Contact MentalSpace | Get Started with Online Therapy',
      description: 'Contact our team to learn more about our online therapy services or to schedule your first appointment.',
      url: canonicalUrl,
      type: 'website',
    },
  };
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to start your therapy journey? We're here to help you find the right 
              therapist and answer any questions about our services.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">Call us at (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">hello@mentalspacetherapy.com</p>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageSquare className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Quick Start</h3>
                  <p className="text-muted-foreground">Complete our online form to get matched with a therapist</p>
                  <a 
                    href="/get-started" 
                    className="text-primary hover:underline text-sm"
                  >
                    Get Started Now →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="appointment">Schedule an Appointment</option>
                  <option value="insurance">Insurance Questions</option>
                  <option value="services">Questions About Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-red-50 border-l-4 border-red-400 p-6 rounded-md">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Phone className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Crisis Support Available 24/7
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  If you're experiencing a mental health emergency, please call or text{' '}
                  <a href="tel:988" className="font-bold underline">988</a> for the Suicide & Crisis Lifeline 
                  or dial <a href="tel:911" className="font-bold underline">911</a> for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}