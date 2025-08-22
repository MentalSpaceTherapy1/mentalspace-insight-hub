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
}

export const useAdminAuth = () => {
  const [state, setState] = useState<AdminAuthState>({
    user: null,
    session: null,
    profile: null,
    isAdmin: false,
    loading: true,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Set timeout to prevent infinite loading
    const setLoadingTimeout = () => {
      timeoutId = setTimeout(() => {
        console.warn('Admin auth loading timeout - forcing loading to false');
        setState(prev => ({ ...prev, loading: false }));
      }, 10000); // 10 second timeout
    };

    const clearLoadingTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    setLoadingTimeout();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔔 Auth state change:', { 
          event, 
          hasSession: !!session, 
          userId: session?.user?.id,
          hasAccessToken: !!session?.access_token 
        });
        
        clearLoadingTimeout();
        
        // Handle explicit sign out or token refresh failures
        if (event === 'SIGNED_OUT' || !session) {
          console.log('🚪 User signed out or session lost');
          setState({
            user: null,
            session: null,
            profile: null,
            isAdmin: false,
            loading: false,
          });
          return;
        }

        // Handle token refresh specifically
        if (event === 'TOKEN_REFRESHED') {
          console.log('🔄 Token refreshed:', {
            hasSession: !!session,
            hasAccessToken: !!session?.access_token,
            expiresAt: session?.expires_at
          });
          
          // If token refresh failed (no session returned), sign out
          if (!session || !session.access_token) {
            console.error('❌ Token refresh failed - signing out');
            try {
              await supabase.auth.signOut({ scope: 'global' });
            } catch (err) {
              console.error('Error during forced sign out:', err);
            }
            setState({
              user: null,
              session: null,
              profile: null,
              isAdmin: false,
              loading: false,
            });
            return;
          }
        }
        
        if (session?.user) {
          console.log('✅ Processing session for user:', {
            userId: session.user.id,
            email: session.user.email,
            jwtToken: session.access_token?.substring(0, 20) + '...',
            expiresAt: session.expires_at
          });
          
          try {
            // Add delay to allow JWT to be processed
            await new Promise(resolve => setTimeout(resolve, 50));
            
            // Test auth.uid() by calling is_admin_user with timeout
            let testAuth, authError;
            try {
              const authTestPromise = supabase.rpc('is_admin_user');
              const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Auth test timeout')), 5000)
              );
              
              const result = await Promise.race([
                authTestPromise,
                timeoutPromise
              ]) as { data: any; error: any };
              testAuth = result.data;
              authError = result.error;
            } catch (error) {
              authError = error;
              testAuth = null;
            }
            
            console.log('🧪 Auth test result:', { testAuth, authError });
            
            if (authError) {
              console.error('❌ Database auth test failed, signing out:', authError);
              try {
                await supabase.auth.signOut({ scope: 'global' });
              } catch (err) {
                console.error('Error during forced sign out:', err);
              }
              setState({
                user: null,
                session: null,
                profile: null,
                isAdmin: false,
                loading: false,
              });
              return;
            }

            // Check if user is admin
            const { data: profile, error } = await supabase
              .from('admin_profiles')
              .select('*')
              .eq('user_id', session.user.id)
              .eq('is_active', true)
              .maybeSingle();

            console.log('👤 Admin profile query result:', { profile, error });

            if (error) {
              console.error('❌ Supabase error details:', error.message, error.code, error.hint);
            }

            setState({
              user: session.user,
              session,
              profile: profile || null,
              isAdmin: !!profile,
              loading: false,
            });
          } catch (error) {
            console.error('❌ Error checking admin profile:', error);
            
            // If this is a timeout or critical error, sign out
            if (error.message?.includes('timeout') || error.message?.includes('Auth test timeout')) {
              console.log('🔄 Critical auth error, signing out');
              try {
                await supabase.auth.signOut({ scope: 'global' });
              } catch (err) {
                console.error('Error during forced sign out:', err);
              }
              setState({
                user: null,
                session: null,
                profile: null,
                isAdmin: false,
                loading: false,
              });
            } else {
              setState({
                user: session.user,
                session,
                profile: null,
                isAdmin: false,
                loading: false,
              });
            }
          }
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(async ({ data: { session }, error: sessionError }) => {
      console.log('Initial session check:', { hasSession: !!session, sessionError });
      
      if (sessionError) {
        console.error('Session error:', sessionError);
        clearLoadingTimeout();
        setState(prev => ({ ...prev, loading: false }));
        return;
      }
      
      if (session?.user) {
        console.log('Found existing session for user:', session.user.id);
        console.log('Session token info:', {
          hasAccessToken: !!session.access_token,
          expiresAt: session.expires_at,
          tokenType: session.token_type
        });
        
        try {
          // Add delay to allow JWT to be processed
          await new Promise(resolve => setTimeout(resolve, 100));
          
          // Test auth.uid() first
          const { data: testAuth, error: authError } = await supabase.rpc('is_admin_user');
          console.log('Existing session auth test result:', { testAuth, authError });

          const { data: profile, error } = await supabase
            .from('admin_profiles')
            .select('*')
            .eq('user_id', session.user.id)
            .eq('is_active', true)
            .maybeSingle();

          console.log('Existing session admin profile query result:', { profile, error });

          clearLoadingTimeout();
          setState({
            user: session.user,
            session,
            profile: profile || null,
            isAdmin: !!profile,
            loading: false,
          });
        } catch (error) {
          console.error('Error checking admin profile for existing session:', error);
          clearLoadingTimeout();
          setState({
            user: session.user,
            session,
            profile: null,
            isAdmin: false,
            loading: false,
          });
        }
      } else {
        clearLoadingTimeout();
        setState(prev => ({ ...prev, loading: false }));
      }
    });

    return () => {
      subscription.unsubscribe();
      clearLoadingTimeout();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    console.log('Attempting sign in for:', email);
    
    try {
      // Clear any existing auth state first
      await supabase.auth.signOut({ scope: 'global' });
    } catch (err) {
      console.log('Cleanup sign out error (ignoring):', err);
    }

    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    console.log('Sign in result:', { error, hasSession: !!data.session, hasUser: !!data.user });
    
    if (error) {
      throw error;
    }
    
    // Force a page refresh to ensure clean state
    if (data.session) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const signOut = async () => {
    console.log('Attempting sign out');
    
    try {
      const { error } = await supabase.auth.signOut({ scope: 'global' });
      if (error) {
        console.error('Sign out error:', error);
      }
    } finally {
      // Clear state regardless of error
      setState({
        user: null,
        session: null,
        profile: null,
        isAdmin: false,
        loading: false,
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