import { useEffect } from 'react';
import { CSPUtils } from '@/utils/securityUtils';

/**
 * Hook to apply security headers and CSP policies
 */
export const useSecurityHeaders = () => {
  useEffect(() => {
    // Generate a nonce for inline scripts
    const nonce = CSPUtils.generateScriptNonce();
    
    // Apply security headers
    CSPUtils.applySecurityHeaders();

    // Set up Content Security Policy via meta tag with strict policies
    const csp = document.createElement('meta');
    csp.setAttribute('http-equiv', 'Content-Security-Policy-Report-Only');
    
    // Define strict CSP policy without unsafe-inline
    const cspContent = [
      "default-src 'self'",
      `script-src 'self' https://js.stripe.com https://checkout.stripe.com`,
      "style-src 'self' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://dxodauuojrpbbwldsbdj.supabase.co https://api.stripe.com",
      "frame-src 'self' https://js.stripe.com https://checkout.stripe.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
      "block-all-mixed-content",
      "report-uri https://dxodauuojrpbbwldsbdj.supabase.co/functions/v1/csp-report"
    ].join('; ');
    
    csp.setAttribute('content', cspContent);
    document.head.appendChild(csp);

    // Store nonce for use by legitimate inline scripts
    (window as any).__CSP_NONCE__ = nonce;

    // Add additional security configurations
    const permissionsPolicyMeta = document.createElement('meta');
    permissionsPolicyMeta.setAttribute('http-equiv', 'Permissions-Policy');
    permissionsPolicyMeta.setAttribute('content', [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=(self)',
      'usb=()',
      'magnetometer=()',
      'accelerometer=()',
      'gyroscope=()',
      'clipboard-read=()',
      'clipboard-write=(self)'
    ].join(', '));
    document.head.appendChild(permissionsPolicyMeta);

    return () => {
      // Cleanup is not typically needed for meta tags
    };
  }, []);
};

/**
 * Hook for enhanced security monitoring
 */
export const useSecurityMonitoring = () => {
  useEffect(() => {
    // Monitor for potential security issues
    const handleSecurityViolation = (event: SecurityPolicyViolationEvent) => {
      console.warn('Security Policy Violation:', {
        violatedDirective: event.violatedDirective,
        blockedURI: event.blockedURI,
        documentURI: event.documentURI,
        originalPolicy: event.originalPolicy
      });

      // Report to analytics in production
      if ((window as any).gtag) {
        (window as any).gtag('event', 'security_violation', {
          violated_directive: event.violatedDirective,
          blocked_uri: event.blockedURI
        });
      }
    };

    // Monitor for CSP violations
    document.addEventListener('securitypolicyviolation', handleSecurityViolation);

    // Monitor for potential XSS attempts in form inputs
    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target && target.value) {
        const suspiciousPatterns = [
          /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          /javascript:/gi,
          /on\w+\s*=/gi,
          /<iframe/gi,
          /<embed/gi,
          /<object/gi
        ];

        const hasSuspiciousContent = suspiciousPatterns.some(pattern => 
          pattern.test(target.value)
        );

        if (hasSuspiciousContent) {
          console.warn('Suspicious input detected:', target.name, target.value);
          
          // Report security event
          if ((window as any).gtag) {
            (window as any).gtag('event', 'suspicious_input', {
              field_name: target.name,
              input_type: target.type
            });
          }
        }
      }
    };

    // Add input monitoring to all form inputs
    document.addEventListener('input', handleInput);

    return () => {
      document.removeEventListener('securitypolicyviolation', handleSecurityViolation);
      document.removeEventListener('input', handleInput);
    };
  }, []);
};