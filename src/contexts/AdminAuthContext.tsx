import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AdminProfile {
  id: string;
  user_id: string;
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

  // Cache to avoid redundant profile checks
  const profileCache = React.useRef<Map<string, AdminProfile | null>>(new Map());

  const checkAdminProfile = async (userId: string) => {
    // Check cache first
    if (profileCache.current.has(userId)) {
      return profileCache.current.get(userId);
    }

    try {
      console.log('Checking admin profile for user:', userId);
      
      // Use secure function that doesn't expose email addresses
      const { data, error } = await supabase
        .rpc('get_secure_admin_profile', { target_user_id: userId });
      
      if (error) {
        console.error('Admin profile query error:', error);
        profileCache.current.set(userId, null);
        return null;
      }

      // RPC returns an array directly
      const profile = data && data.length > 0 ? data[0] : null;
      console.log('Admin profile found:', !!profile, profile?.role);

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
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        throw error;
      }
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  useEffect(() => {
    let mounted = true;
    let isProcessing = false;
    let loadingTimeout: NodeJS.Timeout;

    const handleAuthChange = async (event: string, session: Session | null) => {
      if (!mounted) return;
      
      // Clear any existing timeout
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
      
      // Prevent redundant calls
      if (event === 'SIGNED_IN' && user?.id === session?.user?.id && profile && !isProcessing) {
        return;
      }

      if (isProcessing && event !== 'INITIAL_SESSION') {
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

      // Check admin profile only if session exists
      try {
        const adminProfile = await checkAdminProfile(session.user.id);
        
        if (mounted) {
          setProfile(adminProfile);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error in auth check:', error);
        if (mounted) {
          setLoading(false);
        }
      }
      
      isProcessing = false;
    };

    // Set up auth listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(handleAuthChange);

    // Safety timeout: if no auth state after 2 seconds, stop loading
    loadingTimeout = setTimeout(() => {
      if (mounted && loading && !user && !session) {
        console.log('Auth timeout - no session detected');
        setLoading(false);
      }
    }, 2000);

    // Check initial session
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (mounted) {
          handleAuthChange('INITIAL_SESSION', session);
        }
      })
      .catch((error) => {
        console.error('Error getting session:', error);
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
      subscription.unsubscribe();
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