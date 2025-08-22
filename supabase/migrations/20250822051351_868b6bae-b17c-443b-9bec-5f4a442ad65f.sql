-- Add RLS policies for admin access to form submissions
CREATE POLICY "Admins can view all form submissions" 
ON public.form_submissions 
FOR SELECT 
USING (is_admin_user());

CREATE POLICY "Admins can update form submissions" 
ON public.form_submissions 
FOR UPDATE 
USING (is_admin_user());

-- Add RLS policies for admin access to assessment contacts  
CREATE POLICY "Admins can view all assessment contacts" 
ON public.assessment_contacts 
FOR SELECT 
USING (is_admin_user());

CREATE POLICY "Admins can update assessment contacts" 
ON public.form_submissions 
FOR UPDATE 
USING (is_admin_user());

-- Add RLS policies for admin access to assessment sessions
CREATE POLICY "Admins can view all assessment sessions" 
ON public.assessment_sessions 
FOR SELECT 
USING (is_admin_user());