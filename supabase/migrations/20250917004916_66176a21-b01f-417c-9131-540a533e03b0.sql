-- Critical Security Fixes: Phase 1 (Corrected)
-- Add user_id columns for proper access control and update RLS policies

-- 1. Add user_id to assessment_sessions for user-level access control
ALTER TABLE public.assessment_sessions 
ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- 2. Add user_id to assessment_contacts for proper linking
ALTER TABLE public.assessment_contacts 
ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- 3. Add user_id to form_submissions for audit trail
ALTER TABLE public.form_submissions 
ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- 4. Update assessment_sessions RLS policies for user-level access
DROP POLICY IF EXISTS "Public cannot read assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Admins can view all assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Service role can insert assessment sessions" ON public.assessment_sessions;

-- New secure policies for assessment_sessions
CREATE POLICY "Users can view own assessment sessions" 
ON public.assessment_sessions 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all assessment sessions" 
ON public.assessment_sessions 
FOR SELECT 
TO authenticated
USING (is_admin_user());

CREATE POLICY "Service role can insert assessment sessions" 
ON public.assessment_sessions 
FOR INSERT 
TO service_role
WITH CHECK (true);

CREATE POLICY "Users can create own assessment sessions"
ON public.assessment_sessions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 5. Update assessment_contacts RLS policies
DROP POLICY IF EXISTS "Public cannot read assessment contacts" ON public.assessment_contacts;
DROP POLICY IF EXISTS "Admins can view all assessment contacts" ON public.assessment_contacts;
DROP POLICY IF EXISTS "Service role can insert assessment contacts" ON public.assessment_contacts;
DROP POLICY IF EXISTS "Admins can update assessment contacts" ON public.assessment_contacts;

-- New secure policies for assessment_contacts  
CREATE POLICY "Users can view own assessment contacts"
ON public.assessment_contacts
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all assessment contacts"
ON public.assessment_contacts
FOR SELECT
TO authenticated  
USING (is_admin_user());

CREATE POLICY "Service role can insert assessment contacts"
ON public.assessment_contacts
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Users can create own assessment contacts"
ON public.assessment_contacts
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can update assessment contacts"
ON public.assessment_contacts
FOR UPDATE
TO authenticated
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- 6. Enhance chat_sessions security with time-based validation
DROP POLICY IF EXISTS "Users can read their own authenticated chat sessions" ON public.chat_sessions;

CREATE POLICY "Users can read own chat sessions with session validation"
ON public.chat_sessions
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id AND 
  (created_at > now() - interval '24 hours' OR last_activity > now() - interval '1 hour')
);

-- 7. Create audit logging function for sensitive data modifications
CREATE OR REPLACE FUNCTION public.log_sensitive_data_modifications()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.analytics_events (
    event_type,
    event_data,
    ip_address,
    session_id
  ) VALUES (
    'sensitive_data_modification',
    jsonb_build_object(
      'table_name', TG_TABLE_NAME,
      'operation', TG_OP,
      'user_id', auth.uid(),
      'target_user_id', COALESCE(NEW.user_id, OLD.user_id),
      'record_id', COALESCE(NEW.id, OLD.id),
      'timestamp', NOW()
    ),
    inet_client_addr(),
    current_setting('request.jwt.claims', true)::json->>'session_id'
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- 8. Add audit triggers for data modifications (INSERT/UPDATE only)
CREATE TRIGGER log_assessment_sessions_modifications
  AFTER INSERT OR UPDATE ON public.assessment_sessions
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_data_modifications();

CREATE TRIGGER log_assessment_contacts_modifications  
  AFTER INSERT OR UPDATE ON public.assessment_contacts
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_data_modifications();

CREATE TRIGGER log_form_submissions_modifications
  AFTER INSERT OR UPDATE ON public.form_submissions  
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_data_modifications();