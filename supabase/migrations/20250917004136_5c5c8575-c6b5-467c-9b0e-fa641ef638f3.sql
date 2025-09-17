-- Fix admin email harvesting by restricting direct table access
-- Force users to use secure function instead of direct table queries

-- Drop existing permissive policies
DROP POLICY IF EXISTS "ultra_secure_admin_read" ON public.admin_profiles;
DROP POLICY IF EXISTS "ultra_secure_admin_insert" ON public.admin_profiles;
DROP POLICY IF EXISTS "ultra_secure_admin_update" ON public.admin_profiles;

-- Create highly restrictive policies that prevent direct table access for regular operations
-- Only allow super admins to access the table directly for admin management
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

-- Prevent admin profile deletion entirely (security measure)
CREATE POLICY "no_admin_profile_deletion" 
ON public.admin_profiles 
FOR DELETE
TO authenticated
USING (false);