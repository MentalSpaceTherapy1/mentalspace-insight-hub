-- Drop and recreate secure function to include full_name for UI display  
DROP FUNCTION IF EXISTS public.get_secure_admin_profile(UUID);

CREATE OR REPLACE FUNCTION public.get_secure_admin_profile(target_user_id UUID DEFAULT NULL)
RETURNS TABLE (
  id UUID,
  user_id UUID, 
  full_name TEXT,
  role admin_role,
  is_active BOOLEAN,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Use provided user_id or fall back to authenticated user
  target_user_id := COALESCE(target_user_id, auth.uid());
  
  -- Return secure profile data (includes full_name for UI, but no email)
  RETURN QUERY
  SELECT 
    ap.id,
    ap.user_id,
    ap.full_name,
    ap.role,
    ap.is_active,
    ap.created_at,
    ap.updated_at
  FROM public.admin_profiles ap
  WHERE ap.user_id = target_user_id
    AND ap.is_active = true
    AND public.check_admin_access() = true;
END;
$$;