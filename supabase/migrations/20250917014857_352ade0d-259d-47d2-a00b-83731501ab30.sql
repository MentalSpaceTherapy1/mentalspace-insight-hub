-- Security Enhancement Migration: Fix Admin Profile Data Exposure (Corrected)
-- This migration addresses the critical security vulnerability where admin email addresses could be harvested

-- First, let's strengthen the admin_profiles table security by adding explicit deny policies
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

-- Enhanced security audit function for admin operations
CREATE OR REPLACE FUNCTION public.enhanced_security_audit()
RETURNS TRIGGER AS $$
BEGIN
  -- Log admin profile modifications with enhanced details
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    TG_OP || '_admin_profile_secured',
    'admin_profiles',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'operation', TG_OP,
      'target_profile_id', COALESCE(NEW.id, OLD.id),
      'target_email', COALESCE(NEW.email, OLD.email),
      'timestamp', NOW(),
      'security_level', 'enhanced',
      'old_role', CASE WHEN OLD IS NOT NULL THEN OLD.role ELSE NULL END,
      'new_role', CASE WHEN NEW IS NOT NULL THEN NEW.role ELSE NULL END,
      'actor_role', (
        SELECT role FROM public.admin_profiles 
        WHERE user_id = auth.uid() AND is_active = true
        LIMIT 1
      )
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Replace the existing admin profile trigger with enhanced security logging
DROP TRIGGER IF EXISTS log_admin_profile_modifications ON public.admin_profiles;
DROP TRIGGER IF EXISTS admin_profile_access_monitor ON public.admin_profiles;

CREATE TRIGGER enhanced_admin_profile_security
  AFTER INSERT OR UPDATE OR DELETE ON public.admin_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.enhanced_security_audit();

-- Add security function to validate and log assessment access
CREATE OR REPLACE FUNCTION public.secure_assessment_access()
RETURNS TRIGGER AS $$
DECLARE
  access_count INTEGER;
BEGIN
  -- Check rate limiting for assessment access
  SELECT COUNT(*) INTO access_count
  FROM public.analytics_events
  WHERE event_type = 'assessment_session_access'
    AND event_data->>'user_id' = auth.uid()::text
    AND created_at > NOW() - INTERVAL '1 hour';
    
  -- Log access attempt
  INSERT INTO public.analytics_events (
    event_type,
    event_data,
    ip_address
  ) VALUES (
    'assessment_session_access',
    jsonb_build_object(
      'user_id', auth.uid(),
      'session_id', NEW.session_id,
      'access_count_in_hour', access_count,
      'timestamp', NOW()
    ),
    inet_client_addr()
  );
  
  -- If accessing too frequently, log as suspicious but don't block (to avoid UX issues)
  IF access_count > 50 THEN
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'high_frequency_assessment_access',
      'assessment_sessions',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'access_count', access_count,
        'time_window', '1 hour',
        'session_id', NEW.session_id
      )
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Add security trigger for assessment sessions (on INSERT only, not SELECT)
DROP TRIGGER IF EXISTS assessment_access_rate_limit ON public.assessment_sessions;
CREATE TRIGGER secure_assessment_insert
  BEFORE INSERT ON public.assessment_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.secure_assessment_access();

-- Create function to validate admin operations securely
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
  
  -- If no admin profile found, log and deny access
  IF user_role IS NULL OR is_active_admin IS NOT TRUE THEN
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'unauthorized_admin_operation_blocked',
      'admin_validation',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'operation_type', operation_type,
        'denied_reason', 'no_active_admin_profile',
        'timestamp', NOW()
      )
    );
    
    RETURN FALSE;
  END IF;
  
  -- Log successful validation
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
      'user_role', user_role,
      'timestamp', NOW()
    )
  );
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;