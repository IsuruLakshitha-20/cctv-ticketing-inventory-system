import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Headphones,
  Package,
  Users,
  ShieldCheck,
  LockKeyhole,
  Eye,
  EyeOff,
  Bot,
  MessageCircle,
  User as UserIcon,
  ChevronDown,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import type { UserRole, User } from '../../types/auth';

const features = [
  { icon: Headphones, label: <>Service<br />Ticketing</> },
  { icon: Package, label: <>Inventory<br />Management</> },
  { icon: Users, label: <>Technician<br />Coordination</> },
  { icon: ShieldCheck, label: <>Better<br />Customer<br />Support</> },
];

interface RoleItem {
  value: UserRole;
  label: string;
  defaultPassword: string;
  dashboardPath: string;
}

const ROLES: RoleItem[] = [
  {
    value: 'ROLE_CLIENT',
    label: 'Client',
    defaultPassword: 'client123',
    dashboardPath: '/client/dashboard',
  },
  {
    value: 'ROLE_TECHNICIAN',
    label: 'Technician',
    defaultPassword: 'tech123',
    dashboardPath: '/technician/dashboard',
  },
  {
    value: 'ROLE_ADMIN',
    label: 'Admin',
    defaultPassword: 'admin123',
    dashboardPath: '/admin/dashboard',
  },
  {
    value: 'ROLE_SUPER_ADMIN',
    label: 'Super Admin',
    defaultPassword: 'superadmin123',
    dashboardPath: '/super-admin/dashboard',
  },
];

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  const [password, setPassword] = useState('client123');
  const [selectedRole, setSelectedRole] = useState<UserRole>('ROLE_CLIENT');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const handleRoleChange = (newRole: UserRole) => {
    setSelectedRole(newRole);
    const target = ROLES.find((r) => r.value === newRole);
    if (target) {
      setPassword(target.defaultPassword);
    }
    setError('');
  };

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    if (!selectedRole) {
      setError('Please select your role.');
      return;
    }

    setLoading(true);

    const activeConfig = ROLES.find((r) => r.value === selectedRole) || ROLES[0];
    const username = activeConfig.label.toLowerCase().replace(/\s+/g, '');

    const authenticatedUser: User = {
      id: `usr_${Date.now()}`,
      username,
      email: `${username}@lumina.com`,
      fullName: `${activeConfig.label} User`,
      roles: [selectedRole],
      token: `demo-jwt-${selectedRole}-${Date.now()}`,
      type: 'Bearer',
    };

    setAuth(authenticatedUser);

    setTimeout(() => {
      setLoading(false);
      navigate(activeConfig.dashboardPath, { replace: true });
    }, 200);
  }

  return (
    <main className="login-page">
      <section className="hero-panel">
        <div className="hero-overlay" />

        <header className="brand">
          <img
            src="/Glossy Blue CCTV Solutions Logo.png"
            alt="SI Solutions CCTV Security Solutions"
            className="brand-logo"
          />
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <h1>
              Smart Service
              <br />
              Ticketing &amp; Inventory
              <br />
              <span>Management Portal</span>
            </h1>

            <p>
              Reliable Support. Smarter Management.
              <br />
              For a Safer Tomorrow.
            </p>
          </div>

          <div className="feature-list">
            {features.map(({ icon: Icon, label }, index) => (
              <div className="feature" key={index}>
                <div className="feature-icon">
                  <Icon size={19} strokeWidth={1.7} />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="login-panel">
        <div className="decoration decoration-top" />
        <div className="decoration decoration-bottom" />

        <div className="login-card">
          <div className="login-heading">
            <h2>Welcome Back</h2>
            <p>Login to access your account</p>
          </div>

          <form onSubmit={handleLogin}>
            {/* Password Field */}
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <LockKeyhole size={17} aria-hidden="true" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((visible) => !visible)}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Role Dropdown Field */}
            <div className="form-field">
              <label htmlFor="role">Role</label>
              <div className="input-wrapper">
                <UserIcon size={17} aria-hidden="true" />
                <select
                  id="role"
                  name="role"
                  value={selectedRole}
                  onChange={(e) => handleRoleChange(e.target.value as UserRole)}
                  required
                >
                  {ROLES.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={17} className="text-slate-400 pointer-events-none shrink-0" />
              </div>
              <span className="block text-[11px] text-[#94a3b8] mt-2 font-normal">
                Client · Technician · Admin · Super Admin
              </span>
            </div>

            {error && (
              <p className="form-message" role="status">
                {error}
              </p>
            )}

            <div className="pt-3">
              <button
                className="login-button cursor-pointer"
                type="submit"
                disabled={loading}
              >
                <span>{loading ? 'Signing in...' : 'Login'}</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </form>
        </div>

        {/* AI Assistant Help Widget */}
        <div className="help-widget">
          {helpOpen && (
            <div className="help-popover">
              <strong>Need Help?</strong>
              <p>Ask your support team for assistance with your account.</p>
              <button
                type="button"
                onClick={() => setHelpOpen(false)}
              >
                Close
              </button>
            </div>
          )}

          <button
            type="button"
            className="help-label"
            onClick={() => setHelpOpen((open) => !open)}
          >
            <strong>Need Help?</strong>
            <span>Ask our AI Assistant!</span>
          </button>

          <button
            type="button"
            className="assistant-button"
            aria-label="Open help assistant"
            onClick={() => setHelpOpen((open) => !open)}
          >
            <span className="notification-dot" />
            {helpOpen ? (
              <MessageCircle size={23} />
            ) : (
              <Bot size={25} />
            )}
          </button>
        </div>
      </section>
    </main>
  );
};
