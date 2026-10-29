import React from 'react';
import { ModulePlaceholderShell } from '../../components/common/ModulePlaceholderShell';

export const TechnicianHistoryOfWorkPage: React.FC = () => {
  return (
    <ModulePlaceholderShell
      pageTitle="History of Work"
      pageSubtitle="Archive of past service dispatches, completed installations, and resolution logs"
      moduleCode="TECH-HIST-03"
      breadcrumb="Technician Portal / Archives"
      overviewCards={[
        { label: 'Completed Jobs Total', value: '142 Jobs', change: 'Lifetime' },
        { label: 'First-Visit Fix Rate', value: '92.4%', change: 'Excellent' },
        { label: 'Verified Sign-Offs', value: '100%', change: 'Digital Signed' },
      ]}
      deliverables={[
        'Historical searchable table filtered by client name, date range, and job category',
        'Detailed job resolution sheets with parts utilized and client signature certificates',
        'Performance metric summaries for appraisals and bonus calculations',
      ]}
    />
  );
};
