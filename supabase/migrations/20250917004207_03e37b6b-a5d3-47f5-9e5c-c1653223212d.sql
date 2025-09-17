-- Fix admin email harvesting by restricting direct table access
-- Remove existing policies and create highly restrictive ones

-- Drop all existing policies on admin_profiles
DROP POLICY IF EXISTS "ultra_secure_admin_read" ON public.admin_profiles;
DROP POLICY IF EXISTS "ultra_secure_admin_insert" ON public.admin_profiles;
DROP POLICY IF EXISTS "ultra_secure_admin_update" ON public.admin_profiles;
DROP POLICY IF EXISTS "no_admin_profile_deletion" ON public.admin_profiles;

-- Create highly restrictive policy that only allows super admin access to the table directly
-- Regular admins should use the secure function instead
CREATE POLICY "super_admin_only_direct_access" 
ON public.admin_profiles 
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.admin_profiles sa 
    WHERE sa.user_id = auth.uid() 
    AND sa.role = 'super_admin' 
    AND sa.is_active = true
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admin_profiles sa 
    WHERE sa.user_id = auth.uid() 
    AND sa.role = 'super_admin' 
    AND sa.is_active = true
  )
);

-- Absolutely prevent admin profile deletion for security
CREATE POLICY "prevent_admin_deletion" 
ON public.admin_profiles 
FOR DELETE
TO authenticated
USING (false);