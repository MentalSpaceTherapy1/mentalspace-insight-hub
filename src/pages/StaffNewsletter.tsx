import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Pin } from "lucide-react";

interface Newsletter {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  published_at: string;
  category: string | null;
  is_pinned: boolean;
}

const StaffNewsletter = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsletters = async () => {
      const { data, error } = await supabase
        .from('newsletters')
        .select('*')
        .eq('status', 'published')
        .order('is_pinned', { ascending: false })
        .order('published_at', { ascending: false });
      
      if (data && !error) {
        setNewsletters(data);
      }
      setLoading(false);
    };
    
    fetchNewsletters();
  }, []);

  return (
    <>
      <SEOHead
        title="Staff Newsletter | CHC Therapy Team Updates"
        description="Internal newsletter for CHC Therapy staff members"
        noindex={true}
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Staff Newsletter
              </h1>
              <p className="text-lg text-muted-foreground">
                Updates, insights, and resources for the CHC Therapy team
              </p>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading newsletters...</p>
              </div>
            )}

            {/* No Newsletters */}
            {!loading && newsletters.length === 0 && (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  No newsletters published yet. Check back soon!
                </p>
              </Card>
            )}

            {/* Newsletters List */}
            <div className="space-y-8">
              {newsletters.map((newsletter) => (
                <Card key={newsletter.id} className="p-8 hover:shadow-lg transition-shadow">
                  {/* Header with Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        {newsletter.is_pinned && (
                          <Badge variant="default" className="gap-1">
                            <Pin className="h-3 w-3" />
                            Pinned
                          </Badge>
                        )}
                        {newsletter.category && (
                          <Badge variant="secondary">
                            {newsletter.category}
                          </Badge>
                        )}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {newsletter.title}
                      </h2>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(newsletter.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Excerpt */}
                  {newsletter.excerpt && (
                    <p className="text-lg text-muted-foreground mb-6 italic">
                      {newsletter.excerpt}
                    </p>
                  )}

                  <Separator className="my-6" />

                  {/* Content */}
                  <div 
                    className="prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ 
                      __html: newsletter.content.replace(/\n/g, '<br />') 
                    }}
                  />
                </Card>
              ))}
            </div>

            {/* Footer Note */}
            {!loading && newsletters.length > 0 && (
              <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This page is for CHC Therapy staff only. 
                  Please do not share this link publicly.
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default StaffNewsletter;
