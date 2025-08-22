-- Drop the problematic recursive RLS policy that causes infinite recursion
DROP POLICY IF EXISTS "Admin access to all profiles" ON public.admin_profiles;

-- Create a security definer function to safely check admin status
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_profiles 
        WHERE user_id = auth.uid() 
        AND is_active = true
    );
END;
$$;

-- Create a simpler, non-recursive policy for admins to access all profiles
CREATE POLICY "Admins can access all profiles" 
ON public.admin_profiles 
FOR ALL 
TO authenticated
USING (
    -- Users can always access their own profile
    user_id = auth.uid() 
    OR 
    -- Or if they are an admin (using security definer function to avoid recursion)
    public.is_admin_user()
);

-- Ensure the existing policy for users to view their own profile remains
-- (This should already exist but let's make sure it's properly defined)
DROP POLICY IF EXISTS "Users can view their own admin profile" ON public.admin_profiles;

CREATE POLICY "Users can view their own admin profile" 
ON public.admin_profiles 
FOR SELECT 
TO authenticated
USING (user_id = auth.uid());