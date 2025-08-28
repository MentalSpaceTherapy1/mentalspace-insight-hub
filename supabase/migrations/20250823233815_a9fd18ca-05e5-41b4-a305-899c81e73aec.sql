-- Fix chat session security: Replace IP-based access with user authentication
-- This prevents users sharing IPs from accessing each other's private therapy conversations

-- Add user_id column to chat_sessions for proper user association
ALTER TABLE public.chat_sessions 
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Update existing policies to use user authentication instead of IP matching
DROP POLICY IF EXISTS "Users can read their own chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Users can update their own chat sessions" ON public.chat_sessions;

-- Create new secure policies based on user authentication
CREATE POLICY "Users can read their own authenticated chat sessions" 
ON public.chat_sessions 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own authenticated chat sessions" 
ON public.chat_sessions 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

-- Create policy for authenticated users to create their own sessions
CREATE POLICY "Users can create their own chat sessions" 
ON public.chat_sessions 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Block anonymous access completely for chat sessions
CREATE POLICY "Anonymous users cannot access chat sessions" 
ON public.chat_sessions 
FOR ALL
TO anon
USING (false);

-- Admin access to all chat sessions (for moderation)
CREATE POLICY "Admins can view all chat sessions for moderation" 
ON public.chat_sessions 
FOR SELECT 
TO authenticated
USING (is_admin_user());

-- Update rate limiting to be user-based instead of IP-based
DROP POLICY IF EXISTS "Rate limited chat session creation" ON public.chat_sessions;
CREATE POLICY "Rate limited chat session creation per user" 
ON public.chat_sessions 
FOR INSERT 
TO authenticated
WITH CHECK (
  (SELECT count(*) 
   FROM chat_sessions 
   WHERE user_id = auth.uid() 
   AND created_at > (now() - interval '1 hour')
  ) < 10
);

-- Audit trigger for chat session access
CREATE OR REPLACE FUNCTION log_chat_session_access()
RETURNS TRIGGER AS $$
BEGIN
  -- Log access to chat sessions for security monitoring
  INSERT INTO public.security_audit_log (
    event_type,
    table_name,
    user_id,
    ip_address,
    details
  ) VALUES (
    TG_OP || '_chat_session',
    'chat_sessions',
    auth.uid(),
    inet_client_addr(),
    jsonb_build_object(
      'session_id', COALESCE(NEW.session_id, OLD.session_id),
      'timestamp', now()
    )
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for chat session audit logging
DROP TRIGGER IF EXISTS chat_session_audit_trigger ON public.chat_sessions;
CREATE TRIGGER chat_session_audit_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.chat_sessions
  FOR EACH ROW EXECUTE FUNCTION log_chat_session_access();