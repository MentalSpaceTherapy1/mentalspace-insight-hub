import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsEvent {
  eventType: string;
  eventData?: Record<string, any>;
  sessionId?: string;
}

export const useAnalytics = () => {
  const trackEvent = useCallback(async (event: AnalyticsEvent) => {
    try {
      // Add page info automatically
      const pageUrl = window.location.href;
      const referrer = document.referrer || 'direct';

      await supabase.functions.invoke('track-analytics', {
        body: {
          ...event,
          pageUrl,
          referrer,
        },
      });
    } catch (error) {
      // Silently fail analytics - don't break user experience
      console.warn('Analytics tracking failed:', error);
    }
  }, []);

  const trackPageView = useCallback((pageName?: string) => {
    trackEvent({
      eventType: 'page_view',
      eventData: {
        page: pageName || window.location.pathname,
        title: document.title,
      },
    });
  }, [trackEvent]);

  const trackFormStart = useCallback((formType: string) => {
    trackEvent({
      eventType: 'form_start',
      eventData: { form_type: formType },
    });
  }, [trackEvent]);

  const trackAssessmentStart = useCallback((assessmentType: string, sessionId: string) => {
    trackEvent({
      eventType: 'assessment_start',
      eventData: { assessment_type: assessmentType },
      sessionId,
    });
  }, [trackEvent]);

  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    trackEvent({
      eventType: 'button_click',
      eventData: { 
        button: buttonName,
        location: location || window.location.pathname,
      },
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackFormStart,
    trackAssessmentStart,
    trackButtonClick,
  };
};