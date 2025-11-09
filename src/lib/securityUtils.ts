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

/**
 * Enhanced JavaScript Challenge - Advanced bot detection
 */
export interface EnhancedChallenge {
  canvasFingerprint: string;
  computationResult: number;
  timestamp: number;
  entropy: number;
}

export const generateEnhancedChallenge = (): { challenge: any; solution: EnhancedChallenge } => {
  // Canvas fingerprinting
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  let canvasFingerprint = 'no-canvas';
  
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText('Browser Fingerprint', 2, 15);
    canvasFingerprint = canvas.toDataURL().slice(-50);
  }
  
  // Complex computation
  const a = Math.floor(Math.random() * 50) + 10;
  const b = Math.floor(Math.random() * 50) + 10;
  const c = Math.floor(Math.random() * 10) + 1;
  const computationResult = (a * b) + c;
  
  // Entropy measurement (randomness from timing)
  const entropy = performance.now() % 1000;
  
  return {
    challenge: { a, b, c },
    solution: {
      canvasFingerprint,
      computationResult,
      timestamp: Date.now(),
      entropy: Math.floor(entropy)
    }
  };
};

export const validateEnhancedChallenge = (
  submitted: EnhancedChallenge,
  expected: EnhancedChallenge,
  maxAge: number = 300000 // 5 minutes
): boolean => {
  // Check timestamp
  if (Date.now() - submitted.timestamp > maxAge) {
    return false;
  }
  
  // Check computation
  if (submitted.computationResult !== expected.computationResult) {
    return false;
  }
  
  // Canvas fingerprint should match
  if (submitted.canvasFingerprint !== expected.canvasFingerprint) {
    return false;
  }
  
  return true;
};

/**
 * Proof of Work Challenge - Computational puzzle
 */
export interface ProofOfWork {
  challenge: string;
  difficulty: number;
  solution?: string;
}

export const generateProofOfWork = (difficulty: number = 4): ProofOfWork => {
  const challenge = generateSecureToken(16);
  return { challenge, difficulty };
};

export const solveProofOfWork = async (pow: ProofOfWork): Promise<string> => {
  const { challenge, difficulty } = pow;
  let nonce = 0;
  const target = '0'.repeat(difficulty);
  
  while (true) {
    const attempt = `${challenge}:${nonce}`;
    const hashBuffer = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(attempt)
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    if (hashHex.startsWith(target)) {
      return nonce.toString();
    }
    
    nonce++;
    
    // Prevent infinite loops
    if (nonce > 1000000) {
      throw new Error('Proof of work failed');
    }
  }
};

export const verifyProofOfWork = async (
  challenge: string,
  difficulty: number,
  solution: string
): Promise<boolean> => {
  try {
    const attempt = `${challenge}:${solution}`;
    const hashBuffer = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(attempt)
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    const target = '0'.repeat(difficulty);
    
    return hashHex.startsWith(target);
  } catch {
    return false;
  }
};

/**
 * Time-based CSRF Token Generation
 */
export interface CSRFToken {
  token: string;
  timestamp: number;
  signature: string;
}

export const generateCSRFToken = async (): Promise<CSRFToken> => {
  const token = generateSecureToken(32);
  const timestamp = Date.now();
  
  // Create signature using Web Crypto API
  const data = `${token}:${timestamp}`;
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  
  // Generate a key from browser fingerprint
  const fingerprint = navigator.userAgent + navigator.language;
  const keyMaterial = await crypto.subtle.digest('SHA-256', encoder.encode(fingerprint));
  const key = await crypto.subtle.importKey(
    'raw',
    keyMaterial,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const signatureBuffer = await crypto.subtle.sign('HMAC', key, dataBuffer);
  const signatureArray = Array.from(new Uint8Array(signatureBuffer));
  const signature = signatureArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return { token, timestamp, signature };
};

export const validateCSRFToken = async (
  csrfToken: CSRFToken,
  maxAge: number = 3600000 // 1 hour
): Promise<boolean> => {
  // Check token age
  if (Date.now() - csrfToken.timestamp > maxAge) {
    return false;
  }
  
  try {
    // Recreate signature
    const data = `${csrfToken.token}:${csrfToken.timestamp}`;
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    
    const fingerprint = navigator.userAgent + navigator.language;
    const keyMaterial = await crypto.subtle.digest('SHA-256', encoder.encode(fingerprint));
    const key = await crypto.subtle.importKey(
      'raw',
      keyMaterial,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signatureBuffer = await crypto.subtle.sign('HMAC', key, dataBuffer);
    const signatureArray = Array.from(new Uint8Array(signatureBuffer));
    const expectedSignature = signatureArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return expectedSignature === csrfToken.signature;
  } catch {
    return false;
  }
};