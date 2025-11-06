
-- Create table for staff newsletters
CREATE TABLE public.newsletters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  author_id UUID NOT NULL,
  status content_status NOT NULL DEFAULT 'draft',
  category TEXT DEFAULT 'Staff Updates',
  is_pinned BOOLEAN DEFAULT false
);

-- Enable RLS
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;

-- Anyone can view published newsletters (no auth needed, but page won't be linked publicly)
CREATE POLICY "Anyone can view published newsletters"
ON public.newsletters
FOR SELECT
USING (status = 'published' AND published_at IS NOT NULL);

-- Admins can manage all newsletters
CREATE POLICY "Admins can manage newsletters"
ON public.newsletters
FOR ALL
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- Create trigger for updated_at
CREATE TRIGGER update_newsletters_updated_at
BEFORE UPDATE ON public.newsletters
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries
CREATE INDEX idx_newsletters_status_published ON public.newsletters(status, published_at DESC);
