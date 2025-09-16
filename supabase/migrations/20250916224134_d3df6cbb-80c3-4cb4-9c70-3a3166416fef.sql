-- Fix site_content_cache table security issue
-- Remove the overly permissive policy that allows anyone to read the cache
DROP POLICY IF EXISTS "Anyone can read site content cache" ON public.site_content_cache;

-- Add a more restrictive policy - only allow service role to read/write
-- This prevents competitors from scraping the cached content
CREATE POLICY "Only service role can access site content cache" 
ON public.site_content_cache 
FOR ALL
USING (auth.jwt() IS NULL OR auth.role() = 'service_role')
WITH CHECK (auth.jwt() IS NULL OR auth.role() = 'service_role');

-- Also remove the overly permissive management policy
DROP POLICY IF EXISTS "Service role can manage site content cache" ON public.site_content_cache;