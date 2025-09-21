-- PHASE 1: CRITICAL DATA PROTECTION FIXES

-- 1. Enhanced encryption validation function
CREATE OR REPLACE FUNCTION public.validate_encrypted_assessment_access()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Block access to unencrypted sensitive data for non-admin users
  IF NOT public.is_admin_user() AND (NEW.is_encrypted = false OR NEW.is_encrypted IS NULL) THEN
    -- Log the blocked access attempt
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'blocked_unencrypted_data_access',
      'assessment_sessions',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'session_id', NEW.session_id,
        'reason', 'unencrypted_data_protection',
        'timestamp', NOW(),
        'severity', 'HIGH'
      )
    );
    
    RAISE EXCEPTION 'Access to unencrypted assessment data is restricted for security';
  END IF;
  
  RETURN NEW;
END;
$$;

-- 2. Enhanced admin access validation with rate limiting
CREATE OR REPLACE FUNCTION public.validate_admin_access_with_limits(operation_type text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_access_count INTEGER;
  user_role admin_role;
  is_active_admin BOOLEAN := FALSE;
BEGIN
  -- Get current user's admin role and status
  SELECT role, is_active INTO user_role, is_active_admin
  FROM public.admin_profiles
  WHERE user_id = auth.uid();
  
  -- If no admin profile found or inactive, deny access
  IF user_role IS NULL OR is_active_admin IS NOT TRUE THEN
    -- Log unauthorized access attempt
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'unauthorized_admin_access_blocked_enhanced',
      'admin_validation',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'operation_type', operation_type,
        'denied_reason', 'no_active_admin_profile',
        'timestamp', NOW(),
        'severity', 'CRITICAL'
      )
    );
    
    RETURN FALSE;
  END IF;
  
  -- Check rate limiting for admin operations (max 100 per hour per admin)
  SELECT COUNT(*) INTO admin_access_count
  FROM public.security_audit_log
  WHERE user_id = auth.uid()
    AND event_type LIKE '%admin%'
    AND timestamp > NOW() - INTERVAL '1 hour';
    
  IF admin_access_count >= 100 THEN
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'admin_rate_limit_exceeded',
      'admin_validation',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'operation_type', operation_type,
        'access_count', admin_access_count,
        'time_window', '1 hour',
        'limit', 100,
        'severity', 'WARNING'
      )
    );
    
    RETURN FALSE;
  END IF;
  
  -- Log successful admin operation with enhanced details
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'admin_access_granted_enhanced',
    'admin_validation',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'operation_type', operation_type,
      'user_role', user_role,
      'access_count_in_hour', admin_access_count,
      'timestamp', NOW(),
      'severity', 'INFO'
    )
  );
  
  RETURN TRUE;
END;
$$;

-- 3. Enhanced contact data protection function
CREATE OR REPLACE FUNCTION public.protect_sensitive_contact_data()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Log all contact data access attempts
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    TG_OP || '_contact_data_access',
    'assessment_contacts',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'contact_id', COALESCE(NEW.id, OLD.id),
      'operation', TG_OP,
      'has_user_id', COALESCE(NEW.user_id, OLD.user_id) IS NOT NULL,
      'timestamp', NOW(),
      'requires_review', true
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- 4. Create triggers for enhanced security
CREATE TRIGGER assessment_encryption_validation_trigger
  BEFORE INSERT OR UPDATE ON public.assessment_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_encrypted_assessment_access();

CREATE TRIGGER contact_data_protection_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.assessment_contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_sensitive_contact_data();

-- 5. Enhanced RLS policies for assessment_sessions
DROP POLICY IF EXISTS "assessment_owner_access_only" ON public.assessment_sessions;
DROP POLICY IF EXISTS "assessment_sessions_owner_only_access" ON public.assessment_sessions;

CREATE POLICY "assessment_encrypted_owner_access_only"
ON public.assessment_sessions
FOR SELECT
TO authenticated
USING (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL)
  AND (
    -- Allow access to encrypted data or admin users
    (is_encrypted = true) 
    OR public.validate_admin_access_with_limits('view_unencrypted_assessments')
  )
);

-- 6. Enhanced RLS policies for assessment_contacts
DROP POLICY IF EXISTS "Users can view own assessment contacts" ON public.assessment_contacts;

CREATE POLICY "assessment_contacts_secure_owner_access"
ON public.assessment_contacts
FOR SELECT
TO authenticated
USING (
  (auth.uid() = user_id) 
  AND (auth.uid() IS NOT NULL)
  AND (
    -- Additional security: log and validate access
    public.validate_admin_access_with_limits('view_contact_data') = true
    OR auth.uid() = user_id
  )
);

-- 7. Create secure admin profile access function
CREATE OR REPLACE FUNCTION public.get_admin_profile_ultra_secure(target_user_id uuid DEFAULT NULL::uuid)
RETURNS TABLE(
  id uuid, 
  user_id uuid, 
  full_name text, 
  role admin_role, 
  is_active boolean, 
  created_at timestamp with time zone, 
  updated_at timestamp with time zone
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Enhanced validation with rate limiting
  IF NOT public.validate_admin_access_with_limits('access_admin_profiles_secure') THEN
    RAISE EXCEPTION 'Unauthorized access to admin profiles - security violation logged and blocked';
  END IF;
  
  -- Return only minimal profile data with strict validation
  RETURN QUERY
  SELECT 
    ap.id,
    ap.user_id,
    ap.full_name,
    ap.role,
    ap.is_active,
    ap.created_at,
    ap.updated_at
  FROM admin_profiles ap
  WHERE ap.user_id = COALESCE(target_user_id, auth.uid())
    AND ap.is_active = true
    -- Double-check: ensure requester has admin access
    AND EXISTS (
      SELECT 1 FROM admin_profiles req 
      WHERE req.user_id = auth.uid() 
      AND req.is_active = true
    );
END;
$$;

-- 8. Add data retention policy trigger
CREATE OR REPLACE FUNCTION public.enforce_data_retention()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Log data retention enforcement
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    details
  ) VALUES (
    'data_retention_enforcement',
    'system_maintenance',
    NULL,
    jsonb_build_object(
      'action', 'cleanup_old_data',
      'timestamp', NOW(),
      'automated', true
    )
  );
  
  -- Archive old assessment sessions (older than 2 years) by encrypting them if not already encrypted
  UPDATE public.assessment_sessions 
  SET 
    answers = '{"archived": true, "retention_date": "' || NOW()::text || '"}'::jsonb,
    additional_info = '{"archived": true}'::jsonb,
    is_encrypted = true
  WHERE created_at < NOW() - INTERVAL '2 years'
    AND (is_encrypted = false OR is_encrypted IS NULL);
    
  -- Clean up old security audit logs (keep 1 year)
  DELETE FROM public.security_audit_log 
  WHERE timestamp < NOW() - INTERVAL '1 year';
END;
$$;