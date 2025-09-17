-- Fix admin email harvesting vulnerability by creating secure profile access functions

-- Create a secure function that only returns necessary profile fields
CREATE OR REPLACE FUNCTION public.get_secure_admin_profile(target_user_id UUID DEFAULT NULL)
RETURNS TABLE (
  id UUID,
  user_id UUID, 
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
  
  -- Return secure profile data (no email/full_name)
  RETURN QUERY
  SELECT 
    ap.id,
    ap.user_id,
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

-- Create a function for super admins to access full profile data when needed
CREATE OR REPLACE FUNCTION public.get_full_admin_profiles()
RETURNS TABLE (
  id UUID,
  user_id UUID,
  email TEXT,
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
  -- Only super admins can access full profile data
  IF NOT EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() 
    AND role = 'super_admin' 
    AND is_active = true
  ) THEN
    RAISE EXCEPTION 'Access denied: Super admin privileges required';
  END IF;
  
  -- Return full profile data for super admins only
  RETURN QUERY
  SELECT 
    ap.id,
    ap.user_id,
    ap.email,
    ap.full_name,
    ap.role,
    ap.is_active,
    ap.created_at,
    ap.updated_at
  FROM public.admin_profiles ap
  WHERE ap.is_active = true
  ORDER BY ap.created_at DESC;
END;
$$;