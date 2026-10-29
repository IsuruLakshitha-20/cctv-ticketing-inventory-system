import React from 'react';
import slSolutionsLogo from '../../../assets/images/sl-solutions-logo.png';

export const SidebarHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-2 pb-5 mb-2 border-b border-white/10">
      <img
        src={slSolutionsLogo}
        alt="SL Solutions - CCTV Security Solutions"
        className="w-32 h-auto object-contain mx-auto"
      />
    </div>
  );
};
