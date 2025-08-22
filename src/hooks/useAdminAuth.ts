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
    console.log('useAdminAuth: useEffect running');
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('useAdminAuth: Auth state change event:', event, session?.user?.id);
        
        if (session?.user) {
          try {
            console.log('useAdminAuth: Checking admin profile for user:', session.user.id);
            // Check if user is admin
            const { data: profile, error } = await supabase
              .from('admin_profiles')
              .select('*')
              .eq('user_id', session.user.id)
              .eq('is_active', true)
              .maybeSingle();

            console.log('useAdminAuth: Admin profile query result:', { profile, error });

            setState({
              user: session.user,
              session,
              profile: profile || null,
              isAdmin: !!profile,
              loading: false,
            });
          } catch (error) {
            console.error('useAdminAuth: Error checking admin profile:', error);
            setState({
              user: session.user,
              session,
              profile: null,
              isAdmin: false,
              loading: false,
            });
          }
        } else {
          console.log('useAdminAuth: No session, setting state to not authenticated');
          setState({
            user: null,
            session: null,
            profile: null,
            isAdmin: false,
            loading: false,
          });
        }
      }
    );

    // Check for existing session
    console.log('useAdminAuth: Checking for existing session');
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      console.log('useAdminAuth: Existing session check:', session?.user?.id);
      
      if (session?.user) {
        try {
          console.log('useAdminAuth: Checking admin profile for existing session user:', session.user.id);
          // Check admin status
          const { data: profile, error } = await supabase
            .from('admin_profiles')
            .select('*')
            .eq('user_id', session.user.id)
            .eq('is_active', true)
            .maybeSingle();

          console.log('useAdminAuth: Existing session admin profile result:', { profile, error });

          setState({
            user: session.user,
            session,
            profile: profile || null,
            isAdmin: !!profile,
            loading: false,
          });
        } catch (error) {
          console.error('useAdminAuth: Error checking admin profile for existing session:', error);
          setState({
            user: session.user,
            session,
            profile: null,
            isAdmin: false,
            loading: false,
          });
        }
      } else {
        console.log('useAdminAuth: No existing session found');
        setState(prev => ({ ...prev, loading: false }));
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      throw error;
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
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