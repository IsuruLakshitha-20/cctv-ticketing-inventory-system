import React, { type ReactNode } from 'react';
import { PageTitleSection } from './PageTitleSection';

export interface ModulePlaceholderShellProps {
  pageTitle: string;
  pageSubtitle?: string;
  headerActions?: ReactNode;
  moduleCode?: string;
  breadcrumb?: string;
  overviewCards?: Array<{ label: string; value: string; change?: string }>;
  deliverables?: string[];
}

export const ModulePlaceholderShell: React.FC<ModulePlaceholderShellProps> = ({
  pageTitle,
  pageSubtitle,
  headerActions,
}) => {
  return (
    <div className="w-full">
      {/* Simple SmartPetCare Title Section */}
      <PageTitleSection
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
        headerActions={headerActions}
      />

      {/* Clean, Simple Coming Soon Body featuring SL Solutions */}
      <div className="bg-white rounded-md p-12 md:p-16 border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center min-h-[360px]">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-3 border border-blue-100 uppercase tracking-wider">
          SL Solutions • Under Development
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Coming Soon
        </h2>
        <p className="text-slate-500 text-sm mt-2 max-w-md font-medium">
          SL Solutions is actively developing this operational module. Full features will be available in the upcoming release.
        </p>
      </div>
    </div>
  );
};
