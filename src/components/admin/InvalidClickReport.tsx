import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Download, 
  Printer, 
  AlertTriangle, 
  Shield, 
  Calendar,
  Loader2,
  FileSpreadsheet,
  Filter
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { format } from 'date-fns';
import type { Json } from '@/integrations/supabase/types';

interface FormSubmission {
  id: string;
  created_at: string;
  ip_address: unknown;
  user_agent: string | null;
  form_type: string;
  is_blocked: boolean | null;
  blocked_reason: string | null;
  spam_score: number | null;
  form_data: Json;
}

const InvalidClickReport = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('60');
  const [filterBlocked, setFilterBlocked] = useState(false);
  const [filterSuspicious, setFilterSuspicious] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchSubmissions();
  }, [dateRange]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - parseInt(dateRange));

      const { data, error } = await supabase
        .from('form_submissions')
        .select('id, created_at, ip_address, user_agent, form_type, is_blocked, blocked_reason, spam_score, form_data')
        .gte('created_at', startDate.toISOString())
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast.error('Failed to fetch form submissions');
    } finally {
      setLoading(false);
    }
  };

  const filteredSubmissions = submissions.filter(sub => {
    if (filterBlocked && !sub.is_blocked) return false;
    if (filterSuspicious && sub.spam_score === null) return false;
    if (filterSuspicious && (sub.spam_score ?? 0) < 3) return false;
    return true;
  });

  const stats = {
    total: submissions.length,
    blocked: submissions.filter(s => s.is_blocked).length,
    suspicious: submissions.filter(s => (s.spam_score ?? 0) >= 3).length,
    uniqueIPs: new Set(submissions.map(s => s.ip_address)).size,
    blockedIPs: new Set(submissions.filter(s => s.is_blocked).map(s => s.ip_address)).size,
  };

  const exportToCSV = () => {
    const headers = [
      'Timestamp (UTC)',
      'IP Address',
      'User Agent',
      'Form Type',
      'Status',
      'Block Reason',
      'Spam Score',
      'Referrer'
    ];

    const rows = filteredSubmissions.map(sub => [
      format(new Date(sub.created_at), 'yyyy-MM-dd HH:mm:ss'),
      String(sub.ip_address) || 'N/A',
      sub.user_agent?.replace(/,/g, ';') || 'N/A',
      sub.form_type,
      sub.is_blocked ? 'BLOCKED' : 'ALLOWED',
      sub.blocked_reason || 'N/A',
      sub.spam_score?.toString() || '0',
      (sub.form_data as Record<string, unknown>)?.referrer?.toString() || 'N/A'
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `invalid-click-report-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
    
    toast.success('CSV exported successfully');
  };

  const printReport = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error('Please allow popups to print the report');
      return;
    }

    const reportDate = format(new Date(), 'MMMM d, yyyy');
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(dateRange));

    const tableRows = filteredSubmissions.map(sub => `
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 11px;">${format(new Date(sub.created_at), 'yyyy-MM-dd HH:mm:ss')} UTC</td>
        <td style="border: 1px solid #ddd; padding: 8px; font-family: monospace; font-size: 11px;">${String(sub.ip_address) || 'N/A'}</td>
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 10px; max-width: 300px; word-wrap: break-word;">${sub.user_agent || 'N/A'}</td>
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 11px;">${sub.form_type}</td>
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 11px; color: ${sub.is_blocked ? '#dc2626' : '#16a34a'}; font-weight: bold;">${sub.is_blocked ? 'BLOCKED' : 'ALLOWED'}</td>
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 11px;">${sub.blocked_reason || '-'}</td>
      </tr>
    `).join('');

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invalid Click Report - Google Ads Dispute</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
          h1 { color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px; }
          h2 { color: #374151; margin-top: 30px; }
          .summary { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .stat { text-align: center; }
          .stat-value { font-size: 28px; font-weight: bold; color: #1e40af; }
          .stat-label { font-size: 12px; color: #6b7280; margin-top: 4px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }
          th { background: #1e40af; color: white; padding: 10px; text-align: left; }
          tr:nth-child(even) { background: #f9fafb; }
          .footer { margin-top: 40px; font-size: 11px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 20px; }
          .highlight { background: #fef2f2; }
          @media print { 
            body { margin: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <h1>Invalid Click Report for Google Ads Dispute</h1>
        <p><strong>Report Generated:</strong> ${reportDate}</p>
        <p><strong>Date Range:</strong> ${format(startDate, 'MMMM d, yyyy')} - ${reportDate}</p>
        <p><strong>Website:</strong> copingandhealingtherapy.com</p>
        
        <div class="summary">
          <h2 style="margin-top: 0;">Summary Statistics</h2>
          <div class="summary-grid">
            <div class="stat">
              <div class="stat-value">${stats.total}</div>
              <div class="stat-label">Total Form Submissions</div>
            </div>
            <div class="stat">
              <div class="stat-value" style="color: #dc2626;">${stats.blocked}</div>
              <div class="stat-label">Blocked (Invalid/Bot)</div>
            </div>
            <div class="stat">
              <div class="stat-value">${stats.blockedIPs}</div>
              <div class="stat-label">Unique Blocked IPs</div>
            </div>
          </div>
        </div>

        <h2>Evidence of Invalid Clicks</h2>
        <p>The following submissions were identified as invalid/bot traffic based on:</p>
        <ul>
          <li>Low reCAPTCHA v3 scores (bot-like behavior)</li>
          <li>Rapid successive submissions from same IP</li>
          <li>Failed honeypot and timing-based bot detection</li>
          <li>Suspicious user agent patterns</li>
        </ul>

        <h2>Detailed Submission Log</h2>
        <table>
          <thead>
            <tr>
              <th>Timestamp (UTC)</th>
              <th>IP Address</th>
              <th>User Agent</th>
              <th>Form Type</th>
              <th>Status</th>
              <th>Block Reason</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>

        <div class="footer">
          <p><strong>Note:</strong> This report documents form submissions that were identified as invalid or bot-generated traffic. 
          These submissions originated from clicks on Google Ads campaigns but were blocked by our automated security systems 
          (reCAPTCHA v3, honeypot fields, timing analysis, and rate limiting).</p>
          <p>Each blocked submission represents a click that was charged but did not result from genuine user interest.</p>
          <p><strong>Contact:</strong> Coping & Healing Counseling Center | (404) 832-0102 | copingandhealingtherapy.com</p>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="admin-card overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            Invalid Click Report for Google Ads
          </CardTitle>
          <CardDescription className="text-base">
            Generate detailed reports of blocked/suspicious form submissions for Google Ads invalid click disputes.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* Controls */}
          <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="60">Last 60 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="blocked" 
                    checked={filterBlocked}
                    onCheckedChange={(checked) => setFilterBlocked(checked as boolean)}
                  />
                  <label htmlFor="blocked" className="text-sm font-medium cursor-pointer">
                    Blocked only
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="suspicious" 
                    checked={filterSuspicious}
                    onCheckedChange={(checked) => setFilterSuspicious(checked as boolean)}
                  />
                  <label htmlFor="suspicious" className="text-sm font-medium cursor-pointer">
                    Suspicious (score ≥3)
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={exportToCSV} variant="outline" className="gap-2">
                <FileSpreadsheet className="h-4 w-4" />
                Export CSV
              </Button>
              <Button onClick={printReport} className="gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                <Printer className="h-4 w-4" />
                Print PDF Report
              </Button>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <Card className="p-4 bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="text-2xl font-bold text-slate-700">{stats.total}</div>
              <div className="text-xs text-slate-500">Total Submissions</div>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-red-50 to-red-100">
              <div className="text-2xl font-bold text-red-600">{stats.blocked}</div>
              <div className="text-xs text-red-500">Blocked</div>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="text-2xl font-bold text-orange-600">{stats.suspicious}</div>
              <div className="text-xs text-orange-500">Suspicious</div>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-2xl font-bold text-blue-600">{stats.uniqueIPs}</div>
              <div className="text-xs text-blue-500">Unique IPs</div>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-2xl font-bold text-purple-600">{stats.blockedIPs}</div>
              <div className="text-xs text-purple-500">Blocked IPs</div>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card className="admin-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Submission Details
            <Badge variant="secondary" className="ml-2">
              {filteredSubmissions.length} records
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="rounded-md border overflow-x-auto" ref={printRef}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[160px]">Timestamp (UTC)</TableHead>
                    <TableHead className="w-[130px]">IP Address</TableHead>
                    <TableHead className="min-w-[200px]">User Agent</TableHead>
                    <TableHead className="w-[120px]">Form</TableHead>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead className="w-[150px]">Block Reason</TableHead>
                    <TableHead className="w-[80px]">Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No submissions found for the selected filters
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredSubmissions.slice(0, 200).map((sub) => (
                      <TableRow key={sub.id} className={sub.is_blocked ? 'bg-red-50/50' : ''}>
                        <TableCell className="font-mono text-xs">
                          {format(new Date(sub.created_at), 'yyyy-MM-dd HH:mm:ss')}
                        </TableCell>
                        <TableCell className="font-mono text-xs">
                          {String(sub.ip_address) || 'N/A'}
                        </TableCell>
                        <TableCell className="text-xs max-w-[300px] truncate" title={sub.user_agent || ''}>
                          {sub.user_agent || 'N/A'}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">
                            {sub.form_type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {sub.is_blocked ? (
                            <Badge variant="destructive" className="text-xs">BLOCKED</Badge>
                          ) : (
                            <Badge variant="default" className="text-xs bg-green-500">ALLOWED</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-xs">
                          {sub.blocked_reason || '-'}
                        </TableCell>
                        <TableCell>
                          {sub.spam_score !== null && sub.spam_score > 0 ? (
                            <Badge 
                              variant={sub.spam_score >= 5 ? 'destructive' : sub.spam_score >= 3 ? 'secondary' : 'outline'}
                              className="text-xs"
                            >
                              {sub.spam_score}
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground">0</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
              {filteredSubmissions.length > 200 && (
                <div className="p-4 text-center text-sm text-muted-foreground bg-muted/50">
                  Showing first 200 of {filteredSubmissions.length} records. Export to CSV for complete data.
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InvalidClickReport;
