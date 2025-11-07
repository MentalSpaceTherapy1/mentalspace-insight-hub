-- Add spam tracking columns to form_submissions table
ALTER TABLE public.form_submissions 
ADD COLUMN IF NOT EXISTS is_blocked BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS blocked_reason TEXT,
ADD COLUMN IF NOT EXISTS spam_score INTEGER DEFAULT 0;

-- Create index for spam queries
CREATE INDEX IF NOT EXISTS idx_form_submissions_spam ON public.form_submissions(is_blocked, created_at) WHERE is_blocked = true;

-- Add comment
COMMENT ON COLUMN public.form_submissions.is_blocked IS 'Whether this submission was blocked as spam';
COMMENT ON COLUMN public.form_submissions.blocked_reason IS 'Reason for blocking: honeypot, timing, rate_limit, content';
COMMENT ON COLUMN public.form_submissions.spam_score IS 'Spam score calculated by content analysis';