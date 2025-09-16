import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCSRFProtection } from './useCSRFProtection';
import { SecurityUtils } from '@/utils/securityUtils';

export type SecureFormType = 'therapist_matching' | 'contact_us' | 'career_application' | 'assessment_contact';

interface SecureFormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const useSecureFormSubmission = () => {
  const [state, setState] = useState<SecureFormSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });
  
  const { getTokenForSubmission } = useCSRFProtection();

  const submitSecureForm = useCallback(async (formType: SecureFormType, formData: Record<string, any>, startTime: number) => {
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      // Enhanced security enhancements
      const sanitizedFormData = Object.keys(formData).reduce((clean, key) => {
        if (typeof formData[key] === 'string') {
          clean[key] = SecurityUtils.sanitizeInput(formData[key]);
        } else {
          clean[key] = formData[key];
        }
        return clean;
      }, {} as Record<string, any>);

      // Get CSRF token
      const csrfToken = getTokenForSubmission();
      if (!csrfToken) {
        throw new Error('Security validation failed - please refresh the page');
      }

      const secureFormData = {
        formType,
        formData: sanitizedFormData,
        timestamp: startTime,
        honeypot: '', // Ensure honeypot is empty for legitimate submissions
        csrfToken, // Include CSRF token
      };

      // Enhanced timing validation (minimum 3 seconds to fill form)
      const submissionTime = Date.now() - startTime;
      if (submissionTime < 3000) {
        throw new Error('Please take your time filling out the form completely.');
      }

      // Check for suspicious behavior
      const behaviorCheck = SecurityUtils.detectSuspiciousBehavior();
      if (behaviorCheck.isSuspicious) {
        console.warn('Suspicious behavior detected:', behaviorCheck.reasons);
        // Still allow submission but log it
      }

      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout - please try again')), 30000)
      );
      
      const submitPromise = supabase.functions.invoke('submit-form', {
        body: secureFormData,
      });

      const { data, error } = await Promise.race([submitPromise, timeoutPromise]) as any;

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (!data?.success) {
        console.error('Function returned failure:', data);
        throw new Error(data?.error || 'Form submission failed');
      }

      setState({ isSubmitting: false, isSuccess: true, error: null });
      return { success: true, submissionId: data.submissionId };

    } catch (error: any) {
      console.error('Secure form submission error:', error);
      let errorMessage = 'An unexpected error occurred';
      
      if (error.message?.includes('timeout')) {
        errorMessage = 'Request timed out. Please check your connection and try again.';
      } else if (error.message?.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message?.includes('take your time')) {
        errorMessage = 'Please take your time filling out the form completely.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setState({ isSubmitting: false, isSuccess: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  }, []);

  const resetState = useCallback(() => {
    setState({ isSubmitting: false, isSuccess: false, error: null });
  }, []);

  return {
    ...state,
    submitSecureForm,
    resetState,
  };
};