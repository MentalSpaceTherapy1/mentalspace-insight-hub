import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Pin, Sparkles, Mail, ArrowLeft } from "lucide-react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { toast } from "sonner";

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
  const [resending, setResending] = useState(false);
  const { isAdmin } = useAdminAuth();
  
  // Check if viewing a specific newsletter
  const params = new URLSearchParams(window.location.search);
  const specificNewsletterId = params.get('newsletterId');

  useEffect(() => {
    const fetchNewsletters = async () => {
      let query = supabase
        .from('newsletters')
        .select('*')
        .eq('status', 'published');
      
      // If specific newsletter ID, fetch only that one
      if (specificNewsletterId) {
        query = query.eq('id', specificNewsletterId);
      } else {
        query = query
          .order('is_pinned', { ascending: false })
          .order('published_at', { ascending: false });
      }
      
      const { data, error } = await query;
      
      if (data && !error) {
        setNewsletters(data);
      }
      setLoading(false);
    };
    
    fetchNewsletters();
  }, [specificNewsletterId]);

  const handleResend = async (newsletterId: string) => {
    setResending(true);
    try {
      const { error } = await supabase.functions.invoke('send-newsletter-emails', {
        body: { newsletterId }
      });

      if (error) throw error;
      
      toast.success('Newsletter resent successfully to all subscribers!');
    } catch (error) {
      console.error('Error resending newsletter:', error);
      toast.error('Failed to resend newsletter. Please try again.');
    } finally {
      setResending(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Staff Newsletter | CHC Therapy Team Updates"
        description="Internal newsletter for CHC Therapy staff members"
        noindex={true}
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            {specificNewsletterId ? (
              <div className="mb-6">
                <Button 
                  onClick={() => window.location.href = '/staff-newsletter'}
                  variant="outline"
                  className="bg-white/80 backdrop-blur hover:bg-purple-50"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to All Newsletters
                </Button>
              </div>
            ) : (
              <div className="mb-8 text-center">
                <Button 
                  onClick={() => window.location.href = '/newsletter-archive'}
                  variant="outline"
                  className="bg-white/80 backdrop-blur hover:bg-purple-50"
                >
                  📚 Browse Newsletter Archive
                </Button>
              </div>
            )}

            {/* Hero Header - Only show on list view */}
            {!specificNewsletterId && (
              <div className="text-center mb-12 animate-fade-in">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-xl mb-6">
                  <Sparkles className="h-6 w-6 animate-pulse" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Staff Newsletter
                  </h1>
                  <Sparkles className="h-6 w-6 animate-pulse" />
                </div>
                <p className="text-2xl text-gray-700 font-medium">
                  Updates, insights, and resources for the CHC Therapy team 🎯
                </p>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <Card className="p-12 text-center bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-300">
                <div className="flex items-center justify-center gap-3">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <p className="text-xl text-blue-900 font-semibold">Loading newsletters...</p>
                </div>
              </Card>
            )}

            {/* No Newsletters */}
            {!loading && newsletters.length === 0 && (
              <Card className="p-12 text-center bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300 shadow-xl">
                <span className="text-6xl mb-4 block">📬</span>
                <p className="text-2xl text-gray-700 font-semibold">
                  No newsletters published yet. Check back soon!
                </p>
              </Card>
            )}

            {/* Newsletters List */}
            <div className="space-y-12">
              {newsletters.map((newsletter, index) => (
                <Card 
                  key={newsletter.id}
                  className="overflow-hidden shadow-xl border-2 animate-fade-in bg-white"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    borderColor: newsletter.is_pinned ? '#8b5cf6' : '#e5e7eb'
                  }}
                >
                  {/* Header Badge Bar */}
                  {newsletter.is_pinned && (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 flex items-center justify-center gap-2 text-white font-semibold">
                      <Pin className="h-5 w-5" />
                      <span>📌 PINNED - Must Read!</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    {/* Title and Meta */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                        <div className="flex items-center gap-3 flex-wrap">
                          {newsletter.category && (
                            <Badge 
                              variant="secondary" 
                              className="text-sm px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            >
                              {newsletter.category}
                            </Badge>
                          )}
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">
                              {new Date(newsletter.published_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>
                        
                        {/* Admin Resend Button */}
                        {isAdmin && (
                          <Button
                            onClick={() => handleResend(newsletter.id)}
                            disabled={resending}
                            size="sm"
                            variant="outline"
                            className="bg-green-50 hover:bg-green-100 border-green-300"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            {resending ? 'Resending...' : 'Resend Newsletter'}
                          </Button>
                        )}
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {newsletter.title}
                      </h2>

                      {newsletter.excerpt && (
                        <p className="text-lg text-gray-700 italic leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          {newsletter.excerpt}
                        </p>
                      )}
                    </div>

                    {/* Newsletter Content */}
                    <div 
                      className="newsletter-content prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: newsletter.content }}
                    />
                  </div>
                </Card>
              ))}
            </div>

            {/* Footer Note */}
            {!loading && newsletters.length > 0 && (
              <Card className="mt-12 p-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center shadow-xl">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-3xl">🔒</span>
                  <p className="text-xl font-semibold">Staff Only</p>
                </div>
                <p className="text-gray-300">
                  This page is for CHC Therapy staff only. Please do not share this link publicly.
                </p>
              </Card>
            )}
          </div>
        </main>

        <Footer />
      </div>

      <style>{`
        .newsletter-content h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #7c3aed, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .newsletter-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #4b5563;
        }
        
        .newsletter-content p {
          font-size: 1.125rem;
          line-height: 1.75;
          color: #374151;
          margin-bottom: 1rem;
        }
        
        .newsletter-content ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        
        .newsletter-content li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: #4b5563;
        }
        
        .newsletter-content li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }
        
        .newsletter-content strong {
          color: #1f2937;
          font-weight: 700;
        }
        
        .newsletter-content hr {
          margin: 3rem 0;
          border: 0;
          border-top: 2px solid #e5e7eb;
        }
        
        .newsletter-content img {
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </>
  );
};

export default StaffNewsletter;
