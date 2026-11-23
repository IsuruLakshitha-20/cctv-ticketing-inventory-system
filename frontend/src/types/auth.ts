export type UserRole = 'ROLE_CLIENT' | 'ROLE_ADMIN' | 'ROLE_TECHNICIAN' | 'ROLE_SUPER_ADMIN';

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  roles: UserRole[];
  token?: string;
  type?: string;
}
