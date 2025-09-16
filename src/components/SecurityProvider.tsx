import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useSecurityHeaders, useSecurityMonitoring } from '@/hooks/useSecurityHeaders';
import { useAuditLogging } from '@/hooks/useAuditLogging';
import { useDataRetention } from '@/hooks/useDataRetention';
import { FieldEncryption, SecurityUtils } from '@/utils/encryption';

interface SecurityContextType {
  encryptField: (data: string) => Promise<string>;
  decryptField: (data: string) => Promise<string>;
  encryptSensitiveFields: (data: Record<string, any>) => Promise<Record<string, any>>;
  generateSessionId: () => string;
  generateCSRFToken: () => string;
  logSecurityEvent: (eventType: string, details: Record<string, any>) => void;
  isSecuritySupported: boolean;
}

const SecurityContext = createContext<SecurityContextType | null>(null);

export const useSecurityContext = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurityContext must be used within a SecurityProvider');
  }
  return context;
};

interface SecurityProviderProps {
  children: ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  // Initialize security hooks
  useSecurityHeaders();
  useSecurityMonitoring();
  
  const { logSecurityViolation } = useAuditLogging();
  const { scheduleRetentionCleanup } = useDataRetention();

  useEffect(() => {
    // Initialize security features
    console.log('Initializing security features...');
    
    // Check security support
    const isSupported = SecurityUtils.checkSecuritySupport();
    if (!isSupported) {
      console.warn('Some security features are not supported in this browser');
      logSecurityViolation('unsupported_security_features', {
        userAgent: navigator.userAgent,
        missingFeatures: 'crypto.subtle or crypto.getRandomValues'
      });
    }

    // Schedule data retention cleanup
    scheduleRetentionCleanup();

    // Set up global error handling for security-related errors
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.error && event.error.message) {
        const message = event.error.message.toLowerCase();
        if (message.includes('security') || 
            message.includes('csp') || 
            message.includes('blocked') ||
            message.includes('cors')) {
          logSecurityViolation('security_error', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
          });
        }
      }
    };

    window.addEventListener('error', handleGlobalError);

    // Monitor for unhandled promise rejections that might be security-related
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      if (reason && typeof reason === 'string') {
        const message = reason.toLowerCase();
        if (message.includes('security') || 
            message.includes('unauthorized') || 
            message.includes('forbidden')) {
          logSecurityViolation('security_promise_rejection', {
            reason: reason
          });
        }
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [logSecurityViolation, scheduleRetentionCleanup]);

  const contextValue: SecurityContextType = {
    encryptField: FieldEncryption.encryptField,
    decryptField: FieldEncryption.decryptField,
    encryptSensitiveFields: FieldEncryption.encryptSensitiveFields,
    generateSessionId: SecurityUtils.generateSecureSessionId,
    generateCSRFToken: SecurityUtils.generateCSRFToken,
    logSecurityEvent: (eventType: string, details: Record<string, any>) => {
      logSecurityViolation(eventType, details);
    },
    isSecuritySupported: SecurityUtils.checkSecuritySupport()
  };

  return (
    <SecurityContext.Provider value={contextValue}>
      {children}
    </SecurityContext.Provider>
  );
};