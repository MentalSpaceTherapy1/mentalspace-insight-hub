import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Shield, 
  AlertTriangle, 
  Ban, 
  Clock, 
  TrendingUp, 
  Activity,
  Globe,
  XCircle,
  RefreshCw
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface SpamStats {
  total_submissions_24h: number;
  blocked_honeypot_24h: number;
  blocked_timing_24h: number;
  blocked_rate_limit_24h: number;
  suspicious_ips: number;
  top_spam_ips: Array<{
    ip_address: string;
    attempt_count: number;
    block_reasons: string[];
  }>;
}

interface BlockedAttempt {
  id: string;
  timestamp: string;
  event_type: string;
  ip_address: string;
  user_agent: string;
  block_reason: string;
  form_type: string;
}

interface SubmissionPattern {
  hour_bucket: string;
  submission_count: number;
  blocked_count: number;
  unique_ips: number;
}

const SpamMonitoring = () => {
  const [stats, setStats] = useState<SpamStats | null>(null);
  const [blockedAttempts, setBlockedAttempts] = useState<BlockedAttempt[]>([]);
  const [patterns, setPatterns] = useState<SubmissionPattern[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchSpamData = async () => {
    try {
      // Fetch spam statistics
      const { data: statsData, error: statsError } = await supabase
        .rpc('get_spam_statistics' as any);

      if (statsError) throw statsError;
      setStats((statsData as any)?.[0]);

      // Fetch blocked attempts
      const { data: attemptsData, error: attemptsError } = await supabase
        .rpc('get_recent_blocked_attempts' as any, { limit_count: 50 });

      if (attemptsError) throw attemptsError;
      setBlockedAttempts((attemptsData as any) || []);

      // Fetch submission patterns
      const { data: patternsData, error: patternsError } = await supabase
        .rpc('get_submission_patterns' as any, { hours_back: 24 });

      if (patternsError) throw patternsError;
      setPatterns((patternsData as any) || []);

    } catch (error) {
      console.error('Error fetching spam data:', error);
      toast.error('Failed to load spam monitoring data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchSpamData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchSpamData();
  };

  const getTotalBlocked = () => {
    if (!stats) return 0;
    return stats.blocked_honeypot_24h + stats.blocked_timing_24h + stats.blocked_rate_limit_24h;
  };

  const getBlockRate = () => {
    if (!stats || stats.total_submissions_24h === 0) return 0;
    const totalBlocked = getTotalBlocked();
    return ((totalBlocked / (stats.total_submissions_24h + totalBlocked)) * 100).toFixed(1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4 animate-pulse">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center">
            <Shield className="h-8 w-8 text-white animate-bounce" />
          </div>
          <p className="text-lg font-medium text-gray-600">Loading spam monitoring data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Modern Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-lg">
                <Shield className="h-8 w-8" />
              </div>
              Spam Monitoring
            </h2>
            <p className="text-white/90 text-lg">
              Real-time bot detection and spam prevention analytics
            </p>
          </div>
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-lg"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="admin-stat-card admin-gradient-success group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Shield className="h-8 w-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              <div className="p-2 rounded-lg bg-white/20">
                <Activity className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stats?.total_submissions_24h || 0}</div>
            <p className="text-white/80 text-sm font-medium">Legitimate Submissions</p>
            <div className="mt-3 flex items-center text-white/70 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              Last 24 hours
            </div>
          </div>
        </Card>

        <Card className="admin-stat-card admin-gradient-warning group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Ban className="h-8 w-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              <div className="p-2 rounded-lg bg-white/20">
                <XCircle className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{getTotalBlocked()}</div>
            <p className="text-white/80 text-sm font-medium">Blocked Attempts</p>
            <div className="mt-3 flex items-center text-white/70 text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              {getBlockRate()}% block rate
            </div>
          </div>
        </Card>

        <Card className="admin-stat-card admin-gradient-primary group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="h-8 w-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              <div className="p-2 rounded-lg bg-white/20">
                <Globe className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stats?.suspicious_ips || 0}</div>
            <p className="text-white/80 text-sm font-medium">Suspicious IPs</p>
            <div className="mt-3 flex items-center text-white/70 text-xs">
              <Shield className="h-3 w-3 mr-1" />
              High volume detected
            </div>
          </div>
        </Card>

        <Card className="admin-stat-card admin-gradient-accent group">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <XCircle className="h-8 w-8 text-white/90 group-hover:scale-110 transition-transform duration-300" />
              <div className="p-2 rounded-lg bg-white/20">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stats?.blocked_honeypot_24h || 0}</div>
            <p className="text-white/80 text-sm font-medium">Honeypot Catches</p>
            <div className="mt-3 flex items-center text-white/70 text-xs">
              <Shield className="h-3 w-3 mr-1" />
              Bot detection
            </div>
          </div>
        </Card>
      </div>

      {/* Block Method Breakdown */}
      <Card className="admin-card">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-orange-50">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600">
              <Ban className="h-6 w-6 text-white" />
            </div>
            Protection Methods Performance
          </CardTitle>
          <CardDescription className="text-base">
            Breakdown of how each anti-spam method is performing
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-red-900">Honeypot Field</h4>
                <Badge className="bg-red-600 text-white">{stats?.blocked_honeypot_24h || 0}</Badge>
              </div>
              <p className="text-sm text-red-700">
                Invisible field that only bots fill out. Highly effective against automated submissions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-orange-900">Time-Based</h4>
                <Badge className="bg-orange-600 text-white">{stats?.blocked_timing_24h || 0}</Badge>
              </div>
              <p className="text-sm text-orange-700">
                Detects forms submitted too quickly (under 3 seconds). Catches automated bots.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-yellow-900">Rate Limiting</h4>
                <Badge className="bg-yellow-600 text-white">{stats?.blocked_rate_limit_24h || 0}</Badge>
              </div>
              <p className="text-sm text-yellow-700">
                Blocks IPs with more than 3 submissions per 5 minutes. Prevents spam floods.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Spam IPs */}
      {stats?.top_spam_ips && stats.top_spam_ips.length > 0 && (
        <Card className="admin-card">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-red-50">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-600">
                <Globe className="h-6 w-6 text-white" />
              </div>
              Top Spam Sources
            </CardTitle>
            <CardDescription className="text-base">
              IP addresses with the highest number of blocked attempts
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50">
                    <TableHead className="font-semibold text-gray-700">IP Address</TableHead>
                    <TableHead className="font-semibold text-gray-700">Blocked Attempts</TableHead>
                    <TableHead className="font-semibold text-gray-700">Block Reasons</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stats.top_spam_ips.map((ip, index) => (
                    <TableRow key={index} className="hover:bg-red-50/50 transition-colors duration-200">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-red-100">
                            <Globe className="h-4 w-4 text-red-600" />
                          </div>
                          <code className="font-mono text-sm">{ip.ip_address}</code>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-gradient-to-r from-red-500 to-orange-600 text-white">
                          {ip.attempt_count} attempts
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-2">
                          {ip.block_reasons.map((reason, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {reason.replace('blocked_', '')}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Blocked Attempts */}
      <Card className="admin-card">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-orange-50">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600">
              <XCircle className="h-6 w-6 text-white" />
            </div>
            Recent Blocked Attempts
          </CardTitle>
          <CardDescription className="text-base">
            Latest bot and spam attempts that were automatically blocked
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50">
                  <TableHead className="font-semibold text-gray-700">Timestamp</TableHead>
                  <TableHead className="font-semibold text-gray-700">IP Address</TableHead>
                  <TableHead className="font-semibold text-gray-700">Block Reason</TableHead>
                  <TableHead className="font-semibold text-gray-700">Form Type</TableHead>
                  <TableHead className="font-semibold text-gray-700">User Agent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blockedAttempts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                      <div className="flex flex-col items-center gap-3">
                        <Shield className="h-12 w-12 text-green-500" />
                        <p className="text-lg font-medium">No blocked attempts in the last 24 hours</p>
                        <p className="text-sm">Your spam protection is active and monitoring</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  blockedAttempts.map((attempt, index) => (
                    <TableRow 
                      key={attempt.id} 
                      className="hover:bg-orange-50/50 transition-colors duration-200"
                      style={{animationDelay: `${index * 0.05}s`}}
                    >
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">
                            {new Date(attempt.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {attempt.ip_address}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 text-red-700"
                        >
                          <XCircle className="h-3 w-3 mr-1" />
                          {attempt.block_reason}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          {attempt.form_type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-xs text-gray-600 max-w-xs truncate block">
                          {attempt.user_agent}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Hourly Patterns */}
      <Card className="admin-card">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            Submission Patterns (24h)
          </CardTitle>
          <CardDescription className="text-base">
            Hourly breakdown of submissions and blocked attempts
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3">
            {patterns.slice(0, 12).map((pattern, index) => {
              const total = pattern.submission_count + pattern.blocked_count;
              const successRate = total > 0 ? ((pattern.submission_count / total) * 100).toFixed(0) : 100;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      {new Date(pattern.hour_bucket).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-green-600">{pattern.submission_count} success</span>
                      <span className="text-red-600">{pattern.blocked_count} blocked</span>
                      <span className="text-gray-500">{pattern.unique_ips} IPs</span>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-teal-600 transition-all duration-500"
                      style={{ width: `${successRate}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpamMonitoring;