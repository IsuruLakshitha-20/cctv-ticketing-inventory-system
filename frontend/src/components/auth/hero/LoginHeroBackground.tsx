import React from 'react';
import cctvHero from '../../../assets/images/cctv-hero.jpg';

export const LoginHeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={cctvHero}
        alt="Smart CCTV Surveillance Solutions"
        className="w-full h-full object-cover object-top"
      />
      {/* Soft gradient overlay for text readability while keeping camera clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent lg:from-white/90 lg:via-white/40" />
    </div>
  );
};
