-- Fix Critical Security Issues from Security Scan

-- 1. Fix Admin Email Exposure - Strengthen admin_profiles access
DROP POLICY IF EXISTS "admin_profiles_deny_all_direct_access" ON public.admin_profiles;

CREATE POLICY "admin_profiles_strict_access_only" 
ON public.admin_profiles 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Create secure function to get minimal admin info (no emails exposed)
CREATE OR REPLACE FUNCTION public.get_admin_minimal_info(target_user_id uuid DEFAULT NULL::uuid)
RETURNS TABLE(id uuid, user_id uuid, role admin_role, is_active boolean, created_at timestamp with time zone)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only super admins can access even minimal admin info
  IF NOT EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() 
    AND role = 'super_admin' 
    AND is_active = true
  ) THEN
    RAISE EXCEPTION 'Unauthorized access to admin information';
  END IF;
  
  -- Log access attempt
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'admin_minimal_info_access',
    'admin_profiles',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'target_user_id', target_user_id,
      'timestamp', NOW(),
      'severity', 'HIGH'
    )
  );
  
  -- Return minimal info only (no email/full_name)
  RETURN QUERY
  SELECT 
    ap.id,
    ap.user_id,
    ap.role,
    ap.is_active,
    ap.created_at
  FROM admin_profiles ap
  WHERE ap.user_id = COALESCE(target_user_id, auth.uid())
    AND ap.is_active = true;
END;
$$;

-- 2. Strengthen Mental Health Assessment Data Protection
DROP POLICY IF EXISTS "assessment_encrypted_owner_access_only" ON public.assessment_sessions;
DROP POLICY IF EXISTS "assessment_owner_insert_only" ON public.assessment_sessions;
DROP POLICY IF EXISTS "admin_assessment_access_with_validation" ON public.assessment_sessions;

CREATE POLICY "assessment_sessions_ultra_secure_access" 
ON public.assessment_sessions 
FOR SELECT 
USING (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL) 
  AND (
    -- Only encrypted data OR admin with enhanced validation
    (is_encrypted = true) 
    OR validate_admin_access_with_limits('view_critical_assessment_data')
  )
  -- Additional time-based validation
  AND (created_at > NOW() - INTERVAL '2 years')
);

CREATE POLICY "assessment_sessions_secure_insert_only" 
ON public.assessment_sessions 
FOR INSERT 
WITH CHECK (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL)
  -- Force encryption for new assessments
  AND (is_encrypted = true)
  -- Validate rate limiting
  AND check_assessment_rate_limit()
);

-- 3. Lock down User Contact Data from Assessment Contacts
DROP POLICY IF EXISTS "assessment_contacts_secure_owner_access" ON public.assessment_contacts;
DROP POLICY IF EXISTS "Admins can view all assessment contacts" ON public.assessment_contacts;

CREATE POLICY "assessment_contacts_no_direct_access" 
ON public.assessment_contacts 
FOR SELECT 
USING (false);

-- Create secure function for contact data access
CREATE OR REPLACE FUNCTION public.get_secure_contact_data(contact_id uuid)
RETURNS TABLE(id uuid, assessment_session_id uuid, is_processed boolean, notes text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  contact_user_id uuid;
BEGIN
  -- Get the user_id for this contact
  SELECT user_id INTO contact_user_id
  FROM public.assessment_contacts
  WHERE assessment_contacts.id = contact_id;
  
  -- Only owner or validated admin can access
  IF NOT (
    (auth.uid() = contact_user_id AND auth.uid() IS NOT NULL) 
    OR validate_admin_access_with_limits('view_contact_data_secure')
  ) THEN
    RAISE EXCEPTION 'Unauthorized access to contact data';
  END IF;
  
  -- Log access
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'secure_contact_data_access',
    'assessment_contacts',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'contact_id', contact_id,
      'contact_user_id', contact_user_id,
      'timestamp', NOW(),
      'severity', 'HIGH'
    )
  );
  
  -- Return minimal data (no personal contact_data field)
  RETURN QUERY
  SELECT 
    ac.id,
    ac.assessment_session_id,
    ac.is_processed,
    ac.notes
  FROM assessment_contacts ac
  WHERE ac.id = contact_id;
END;
$$;

-- 4. Secure Form Submissions Data
DROP POLICY IF EXISTS "Admins can view all form submissions" ON public.form_submissions;

CREATE POLICY "form_submissions_no_direct_access" 
ON public.form_submissions 
FOR SELECT 
USING (false);

-- Create secure function for form submission access
CREATE OR REPLACE FUNCTION public.get_secure_form_submissions()
RETURNS TABLE(id uuid, form_type form_type, submission_date timestamp with time zone, is_processed boolean)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only super admins can access form submission metadata
  IF NOT validate_admin_access_with_limits('view_form_submissions_secure') THEN
    RAISE EXCEPTION 'Unauthorized access to form submissions';
  END IF;
  
  -- Return minimal metadata only (no form_data)
  RETURN QUERY
  SELECT 
    fs.id,
    fs.form_type,
    fs.submission_date,
    fs.is_processed
  FROM form_submissions fs
  ORDER BY fs.submission_date DESC;
END;
$$;

-- 5. Lock Down Chat Messages and User Context
DROP POLICY IF EXISTS "Users can read own chat sessions with session validation" ON public.chat_sessions;
DROP POLICY IF EXISTS "Admins can view all chat sessions for moderation" ON public.chat_sessions;

CREATE POLICY "chat_sessions_owner_only_strict" 
ON public.chat_sessions 
FOR SELECT 
USING (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL)
  -- Only recent sessions (max 24 hours)
  AND (last_activity > NOW() - INTERVAL '24 hours')
  -- Additional IP validation for security
  AND (ip_address = inet_client_addr() OR ip_address IS NULL)
);

CREATE POLICY "chat_sessions_no_admin_access" 
ON public.chat_sessions 
FOR SELECT 
USING (false);

-- Create secure audit function for chat access
CREATE OR REPLACE FUNCTION public.audit_chat_access(session_id text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log all chat access attempts
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'chat_session_access_attempt',
    'chat_sessions',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'session_id', session_id,
      'timestamp', NOW(),
      'severity', 'MEDIUM'
    )
  );
  
  RETURN true;
END;
$$;

-- Add additional security trigger for chat sessions
CREATE OR REPLACE FUNCTION public.validate_chat_session_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Validate the user can access this session
  IF NOT (NEW.user_id = auth.uid() AND auth.uid() IS NOT NULL) THEN
    RAISE EXCEPTION 'Unauthorized chat session access blocked';
  END IF;
  
  -- Call audit function
  PERFORM public.audit_chat_access(NEW.session_id);
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER chat_sessions_access_validation
  BEFORE SELECT OR UPDATE ON public.chat_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_chat_session_access();

-- Create enhanced data retention and cleanup function
CREATE OR REPLACE FUNCTION public.enhanced_data_retention_cleanup()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Archive old assessment sessions (stronger retention)
  UPDATE public.assessment_sessions 
  SET 
    answers = '{"archived": true, "retention_date": "' || NOW()::text || '"}'::jsonb,
    additional_info = '{"archived": true}'::jsonb,
    encrypted_answers = 'archived_for_security_compliance',
    encrypted_additional_info = 'archived_for_security_compliance',
    is_encrypted = true
  WHERE created_at < NOW() - INTERVAL '1 year'
    AND (is_encrypted = false OR is_encrypted IS NULL);
    
  -- Clean up old chat sessions (keep only 7 days)
  DELETE FROM public.chat_sessions 
  WHERE last_activity < NOW() - INTERVAL '7 days';
  
  -- Clean up old security audit logs (keep 6 months)
  DELETE FROM public.security_audit_log 
  WHERE timestamp < NOW() - INTERVAL '6 months';
  
  -- Log cleanup completion
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    details
  ) VALUES (
    'enhanced_data_retention_cleanup_completed',
    'system_maintenance',
    NULL,
    jsonb_build_object(
      'timestamp', NOW(),
      'automated', true,
      'severity', 'INFO'
    )
  );
END;
$$;