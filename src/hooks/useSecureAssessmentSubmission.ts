import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCSRFProtection } from './useCSRFProtection';

interface SecureAssessmentData {
  sessionId: string;
  assessmentType: string;
  answers: Record<string, any>;
  score?: number;
  severity?: string;
  recommendations?: string[];
  additionalInfo?: Record<string, any>;
}

interface SecureAssessmentSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const useSecureAssessmentSubmission = () => {
  const [state, setState] = useState<SecureAssessmentSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const { getTokenForSubmission } = useCSRFProtection();

  const saveSecureAssessment = useCallback(async (assessmentData: SecureAssessmentData, startTime: number) => {
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      // Security validations
      if (!assessmentData.sessionId || !assessmentData.assessmentType || !assessmentData.answers) {
        throw new Error('Invalid assessment data - missing required fields');
      }

      // Validate session ID format
      const sessionIdPattern = /^[a-zA-Z0-9-_]{8,}$/;
      if (!sessionIdPattern.test(assessmentData.sessionId)) {
        throw new Error('Invalid session format');
      }

      // Sanitize assessment answers
      const sanitizedAnswers = Object.keys(assessmentData.answers).reduce((clean, key) => {
        const value = assessmentData.answers[key];
        if (typeof value === 'string') {
          clean[key] = value
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '')
            .trim();
        } else {
          clean[key] = value;
        }
        return clean;
      }, {} as Record<string, any>);

      const csrfToken = getTokenForSubmission();

      const secureAssessmentData = {
        ...assessmentData,
        answers: sanitizedAnswers,
        timestamp: startTime,
        honeypot: '', // Ensure honeypot is empty for legitimate submissions
        csrfToken,
      };

      // Validate timing (minimum 1 second for assessment completion)
      const submissionTime = Date.now() - startTime;
      if (submissionTime < 1000) {
        throw new Error('Please take your time with the assessment');
      }

      console.log('Submitting secure assessment:', secureAssessmentData.sessionId);

      const { data, error } = await supabase.functions.invoke('save-assessment', {
        body: secureAssessmentData,
      });

      if (error) {
        console.error('Assessment submission error:', error);
        throw error;
      }

      if (!data?.success) {
        throw new Error(data?.error || 'Failed to save assessment');
      }

      setState({ isSubmitting: false, isSuccess: true, error: null });
      return { 
        success: true, 
        sessionId: data.sessionId, 
        databaseId: data.databaseId 
      };

    } catch (error: any) {
      console.error('Secure assessment submission error:', error);
      
      let errorMessage = 'Failed to save assessment';
      if (error.message?.includes('take your time')) {
        errorMessage = 'Please take your time with the assessment';
      } else if (error.message?.includes('Invalid session')) {
        errorMessage = 'Session expired. Please restart the assessment.';
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
    saveSecureAssessment,
    resetState,
  };
};