import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { useAuthStore } from '../store/authStore';

// Client Pages
import { ClientDashboardPage } from '../pages/client/ClientDashboardPage';
import { MyProductsPage } from '../pages/client/MyProductsPage';
import { ClientServiceRequestsPage } from '../pages/client/ClientServiceRequestsPage';
import { ClientRequestProductPage } from '../pages/client/ClientRequestProductPage';

// Admin Pages
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { AdminTicketsPage } from '../pages/admin/AdminTicketsPage';
import { AdminProductRequestsPage } from '../pages/admin/AdminProductRequestsPage';
import { AdminTechniciansPage } from '../pages/admin/AdminTechniciansPage';
import { AdminClientsPage } from '../pages/admin/AdminClientsPage';
import { AdminProductsPage } from '../pages/admin/AdminProductsPage';
import { AdminTechnicalReportsPage } from '../pages/admin/AdminTechnicalReportsPage';
import { AdminAdminsPage } from '../pages/admin/AdminAdminsPage';

// Technician Pages
import { TechnicianDashboardPage } from '../pages/technician/TechnicianDashboardPage';
import { TechnicianOngoingWorksPage } from '../pages/technician/TechnicianOngoingWorksPage';
import { TechRequestProductPage } from '../pages/technician/TechRequestProductPage';
import { TechnicianHistoryOfWorkPage } from '../pages/technician/TechnicianHistoryOfWorkPage';

// Super Admin Pages
import { SuperAdminDashboardPage } from '../pages/super-admin/SuperAdminDashboardPage';
import { SuperAdminTicketsPage } from '../pages/super-admin/SuperAdminTicketsPage';
import { SuperAdminProductRequestsPage } from '../pages/super-admin/SuperAdminProductRequestsPage';
import { SuperAdminTechniciansPage } from '../pages/super-admin/SuperAdminTechniciansPage';
import { SuperAdminClientsPage } from '../pages/super-admin/SuperAdminClientsPage';
import { SuperAdminProductsPage } from '../pages/super-admin/SuperAdminProductsPage';
import { SuperAdminTechnicalReportsPage } from '../pages/super-admin/SuperAdminTechnicalReportsPage';
import { SuperAdminAdminsPage } from '../pages/super-admin/SuperAdminAdminsPage';
import { SuperAdminSettingsPage } from '../pages/super-admin/SuperAdminSettingsPage';

export const AppRoutes: React.FC = () => {
  const { isAuthenticated, getDefaultDashboardPath } = useAuthStore();

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to={getDefaultDashboardPath()} replace /> : <LoginPage />}
      />

      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? getDefaultDashboardPath() : '/login'} replace />}
      />

      {/* Client Routes */}
      <Route element={<ProtectedRoute allowedRoles={['ROLE_CLIENT', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']} />}>
        <Route path="/client" element={<DashboardLayout />}>
          <Route path="dashboard" element={<ClientDashboardPage />} />
          <Route path="my-products" element={<MyProductsPage />} />
          <Route path="service-requests" element={<ClientServiceRequestsPage />} />
          <Route path="request-product" element={<ClientRequestProductPage />} />
          <Route index element={<Navigate to="/client/dashboard" replace />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route element={<ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_SUPER_ADMIN']} />}>
        <Route path="/admin" element={<DashboardLayout />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="tickets" element={<AdminTicketsPage />} />
          <Route path="product-requests" element={<AdminProductRequestsPage />} />
          <Route path="technicians" element={<AdminTechniciansPage />} />
          <Route path="clients" element={<AdminClientsPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="technical-reports" element={<AdminTechnicalReportsPage />} />
          <Route path="admins" element={<AdminAdminsPage />} />
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
        </Route>
      </Route>

      {/* Technician Routes */}
      <Route element={<ProtectedRoute allowedRoles={['ROLE_TECHNICIAN', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']} />}>
        <Route path="/technician" element={<DashboardLayout />}>
          <Route path="dashboard" element={<TechnicianDashboardPage />} />
          <Route path="ongoing-works" element={<TechnicianOngoingWorksPage />} />
          <Route path="request-product" element={<TechRequestProductPage />} />
          <Route path="history-of-work" element={<TechnicianHistoryOfWorkPage />} />
          <Route index element={<Navigate to="/technician/dashboard" replace />} />
        </Route>
      </Route>

      {/* Super Admin Routes */}
      <Route element={<ProtectedRoute allowedRoles={['ROLE_SUPER_ADMIN']} />}>
        <Route path="/super-admin" element={<DashboardLayout />}>
          <Route path="dashboard" element={<SuperAdminDashboardPage />} />
          <Route path="tickets" element={<SuperAdminTicketsPage />} />
          <Route path="product-requests" element={<SuperAdminProductRequestsPage />} />
          <Route path="technicians" element={<SuperAdminTechniciansPage />} />
          <Route path="clients" element={<SuperAdminClientsPage />} />
          <Route path="products" element={<SuperAdminProductsPage />} />
          <Route path="technical-reports" element={<SuperAdminTechnicalReportsPage />} />
          <Route path="admins" element={<SuperAdminAdminsPage />} />
          <Route path="settings" element={<SuperAdminSettingsPage />} />
          <Route index element={<Navigate to="/super-admin/dashboard" replace />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
