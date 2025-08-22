import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Calendar, TrendingUp, Users, FileText, Brain } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsData {
  totalEvents: number;
  formSubmissions: number;
  assessmentSessions: number;
  pageViews: number;
  dailyStats: Array<{ date: string; events: number; forms: number; assessments: number }>;
  formTypeDistribution: Array<{ name: string; value: number }>;
  assessmentTypeDistribution: Array<{ name: string; value: number }>;
}

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalEvents: 0,
    formSubmissions: 0,
    assessmentSessions: 0,
    pageViews: 0,
    dailyStats: [],
    formTypeDistribution: [],
    assessmentTypeDistribution: []
  });
  const [loading, setLoading] = useState(true);

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))'];

  const fetchAnalytics = async () => {
    try {
      // Fetch analytics events
      const { data: events } = await supabase
        .from('analytics_events')
        .select('*')
        .order('created_at', { ascending: false });

      // Fetch form submissions
      const { data: forms } = await supabase
        .from('form_submissions')
        .select('form_type, created_at');

      // Fetch assessment sessions
      const { data: assessments } = await supabase
        .from('assessment_sessions')
        .select('assessment_type, created_at');

      // Process the data
      const totalEvents = events?.length || 0;
      const formSubmissions = forms?.length || 0;
      const assessmentSessions = assessments?.length || 0;
      const pageViews = events?.filter(e => e.event_type === 'page_view')?.length || 0;

      // Generate daily stats for the last 7 days
      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString().split('T')[0];
      }).reverse();

      const dailyStats = last7Days.map(date => {
        const dayEvents = events?.filter(e => 
          e.created_at.startsWith(date)
        )?.length || 0;
        
        const dayForms = forms?.filter(f => 
          f.created_at.startsWith(date)
        )?.length || 0;
        
        const dayAssessments = assessments?.filter(a => 
          a.created_at.startsWith(date)
        )?.length || 0;

        return {
          date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          events: dayEvents,
          forms: dayForms,
          assessments: dayAssessments
        };
      });

      // Form type distribution
      const formTypeCounts = forms?.reduce((acc: Record<string, number>, form) => {
        const type = form.form_type || 'unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {}) || {};

      const formTypeDistribution = Object.entries(formTypeCounts).map(([name, value]) => ({
        name: name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value
      }));

      // Assessment type distribution
      const assessmentTypeCounts = assessments?.reduce((acc: Record<string, number>, assessment) => {
        const type = assessment.assessment_type || 'unknown';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {}) || {};

      const assessmentTypeDistribution = Object.entries(assessmentTypeCounts).map(([name, value]) => ({
        name: name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value
      }));

      setAnalytics({
        totalEvents,
        formSubmissions,
        assessmentSessions,
        pageViews,
        dailyStats,
        formTypeDistribution,
        assessmentTypeDistribution
      });

    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading) {
    return <div>Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.totalEvents}</div>
            <p className="text-xs text-muted-foreground">
              All tracked events
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Form Submissions</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.formSubmissions}</div>
            <p className="text-xs text-muted-foreground">
              Total form submissions
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assessments</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.assessmentSessions}</div>
            <p className="text-xs text-muted-foreground">
              Completed assessments
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analytics.pageViews}</div>
            <p className="text-xs text-muted-foreground">
              Total page views
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Activity Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Activity (Last 7 Days)</CardTitle>
          <CardDescription>
            Events, form submissions, and assessments by day
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={analytics.dailyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="events" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Events"
              />
              <Line 
                type="monotone" 
                dataKey="forms" 
                stroke="hsl(var(--secondary))" 
                strokeWidth={2}
                name="Forms"
              />
              <Line 
                type="monotone" 
                dataKey="assessments" 
                stroke="hsl(var(--accent))" 
                strokeWidth={2}
                name="Assessments"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Form Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Form Type Distribution</CardTitle>
            <CardDescription>
              Breakdown of form submissions by type
            </CardDescription>
          </CardHeader>
          <CardContent>
            {analytics.formTypeDistribution.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={analytics.formTypeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {analytics.formTypeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No form data available
              </div>
            )}
          </CardContent>
        </Card>

        {/* Assessment Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Assessment Type Distribution</CardTitle>
            <CardDescription>
              Breakdown of assessments by type
            </CardDescription>
          </CardHeader>
          <CardContent>
            {analytics.assessmentTypeDistribution.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analytics.assessmentTypeDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No assessment data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;