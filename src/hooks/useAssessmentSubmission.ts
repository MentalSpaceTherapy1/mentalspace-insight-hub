import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { encryptSensitiveData, generateDataHash } from '@/lib/encryption';
import { trackAssessmentCompletion } from '@/utils/googleTagManager';

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
    console.log('Starting secure assessment submission:', assessmentData);
    setState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      // Enhanced security validation
      if (!window.isSecureContext) {
        throw new Error('Secure context required for sensitive data submission');
      }

      if (!crypto || !crypto.subtle) {
        throw new Error('Encryption services unavailable');
      }

      // Validate assessment data
      if (!assessmentData.sessionId || !assessmentData.assessmentType || !assessmentData.answers) {
        throw new Error('Missing required assessment data');
      }

      console.log('Encrypting sensitive assessment data...');
      
      // Encrypt sensitive fields (answers and additional info)
      const { encryptedData: encryptedAnswers, encryptionKey: answersKey, iv: answersIv } = 
        await encryptSensitiveData(assessmentData.answers);
      
      let encryptedAdditionalInfo = '';
      let additionalInfoKey = '';
      let additionalInfoIv = '';
      
      if (assessmentData.additionalInfo) {
        const encryptResult = await encryptSensitiveData(assessmentData.additionalInfo);
        encryptedAdditionalInfo = encryptResult.encryptedData;
        additionalInfoKey = encryptResult.encryptionKey;
        additionalInfoIv = encryptResult.iv;
      }
      
      // Generate data integrity hash
      const dataToHash = JSON.stringify({
        answers: assessmentData.answers,
        additionalInfo: assessmentData.additionalInfo || {},
      });
      const dataHash = await generateDataHash(dataToHash);
      
      console.log('Invoking save-assessment function with encrypted data...');
      
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Assessment save timeout - please try again')), 30000)
      );
      
      const savePromise = supabase.functions.invoke('save-assessment', {
        body: {
          ...assessmentData,
          // Include encrypted data and keys for server storage
          encryptedAnswers,
          answersKey,
          answersIv,
          encryptedAdditionalInfo,
          additionalInfoKey,
          additionalInfoIv,
          dataHash,
          isEncrypted: true,
        },
      });

      const { data, error } = await Promise.race([savePromise, timeoutPromise]) as any;

      console.log('Save-assessment response:', { data, error });

      if (error) {
        console.error('Supabase save-assessment error:', error);
        throw error;
      }

      if (!data?.success) {
        console.error('Save-assessment returned failure:', data);
        throw new Error(data?.error || 'Assessment save failed');
      }

      console.log('Assessment saved successfully:', data);
      
      // Track successful assessment completion
      trackAssessmentCompletion(assessmentData.assessmentType);
      
      setState({ isSubmitting: false, isSuccess: true, error: null });
      return { success: true, sessionId: data.sessionId, databaseId: data.databaseId };

    } catch (error: any) {
      console.error('Assessment submission error:', error);
      let errorMessage = 'Failed to save assessment';
      
      if (error.message?.includes('timeout')) {
        errorMessage = 'Assessment save timed out. Please check your connection and try again.';
      } else if (error.message?.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setState({ isSubmitting: false, isSuccess: false, error: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  return {
    ...state,
    saveAssessment,
  };
};