-- Comprehensive Security Fix Migration - Corrected
-- Fix all identified security vulnerabilities

-- 1. Fix form_submissions table policies
DROP POLICY IF EXISTS "Rate limited form submissions" ON public.form_submissions;

-- Recreate with service role insert policy
CREATE POLICY "Service role can insert form submissions"
ON public.form_submissions
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

-- 2. Fix assessment_contacts table policies  
DROP POLICY IF EXISTS "Anyone can insert assessment contacts" ON public.assessment_contacts;

-- Replace with service role only insert
CREATE POLICY "Service role can insert assessment contacts"
ON public.assessment_contacts  
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

-- 3. Fix analytics_events table policies
DROP POLICY IF EXISTS "Anyone can insert analytics events" ON public.analytics_events;

-- Replace with service role only insert
CREATE POLICY "Service role can insert analytics events"
ON public.analytics_events
FOR INSERT  
WITH CHECK (auth.role() = 'service_role');

-- 4. Fix chat_sessions policies - remove confusing anonymous policy
DROP POLICY IF EXISTS "Anonymous users cannot access chat sessions" ON public.chat_sessions;

-- 5. Fix assessment_sessions policies - ensure service role insert
DROP POLICY IF EXISTS "Rate limit assessment sessions" ON public.assessment_sessions;

-- Replace with service role insert policy  
CREATE POLICY "Service role can insert assessment sessions"
ON public.assessment_sessions
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

-- 6. Create chat session access logging function (corrected)
CREATE OR REPLACE FUNCTION public.log_chat_session_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Log access to chat sessions for security monitoring
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    TG_OP || '_chat_session',
    'chat_sessions',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'session_id', COALESCE(NEW.session_id, OLD.session_id),
      'timestamp', now()
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- 7. Ensure security audit logging table exists
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

-- Only admins can view security audit log
DROP POLICY IF EXISTS "Only admins can view security audit log" ON public.security_audit_log;
CREATE POLICY "Only admins can view security audit log"
ON public.security_audit_log  
FOR SELECT
USING (is_admin_user());

-- System can log security events
DROP POLICY IF EXISTS "System can log security events" ON public.security_audit_log;
CREATE POLICY "System can log security events"  
ON public.security_audit_log
FOR INSERT
WITH CHECK (true);