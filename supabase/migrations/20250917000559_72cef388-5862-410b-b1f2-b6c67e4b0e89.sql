-- Comprehensive Security Fix Migration
-- Fix all identified security vulnerabilities

-- 1. Fix form_submissions table policies
DROP POLICY IF EXISTS "Rate limited form submissions" ON public.form_submissions;

-- Recreate with service role insert policy
CREATE POLICY "Service role can insert form submissions"
ON public.form_submissions
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

-- Keep existing admin read policy
-- "Admins can view all form submissions" already exists and is correct
-- "Public cannot read form submissions" already exists and is correct
-- "Admins can update form submissions" already exists and is correct
-- "Nobody can delete form submissions" already exists and is correct

-- 2. Fix assessment_contacts table policies  
DROP POLICY IF EXISTS "Anyone can insert assessment contacts" ON public.assessment_contacts;

-- Replace with service role only insert
CREATE POLICY "Service role can insert assessment contacts"
ON public.assessment_contacts  
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

-- Keep existing policies:
-- "Public cannot read assessment contacts" already exists and is correct
-- "Admins can view all assessment contacts" already exists and is correct
-- "Admins can update assessment contacts" already exists and is correct
-- "Nobody can delete assessment contacts" already exists and is correct

-- 3. Fix analytics_events table policies
DROP POLICY IF EXISTS "Anyone can insert analytics events" ON public.analytics_events;

-- Replace with service role only insert
CREATE POLICY "Service role can insert analytics events"
ON public.analytics_events
FOR INSERT  
WITH CHECK (auth.role() = 'service_role');

-- Keep existing admin read policy
-- "Admins can view analytics events" already exists and is correct

-- 4. Fix chat_sessions policies - remove confusing anonymous policy
DROP POLICY IF EXISTS "Anonymous users cannot access chat sessions" ON public.chat_sessions;

-- Keep other existing policies which are correctly user-scoped:
-- "Users can read their own authenticated chat sessions" 
-- "Users can update their own authenticated chat sessions"
-- "Users can create their own chat sessions"
-- "Admins can view all chat sessions for moderation"
-- "Rate limited chat session creation per user"

-- 5. Fix assessment_sessions policies - ensure service role insert
DROP POLICY IF EXISTS "Rate limit assessment sessions" ON public.assessment_sessions;

-- Replace with service role insert policy  
CREATE POLICY "Service role can insert assessment sessions"
ON public.assessment_sessions
FOR INSERT
WITH CHECK (auth.role() = 'service_role');

-- Keep existing policies:
-- "Public cannot read assessment sessions" already exists and is correct
-- "Admins can view all assessment sessions" already exists and is correct
-- "Nobody can delete assessment sessions" already exists and is correct

-- 6. Add comprehensive logging trigger for sensitive data access
CREATE OR REPLACE FUNCTION public.log_sensitive_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.analytics_events (
    event_type,
    event_data,
    ip_address,
    session_id
  ) VALUES (
    'sensitive_data_access',
    jsonb_build_object(
      'table_name', TG_TABLE_NAME,
      'operation', TG_OP,
      'user_id', auth.uid(),
      'timestamp', NOW()
    ),
    inet_client_addr(),
    current_setting('request.jwt.claims', true)::json->>'session_id'
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Apply logging triggers to sensitive tables
CREATE TRIGGER log_form_submissions_access
  AFTER SELECT ON public.form_submissions
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();

CREATE TRIGGER log_assessment_contacts_access  
  AFTER SELECT ON public.assessment_contacts
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();

CREATE TRIGGER log_chat_sessions_access
  AFTER SELECT ON public.chat_sessions  
  FOR EACH ROW EXECUTE FUNCTION public.log_chat_session_access();

-- 7. Ensure security audit logging
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
CREATE POLICY "Only admins can view security audit log"
ON public.security_audit_log  
FOR SELECT
USING (is_admin_user());

-- System can log security events
CREATE POLICY "System can log security events"  
ON public.security_audit_log
FOR INSERT
WITH CHECK (true);