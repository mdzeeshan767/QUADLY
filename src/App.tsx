
import Timetable from './pages/Timetable'
import Assignments from './pages/Assignments'
import Notices from './pages/Notices'
import ScrollToTop from './components/ScrollToTop'
import Passport from './pages/Passport'
import Cadence from './pages/Cadence'
import Attendance from './pages/Attendance'
import FeeStructure from './pages/FeeStructure'
import Vault from './pages/Vault'
import Huddle from './pages/Huddle'

import {
  
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'

import './App.css'

import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'



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
    <>
      <ScrollToTop />

      
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/attendance" element={<Attendance />} />
<Route path="/fees" element={<FeeStructure />} />
<Route path="/vault" element={<Vault />} />
<Route path="/huddle" element={<Huddle />} />

  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/passport" element={<Passport />} />
  <Route path="/cadence" element={<Cadence />} />

  <Route path="/timetable" element={<Timetable />} />
  <Route path="/assignments" element={<Assignments />} />
  <Route path="/notices" element={<Notices />} />

  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>

    </>
  )
}

export default App
