-- Create a simpler admin check function that doesn't have transaction issues
CREATE OR REPLACE FUNCTION public.get_admin_profile_simple(profile_user_id uuid DEFAULT NULL)
RETURNS TABLE(
  id uuid, 
  user_id uuid, 
  full_name text, 
  role admin_role, 
  is_active boolean, 
  created_at timestamp with time zone, 
  updated_at timestamp with time zone
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
BEGIN
  -- Simple check: return profile if user is querying their own profile and they're an active admin
  IF profile_user_id IS NULL OR profile_user_id = auth.uid() THEN
    RETURN QUERY
    SELECT 
      ap.id,
      ap.user_id,
      ap.full_name,
      ap.role,
      ap.is_active,
      ap.created_at,
      ap.updated_at
    FROM admin_profiles ap
    WHERE ap.user_id = auth.uid()
      AND ap.is_active = true;
  ELSE
    -- For querying other profiles, must be a super_admin
    IF EXISTS (
      SELECT 1 FROM admin_profiles 
      WHERE user_id = auth.uid() 
      AND role = 'super_admin' 
      AND is_active = true
    ) THEN
      RETURN QUERY
      SELECT 
        ap.id,
        ap.user_id,
        ap.full_name,
        ap.role,
        ap.is_active,
        ap.created_at,
        ap.updated_at
      FROM admin_profiles ap
      WHERE ap.user_id = profile_user_id
        AND ap.is_active = true;
    END IF;
  END IF;
END;
$$;