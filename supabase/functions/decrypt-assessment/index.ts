import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const ALLOWED_ORIGINS = new Set([
  'http://localhost:5173',
  'http://localhost:8080', 
  'https://coping-healing-therapy.lovable.app',
]);

const getCorsHeaders = (origin: string | null) => ({
  'Access-Control-Allow-Origin': origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://coping-healing-therapy.lovable.app',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
});

interface DecryptRequest {
  encryptedData: string;
  encryptionKey: string;
  iv: string;
  dataHash?: string;
}

// Server-side decryption using Web Crypto API
const decryptData = async (
  encryptedData: string,
  encryptionKey: string,
  iv: string
): Promise<Record<string, any>> => {
  try {
    // Import key
    const keyBuffer = Uint8Array.from(atob(encryptionKey), c => c.charCodeAt(0));
    const key = await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      {
        name: 'AES-GCM',
        length: 256,
      },
      false,
      ['decrypt']
    );
    
    // Convert IV and encrypted data
    const ivBuffer = Uint8Array.from(atob(iv), c => c.charCodeAt(0));
    const encryptedBuffer = Uint8Array.from(atob(encryptedData), c => c.charCodeAt(0));
    
    // Decrypt
    const decrypted = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: ivBuffer,
      },
      key,
      encryptedBuffer
    );
    
    // Convert to JSON
    const decoder = new TextDecoder();
    const jsonString = decoder.decode(decrypted);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Server decryption failed:', error);
    throw new Error('Decryption failed');
  }
};

serve(async (req) => {
  const origin = req.headers.get('origin');
  
  // Get client IP for security logging
  const forwardedFor = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  let clientIP = 'unknown';
  if (forwardedFor) {
    clientIP = forwardedFor.split(',')[0].trim();
  } else if (realIP) {
    clientIP = realIP.trim();
  }

  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: getCorsHeaders(origin) });
  }

  // Enhanced origin validation with logging
  if (!origin || !ALLOWED_ORIGINS.has(origin)) {
    console.error('Blocked decrypt request from disallowed origin:', origin, 'IP:', clientIP);
    
    // Log critical security violation
    try {
      const serviceSupabase = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
      );
      
      await serviceSupabase.from('security_audit_log').insert({
        event_type: 'blocked_decrypt_origin_violation',
        table_name: 'decrypt_assessment_function',
        ip_address: clientIP,
        details: {
          origin: origin,
          user_agent: req.headers.get('user-agent'),
          timestamp: new Date().toISOString(),
          severity: 'CRITICAL'
        }
      });
    } catch (logError) {
      console.error('Failed to log critical security violation:', logError);
    }
    
    return new Response(JSON.stringify({ success: false, error: 'Origin not allowed' }), {
      status: 403,
      headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
    });
  }

  try {
    // Verify admin authentication
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ success: false, error: 'Authentication required' }), {
        status: 401,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: {
            authorization: authHeader,
          },
        },
      }
    );

    // Verify user is admin
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid authentication' }), {
        status: 401,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    // Check admin status using service role client
    const serviceSupabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data: adminCheck, error: adminError } = await serviceSupabase.rpc('check_admin_access');
    if (adminError || !adminCheck) {
      // Log unauthorized access attempt
      await serviceSupabase
        .from('analytics_events')
        .insert({
          event_type: 'unauthorized_decrypt_attempt',
          event_data: { 
            user_id: user.id,
            ip_address: req.headers.get('x-forwarded-for') || 'unknown',
            timestamp: new Date().toISOString()
          },
        });

      return new Response(JSON.stringify({ success: false, error: 'Admin access required' }), {
        status: 403,
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
      });
    }

    const { encryptedData, encryptionKey, iv, dataHash }: DecryptRequest = await req.json();

    // Decrypt the data
    const decryptedData = await decryptData(encryptedData, encryptionKey, iv);

    // Verify data integrity if hash provided
    if (dataHash) {
      const dataString = JSON.stringify(decryptedData);
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(dataString);
      const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
      const computedHash = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
      
      if (computedHash !== dataHash) {
        throw new Error('Data integrity check failed');
      }
    }

    // Log successful decryption for audit
    await serviceSupabase
      .from('analytics_events')
      .insert({
        event_type: 'assessment_data_decrypted',
        event_data: { 
          admin_user_id: user.id,
          timestamp: new Date().toISOString(),
          data_size: JSON.stringify(decryptedData).length
        },
        ip_address: req.headers.get('x-forwarded-for') || 'unknown',
      });

    console.log('Assessment data decrypted successfully by admin:', user.id);

    return new Response(
      JSON.stringify({
        success: true,
        decryptedData,
        message: 'Data decrypted successfully'
      }),
      {
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error: any) {
    console.error('Decryption service error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Decryption failed'
      }),
      {
        headers: { ...getCorsHeaders(origin), 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});