import { useState, useEffect } from 'react';
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

interface AdminAuthState {
  user: User | null;
  session: Session | null;
  profile: AdminProfile | null;
  isAdmin: boolean;
  loading: boolean;
  error: string | null;
}

export const useAdminAuth = () => {
  const [state, setState] = useState<AdminAuthState>({
    user: null,
    session: null,
    profile: null,
    isAdmin: false,
    loading: true,
    error: null,
  });

  const checkAdminStatus = async (user: User) => {
    try {
      console.log('🔍 Checking admin status for user:', user.id);
      
      const { data: profile, error } = await supabase
        .from('admin_profiles')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .maybeSingle();

      console.log('📋 Admin profile result:', { profile, error });

      if (error) {
        console.error('❌ Admin profile query error:', error);
        return null;
      }

      return profile;
    } catch (error) {
      console.error('❌ Error checking admin status:', error);
      return null;
    }
  };

  useEffect(() => {
    let mounted = true;
    let timeoutId: NodeJS.Timeout;

    // Failsafe timeout to prevent infinite loading
    timeoutId = setTimeout(() => {
      if (mounted) {
        console.warn('⏰ Auth timeout - clearing loading state');
        setState(prev => ({ ...prev, loading: false, error: 'Authentication timeout' }));
      }
    }, 10000);

    const handleAuthState = async (event: string, session: Session | null) => {
      console.log('🔔 Auth event:', event, 'Session exists:', !!session);

      if (!mounted) return;

      // Clear timeout since we got a response
      if (timeoutId) clearTimeout(timeoutId);

      if (!session || !session.user) {
        console.log('🚪 No session - user signed out');
        setState({
          user: null,
          session: null,
          profile: null,
          isAdmin: false,
          loading: false,
          error: null,
        });
        return;
      }

      console.log('✅ Valid session found for:', session.user.email);

      // Set basic auth state immediately
      setState(prev => ({
        ...prev,
        user: session.user,
        session,
        loading: true, // Still loading while checking admin status
        error: null,
      }));

      // Check admin status
      const profile = await checkAdminStatus(session.user);

      if (mounted) {
        setState(prev => ({
          ...prev,
          profile,
          isAdmin: !!profile,
          loading: false,
        }));
      }
    };

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(handleAuthState);

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('❌ Session check error:', error);
        if (mounted) {
          setState(prev => ({ ...prev, loading: false, error: error.message }));
        }
        return;
      }

      // Process the initial session
      handleAuthState('INITIAL_SESSION', session);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log('🔐 Starting sign in for:', email);

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Clean up any stale auth data
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
          console.log('🧹 Cleared stale auth key:', key);
        }
      });

      // Sign out any existing session first
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        console.log('Cleanup sign out (ignoring error):', err);
      }

      // Sign in
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setState(prev => ({ ...prev, loading: false, error: error.message }));
        throw error;
      }

      console.log('✅ Sign in successful, auth state handler will take over');
      // The auth state change handler will handle the rest
    } catch (error) {
      console.error('❌ Sign in failed:', error);
      setState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  };

  const signOut = async () => {
    console.log('🚪 Signing out');

    try {
      const { error } = await supabase.auth.signOut({ scope: 'global' });
      if (error) {
        console.error('Sign out error:', error);
      }
    } catch (err) {
      console.error('Sign out error:', err);
    } finally {
      // Always clear state
      setState({
        user: null,
        session: null,
        profile: null,
        isAdmin: false,
        loading: false,
        error: null,
      });
    }
  };

  const hasRole = (requiredRole: 'super_admin' | 'admin' | 'content_manager'): boolean => {
    if (!state.profile) return false;
    
    const roleHierarchy = {
      super_admin: 3,
      admin: 2,
      content_manager: 1,
    };
    
    return roleHierarchy[state.profile.role] >= roleHierarchy[requiredRole];
  };

  return {
    ...state,
    signIn,
    signOut,
    hasRole,
  };
};