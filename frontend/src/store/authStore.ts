import { useState, useEffect } from 'react';
import type { User, UserRole } from '../types/auth';

const STORAGE_KEY = 'cctv_auth_user';

const getInitialUser = (): User | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

let currentUser: User | null = getInitialUser();
const listeners = new Set<() => void>();

const notify = () => {
  listeners.forEach((listener) => listener());
};

export const authActions = {
  setUser: (user: User | null) => {
    currentUser = user;
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    notify();
  },
  getPrimaryRole: (user: User | null): UserRole => {
    if (!user || !user.roles || user.roles.length === 0) return 'ROLE_CLIENT';
    if (user.roles.includes('ROLE_SUPER_ADMIN')) return 'ROLE_SUPER_ADMIN';
    if (user.roles.includes('ROLE_ADMIN')) return 'ROLE_ADMIN';
    if (user.roles.includes('ROLE_TECHNICIAN')) return 'ROLE_TECHNICIAN';
    return user.roles[0];
  },
  getDefaultDashboardPath: (user: User | null): string => {
    const role = authActions.getPrimaryRole(user);
    if (role === 'ROLE_SUPER_ADMIN') return '/super-admin/dashboard';
    if (role === 'ROLE_ADMIN') return '/admin/dashboard';
    if (role === 'ROLE_TECHNICIAN') return '/technician/dashboard';
    return '/client/dashboard';
  },
};

export const useAuthStore = () => {
  const [user, setUser] = useState<User | null>(currentUser);

  useEffect(() => {
    const handleUpdate = () => setUser(currentUser);
    listeners.add(handleUpdate);
    return () => {
      listeners.delete(handleUpdate);
    };
  }, []);

  return {
    user,
    isAuthenticated: !!user,
    setAuth: (newUser: User) => authActions.setUser(newUser),
    logout: () => authActions.setUser(null),
    getPrimaryRole: () => authActions.getPrimaryRole(user),
    getDefaultDashboardPath: () => authActions.getDefaultDashboardPath(user),
  };
};
