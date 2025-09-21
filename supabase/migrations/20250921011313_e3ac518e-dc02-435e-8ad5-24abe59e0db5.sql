-- Fix Critical Security Issues from Security Scan (Corrected)

-- 1. Fix Admin Email Exposure - Strengthen admin_profiles access
DROP POLICY IF EXISTS "admin_profiles_deny_all_direct_access" ON public.admin_profiles;
DROP POLICY IF EXISTS "admin_profiles_strict_access_only" ON public.admin_profiles;

CREATE POLICY "admin_profiles_ultra_secure_access" 
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
DROP POLICY IF EXISTS "assessment_sessions_ultra_secure_access" ON public.assessment_sessions;
DROP POLICY IF EXISTS "assessment_sessions_secure_insert_only" ON public.assessment_sessions;

CREATE POLICY "assessment_sessions_max_security_access" 
ON public.assessment_sessions 
FOR SELECT 
USING (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL) 
  AND (is_encrypted = true) -- Force encrypted data only
  AND (created_at > NOW() - INTERVAL '2 years') -- Time-based validation
);

CREATE POLICY "assessment_sessions_encrypted_insert_only" 
ON public.assessment_sessions 
FOR INSERT 
WITH CHECK (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL)
  AND (is_encrypted = true) -- Force encryption for new assessments
  AND check_assessment_rate_limit()
);

-- Admin access only through secure function
CREATE OR REPLACE FUNCTION public.get_assessment_metadata_admin(session_limit integer DEFAULT 50)
RETURNS TABLE(id uuid, session_id text, assessment_type assessment_type, created_at timestamp with time zone, is_encrypted boolean)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only verified admins
  IF NOT validate_admin_access_with_limits('view_assessment_metadata') THEN
    RAISE EXCEPTION 'Admin access required for assessment metadata';
  END IF;
  
  -- Return metadata only (no actual answers/data)
  RETURN QUERY
  SELECT 
    a.id,
    a.session_id,
    a.assessment_type,
    a.created_at,
    a.is_encrypted
  FROM assessment_sessions a
  ORDER BY a.created_at DESC
  LIMIT session_limit;
END;
$$;

-- 3. Lock down User Contact Data from Assessment Contacts
DROP POLICY IF EXISTS "assessment_contacts_secure_owner_access" ON public.assessment_contacts;
DROP POLICY IF EXISTS "Admins can view all assessment contacts" ON public.assessment_contacts;
DROP POLICY IF EXISTS "assessment_contacts_no_direct_access" ON public.assessment_contacts;

CREATE POLICY "assessment_contacts_zero_access" 
ON public.assessment_contacts 
FOR SELECT 
USING (false);

-- Secure function for contact data (no personal data exposed)
CREATE OR REPLACE FUNCTION public.get_contact_status_only(contact_id uuid)
RETURNS TABLE(id uuid, is_processed boolean, processed_at timestamp with time zone)
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
  
  -- Only owner can check status
  IF NOT (auth.uid() = contact_user_id AND auth.uid() IS NOT NULL) THEN
    RAISE EXCEPTION 'Unauthorized access to contact status';
  END IF;
  
  -- Log access
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'contact_status_check',
    'assessment_contacts',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'contact_id', contact_id,
      'timestamp', NOW()
    )
  );
  
  -- Return status only (no contact_data field)
  RETURN QUERY
  SELECT 
    ac.id,
    ac.is_processed,
    ac.processed_at
  FROM assessment_contacts ac
  WHERE ac.id = contact_id;
END;
$$;

-- 4. Secure Form Submissions Data
DROP POLICY IF EXISTS "Admins can view all form submissions" ON public.form_submissions;
DROP POLICY IF EXISTS "form_submissions_no_direct_access" ON public.form_submissions;

CREATE POLICY "form_submissions_zero_direct_access" 
ON public.form_submissions 
FOR SELECT 
USING (false);

-- Secure function for form submission metadata only
CREATE OR REPLACE FUNCTION public.get_form_submission_stats()
RETURNS TABLE(form_type form_type, submission_count bigint, last_submission timestamp with time zone)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only super admins can access aggregated stats
  IF NOT validate_admin_access_with_limits('view_form_stats_secure') THEN
    RAISE EXCEPTION 'Super admin access required for form statistics';
  END IF;
  
  -- Return aggregated data only (no personal form_data)
  RETURN QUERY
  SELECT 
    fs.form_type,
    COUNT(*)::bigint as submission_count,
    MAX(fs.submission_date) as last_submission
  FROM form_submissions fs
  GROUP BY fs.form_type;
END;
$$;

-- 5. Lock Down Chat Messages and User Context
DROP POLICY IF EXISTS "Users can read own chat sessions with session validation" ON public.chat_sessions;
DROP POLICY IF EXISTS "Admins can view all chat sessions for moderation" ON public.chat_sessions;
DROP POLICY IF EXISTS "chat_sessions_no_admin_access" ON public.chat_sessions;
DROP POLICY IF EXISTS "chat_sessions_owner_only_strict" ON public.chat_sessions;

CREATE POLICY "chat_sessions_maximum_security" 
ON public.chat_sessions 
FOR SELECT 
USING (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL)
  AND (last_activity > NOW() - INTERVAL '2 hours') -- Strict time limit
  AND (ip_address = inet_client_addr() OR ip_address IS NULL) -- IP validation
);

CREATE POLICY "chat_sessions_strict_ownership" 
ON public.chat_sessions 
FOR UPDATE 
USING (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL)
  AND (last_activity > NOW() - INTERVAL '2 hours')
);

CREATE POLICY "chat_sessions_no_admin_view" 
ON public.chat_sessions 
FOR ALL
TO authenticated
USING (false);

-- Create audit function for chat access
CREATE OR REPLACE FUNCTION public.log_chat_access(session_id text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'chat_session_access',
    'chat_sessions',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'session_id', session_id,
      'timestamp', NOW(),
      'severity', 'MEDIUM'
    )
  );
END;
$$;

-- Enhanced data retention and cleanup
CREATE OR REPLACE FUNCTION public.secure_data_cleanup()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Archive assessments older than 1 year
  UPDATE public.assessment_sessions 
  SET 
    answers = '{"archived": true, "date": "' || NOW()::text || '"}'::jsonb,
    additional_info = '{"archived": true}'::jsonb,
    encrypted_answers = 'archived_secure',
    encrypted_additional_info = 'archived_secure',
    is_encrypted = true
  WHERE created_at < NOW() - INTERVAL '1 year'
    AND (is_encrypted = false OR is_encrypted IS NULL);
    
  -- Remove old chat sessions (7 days max)
  DELETE FROM public.chat_sessions 
  WHERE last_activity < NOW() - INTERVAL '7 days';
  
  -- Clean security logs older than 3 months
  DELETE FROM public.security_audit_log 
  WHERE timestamp < NOW() - INTERVAL '3 months';
  
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    details
  ) VALUES (
    'secure_data_cleanup_completed',
    'system_maintenance',
    NULL,
    jsonb_build_object(
      'timestamp', NOW(),
      'automated', true
    )
  );
END;
$$;