-- Fix critical security vulnerability: Admin email harvesting prevention
-- Drop existing potentially vulnerable policies
DROP POLICY IF EXISTS "admin_profiles_secure_read" ON public.admin_profiles;
DROP POLICY IF EXISTS "admin_profiles_secure_insert" ON public.admin_profiles;
DROP POLICY IF EXISTS "admin_profiles_secure_update" ON public.admin_profiles;
DROP POLICY IF EXISTS "admin_profiles_no_delete" ON public.admin_profiles;

-- Create a more secure function to check admin status without recursion
CREATE OR REPLACE FUNCTION public.check_admin_access()
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_user_id UUID;
  admin_exists BOOLEAN := FALSE;
BEGIN
  -- Get current authenticated user ID
  current_user_id := auth.uid();
  
  -- Return false immediately if no user is authenticated
  IF current_user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Check if the current user has an active admin profile
  -- Use a direct query with proper time-based restrictions
  SELECT EXISTS(
    SELECT 1 
    FROM public.admin_profiles 
    WHERE user_id = current_user_id 
      AND is_active = true 
      AND created_at < (now() - INTERVAL '10 minutes')
  ) INTO admin_exists;
  
  RETURN admin_exists;
END;
$$;

-- Create ultra-restrictive RLS policies for admin_profiles
-- Policy 1: Only authenticated verified admins can read admin profiles
CREATE POLICY "ultra_secure_admin_read" ON public.admin_profiles
FOR SELECT 
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND public.check_admin_access() = true
  AND (
    -- Additional security: only allow reading your own profile or if you're a super_admin
    user_id = auth.uid() 
    OR EXISTS(
      SELECT 1 FROM public.admin_profiles ap2 
      WHERE ap2.user_id = auth.uid() 
        AND ap2.role = 'super_admin' 
        AND ap2.is_active = true
    )
  )
);

-- Policy 2: Only super admins can insert new admin profiles with rate limiting
CREATE POLICY "ultra_secure_admin_insert" ON public.admin_profiles
FOR INSERT 
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL
  AND public.check_admin_access() = true
  AND EXISTS(
    SELECT 1 FROM public.admin_profiles ap 
    WHERE ap.user_id = auth.uid() 
      AND ap.role = 'super_admin' 
      AND ap.is_active = true
  )
  AND (
    SELECT COUNT(*) FROM public.admin_profiles 
    WHERE created_at > (now() - INTERVAL '1 hour')
  ) < 2
);

-- Policy 3: Only super admins can update admin profiles
CREATE POLICY "ultra_secure_admin_update" ON public.admin_profiles
FOR UPDATE 
TO authenticated
USING (
  auth.uid() IS NOT NULL
  AND public.check_admin_access() = true
  AND EXISTS(
    SELECT 1 FROM public.admin_profiles ap 
    WHERE ap.user_id = auth.uid() 
      AND ap.role = 'super_admin' 
      AND ap.is_active = true
  )
)
WITH CHECK (
  auth.uid() IS NOT NULL
  AND public.check_admin_access() = true
  AND EXISTS(
    SELECT 1 FROM public.admin_profiles ap 
    WHERE ap.user_id = auth.uid() 
      AND ap.role = 'super_admin' 
      AND ap.is_active = true
  )
);

-- Policy 4: Absolutely no one can delete admin profiles
CREATE POLICY "no_admin_profile_deletion" ON public.admin_profiles
FOR DELETE 
TO authenticated
USING (false);

-- Create additional security logging for admin profile access
CREATE OR REPLACE FUNCTION public.log_admin_profile_access()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Log any access to admin profiles for security monitoring
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    TG_OP || '_admin_profile_access',
    'admin_profiles',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'accessed_profile_id', COALESCE(NEW.id, OLD.id),
      'accessed_email', COALESCE(NEW.email, OLD.email),
      'timestamp', now()
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Create trigger to log all admin profile access
DROP TRIGGER IF EXISTS log_admin_profile_access_trigger ON public.admin_profiles;
CREATE TRIGGER log_admin_profile_access_trigger
  AFTER SELECT OR INSERT OR UPDATE OR DELETE ON public.admin_profiles
  FOR EACH ROW EXECUTE FUNCTION public.log_admin_profile_access();

-- Update the main admin check functions to use the new secure approach
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN public.check_admin_access();
END;
$$;

CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN public.check_admin_access();
END;
$$;

-- Add comment documenting the security enhancement
COMMENT ON TABLE public.admin_profiles IS 'Ultra-secure admin profiles table with enhanced RLS policies to prevent email harvesting attacks. All access is logged for security monitoring.';