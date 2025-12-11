import { Link } from 'react-router-dom';
import { BookOpen, Heart, Brain, Users, Shield, DollarSign, Laptop, Search, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { generateWebPageSchema } from '@/utils/schemaGenerators';

const guides = [
  {
    title: "Complete Guide to Starting Therapy",
    description: "Everything you need to know about beginning your therapy journey, from finding the right therapist to preparing for your first session.",
    url: "/guides/starting-therapy",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Understanding Anxiety: Symptoms, Types & Treatment",
    description: "Learn about anxiety disorders, recognize the symptoms, and discover effective treatment options including therapy.",
    url: "/guides/anxiety",
    icon: Brain,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Understanding Depression: Symptoms & Treatment",
    description: "A comprehensive guide to depression, including signs, causes, and how therapy can help you recover.",
    url: "/guides/depression",
    icon: Heart,
    color: "from-rose-500 to-rose-600"
  },
  {
    title: "Couples Therapy: Everything You Need to Know",
    description: "Learn when to seek couples counseling, what to expect, and how therapy can strengthen your relationship.",
    url: "/guides/couples-counseling",
    icon: Users,
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Trauma & PTSD: Understanding and Healing",
    description: "A guide to understanding trauma, recognizing PTSD symptoms, and finding effective treatment including EMDR.",
    url: "/guides/trauma-ptsd",
    icon: Shield,
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "How to Pay for Therapy: Insurance & Cost Guide",
    description: "Understand therapy costs, insurance coverage, Medicaid options, and how to make mental health care affordable.",
    url: "/guides/therapy-cost",
    icon: DollarSign,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Online Therapy: Is Teletherapy Right for You?",
    description: "Learn how online therapy works, its effectiveness, and whether virtual counseling is a good fit for your needs.",
    url: "/guides/online-therapy",
    icon: Laptop,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "How to Find the Right Therapist",
    description: "A step-by-step guide to finding a therapist who's the right fit for you, including questions to ask.",
    url: "/guides/finding-therapist",
    icon: Search,
    color: "from-indigo-500 to-indigo-600"
  }
];

const GuidesIndex = () => {
  const canonicalUrl = "https://chctherapy.com/guides";
  
  const webPageSchema = generateWebPageSchema(
    "Mental Health Guides & Resources",
    "Free comprehensive guides on therapy, anxiety, depression, couples counseling, trauma, and more. Expert resources from Georgia's trusted mental health provider.",
    canonicalUrl,
    "Mental Health Resources"
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Mental Health Guides & Resources | Coping and Healing Counseling"
        description="Free comprehensive guides on therapy, anxiety, depression, couples counseling, trauma, and more. Expert resources from Georgia's trusted mental health provider."
        canonicalUrl={canonicalUrl}
        ogTitle="Mental Health Guides & Resources"
        ogDescription="Free comprehensive guides on therapy, anxiety, depression, couples counseling, trauma, and more."
        keywords="therapy guides, mental health resources, anxiety guide, depression guide, couples therapy guide, PTSD guide, online therapy guide, how to find a therapist"
        structuredData={webPageSchema}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-primary/5 to-background py-16 lg:py-24">
          <div className="container px-6 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Expert Mental Health Resources
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Mental Health Guides & Resources
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides to help you understand mental health, therapy options, and how to get started on your wellness journey.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-16 lg:py-24">
          <div className="container px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {guides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <Link
                    key={index}
                    to={guide.url}
                    className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${guide.color} text-white mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {guide.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium">
                      Read Guide
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container px-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Therapy Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our licensed therapists are here to help. Schedule a free consultation to find the right therapist for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/therapist-matching"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
              >
                Schedule Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center px-8 py-4 bg-background border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuidesIndex;
