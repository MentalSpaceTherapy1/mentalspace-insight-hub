import React, { useState, useEffect, useCallback } from 'react';
import { SecurityUtils } from '@/utils/securityUtils';

interface CSRFState {
  token: string | null;
  isValid: boolean;
}

/**
 * Hook for CSRF protection in forms
 */
export const useCSRFProtection = () => {
  const [csrfState, setCSRFState] = useState<CSRFState>({
    token: null,
    isValid: false
  });

  // Ensure CSRF cookie is set for double-submit protection
  const setCSRFCookie = useCallback((token: string) => {
    try {
      const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';
      const maxAge = 60 * 60; // 1 hour
      document.cookie = `csrf_token=${token}; Path=/; SameSite=Lax; ${isSecure ? 'Secure; ' : ''}Max-Age=${maxAge}`;
    } catch (e) {
      // ignore
    }
  }, []);

  // Generate CSRF token on component mount
  useEffect(() => {
    const generateToken = () => {
      const token = SecurityUtils.generateCSRFToken();
      const timestamp = Date.now();
      
      // Store token with timestamp in sessionStorage
      sessionStorage.setItem('csrf_token', token);
      sessionStorage.setItem('csrf_timestamp', timestamp.toString());
      // Also set cookie for double-submit protection
      setCSRFCookie(token);
      
      setCSRFState({
        token,
        isValid: true
      });
    };

    // Check if we have a valid existing token
    const existingToken = sessionStorage.getItem('csrf_token');
    const timestamp = sessionStorage.getItem('csrf_timestamp');
    
    if (existingToken && timestamp) {
      const tokenAge = Date.now() - parseInt(timestamp);
      // Token is valid for 1 hour
      if (tokenAge < 3600000) {
        // Ensure cookie is set for double-submit protection
        setCSRFCookie(existingToken);
        setCSRFState({
          token: existingToken,
          isValid: true
        });
        return;
      }
    }

    // Generate new token if none exists or expired
    generateToken();
  }, []);

  // Validate CSRF token
  const validateToken = useCallback((token: string): boolean => {
    const storedToken = sessionStorage.getItem('csrf_token');
    const timestamp = sessionStorage.getItem('csrf_timestamp');
    
    if (!storedToken || !timestamp) {
      return false;
    }

    const tokenAge = Date.now() - parseInt(timestamp);
    if (tokenAge >= 3600000) { // 1 hour expiry
      return false;
    }

    return SecurityUtils.validateCSRFToken(token, storedToken);
  }, []);

  // Refresh CSRF token
  const refreshToken = useCallback(() => {
    const token = SecurityUtils.generateCSRFToken();
    const timestamp = Date.now();
    
    sessionStorage.setItem('csrf_token', token);
    sessionStorage.setItem('csrf_timestamp', timestamp.toString());
    // Also set cookie for double-submit protection
    setCSRFCookie(token);
    
    setCSRFState({
      token,
      isValid: true
    });
  }, [setCSRFCookie]);

  // Get token for form submission
  const getTokenForSubmission = useCallback(() => {
    if (!csrfState.isValid || !csrfState.token) {
      refreshToken();
      return sessionStorage.getItem('csrf_token');
    }
    return csrfState.token;
  }, [csrfState, refreshToken]);

  return {
    token: csrfState.token,
    isValid: csrfState.isValid,
    validateToken,
    refreshToken,
    getTokenForSubmission
  };
};

/**
 * CSRF Protection component for forms
 */
export const CSRFTokenInput: React.FC = () => {
  const { token } = useCSRFProtection();
  
  if (!token) return null;
  
  return (
    <input
      type="hidden"
      name="csrf_token"
      value={token}
      aria-hidden="true"
    />
  );
};