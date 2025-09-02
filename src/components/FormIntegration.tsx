import { useEffect } from 'react';
import { useFormSubmission, FormType } from '@/hooks/useFormSubmission';
import { useAnalytics } from '@/hooks/useAnalytics';
import { toast } from 'sonner';

interface FormIntegrationProps {
  children: React.ReactNode;
}

// This component provides form submission and analytics context to the entire app
const FormIntegration: React.FC<FormIntegrationProps> = ({ children }) => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Defer analytics tracking to not block critical rendering path
    const deferredTrack = () => {
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => trackPageView(), { timeout: 1000 });
      } else {
        setTimeout(() => trackPageView(), 0);
      }
    };
    
    // Track page view after the component has mounted and rendered
    deferredTrack();
  }, [trackPageView]);

  return <>{children}</>;
};

export default FormIntegration;