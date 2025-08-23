-- Critical security fixes for database functions and data modification audit logging

-- 1. Fix function security by setting proper search_path for all functions
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_profiles 
        WHERE user_id = auth.uid() 
        AND is_active = true
    );
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
SET search_path = public;

CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.admin_profiles 
    WHERE user_id = auth.uid() 
    AND is_active = true
  );
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER
SET search_path = public;

CREATE OR REPLACE FUNCTION public.setup_first_admin(admin_email text, admin_password text, admin_full_name text)
RETURNS text AS $$
DECLARE
  new_user_id UUID;
  admin_count INTEGER;
BEGIN
  -- Check if any admin already exists
  SELECT COUNT(*) INTO admin_count FROM public.admin_profiles;
  
  IF admin_count > 0 THEN
    RETURN 'Error: Admin accounts already exist. This function is only for initial setup.';
  END IF;

  RETURN 'Please sign up through Supabase Auth first, then use the promote_user_to_admin function.';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

CREATE OR REPLACE FUNCTION public.promote_user_to_admin(user_email text, full_name text DEFAULT NULL::text)
RETURNS text AS $$
DECLARE
  target_user_id UUID;
  admin_count INTEGER;
  user_record RECORD;
BEGIN
  -- Check if any admin already exists (security measure)
  SELECT COUNT(*) INTO admin_count FROM public.admin_profiles;
  
  -- Allow this only if no admins exist OR if called by existing super_admin
  IF admin_count > 0 AND NOT (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE user_id = auth.uid() 
      AND role = 'super_admin' 
      AND is_active = true
    )
  ) THEN
    RETURN 'Error: Only existing super admins can promote users, or use this for initial setup when no admins exist.';
  END IF;

  -- Find the user by email in auth.users
  SELECT id INTO target_user_id 
  FROM auth.users 
  WHERE email = user_email 
  LIMIT 1;

  IF target_user_id IS NULL THEN
    RETURN 'Error: No user found with email: ' || user_email || '. Please ensure the user has signed up first.';
  END IF;

  -- Check if user is already an admin
  IF EXISTS (SELECT 1 FROM public.admin_profiles WHERE user_id = target_user_id) THEN
    RETURN 'Error: User is already an admin.';
  END IF;

  -- Create admin profile
  INSERT INTO public.admin_profiles (
    user_id,
    email,
    full_name,
    role,
    is_active
  ) VALUES (
    target_user_id,
    user_email,
    COALESCE(full_name, user_email),
    'super_admin',
    true
  );

  RETURN 'Success: User ' || user_email || ' has been promoted to super admin.';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

CREATE OR REPLACE FUNCTION public.create_initial_admin(admin_email text, admin_full_name text)
RETURNS text AS $$
DECLARE
  target_user_id UUID;
  admin_count INTEGER;
BEGIN
  -- Check if any admin already exists
  SELECT COUNT(*) INTO admin_count FROM public.admin_profiles;
  
  IF admin_count > 0 THEN
    RETURN 'Error: Admin accounts already exist. Initial setup is complete.';
  END IF;

  -- Find the user by email in auth.users
  SELECT id INTO target_user_id 
  FROM auth.users 
  WHERE email = admin_email 
  LIMIT 1;

  IF target_user_id IS NULL THEN
    RETURN 'Error: No user found with email: ' || admin_email || '. Please sign up through Supabase Auth first at /admin';
  END IF;

  -- Create admin profile
  INSERT INTO public.admin_profiles (
    user_id,
    email,
    full_name,
    role,
    is_active
  ) VALUES (
    target_user_id,
    admin_email,
    admin_full_name,
    'super_admin',
    true
  );

  RETURN 'Success: Initial admin account created for ' || admin_email;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public;

-- 2. Add audit triggers to sensitive tables for data modification tracking
-- Note: PostgreSQL doesn't support SELECT triggers, only INSERT/UPDATE/DELETE

DROP TRIGGER IF EXISTS audit_assessment_contacts_changes ON public.assessment_contacts;
CREATE TRIGGER audit_assessment_contacts_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.assessment_contacts
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();

DROP TRIGGER IF EXISTS audit_form_submissions_changes ON public.form_submissions;  
CREATE TRIGGER audit_form_submissions_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.form_submissions
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();

DROP TRIGGER IF EXISTS audit_assessment_sessions_changes ON public.assessment_sessions;
CREATE TRIGGER audit_assessment_sessions_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.assessment_sessions
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();

DROP TRIGGER IF EXISTS audit_admin_profiles_changes ON public.admin_profiles;
CREATE TRIGGER audit_admin_profiles_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.admin_profiles
  FOR EACH ROW EXECUTE FUNCTION public.log_sensitive_access();