import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import type { UserRole } from '../types/auth';

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && allowedRoles.length > 0) {
    const hasRequiredRole = user?.roles?.some((r) => allowedRoles.includes(r));
    if (!hasRequiredRole) {
      // Redirect to their default dashboard if unauthorized for this specific role route
      return <Navigate to="/login" replace />;
    }
  }

  return <Outlet />;
};
