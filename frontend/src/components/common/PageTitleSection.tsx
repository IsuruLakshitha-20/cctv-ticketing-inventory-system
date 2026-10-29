import React, { type ReactNode } from 'react';

export interface PageTitleSectionProps {
  pageTitle: string;
  pageSubtitle?: string;
  headerActions?: ReactNode;
}

export const PageTitleSection: React.FC<PageTitleSectionProps> = ({
  pageTitle,
  pageSubtitle,
  headerActions,
}) => {
  return (
    <div className="mb-6 relative z-10 w-full">
      <div className="bg-white rounded-md p-4 md:p-5 shadow-xs border border-slate-200 relative flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden">
        {/* Background decorative rotated squares (exact SmartPetCare styling) */}
        <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none select-none">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-50/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none opacity-60">
            <div className="w-24 h-24 bg-blue-100/50 rotate-45 translate-x-12 rounded-lg" />
            <div className="w-36 h-36 bg-blue-200/50 rotate-45 translate-x-6 -ml-8 rounded-xl" />
            <div className="w-48 h-48 bg-blue-300/40 rotate-45 -ml-12 rounded-2xl" />
            <div className="w-32 h-32 bg-blue-400/30 rotate-45 -ml-16 rounded-lg" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="relative z-10 w-full flex-1">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight capitalize">
              {pageTitle}
            </h1>
            {pageSubtitle && (
              <p className="text-slate-500 text-sm font-medium capitalize">
                {pageSubtitle}
              </p>
            )}
          </div>
        </div>

        {/* Optional Action Buttons */}
        {headerActions && (
          <div className="relative z-10 hidden md:block shrink-0">
            {headerActions}
          </div>
        )}
      </div>
    </div>
  );
};
