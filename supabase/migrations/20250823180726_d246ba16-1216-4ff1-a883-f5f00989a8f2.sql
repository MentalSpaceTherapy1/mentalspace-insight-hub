-- Create chat sessions table
CREATE TABLE public.chat_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_activity TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  messages JSONB[] DEFAULT '{}',
  user_context JSONB DEFAULT '{}',
  ip_address INET
);

-- Create chat safety logs table
CREATE TABLE public.chat_safety_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT REFERENCES public.chat_sessions(session_id),
  trigger_type TEXT NOT NULL,
  message_content TEXT,
  action_taken TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_safety_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for chat sessions (rate limited, anonymous access)
CREATE POLICY "Rate limited chat session creation" 
ON public.chat_sessions 
FOR INSERT 
WITH CHECK (
  (SELECT count(*) FROM chat_sessions 
   WHERE ip_address = inet_client_addr() 
   AND created_at > now() - interval '1 hour') < 10
);

CREATE POLICY "Users can read their own chat sessions" 
ON public.chat_sessions 
FOR SELECT 
USING (ip_address = inet_client_addr());

CREATE POLICY "Users can update their own chat sessions" 
ON public.chat_sessions 
FOR UPDATE 
USING (ip_address = inet_client_addr());

-- Create policies for safety logs (admins only)
CREATE POLICY "Admins can view all safety logs" 
ON public.chat_safety_logs 
FOR SELECT 
USING (is_admin_user());

CREATE POLICY "System can insert safety logs" 
ON public.chat_safety_logs 
FOR INSERT 
WITH CHECK (true);

-- Create index for performance
CREATE INDEX idx_chat_sessions_session_id ON public.chat_sessions(session_id);
CREATE INDEX idx_chat_sessions_ip_created ON public.chat_sessions(ip_address, created_at);
CREATE INDEX idx_chat_safety_logs_session_id ON public.chat_safety_logs(session_id);