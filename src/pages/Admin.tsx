import AdminAuth from '@/components/AdminAuth';
import AdminDashboard from '@/components/AdminDashboard';
import { useAdminAuth, AdminAuthProvider } from '@/contexts/AdminAuthContext';
import { Loader2, AlertCircle } from 'lucide-react';

const AdminContent = () => {
  const { isAdmin, loading, user, error } = useAdminAuth();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <div className="space-y-2">
            <p className="text-lg font-medium">Checking admin access...</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>User: {user ? `✓ ${user.email}` : '✗ No user'}</p>
              <p>Admin Status: {user ? 'Verifying...' : 'Waiting for auth...'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-center space-y-4 max-w-md">
          <AlertCircle className="h-8 w-8 mx-auto text-destructive" />
          <div className="space-y-2">
            <p className="text-lg font-medium text-destructive">Authentication Error</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
          <AdminAuth />
        </div>
      </div>
    );
  }

  // Show admin dashboard if user is admin, otherwise show auth form
  if (isAdmin && user) {
    return <AdminDashboard />;
  }

  return <AdminAuth />;
};

const Admin = () => {
  return (
    <AdminAuthProvider>
      <AdminContent />
    </AdminAuthProvider>
  );
};

export default Admin;