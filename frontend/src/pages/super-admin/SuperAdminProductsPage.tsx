import React from 'react';
import { ModulePlaceholderShell } from '../../components/common/ModulePlaceholderShell';

export const SuperAdminProductsPage: React.FC = () => {
  return (
    <ModulePlaceholderShell
      pageTitle="Products"
      pageSubtitle="Master hardware catalog, authorized equipment models, global warehouse inventory, and pricing"
      moduleCode="SA-PROD-05"
      breadcrumb="Super Admin / Master Catalog"
      overviewCards={[
        { label: 'Authorized Hardware', value: '450 Models', change: 'Surveillance / IoT' },
        { label: 'Total Warehouses', value: '03 Hubs', change: 'Colombo, Kandy, Galle' },
        { label: 'Asset Capital Value', value: 'LKR 18.5M', change: 'Insured' },
      ]}
      deliverables={[
        'Global brand authorization and new hardware line onboarding',
        'Enterprise price book management and customer tier discount rules',
        'RMA and manufacturer warranty claim lifecycle tracking',
      ]}
    />
  );
};
