-- Fix the infinite recursion issue by temporarily removing problematic policies
-- and recreating them properly

-- Drop existing policies that cause recursion
DROP POLICY IF EXISTS "Admins can view all admin profiles" ON public.admin_profiles;
DROP POLICY IF EXISTS "Super admins can manage admin profiles" ON public.admin_profiles;

-- Create a simpler policy that doesn't cause recursion
-- Allow users to view their own admin profile
CREATE POLICY "Users can view their own admin profile"
    ON public.admin_profiles
    FOR SELECT
    USING (user_id = auth.uid());

-- Allow admins to view all profiles (but avoid recursion)
CREATE POLICY "Admin access to all profiles"
    ON public.admin_profiles
    FOR ALL
    USING (
        -- Either it's their own profile, or they have admin role
        user_id = auth.uid() OR 
        EXISTS (
            SELECT 1 FROM public.admin_profiles ap 
            WHERE ap.user_id = auth.uid() 
            AND ap.is_active = true 
            AND ap.role IN ('super_admin', 'admin')
        )
    );

-- Now create the admin profile for the user who just signed up
-- User ID: d36d1d3e-44d3-47fe-a95e-0ab8429a2087
-- Email: ejoseph@chctherapy.com

INSERT INTO public.admin_profiles (
    user_id,
    email,
    full_name,
    role,
    is_active
) VALUES (
    'd36d1d3e-44d3-47fe-a95e-0ab8429a2087',
    'ejoseph@chctherapy.com',
    'E Joseph',
    'super_admin',
    true
);