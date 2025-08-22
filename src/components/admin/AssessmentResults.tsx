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
import { Brain, Eye, Download, Filter } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AssessmentSession {
  id: string;
  session_id: string;
  assessment_type: string;
  answers: Record<string, any>;
  score?: number;
  severity?: string;
  recommendations?: string[];
  additional_info?: Record<string, any>;
  completed_at: string;
}

interface AssessmentContact {
  id: string;
  assessment_session_id: string;
  contact_data: Record<string, any>;
  is_processed: boolean;
  created_at: string;
}

const AssessmentResults = () => {
  const [sessions, setSessions] = useState<AssessmentSession[]>([]);
  const [contacts, setContacts] = useState<AssessmentContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<AssessmentSession | null>(null);

  const fetchData = async () => {
    try {
      const [sessionsResponse, contactsResponse] = await Promise.all([
        supabase
          .from('assessment_sessions')
          .select('*')
          .order('completed_at', { ascending: false }),
        supabase
          .from('assessment_contacts')
          .select('*')
          .order('created_at', { ascending: false })
      ]);

      if (sessionsResponse.error) throw sessionsResponse.error;
      if (contactsResponse.error) throw contactsResponse.error;

      setSessions((sessionsResponse.data as AssessmentSession[]) || []);
      setContacts((contactsResponse.data as AssessmentContact[]) || []);
    } catch (error) {
      console.error('Error fetching assessment data:', error);
      toast.error('Failed to load assessment data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getAssessmentTitle = (assessmentType: string) => {
    return assessmentType
      .replace(/_/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  };

  const getSeverityColor = (severity?: string) => {
    if (!severity) return 'secondary';
    
    const lower = severity.toLowerCase();
    if (lower.includes('severe') || lower.includes('high')) return 'destructive';
    if (lower.includes('moderate')) return 'secondary';
    if (lower.includes('mild') || lower.includes('low')) return 'outline';
    return 'secondary';
  };

  const exportResults = (session: AssessmentSession) => {
    const data = {
      sessionId: session.session_id,
      assessmentType: session.assessment_type,
      completedAt: session.completed_at,
      score: session.score,
      severity: session.severity,
      recommendations: session.recommendations,
      answers: session.answers,
      additionalInfo: session.additional_info,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assessment-${session.session_id}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderAnswers = (answers: Record<string, any>) => {
    return (
      <div className="space-y-2">
        {Object.entries(answers).map(([key, value], index) => (
          <div key={key} className="grid grid-cols-3 gap-4">
            <span className="font-medium">Question {index + 1}:</span>
            <span className="col-span-2">{String(value)}</span>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div>Loading assessment results...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Assessment Results</h2>
          <p className="text-muted-foreground">
            View and analyze mental health assessment results
          </p>
        </div>
      </div>

      <Tabs defaultValue="sessions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sessions">Assessment Sessions</TabsTrigger>
          <TabsTrigger value="contacts">Contact Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="sessions">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Sessions</CardTitle>
              <CardDescription>
                Completed mental health assessments and their results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Assessment Type</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sessions.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          {getAssessmentTitle(session.assessment_type)}
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(session.completed_at).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {session.score !== null ? session.score : 'N/A'}
                      </TableCell>
                      <TableCell>
                        {session.severity ? (
                          <Badge variant={getSeverityColor(session.severity)}>
                            {session.severity}
                          </Badge>
                        ) : (
                          'N/A'
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedSession(session)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>
                                  {getAssessmentTitle(session.assessment_type)} Results
                                </DialogTitle>
                                <DialogDescription>
                                  Session ID: {session.session_id} | Completed: {new Date(session.completed_at).toLocaleString()}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <Card>
                                    <CardHeader className="pb-3">
                                      <CardTitle className="text-sm">Score</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="text-2xl font-bold">
                                        {session.score ?? 'N/A'}
                                      </div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardHeader className="pb-3">
                                      <CardTitle className="text-sm">Severity</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      {session.severity ? (
                                        <Badge variant={getSeverityColor(session.severity)}>
                                          {session.severity}
                                        </Badge>
                                      ) : (
                                        'N/A'
                                      )}
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardHeader className="pb-3">
                                      <CardTitle className="text-sm">Recommendations</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="text-sm">
                                        {session.recommendations ? session.recommendations.length : 0} items
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>

                                {session.recommendations && session.recommendations.length > 0 && (
                                  <div>
                                    <h4 className="font-medium mb-2">Recommendations</h4>
                                    <ul className="list-disc pl-5 space-y-1">
                                      {session.recommendations.map((rec, index) => (
                                        <li key={index} className="text-sm">{rec}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                <div>
                                  <h4 className="font-medium mb-2">Assessment Answers</h4>
                                  <div className="bg-muted p-3 rounded-lg">
                                    {renderAnswers(session.answers)}
                                  </div>
                                </div>

                                {session.additional_info && Object.keys(session.additional_info).length > 0 && (
                                  <div>
                                    <h4 className="font-medium mb-2">Additional Information</h4>
                                    <div className="bg-muted p-3 rounded-lg">
                                      <pre className="text-sm">
                                        {JSON.stringify(session.additional_info, null, 2)}
                                      </pre>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => exportResults(session)}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Export
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Contact Requests</CardTitle>
              <CardDescription>
                People who requested contact after completing assessments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>
                        {new Date(contact.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {contact.contact_data.name || 'N/A'}
                      </TableCell>
                      <TableCell>
                        {contact.contact_data.email || 'N/A'}
                      </TableCell>
                      <TableCell>
                        {contact.contact_data.phone || 'N/A'}
                      </TableCell>
                      <TableCell>
                        <Badge variant={contact.is_processed ? 'default' : 'secondary'}>
                          {contact.is_processed ? 'Processed' : 'Pending'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssessmentResults;