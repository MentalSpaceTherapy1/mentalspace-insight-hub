/**
 * Client-side security utilities (non-encryption)
 * Replaces sensitive parts of encryption.ts with secure alternatives
 */

/**
 * Security utility functions for client-side operations
 */
export class SecurityUtils {
  /**
   * Generate a cryptographically secure session ID
   */
  static generateSecureSessionId(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Generate a CSRF token for form submission
   */
  static generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array));
  }

  /**
   * Validate CSRF token (basic implementation)
   */
  static validateCSRFToken(token: string, storedToken: string): boolean {
    if (!token || !storedToken || token.length < 32) {
      return false;
    }
    
    // Constant-time comparison to prevent timing attacks
    if (token.length !== storedToken.length) {
      return false;
    }
    
    let result = 0;
    for (let i = 0; i < token.length; i++) {
      result |= token.charCodeAt(i) ^ storedToken.charCodeAt(i);
    }
    
    return result === 0;
  }

  /**
   * Secure random string generator for nonces
   */
  static generateNonce(length: number = 16): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array)).slice(0, length);
  }

  /**
   * Check if current environment supports required security features
   */
  static checkSecuritySupport(): boolean {
    return !!(
      window.crypto &&
      window.crypto.subtle &&
      window.crypto.getRandomValues
    );
  }

  /**
   * Sanitize string input to prevent basic XSS
   */
  static sanitizeInput(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .trim();
  }

  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  /**
   * Generate a secure device fingerprint
   */
  static generateDeviceFingerprint(): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Device fingerprint', 2, 2);
    }
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      !!window.localStorage,
      !!window.indexedDB,
      canvas.toDataURL()
    ].join('|');
    
    // Hash the fingerprint
    return btoa(fingerprint).replace(/[^a-zA-Z0-9]/g, '').slice(0, 32);
  }

  /**
   * Check for suspicious user behavior patterns
   */
  static detectSuspiciousBehavior(): {
    isSuspicious: boolean;
    reasons: string[];
  } {
    const reasons: string[] = [];
    
    // Check for very fast form filling
    const formStartTime = parseInt(localStorage.getItem('form_start_time') || '0');
    if (formStartTime && Date.now() - formStartTime < 2000) {
      reasons.push('Form filled too quickly');
    }
    
    // Check for repeated rapid submissions
    const lastSubmission = parseInt(localStorage.getItem('last_submission') || '0');
    if (lastSubmission && Date.now() - lastSubmission < 10000) {
      reasons.push('Rapid successive submissions');
    }
    
    // Check for automation indicators
    if (!window.navigator.webdriver === undefined) {
      reasons.push('Potential automation detected');
    }
    
    return {
      isSuspicious: reasons.length > 0,
      reasons
    };
  }
}

/**
 * Content Security Policy utilities
 */
export class CSPUtils {
  /**
   * Generate a nonce for inline scripts
   */
  static generateScriptNonce(): string {
    return SecurityUtils.generateNonce(32);
  }

  /**
   * Apply security headers via meta tags
   */
  static applySecurityHeaders(): void {
    const securityMetas = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      { 'http-equiv': 'Strict-Transport-Security', content: 'max-age=31536000; includeSubDomains' }
    ];

    securityMetas.forEach(meta => {
      const existing = document.querySelector(`meta[http-equiv="${meta['http-equiv']}"], meta[name="${meta.name}"]`);
      if (!existing) {
        const element = document.createElement('meta');
        Object.entries(meta).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
        document.head.appendChild(element);
      }
    });
  }

  /**
   * Get the current CSP nonce if available
   */
  static getCurrentNonce(): string | null {
    return (window as any).__CSP_NONCE__ || null;
  }
}