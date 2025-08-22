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
    // Track page view on mount and route changes
    trackPageView();
  }, [trackPageView]);

  return <>{children}</>;
};

export default FormIntegration;