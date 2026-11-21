import React from 'react';
import { LogOut } from 'lucide-react';

interface SidebarFooterProps {
  onLogout: () => void;
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({ onLogout }) => {
  return (
    <div className="pt-3 flex flex-col">
      {/* Logout Button */}
      <button
        type="button"
        onClick={onLogout}
        className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-medium text-blue-100/80 hover:text-rose-200 hover:bg-rose-500/15 transition-all text-left cursor-pointer"
      >
        <LogOut className="w-4 h-4 flex-shrink-0 stroke-[1.8]" />
        <span>Logout</span>
      </button>

      {/* Centered Footer */}
      <div className="pt-3 pb-1 border-t border-white/10 mt-2 text-center">
        <p className="text-[11px] font-semibold text-blue-200/90 tracking-wide">
          Powered by Lumina
        </p>
        <p className="text-[10px] text-blue-300/60 font-medium mt-0.5">
          v 1.0
        </p>
      </div>
    </div>
  );
};
