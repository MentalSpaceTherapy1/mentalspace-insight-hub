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

  // Generate recommendations for migrated data that lacks them
  const generateMigratedRecommendations = (assessmentType: string, score: number, severity: string) => {
    const recommendations: string[] = [];
    
    switch (assessmentType) {
      case 'ptsd':
        if (severity === 'Severe') {
          recommendations.push(
            'Consider immediate professional trauma therapy (EMDR, CPT, or PE therapy)',
            'Safety planning if experiencing flashbacks or dissociation', 
            'Grounding techniques for managing overwhelming symptoms',
            'Consider medication consultation with psychiatrist if symptoms persist',
            'Build a trauma-informed support network'
          );
        } else if (severity === 'Moderate') {
          recommendations.push(
            'Trauma-focused therapy with a qualified therapist',
            'Practice stress reduction techniques (breathing exercises, mindfulness)',
            'Gradual exposure to avoided situations with professional guidance',
            'Consider joining a trauma support group'
          );
        }
        break;
        
      case 'anxiety': 
        if (severity === 'Severe') {
          recommendations.push(
            'Consider immediate professional anxiety treatment (CBT, exposure therapy)',
            'Practice daily relaxation techniques and breathing exercises',
            'Consider medication evaluation with healthcare provider',
            'Avoid caffeine and alcohol which can worsen anxiety',
            'Establish regular sleep schedule and exercise routine'
          );
        } else if (severity === 'Moderate') {
          recommendations.push(
            'Cognitive Behavioral Therapy (CBT) can be highly effective for anxiety',
            'Practice mindfulness and stress management techniques',
            'Regular exercise and maintaining healthy sleep habits',
            'Consider anxiety management apps or online resources'
          );
        }
        break;
        
      default:
        recommendations.push(
          'Consider professional mental health evaluation',
          'Practice self-care and stress management techniques',
          'Maintain regular sleep, exercise, and nutrition habits',
          'Consider therapy or counseling for additional support'
        );
    }
    
    // Add crisis resources for severe cases
    if (severity === 'Severe') {
      recommendations.push('Crisis support: Call/text 988 for immediate help if feeling overwhelmed');
    }
    
    return recommendations;
  };

  const renderFullAssessmentDetails = (session: AssessmentSession) => {
    const hasAnswers = session.answers && Object.keys(session.answers).length > 0;
    const hasRecommendations = session.recommendations && session.recommendations.length > 0;
    const isMigrated = session.additional_info?.migrated_from_form_id;
    
    // Generate recommendations for migrated data
    const displayRecommendations = hasRecommendations 
      ? session.recommendations 
      : generateMigratedRecommendations(session.assessment_type, session.score || 0, session.severity || '');

    return (
      <div className="space-y-6">
        {/* Assessment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{session.score ?? 'N/A'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Severity</CardTitle>
            </CardHeader>
            <CardContent>
              {session.severity ? (
                <Badge variant={getSeverityColor(session.severity)} className="text-sm">
                  {session.severity}
                </Badge>
              ) : 'N/A'}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Assessment Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium">
                {getAssessmentTitle(session.assessment_type)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <div>
          <h4 className="font-medium mb-3">Personalized Recommendations</h4>
          {displayRecommendations && displayRecommendations.length > 0 ? (
            <div className="space-y-3">
              {displayRecommendations.map((rec, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-300 text-xs font-medium">{index + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{rec}</p>
                </div>
              ))}
              {isMigrated && (
                <p className="text-xs text-muted-foreground italic mt-2">
                  * Recommendations generated based on your assessment score and severity level
                </p>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">No recommendations available</p>
          )}
        </div>

        {/* Individual Answers */}
        <div>
          <h4 className="font-medium mb-3">Assessment Responses</h4>
          <div className="bg-muted p-4 rounded-lg">
            {hasAnswers ? (
              renderAnswers(session.answers)
            ) : (
              <div className="text-center py-6 space-y-2">
                <p className="text-muted-foreground">Individual question responses not available for this assessment.</p>
                <p className="text-sm text-muted-foreground">
                  {isMigrated 
                    ? "This assessment was migrated from previous data that only contained summary results."
                    : "Detailed responses were not captured for this assessment."
                  }
                </p>
                <div className="mt-4 p-3 bg-background rounded border-l-4 border-blue-500">
                  <p className="text-sm">
                    <strong>What this assessment typically measures:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {session.assessment_type === 'ptsd' && "PTSD symptoms including flashbacks, nightmares, avoidance behaviors, negative thoughts, hypervigilance, and concentration difficulties over the past month."}
                    {session.assessment_type === 'anxiety' && "Anxiety symptoms including nervousness, worry, trouble relaxing, restlessness, irritability, and fear over the past 2 weeks."}
                    {!['ptsd', 'anxiety'].includes(session.assessment_type) && `${getAssessmentTitle(session.assessment_type)} symptoms and related concerns.`}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        {session.additional_info && Object.keys(session.additional_info).length > 0 && (
          <div>
            <h4 className="font-medium mb-3">Additional Information</h4>
            <div className="bg-muted p-4 rounded-lg">
              {renderAdditionalInfo(session.additional_info)}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderAnswers = (answers: Record<string, any>) => {
    if (!answers || Object.keys(answers).length === 0) {
      return (
        <div className="text-center py-4 text-muted-foreground">
          <p>Individual question responses not available for this assessment.</p>
          <p className="text-sm">This may be from migrated data that only contained summary results.</p>
        </div>
      );
    }
    
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

  const renderContactInfo = (additionalInfo: Record<string, any>) => {
    const contactInfo = additionalInfo?.contact_info;
    if (!contactInfo) return null;

    return (
      <div className="space-y-3">
        <h5 className="font-medium text-sm">Contact Information</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-muted-foreground">Name:</span>
            <p className="font-medium">{contactInfo.firstName} {contactInfo.lastName}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Email:</span>
            <p className="font-medium">{contactInfo.email}</p>
          </div>
          <div className="md:col-span-2">
            <span className="font-medium text-muted-foreground">Phone:</span>
            <p className="font-medium">{contactInfo.phone || 'Not provided'}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderAdditionalInfo = (additionalInfo: Record<string, any>) => {
    const isMigrated = additionalInfo?.migrated_from_form_id;
    
    return (
      <div className="space-y-4">
        {isMigrated && (
          <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">Migrated Data</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              This assessment was migrated from a previous form submission.
            </p>
          </div>
        )}
        
        {renderContactInfo(additionalInfo)}
        
        {additionalInfo && Object.keys(additionalInfo).length > 2 && (
          <details className="cursor-pointer">
            <summary className="font-medium text-sm hover:text-primary">
              Technical Details (Advanced)
            </summary>
            <div className="mt-2 bg-muted p-3 rounded text-xs">
              <pre>{JSON.stringify(additionalInfo, null, 2)}</pre>
            </div>
          </details>
        )}
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
                                  <DialogTitle className="text-xl">
                                    {getAssessmentTitle(session.assessment_type)} - Complete Results
                                  </DialogTitle>
                                  <DialogDescription>
                                    Session ID: {session.session_id} | Completed: {new Date(session.completed_at).toLocaleString()}
                                  </DialogDescription>
                                </DialogHeader>
                                {renderFullAssessmentDetails(session)}
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