import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AdminAuth from '@/components/AdminAuth';
import AdminDashboard from '@/components/AdminDashboard';
import { useAdminAuth } from '@/hooks/useAdminAuth';

const Admin = () => {
  const { isAdmin, loading } = useAdminAuth();

  if (loading) {
    return <AdminAuth />; // Shows loading state
  }

  if (!isAdmin) {
    return <AdminAuth />;
  }

  return <AdminDashboard />;
};

export default Admin;