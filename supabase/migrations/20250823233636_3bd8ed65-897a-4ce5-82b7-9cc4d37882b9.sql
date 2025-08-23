-- Security Fix: Comprehensive RLS Policy Updates
-- This migration addresses critical security vulnerabilities identified in the security scan

-- 1. Fix assessment_contacts table - Add explicit deny policy for non-admins
DROP POLICY IF EXISTS "Public cannot read assessment contacts" ON public.assessment_contacts;
CREATE POLICY "Public cannot read assessment contacts" 
ON public.assessment_contacts 
FOR SELECT 
TO anon, authenticated
USING (false);

-- Ensure only admins can read assessment contacts (strengthen existing policy)
DROP POLICY IF EXISTS "Admins can view all assessment contacts" ON public.assessment_contacts;
CREATE POLICY "Admins can view all assessment contacts" 
ON public.assessment_contacts 
FOR SELECT 
TO authenticated
USING (is_admin_user());

-- 2. Fix assessment_sessions table - Add comprehensive protection
DROP POLICY IF EXISTS "Public cannot read assessment sessions" ON public.assessment_sessions;
CREATE POLICY "Public cannot read assessment sessions" 
ON public.assessment_sessions 
FOR SELECT 
TO anon, authenticated
USING (false);

-- Strengthen admin access policy for assessment sessions
DROP POLICY IF EXISTS "Admins can view all assessment sessions" ON public.assessment_sessions;
CREATE POLICY "Admins can view all assessment sessions" 
ON public.assessment_sessions 
FOR SELECT 
TO authenticated
USING (is_admin_user());

-- 3. Fix form_submissions table - Add explicit protection
DROP POLICY IF EXISTS "Public cannot read form submissions" ON public.form_submissions;
CREATE POLICY "Public cannot read form submissions" 
ON public.form_submissions 
FOR SELECT 
TO anon, authenticated
USING (false);

-- Strengthen existing admin policy
DROP POLICY IF EXISTS "Admins can view all form submissions" ON public.form_submissions;
CREATE POLICY "Admins can view all form submissions" 
ON public.form_submissions 
FOR SELECT 
TO authenticated
USING (is_admin_user());

-- 4. Fix chat_safety_logs table - Add explicit protection  
DROP POLICY IF EXISTS "Public cannot read safety logs" ON public.chat_safety_logs;
CREATE POLICY "Public cannot read safety logs" 
ON public.chat_safety_logs 
FOR SELECT 
TO anon, authenticated
USING (false);

-- Strengthen existing admin policy
DROP POLICY IF EXISTS "Admins can view all safety logs" ON public.chat_safety_logs;
CREATE POLICY "Admins can view all safety logs" 
ON public.chat_safety_logs 
FOR SELECT 
TO authenticated
USING (is_admin_user());

-- 5. Strengthen admin_profiles protection
DROP POLICY IF EXISTS "Public cannot read admin profiles" ON public.admin_profiles;
CREATE POLICY "Public cannot read admin profiles" 
ON public.admin_profiles 
FOR SELECT 
TO anon, authenticated
USING (false);

-- Update existing admin policy to be more explicit
DROP POLICY IF EXISTS "Only verified admins can access admin profiles" ON public.admin_profiles;
CREATE POLICY "Only verified admins can read admin profiles" 
ON public.admin_profiles 
FOR SELECT 
TO authenticated
USING (is_admin_user());

CREATE POLICY "Only verified admins can insert admin profiles" 
ON public.admin_profiles 
FOR INSERT 
TO authenticated
WITH CHECK (is_admin_user());

CREATE POLICY "Only verified admins can update admin profiles" 
ON public.admin_profiles 
FOR UPDATE 
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- 6. Add additional security: Prevent DELETE operations on sensitive tables
-- (These tables should retain data for audit purposes)

-- Explicitly deny DELETE for assessment_contacts
DROP POLICY IF EXISTS "Nobody can delete assessment contacts" ON public.assessment_contacts;
CREATE POLICY "Nobody can delete assessment contacts" 
ON public.assessment_contacts 
FOR DELETE 
TO anon, authenticated
USING (false);

-- Explicitly deny DELETE for assessment_sessions  
DROP POLICY IF EXISTS "Nobody can delete assessment sessions" ON public.assessment_sessions;
CREATE POLICY "Nobody can delete assessment sessions" 
ON public.assessment_sessions 
FOR DELETE 
TO anon, authenticated
USING (false);

-- Explicitly deny DELETE for form_submissions
DROP POLICY IF EXISTS "Nobody can delete form submissions" ON public.form_submissions;  
CREATE POLICY "Nobody can delete form submissions" 
ON public.form_submissions 
FOR DELETE 
TO anon, authenticated
USING (false);

-- 7. Verify RLS is enabled on all tables (safety check)
ALTER TABLE public.assessment_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_sessions ENABLE ROW LEVEL SECURITY;  
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_safety_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- 8. Create audit log for security events
CREATE TABLE IF NOT EXISTS public.security_audit_log (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type text NOT NULL,
    table_name text NOT NULL,
    user_id uuid,
    ip_address inet,
    timestamp timestamptz DEFAULT now(),
    details jsonb
);

ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view security audit logs
CREATE POLICY "Only admins can view security audit log" 
ON public.security_audit_log 
FOR SELECT 
TO authenticated
USING (is_admin_user());

-- System can insert security events
CREATE POLICY "System can log security events" 
ON public.security_audit_log 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);