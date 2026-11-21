import React from 'react';
import { LoginHero } from '../../components/auth/LoginHero';
import { LoginForm } from '../../components/auth/LoginForm';
import { AIAssistantWidget } from '../../components/common/AIAssistantWidget';

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#f0f5fa] relative overflow-hidden">
      {/* Left Column: Responsive CCTV Hero with real HTML text, logo, and feature cards */}
      <div className="w-full lg:w-[54%] lg:min-h-screen lg:sticky lg:top-0 shrink-0 overflow-hidden flex">
        <LoginHero />
      </div>

      {/* Right Column: Centered Form Card with decorative background */}
      <div className="w-full lg:w-[46%] flex-1 min-h-screen relative flex items-center justify-center p-6 sm:p-10 lg:p-12 overflow-hidden bg-[#edf3f9]">
        {/* Soft blue subtle curved background shapes matching the mockup */}
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#dbeafe]/70 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-[#dbeafe]/60 pointer-events-none" />

        {/* Center Card */}
        <div className="relative z-10 w-full flex justify-center">
          <LoginForm />
        </div>

        {/* Floating AI Assistant Widget */}
        <AIAssistantWidget />
      </div>
    </div>
  );
};
