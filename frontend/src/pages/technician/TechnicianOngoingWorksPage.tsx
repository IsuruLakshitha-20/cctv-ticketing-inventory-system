import React from 'react';
import { ModulePlaceholderShell } from '../../components/common/ModulePlaceholderShell';

export const TechnicianOngoingWorksPage: React.FC = () => {
  return (
    <ModulePlaceholderShell
      pageTitle="Ongoing Works"
      pageSubtitle="Currently active site repairs, CCTV camera calibrations, and ongoing service visits"
      moduleCode="TECH-ONGO-01"
      breadcrumb="Technician Portal / Field Jobs"
      overviewCards={[
        { label: 'Active Jobs In Hand', value: '03 Sites', change: 'On Schedule' },
        { label: 'Next Appointment', value: '02:30 PM', change: 'Havelock City' },
        { label: 'Parts Utilized', value: '04 Units', change: 'Logged' },
      ]}
      deliverables={[
        'Interactive step-by-step job progress checklist with status toggles',
        'Client site map directions and on-site contact click-to-call',
        'Before & After photo evidence upload and technical notes editor',
      ]}
    />
  );
};
