import React from 'react';
import { ModulePlaceholderShell } from '../../components/common/ModulePlaceholderShell';

export const AdminProductsPage: React.FC = () => {
  return (
    <ModulePlaceholderShell
      pageTitle="Products"
      pageSubtitle="Inventory catalog, stock balance, serial numbers, re-order thresholds, and suppliers"
      moduleCode="ADM-PROD-05"
      breadcrumb="Administration / Warehouse"
      overviewCards={[
        { label: 'Total Catalog SKUs', value: '235 SKUs', change: 'Surveillance' },
        { label: 'Low Stock Alerts', value: '08 Items', change: 'Reorder Now' },
        { label: 'Total Stock Valuation', value: 'LKR 4.2M', change: 'Audit Passed' },
      ]}
      deliverables={[
        'Full product catalog with high-res photos, brand tags (Hikvision, Dahua, Uniview)',
        'Barcode and QR code serial tracking for every camera and NVR unit',
        'Automatic low-stock email triggers and supplier purchase orders',
      ]}
    />
  );
};
