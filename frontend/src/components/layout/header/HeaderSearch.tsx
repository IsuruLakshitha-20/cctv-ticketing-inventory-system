import React from 'react';
import { Search } from 'lucide-react';

export const HeaderSearch: React.FC = () => {
  return (
    <div className="relative max-w-md w-full hidden md:block">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        placeholder="Search tickets, products, serial numbers, requests..."
        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all outline-none"
      />
    </div>
  );
};
