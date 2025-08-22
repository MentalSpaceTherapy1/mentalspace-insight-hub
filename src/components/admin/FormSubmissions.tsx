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
import { FileText, Eye, MessageSquare, Briefcase, Mail, CheckCircle } from 'lucide-react';
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
}

const FormSubmissions = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [notes, setNotes] = useState('');
  const [processing, setProcessing] = useState(false);

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

  if (loading) {
    return <div>Loading form submissions...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Form Submissions</h2>
          <p className="text-muted-foreground">
            Manage and respond to form submissions
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Forms</TabsTrigger>
          <TabsTrigger value="therapist_matching">Therapist Matching</TabsTrigger>
          <TabsTrigger value="contact_us">Contact Us</TabsTrigger>
          <TabsTrigger value="career_application">Career</TabsTrigger>
          <TabsTrigger value="assessment_contact">Assessments</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Submissions</CardTitle>
              <CardDescription>
                Recent form submissions from all forms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Name/Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.slice(0, 10).map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getFormIcon(submission.form_type)}
                          {getFormTitle(submission.form_type)}
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(submission.submission_date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {submission.form_data.name || submission.form_data.firstName || submission.form_data.email || 'Unknown'}
                      </TableCell>
                      <TableCell>
                        <Badge variant={submission.is_processed ? 'default' : 'secondary'}>
                          {submission.is_processed ? 'Processed' : 'Pending'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                setSelectedSubmission(submission);
                                setNotes(submission.notes || '');
                              }}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>
                                {getFormTitle(submission.form_type)} Submission
                              </DialogTitle>
                              <DialogDescription>
                                Submitted on {new Date(submission.submission_date).toLocaleString()}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">Form Data</h4>
                                {renderFormData(submission.form_data, submission.form_type)}
                              </div>
                              
                              {!submission.is_processed && (
                                <div className="space-y-2">
                                  <Label htmlFor="notes">Processing Notes</Label>
                                  <Textarea
                                    id="notes"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Add notes about how this was handled..."
                                  />
                                  <Button
                                    onClick={() => markAsProcessed(submission.id, notes)}
                                    disabled={processing}
                                    className="w-full"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Mark as Processed
                                  </Button>
                                </div>
                              )}

                              {submission.is_processed && (
                                <div className="p-3 bg-muted rounded-lg">
                                  <p className="text-sm text-muted-foreground">
                                    <strong>Status:</strong> Processed on {new Date(submission.processed_at!).toLocaleString()}
                                  </p>
                                  {submission.notes && (
                                    <p className="text-sm mt-1">
                                      <strong>Notes:</strong> {submission.notes}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {['therapist_matching', 'contact_us', 'career_application', 'assessment_contact'].map((formType) => (
          <TabsContent key={formType} value={formType}>
            <Card>
              <CardHeader>
                <CardTitle>{getFormTitle(formType)} Submissions</CardTitle>
                <CardDescription>
                  Submissions from the {getFormTitle(formType).toLowerCase()} form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name/Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filterSubmissionsByType(formType).map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>
                          {new Date(submission.submission_date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {submission.form_data.name || submission.form_data.firstName || submission.form_data.email || 'Unknown'}
                        </TableCell>
                        <TableCell>
                          <Badge variant={submission.is_processed ? 'default' : 'secondary'}>
                            {submission.is_processed ? 'Processed' : 'Pending'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => {
                                  setSelectedSubmission(submission);
                                  setNotes(submission.notes || '');
                                }}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>
                                  {getFormTitle(submission.form_type)} Submission
                                </DialogTitle>
                                <DialogDescription>
                                  Submitted on {new Date(submission.submission_date).toLocaleString()}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-medium mb-2">Form Data</h4>
                                  {renderFormData(submission.form_data, submission.form_type)}
                                </div>
                                
                                {!submission.is_processed && (
                                  <div className="space-y-2">
                                    <Label htmlFor="notes">Processing Notes</Label>
                                    <Textarea
                                      id="notes"
                                      value={notes}
                                      onChange={(e) => setNotes(e.target.value)}
                                      placeholder="Add notes about how this was handled..."
                                    />
                                    <Button
                                      onClick={() => markAsProcessed(submission.id, notes)}
                                      disabled={processing}
                                      className="w-full"
                                    >
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      Mark as Processed
                                    </Button>
                                  </div>
                                )}

                                {submission.is_processed && (
                                  <div className="p-3 bg-muted rounded-lg">
                                    <p className="text-sm text-muted-foreground">
                                      <strong>Status:</strong> Processed on {new Date(submission.processed_at!).toLocaleString()}
                                    </p>
                                    {submission.notes && (
                                      <p className="text-sm mt-1">
                                        <strong>Notes:</strong> {submission.notes}
                                      </p>
                                    )}
                                  </div>
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FormSubmissions;