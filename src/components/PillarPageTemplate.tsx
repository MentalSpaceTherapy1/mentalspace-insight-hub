import { useEffect, useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronRight, BookOpen, ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { generateArticleSchema } from '@/utils/schemaGenerators';

interface RelatedItem {
  title: string;
  url: string;
}

interface PillarPageTemplateProps {
  title: string;
  subtitle?: string;
  description: string;
  canonicalUrl: string;
  publishedDate: string;
  updatedDate?: string;
  readTime?: number;
  children: ReactNode;
  midCta?: ReactNode;
  endCta?: ReactNode;
  relatedArticles?: RelatedItem[];
  relatedServices?: RelatedItem[];
  ogImage?: string;
  keywords?: string;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

const PillarPageTemplate = ({
  title,
  subtitle,
  description,
  canonicalUrl,
  publishedDate,
  updatedDate,
  readTime,
  children,
  midCta,
  endCta,
  relatedArticles = [],
  relatedServices = [],
  ogImage,
  keywords
}: PillarPageTemplateProps) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Auto-generate TOC from H2 headings
  useEffect(() => {
    const headings = document.querySelectorAll('.pillar-content h2');
    const items: TOCItem[] = [];
    
    headings.forEach((heading, index) => {
      const id = heading.id || `section-${index}`;
      if (!heading.id) {
        heading.id = id;
      }
      items.push({
        id,
        text: heading.textContent || '',
        level: 2
      });
    });
    
    setTocItems(items);
  }, [children]);

  // Track active section for TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      const headings = document.querySelectorAll('.pillar-content h2');
      let current = '';
      
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150) {
          current = heading.id;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const articleSchema = generateArticleSchema(
    title,
    description,
    canonicalUrl,
    publishedDate,
    updatedDate || publishedDate,
    ogImage
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const defaultEndCta = (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        Take the first step toward better mental health. Schedule your free consultation with one of our licensed therapists today.
      </p>
      <Link to="/therapist-matching">
        <Button variant="hero" size="lg">
          Schedule Free Consultation
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title={`${title} | Coping and Healing Counseling`}
        description={description}
        canonicalUrl={canonicalUrl}
        ogTitle={title}
        ogDescription={description}
        ogImage={ogImage}
        ogType="article"
        keywords={keywords}
        structuredData={articleSchema}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16 lg:py-20">
          <div className="container px-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/guides" className="hover:text-primary transition-colors">Guides</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{title}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-xl text-muted-foreground mb-6">{subtitle}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Coping and Healing Counseling Clinical Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Published {formatDate(publishedDate)}</span>
              </div>
              {updatedDate && updatedDate !== publishedDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {formatDate(updatedDate)}</span>
                </div>
              )}
              {readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{readTime} min read</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 lg:py-16">
          <div className="container px-6">
            <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
              
              {/* Table of Contents - Sidebar on Desktop */}
              {tocItems.length > 0 && (
                <aside className="lg:w-64 lg:flex-shrink-0">
                  <div className="lg:sticky lg:top-24">
                    <div className="bg-card border border-border/50 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h2 className="font-semibold text-foreground">In This Guide</h2>
                      </div>
                      <nav className="space-y-2">
                        {tocItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-colors ${
                              activeSection === item.id
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }`}
                          >
                            {item.text}
                          </button>
                        ))}
                      </nav>
                    </div>

                    {/* Related Resources - Desktop Sidebar */}
                    {(relatedArticles.length > 0 || relatedServices.length > 0) && (
                      <div className="bg-card border border-border/50 rounded-xl p-6 mt-6 hidden lg:block">
                        <h3 className="font-semibold text-foreground mb-4">Related Resources</h3>
                        
                        {relatedServices.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Services</h4>
                            <ul className="space-y-2">
                              {relatedServices.map((item, index) => (
                                <li key={index}>
                                  <Link
                                    to={item.url}
                                    className="text-sm text-primary hover:underline flex items-center gap-1"
                                  >
                                    <ChevronRight className="h-3 w-3" />
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {relatedArticles.length > 0 && (
                          <div>
                            <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Articles</h4>
                            <ul className="space-y-2">
                              {relatedArticles.map((item, index) => (
                                <li key={index}>
                                  <Link
                                    to={item.url}
                                    className="text-sm text-primary hover:underline flex items-center gap-1"
                                  >
                                    <ChevronRight className="h-3 w-3" />
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </aside>
              )}

              {/* Main Content */}
              <article className="flex-1 max-w-3xl">
                <div className="pillar-content prose prose-lg dark:prose-invert max-w-none">
                  {children}
                </div>

                {/* Mid-Content CTA */}
                {midCta && (
                  <div className="my-12">
                    {midCta}
                  </div>
                )}

                {/* End CTA */}
                <div className="mt-16">
                  {endCta || defaultEndCta}
                </div>

                {/* Related Resources - Mobile */}
                {(relatedArticles.length > 0 || relatedServices.length > 0) && (
                  <div className="mt-12 lg:hidden">
                    <h3 className="text-xl font-semibold text-foreground mb-6">Related Resources</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {relatedServices.map((item, index) => (
                        <Link
                          key={`service-${index}`}
                          to={item.url}
                          className="block p-4 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-colors"
                        >
                          <span className="text-xs uppercase tracking-wide text-muted-foreground">Service</span>
                          <p className="font-medium text-foreground mt-1">{item.title}</p>
                        </Link>
                      ))}
                      {relatedArticles.map((item, index) => (
                        <Link
                          key={`article-${index}`}
                          to={item.url}
                          className="block p-4 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-colors"
                        >
                          <span className="text-xs uppercase tracking-wide text-muted-foreground">Article</span>
                          <p className="font-medium text-foreground mt-1">{item.title}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Help Section */}
                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-muted-foreground text-center">
                    Have questions about this guide?{' '}
                    <Link to="/contact-us" className="text-primary hover:underline">
                      Contact our team
                    </Link>{' '}
                    or call us at{' '}
                    <a href="tel:404-832-0102" className="text-primary hover:underline">
                      (404) 832-0102
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default PillarPageTemplate;
