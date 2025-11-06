import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { Search, Calendar, Tag, Eye, Clock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Newsletter {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  published_at: string;
  newsletter_analytics?: Array<{
    views: number;
    average_engagement_time: number;
  }>;
}

const NewsletterArchive = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [filteredNewsletters, setFilteredNewsletters] = useState<Newsletter[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  useEffect(() => {
    filterNewsletters();
  }, [searchQuery, selectedCategory, newsletters]);

  const fetchNewsletters = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletters')
        .select(`
          id,
          title,
          excerpt,
          content,
          category,
          published_at,
          newsletter_analytics (
            views,
            average_engagement_time
          )
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;

      setNewsletters(data || []);
      
      const uniqueCategories = Array.from(
        new Set((data || []).map(n => n.category).filter(Boolean))
      );
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterNewsletters = () => {
    let filtered = newsletters;

    if (searchQuery) {
      filtered = filtered.filter(n => 
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(n => n.category === selectedCategory);
    }

    setFilteredNewsletters(filtered);
  };

  const trackView = async (newsletterId: string) => {
    await supabase.from('newsletter_view_events').insert({
      newsletter_id: newsletterId,
      session_id: crypto.randomUUID(),
      engagement_time: 0
    });
  };

  return (
    <>
      <SEOHead
        title="Newsletter Archive | CHC Staff Updates"
        description="Browse our complete archive of staff newsletters, clinical updates, and team announcements from Connecting Health Care."
        canonicalUrl="https://connectinghealthca.com/newsletter-archive"
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-white to-blue-50">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Newsletter Archive
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of staff newsletters, clinical updates, and team announcements
            </p>
          </div>

          {/* Search and Filter */}
          <Card className="p-6 mb-8 bg-white/80 backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search newsletters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Tag className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Card>

          {/* Results Count */}
          <p className="text-gray-600 mb-6">
            Showing {filteredNewsletters.length} of {newsletters.length} newsletters
          </p>

          {/* Newsletter List */}
          {loading ? (
            <Card className="p-12 text-center">
              <p className="text-gray-500">Loading newsletters...</p>
            </Card>
          ) : filteredNewsletters.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-gray-500">No newsletters found matching your criteria</p>
            </Card>
          ) : (
            <div className="grid gap-6">
              {filteredNewsletters.map((newsletter) => (
                <Card 
                  key={newsletter.id} 
                  className="p-6 hover:shadow-xl transition-all cursor-pointer bg-white"
                  onClick={() => {
                    trackView(newsletter.id);
                    window.location.href = `/staff-newsletter?id=${newsletter.id}`;
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {newsletter.category}
                      </span>
                      <h2 className="text-2xl font-bold mb-2 hover:text-purple-600 transition-colors">
                        {newsletter.title}
                      </h2>
                      {newsletter.excerpt && (
                        <p className="text-gray-600 mb-4">{newsletter.excerpt}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(newsletter.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    {newsletter.newsletter_analytics?.[0] && (
                      <>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          {newsletter.newsletter_analytics[0].views} views
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {newsletter.newsletter_analytics[0].average_engagement_time}s avg. read
                        </div>
                      </>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NewsletterArchive;
