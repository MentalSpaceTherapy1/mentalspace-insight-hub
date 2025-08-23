-- Enhanced security for public-facing tables
-- These tables need public INSERT for functionality but require security enhancements

-- 1. Add UPDATE policy for assessment_contacts to allow admins to process entries
CREATE POLICY "Admins can update assessment contacts" 
ON public.assessment_contacts 
FOR UPDATE 
USING (is_admin_user())
WITH CHECK (is_admin_user());

-- 2. Add rate limiting and validation for assessment_sessions
-- Restrict excessive submissions from same IP within timeframe
CREATE POLICY "Rate limit assessment sessions" 
ON public.assessment_sessions 
FOR INSERT 
WITH CHECK (
  -- Allow if less than 5 submissions from same IP in last hour
  (SELECT COUNT(*) FROM public.assessment_sessions 
   WHERE ip_address = inet_client_addr() 
   AND created_at > NOW() - INTERVAL '1 hour') < 5
);

-- Replace existing unrestricted INSERT policy
DROP POLICY IF EXISTS "Anyone can insert assessment sessions" ON public.assessment_sessions;

-- 3. Add validation for form_submissions to prevent spam
CREATE POLICY "Rate limited form submissions" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (
  -- Allow if less than 3 submissions from same IP in last hour
  (SELECT COUNT(*) FROM public.form_submissions 
   WHERE ip_address = inet_client_addr() 
   AND created_at > NOW() - INTERVAL '1 hour') < 3
);

-- Replace existing unrestricted INSERT policy  
DROP POLICY IF EXISTS "Anyone can insert form submissions" ON public.form_submissions;

-- 4. Create audit trigger for sensitive data access
CREATE OR REPLACE FUNCTION public.log_sensitive_access()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.analytics_events (
    event_type,
    event_data,
    ip_address,
    session_id
  ) VALUES (
    'sensitive_data_access',
    jsonb_build_object(
      'table_name', TG_TABLE_NAME,
      'operation', TG_OP,
      'user_id', auth.uid(),
      'timestamp', NOW()
    ),
    inet_client_addr(),
    current_setting('request.jwt.claims', true)::json->>'session_id'
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;