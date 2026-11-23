import React from 'react';
import { ModulePlaceholderShell } from '../../components/common/ModulePlaceholderShell';

export const MyProductsPage: React.FC = () => {
  return (
    <ModulePlaceholderShell
      pageTitle="My Products"
      pageSubtitle="View and manage all registered surveillance systems, cameras, and warranties"
      moduleCode="CLI-PROD-01"
      breadcrumb="Client Portal / Inventory"
      overviewCards={[
        { label: 'Registered Hardware', value: '14 Units', change: 'Online' },
        { label: 'Active Warranties', value: '12 Active', change: 'Protected' },
        { label: 'Maintenance Due', value: '02 Due Soon', change: 'Action Needed' },
      ]}
      deliverables={[
        'Interactive list of installed CCTV and NVR equipment with serial tracking',
        'Downloadable warranty certificates and hardware specification sheets',
        '1-click maintenance request trigger linked to equipment ID',
      ]}
    />
  );
};
