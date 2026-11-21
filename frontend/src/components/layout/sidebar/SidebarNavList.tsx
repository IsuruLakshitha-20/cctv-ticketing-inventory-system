import React from 'react';
import { NavLink } from 'react-router-dom';
import type { NavItem } from '../../../types/navigation';

interface SidebarNavListProps {
  items: NavItem[];
  onCloseMobile?: () => void;
}

export const SidebarNavList: React.FC<SidebarNavListProps> = ({ items, onCloseMobile }) => {
  return (
    <nav className="space-y-1 max-h-[calc(100vh-250px)] overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-blue-400/20 [&::-webkit-scrollbar-thumb]:rounded-full">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.id}
            to={item.path}
            onClick={onCloseMobile}
            className={({ isActive }) =>
              `flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-150 group ${
                isActive
                  ? 'bg-[#0066FF] text-white font-bold shadow-md shadow-blue-600/30'
                  : 'text-blue-100/80 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Icon className="w-4 h-4 flex-shrink-0 stroke-[1.8]" />
            <span className="truncate">{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};
