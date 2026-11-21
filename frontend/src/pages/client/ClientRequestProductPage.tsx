import React from 'react';
import { ModulePlaceholderShell } from '../../components/common/ModulePlaceholderShell';

export const ClientRequestProductPage: React.FC = () => {
  return (
    <ModulePlaceholderShell
      pageTitle="Request Product"
      pageSubtitle="Browse hardware catalog and request new CCTV cameras, sensors, or accessories"
      moduleCode="CLI-REQ-03"
      breadcrumb="Client Portal / Requisitions"
      overviewCards={[
        { label: 'Available Catalog', value: '48 Items', change: 'In Stock' },
        { label: 'Pending Quotes', value: '01 Quote', change: 'Under Review' },
        { label: 'Estimated Delivery', value: '2-3 Days', change: 'Standard' },
      ]}
      deliverables={[
        'Hardware procurement cart with product specifications and pricing',
        'Official quotation generator and admin approval requisition workflow',
        'Direct tracking from warehouse dispatch to technician installation',
      ]}
    />
  );
};
