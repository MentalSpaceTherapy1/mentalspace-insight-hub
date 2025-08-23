-- Fix security issues by adding proper RLS policies

-- 1. Secure analytics_events table - only admins should access user tracking data
CREATE POLICY "Admins can view analytics events" 
ON public.analytics_events 
FOR SELECT 
USING (is_admin_user());

-- 2. Secure blog_posts table - public can only see published posts, admins see all
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (status = 'published' AND published_at IS NOT NULL);

CREATE POLICY "Admins can view all blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (is_admin_user());

CREATE POLICY "Admins can manage blog posts" 
ON public.blog_posts 
FOR ALL 
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- 3. Secure resources table - public can only see published resources, admins see all
CREATE POLICY "Anyone can view published resources" 
ON public.resources 
FOR SELECT 
USING (status = 'published' AND published_at IS NOT NULL);

CREATE POLICY "Admins can view all resources" 
ON public.resources 
FOR SELECT 
USING (is_admin_user());

CREATE POLICY "Admins can manage resources" 
ON public.resources 
FOR ALL 
USING (is_admin_user())
WITH CHECK (is_admin_user());