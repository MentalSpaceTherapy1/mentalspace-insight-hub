import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, Clock, User, ArrowRight, Heart } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import anxietyPersonImg from '@/assets/anxiety-person.jpg';
import depressionPersonImg from '@/assets/depression-person.jpg';
import adhdPersonImg from '@/assets/adhd-person.jpg';

const Insights = () => {
  const featuredArticles = [
    {
      title: 'Understanding Anxiety Disorders',
      description: 'Learn about different types of anxiety disorders, their symptoms, causes, and evidence-based treatment approaches.',
      image: anxietyPersonImg,
      link: '/insights/anxiety-basics',
      readTime: '8 min read',
      category: 'Anxiety',
      author: 'Dr. Sarah Johnson, LCSW'
    },
    {
      title: 'Depression: Recognition and Recovery',
      description: 'Comprehensive guide to recognizing depression symptoms and understanding the path to recovery through therapy.',
      image: depressionPersonImg,
      link: '/mental-health-library/depression',
      readTime: '10 min read',
      category: 'Depression',
      author: 'Dr. Michael Chen, PhD'
    },
    {
      title: 'ADHD in Adults: Beyond Childhood',
      description: 'Understanding how ADHD manifests in adulthood and strategies for managing symptoms and improving daily functioning.',
      image: adhdPersonImg,
      link: '/mental-health-library/adhd',
      readTime: '7 min read',
      category: 'ADHD',
      author: 'Dr. Lisa Rodriguez, PsyD'
    }
  ];

  const categories = [
    {
      icon: Brain,
      name: 'Mental Health Basics',
      count: 12,
      description: 'Foundational knowledge about mental health conditions and treatments'
    },
    {
      icon: Heart,
      name: 'Self-Care & Wellness',
      count: 8,
      description: 'Practical tips for maintaining mental wellness and building resilience'
    },
    {
      icon: User,
      name: 'Therapy Insights',
      count: 15,
      description: 'Expert perspectives on different therapy approaches and their benefits'
    },
    {
      icon: BookOpen,
      name: 'Research & Studies',
      count: 6,
      description: 'Latest research findings and evidence-based treatment insights'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mental Health Insights & Expert Articles | MentalSpace</title>
        <meta name="description" content="Explore expert insights on mental health, therapy, and wellness. Evidence-based articles by licensed professionals on anxiety, depression, ADHD, and more." />
        <meta name="keywords" content="mental health insights, therapy articles, psychology research, mental wellness tips, anxiety insights, depression resources, ADHD information" />
        <link rel="canonical" href="https://mentalspacetherapy.lovable.app/insights" />
        <meta property="og:title" content="Mental Health Insights & Expert Articles" />
        <meta property="og:description" content="Evidence-based mental health insights and articles by licensed professionals. Learn about therapy, wellness, and mental health conditions." />
        <meta property="og:url" content="https://mentalspacetherapy.lovable.app/insights" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Mental Health Insights",
            "description": "Expert mental health insights and articles by licensed professionals",
            "url": "https://mentalspacetherapy.lovable.app/insights",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": featuredArticles.map((article, index) => ({
                "@type": "Article",
                "position": index + 1,
                "headline": article.title,
                "description": article.description,
                "author": {
                  "@type": "Person",
                  "name": article.author
                },
                "url": `https://mentalspacetherapy.lovable.app${article.link}`
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                  Mental Health Insights
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Expert-backed insights, research, and practical guidance from licensed mental health professionals. 
                  Stay informed and empowered on your mental wellness journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/insights/anxiety-basics">Read Latest Article</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/mental-health-library">Browse Library</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="py-16">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Evidence-based insights from our team of licensed mental health professionals
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {featuredArticles.map((article, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <LazyImage 
                        src={article.image}
                        alt={`${article.title} - Mental health insight article`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">{article.author}</p>
                        <Button asChild variant="ghost" size="sm" className="group/btn">
                          <Link to={article.link}>
                            Read More 
                            <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-16 bg-muted/50">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Explore our comprehensive collection of mental health resources organized by topic
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow group cursor-pointer">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {category.count} articles
                      </span>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16">
            <div className="container px-4">
              <Card className="bg-gradient-to-r from-primary to-secondary text-white">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                  <p className="text-xl mb-8 opacity-90">
                    Get the latest mental health insights and expert tips delivered to your inbox monthly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="px-4 py-3 rounded-lg text-foreground flex-1"
                    />
                    <Button variant="secondary" size="lg">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm opacity-70 mt-4">
                    Join 10,000+ subscribers. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Insights;