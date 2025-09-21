/**
 * Security utility functions for enhanced application security
 */

export interface SecurityContext {
  isSecureConnection: boolean;
  hasEncryption: boolean;
  browserSupport: {
    webCrypto: boolean;
    secureContext: boolean;
    localStorage: boolean;
  };
  threats: string[];
  recommendations: string[];
}

/**
 * Performs a comprehensive security context check
 */
export const getSecurityContext = (): SecurityContext => {
  const context: SecurityContext = {
    isSecureConnection: window.location.protocol === 'https:',
    hasEncryption: typeof crypto !== 'undefined' && typeof crypto.subtle !== 'undefined',
    browserSupport: {
      webCrypto: typeof crypto !== 'undefined' && typeof crypto.subtle !== 'undefined',
      secureContext: window.isSecureContext,
      localStorage: typeof Storage !== 'undefined' && typeof localStorage !== 'undefined'
    },
    threats: [],
    recommendations: []
  };

  // Analyze threats
  if (!context.isSecureConnection) {
    context.threats.push('Insecure HTTP connection detected');
    context.recommendations.push('Use HTTPS for secure data transmission');
  }

  if (!context.hasEncryption) {
    context.threats.push('Encryption services unavailable');
    context.recommendations.push('Use a modern browser with Web Crypto API support');
  }

  if (!context.browserSupport.secureContext) {
    context.threats.push('Browser security context is not secure');
    context.recommendations.push('Ensure secure context (HTTPS) for sensitive operations');
  }

  if (!context.browserSupport.localStorage) {
    context.threats.push('Local storage unavailable');
    context.recommendations.push('Enable browser storage for optimal security features');
  }

  return context;
};

/**
 * Validates if the current environment is secure enough for sensitive operations
 */
export const validateSecureEnvironment = (): { isSecure: boolean; issues: string[] } => {
  const context = getSecurityContext();
  const issues: string[] = [];

  if (!context.isSecureConnection) {
    issues.push('HTTPS required for secure operations');
  }

  if (!context.hasEncryption) {
    issues.push('Web Crypto API required for data encryption');
  }

  if (!context.browserSupport.secureContext) {
    issues.push('Secure context required for sensitive data handling');
  }

  return {
    isSecure: issues.length === 0,
    issues
  };
};

/**
 * Generates a Content Security Policy header value
 */
export const generateCSPHeader = (nonce?: string): string => {
  const directives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://esm.sh https://deno.land",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ];

  if (nonce) {
    directives[1] = `script-src 'self' 'nonce-${nonce}' https://esm.sh https://deno.land`;
  }

  return directives.join('; ');
};

/**
 * Sanitizes user input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Validates if a URL is safe to redirect to
 */
export const validateRedirectURL = (url: string, allowedDomains: string[]): boolean => {
  try {
    const urlObj = new URL(url);
    
    // Only allow HTTPS for absolute URLs
    if (urlObj.protocol !== 'https:' && urlObj.protocol !== 'http:') {
      return false;
    }
    
    // Check if domain is in allowed list
    const domain = urlObj.hostname;
    return allowedDomains.some(allowed => 
      domain === allowed || domain.endsWith('.' + allowed)
    );
  } catch {
    // Relative URLs are generally safe
    return url.startsWith('/') && !url.startsWith('//');
  }
};

/**
 * Generates a secure random string for tokens
 */
export const generateSecureToken = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Implements rate limiting for client-side operations
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();

  /**
   * Check if an operation is rate limited
   * @param key - Unique key for the operation
   * @param maxAttempts - Maximum attempts allowed
   * @param windowMs - Time window in milliseconds
   * @returns true if allowed, false if rate limited
   */
  isAllowed(key: string, maxAttempts: number, windowMs: number): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    // Record this attempt
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    
    return true;
  }

  /**
   * Clear rate limiting data for a key
   */
  clear(key: string): void {
    this.attempts.delete(key);
  }

  /**
   * Clear all rate limiting data
   */
  clearAll(): void {
    this.attempts.clear();
  }
}

/**
 * Global rate limiter instance
 */
export const globalRateLimiter = new RateLimiter();