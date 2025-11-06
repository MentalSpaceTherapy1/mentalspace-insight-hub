import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Eye, Clock, TrendingUp, Mail, CheckCircle, XCircle } from "lucide-react";

interface AnalyticsData {
  newsletter_id: string;
  title: string;
  views: number;
  unique_views: number;
  average_engagement_time: number;
  published_at: string;
  email_stats?: {
    sent: number;
    opened: number;
    failed: number;
  };
}

const NewsletterAnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [popularTopics, setPopularTopics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      // Fetch newsletter analytics
      const { data: newsletterData, error: newsletterError } = await supabase
        .from('newsletters')
        .select(`
          id,
          title,
          category,
          published_at,
          newsletter_analytics (
            views,
            unique_views,
            average_engagement_time
          )
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(10);

      if (newsletterError) throw newsletterError;

      // Fetch email stats for each newsletter
      const analyticsWithEmails = await Promise.all(
        (newsletterData || []).map(async (newsletter: any) => {
          const { data: emailStats } = await supabase
            .from('newsletter_email_logs')
            .select('status')
            .eq('newsletter_id', newsletter.id);

          const sent = emailStats?.filter(e => e.status === 'sent' || e.status === 'opened').length || 0;
          const opened = emailStats?.filter(e => e.status === 'opened').length || 0;
          const failed = emailStats?.filter(e => e.status === 'failed').length || 0;

          return {
            newsletter_id: newsletter.id,
            title: newsletter.title,
            views: newsletter.newsletter_analytics?.[0]?.views || 0,
            unique_views: newsletter.newsletter_analytics?.[0]?.unique_views || 0,
            average_engagement_time: newsletter.newsletter_analytics?.[0]?.average_engagement_time || 0,
            published_at: newsletter.published_at,
            email_stats: { sent, opened, failed }
          };
        })
      );

      setAnalytics(analyticsWithEmails);

      // Fetch popular topics using the database function
      const { data: topicsData, error: topicsError } = await supabase
        .rpc('get_popular_newsletter_topics', { limit_count: 5 });

      if (!topicsError && topicsData) {
        setPopularTopics(topicsData);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalViews = analytics.reduce((sum, item) => sum + item.views, 0);
  const avgEngagementTime = analytics.length > 0
    ? Math.round(analytics.reduce((sum, item) => sum + item.average_engagement_time, 0) / analytics.length)
    : 0;
  const totalEmailsSent = analytics.reduce((sum, item) => sum + (item.email_stats?.sent || 0), 0);
  const totalEmailsOpened = analytics.reduce((sum, item) => sum + (item.email_stats?.opened || 0), 0);
  const openRate = totalEmailsSent > 0 ? ((totalEmailsOpened / totalEmailsSent) * 100).toFixed(1) : 0;

  const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];

  if (loading) {
    return (
      <Card className="p-6">
        <p className="text-center text-gray-500">Loading analytics...</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Total Views</p>
              <p className="text-3xl font-bold text-blue-900">{totalViews}</p>
            </div>
            <Eye className="h-10 w-10 text-blue-600" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-700">Avg. Engagement</p>
              <p className="text-3xl font-bold text-purple-900">{avgEngagementTime}s</p>
            </div>
            <Clock className="h-10 w-10 text-purple-600" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Emails Sent</p>
              <p className="text-3xl font-bold text-green-900">{totalEmailsSent}</p>
            </div>
            <Mail className="h-10 w-10 text-green-600" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-700">Open Rate</p>
              <p className="text-3xl font-bold text-orange-900">{openRate}%</p>
            </div>
            <TrendingUp className="h-10 w-10 text-orange-600" />
          </div>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Newsletter Views Chart */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-600" />
            Newsletter Views
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics.slice(0, 5)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="title" 
                angle={-45}
                textAnchor="end"
                height={100}
                interval={0}
                tick={{ fontSize: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#667eea" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Popular Topics Chart */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            Popular Topics
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={popularTopics}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ topic, view_count }) => `${topic}: ${view_count}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="view_count"
              >
                {popularTopics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Detailed Newsletter Performance */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">Newsletter Performance Details</h3>
        <div className="space-y-3">
          {analytics.map((item) => (
            <div key={item.newsletter_id} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg flex-1">{item.title}</h4>
                <span className="text-sm text-gray-500">
                  {new Date(item.published_at).toLocaleDateString()}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Views</p>
                  <p className="font-bold text-blue-600">{item.views}</p>
                </div>
                <div>
                  <p className="text-gray-600">Unique Views</p>
                  <p className="font-bold text-purple-600">{item.unique_views}</p>
                </div>
                <div>
                  <p className="text-gray-600">Avg. Time</p>
                  <p className="font-bold text-green-600">{item.average_engagement_time}s</p>
                </div>
                <div>
                  <p className="text-gray-600 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> Sent
                  </p>
                  <p className="font-bold text-orange-600">{item.email_stats?.sent || 0}</p>
                </div>
                <div>
                  <p className="text-gray-600 flex items-center gap-1">
                    <Mail className="h-3 w-3" /> Opened
                  </p>
                  <p className="font-bold text-teal-600">{item.email_stats?.opened || 0}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default NewsletterAnalyticsDashboard;
