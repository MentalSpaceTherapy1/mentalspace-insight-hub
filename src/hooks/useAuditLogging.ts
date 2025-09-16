import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type AuditEventType = 
  | 'form_submission'
  | 'assessment_completion'
  | 'admin_login'
  | 'admin_logout'
  | 'sensitive_data_access'
  | 'security_violation'
  | 'failed_login_attempt'
  | 'password_change'
  | 'data_export'
  | 'user_registration'
  | 'session_timeout';

export interface AuditEvent {
  eventType: AuditEventType;
  userId?: string;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
  details?: Record<string, any>;
  riskLevel?: 'low' | 'medium' | 'high' | 'critical';
}

/**
 * Enhanced audit logging hook for security monitoring
 */
export const useAuditLogging = () => {
  const logAuditEvent = useCallback(async (event: AuditEvent) => {
    try {
      // Get client IP and user agent
      const clientInfo = {
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        referrer: document.referrer
      };

      // Create comprehensive audit log entry
      const auditData = {
        event_type: event.eventType,
        event_data: {
          ...event.details,
          ...clientInfo,
          riskLevel: event.riskLevel || 'low'
        },
        user_id: event.userId,
        session_id: event.sessionId || crypto.randomUUID(),
        ip_address: event.ipAddress, // This will be captured server-side
        created_at: new Date().toISOString()
      };

      // Log to Supabase analytics_events table
      const { error } = await supabase
        .from('analytics_events')
        .insert(auditData);

      if (error) {
        console.error('Audit logging failed:', error);
      }

      // For high/critical risk events, also log to security audit table if it exists
      if (event.riskLevel === 'high' || event.riskLevel === 'critical') {
        try {
          await supabase
            .from('security_audit_log')
            .insert({
              event_type: event.eventType,
              table_name: 'security_events',
              details: auditData.event_data as any,
              user_id: event.userId,
              ip_address: event.ipAddress,
              timestamp: new Date().toISOString()
            });
        } catch (securityLogError) {
          console.warn('Security audit logging not available:', securityLogError);
        }
      }

    } catch (error) {
      console.error('Failed to log audit event:', error);
    }
  }, []);

  // Specific audit logging functions
  const logFormSubmission = useCallback((formType: string, formData: Record<string, any>) => {
    logAuditEvent({
      eventType: 'form_submission',
      details: {
        formType,
        hasPersonalData: Object.keys(formData).some(key => 
          ['email', 'phone', 'name', 'address'].some(field => 
            key.toLowerCase().includes(field)
          )
        ),
        fieldCount: Object.keys(formData).length
      },
      riskLevel: 'low'
    });
  }, [logAuditEvent]);

  const logAssessmentCompletion = useCallback((assessmentType: string, sessionId: string, score?: number) => {
    logAuditEvent({
      eventType: 'assessment_completion',
      sessionId,
      details: {
        assessmentType,
        score,
        completedAt: new Date().toISOString()
      },
      riskLevel: 'medium' // Health data is sensitive
    });
  }, [logAuditEvent]);

  const logAdminAction = useCallback((action: string, targetUserId?: string, details?: Record<string, any>) => {
    logAuditEvent({
      eventType: 'sensitive_data_access',
      details: {
        adminAction: action,
        targetUserId,
        ...details
      },
      riskLevel: 'high' // Admin actions are high risk
    });
  }, [logAuditEvent]);

  const logSecurityViolation = useCallback((violationType: string, details: Record<string, any>) => {
    logAuditEvent({
      eventType: 'security_violation',
      details: {
        violationType,
        ...details
      },
      riskLevel: 'critical'
    });
  }, [logAuditEvent]);

  const logFailedLoginAttempt = useCallback((email?: string, reason?: string) => {
    logAuditEvent({
      eventType: 'failed_login_attempt',
      details: {
        email: email ? email.replace(/(.{2}).*(@.*)/, '$1***$2') : 'unknown', // Mask email
        reason,
        attemptedAt: new Date().toISOString()
      },
      riskLevel: 'medium'
    });
  }, [logAuditEvent]);

  return {
    logAuditEvent,
    logFormSubmission,
    logAssessmentCompletion,
    logAdminAction,
    logSecurityViolation,
    logFailedLoginAttempt
  };
};

/**
 * Hook for monitoring and alerting on suspicious patterns
 */
export const useSecurityAlerts = () => {
  const { logSecurityViolation } = useAuditLogging();

  const checkSuspiciousActivity = useCallback(async () => {
    try {
      // Check for multiple failed login attempts
      const { data: recentFailures } = await supabase
        .from('analytics_events')
        .select('event_data, created_at')
        .eq('event_type', 'failed_login_attempt')
        .gte('created_at', new Date(Date.now() - 15 * 60 * 1000).toISOString())
        .order('created_at', { ascending: false })
        .limit(10);

      if (recentFailures && recentFailures.length >= 5) {
        logSecurityViolation('multiple_failed_logins', {
          count: recentFailures.length,
          timeframe: '15_minutes'
        });
      }

      // Check for rapid form submissions (potential bot activity)
      const { data: recentSubmissions } = await supabase
        .from('analytics_events')
        .select('created_at')
        .eq('event_type', 'form_submission')
        .gte('created_at', new Date(Date.now() - 5 * 60 * 1000).toISOString())
        .order('created_at', { ascending: false });

      if (recentSubmissions && recentSubmissions.length >= 10) {
        logSecurityViolation('rapid_form_submissions', {
          count: recentSubmissions.length,
          timeframe: '5_minutes'
        });
      }

    } catch (error) {
      console.error('Failed to check suspicious activity:', error);
    }
  }, [logSecurityViolation]);

  return {
    checkSuspiciousActivity
  };
};