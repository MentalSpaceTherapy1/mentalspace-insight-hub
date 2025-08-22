-- Create a function to set up the first admin account
CREATE OR REPLACE FUNCTION public.setup_first_admin(
  admin_email TEXT,
  admin_password TEXT,
  admin_full_name TEXT
)
RETURNS TEXT AS $$
DECLARE
  new_user_id UUID;
  admin_count INTEGER;
BEGIN
  -- Check if any admin already exists
  SELECT COUNT(*) INTO admin_count FROM public.admin_profiles;
  
  IF admin_count > 0 THEN
    RETURN 'Error: Admin accounts already exist. This function is only for initial setup.';
  END IF;

  -- Create the auth user (this would normally be done through Supabase Auth)
  -- Instead, let's create a function to promote existing users to admin
  RETURN 'Please sign up through Supabase Auth first, then use the promote_user_to_admin function.';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create a function to promote any existing user to admin (for initial setup only)
CREATE OR REPLACE FUNCTION public.promote_user_to_admin(
  user_email TEXT,
  full_name TEXT DEFAULT NULL
)
RETURNS TEXT AS $$
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
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create a temporary function for initial admin setup that bypasses normal restrictions
CREATE OR REPLACE FUNCTION public.create_initial_admin(
  admin_email TEXT,
  admin_full_name TEXT
)
RETURNS TEXT AS $$
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
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;