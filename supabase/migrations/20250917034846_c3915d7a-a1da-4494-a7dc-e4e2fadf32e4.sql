-- Fix: get_secure_admin_profile must not be STABLE because it performs writes via validation/logging
-- Recreate function without STABLE so PostgREST does not enforce a read-only transaction
CREATE OR REPLACE FUNCTION public.get_secure_admin_profile(target_user_id uuid DEFAULT NULL::uuid)
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
SET search_path TO 'public'
AS $function$
BEGIN
  -- Use the secure access method which validates and logs
  RETURN QUERY
  SELECT * FROM public.get_admin_profile_secure(target_user_id);
END;
$function$;