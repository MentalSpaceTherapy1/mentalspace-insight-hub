-- Create table for storing crawled site content
CREATE TABLE IF NOT EXISTS public.site_content_cache (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url text NOT NULL UNIQUE,
  full_url text NOT NULL,
  title text NOT NULL,
  description text,
  content text NOT NULL,
  last_crawled timestamp with time zone NOT NULL DEFAULT now(),
  word_count integer DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_content_cache ENABLE ROW LEVEL SECURITY;

-- Create policies for site content cache
CREATE POLICY "Anyone can read site content cache" 
ON public.site_content_cache 
FOR SELECT 
USING (true);

CREATE POLICY "Service role can manage site content cache" 
ON public.site_content_cache 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create index for faster searches
CREATE INDEX idx_site_content_cache_url ON public.site_content_cache(url);
CREATE INDEX idx_site_content_cache_last_crawled ON public.site_content_cache(last_crawled DESC);

-- Add trigger for updated_at
CREATE TRIGGER update_site_content_cache_updated_at
  BEFORE UPDATE ON public.site_content_cache
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();