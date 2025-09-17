-- Enhanced Security for Assessment Data (Corrected)
-- Add encrypted storage columns and stronger access controls

-- 1. Add encrypted columns to assessment_sessions
ALTER TABLE public.assessment_sessions 
ADD COLUMN IF NOT EXISTS encrypted_answers TEXT,
ADD COLUMN IF NOT EXISTS encrypted_additional_info TEXT, 
ADD COLUMN IF NOT EXISTS encryption_iv TEXT,
ADD COLUMN IF NOT EXISTS data_hash TEXT,
ADD COLUMN IF NOT EXISTS is_encrypted BOOLEAN DEFAULT false;

-- 2. Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_assessment_sessions_encrypted 
ON public.assessment_sessions(is_encrypted) WHERE is_encrypted = true;

CREATE INDEX IF NOT EXISTS idx_assessment_sessions_user_id 
ON public.assessment_sessions(user_id) WHERE user_id IS NOT NULL;

-- 3. Create function to check if user can access encrypted data
CREATE OR REPLACE FUNCTION public.can_access_encrypted_assessment_data()
RETURNS BOOLEAN AS $$
BEGIN
  -- Only admins can access encrypted sensitive data
  RETURN public.is_admin_user();
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public;

-- 4. Drop existing policies to recreate them
DROP POLICY IF EXISTS "Users can view own assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Admins can view all assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Service role can insert assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Users can create own assessment sessions" ON public.assessment_sessions;

-- 5. Create enhanced RLS policies for encrypted data protection

-- Users can view their own basic assessment data (sensitive fields handled at app level)
CREATE POLICY "Users can view own basic assessment data"
ON public.assessment_sessions
FOR SELECT
TO authenticated  
USING (auth.uid() = user_id);

-- Admins can view all assessment data including encrypted fields
CREATE POLICY "Admins can view all assessment sessions"
ON public.assessment_sessions
FOR SELECT
TO authenticated
USING (public.is_admin_user());

-- Service role can insert (for edge functions)
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

-- 6. Create secure view for user access (excludes sensitive encrypted data)
CREATE OR REPLACE VIEW public.user_assessment_summary AS
SELECT 
  id,
  session_id,
  assessment_type,
  score,
  severity,
  recommendations,
  completed_at,
  created_at,
  user_id,
  is_encrypted,
  -- Non-admin users see NULL for sensitive data
  CASE 
    WHEN public.can_access_encrypted_assessment_data() THEN answers
    ELSE jsonb_build_object('message', 'Encrypted - Admin access required')
  END as answers,
  CASE 
    WHEN public.can_access_encrypted_assessment_data() THEN additional_info  
    ELSE jsonb_build_object('message', 'Encrypted - Admin access required')
  END as additional_info
FROM public.assessment_sessions;

-- 7. Create function for secure assessment data access logging
CREATE OR REPLACE FUNCTION public.log_assessment_data_access()
RETURNS TRIGGER AS $$
BEGIN
  -- Log when sensitive assessment data is accessed
  IF (TG_OP = 'SELECT') THEN
    INSERT INTO public.analytics_events (
      event_type,
      event_data,
      ip_address,
      session_id
    ) VALUES (
      'assessment_data_viewed',
      jsonb_build_object(
        'assessment_id', NEW.id,
        'assessment_type', NEW.assessment_type,
        'user_id', auth.uid(),
        'is_admin', public.is_admin_user(),
        'timestamp', NOW()
      ),
      inet_client_addr(),
      current_setting('request.jwt.claims', true)::json->>'session_id'
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;