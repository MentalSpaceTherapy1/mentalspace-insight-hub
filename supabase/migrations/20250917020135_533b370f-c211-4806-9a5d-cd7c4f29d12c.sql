-- Critical Security Fixes for Data Exposure Vulnerabilities
-- Phase 1: Immediate database security hardening (CORRECTED)

-- 1. EXPLICIT DENY POLICIES for anonymous access to sensitive tables

-- Drop existing permissive policies that might allow unintended access
DROP POLICY IF EXISTS "assessment_complete_public_lockdown" ON public.assessment_sessions;
DROP POLICY IF EXISTS "complete_admin_profile_lockdown" ON public.admin_profiles;

-- Assessment Sessions: Strict access control with explicit denies
CREATE POLICY "assessment_sessions_deny_anonymous_access" 
ON public.assessment_sessions 
FOR ALL 
TO anon 
USING (false) 
WITH CHECK (false);

CREATE POLICY "assessment_sessions_deny_public_access" 
ON public.assessment_sessions 
FOR ALL 
TO public 
USING (false) 
WITH CHECK (false);

-- Only authenticated users can access their own assessment sessions
CREATE POLICY "assessment_sessions_owner_only_access" 
ON public.assessment_sessions 
FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id AND auth.uid() IS NOT NULL);

CREATE POLICY "assessment_sessions_owner_only_insert" 
ON public.assessment_sessions 
FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id AND auth.uid() IS NOT NULL);

-- Admin Profiles: Complete lockdown with function-only access
CREATE POLICY "admin_profiles_deny_all_direct_access" 
ON public.admin_profiles 
FOR ALL 
USING (false) 
WITH CHECK (false);

-- Assessment Contacts: Strengthen access control
CREATE POLICY "assessment_contacts_deny_anonymous" 
ON public.assessment_contacts 
FOR ALL 
TO anon 
USING (false) 
WITH CHECK (false);

-- Form Submissions: Explicit deny for anonymous users
CREATE POLICY "form_submissions_deny_anonymous" 
ON public.form_submissions 
FOR ALL 
TO anon 
USING (false) 
WITH CHECK (false);

-- 2. ENHANCED ADMIN ACCESS VALIDATION

-- Create secure admin validation function with additional logging
CREATE OR REPLACE FUNCTION public.validate_secure_admin_access(operation_type text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_role admin_role;
  is_active_admin BOOLEAN := FALSE;
  request_ip inet;
BEGIN
  -- Get current user's admin role and status
  SELECT role, is_active INTO user_role, is_active_admin
  FROM public.admin_profiles
  WHERE user_id = auth.uid();
  
  -- Get request IP for security logging
  request_ip := inet_client_addr();
  
  -- If no admin profile found or inactive, log and deny
  IF user_role IS NULL OR is_active_admin IS NOT TRUE THEN
    -- Log unauthorized access attempt with enhanced details
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'unauthorized_admin_access_blocked',
      'admin_validation',
      auth.uid(),
      request_ip,
      jsonb_build_object(
        'operation_type', operation_type,
        'denied_reason', CASE 
          WHEN user_role IS NULL THEN 'no_admin_profile'
          WHEN is_active_admin IS NOT TRUE THEN 'inactive_admin'
          ELSE 'unknown'
        END,
        'timestamp', NOW(),
        'severity', 'HIGH'
      )
    );
    
    RETURN FALSE;
  END IF;
  
  -- Log successful admin operation
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'admin_access_granted',
    'admin_validation',
    auth.uid(),
    request_ip,
    jsonb_build_object(
      'operation_type', operation_type,
      'user_role', user_role,
      'timestamp', NOW(),
      'severity', 'INFO'
    )
  );
  
  RETURN TRUE;
END;
$$;

-- 3. RATE LIMITING for sensitive operations

-- Create rate limiting function for assessment access
CREATE OR REPLACE FUNCTION public.check_assessment_rate_limit()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  access_count INTEGER;
  user_id_val UUID;
BEGIN
  user_id_val := auth.uid();
  
  -- Allow service role bypass for system operations
  IF auth.role() = 'service_role' THEN
    RETURN TRUE;
  END IF;
  
  -- Check rate limiting for assessment access (max 20 per hour per user)
  SELECT COUNT(*) INTO access_count
  FROM public.analytics_events
  WHERE event_type IN ('assessment_session_access', 'assessment_creation')
    AND event_data->>'user_id' = user_id_val::text
    AND created_at > NOW() - INTERVAL '1 hour';
    
  -- Log if rate limit exceeded
  IF access_count >= 20 THEN
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'assessment_rate_limit_exceeded',
      'assessment_sessions',
      user_id_val,
      inet_client_addr(),
      jsonb_build_object(
        'access_count', access_count,
        'time_window', '1 hour',
        'limit', 20,
        'severity', 'WARNING'
      )
    );
    
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
$$;

-- Add rate limiting to assessment access
CREATE POLICY "assessment_sessions_rate_limited" 
ON public.assessment_sessions 
FOR INSERT 
TO authenticated 
WITH CHECK (
  auth.uid() = user_id 
  AND auth.uid() IS NOT NULL 
  AND public.check_assessment_rate_limit() = TRUE
);

-- 4. SECURE DATA MODIFICATION LOGGING (INSERT/UPDATE/DELETE only)

-- Enhanced trigger for sensitive data modifications
CREATE OR REPLACE FUNCTION public.log_enhanced_sensitive_modifications()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  session_info text;
BEGIN
  -- Get session information if available
  session_info := current_setting('request.jwt.claims', true)::json->>'session_id';
  
  -- Log detailed modification information
  INSERT INTO public.analytics_events (
    event_type,
    event_data,
    ip_address,
    session_id,
    user_agent
  ) VALUES (
    'sensitive_data_modification_enhanced',
    jsonb_build_object(
      'table_name', TG_TABLE_NAME,
      'operation', TG_OP,
      'user_id', auth.uid(),
      'target_user_id', COALESCE(NEW.user_id, OLD.user_id),
      'record_id', COALESCE(NEW.id, OLD.id),
      'timestamp', NOW(),
      'security_level', 'HIGH',
      'requires_audit', true
    ),
    inet_client_addr(),
    session_info,
    current_setting('request.headers', true)::json->>'user-agent'
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Apply enhanced logging to critical tables for modifications only
DROP TRIGGER IF EXISTS assessment_sessions_modification_log ON public.assessment_sessions;
CREATE TRIGGER assessment_sessions_modification_log
  AFTER INSERT OR UPDATE OR DELETE ON public.assessment_sessions
  FOR EACH ROW EXECUTE FUNCTION public.log_enhanced_sensitive_modifications();

DROP TRIGGER IF EXISTS admin_profiles_modification_log ON public.admin_profiles;
CREATE TRIGGER admin_profiles_modification_log
  AFTER INSERT OR UPDATE OR DELETE ON public.admin_profiles
  FOR EACH ROW EXECUTE FUNCTION public.log_enhanced_sensitive_modifications();

-- 5. UPDATE EXISTING SECURE FUNCTIONS

-- Update admin profile access function with enhanced security
CREATE OR REPLACE FUNCTION public.get_admin_profile_secure(profile_user_id uuid DEFAULT NULL::uuid)
RETURNS TABLE(id uuid, user_id uuid, full_name text, role admin_role, is_active boolean, created_at timestamp with time zone, updated_at timestamp with time zone)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Use enhanced validation
  IF NOT public.validate_secure_admin_access('access_admin_profiles') THEN
    RAISE EXCEPTION 'Unauthorized access to admin profiles - security violation logged';
  END IF;
  
  -- Return the requested profile with strict validation
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
  WHERE ap.user_id = COALESCE(profile_user_id, auth.uid())
    AND ap.is_active = true
    -- Additional security: ensure requester has admin access
    AND EXISTS (
      SELECT 1 FROM admin_profiles req 
      WHERE req.user_id = auth.uid() 
      AND req.is_active = true
    );
END;
$$;

-- 6. SECURITY MONITORING FUNCTIONS

-- Function to get security status (for admin dashboard)
CREATE OR REPLACE FUNCTION public.get_security_status()
RETURNS TABLE(
  critical_alerts integer,
  warning_alerts integer,
  last_security_event timestamp with time zone,
  active_sessions integer
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only admins can check security status
  IF NOT public.validate_secure_admin_access('view_security_status') THEN
    RAISE EXCEPTION 'Unauthorized access to security status';
  END IF;
  
  RETURN QUERY
  SELECT 
    (SELECT COUNT(*)::integer FROM security_audit_log 
     WHERE details->>'severity' = 'HIGH' 
     AND timestamp > NOW() - INTERVAL '24 hours') as critical_alerts,
    (SELECT COUNT(*)::integer FROM security_audit_log 
     WHERE details->>'severity' = 'WARNING' 
     AND timestamp > NOW() - INTERVAL '24 hours') as warning_alerts,
    (SELECT MAX(timestamp) FROM security_audit_log) as last_security_event,
    (SELECT COUNT(DISTINCT session_id)::integer FROM analytics_events 
     WHERE created_at > NOW() - INTERVAL '1 hour') as active_sessions;
END;
$$;

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION public.validate_secure_admin_access(text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.check_assessment_rate_limit() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_admin_profile_secure(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_security_status() TO authenticated;