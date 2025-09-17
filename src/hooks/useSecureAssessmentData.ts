import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { decryptSensitiveData } from '@/lib/encryption';

interface EncryptedAssessmentSession {
  id: string;
  session_id: string;
  assessment_type: string;
  score?: number | null;
  severity?: string | null;
  recommendations?: string[] | null;
  completed_at: string;
  created_at: string;
  user_id?: string | null;
  is_encrypted?: boolean;
  encrypted_answers?: string | null;
  encrypted_additional_info?: string | null;
  encryption_iv?: string | null;
  data_hash?: string | null;
  // Fallback fields for unencrypted data (Json type from Supabase)
  answers?: any;
  additional_info?: any;
}

interface DecryptedAssessmentData {
  answers: Record<string, any>;
  additionalInfo?: Record<string, any>;
}

interface SecureAssessmentState {
  isLoading: boolean;
  isDecrypting: boolean;
  error: string | null;
  sessions: EncryptedAssessmentSession[];
  decryptedData: Map<string, DecryptedAssessmentData>;
}

export const useSecureAssessmentData = () => {
  const [state, setState] = useState<SecureAssessmentState>({
    isLoading: false,
    isDecrypting: false,
    error: null,
    sessions: [],
    decryptedData: new Map(),
  });

  const fetchAssessmentSessions = async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const { data, error } = await supabase
        .from('assessment_sessions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setState(prev => ({
        ...prev,
        isLoading: false,
        sessions: (data || []) as EncryptedAssessmentSession[],
      }));

      return data || [];
    } catch (error: any) {
      console.error('Error fetching assessment sessions:', error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message || 'Failed to fetch assessment sessions',
      }));
      return [];
    }
  };

  const decryptAssessmentData = async (
    sessionId: string,
    encryptedAnswers?: string,
    encryptedAdditionalInfo?: string,
    encryptionIv?: string,
    answersKey?: string,
    additionalInfoKey?: string
  ): Promise<DecryptedAssessmentData | null> => {
    // Check if already decrypted
    if (state.decryptedData.has(sessionId)) {
      return state.decryptedData.get(sessionId) || null;
    }

    setState(prev => ({ ...prev, isDecrypting: true, error: null }));

    try {
      let decryptedAnswers: Record<string, any> = {};
      let decryptedAdditionalInfo: Record<string, any> | undefined;

      // For admin users, use the secure decryption service
      if (encryptedAnswers && answersKey && encryptionIv) {
        try {
          const { data, error } = await supabase.functions.invoke('decrypt-assessment', {
            body: {
              encryptedData: encryptedAnswers,
              encryptionKey: answersKey,
              iv: encryptionIv,
            },
          });

          if (error) throw error;

          if (data?.success) {
            decryptedAnswers = data.decryptedData;
            console.log('Successfully decrypted answers via secure service');
          } else {
            throw new Error(data?.error || 'Decryption service failed');
          }
        } catch (serviceError) {
          console.error('Secure decryption service failed:', serviceError);
          throw new Error('Failed to decrypt sensitive data. Admin access required.');
        }
      }

      // Decrypt additional info if present
      if (encryptedAdditionalInfo && additionalInfoKey && encryptionIv) {
        try {
          const { data, error } = await supabase.functions.invoke('decrypt-assessment', {
            body: {
              encryptedData: encryptedAdditionalInfo,
              encryptionKey: additionalInfoKey,
              iv: encryptionIv,
            },
          });

          if (error) throw error;

          if (data?.success) {
            decryptedAdditionalInfo = data.decryptedData;
            console.log('Successfully decrypted additional info via secure service');
          }
        } catch (serviceError) {
          console.warn('Failed to decrypt additional info:', serviceError);
          // Non-fatal, continue with answers only
        }
      }

      const decryptedData: DecryptedAssessmentData = {
        answers: decryptedAnswers,
        additionalInfo: decryptedAdditionalInfo,
      };

      // Cache the decrypted data
      setState(prev => ({
        ...prev,
        isDecrypting: false,
        decryptedData: new Map(prev.decryptedData.set(sessionId, decryptedData)),
      }));

      return decryptedData;
    } catch (error: any) {
      console.error('Error decrypting assessment data:', error);
      setState(prev => ({
        ...prev,
        isDecrypting: false,
        error: error.message || 'Failed to decrypt assessment data',
      }));
      return null;
    }
  };

  const getAssessmentAnswers = (sessionId: string): Record<string, any> | null => {
    const decrypted = state.decryptedData.get(sessionId);
    return decrypted?.answers || null;
  };

  const getAssessmentAdditionalInfo = (sessionId: string): Record<string, any> | null => {
    const decrypted = state.decryptedData.get(sessionId);
    return decrypted?.additionalInfo || null;
  };

  const clearDecryptedData = () => {
    setState(prev => ({
      ...prev,
      decryptedData: new Map(),
    }));
  };

  return {
    ...state,
    fetchAssessmentSessions,
    decryptAssessmentData,
    getAssessmentAnswers,
    getAssessmentAdditionalInfo,
    clearDecryptedData,
  };
};