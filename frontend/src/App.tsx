
import { useState } from "react";
import {
  ArrowRight,
  Headphones,
  Package,
  Users,
  ShieldCheck,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Bot,
  MessageCircle,
} from "lucide-react";

const features = [
  { icon: Headphones, label: <>Service<br />Ticketing</> },
  { icon: Package, label: <>Inventory<br />Management</> },
  { icon: Users, label: <>Technician<br />Coordination</> },
  { icon: ShieldCheck, label: <>Better<br />Customer<br />Support</> },
];

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // UI demonstration only. Connect the Spring Boot API later.
    setError("Login UI is ready. Backend authentication is not connected yet.");
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
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <Mail size={17} aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <LockKeyhole size={17} aria-hidden="true" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((visible) => !visible)}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <div className="forgot-row">
              <button
                type="button"
                className="text-link"
                onClick={() =>
                  setError("Password recovery will be connected to the backend later.")
                }
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <p className="form-message" role="status">
                {error}
              </p>
            )}

            <button
              className="login-button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
              <ArrowRight size={17} />
            </button>
          </form>
        </div>

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
}

export default App;
