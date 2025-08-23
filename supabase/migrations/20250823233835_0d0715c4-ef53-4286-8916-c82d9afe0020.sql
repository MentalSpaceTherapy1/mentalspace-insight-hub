-- Fix function security: Set proper search_path for all functions
-- This addresses the "Function Search Path Mutable" security warning

-- Update the log_chat_session_access function with proper search_path
CREATE OR REPLACE FUNCTION log_chat_session_access()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public
AS $$
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
$$;