
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Timetable.css'

type Department = 'BBA' | 'BCA' | 'LAW'

const departments: Department[] = ['BBA', 'BCA', 'LAW']

const schedule = [
  {
    time: '09:00 – 10:00',
    BBA: 'Business Law',
    BCA: 'Data Structures',
    LAW: 'Constitutional Law',
  },
  {
    time: '10:00 – 11:00',
    BBA: 'Marketing Management',
    BCA: 'DBMS',
    LAW: 'Criminal Law',
  },
  {
    time: '11:30 – 12:30',
    BBA: 'Financial Accounting',
    BCA: 'Operating Systems',
    LAW: 'Jurisprudence',
  },
  {
    time: '02:00 – 03:00',
    BBA: 'Business Analytics',
    BCA: 'Computer Networks',
    LAW: 'International Law',
  },
]

export default function Timetable() {
  const [department, setDepartment] = useState<'ALL' | Department>('ALL')

  return (
    <main className="qd-timetable-page">

      <div className="qd-timetable-wrap">

        {/* HEADER */}
        <header className="qd-timetable-header">

          <Link to="/dashboard" className="qd-timetable-logo">
            QUADLY
          </Link>

          <Link to="/dashboard" className="qd-back-link">
            ← Dashboard
          </Link>

        </header>

        {/* CENTERED TITLE */}
        <section className="qd-timetable-heading">

          <span className="qd-timetable-subtitle">
            YOUR CAMPUS. YOUR SCHEDULE.
          </span>

          <div className="qd-heading-line">
            <span />
            <h1>TIMETABLE</h1>
            <span />
          </div>

          <p>
            Your class schedule across all departments
          </p>

        </section>

        {/* DEPARTMENT SELECTORS */}
        <section className="qd-timetable-controls">

          <div className="qd-department-tabs">

            {departments.map((item) => (
              <button
                key={item}
                type="button"
                className={`qd-dept-tab ${
                  department === item ? 'active' : ''
                }`}
                onClick={() => setDepartment(item)}
              >
                {item}
              </button>
            ))}

          </div>

          <select
            className="qd-department-select"
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value as 'ALL' | Department)
            }
            aria-label="Select department"
          >
            <option value="ALL">All Departments</option>
            <option value="BBA">BBA</option>
            <option value="BCA">BCA</option>
            <option value="LAW">LAW</option>
          </select>

        </section>

        {/* TIMETABLE CONTENT */}
        <section className="qd-schedule-section">

          <div className="qd-schedule-table-wrap">

            <table className="qd-schedule-table">

              <thead>
                <tr>
                  <th>Time</th>

                  {departments
                    .filter((item) =>
                      department === 'ALL' || department === item
                    )
                    .map((item) => (
                      <th
                        key={item}
                        className={
                          department === item ? 'qd-column-active' : ''
                        }
                      >
                        {item}
                      </th>
                    ))}
                </tr>
              </thead>

              <tbody>
                {schedule.map((row, index) => (
                  <tr key={index}>

                    <td className="qd-time-cell">
                      {row.time}
                    </td>

                    {departments
                      .filter((item) =>
                        department === 'ALL' || department === item
                      )
                      .map((item) => (
                        <td
                          key={item}
                          className={
                            department === item ? 'qd-column-active' : ''
                          }
                        >
                          {row[item]}
                        </td>
                      ))}

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          {/* DECORATIVE GRADUATION CAP */}
          <div className="qd-schedule-art" aria-hidden="true">

            <svg viewBox="0 0 220 190" fill="none">

              <defs>
                <linearGradient
                  id="qd-gold-gradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#fff1b0" />
                  <stop offset="45%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#805900" />
                </linearGradient>

                <filter id="qd-gold-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Graduation cap */}
              <g
                stroke="url(#qd-gold-gradient)"
                strokeWidth="3"
                strokeLinejoin="round"
                filter="url(#qd-gold-glow)"
              >
                <path d="M15 53 L110 13 L205 53 L110 92 Z"
                  fill="#b58b27" />

                <path d="M51 70 L53 105 Q110 140 167 105 L169 70"
                  fill="#6f5015" />

                <path d="M205 53 L205 110"
                  stroke="#f6e3a1" />

                <circle cx="205" cy="112" r="4"
                  fill="#f6e3a1" />

                {/* Books */}
                <path d="M42 133 Q110 118 178 133 L178 150 Q110 136 42 150 Z"
                  fill="#6c4a12" />

                <path d="M36 152 Q110 139 184 152 L184 170 Q110 155 36 170 Z"
                  fill="#9c7019" />

                <path d="M29 173 Q110 159 191 173 L184 183 Q110 169 36 183 Z"
                  fill="#51390e" />
              </g>

            </svg>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="qd-timetable-footer">
          <span>QUADLY</span>
          <span>Where campus life comes together.</span>
        </footer>

      </div>

    </main>
  )
}
