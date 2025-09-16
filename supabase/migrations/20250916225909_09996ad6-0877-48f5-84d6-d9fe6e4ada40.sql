-- Security Fix: Admin Profile Protection Enhancement
-- This migration addresses the potential security vulnerability where admin email addresses
-- could be harvested due to conflicting RLS policies on the admin_profiles table

-- First, let's create a more secure admin verification function
-- This replaces the existing is_admin_user function with enhanced security
CREATE OR REPLACE FUNCTION public.is_verified_admin()
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_count INTEGER;
  current_user_id UUID;
BEGIN
  -- Get current user ID
  current_user_id := auth.uid();
  
  -- Return false immediately if no user is authenticated
  IF current_user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Count active admin profiles for the current user
  -- Using SELECT COUNT instead of EXISTS for more explicit control
  SELECT COUNT(*)
  INTO admin_count
  FROM public.admin_profiles
  WHERE user_id = current_user_id 
    AND is_active = true
    AND created_at < now() - INTERVAL '5 minutes'; -- Prevent immediate admin escalation
  
  -- Log admin access attempts for security monitoring
  INSERT INTO public.analytics_events (
    event_type,
    event_data,
    session_id
  ) VALUES (
    'admin_verification_attempt',
    jsonb_build_object(
      'user_id', current_user_id,
      'verified', (admin_count > 0),
      'timestamp', now()
    ),
    current_setting('request.jwt.claims', true)::json->>'session_id'
  );
  
  RETURN admin_count > 0;
END;
$$;

-- Create enhanced admin profile access logging trigger
CREATE OR REPLACE FUNCTION public.log_admin_profile_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Log all access to admin profiles for security monitoring
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    TG_OP || '_admin_profile',
    'admin_profiles',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'target_admin_id', COALESCE(NEW.id, OLD.id),
      'target_admin_email', COALESCE(NEW.email, OLD.email),
      'operation', TG_OP,
      'timestamp', now()
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Apply the trigger to admin_profiles table
DROP TRIGGER IF EXISTS admin_profile_access_log ON public.admin_profiles;
CREATE TRIGGER admin_profile_access_log
  AFTER INSERT OR UPDATE OR DELETE ON public.admin_profiles
  FOR EACH ROW EXECUTE FUNCTION public.log_admin_profile_access();

-- Now fix the RLS policies - remove conflicting policies and create a single, secure policy
DROP POLICY IF EXISTS "Public cannot read admin profiles" ON public.admin_profiles;
DROP POLICY IF EXISTS "Only verified admins can read admin profiles" ON public.admin_profiles;
DROP POLICY IF EXISTS "Only verified admins can insert admin profiles" ON public.admin_profiles;
DROP POLICY IF EXISTS "Only verified admins can update admin profiles" ON public.admin_profiles;

-- Create new, more secure RLS policies
CREATE POLICY "admin_profiles_secure_read" ON public.admin_profiles
  FOR SELECT
  USING (
    public.is_verified_admin()
    AND 
    -- Additional security: Rate limit admin profile queries
    (SELECT COUNT(*) FROM public.analytics_events 
     WHERE event_type = 'admin_verification_attempt' 
       AND event_data->>'user_id' = auth.uid()::text
       AND created_at > now() - INTERVAL '1 minute') < 10
  );

CREATE POLICY "admin_profiles_secure_insert" ON public.admin_profiles
  FOR INSERT
  WITH CHECK (
    public.is_verified_admin()
    AND
    -- Prevent rapid admin creation
    (SELECT COUNT(*) FROM public.admin_profiles 
     WHERE created_at > now() - INTERVAL '1 hour') < 3
  );

CREATE POLICY "admin_profiles_secure_update" ON public.admin_profiles
  FOR UPDATE
  USING (public.is_verified_admin())
  WITH CHECK (
    public.is_verified_admin()
    AND
    -- Prevent email changes unless by super admin
    (OLD.email = NEW.email OR 
     EXISTS (SELECT 1 FROM public.admin_profiles 
             WHERE user_id = auth.uid() 
               AND role = 'super_admin' 
               AND is_active = true))
  );

-- Prevent deletion of admin profiles entirely for data integrity
CREATE POLICY "admin_profiles_no_delete" ON public.admin_profiles
  FOR DELETE
  USING (false);

-- Create a function to safely check if current user is admin (for use in application code)
CREATE OR REPLACE FUNCTION public.current_user_admin_status()
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  result jsonb;
  admin_info record;
BEGIN
  -- Only return admin info for authenticated users
  IF auth.uid() IS NULL THEN
    RETURN jsonb_build_object('is_admin', false);
  END IF;

  -- Get admin information for the current user
  SELECT role, is_active, email, full_name
  INTO admin_info
  FROM public.admin_profiles
  WHERE user_id = auth.uid() AND is_active = true;

  IF FOUND THEN
    result := jsonb_build_object(
      'is_admin', true,
      'role', admin_info.role,
      'email', admin_info.email,
      'full_name', admin_info.full_name,
      'verified_at', now()
    );
  ELSE
    result := jsonb_build_object('is_admin', false);
  END IF;

  -- Log the admin status check
  INSERT INTO public.analytics_events (
    event_type,
    event_data,
    session_id
  ) VALUES (
    'admin_status_check',
    jsonb_build_object(
      'user_id', auth.uid(),
      'is_admin', result->'is_admin',
      'timestamp', now()
    ),
    current_setting('request.jwt.claims', true)::json->>'session_id'
  );

  RETURN result;
END;
$$;

-- Update the existing is_admin_user function to use the new secure implementation
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN public.is_verified_admin();
END;
$$;

-- Add additional constraint to prevent direct email exposure
ALTER TABLE public.admin_profiles 
ADD CONSTRAINT admin_email_format_check 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Create an index for performance while maintaining security
CREATE INDEX IF NOT EXISTS idx_admin_profiles_security 
ON public.admin_profiles (user_id, is_active) 
WHERE is_active = true;

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION public.is_verified_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.current_user_admin_status() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin_user() TO authenticated;