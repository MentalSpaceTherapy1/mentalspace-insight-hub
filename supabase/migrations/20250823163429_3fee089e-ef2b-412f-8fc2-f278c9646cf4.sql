-- Fix security vulnerability in admin_profiles table
-- The current "Users can view their own admin profile" policy is dangerous
-- as it allows any user to view admin data if their user_id matches
-- The "Admins can access all profiles" policy already covers legitimate admin access

-- Drop the vulnerable policy
DROP POLICY IF EXISTS "Users can view their own admin profile" ON public.admin_profiles;

-- The remaining policy "Admins can access all profiles" with expression:
-- ((user_id = auth.uid()) OR is_admin_user())
-- This safely allows:
-- 1. Admin users to view their own profile (when they are admins)
-- 2. Admin users to view all admin profiles
-- This eliminates the security risk while maintaining functionality