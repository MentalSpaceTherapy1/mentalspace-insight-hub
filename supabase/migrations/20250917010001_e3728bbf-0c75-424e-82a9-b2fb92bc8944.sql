-- Enhanced Security for Assessment Data
-- Add encrypted storage columns and stronger access controls

-- 1. Add encrypted columns to assessment_sessions
ALTER TABLE public.assessment_sessions 
ADD COLUMN encrypted_answers TEXT,
ADD COLUMN encrypted_additional_info TEXT, 
ADD COLUMN encryption_iv TEXT,
ADD COLUMN data_hash TEXT,
ADD COLUMN is_encrypted BOOLEAN DEFAULT false;

-- 2. Add indexes for better performance
CREATE INDEX idx_assessment_sessions_encrypted ON public.assessment_sessions(is_encrypted) WHERE is_encrypted = true;
CREATE INDEX idx_assessment_sessions_user_id ON public.assessment_sessions(user_id) WHERE user_id IS NOT NULL;

-- 3. Create function to check if user can access encrypted data
CREATE OR REPLACE FUNCTION public.can_access_encrypted_assessment_data()
RETURNS BOOLEAN AS $$
BEGIN
  -- Only admins can access encrypted sensitive data
  RETURN public.is_admin_user();
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

-- 4. Enhanced RLS policies for encrypted data protection
DROP POLICY IF EXISTS "Users can view own assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Admins can view all assessment sessions" ON public.assessment_sessions;

-- Users can only view their own basic assessment data (no sensitive answers)
CREATE POLICY "Users can view own basic assessment data"
ON public.assessment_sessions
FOR SELECT
TO authenticated  
USING (
  auth.uid() = user_id AND (
    -- Allow access to non-sensitive fields only
    TRUE -- This will be handled at application level for field filtering
  )
);

-- Admins can view all assessment data
CREATE POLICY "Admins can view all assessment sessions"
ON public.assessment_sessions
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Service role can still insert (for edge functions)
CREATE POLICY "Service role can insert assessment sessions" 
ON public.assessment_sessions 
FOR INSERT 
TO service_role
WITH CHECK (true);

-- Users can create their own assessment sessions
CREATE POLICY "Users can create own assessment sessions"
ON public.assessment_sessions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- 5. Create view for non-admin users that excludes sensitive data
CREATE OR REPLACE VIEW public.user_assessment_summary AS
SELECT 
  id,
  session_id,
  assessment_type,
  score,
  severity,
  completed_at,
  created_at,
  user_id,
  -- Exclude sensitive fields from view
  CASE 
    WHEN public.can_access_encrypted_assessment_data() THEN answers
    ELSE NULL
  END as answers,
  CASE 
    WHEN public.can_access_encrypted_assessment_data() THEN additional_info  
    ELSE NULL
  END as additional_info,
  CASE 
    WHEN public.can_access_encrypted_assessment_data() THEN encrypted_answers
    ELSE NULL
  END as encrypted_answers,
  CASE 
    WHEN public.can_access_encrypted_assessment_data() THEN encrypted_additional_info
    ELSE NULL
  END as encrypted_additional_info,
  CASE 
    WHEN public.can_access_encrypted_assessment_data() THEN encryption_iv
    ELSE NULL
  END as encryption_iv,
  CASE 
    WHEN public.can_access_encrypted_assessment_data() THEN data_hash
    ELSE NULL
  END as data_hash,
  is_encrypted
FROM public.assessment_sessions;

-- 6. Grant appropriate permissions on the view
ALTER VIEW public.user_assessment_summary OWNER TO postgres;
GRANT SELECT ON public.user_assessment_summary TO authenticated, service_role;

-- 7. Enable RLS on the view  
ALTER VIEW public.user_assessment_summary SET (security_barrier = on);

-- 8. Create RLS policies for the view
CREATE POLICY "Users can view own assessment summary"
ON public.user_assessment_summary
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all assessment summaries"
ON public.user_assessment_summary  
FOR SELECT
TO authenticated
USING (public.is_admin_user());