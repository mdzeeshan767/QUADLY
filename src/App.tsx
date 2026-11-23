
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'

function Home() {
  return (
    <main className="app">
      <header className="topbar">
        <span className="brand-name brand-home">
          <b><i>QUADLY</i></b>
        </span>

        <span className="topbar-label">
          Your Campus, Connected.
        </span>
      </header>

      <section className="hero">
        <span className="eyebrow">
          EVERYTHING IS CAMPUS SIMPLIFIED
        </span>

        <h1>
          Shaping who we are.
          <br />
          <span>Inspiring who we become.</span>
        </h1>

        <p className="hero-description">
          <i>
            "Where belonging and becoming go hand in hand."
          </i>
        </p>

        <div className="hero-actions">
          <Link to="/register" className="button-primary">
            Get Started
          </Link>

          <Link to="/login" className="button-secondary">
            Sign In
          </Link>
        </div>
      </section>

      <footer className="footer">
        QUADLY · A smarter way to experience campus
      </footer>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
