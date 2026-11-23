import React from 'react';

export const SidebarBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Navy base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A3875] via-[#082E60] to-[#051C3B]" />

      {/* Layered Polygonal Facets */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[60%] pointer-events-none"
        viewBox="0 0 240 420"
        preserveAspectRatio="none"
        fill="none"
      >
        <polygon points="0,210 240,110 240,420 0,420" fill="#0C3B78" opacity="0.4" />
        <polygon points="0,310 240,180 240,420 0,420" fill="#062248" opacity="0.75" />
        <polygon points="0,340 190,420 0,420" fill="#082955" opacity="0.6" />
        <polygon points="0,140 240,250 240,320 0,220" fill="#0E468E" opacity="0.22" />
      </svg>

      {/* CCTV Camera Line Art Illustration */}
      <svg
        className="absolute left-6 bottom-28 w-15 h-15 text-blue-200/25 pointer-events-none"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 22 L37 30 L32 41 L14 33 Z" />
        <path d="M37 30 L45 33.5 L43 40 L35 37" />
        <path d="M45 33.5 Q48 37 43 40" />
        <path d="M17 20 L40 30" />
        <path d="M22 37 L17 44 L9 44" />
        <line x1="9" y1="40" x2="9" y2="48" strokeWidth="2.2" />
      </svg>
    </div>
  );
};
