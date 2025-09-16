/**
 * Client-side encryption utilities for sensitive form data
 * Uses Web Crypto API for secure field-level encryption
 */

export class FieldEncryption {
  private static async getKey(): Promise<CryptoKey> {
    // In a production environment, this key should be derived from user session
    // For now, we'll use a session-based approach with key derivation
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode('secure-therapy-app-2024'), // This should be replaced with proper key management
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );

    return crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: new TextEncoder().encode('mental-health-security'),
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
   * Encrypt sensitive field data
   */
  static async encryptField(data: string): Promise<string> {
    try {
      const key = await this.getKey();
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

      // Return as base64 with prefix to identify encrypted data
      return 'enc_' + btoa(String.fromCharCode(...combined));
    } catch (error) {
      console.error('Encryption failed:', error);
      // Fallback to original data if encryption fails
      return data;
    }
  }

  /**
   * Decrypt sensitive field data
   */
  static async decryptField(encryptedData: string): Promise<string> {
    try {
      if (!encryptedData.startsWith('enc_')) {
        // Data is not encrypted, return as-is
        return encryptedData;
      }

      const key = await this.getKey();
      const combined = Uint8Array.from(atob(encryptedData.slice(4)), c => c.charCodeAt(0));
      
      const iv = combined.slice(0, 12);
      const encrypted = combined.slice(12);

      const decryptedData = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        encrypted
      );

      return new TextDecoder().decode(decryptedData);
    } catch (error) {
      console.error('Decryption failed:', error);
      // Return original data if decryption fails
      return encryptedData;
    }
  }

  /**
   * Encrypt sensitive form fields before submission
   */
  static async encryptSensitiveFields(formData: Record<string, any>): Promise<Record<string, any>> {
    const sensitiveFields = [
      'phone', 'phoneNumber', 'dateOfBirth', 'ssn', 'licenseNumber', 
      'emergencyContact', 'emergencyPhone', 'currentMedications',
      'medicalHistory', 'insuranceId', 'membershipNumber'
    ];

    const encryptedData = { ...formData };

    for (const field of sensitiveFields) {
      if (encryptedData[field] && typeof encryptedData[field] === 'string') {
        encryptedData[field] = await this.encryptField(encryptedData[field]);
      }
    }

    return encryptedData;
  }

  /**
   * Check if a field contains sensitive information based on patterns
   */
  static isSensitiveField(fieldName: string, value: string): boolean {
    const sensitivePatterns = [
      /phone|tel|mobile/i,
      /ssn|social.security/i,
      /license|id.number/i,
      /birth|dob|age/i,
      /medical|medication|health/i,
      /insurance|member/i,
      /emergency/i
    ];

    const sensitiveValuePatterns = [
      /^\d{3}-\d{2}-\d{4}$/, // SSN
      /^\d{3}-\d{3}-\d{4}$/, // Phone
      /^\d{10}$/, // Phone without dashes
    ];

    return sensitivePatterns.some(pattern => pattern.test(fieldName)) ||
           sensitiveValuePatterns.some(pattern => pattern.test(value));
  }
}

/**
 * Security utility functions
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
    const array = new Uint8Array(24);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array));
  }

  /**
   * Validate CSRF token (basic implementation)
   */
  static validateCSRFToken(token: string, storedToken: string): boolean {
    return token === storedToken && token.length >= 32;
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
   * Apply security headers via meta tags (for client-side apps)
   */
  static applySecurityHeaders(): void {
    // Add security-related meta tags
    const securityMetas = [
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      { 'http-equiv': 'Strict-Transport-Security', content: 'max-age=31536000; includeSubDomains' }
    ];

    securityMetas.forEach(meta => {
      const element = document.createElement('meta');
      Object.entries(meta).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
      document.head.appendChild(element);
    });
  }
}