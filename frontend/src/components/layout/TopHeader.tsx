import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { Badge } from '../common/Badge';
import { HeaderBrand } from './header/HeaderBrand';
import { HeaderSearch } from './header/HeaderSearch';
import { HeaderNotifications } from './header/HeaderNotifications';
import { HeaderProfileMenu } from './header/HeaderProfileMenu';

interface TopHeaderProps {
  onToggleMobileSidebar: () => void;
}

const ROLE_NAME_MAP: Record<string, string> = {
  ROLE_SUPER_ADMIN: 'Super Admin',
  ROLE_ADMIN: 'Administrator',
  ROLE_TECHNICIAN: 'Technician',
  ROLE_CLIENT: 'Client',
};

export const TopHeader: React.FC<TopHeaderProps> = ({ onToggleMobileSidebar }) => {
  const { getPrimaryRole } = useAuthStore();
  const primaryRole = getPrimaryRole() || 'ROLE_CLIENT';
  const roleDisplayName = ROLE_NAME_MAP[primaryRole] || 'User';

  return (
    <header className="h-20 bg-white/90 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      <div className="flex items-center gap-3 lg:gap-6 flex-1 min-w-0">
        <HeaderBrand
          roleDisplayName={roleDisplayName}
          onToggleMobileSidebar={onToggleMobileSidebar}
        />
        <HeaderSearch />
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden sm:block">
          <Badge variant="blue" size="md">
            {roleDisplayName}
          </Badge>
        </div>
        <HeaderNotifications />
        <HeaderProfileMenu roleDisplayName={roleDisplayName} />
      </div>
    </header>
  );
};
