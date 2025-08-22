import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

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
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: { formType, formData },
      });

      if (error) {
        throw error;
      }

      if (!data?.success) {
        throw new Error(data?.error || 'Form submission failed');
      }

      setState({ isSubmitting: false, isSuccess: true, error: null });
      return { success: true, submissionId: data.submissionId };

    } catch (error: any) {
      const errorMessage = error.message || 'An unexpected error occurred';
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