-- Comprehensive Security Lock-Down: Complete Data Protection
-- This migration provides maximum security for admin profiles and assessment data

-- First, ensure admin_profiles table is completely locked down for anonymous users
-- Remove all existing policies and rebuild with fortress-level security
DROP POLICY IF EXISTS "deny_public_access_to_admin_profiles" ON public.admin_profiles;
DROP POLICY IF EXISTS "authenticated_admin_access_only" ON public.admin_profiles;
DROP POLICY IF EXISTS "super_admin_can_insert" ON public.admin_profiles;
DROP POLICY IF EXISTS "super_admin_can_update" ON public.admin_profiles;
DROP POLICY IF EXISTS "prevent_admin_deletion" ON public.admin_profiles;

-- FORTRESS MODE: Complete lockdown for admin_profiles
-- Nobody can access admin profiles except through secure functions
CREATE POLICY "complete_admin_profile_lockdown"
ON public.admin_profiles
FOR ALL
USING (false)
WITH CHECK (false);

-- Only allow access through the secure function calls (get_secure_admin_profile, etc.)
-- This ensures all access is controlled and logged

-- Strengthen assessment_sessions security with explicit protections
-- First check current policies and strengthen them
DROP POLICY IF EXISTS "Public cannot read assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Users can view own assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Admins can view all assessment sessions" ON public.assessment_sessions;

-- Rebuild assessment_sessions policies with maximum security
CREATE POLICY "assessment_complete_public_lockdown"
ON public.assessment_sessions
FOR ALL
TO anon, public
USING (false)
WITH CHECK (false);

-- Only authenticated users can access their own assessments
CREATE POLICY "assessment_owner_access_only"
ON public.assessment_sessions
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id 
  AND auth.uid() IS NOT NULL
);

-- Only the assessment owner can create their own assessments
CREATE POLICY "assessment_owner_insert_only"
ON public.assessment_sessions
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id 
  AND auth.uid() IS NOT NULL
);

-- Admins can view assessments but with strict validation
CREATE POLICY "admin_assessment_access_with_validation"
ON public.assessment_sessions
FOR SELECT
TO authenticated
USING (
  public.validate_admin_operation('view_assessments') = true
);

-- Create secure functions for admin profile access that bypass RLS
-- but provide controlled access with logging
CREATE OR REPLACE FUNCTION public.get_admin_profile_secure(profile_user_id UUID DEFAULT NULL)
RETURNS TABLE(
  id UUID,
  user_id UUID,
  full_name TEXT,
  role admin_role,
  is_active BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
) 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql AS $$
BEGIN
  -- Validate that the caller is an active admin
  IF NOT public.validate_admin_operation('access_admin_profiles') THEN
    RAISE EXCEPTION 'Unauthorized access to admin profiles';
  END IF;
  
  -- Log the access attempt
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'secure_admin_profile_access',
    'admin_profiles',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'requested_profile_id', profile_user_id,
      'access_method', 'secure_function',
      'timestamp', NOW()
    )
  );
  
  -- Return the requested profile (or caller's own profile if none specified)
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
    AND ap.is_active = true;
END;
$$;

-- Create secure function for getting all admin profiles (super admin only)
CREATE OR REPLACE FUNCTION public.get_all_admin_profiles_secure()
RETURNS TABLE(
  id UUID,
  user_id UUID,
  email TEXT,
  full_name TEXT,
  role admin_role,
  is_active BOOLEAN,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
) 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql AS $$
DECLARE
  caller_role admin_role;
BEGIN
  -- Check if caller is super admin
  SELECT role INTO caller_role
  FROM admin_profiles
  WHERE user_id = auth.uid() AND is_active = true;
  
  IF caller_role != 'super_admin' THEN
    RAISE EXCEPTION 'Only super admins can access all admin profiles';
  END IF;
  
  -- Log the access
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'super_admin_profile_list_access',
    'admin_profiles',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'action', 'list_all_profiles',
      'timestamp', NOW()
    )
  );
  
  -- Return all profiles for super admin
  RETURN QUERY
  SELECT 
    ap.id,
    ap.user_id,
    ap.email,
    ap.full_name,
    ap.role,
    ap.is_active,
    ap.created_at,
    ap.updated_at
  FROM admin_profiles ap
  WHERE ap.is_active = true
  ORDER BY ap.created_at DESC;
END;
$$;

-- Update the existing get_secure_admin_profile function to use the new security model
CREATE OR REPLACE FUNCTION public.get_secure_admin_profile(target_user_id uuid DEFAULT NULL::uuid)
RETURNS TABLE(id uuid, user_id uuid, full_name text, role admin_role, is_active boolean, created_at timestamp with time zone, updated_at timestamp with time zone)
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Use the new secure access method
  RETURN QUERY
  SELECT * FROM public.get_admin_profile_secure(target_user_id);
END;
$$;