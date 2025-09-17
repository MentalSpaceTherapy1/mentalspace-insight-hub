-- Fix intermittent admin lockout by removing 10-minute cooldown in check_admin_access
-- This ensures active admins have immediate access after profile creation

CREATE OR REPLACE FUNCTION public.check_admin_access()
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  current_user_id UUID;
  admin_exists BOOLEAN := FALSE;
BEGIN
  -- Get current authenticated user ID
  current_user_id := auth.uid();
  
  -- Return false immediately if no user is authenticated
  IF current_user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Check if the current user has an active admin profile (no time delay)
  SELECT EXISTS(
    SELECT 1 
    FROM public.admin_profiles 
    WHERE user_id = current_user_id 
      AND is_active = true
  ) INTO admin_exists;
  
  RETURN admin_exists;
END;
$function$;