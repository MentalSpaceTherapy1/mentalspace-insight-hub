import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AdminProfile {
  id: string;
  user_id: string;
  email: string;
  full_name: string;
  role: 'super_admin' | 'admin' | 'content_manager';
  is_active: boolean;
}

interface AdminAuthContextType {
  user: User | null;
  session: Session | null;
  profile: AdminProfile | null;
  isAdmin: boolean;
  loading: boolean;
  error: string | null;
  failedAttempts: number;
  isLocked: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  hasRole: (requiredRole: 'super_admin' | 'admin' | 'content_manager') => boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<AdminProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState<NodeJS.Timeout | null>(null);

  // Cache to avoid redundant profile checks
  const profileCache = React.useRef<Map<string, AdminProfile | null>>(new Map());
  
  // Security constants
  const MAX_FAILED_ATTEMPTS = 5;
  const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

  const checkAdminProfile = async (userId: string) => {
    // Check cache first
    if (profileCache.current.has(userId)) {
      return profileCache.current.get(userId);
    }

    try {
      const { data: profile, error } = await supabase
        .from('admin_profiles')
        .select('*')
        .eq('user_id', userId)
        .eq('is_active', true)
        .maybeSingle();

      if (error) {
        console.error('Admin profile query error:', error);
        profileCache.current.set(userId, null);
        return null;
      }

      // Cache the result
      profileCache.current.set(userId, profile);
      return profile;
    } catch (error) {
      console.error('Error checking admin profile:', error);
      profileCache.current.set(userId, null);
      return null;
    }
  };

  const signIn = async (email: string, password: string) => {
    // Check if account is locked
    if (isLocked) {
      throw new Error('Account is temporarily locked due to too many failed attempts. Please try again later.');
    }

    setLoading(true);
    setError(null);

    try {
      // Input validation
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Increment failed attempts
        const newFailedAttempts = failedAttempts + 1;
        setFailedAttempts(newFailedAttempts);
        
        // Lock account after max attempts
        if (newFailedAttempts >= MAX_FAILED_ATTEMPTS) {
          setIsLocked(true);
          setTimeout(() => {
            setIsLocked(false);
            setFailedAttempts(0);
          }, LOCKOUT_DURATION);
          throw new Error('Account locked due to too many failed attempts. Please try again in 15 minutes.');
        }
        
        setError(`Login failed. ${MAX_FAILED_ATTEMPTS - newFailedAttempts} attempts remaining.`);
        throw error;
      }
      
      // Reset failed attempts on successful login
      setFailedAttempts(0);
      setIsLocked(false);
      
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      // Clear session timeout
      if (sessionTimeout) {
        clearTimeout(sessionTimeout);
        setSessionTimeout(null);
      }
      
      await supabase.auth.signOut();
      
      // Clear security state
      setFailedAttempts(0);
      setIsLocked(false);
      
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  useEffect(() => {
    let mounted = true;
    let isProcessing = false;

    const handleAuthChange = async (event: string, session: Session | null) => {
      if (!mounted || isProcessing) return;
      
      // Prevent redundant calls
      if (event === 'SIGNED_IN' && user?.id === session?.user?.id && profile) {
        return;
      }

      isProcessing = true;
      console.log('Auth event:', event, 'Session:', !!session);

      if (!session?.user) {
        setUser(null);
        setSession(null);
        setProfile(null);
        setLoading(false);
        setError(null);
        profileCache.current.clear();
        isProcessing = false;
        return;
      }

      setUser(session.user);
      setSession(session);

      // Check admin profile
      const adminProfile = await checkAdminProfile(session.user.id);
      
      if (mounted) {
        setProfile(adminProfile);
        setLoading(false);
        
        // Set up session timeout for admin sessions
        if (adminProfile && session) {
          if (sessionTimeout) {
            clearTimeout(sessionTimeout);
          }
          
          const timeout = setTimeout(async () => {
            console.log('Admin session timed out');
            await signOut();
          }, SESSION_TIMEOUT);
          
          setSessionTimeout(timeout);
        }
      }
      
      isProcessing = false;
    };

    // Set up auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(handleAuthChange);

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (mounted) {
        handleAuthChange('INITIAL_SESSION', session);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
      if (sessionTimeout) {
        clearTimeout(sessionTimeout);
      }
    };
  }, []); // Empty dependency array is crucial

  const hasRole = (requiredRole: 'super_admin' | 'admin' | 'content_manager'): boolean => {
    if (!profile) return false;
    
    const roleHierarchy = {
      super_admin: 3,
      admin: 2,
      content_manager: 1,
    };
    
    return roleHierarchy[profile.role] >= roleHierarchy[requiredRole];
  };

  const value: AdminAuthContextType = {
    user,
    session,
    profile,
    isAdmin: !!profile,
    loading,
    error,
    failedAttempts,
    isLocked,
    signIn,
    signOut,
    hasRole,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};