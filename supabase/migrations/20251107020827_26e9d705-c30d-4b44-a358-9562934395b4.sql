-- Security Fix: Add explicit deny policies for newsletter_subscribers table
-- This prevents unauthorized access even if admin checks are bypassed
CREATE POLICY "Deny all public access to subscribers"
ON newsletter_subscribers
FOR ALL
TO authenticated, anon
USING (false)
WITH CHECK (false);

-- Security Fix: Add explicit deny policies for newsletter_email_logs table
-- This protects customer privacy data from unauthorized access
CREATE POLICY "Deny all public access to email logs"
ON newsletter_email_logs
FOR ALL
TO authenticated, anon
USING (false)
WITH CHECK (false);

-- Security Fix: Restrict security_audit_log to service role only and make immutable
-- First, drop the overly permissive policy
DROP POLICY IF EXISTS "System can log security events" ON security_audit_log;

-- Only service role can insert audit logs
CREATE POLICY "Only service role can insert audit logs"
ON security_audit_log
FOR INSERT
TO service_role
WITH CHECK (true);

-- Make audit logs immutable (cannot be updated)
CREATE POLICY "Audit logs are immutable"
ON security_audit_log
FOR UPDATE
USING (false)
WITH CHECK (false);

-- Make audit logs permanent (cannot be deleted)
CREATE POLICY "Audit logs cannot be deleted"
ON security_audit_log
FOR DELETE
USING (false);