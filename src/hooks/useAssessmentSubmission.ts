import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AssessmentData {
  sessionId: string;
  assessmentType: string;
  answers: Record<string, any>;
  score?: number;
  severity?: string;
  recommendations?: string[];
  additionalInfo?: Record<string, any>;
}

interface AssessmentSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export const useAssessmentSubmission = () => {
  const [state, setState] = useState<AssessmentSubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const saveAssessment = async (assessmentData: AssessmentData) => {
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const { data, error } = await supabase.functions.invoke('save-assessment', {
        body: assessmentData,
      });

      if (error) {
        throw error;
      }

      if (!data?.success) {
        throw new Error(data?.error || 'Assessment save failed');
      }

      setState({ isSubmitting: false, isSuccess: true, error: null });
      return { success: true, sessionId: data.sessionId, databaseId: data.databaseId };

    } catch (error: any) {
      const errorMessage = error.message || 'Failed to save assessment';
      setState({ isSubmitting: false, isSuccess: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  return {
    ...state,
    saveAssessment,
  };
};