-- Fix the remaining security vulnerability in admin_profiles table
-- The "Admins can access all profiles" policy still contains the dangerous
-- (user_id = auth.uid()) condition that allows any user to view admin data

-- Drop the existing policy that contains the vulnerability
DROP POLICY IF EXISTS "Admins can access all profiles" ON public.admin_profiles;

-- Create a secure policy that only allows verified admin users to access admin profiles
CREATE POLICY "Only verified admins can access admin profiles" 
ON public.admin_profiles 
FOR ALL 
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- This ensures that only users who are verified admins (through the is_admin_user() function)
-- can view, update, insert, or delete admin profiles, eliminating the security risk