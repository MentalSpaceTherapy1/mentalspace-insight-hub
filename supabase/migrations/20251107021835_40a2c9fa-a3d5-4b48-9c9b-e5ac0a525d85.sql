-- Create function to get spam statistics
CREATE OR REPLACE FUNCTION public.get_spam_statistics()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
BEGIN
  -- Check if user is admin
  IF NOT public.is_admin_user() THEN
    RAISE EXCEPTION 'Unauthorized access';
  END IF;

  SELECT json_build_object(
    'total_submissions', (
      SELECT COUNT(*) 
      FROM form_submissions 
      WHERE created_at > NOW() - INTERVAL '24 hours'
    ),
    'honeypot_blocked', (
      SELECT COUNT(*) 
      FROM form_submissions 
      WHERE blocked_reason = 'honeypot'
      AND created_at > NOW() - INTERVAL '24 hours'
    ),
    'timing_blocked', (
      SELECT COUNT(*) 
      FROM form_submissions 
      WHERE blocked_reason = 'timing'
      AND created_at > NOW() - INTERVAL '24 hours'
    ),
    'rate_limit_blocked', (
      SELECT COUNT(*) 
      FROM form_submissions 
      WHERE blocked_reason = 'rate_limit'
      AND created_at > NOW() - INTERVAL '24 hours'
    ),
    'suspicious_ips', (
      SELECT COUNT(DISTINCT ip_address)
      FROM form_submissions
      WHERE is_blocked = true
      AND created_at > NOW() - INTERVAL '24 hours'
    ),
    'top_spam_ips', (
      SELECT json_agg(
        json_build_object(
          'ip_address', ip_address,
          'blocked_count', blocked_count,
          'block_reason', block_reason
        )
      )
      FROM (
        SELECT 
          ip_address,
          COUNT(*) as blocked_count,
          blocked_reason as block_reason
        FROM form_submissions
        WHERE is_blocked = true
        AND created_at > NOW() - INTERVAL '24 hours'
        GROUP BY ip_address, blocked_reason
        ORDER BY blocked_count DESC
        LIMIT 10
      ) top_ips
    )
  ) INTO result;

  RETURN result;
END;
$$;

-- Create function to get recent blocked attempts
CREATE OR REPLACE FUNCTION public.get_recent_blocked_attempts(limit_count integer DEFAULT 50)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
BEGIN
  -- Check if user is admin
  IF NOT public.is_admin_user() THEN
    RAISE EXCEPTION 'Unauthorized access';
  END IF;

  SELECT json_agg(
    json_build_object(
      'id', id,
      'created_at', created_at,
      'ip_address', ip_address,
      'blocked_reason', blocked_reason,
      'form_type', form_type,
      'user_agent', user_agent,
      'form_data', form_data
    )
  )
  INTO result
  FROM (
    SELECT *
    FROM form_submissions
    WHERE is_blocked = true
    AND created_at > NOW() - INTERVAL '24 hours'
    ORDER BY created_at DESC
    LIMIT limit_count
  ) blocked;

  RETURN COALESCE(result, '[]'::json);
END;
$$;

-- Create function to get submission patterns
CREATE OR REPLACE FUNCTION public.get_submission_patterns(hours_back integer DEFAULT 24)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result json;
BEGIN
  -- Check if user is admin
  IF NOT public.is_admin_user() THEN
    RAISE EXCEPTION 'Unauthorized access';
  END IF;

  SELECT json_agg(
    json_build_object(
      'hour', hour_label,
      'successful', successful_count,
      'blocked', blocked_count,
      'unique_ips', unique_ips
    )
  )
  INTO result
  FROM (
    SELECT 
      TO_CHAR(date_trunc('hour', created_at), 'HH24:00') as hour_label,
      COUNT(*) FILTER (WHERE NOT is_blocked) as successful_count,
      COUNT(*) FILTER (WHERE is_blocked) as blocked_count,
      COUNT(DISTINCT ip_address) as unique_ips
    FROM form_submissions
    WHERE created_at > NOW() - INTERVAL '1 hour' * hours_back
    GROUP BY date_trunc('hour', created_at)
    ORDER BY date_trunc('hour', created_at) DESC
  ) patterns;

  RETURN COALESCE(result, '[]'::json);
END;
$$;