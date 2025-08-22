import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminAuth from '@/components/AdminAuth';
import AdminDashboard from '@/components/AdminDashboard';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Loader2 } from 'lucide-react';

const Admin = () => {
  const { isAdmin, loading, user, session } = useAdminAuth();
  const [authTimeout, setAuthTimeout] = useState(false);

  // Add timeout for auth loading to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        console.error('Admin page auth timeout - something is wrong with authentication');
        setAuthTimeout(true);
      }
    }, 10000); // 10 second timeout, aligned with auth hook

    return () => clearTimeout(timeout);
  }, [loading]);

  // Show detailed loading state for first 5 seconds, then show auth form
  if (loading && !authTimeout) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <div className="space-y-2">
            <p className="text-lg font-medium">Checking admin access...</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>User: {user ? `✓ ${user.email}` : '✗ No user'}</p>
              <p>Session: {session ? '✓ Active' : '✗ No session'}</p>
              <p>Admin Status: Verifying...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If we hit timeout or there's an auth issue, show auth form
  if (authTimeout || !isAdmin) {
    return <AdminAuth />;
  }

  return <AdminDashboard />;
};

export default Admin;