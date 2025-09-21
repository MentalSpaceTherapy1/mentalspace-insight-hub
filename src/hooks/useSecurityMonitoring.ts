import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SecurityMetrics {
  activeSessions: number;
  failedLogins: number;
  suspiciousActivity: number;
  dataAccessAttempts: number;
  lastSecurityScan: string;
  isSecureConnection: boolean;
  encryptionStatus: 'active' | 'partial' | 'inactive';
}

interface SecurityAlert {
  id: string;
  type: 'threat' | 'warning' | 'info';
  severity: 'critical' | 'high' | 'medium' | 'low';
  message: string;
  timestamp: string;
  resolved: boolean;
}

export const useSecurityMonitoring = () => {
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    activeSessions: 0,
    failedLogins: 0,
    suspiciousActivity: 0,
    dataAccessAttempts: 0,
    lastSecurityScan: new Date().toISOString(),
    isSecureConnection: window.location.protocol === 'https:',
    encryptionStatus: 'active'
  });
  
  const [alerts, setAlerts] = useState<SecurityAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Security validation functions
  const validateSecureContext = useCallback(() => {
    const isSecure = window.isSecureContext && window.location.protocol === 'https:';
    
    if (!isSecure) {
      const alert: SecurityAlert = {
        id: `security-context-${Date.now()}`,
        type: 'warning',
        severity: 'medium',
        message: 'Insecure connection detected. Consider using HTTPS for enhanced security.',
        timestamp: new Date().toISOString(),
        resolved: false
      };
      
      setAlerts(prev => [alert, ...prev.slice(0, 9)]); // Keep last 10 alerts
    }
    
    return isSecure;
  }, []);

  const checkEncryptionStatus = useCallback(() => {
    // Check if Web Crypto API is available
    const hasWebCrypto = typeof crypto !== 'undefined' && 
                         typeof crypto.subtle !== 'undefined';
    
    if (!hasWebCrypto) {
      const alert: SecurityAlert = {
        id: `encryption-${Date.now()}`,
        type: 'threat',
        severity: 'high',
        message: 'Encryption services unavailable. Data may not be properly protected.',
        timestamp: new Date().toISOString(),
        resolved: false
      };
      
      setAlerts(prev => [alert, ...prev.slice(0, 9)]);
      return 'inactive';
    }
    
    return 'active';
  }, []);

  const detectSuspiciousActivity = useCallback(() => {
    // Check for rapid page reloads or unusual navigation patterns
    const navigationEntries = performance.getEntriesByType('navigation');
    const suspiciousPatterns = navigationEntries.filter(entry => {
      const navEntry = entry as PerformanceNavigationTiming;
      return navEntry.type === 'reload' && navEntry.loadEventEnd - navEntry.startTime < 1000;
    });

    if (suspiciousPatterns.length > 3) { // More than 3 rapid reloads
      const alert: SecurityAlert = {
        id: `suspicious-${Date.now()}`,
        type: 'warning',
        severity: 'medium',
        message: 'Unusual navigation pattern detected. Monitoring for security purposes.',
        timestamp: new Date().toISOString(),
        resolved: false
      };
      
      setAlerts(prev => [alert, ...prev.slice(0, 9)]);
      return suspiciousPatterns.length;
    }
    
    return 0;
  }, []);

  const logSecurityEvent = useCallback(async (eventType: string, details: any) => {
    try {
      // In a real implementation, you would log to your security monitoring system
      console.log('Security Event:', { eventType, details, timestamp: new Date().toISOString() });
      
      // For demonstration, we'll use the analytics system
      const { error } = await supabase.functions.invoke('track-analytics', {
        body: {
          event_type: `security_${eventType}`,
          event_data: details,
          page_url: window.location.href,
          timestamp: new Date().toISOString()
        }
      });
      
      if (error) {
        console.error('Failed to log security event:', error);
      }
    } catch (err) {
      console.error('Security logging error:', err);
    }
  }, []);

  const performSecurityScan = useCallback(async () => {
    try {
      setError(null);
      
      // Validate secure context
      const isSecure = validateSecureContext();
      
      // Check encryption status
      const encryptionStatus = checkEncryptionStatus();
      
      // Detect suspicious activity
      const suspiciousActivity = detectSuspiciousActivity();
      
      // Update metrics
      const newMetrics: SecurityMetrics = {
        activeSessions: 1, // Current session
        failedLogins: 0, // Would come from auth monitoring
        suspiciousActivity,
        dataAccessAttempts: 0, // Would come from API monitoring
        lastSecurityScan: new Date().toISOString(),
        isSecureConnection: isSecure,
        encryptionStatus: encryptionStatus as SecurityMetrics['encryptionStatus']
      };
      
      setMetrics(newMetrics);
      
      // Log security scan completion
      await logSecurityEvent('scan_completed', {
        metrics: newMetrics,
        alerts_count: alerts.length,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString()
      });
      
    } catch (err) {
      console.error('Security scan error:', err);
      setError(err instanceof Error ? err.message : 'Security scan failed');
    }
  }, [validateSecureContext, checkEncryptionStatus, detectSuspiciousActivity, logSecurityEvent, alerts.length]);

  const startMonitoring = useCallback(() => {
    if (isMonitoring) return;
    
    setIsMonitoring(true);
    
    // Initial scan
    performSecurityScan();
    
    // Schedule regular scans
    const scanInterval = setInterval(performSecurityScan, 60000); // Every minute
    
    // Monitor for security-relevant events
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        performSecurityScan();
      }
    };
    
    const handleUnload = () => {
      logSecurityEvent('session_end', {
        session_duration: Date.now() - performance.timeOrigin,
        page_url: window.location.href
      });
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleUnload);
    
    return () => {
      clearInterval(scanInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleUnload);
      setIsMonitoring(false);
    };
  }, [isMonitoring, performSecurityScan, logSecurityEvent]);

  const resolveAlert = useCallback((alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, resolved: true } : alert
    ));
  }, []);

  const clearResolvedAlerts = useCallback(() => {
    setAlerts(prev => prev.filter(alert => !alert.resolved));
  }, []);

  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  return {
    metrics,
    alerts: alerts.filter(alert => !alert.resolved),
    resolvedAlerts: alerts.filter(alert => alert.resolved),
    isMonitoring,
    error,
    actions: {
      performSecurityScan,
      resolveAlert,
      clearResolvedAlerts,
      logSecurityEvent
    }
  };
};