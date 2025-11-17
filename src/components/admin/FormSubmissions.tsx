import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  FileText, 
  Eye, 
  MessageSquare, 
  Briefcase, 
  Mail, 
  CheckCircle,
  Clock,
  Users,
  Sparkles,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface FormSubmission {
  id: string;
  form_type: 'therapist_matching' | 'contact_us' | 'career_application' | 'assessment_contact';
  form_data: Record<string, any>;
  submission_date: string;
  is_processed: boolean;
  notes?: string;
  processed_at?: string;
  processed_by?: string;
  is_blocked?: boolean;
  blocked_reason?: string;
  spam_score?: number;
}

const FormSubmissions = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [notes, setNotes] = useState('');
  const [processing, setProcessing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('submission_date', { ascending: false });

      if (error) throw error;
      setSubmissions((data as FormSubmission[]) || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast.error('Failed to load form submissions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const markAsProcessed = async (submissionId: string, notes: string) => {
    setProcessing(true);
    try {
      const { error } = await supabase
        .from('form_submissions')
        .update({
          is_processed: true,
          processed_at: new Date().toISOString(),
          notes: notes,
        })
        .eq('id', submissionId);

      if (error) throw error;

      toast.success('Submission marked as processed');
      fetchSubmissions();
      setSelectedSubmission(null);
      setNotes('');
    } catch (error) {
      console.error('Error updating submission:', error);
      toast.error('Failed to update submission');
    } finally {
      setProcessing(false);
    }
  };

  const getFormIcon = (formType: string) => {
    switch (formType) {
      case 'therapist_matching':
        return <MessageSquare className="h-4 w-4" />;
      case 'contact_us':
        return <Mail className="h-4 w-4" />;
      case 'career_application':
        return <Briefcase className="h-4 w-4" />;
      case 'assessment_contact':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getFormTitle = (formType: string) => {
    switch (formType) {
      case 'therapist_matching':
        return 'Therapist Matching';
      case 'contact_us':
        return 'Contact Us';
      case 'career_application':
        return 'Career Application';
      case 'assessment_contact':
        return 'Assessment Contact';
      default:
        return formType;
    }
  };

  const renderFormData = (data: Record<string, any>, formType: string) => {
    const keys = Object.keys(data);
    return (
      <div className="space-y-2">
        {keys.map((key) => (
          <div key={key}>
            <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong>
            <span className="ml-2">{String(data[key]) || 'Not provided'}</span>
          </div>
        ))}
      </div>
    );
  };

  const filterSubmissionsByType = (formType: string) => {
    return submissions.filter(s => s.form_type === formType);
  };

  const getPaginatedSubmissions = (subs: FormSubmission[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return subs.slice(startIndex, endIndex);
  };

  const getTotalPages = (subs: FormSubmission[]) => {
    return Math.ceil(subs.length / itemsPerPage);
  };

  const renderPagination = (subs: FormSubmission[]) => {
    const totalPages = getTotalPages(subs);
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-between px-4 py-4 border-t">
        <div className="text-sm text-muted-foreground">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, subs.length)} of {subs.length} submissions
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <div className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center space-y-4 animate-pulse">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <FileText className="h-8 w-8 text-white animate-bounce" />
          </div>
          <p className="text-lg font-medium text-gray-600">Loading form submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Modern Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-lg">
                <FileText className="h-8 w-8" />
              </div>
              Form Submissions
            </h2>
            <p className="text-white/90 text-lg">
              Manage and respond to form submissions from across the platform
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">{submissions.length}</div>
              <div className="text-white/80 text-sm">Total Submissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-200">
                {submissions.filter(s => !s.is_processed).length}
              </div>
              <div className="text-white/80 text-sm">Pending</div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        {/* Modern Tab List */}
        <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-2">
          <TabsTrigger 
            value="all"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
          >
            <FileText className="h-4 w-4 mr-2" />
            All Forms
          </TabsTrigger>
          <TabsTrigger 
            value="therapist_matching"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-teal-600 data-[state=active]:text-white transition-all duration-300"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Therapy
          </TabsTrigger>
          <TabsTrigger 
            value="contact_us"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300"
          >
            <Mail className="h-4 w-4 mr-2" />
            Contact
          </TabsTrigger>
          <TabsTrigger 
            value="career_application"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Career
          </TabsTrigger>
          <TabsTrigger 
            value="assessment_contact"
            className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
          >
            <Users className="h-4 w-4 mr-2" />
            Assessments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="animate-slide-up">
          <Card className="admin-card overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b">
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                All Submissions Overview
              </CardTitle>
              <CardDescription className="text-base">
                Recent form submissions from all forms across the platform
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/50">
                      <TableHead className="font-semibold text-gray-700">Type</TableHead>
                      <TableHead className="font-semibold text-gray-700">Date</TableHead>
                      <TableHead className="font-semibold text-gray-700">Contact</TableHead>
                      <TableHead className="font-semibold text-gray-700">Security</TableHead>
                      <TableHead className="font-semibold text-gray-700">Status</TableHead>
                      <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getPaginatedSubmissions(submissions).map((submission, index) => (
                      <TableRow 
                        key={submission.id} 
                        className={`transition-colors duration-200 group ${
                          submission.is_blocked 
                            ? 'bg-red-50/50 hover:bg-red-100/50 border-l-4 border-l-red-500' 
                            : 'hover:bg-blue-50/50'
                        }`}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                              {getFormIcon(submission.form_type)}
                            </div>
                            <span className="font-medium">{getFormTitle(submission.form_type)}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            {new Date(submission.submission_date).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="font-medium text-gray-800">
                            {submission.form_data.name || submission.form_data.firstName || submission.form_data.email || 'Unknown'}
                          </span>
                        </TableCell>
                        <TableCell>
                          {submission.is_blocked ? (
                            <div className="space-y-1">
                              <Badge className="bg-red-600 text-white shadow-md hover:bg-red-700 font-semibold">
                                🚫 BLOCKED - SPAM
                              </Badge>
                              <div className="text-xs space-y-0.5 mt-1">
                                <div className="flex items-center gap-1">
                                  <span className="font-semibold text-red-700">Score:</span>
                                  <span className="text-red-600">{submission.spam_score || 0}/10</span>
                                </div>
                                {submission.blocked_reason && (
                                  <div className="flex items-center gap-1">
                                    <span className="font-semibold text-red-700">Reason:</span>
                                    <span className="text-red-600 capitalize">{submission.blocked_reason.replace(/_/g, ' ')}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            <Badge className="bg-green-600 text-white shadow-sm">
                              ✓ Clean
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={submission.is_processed ? 'default' : 'secondary'}
                            className={submission.is_processed 
                              ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md' 
                              : 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md'
                            }
                          >
                            {submission.is_processed ? '✓ Processed' : '⏳ Pending'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-blue-200 text-blue-700 hover:text-blue-800 transition-all duration-300"
                                onClick={() => {
                                  setSelectedSubmission(submission);
                                  setNotes(submission.notes || '');
                                }}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                              <DialogHeader className="pb-6">
                                <DialogTitle className="text-2xl flex items-center gap-3">
                                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                                    {getFormIcon(submission.form_type)}
                                    </div>
                                  {getFormTitle(submission.form_type)} Submission
                                </DialogTitle>
                                <DialogDescription className="text-base">
                                  Submitted on {new Date(submission.submission_date).toLocaleString()}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-6">
                                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
                                  <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                      <TrendingUp className="h-5 w-5 text-blue-600" />
                                      Form Data
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    {renderFormData(submission.form_data, submission.form_type)}
                                  </CardContent>
                                </Card>
                                
                                {!submission.is_processed && (
                                  <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
                                    <CardHeader>
                                      <CardTitle className="text-lg text-orange-800">Processing Center</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                      <div>
                                        <Label htmlFor="notes" className="text-orange-800 font-medium">Processing Notes</Label>
                                        <Textarea
                                          id="notes"
                                          value={notes}
                                          onChange={(e) => setNotes(e.target.value)}
                                          placeholder="Add detailed notes about how this submission was handled..."
                                          className="mt-2 border-orange-200 focus:border-orange-400"
                                          rows={4}
                                        />
                                      </div>
                                      <Button
                                        onClick={() => markAsProcessed(submission.id, notes)}
                                        disabled={processing}
                                        className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-lg"
                                      >
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        {processing ? 'Processing...' : 'Mark as Processed'}
                                      </Button>
                                    </CardContent>
                                  </Card>
                                )}

                                {submission.is_processed && (
                                  <Card className="border-green-200 bg-gradient-to-r from-green-50 to-teal-50">
                                    <CardContent className="p-6">
                                      <div className="flex items-center gap-2 mb-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="font-semibold text-green-800">Submission Processed</span>
                                      </div>
                                      <p className="text-green-700 mb-2">
                                        <strong>Completed:</strong> {new Date(submission.processed_at!).toLocaleString()}
                                      </p>
                                      {submission.notes && (
                                        <div>
                                          <strong className="text-green-800">Processing Notes:</strong>
                                          <p className="text-green-700 mt-1 p-3 bg-green-100 rounded-lg">{submission.notes}</p>
                                        </div>
                                      )}
                                    </CardContent>
                                  </Card>
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {renderPagination(submissions)}
            </CardContent>
          </Card>
        </TabsContent>

        {['therapist_matching', 'contact_us', 'career_application', 'assessment_contact'].map((formType, index) => (
          <TabsContent key={formType} value={formType} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
            <Card className="admin-card overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600">
                    {getFormIcon(formType)}
                  </div>
                  {getFormTitle(formType)} Submissions
                </CardTitle>
                <CardDescription className="text-base">
                  Submissions from the {getFormTitle(formType).toLowerCase()} form
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50/50">
                        <TableHead className="font-semibold text-gray-700">Date</TableHead>
                        <TableHead className="font-semibold text-gray-700">Contact</TableHead>
                        <TableHead className="font-semibold text-gray-700">Status</TableHead>
                        <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getPaginatedSubmissions(filterSubmissionsByType(formType)).map((submission, subIndex) => (
                        <TableRow 
                          key={submission.id}
                          className="hover:bg-blue-50/50 transition-colors duration-200 group"
                        >
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              {new Date(submission.submission_date).toLocaleDateString()}
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="font-medium text-gray-800">
                              {submission.form_data.name || submission.form_data.firstName || submission.form_data.email || 'Unknown'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={submission.is_processed ? 'default' : 'secondary'}
                              className={submission.is_processed 
                                ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md' 
                                : 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md'
                              }
                            >
                              {submission.is_processed ? '✓ Processed' : '⏳ Pending'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border-blue-200 text-blue-700 hover:text-blue-800 transition-all duration-300"
                                  onClick={() => {
                                    setSelectedSubmission(submission);
                                    setNotes(submission.notes || '');
                                  }}
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                                <DialogHeader className="pb-6">
                                  <DialogTitle className="text-2xl flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                                      {getFormIcon(submission.form_type)}
                                    </div>
                                    {getFormTitle(submission.form_type)} Submission
                                  </DialogTitle>
                                  <DialogDescription className="text-base">
                                    Submitted on {new Date(submission.submission_date).toLocaleString()}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-6">
                                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
                                    <CardHeader>
                                      <CardTitle className="text-lg flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-blue-600" />
                                        Form Data
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      {renderFormData(submission.form_data, submission.form_type)}
                                    </CardContent>
                                  </Card>
                                  
                                  {!submission.is_processed && (
                                    <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
                                      <CardHeader>
                                        <CardTitle className="text-lg text-orange-800">Processing Center</CardTitle>
                                      </CardHeader>
                                      <CardContent className="space-y-4">
                                        <div>
                                          <Label htmlFor="notes" className="text-orange-800 font-medium">Processing Notes</Label>
                                          <Textarea
                                            id="notes"
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            placeholder="Add detailed notes about how this submission was handled..."
                                            className="mt-2 border-orange-200 focus:border-orange-400"
                                            rows={4}
                                          />
                                        </div>
                                        <Button
                                          onClick={() => markAsProcessed(submission.id, notes)}
                                          disabled={processing}
                                          className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-lg"
                                        >
                                          <CheckCircle className="h-4 w-4 mr-2" />
                                          {processing ? 'Processing...' : 'Mark as Processed'}
                                        </Button>
                                      </CardContent>
                                    </Card>
                                  )}

                                  {submission.is_processed && (
                                    <Card className="border-green-200 bg-gradient-to-r from-green-50 to-teal-50">
                                      <CardContent className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                          <CheckCircle className="h-5 w-5 text-green-600" />
                                          <span className="font-semibold text-green-800">Submission Processed</span>
                                        </div>
                                        <p className="text-green-700 mb-2">
                                          <strong>Completed:</strong> {new Date(submission.processed_at!).toLocaleString()}
                                        </p>
                                        {submission.notes && (
                                          <div>
                                            <strong className="text-green-800">Processing Notes:</strong>
                                            <p className="text-green-700 mt-1 p-3 bg-green-100 rounded-lg">{submission.notes}</p>
                                          </div>
                                        )}
                                      </CardContent>
                                    </Card>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                {renderPagination(filterSubmissionsByType(formType))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FormSubmissions;