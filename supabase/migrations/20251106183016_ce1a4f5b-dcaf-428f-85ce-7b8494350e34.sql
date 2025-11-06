-- Create newsletter analytics table
CREATE TABLE IF NOT EXISTS public.newsletter_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  newsletter_id UUID NOT NULL REFERENCES public.newsletters(id) ON DELETE CASCADE,
  views INTEGER DEFAULT 0,
  unique_views INTEGER DEFAULT 0,
  total_engagement_time INTEGER DEFAULT 0, -- in seconds
  average_engagement_time INTEGER DEFAULT 0, -- in seconds
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create newsletter email logs table
CREATE TABLE IF NOT EXISTS public.newsletter_email_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  newsletter_id UUID NOT NULL REFERENCES public.newsletters(id) ON DELETE CASCADE,
  subscriber_id UUID REFERENCES public.newsletter_subscribers(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, sent, failed, bounced, opened, clicked
  sent_at TIMESTAMP WITH TIME ZONE,
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT,
  resend_message_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create newsletter view tracking table
CREATE TABLE IF NOT EXISTS public.newsletter_view_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  newsletter_id UUID NOT NULL REFERENCES public.newsletters(id) ON DELETE CASCADE,
  session_id TEXT,
  user_id UUID,
  ip_address INET,
  engagement_time INTEGER DEFAULT 0, -- in seconds
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.newsletter_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_email_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_view_events ENABLE ROW LEVEL SECURITY;

-- RLS Policies for newsletter_analytics
CREATE POLICY "Anyone can view newsletter analytics"
  ON public.newsletter_analytics FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage newsletter analytics"
  ON public.newsletter_analytics FOR ALL
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Admins can view subscribers"
  ON public.newsletter_subscribers FOR SELECT
  USING (is_admin_user());

CREATE POLICY "Admins can manage subscribers"
  ON public.newsletter_subscribers FOR ALL
  USING (is_admin_user())
  WITH CHECK (is_admin_user());

-- RLS Policies for newsletter_email_logs
CREATE POLICY "Admins can view email logs"
  ON public.newsletter_email_logs FOR SELECT
  USING (is_admin_user());

CREATE POLICY "Service role can insert email logs"
  ON public.newsletter_email_logs FOR INSERT
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role can update email logs"
  ON public.newsletter_email_logs FOR UPDATE
  USING (auth.role() = 'service_role');

-- RLS Policies for newsletter_view_events
CREATE POLICY "Anyone can track newsletter views"
  ON public.newsletter_view_events FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view tracking events"
  ON public.newsletter_view_events FOR SELECT
  USING (is_admin_user());

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_newsletter_analytics_newsletter_id ON public.newsletter_analytics(newsletter_id);
CREATE INDEX IF NOT EXISTS idx_newsletter_email_logs_newsletter_id ON public.newsletter_email_logs(newsletter_id);
CREATE INDEX IF NOT EXISTS idx_newsletter_email_logs_status ON public.newsletter_email_logs(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_view_events_newsletter_id ON public.newsletter_view_events(newsletter_id);
CREATE INDEX IF NOT EXISTS idx_newsletter_view_events_created_at ON public.newsletter_view_events(created_at);

-- Create function to update newsletter analytics
CREATE OR REPLACE FUNCTION public.update_newsletter_analytics()
RETURNS TRIGGER AS $$
BEGIN
  -- Update analytics when new view event is recorded
  INSERT INTO public.newsletter_analytics (newsletter_id, views, unique_views, total_engagement_time, average_engagement_time)
  VALUES (
    NEW.newsletter_id,
    1,
    1,
    NEW.engagement_time,
    NEW.engagement_time
  )
  ON CONFLICT (newsletter_id) DO UPDATE SET
    views = newsletter_analytics.views + 1,
    unique_views = newsletter_analytics.unique_views + CASE WHEN NEW.session_id NOT IN (
      SELECT session_id FROM newsletter_view_events 
      WHERE newsletter_id = NEW.newsletter_id 
      AND session_id IS NOT NULL 
      AND id != NEW.id
    ) THEN 1 ELSE 0 END,
    total_engagement_time = newsletter_analytics.total_engagement_time + NEW.engagement_time,
    average_engagement_time = (newsletter_analytics.total_engagement_time + NEW.engagement_time) / (newsletter_analytics.views + 1),
    updated_at = now();
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for analytics updates
CREATE TRIGGER update_newsletter_analytics_trigger
  AFTER INSERT ON public.newsletter_view_events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_newsletter_analytics();

-- Create function to get popular newsletter topics
CREATE OR REPLACE FUNCTION public.get_popular_newsletter_topics(limit_count INTEGER DEFAULT 10)
RETURNS TABLE(topic TEXT, view_count BIGINT, avg_engagement INTEGER) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    n.category as topic,
    COUNT(DISTINCT nve.id) as view_count,
    AVG(nve.engagement_time)::INTEGER as avg_engagement
  FROM public.newsletters n
  LEFT JOIN public.newsletter_view_events nve ON n.id = nve.newsletter_id
  WHERE n.status = 'published'
  GROUP BY n.category
  ORDER BY view_count DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;