import React, { useState } from 'react';
import { Bell, CheckCircle2 } from 'lucide-react';

export const HeaderNotifications: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'New Ticket Assigned', desc: 'CCTV Unit #102 maintenance required.', time: '10m ago' },
    { id: 2, title: 'Low Inventory Alert', desc: 'CAT6 Cable Rolls below threshold.', time: '1h ago' },
    { id: 3, title: 'Service Request Approved', desc: 'Annual security camera inspection cleared.', time: '3h ago' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 relative transition-all"
        aria-label="View notifications"
      >
        <Bell className="w-5 h-5" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
            <h4 className="font-semibold text-sm text-slate-900">Notifications</h4>
            <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              3 new
            </span>
          </div>
          <div className="space-y-2.5">
            {notifications.map((n) => (
              <div key={n.id} className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-slate-800">{n.title}</p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{n.desc}</p>
                  <span className="text-[10px] text-slate-400">{n.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
