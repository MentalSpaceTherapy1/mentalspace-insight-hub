import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Star, Mail, Phone, User, MessageSquare, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";

interface Feedback {
  id: string;
  client_name: string | null;
  client_email: string | null;
  client_phone: string | null;
  rating: number;
  feedback_text: string | null;
  willing_to_review: boolean;
  google_review_sent: boolean;
  google_review_sent_at: string | null;
  is_processed: boolean;
  processed_at: string | null;
  notes: string | null;
  created_at: string;
}

const FeedbackManagement = () => {
  const { toast } = useToast();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingNotes, setEditingNotes] = useState<{ [key: string]: string }>({});

  // Replace with your actual Google Review link
  const GOOGLE_REVIEW_LINK = "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review";

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const { data, error } = await supabase
        .from('client_feedback')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFeedbacks(data || []);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      toast({
        title: "Error",
        description: "Failed to load feedback",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateNotes = async (feedbackId: string, notes: string) => {
    try {
      const { error } = await supabase
        .from('client_feedback')
        .update({ notes })
        .eq('id', feedbackId);

      if (error) throw error;

      toast({
        title: "Notes Updated",
        description: "Feedback notes have been saved",
      });

      fetchFeedback();
    } catch (error) {
      console.error("Error updating notes:", error);
      toast({
        title: "Error",
        description: "Failed to update notes",
        variant: "destructive",
      });
    }
  };

  const markAsProcessed = async (feedbackId: string) => {
    try {
      const { error } = await supabase
        .from('client_feedback')
        .update({ 
          is_processed: true,
          processed_at: new Date().toISOString()
        })
        .eq('id', feedbackId);

      if (error) throw error;

      toast({
        title: "Marked as Processed",
        description: "Feedback has been marked as processed",
      });

      fetchFeedback();
    } catch (error) {
      console.error("Error marking as processed:", error);
      toast({
        title: "Error",
        description: "Failed to mark as processed",
        variant: "destructive",
      });
    }
  };

  const markReviewSent = async (feedbackId: string) => {
    try {
      const { error } = await supabase
        .from('client_feedback')
        .update({ 
          google_review_sent: true,
          google_review_sent_at: new Date().toISOString()
        })
        .eq('id', feedbackId);

      if (error) throw error;

      toast({
        title: "Review Link Sent",
        description: "Marked as Google review link sent",
      });

      fetchFeedback();
    } catch (error) {
      console.error("Error marking review sent:", error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return <div className="p-8 text-center">Loading feedback...</div>;
  }

  const stats = {
    total: feedbacks.length,
    avgRating: feedbacks.length > 0 
      ? (feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length).toFixed(1)
      : "0",
    willingToReview: feedbacks.filter(f => f.willing_to_review).length,
    fiveStars: feedbacks.filter(f => f.rating === 5).length,
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.avgRating} ⭐</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              5-Star Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.fiveStars}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Willing to Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.willingToReview}</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">All Feedback</h3>
        {feedbacks.map((feedback) => (
          <Card key={feedback.id}>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    {renderStars(feedback.rating)}
                    <Badge variant={feedback.is_processed ? "secondary" : "default"}>
                      {feedback.is_processed ? "Processed" : "New"}
                    </Badge>
                    {feedback.willing_to_review && (
                      <Badge variant="outline" className="bg-green-50">
                        Willing to Review
                      </Badge>
                    )}
                    {feedback.google_review_sent && (
                      <Badge variant="outline" className="bg-blue-50">
                        Review Link Sent
                      </Badge>
                    )}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(feedback.created_at), { addSuffix: true })}
                  </div>

                  {feedback.client_name && (
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4" />
                      {feedback.client_name}
                    </div>
                  )}

                  {feedback.client_email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${feedback.client_email}`} className="text-primary hover:underline">
                        {feedback.client_email}
                      </a>
                    </div>
                  )}

                  {feedback.client_phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${feedback.client_phone}`} className="text-primary hover:underline">
                        {feedback.client_phone}
                      </a>
                    </div>
                  )}

                  {feedback.feedback_text && (
                    <div className="flex gap-2 p-3 bg-secondary/20 rounded-lg">
                      <MessageSquare className="w-4 h-4 mt-1 flex-shrink-0" />
                      <p className="text-sm">{feedback.feedback_text}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Admin Notes:</label>
                    <Textarea
                      value={editingNotes[feedback.id] ?? feedback.notes ?? ""}
                      onChange={(e) =>
                        setEditingNotes({ ...editingNotes, [feedback.id]: e.target.value })
                      }
                      placeholder="Add notes about this feedback..."
                      rows={2}
                    />
                    {editingNotes[feedback.id] !== undefined && 
                     editingNotes[feedback.id] !== (feedback.notes ?? "") && (
                      <Button
                        size="sm"
                        onClick={() => updateNotes(feedback.id, editingNotes[feedback.id])}
                      >
                        Save Notes
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  {!feedback.is_processed && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => markAsProcessed(feedback.id)}
                    >
                      Mark Processed
                    </Button>
                  )}

                  {feedback.willing_to_review && !feedback.google_review_sent && (
                    <>
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => {
                          window.open(GOOGLE_REVIEW_LINK, '_blank');
                          markReviewSent(feedback.id);
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Send Review Link
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {feedbacks.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              No feedback received yet
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FeedbackManagement;