import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Cell,
  FunnelChart,
  Funnel,
  LabelList
} from 'recharts';
import { 
  TrendingUp, 
  MousePointerClick, 
  FormInput, 
  CheckCircle2, 
  Target,
  Users,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ConversionMetrics {
  totalPageViews: number;
  totalFormStarts: number;
  totalFormCompletions: number;
  totalAssessmentStarts: number;
  totalAssessmentCompletions: number;
  formConversionRate: number;
  assessmentConversionRate: number;
  formCompletionRate: number;
  assessmentCompletionRate: number;
}

interface UserJourneyStep {
  name: string;
  value: number;
  fill?: string;
}

interface FormFunnelData {
  formType: string;
  starts: number;
  completions: number;
  completionRate: number;
}

interface TopPages {
  page: string;
  views: number;
  uniqueVisitors: number;
}

const ConversionAnalyticsDashboard = () => {
  const [metrics, setMetrics] = useState<ConversionMetrics>({
    totalPageViews: 0,
    totalFormStarts: 0,
    totalFormCompletions: 0,
    totalAssessmentStarts: 0,
    totalAssessmentCompletions: 0,
    formConversionRate: 0,
    assessmentConversionRate: 0,
    formCompletionRate: 0,
    assessmentCompletionRate: 0,
  });
  const [userJourney, setUserJourney] = useState<UserJourneyStep[]>([]);
  const [formFunnels, setFormFunnels] = useState<FormFunnelData[]>([]);
  const [topPages, setTopPages] = useState<TopPages[]>([]);
  const [buttonClicks, setButtonClicks] = useState<Array<{ button: string; clicks: number }>>([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7'); // days

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

  const fetchAnalytics = async () => {
    try {
      const daysAgo = new Date();
      daysAgo.setDate(daysAgo.getDate() - parseInt(dateRange));

      // Fetch all analytics events within date range
      const { data: events } = await supabase
        .from('analytics_events')
        .select('*')
        .gte('created_at', daysAgo.toISOString())
        .order('created_at', { ascending: false });

      // Fetch form submissions within date range
      const { data: formSubmissions } = await supabase
        .from('form_submissions')
        .select('form_type, created_at')
        .gte('created_at', daysAgo.toISOString());

      // Fetch assessment sessions within date range
      const { data: assessmentSessions } = await supabase
        .from('assessment_sessions')
        .select('assessment_type, session_id, created_at')
        .gte('created_at', daysAgo.toISOString());

      // Calculate metrics
      const pageViews = events?.filter(e => e.event_type === 'page_view') || [];
      const formStarts = events?.filter(e => e.event_type === 'form_start') || [];
      const assessmentStarts = events?.filter(e => e.event_type === 'assessment_start') || [];
      const clicks = events?.filter(e => e.event_type === 'button_click') || [];

      const totalPageViews = pageViews.length;
      const totalFormStarts = formStarts.length;
      const totalFormCompletions = formSubmissions?.length || 0;
      const totalAssessmentStarts = assessmentStarts.length;
      const totalAssessmentCompletions = assessmentSessions?.length || 0;

      const formConversionRate = totalPageViews > 0 ? (totalFormCompletions / totalPageViews) * 100 : 0;
      const assessmentConversionRate = totalPageViews > 0 ? (totalAssessmentCompletions / totalPageViews) * 100 : 0;
      const formCompletionRate = totalFormStarts > 0 ? (totalFormCompletions / totalFormStarts) * 100 : 0;
      const assessmentCompletionRate = totalAssessmentStarts > 0 ? (totalAssessmentCompletions / totalAssessmentStarts) * 100 : 0;

      setMetrics({
        totalPageViews,
        totalFormStarts,
        totalFormCompletions,
        totalAssessmentStarts,
        totalAssessmentCompletions,
        formConversionRate,
        assessmentConversionRate,
        formCompletionRate,
        assessmentCompletionRate,
      });

      // User Journey Funnel
      const journeySteps: UserJourneyStep[] = [
        { name: 'Page Views', value: totalPageViews, fill: COLORS[0] },
        { name: 'Form Starts', value: totalFormStarts, fill: COLORS[1] },
        { name: 'Form Completions', value: totalFormCompletions, fill: COLORS[2] },
      ];
      setUserJourney(journeySteps);

      // Form-specific funnels
      const formTypes = new Set([
        ...formStarts.map((e: any) => e.event_data?.form_type).filter(Boolean),
        ...formSubmissions?.map((f: any) => f.form_type) || []
      ]);

      const funnelData: FormFunnelData[] = Array.from(formTypes).map(formType => {
        const starts = formStarts.filter((e: any) => e.event_data?.form_type === formType).length;
        const completions = formSubmissions?.filter((f: any) => f.form_type === formType).length || 0;
        const completionRate = starts > 0 ? (completions / starts) * 100 : 0;

        return {
          formType: String(formType).replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          starts,
          completions,
          completionRate,
        };
      }).filter(f => f.starts > 0);

      setFormFunnels(funnelData);

      // Top Pages
      const pageCounts = pageViews.reduce((acc: Record<string, { views: number; sessions: Set<string> }>, event: any) => {
        const page = event.event_data?.page || event.page_url || 'Unknown';
        if (!acc[page]) {
          acc[page] = { views: 0, sessions: new Set() };
        }
        acc[page].views++;
        if (event.session_id) {
          acc[page].sessions.add(event.session_id);
        }
        return acc;
      }, {});

      const topPagesData = Object.entries(pageCounts)
        .map(([page, data]) => ({
          page: page.replace(/^\//, '') || 'Home',
          views: data.views,
          uniqueVisitors: data.sessions.size,
        }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 10);

      setTopPages(topPagesData);

      // Button Clicks
      const buttonCounts = clicks.reduce((acc: Record<string, number>, event: any) => {
        const button = event.event_data?.button || 'Unknown';
        acc[button] = (acc[button] || 0) + 1;
        return acc;
      }, {});

      const buttonClicksData = Object.entries(buttonCounts)
        .map(([button, clicks]) => ({ button, clicks }))
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 10);

      setButtonClicks(buttonClicksData);

    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange]);

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Date Range Selector */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium">Date Range:</span>
        </div>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="14">Last 14 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Conversion Rate Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalPageViews}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Total page views
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-chart-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Form Completion Rate</CardTitle>
            <FormInput className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.formCompletionRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {metrics.totalFormCompletions} / {metrics.totalFormStarts} forms
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-chart-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Form Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.formConversionRate.toFixed(2)}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Views to form completions
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-chart-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assessment Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.assessmentCompletionRate.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {metrics.totalAssessmentCompletions} assessments completed
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="journey" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="journey">User Journey</TabsTrigger>
          <TabsTrigger value="forms">Form Funnels</TabsTrigger>
          <TabsTrigger value="pages">Top Pages</TabsTrigger>
          <TabsTrigger value="clicks">Button Clicks</TabsTrigger>
        </TabsList>

        <TabsContent value="journey" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Journey Funnel</CardTitle>
              <CardDescription>
                Track how users move through your site from viewing to conversion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userJourney.map((step, index) => {
                  const prevStep = index > 0 ? userJourney[index - 1] : null;
                  const dropoffRate = prevStep ? ((prevStep.value - step.value) / prevStep.value * 100) : 0;
                  const progressRate = userJourney[0].value > 0 ? (step.value / userJourney[0].value * 100) : 0;

                  return (
                    <div key={step.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: step.fill }}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{step.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {step.value.toLocaleString()} users ({progressRate.toFixed(1)}%)
                            </div>
                          </div>
                        </div>
                        {prevStep && (
                          <div className="text-sm">
                            <span className="text-destructive font-medium">-{dropoffRate.toFixed(1)}%</span>
                            <span className="text-muted-foreground ml-1">drop-off</span>
                          </div>
                        )}
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div 
                          className="h-3 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${progressRate}%`,
                            backgroundColor: step.fill 
                          }}
                        />
                      </div>
                      {index < userJourney.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto my-2" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Form Completion Rates by Type</CardTitle>
              <CardDescription>
                Compare completion rates across different form types
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formFunnels.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={formFunnels} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="formType" type="category" width={150} />
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-background border rounded-lg p-3 shadow-lg">
                              <p className="font-medium mb-2">{data.formType}</p>
                              <p className="text-sm">Starts: <span className="font-bold">{data.starts}</span></p>
                              <p className="text-sm">Completions: <span className="font-bold">{data.completions}</span></p>
                              <p className="text-sm">Rate: <span className="font-bold text-primary">{data.completionRate.toFixed(1)}%</span></p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="completionRate" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  No form completion data available
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Pages by Traffic</CardTitle>
              <CardDescription>
                Most visited pages and unique visitor counts
              </CardDescription>
            </CardHeader>
            <CardContent>
              {topPages.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={topPages}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="page" angle={-45} textAnchor="end" height={120} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="hsl(var(--primary))" name="Total Views" />
                    <Bar dataKey="uniqueVisitors" fill="hsl(var(--chart-2))" name="Unique Visitors" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  No page view data available
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clicks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Button Clicks</CardTitle>
              <CardDescription>
                Most clicked buttons and call-to-action elements
              </CardDescription>
            </CardHeader>
            <CardContent>
              {buttonClicks.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={buttonClicks} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="button" type="category" width={150} />
                    <Tooltip />
                    <Bar dataKey="clicks" fill="hsl(var(--chart-3))">
                      {buttonClicks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  No button click data available
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConversionAnalyticsDashboard;
