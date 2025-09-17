-- Security Enhancement Migration: Fix Admin Profile Data Exposure and Strengthen Access Controls
-- This migration addresses the critical security vulnerability where admin email addresses could be harvested

-- First, let's strengthen the admin_profiles table security by adding explicit deny policies
-- and improving the existing access controls

-- Drop the existing overly broad policy and replace with more specific ones
DROP POLICY IF EXISTS "super_admin_only_direct_access" ON public.admin_profiles;

-- Add explicit deny policy for public access to admin emails
CREATE POLICY "deny_public_access_to_admin_profiles"
ON public.admin_profiles
FOR ALL
TO anon, public
USING (false)
WITH CHECK (false);

-- Only authenticated users with proper admin roles can access admin profiles
CREATE POLICY "authenticated_admin_access_only"
ON public.admin_profiles
FOR SELECT
TO authenticated
USING (
  -- Only allow if user is an active admin
  EXISTS (
    SELECT 1 FROM public.admin_profiles ap
    WHERE ap.user_id = auth.uid()
    AND ap.is_active = true
  )
);

-- Only super admins can insert new admin profiles
CREATE POLICY "super_admin_can_insert"
ON public.admin_profiles
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_profiles ap
    WHERE ap.user_id = auth.uid()
    AND ap.role = 'super_admin'
    AND ap.is_active = true
  )
);

-- Only super admins can update admin profiles
CREATE POLICY "super_admin_can_update"
ON public.admin_profiles
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_profiles ap
    WHERE ap.user_id = auth.uid()
    AND ap.role = 'super_admin'
    AND ap.is_active = true
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_profiles ap
    WHERE ap.user_id = auth.uid()
    AND ap.role = 'super_admin'
    AND ap.is_active = true
  )
);

-- Strengthen assessment data security with additional monitoring
-- Add trigger to log any access attempts to sensitive admin data
CREATE OR REPLACE FUNCTION public.log_admin_access_attempts()
RETURNS TRIGGER AS $$
BEGIN
  -- Log all access attempts to admin profiles for security monitoring
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'admin_profile_access_attempt',
    'admin_profiles',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'operation', TG_OP,
      'target_profile_id', COALESCE(NEW.id, OLD.id),
      'timestamp', NOW(),
      'user_role', (
        SELECT role FROM public.admin_profiles 
        WHERE user_id = auth.uid() AND is_active = true
        LIMIT 1
      )
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Add the trigger to monitor admin profile access
DROP TRIGGER IF EXISTS admin_profile_access_monitor ON public.admin_profiles;
CREATE TRIGGER admin_profile_access_monitor
  BEFORE SELECT OR INSERT OR UPDATE ON public.admin_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.log_admin_access_attempts();

-- Strengthen assessment session security with rate limiting
CREATE OR REPLACE FUNCTION public.check_assessment_access_rate_limit()
RETURNS TRIGGER AS $$
DECLARE
  access_count INTEGER;
BEGIN
  -- Check if user is accessing too many assessment sessions in a short time
  SELECT COUNT(*) INTO access_count
  FROM public.analytics_events
  WHERE event_type = 'assessment_session_access'
    AND event_data->>'user_id' = auth.uid()::text
    AND created_at > NOW() - INTERVAL '1 hour';
    
  IF access_count > 100 THEN
    -- Log suspicious activity
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'suspicious_assessment_access',
      'assessment_sessions',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'access_count', access_count,
        'time_window', '1 hour',
        'blocked', true
      )
    );
    
    RAISE EXCEPTION 'Rate limit exceeded for assessment access';
  END IF;
  
  -- Log normal access for monitoring
  INSERT INTO public.analytics_events (
    event_type,
    event_data,
    ip_address
  ) VALUES (
    'assessment_session_access',
    jsonb_build_object(
      'user_id', auth.uid(),
      'session_id', NEW.session_id,
      'timestamp', NOW()
    ),
    inet_client_addr()
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Add rate limiting trigger to assessment sessions
DROP TRIGGER IF EXISTS assessment_access_rate_limit ON public.assessment_sessions;
CREATE TRIGGER assessment_access_rate_limit
  BEFORE SELECT ON public.assessment_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.check_assessment_access_rate_limit();

-- Add additional security function to validate admin operations
CREATE OR REPLACE FUNCTION public.validate_admin_operation(operation_type TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  user_role admin_role;
  is_active_admin BOOLEAN;
BEGIN
  -- Get current user's admin role and status
  SELECT role, is_active INTO user_role, is_active_admin
  FROM public.admin_profiles
  WHERE user_id = auth.uid();
  
  -- If no admin profile found, deny access
  IF user_role IS NULL OR is_active_admin IS NOT TRUE THEN
    -- Log unauthorized access attempt
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'unauthorized_admin_operation',
      'admin_validation',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'operation_type', operation_type,
        'denied_reason', 'no_active_admin_profile'
      )
    );
    
    RETURN FALSE;
  END IF;
  
  -- Log successful admin operation validation
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'admin_operation_validated',
    'admin_validation',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'operation_type', operation_type,
      'user_role', user_role
    )
  );
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;