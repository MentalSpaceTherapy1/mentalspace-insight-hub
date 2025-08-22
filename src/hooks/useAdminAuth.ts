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
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          console.log('Checking admin status for user:', session.user.id);
          console.log('User email:', session.user.email);
          try {
            // Check if user is admin
            const { data: profile, error } = await supabase
              .from('admin_profiles')
              .select('*')
              .eq('user_id', session.user.id)
              .eq('is_active', true)
              .maybeSingle();

            console.log('Admin profile query result:', { profile, error });

            if (error) {
              console.error('Supabase error details:', error);
            }

            setState({
              user: session.user,
              session,
              profile: profile || null,
              isAdmin: !!profile,
              loading: false,
            });
          } catch (error) {
            console.error('Error checking admin profile:', error);
            console.error('Session user ID:', session.user.id);
            console.error('Full error details:', error);
            setState({
              user: session.user,
              session,
              profile: null,
              isAdmin: false,
              loading: false,
            });
          }
        } else {
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
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        console.log('Checking admin status for existing session:', session.user.id);
        console.log('User email:', session.user.email);
        try {
          // Check admin status
          const { data: profile, error } = await supabase
            .from('admin_profiles')
            .select('*')
            .eq('user_id', session.user.id)
            .eq('is_active', true)
            .maybeSingle();

          console.log('Existing session admin profile query result:', { profile, error });

          if (error) {
            console.error('Existing session Supabase error details:', error);
          }

          setState({
            user: session.user,
            session,
            profile: profile || null,
            isAdmin: !!profile,
            loading: false,
          });
        } catch (error) {
          console.error('Error checking admin profile for existing session:', error);
          console.error('Session user ID:', session.user.id);
          console.error('Full error details:', error);
          setState({
            user: session.user,
            session,
            profile: null,
            isAdmin: false,
            loading: false,
          });
        }
      } else {
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