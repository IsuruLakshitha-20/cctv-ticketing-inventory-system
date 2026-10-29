import React from 'react';
import { Lock, User, ChevronDown } from 'lucide-react';
import type { UserRole } from '../../../types/auth';

export interface RoleOption {
  value: UserRole;
  label: string;
  defaultUsername: string;
}

interface LoginFormInputsProps {
  password: string;
  onPasswordChange: (value: string) => void;
  selectedRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  roleOptions: RoleOption[];
}

export const LoginFormInputs: React.FC<LoginFormInputsProps> = ({
  password,
  onPasswordChange,
  selectedRole,
  onRoleChange,
  roleOptions,
}) => {
  return (
    <>
      {/* Password Field */}
      <div>
        <label className="block text-xs font-semibold text-[#334155] mb-2">
          Password
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-3.5 text-[#94a3b8] pointer-events-none flex items-center">
            <Lock className="w-4 h-4 stroke-[1.8]" />
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e2e8f0] text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] transition-all bg-white"
            required
          />
        </div>
      </div>

      {/* Role Selection Field */}
      <div>
        <label className="block text-xs font-semibold text-[#334155] mb-2">
          Role
        </label>
        <div className="relative flex items-center">
          <div className="absolute left-3.5 text-[#94a3b8] pointer-events-none flex items-center">
            <User className="w-4 h-4 stroke-[1.8]" />
          </div>
          <select
            value={selectedRole}
            onChange={(e) => onRoleChange(e.target.value as UserRole)}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#e2e8f0] text-sm text-[#1e293b] focus:outline-none focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] transition-all bg-white appearance-none cursor-pointer"
          >
            {roleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 text-[#94a3b8] pointer-events-none flex items-center">
            <ChevronDown className="w-4 h-4 stroke-[1.8]" />
          </div>
        </div>
        <span className="block text-[11px] text-[#94a3b8] mt-2 font-normal">
          Client - Technician - Admin
        </span>
      </div>
    </>
  );
};
