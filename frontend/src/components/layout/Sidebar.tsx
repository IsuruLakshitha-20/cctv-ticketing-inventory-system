import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { ROLE_NAVIGATION_MAP } from '../../config/navigationConfig';
import { SidebarBackground } from './sidebar/SidebarBackground';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { SidebarNavList } from './sidebar/SidebarNavList';
import { SidebarFooter } from './sidebar/SidebarFooter';

interface SidebarProps {
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onCloseMobile }) => {
  const navigate = useNavigate();
  const { logout, getPrimaryRole } = useAuthStore();

  const primaryRole = getPrimaryRole() || 'ROLE_CLIENT';
  const roleConfig = ROLE_NAVIGATION_MAP[primaryRole] || ROLE_NAVIGATION_MAP.ROLE_CLIENT;

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <aside className="w-60 h-screen sticky top-0 flex flex-col justify-between text-white p-5 shadow-2xl z-30 overflow-hidden relative">
      <SidebarBackground />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <SidebarHeader />
          <SidebarNavList items={roleConfig.items} onCloseMobile={onCloseMobile} />
        </div>

        <SidebarFooter onLogout={handleLogout} />
      </div>
    </aside>
  );
};
