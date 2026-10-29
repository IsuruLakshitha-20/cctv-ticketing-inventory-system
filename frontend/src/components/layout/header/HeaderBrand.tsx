import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderBrandProps {
  roleDisplayName: string;
  onToggleMobileSidebar: () => void;
}

export const HeaderBrand: React.FC<HeaderBrandProps> = ({
  roleDisplayName,
  onToggleMobileSidebar,
}) => {
  return (
    <div className="flex items-center gap-3 lg:gap-6 shrink-0">
      <button
        onClick={onToggleMobileSidebar}
        className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl lg:hidden transition-all active:scale-95"
        aria-label="Toggle Navigation"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="hidden sm:flex items-center gap-3 border-r border-slate-200/80 pr-6">
        <div className="flex flex-col text-left">
          <h2 className="text-base font-bold text-slate-900 tracking-tight leading-tight uppercase">
            SL Solutions
          </h2>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
            <span>Management System</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-600 font-bold">{roleDisplayName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
