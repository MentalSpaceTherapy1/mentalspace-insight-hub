-- Enable pg_cron extension for scheduled tasks
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;

-- Grant usage to postgres role
GRANT USAGE ON SCHEMA cron TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA cron TO postgres;

-- Set up cron job to generate and publish blog daily at 8:00 AM UTC
SELECT cron.schedule(
  'daily-blog-publish',
  '0 8 * * *',
  $$
  SELECT
    net.http_post(
      url := 'https://dxodauuojrpbbwldsbdj.supabase.co/functions/v1/generate-daily-blog',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer ' || current_setting('app.settings.service_role_key') || '"}'::jsonb,
      body := '{"scheduled": true}'::jsonb
    ) as request_id;
  $$
);