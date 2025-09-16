-- Security Fix: Admin Profile Protection Enhancement
-- This migration addresses the potential security vulnerability where admin email addresses
-- could be harvested due to conflicting RLS policies on the admin_profiles table

-- First, let's create a more secure admin verification function
CREATE OR REPLACE FUNCTION public.is_verified_admin()
RETURNS boolean
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  admin_count INTEGER;
  current_user_id UUID;
BEGIN
  -- Get current user ID
  current_user_id := auth.uid();
  
  -- Return false immediately if no user is authenticated
  IF current_user_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Count active admin profiles for the current user
  SELECT COUNT(*)
  INTO admin_count
  FROM public.admin_profiles
  WHERE user_id = current_user_id 
    AND is_active = true
    AND created_at < now() - INTERVAL '5 minutes'; -- Prevent immediate admin escalation
  
  RETURN admin_count > 0;
END;
$$;