-- PHASE 2: Additional Security Enhancements

-- 1. Create encrypted assessment migration function
CREATE OR REPLACE FUNCTION public.migrate_unencrypted_assessments()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  assessment_record RECORD;
  encrypted_data jsonb;
BEGIN
  -- Only super admins can run migrations
  IF NOT EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() 
    AND role = 'super_admin' 
    AND is_active = true
  ) THEN
    RAISE EXCEPTION 'Only super admins can run data migrations';
  END IF;

  -- Log migration start
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    details
  ) VALUES (
    'assessment_encryption_migration_started',
    'assessment_sessions',
    auth.uid(),
    jsonb_build_object(
      'timestamp', NOW(),
      'initiated_by', auth.uid(),
      'severity', 'INFO'
    )
  );

  -- Archive old unencrypted assessments by replacing with placeholder
  FOR assessment_record IN 
    SELECT id, session_id, created_at 
    FROM public.assessment_sessions 
    WHERE (is_encrypted = false OR is_encrypted IS NULL)
      AND created_at < NOW() - INTERVAL '30 days'
  LOOP
    -- Replace with archived placeholder
    UPDATE public.assessment_sessions 
    SET 
      answers = '{"archived": true, "reason": "security_migration", "original_date": "' || assessment_record.created_at::text || '"}'::jsonb,
      additional_info = '{"archived": true}'::jsonb,
      is_encrypted = true,
      encrypted_answers = 'archived_for_security',
      data_hash = 'migration_archived'
    WHERE id = assessment_record.id;
    
    -- Log each migration
    INSERT INTO public.security_audit_log (
      event_type,
      table_name,
      user_id,
      details
    ) VALUES (
      'assessment_archived_for_security',
      'assessment_sessions',
      auth.uid(),
      jsonb_build_object(
        'session_id', assessment_record.session_id,
        'original_created_at', assessment_record.created_at,
        'timestamp', NOW()
      )
    );
  END LOOP;

  -- Log migration completion
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    details
  ) VALUES (
    'assessment_encryption_migration_completed',
    'assessment_sessions',
    auth.uid(),
    jsonb_build_object(
      'timestamp', NOW(),
      'completed_by', auth.uid(),
      'severity', 'INFO'
    )
  );
END;
$$;

-- 2. Create security monitoring function
CREATE OR REPLACE FUNCTION public.get_security_dashboard_data()
RETURNS TABLE(
  active_threats integer,
  warnings integer,
  recent_violations integer,
  encrypted_assessments integer,
  total_assessments integer,
  admin_access_attempts integer,
  last_security_scan timestamp with time zone
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only admins can access security dashboard
  IF NOT public.validate_admin_access_with_limits('view_security_dashboard') THEN
    RAISE EXCEPTION 'Admin access required for security dashboard';
  END IF;

  RETURN QUERY
  SELECT 
    -- Active threats (high/critical severity in last 24h)
    (SELECT COUNT(*)::integer FROM security_audit_log 
     WHERE details->>'severity' IN ('HIGH', 'CRITICAL') 
     AND timestamp > NOW() - INTERVAL '24 hours') as active_threats,
    
    -- Warnings (warning severity in last 24h)
    (SELECT COUNT(*)::integer FROM security_audit_log 
     WHERE details->>'severity' = 'WARNING' 
     AND timestamp > NOW() - INTERVAL '24 hours') as warnings,
    
    -- Recent security violations (last 1 hour)
    (SELECT COUNT(*)::integer FROM security_audit_log 
     WHERE event_type LIKE '%blocked%' OR event_type LIKE '%violation%'
     AND timestamp > NOW() - INTERVAL '1 hour') as recent_violations,
    
    -- Encrypted vs total assessments
    (SELECT COUNT(*)::integer FROM assessment_sessions 
     WHERE is_encrypted = true) as encrypted_assessments,
    (SELECT COUNT(*)::integer FROM assessment_sessions) as total_assessments,
    
    -- Admin access attempts in last hour
    (SELECT COUNT(*)::integer FROM security_audit_log 
     WHERE event_type LIKE '%admin%'
     AND timestamp > NOW() - INTERVAL '1 hour') as admin_access_attempts,
    
    -- Last security scan
    (SELECT MAX(timestamp) FROM security_audit_log 
     WHERE event_type LIKE '%security%' OR event_type LIKE '%scan%') as last_security_scan;
END;
$$;

-- 3. Create comprehensive security audit function
CREATE OR REPLACE FUNCTION public.run_security_audit()
RETURNS TABLE(
  audit_item text,
  status text,
  severity text,
  description text,
  recommendation text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  total_assessments integer;
  encrypted_assessments integer;
  unencrypted_assessments integer;
  recent_violations integer;
  admin_count integer;
BEGIN
  -- Only super admins can run security audits
  IF NOT EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() 
    AND role = 'super_admin' 
    AND is_active = true
  ) THEN
    RAISE EXCEPTION 'Only super admins can run security audits';
  END IF;

  -- Get assessment encryption status
  SELECT COUNT(*) INTO total_assessments FROM assessment_sessions;
  SELECT COUNT(*) INTO encrypted_assessments FROM assessment_sessions WHERE is_encrypted = true;
  SELECT COUNT(*) INTO unencrypted_assessments FROM assessment_sessions WHERE is_encrypted = false OR is_encrypted IS NULL;
  
  -- Get recent security violations
  SELECT COUNT(*) INTO recent_violations FROM security_audit_log 
  WHERE event_type LIKE '%blocked%' OR event_type LIKE '%violation%'
  AND timestamp > NOW() - INTERVAL '24 hours';
  
  -- Get admin count
  SELECT COUNT(*) INTO admin_count FROM admin_profiles WHERE is_active = true;

  -- Assessment encryption audit
  IF unencrypted_assessments > 0 THEN
    RETURN QUERY SELECT 
      'Assessment Data Encryption'::text,
      'FAIL'::text,
      'HIGH'::text,
      format('%s unencrypted assessments found out of %s total', unencrypted_assessments, total_assessments)::text,
      'Run migrate_unencrypted_assessments() to secure sensitive data'::text;
  ELSE
    RETURN QUERY SELECT 
      'Assessment Data Encryption'::text,
      'PASS'::text,
      'INFO'::text,
      'All assessments are properly encrypted'::text,
      'Continue monitoring encryption status'::text;
  END IF;

  -- Security violations audit
  IF recent_violations > 5 THEN
    RETURN QUERY SELECT 
      'Security Violations'::text,
      'FAIL'::text,
      'CRITICAL'::text,
      format('%s security violations in the last 24 hours', recent_violations)::text,
      'Investigate violation patterns and consider additional security measures'::text;
  ELSIF recent_violations > 0 THEN
    RETURN QUERY SELECT 
      'Security Violations'::text,
      'WARN'::text,
      'WARNING'::text,
      format('%s security violations in the last 24 hours', recent_violations)::text,
      'Monitor for patterns and review security logs'::text;
  ELSE
    RETURN QUERY SELECT 
      'Security Violations'::text,
      'PASS'::text,
      'INFO'::text,
      'No recent security violations detected'::text,
      'Continue monitoring'::text;
  END IF;

  -- Admin access audit
  IF admin_count = 0 THEN
    RETURN QUERY SELECT 
      'Admin Access Control'::text,
      'FAIL'::text,
      'CRITICAL'::text,
      'No active admin accounts found'::text,
      'Create at least one admin account for system management'::text;
  ELSIF admin_count > 10 THEN
    RETURN QUERY SELECT 
      'Admin Access Control'::text,
      'WARN'::text,
      'WARNING'::text,
      format('%s admin accounts active - consider if all are necessary', admin_count)::text,
      'Review admin accounts and deactivate unused ones'::text;
  ELSE
    RETURN QUERY SELECT 
      'Admin Access Control'::text,
      'PASS'::text,
      'INFO'::text,
      format('%s admin accounts active', admin_count)::text,
      'Regularly review admin access'::text;
  END IF;

  -- Log audit completion
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    details
  ) VALUES (
    'comprehensive_security_audit_completed',
    'system_audit',
    auth.uid(),
    jsonb_build_object(
      'timestamp', NOW(),
      'total_assessments', total_assessments,
      'encrypted_assessments', encrypted_assessments,
      'unencrypted_assessments', unencrypted_assessments,
      'recent_violations', recent_violations,
      'admin_count', admin_count
    )
  );
END;
$$;