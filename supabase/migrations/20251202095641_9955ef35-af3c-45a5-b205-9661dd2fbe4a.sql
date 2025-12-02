-- Create client feedback table
CREATE TABLE IF NOT EXISTS public.client_feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT,
  client_email TEXT,
  client_phone TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  feedback_text TEXT,
  willing_to_review BOOLEAN NOT NULL DEFAULT false,
  google_review_sent BOOLEAN NOT NULL DEFAULT false,
  google_review_sent_at TIMESTAMP WITH TIME ZONE,
  is_processed BOOLEAN NOT NULL DEFAULT false,
  processed_at TIMESTAMP WITH TIME ZONE,
  processed_by UUID REFERENCES public.admin_profiles(id),
  notes TEXT,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.client_feedback ENABLE ROW LEVEL SECURITY;

-- Admins can view all feedback
CREATE POLICY "Admins can view client feedback"
ON public.client_feedback
FOR SELECT
USING (is_admin_user());

-- Admins can update feedback
CREATE POLICY "Admins can update client feedback"
ON public.client_feedback
FOR UPDATE
USING (is_admin_user());

-- Service role can insert feedback
CREATE POLICY "Service role can insert client feedback"
ON public.client_feedback
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

-- Nobody can delete feedback
CREATE POLICY "Nobody can delete client feedback"
ON public.client_feedback
FOR DELETE
USING (false);

-- Create index for performance
CREATE INDEX idx_client_feedback_rating ON public.client_feedback(rating);
CREATE INDEX idx_client_feedback_created_at ON public.client_feedback(created_at DESC);
CREATE INDEX idx_client_feedback_is_processed ON public.client_feedback(is_processed);

-- Add trigger for updated_at
CREATE TRIGGER update_client_feedback_updated_at
BEFORE UPDATE ON public.client_feedback
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();