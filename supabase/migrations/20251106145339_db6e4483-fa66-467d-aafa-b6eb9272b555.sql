-- Update daily blog generation cron schedule to 10:00 AM EST (15:00 UTC)
-- Note: During EDT (daylight saving), this will run at 11:00 AM EDT

-- First, unschedule the existing job
SELECT cron.unschedule('daily-blog-publish');

-- Then, create it again with the new schedule (15:00 UTC = 10:00 AM EST)
SELECT cron.schedule(
  'daily-blog-publish',
  '0 15 * * *',
  $$
  SELECT net.http_post(
    url := 'https://dxodauuojrpbbwldsbdj.supabase.co/functions/v1/generate-daily-blog',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4b2RhdXVvanJwYmJ3bGRzYmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MzYxODQsImV4cCI6MjA3MTQxMjE4NH0.P706R4f8HmqplT0u50veV5RHo7gvxSTNkk2uFV5aN9c'
    ),
    body := jsonb_build_object('time', now()::text)
  ) as request_id;
  $$
);