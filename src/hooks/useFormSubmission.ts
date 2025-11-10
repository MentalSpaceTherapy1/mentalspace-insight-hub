import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { 
  trackFormSubmission,
  trackBookAppointmentConversion,
  trackTherapistMatchingConversion,
  trackInsuranceFormConversion
} from '@/utils/googleTagManager';

export type FormType = 'therapist_matching' | 'contact_us' | 'career_application' | 'assessment_contact';

interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const useFormSubmission = () => {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const submitForm = async (formType: FormType, formData: Record<string, any>) => {
    console.log('Starting form submission:', formType, formData);
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      console.log('Invoking submit-form function...');
      
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout - please try again')), 30000)
      );
      
      const submitPromise = supabase.functions.invoke('submit-form', {
        body: { formType, formData },
      });

      const { data, error } = await Promise.race([submitPromise, timeoutPromise]) as any;

      console.log('Function response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (!data?.success) {
        console.error('Function returned failure:', data);
        throw new Error(data?.error || 'Form submission failed');
      }

      console.log('Form submitted successfully:', data);
      
      // Extract email and phone for enhanced conversion tracking
      const email = formData.email as string | undefined;
      const phone = formData.phone as string | undefined;
      
      // Track conversion based on form type with enhanced data
      switch (formType) {
        case 'therapist_matching':
          await trackTherapistMatchingConversion(email, phone);
          break;
        case 'contact_us':
          await trackBookAppointmentConversion(email, phone);
          break;
        case 'assessment_contact':
          await trackBookAppointmentConversion(email, phone);
          break;
        default:
          await trackFormSubmission(formType, email, phone);
      }
      
      setState({ isSubmitting: false, isSuccess: true, error: null });
      return { success: true, submissionId: data.submissionId };

    } catch (error: any) {
      console.error('Form submission error:', error);
      let errorMessage = 'An unexpected error occurred';
      
      if (error.message?.includes('timeout')) {
        errorMessage = 'Request timed out. Please check your connection and try again.';
      } else if (error.message?.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setState({ isSubmitting: false, isSuccess: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const resetState = () => {
    setState({ isSubmitting: false, isSuccess: false, error: null });
  };

  return {
    ...state,
    submitForm,
    resetState,
  };
};