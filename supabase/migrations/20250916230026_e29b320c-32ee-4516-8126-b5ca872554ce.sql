-- Security Fix Part 2: Fix RLS Policies for Admin Profiles
-- Remove conflicting policies and create secure, single-purpose policies

-- Remove the conflicting RLS policies
DROP POLICY IF EXISTS "Public cannot read admin profiles" ON public.admin_profiles;
DROP POLICY IF EXISTS "Only verified admins can read admin profiles" ON public.admin_profiles;
DROP POLICY IF EXISTS "Only verified admins can insert admin profiles" ON public.admin_profiles;
DROP POLICY IF EXISTS "Only verified admins can update admin profiles" ON public.admin_profiles;

-- Create new, secure RLS policies with clear purpose
CREATE POLICY "admin_profiles_secure_read" ON public.admin_profiles
  FOR SELECT
  USING (public.is_verified_admin());

CREATE POLICY "admin_profiles_secure_insert" ON public.admin_profiles
  FOR INSERT
  WITH CHECK (
    public.is_verified_admin()
    AND
    -- Prevent rapid admin creation (max 2 new admins per hour)
    (SELECT COUNT(*) FROM public.admin_profiles 
     WHERE created_at > now() - INTERVAL '1 hour') < 2
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

-- Completely prevent deletion of admin profiles for audit trail
CREATE POLICY "admin_profiles_no_delete" ON public.admin_profiles
  FOR DELETE
  USING (false);

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

-- Add email format constraint for additional data validation
ALTER TABLE public.admin_profiles 
DROP CONSTRAINT IF EXISTS admin_email_format_check;

ALTER TABLE public.admin_profiles 
ADD CONSTRAINT admin_email_format_check 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Create performance index while maintaining security
DROP INDEX IF EXISTS idx_admin_profiles_security;
CREATE INDEX idx_admin_profiles_security 
ON public.admin_profiles (user_id, is_active) 
WHERE is_active = true;

-- Grant permissions for the new function
GRANT EXECUTE ON FUNCTION public.is_verified_admin() TO authenticated;