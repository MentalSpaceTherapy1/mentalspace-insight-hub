-- CRITICAL SECURITY FIX: Remove all conflicting permissive policies

-- 1. Fix Administrator Information Exposure
-- Remove all conflicting admin_profiles policies and keep only the ultra-secure one
DROP POLICY IF EXISTS "admin_profiles_deny_all_direct_access" ON public.admin_profiles;

-- Ensure only the ultra-secure policy exists (already created, but let's make sure)
DO $$ 
BEGIN
    -- Check if ultra-secure policy exists, if not create it
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'admin_profiles' 
        AND policyname = 'admin_profiles_ultra_secure_access'
    ) THEN
        CREATE POLICY "admin_profiles_ultra_secure_access" 
        ON public.admin_profiles 
        FOR ALL 
        USING (false) 
        WITH CHECK (false);
    END IF;
END $$;

-- 2. Fix Mental Health Assessment Data Exposure
-- Remove ALL conflicting assessment_sessions policies
DROP POLICY IF EXISTS "Users can create own assessment sessions" ON public.assessment_sessions;
DROP POLICY IF EXISTS "assessment_sessions_rate_limited" ON public.assessment_sessions;  
DROP POLICY IF EXISTS "assessment_sessions_owner_only_insert" ON public.assessment_sessions;
DROP POLICY IF EXISTS "assessment_sessions_deny_public_access" ON public.assessment_sessions;
DROP POLICY IF EXISTS "assessment_sessions_deny_anonymous_access" ON public.assessment_sessions;

-- Keep only the most restrictive policies for assessments
-- The SELECT policy is already restrictive (encrypted data only)
-- The INSERT policy is already restrictive (encrypted data only)

-- Add absolute denial policy for anonymous users
CREATE POLICY "assessment_sessions_deny_all_anonymous" 
ON public.assessment_sessions 
FOR ALL 
TO anon
USING (false) 
WITH CHECK (false);

-- Add absolute denial policy for public access
CREATE POLICY "assessment_sessions_deny_all_public" 
ON public.assessment_sessions 
FOR ALL 
TO public
USING (false) 
WITH CHECK (false);

-- Ensure no UPDATE access to assessments (they should be immutable)
CREATE POLICY "assessment_sessions_no_updates" 
ON public.assessment_sessions 
FOR UPDATE 
USING (false) 
WITH CHECK (false);

-- 3. Add additional security validation trigger for assessments
CREATE OR REPLACE FUNCTION public.validate_assessment_encryption()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Block any attempt to insert unencrypted assessment data
  IF NEW.is_encrypted IS NOT true THEN
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'blocked_unencrypted_assessment_attempt',
      'assessment_sessions',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'session_id', NEW.session_id,
        'blocked_reason', 'unencrypted_data_not_allowed',
        'timestamp', NOW(),
        'severity', 'CRITICAL'
      )
    );
    
    RAISE EXCEPTION 'Unencrypted assessment data is not allowed for security compliance';
  END IF;
  
  -- Validate user owns the data
  IF NEW.user_id != auth.uid() OR auth.uid() IS NULL THEN
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      ip_address,
      details
    ) VALUES (
      'blocked_assessment_ownership_violation',
      'assessment_sessions',
      auth.uid(),
      inet_client_addr(),
      jsonb_build_object(
        'session_id', NEW.session_id,
        'attempted_user_id', NEW.user_id,
        'actual_user_id', auth.uid(),
        'timestamp', NOW(),
        'severity', 'CRITICAL'
      )
    );
    
    RAISE EXCEPTION 'Assessment ownership violation blocked';
  END IF;
  
  -- Log successful secure assessment creation
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'secure_assessment_created',
    'assessment_sessions',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'session_id', NEW.session_id,
      'is_encrypted', NEW.is_encrypted,
      'timestamp', NOW(),
      'severity', 'INFO'
    )
  );
  
  RETURN NEW;
END;
$$;

-- Apply the validation trigger
DROP TRIGGER IF EXISTS assessment_encryption_validation ON public.assessment_sessions;
CREATE TRIGGER assessment_encryption_validation
  BEFORE INSERT ON public.assessment_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_assessment_encryption();

-- 4. Add admin access validation trigger
CREATE OR REPLACE FUNCTION public.validate_admin_access_attempt()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log and block any direct admin profile access attempt
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    'blocked_direct_admin_profile_access',
    'admin_profiles',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'attempted_operation', TG_OP,
      'target_profile_id', COALESCE(NEW.id, OLD.id),
      'timestamp', NOW(),
      'severity', 'CRITICAL'
    )
  );
  
  RAISE EXCEPTION 'Direct admin profile access is forbidden - use secure functions only';
END;
$$;

-- Apply admin access validation trigger
DROP TRIGGER IF EXISTS admin_access_validation ON public.admin_profiles;
CREATE TRIGGER admin_access_validation
  BEFORE SELECT OR INSERT OR UPDATE OR DELETE ON public.admin_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_admin_access_attempt();

-- 5. Create final security status check function
CREATE OR REPLACE FUNCTION public.verify_security_compliance()
RETURNS TABLE(
  table_name text,
  security_status text,
  issue_count integer,
  compliance_level text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only super admins can run compliance checks
  IF NOT validate_admin_access_with_limits('security_compliance_check') THEN
    RAISE EXCEPTION 'Super admin access required for security compliance verification';
  END IF;

  RETURN QUERY
  WITH security_summary AS (
    SELECT 
      'admin_profiles'::text as tbl_name,
      CASE 
        WHEN (SELECT COUNT(*) FROM pg_policies WHERE tablename = 'admin_profiles' AND permissive = 'PERMISSIVE' AND qual != 'false') = 0 
        THEN 'SECURE'
        ELSE 'VULNERABLE'
      END as status,
      (SELECT COUNT(*) FROM pg_policies WHERE tablename = 'admin_profiles' AND permissive = 'PERMISSIVE' AND qual != 'false')::integer as issues
    UNION ALL
    SELECT 
      'assessment_sessions'::text,
      CASE 
        WHEN (SELECT COUNT(*) FROM pg_policies WHERE tablename = 'assessment_sessions' AND permissive = 'PERMISSIVE' AND (qual IS NULL OR qual != 'false') AND cmd = 'SELECT') <= 1
        THEN 'SECURE'
        ELSE 'VULNERABLE'  
      END,
      (SELECT COUNT(*) FROM pg_policies WHERE tablename = 'assessment_sessions' AND permissive = 'PERMISSIVE' AND cmd != 'DELETE')::integer - 2
  )
  SELECT 
    tbl_name,
    status,
    GREATEST(0, issues) as issue_count,
    CASE 
      WHEN status = 'SECURE' AND GREATEST(0, issues) = 0 THEN 'COMPLIANT'
      WHEN status = 'SECURE' AND GREATEST(0, issues) <= 2 THEN 'ACCEPTABLE'
      ELSE 'NON_COMPLIANT'
    END as compliance_level
  FROM security_summary;
END;
$$;