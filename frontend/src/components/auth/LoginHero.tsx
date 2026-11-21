import React from 'react';
import slSolutionsLogo1 from '../../assets/images/sl-solutions-logo1.png';
import { LoginHeroBackground } from './hero/LoginHeroBackground';
import { LoginHeroFeatureCards } from './hero/LoginHeroFeatureCards';

const CURRENT_YEAR = new Date().getFullYear();

export const LoginHero: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[580px] lg:min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-14 overflow-hidden">
      <LoginHeroBackground />

      {/* Top: Official Logo without background wrapper */}
      <div className="relative z-10 pt-2">
        <img
          src={slSolutionsLogo1}
          alt="SL Solutions - CCTV Security Solutions"
          className="w-40 sm:w-48 h-auto object-contain drop-shadow-xs"
        />
      </div>

      {/* Middle: Titles and Feature Cards */}
      <div className="relative z-10 my-auto py-6 max-w-xl text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.18]">
          Smart Service <br />
          Ticketing &amp; Inventory <br />
          <span className="text-[#0066FF]">Management Portal</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-md">
          Reliable Support. Smarter Management. <br className="hidden sm:inline" />
          For a Safer Tomorrow.
        </p>

        <LoginHeroFeatureCards />
      </div>

      {/* Bottom Footer Note */}
      <div className="relative z-10 pt-2 text-[11px] text-slate-500 font-medium text-left">
        © {CURRENT_YEAR} SL Solutions. All rights reserved.
      </div>
    </div>
  );
};
