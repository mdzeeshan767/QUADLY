
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    navigate('/dashboard')
  }

  return (
    <main className="app auth-page">
      <header className="topbar">
        <Link to="/" className="brand-name brand-auth">
          <i>QUADLY</i>
        </Link>

        <span className="topbar-label">
          Your Campus, Connected.
        </span>
      </header>

      <section className="auth-container">
        <div className="auth-heading">
          <span className="eyebrow">WELCOME BACK</span>
          <h1>Sign In</h1>
          <p>Continue where your campus journey left off.</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button
            type="submit"
            className="button-primary auth-submit"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
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
