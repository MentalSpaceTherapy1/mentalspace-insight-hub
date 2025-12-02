import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ClientFeedback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
    willingToReview: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('submit-feedback', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          rating,
          feedback: formData.feedback,
          willingToReview: formData.willingToReview,
        },
      });

      if (error) throw error;

      toast({
        title: "Thank You!",
        description: "Your feedback has been submitted successfully.",
      });

      // Reset form
      setRating(0);
      setFormData({
        name: "",
        email: "",
        phone: "",
        feedback: "",
        willingToReview: false,
      });

      // Navigate to home after 2 seconds
      setTimeout(() => navigate("/"), 2000);
    } catch (error: any) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Share Your Feedback | CHC Therapy"
        description="We'd love to hear about your experience with CHC Therapy. Share your feedback to help us improve our services."
        canonicalUrl="/feedback"
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Share Your Feedback
              </h1>
              <p className="text-lg text-muted-foreground">
                Your feedback helps us provide better care. We'd love to hear about your experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg space-y-6">
              {/* Star Rating */}
              <div className="space-y-2">
                <Label className="text-base">How would you rate your experience?</Label>
                <div className="flex gap-2 justify-center py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-12 h-12 ${
                          star <= (hoveredRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-center text-sm text-muted-foreground">
                    You selected {rating} star{rating !== 1 ? "s" : ""}
                  </p>
                )}
              </div>

              {/* Feedback Text */}
              <div className="space-y-2">
                <Label htmlFor="feedback">Tell us about your experience (optional)</Label>
                <Textarea
                  id="feedback"
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  placeholder="What did you like? What could we improve?"
                  rows={4}
                  className="resize-none"
                />
              </div>

              {/* Contact Info (Optional) */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Share your contact info if you'd like us to follow up (optional)
                </p>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Google Review Permission */}
              <div className="flex items-start space-x-2 p-4 bg-secondary/20 rounded-lg">
                <Checkbox
                  id="willing"
                  checked={formData.willingToReview}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, willingToReview: checked as boolean })
                  }
                />
                <div className="space-y-1">
                  <label
                    htmlFor="willing"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    I'd be willing to leave a Google review
                  </label>
                  <p className="text-xs text-muted-foreground">
                    We may send you a direct link to make it easy
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ClientFeedback;