import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, LogOut, User as UserIcon } from 'lucide-react';
import { useAuthStore } from '../../../store/authStore';

interface HeaderProfileMenuProps {
  roleDisplayName: string;
}

export const HeaderProfileMenu: React.FC<HeaderProfileMenuProps> = ({ roleDisplayName }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-1.5 pl-3 rounded-2xl hover:bg-slate-100 transition-all cursor-pointer"
        aria-label="User Profile Menu"
      >
        <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
          {user?.fullName?.charAt(0) || user?.username?.charAt(0)?.toUpperCase() || 'U'}
        </div>
        <div className="hidden md:flex flex-col text-left">
          <span className="text-xs font-bold text-slate-800 leading-tight">
            {user?.fullName || user?.username || 'Current User'}
          </span>
          <span className="text-[10px] text-slate-500 font-medium">{roleDisplayName}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-4 py-2 border-b border-slate-100 mb-1 text-left">
            <p className="text-xs font-bold text-slate-900">{user?.fullName || user?.username}</p>
            <p className="text-[10px] text-slate-500 truncate">{user?.email || 'user@lumina.com'}</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition-colors cursor-pointer text-left"
          >
            <UserIcon className="w-4 h-4 text-slate-400" />
            <span>Profile Details</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 transition-colors cursor-pointer text-left font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};
