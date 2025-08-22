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
          // Check if user is admin
          const { data: profile } = await supabase
            .from('admin_profiles')
            .select('*')
            .eq('user_id', session.user.id)
            .eq('is_active', true)
            .single();

          setState({
            user: session.user,
            session,
            profile: profile || null,
            isAdmin: !!profile,
            loading: false,
          });
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
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        // Check admin status
        supabase
          .from('admin_profiles')
          .select('*')
          .eq('user_id', session.user.id)
          .eq('is_active', true)
          .single()
          .then(({ data: profile }) => {
            setState({
              user: session.user,
              session,
              profile: profile || null,
              isAdmin: !!profile,
              loading: false,
            });
          });
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