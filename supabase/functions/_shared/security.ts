/**
 * Server-side security utilities for Edge Functions
 * Handles encryption, CSRF protection, and rate limiting
 */

/**
 * Server-side field encryption using crypto.subtle
 */
export class ServerEncryption {
  private static async getEncryptionKey(): Promise<CryptoKey> {
    const keyString = Deno.env.get('ENCRYPTION_KEY');
    if (!keyString) {
      throw new Error('ENCRYPTION_KEY environment variable not set');
    }
    
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(keyString),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );

    const salt = new TextEncoder().encode('mental-health-security-salt-2024');
    
    return crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  /**
   * Encrypt sensitive field data on server-side
   */
  static async encryptField(data: string): Promise<string> {
    try {
      const key = await this.getEncryptionKey();
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const encodedData = new TextEncoder().encode(data);

      const encryptedData = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        encodedData
      );

      // Combine IV and encrypted data
      const combined = new Uint8Array(iv.length + encryptedData.byteLength);
      combined.set(iv);
      combined.set(new Uint8Array(encryptedData), iv.length);

      // Return as base64 with server prefix
      return 'srv_enc_' + btoa(String.fromCharCode(...combined));
    } catch (error) {
      console.error('Server encryption failed:', error);
      throw new Error('Encryption failed');
    }
  }

  /**
   * Decrypt sensitive field data on server-side
   */
  static async decryptField(encryptedData: string): Promise<string> {
    try {
      if (!encryptedData.startsWith('srv_enc_')) {
        return encryptedData; // Not encrypted
      }

      const key = await this.getEncryptionKey();
      const combined = Uint8Array.from(atob(encryptedData.slice(8)), c => c.charCodeAt(0));
      
      const iv = combined.slice(0, 12);
      const encrypted = combined.slice(12);

      const decryptedData = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        encrypted
      );

      return new TextDecoder().decode(decryptedData);
    } catch (error) {
      console.error('Server decryption failed:', error);
      throw new Error('Decryption failed');
    }
  }

  /**
   * Encrypt sensitive form fields before database storage
   */
  static async encryptSensitiveFields(formData: Record<string, any>): Promise<Record<string, any>> {
    const sensitiveFields = [
      'phone', 'phoneNumber', 'dateOfBirth', 'ssn', 'licenseNumber', 
      'emergencyContact', 'emergencyPhone', 'currentMedications',
      'medicalHistory', 'insuranceId', 'membershipNumber', 'personalNotes'
    ];

    const encryptedData = { ...formData };

    for (const field of sensitiveFields) {
      if (encryptedData[field] && typeof encryptedData[field] === 'string') {
        encryptedData[field] = await this.encryptField(encryptedData[field]);
      }
    }

    return encryptedData;
  }
}

/**
 * CSRF Protection utilities
 */
export class CSRFProtection {
  /**
   * Generate a cryptographically secure CSRF token
   */
  static generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array));
  }

  /**
   * Validate CSRF token
   */
  static validateToken(token: string, storedToken: string): boolean {
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
}

/**
 * Enhanced rate limiting with progressive restrictions
 */
export class RateLimiter {
  /**
   * Check rate limits for form submissions
   */
  static async checkFormSubmissionLimit(
    supabase: any, 
    ipAddress: string, 
    formType: string
  ): Promise<{ allowed: boolean; retryAfter?: number }> {
    const now = new Date();
    const oneHour = new Date(now.getTime() - 60 * 60 * 1000);
    const oneDay = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    // Check hourly limit (stricter)
    const { count: hourlyCount } = await supabase
      .from('form_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('ip_address', ipAddress)
      .gte('created_at', oneHour.toISOString());

    // Check daily limit
    const { count: dailyCount } = await supabase
      .from('form_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('ip_address', ipAddress)
      .gte('created_at', oneDay.toISOString());

    // Progressive rate limiting
    const hourlyLimit = formType === 'contact_us' ? 2 : 3;
    const dailyLimit = formType === 'contact_us' ? 5 : 10;

    if (hourlyCount >= hourlyLimit) {
      return { allowed: false, retryAfter: 3600 }; // 1 hour
    }

    if (dailyCount >= dailyLimit) {
      return { allowed: false, retryAfter: 86400 }; // 24 hours
    }

    return { allowed: true };
  }

  /**
   * Check rate limits for assessment submissions
   */
  static async checkAssessmentLimit(
    supabase: any, 
    ipAddress: string
  ): Promise<{ allowed: boolean; retryAfter?: number }> {
    const now = new Date();
    const oneHour = new Date(now.getTime() - 60 * 60 * 1000);

    const { count } = await supabase
      .from('assessment_sessions')
      .select('*', { count: 'exact', head: true })
      .eq('ip_address', ipAddress)
      .gte('created_at', oneHour.toISOString());

    const hourlyLimit = 3; // 3 assessments per hour max

    if (count >= hourlyLimit) {
      return { allowed: false, retryAfter: 3600 };
    }

    return { allowed: true };
  }
}

/**
 * Input validation and sanitization
 */
export class InputValidator {
  /**
   * Sanitize string input to prevent XSS
   */
  static sanitizeString(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/javascript:/gi, '') // Remove javascript: URLs
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframes
      .replace(/<embed\b[^<]*>/gi, '') // Remove embeds
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '') // Remove objects
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
   * Validate phone number format
   */
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)\.]/g, ''));
  }

  /**
   * Detect potentially malicious content
   */
  static containsMaliciousContent(input: string): boolean {
    const maliciousPatterns = [
      /<script\b/gi,
      /javascript:/gi,
      /<iframe\b/gi,
      /<embed\b/gi,
      /<object\b/gi,
      /data:text\/html/gi,
      /vbscript:/gi,
      /expression\s*\(/gi
    ];

    return maliciousPatterns.some(pattern => pattern.test(input));
  }
}