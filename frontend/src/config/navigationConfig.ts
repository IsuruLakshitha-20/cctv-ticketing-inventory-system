import {
  LayoutGrid,
  Package,
  ClipboardList,
  ShoppingCart,
  Users,
  Ticket,
  UserCog,
  FileBarChart,
  Wrench,
  History,
  Boxes,
  Building2,
} from 'lucide-react';
import type { NavItem } from '../types/navigation';
import type { UserRole } from '../types/auth';

export interface RoleConfig {
  title: string;
  basePath: string;
  items: NavItem[];
}

export const ROLE_NAVIGATION_MAP: Record<UserRole, RoleConfig> = {
  ROLE_CLIENT: {
    title: 'Client Portal',
    basePath: '/client',
    items: [
      { id: 'client-dashboard', title: 'Dashboard', path: '/client/dashboard', icon: LayoutGrid },
      { id: 'my-products', title: 'My Products', path: '/client/my-products', icon: Package },
      { id: 'service-requests', title: 'Service Requests', path: '/client/service-requests', icon: ClipboardList },
      { id: 'request-product', title: 'Request Product', path: '/client/request-product', icon: ShoppingCart },
    ],
  },
  ROLE_ADMIN: {
    title: 'Administration',
    basePath: '/admin',
    items: [
      { id: 'admin-dashboard', title: 'Dashboard', path: '/admin/dashboard', icon: LayoutGrid },
      { id: 'tickets', title: 'Tickets', path: '/admin/tickets', icon: Ticket },
      { id: 'product-request', title: 'Product Request', path: '/admin/product-requests', icon: ShoppingCart },
      { id: 'technicians', title: 'Technicians', path: '/admin/technicians', icon: Wrench },
      { id: 'clients', title: 'Clients', path: '/admin/clients', icon: Users },
      { id: 'products', title: 'Products', path: '/admin/products', icon: Boxes },
      { id: 'technical-reports', title: 'Technical Reports', path: '/admin/technical-reports', icon: FileBarChart },
      { id: 'admins', title: 'Admins', path: '/admin/admins', icon: UserCog },
    ],
  },
  ROLE_TECHNICIAN: {
    title: 'Technician Portal',
    basePath: '/technician',
    items: [
      { id: 'technician-dashboard', title: 'Dashboard', path: '/technician/dashboard', icon: LayoutGrid },
      { id: 'ongoing-works', title: 'Ongoing Works', path: '/technician/ongoing-works', icon: Wrench },
      { id: 'tech-request-product', title: 'Request Product', path: '/technician/request-product', icon: ShoppingCart },
      { id: 'history-of-work', title: 'History of Work', path: '/technician/history-of-work', icon: History },
    ],
  },
  ROLE_SUPER_ADMIN: {
    title: 'Super Admin Portal',
    basePath: '/super-admin',
    items: [
      { id: 'super-admin-dashboard', title: 'Dashboard', path: '/super-admin/dashboard', icon: LayoutGrid },
      { id: 'sa-tickets', title: 'Tickets', path: '/super-admin/tickets', icon: Ticket },
      { id: 'sa-product-request', title: 'Product Request', path: '/super-admin/product-requests', icon: ShoppingCart },
      { id: 'sa-technicians', title: 'Technicians', path: '/super-admin/technicians', icon: Wrench },
      { id: 'sa-clients', title: 'Clients', path: '/super-admin/clients', icon: Users },
      { id: 'sa-products', title: 'Products', path: '/super-admin/products', icon: Boxes },
      { id: 'sa-technical-reports', title: 'Technical Reports', path: '/super-admin/technical-reports', icon: FileBarChart },
      { id: 'sa-admins', title: 'Admins', path: '/super-admin/admins', icon: UserCog },
      { id: 'sa-settings', title: 'System Settings', path: '/super-admin/settings', icon: Building2 },
    ],
  },
};
