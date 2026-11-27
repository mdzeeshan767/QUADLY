
import { Link } from 'react-router-dom'
import './Attendance.css'

const subjects = [
  { name: 'Database Management System', attended: 18, total: 20 },
  { name: 'Java Programming', attended: 17, total: 20 },
  { name: 'Computer Networks', attended: 15, total: 20 },
  { name: 'Mathematics', attended: 16, total: 20 },
  { name: 'Software Engineering', attended: 17, total: 20 },
]

function Attendance() {
  const totalClasses = subjects.reduce((sum, s) => sum + s.total, 0)
  const attendedClasses = subjects.reduce((sum, s) => sum + s.attended, 0)
  const absentClasses = totalClasses - attendedClasses
  const percentage = Math.round((attendedClasses / totalClasses) * 100)

  return (
    <main className="attendance-page">

      <header className="attendance-heading">
        <Link to="/passport" className="attendance-brand">
          QUADLY
        </Link>

        <div className="attendance-heading-line" />

        <h2 className="attendance-title">Attendance</h2>
      </header>

      <section className="attendance-overview">

        <div className="attendance-main-card">
          <span className="attendance-label">OVERALL ATTENDANCE</span>

          <h1 className="attendance-percentage">
            {percentage}%
          </h1>

          <div className="attendance-progress">
            <div
              className="attendance-progress-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <span className="attendance-status">
            Your academic presence
          </span>
        </div>

        <div className="attendance-stat-card">
          <span className="attendance-label">PRESENT</span>
          <h2>{attendedClasses}</h2>
          <span>Classes attended</span>
        </div>

        <div className="attendance-stat-card">
          <span className="attendance-label">ABSENT</span>
          <h2>{absentClasses}</h2>
          <span>Classes missed</span>
        </div>

        <div className="attendance-stat-card">
          <span className="attendance-label">TOTAL</span>
          <h2>{totalClasses}</h2>
          <span>Total classes</span>
        </div>

      </section>

      <section className="attendance-subject-section">

        <div className="attendance-section-heading">
          <h2>Subject-wise</h2>
          <span>ATTENDANCE BREAKDOWN</span>
        </div>

        <div className="attendance-table">

          <div className="attendance-table-header">
            <span>SUBJECT</span>
            <span>CLASSES</span>
            <span>PERCENTAGE</span>
          </div>

          {subjects.map((subject) => {
            const percent = Math.round(
              (subject.attended / subject.total) * 100
            )

            return (
              <div className="attendance-row" key={subject.name}>

                <div className="attendance-subject-name">
                  {subject.name}
                </div>

                <div className="attendance-class-count">
                  {subject.attended}/{subject.total}
                </div>

                <div className="attendance-percentage-cell">
                  <div className="attendance-row-progress">
                    <div
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <strong>{percent}%</strong>
                </div>

              </div>
            )
          })}

        </div>

      </section>

      <footer className="attendance-footer">
        QUADLY · YOUR ACADEMIC JOURNEY
      </footer>

    </main>
  )
}

export default Attendance
