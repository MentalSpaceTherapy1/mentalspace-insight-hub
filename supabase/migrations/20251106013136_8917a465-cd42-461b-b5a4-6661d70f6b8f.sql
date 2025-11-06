-- Add missing columns to existing blog_posts table
ALTER TABLE public.blog_posts 
  ADD COLUMN IF NOT EXISTS scheduled_for TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS category TEXT,
  ADD COLUMN IF NOT EXISTS ai_generated BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS generation_prompt TEXT,
  ADD COLUMN IF NOT EXISTS generation_error TEXT,
  ADD COLUMN IF NOT EXISTS author TEXT DEFAULT 'CHC Therapy Team';

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_scheduled ON public.blog_posts(scheduled_for);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.blog_posts(published_at DESC);

-- Update RLS policies (drop existing if they exist)
DROP POLICY IF EXISTS "Public can view published blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins can manage all blog posts" ON public.blog_posts;

-- Allow public read access to published posts
CREATE POLICY "Public can view published blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (status = 'published'::content_status);

-- Only admins can manage posts
CREATE POLICY "Admins can manage all blog posts"
  ON public.blog_posts
  FOR ALL
  USING (public.is_admin());