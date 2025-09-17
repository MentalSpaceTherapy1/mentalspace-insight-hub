/**
 * Client-side encryption utilities for sensitive assessment data
 * Uses Web Crypto API for secure encryption/decryption
 */

// Generate a random encryption key for this session
const generateEncryptionKey = async (): Promise<CryptoKey> => {
  return await crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true, // extractable
    ['encrypt', 'decrypt']
  );
};

// Convert CryptoKey to exportable format
const exportKey = async (key: CryptoKey): Promise<string> => {
  const exported = await crypto.subtle.exportKey('raw', key);
  return btoa(String.fromCharCode(...new Uint8Array(exported)));
};

// Import key from string format
const importKey = async (keyString: string): Promise<CryptoKey> => {
  const keyBuffer = Uint8Array.from(atob(keyString), c => c.charCodeAt(0));
  return await crypto.subtle.importKey(
    'raw',
    keyBuffer,
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt']
  );
};

// Encrypt sensitive data
export const encryptSensitiveData = async (
  data: Record<string, any>
): Promise<{
  encryptedData: string;
  encryptionKey: string;
  iv: string;
}> => {
  try {
    // Generate encryption key and IV
    const key = await generateEncryptionKey();
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    // Convert data to string and encrypt
    const jsonString = JSON.stringify(data);
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(jsonString);
    
    const encrypted = await crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      key,
      dataBuffer
    );
    
    // Convert to base64 for storage
    const encryptedData = btoa(String.fromCharCode(...new Uint8Array(encrypted)));
    const encryptionKey = await exportKey(key);
    const ivString = btoa(String.fromCharCode(...iv));
    
    return {
      encryptedData,
      encryptionKey,
      iv: ivString,
    };
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt sensitive data');
  }
};

// Decrypt sensitive data (client-side)
export const decryptSensitiveData = async (
  encryptedData: string,
  encryptionKey: string,
  iv: string
): Promise<Record<string, any>> => {
  try {
    // Import key and convert IV
    const key = await importKey(encryptionKey);
    const ivBuffer = Uint8Array.from(atob(iv), c => c.charCodeAt(0));
    const encryptedBuffer = Uint8Array.from(atob(encryptedData), c => c.charCodeAt(0));
    
    // Decrypt data
    const decrypted = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: ivBuffer,
      },
      key,
      encryptedBuffer
    );
    
    // Convert back to object
    const decoder = new TextDecoder();
    const jsonString = decoder.decode(decrypted);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Decryption failed:', error);
    throw new Error('Failed to decrypt sensitive data');
  }
};

// Generate a secure hash for data integrity verification
export const generateDataHash = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
};

// Verify data integrity
export const verifyDataIntegrity = async (
  data: string,
  hash: string
): Promise<boolean> => {
  try {
    const computedHash = await generateDataHash(data);
    return computedHash === hash;
  } catch {
    return false;
  }
};