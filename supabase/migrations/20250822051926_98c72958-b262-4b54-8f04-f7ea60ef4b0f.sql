-- Fix the incorrect policy and ensure proper admin access
DROP POLICY IF EXISTS "Admins can update assessment contacts" ON public.form_submissions;

-- Create the correct policy for assessment_contacts
CREATE POLICY "Admins can update assessment contacts" 
ON public.assessment_contacts 
FOR UPDATE 
USING (is_admin_user());

-- Add a specific policy for users to view their own admin profile (needed for login check)
CREATE POLICY "Users can view their own admin profile" 
ON public.admin_profiles 
FOR SELECT 
USING (user_id = auth.uid());