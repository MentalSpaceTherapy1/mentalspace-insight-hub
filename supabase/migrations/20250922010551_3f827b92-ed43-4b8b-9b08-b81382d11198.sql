-- Add admin access policy for form submissions
CREATE POLICY "Admins can view form submissions" 
ON public.form_submissions 
FOR SELECT 
USING (is_admin_user());

-- Add admin access policy for assessment contacts  
CREATE POLICY "Admins can view assessment contacts"
ON public.assessment_contacts 
FOR SELECT 
USING (is_admin_user());