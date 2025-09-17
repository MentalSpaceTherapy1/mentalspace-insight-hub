-- Clean up problematic security definer elements
-- Remove the view that's causing security warnings while keeping core protections

-- 1. Drop the problematic security definer view
DROP VIEW IF EXISTS public.user_assessment_summary;

-- 2. Remove the problematic security definer function
DROP FUNCTION IF EXISTS public.can_access_encrypted_assessment_data();

-- 3. Keep the core RLS policies but simplify them
-- Drop and recreate without the problematic security definer references

DROP POLICY IF EXISTS "Users can view own basic assessment data" ON public.assessment_sessions;
DROP POLICY IF EXISTS "Admins can view all assessment sessions" ON public.assessment_sessions;

-- Create simple, secure RLS policies without security definer issues
CREATE POLICY "Users can view own assessment sessions"
ON public.assessment_sessions
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all assessment sessions"
ON public.assessment_sessions
FOR SELECT
TO authenticated
USING (is_admin_user());

-- 4. Remove the problematic audit logging function that may cause issues
DROP FUNCTION IF EXISTS public.log_assessment_data_access();

-- 5. Keep the simple encrypted storage columns (they're just data columns, no security risk)
-- These remain: encrypted_answers, encrypted_additional_info, encryption_iv, data_hash, is_encrypted

-- 6. Ensure proper indexes remain for performance
CREATE INDEX IF NOT EXISTS idx_assessment_sessions_user_encrypted 
ON public.assessment_sessions(user_id, is_encrypted) 
WHERE user_id IS NOT NULL;