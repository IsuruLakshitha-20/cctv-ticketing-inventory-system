import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 select-none">
      {/* Popover Bubble */}
      {isOpen ? (
        <div className="w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 animate-in fade-in zoom-in-95 duration-150 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0066ff] text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">SI Solutions AI</h4>
                <p className="text-[10px] text-emerald-600 font-semibold">Online Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-600 space-y-2">
            <p className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
              👋 <strong>Welcome to SI Solutions Portal!</strong>
              <br />
              Select your role (Client, Technician, Admin, Super Admin) and click Login to proceed.
            </p>
          </div>
        </div>
      ) : (
        /* Floating Prompt Card matching the screenshot */
        <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 text-left">
          <p className="text-[10px] font-bold text-slate-800 leading-tight">Need Help?</p>
          <p className="text-[9px] text-slate-500 font-medium leading-tight">Ask our AI Assistant!</p>
        </div>
      )}

      {/* Floating Action Button with Red Dot */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-13 h-13 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white flex items-center justify-center shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Toggle AI Assistant"
      >
        <Bot className="w-6 h-6 stroke-[2]" />
        {/* Red notification dot on top right */}
        <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
      </button>
    </div>
  );
};
