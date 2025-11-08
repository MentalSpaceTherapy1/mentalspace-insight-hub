-- Create IP blacklist table for permanent blocking of spam sources
CREATE TABLE IF NOT EXISTS public.ip_blacklist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL UNIQUE,
  reason TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  blocked_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.ip_blacklist ENABLE ROW LEVEL SECURITY;

-- Service role can manage everything (used by edge functions)
CREATE POLICY "Service role can manage IP blacklist"
  ON public.ip_blacklist
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_ip_blacklist_ip ON public.ip_blacklist(ip_address);
CREATE INDEX IF NOT EXISTS idx_ip_blacklist_active ON public.ip_blacklist(is_active) WHERE is_active = true;

-- Create function to auto-expire blacklist entries
CREATE OR REPLACE FUNCTION public.expire_ip_blacklist()
RETURNS void AS $$
BEGIN
  UPDATE public.ip_blacklist
  SET is_active = false
  WHERE is_active = true
    AND blocked_until IS NOT NULL
    AND blocked_until < now();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to update timestamps
CREATE TRIGGER update_ip_blacklist_updated_at
  BEFORE UPDATE ON public.ip_blacklist
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();