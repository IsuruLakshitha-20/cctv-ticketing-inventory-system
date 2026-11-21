import React from 'react';
import { Headphones, Package, Users, Shield } from 'lucide-react';

const FEATURES = [
  { icon: Headphones, title: 'Service', subtitle: 'Ticketing' },
  { icon: Package, title: 'Inventory', subtitle: 'Management' },
  { icon: Users, title: 'Technician', subtitle: 'Coordination' },
  { icon: Shield, title: 'Better', subtitle: 'Customer Support' },
];

export const LoginHeroFeatureCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mt-8 w-full max-w-lg">
      {FEATURES.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-1.5 shadow-xs">
              <Icon className="w-5 h-5 stroke-[2]" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
              {item.title}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight">
              {item.subtitle}
            </span>
          </div>
        );
      })}
    </div>
  );
};
