
import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className="app auth-page">
      <header className="topbar">
        <Link to="/" className="brand-name brand-auth">
          <i>QUADLY</i>
        </Link>
        <span className="topbar-label">Your Campus, Connected.</span>
      </header>

      <section className="auth-container">
        <div className="auth-heading">
          <span className="eyebrow">WELCOME BACK</span>
          <h1>Sign In</h1>
          <p>Continue where your campus journey left off.</p>
        </div>

        <form className="auth-form">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="button" className="button-primary auth-submit">
            Sign In
          </button>
        </form>

        <p className="auth-switch">
          New to QUADLY? <Link to="/register">Create Account</Link>
        </p>
      </section>
    </main>
  )
}

export default Login
