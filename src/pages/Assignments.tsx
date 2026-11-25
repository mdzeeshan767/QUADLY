
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Assignments.css'

type Department = 'BCA' | 'BBA' | 'LAW'
type Year = '1st Year' | '2nd Year' | '3rd Year'

type Assignment = {
  subject: string
  task: string
  deadline: string
}

const departments: Department[] = ['BCA', 'BBA', 'LAW']

const assignmentData: Record<
  Department,
  Record<Year, Assignment[]>
> = {
  BCA: {
    '1st Year': [
      {
        subject: 'Programming in C',
        task: 'Write programs using loops, arrays and functions.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Mathematics',
        task: 'Complete the assigned mathematics worksheet.',
        deadline: '18 December 2026',
      },
      {
        subject: 'Computer Fundamentals',
        task: 'Prepare a report on computer hardware and software.',
        deadline: '22 December 2026',
      },
    ],
    '2nd Year': [
      {
        subject: 'Database Management System',
        task: 'Design a database and write SQL queries.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Data Structures',
        task: 'Implement stacks, queues and linked lists.',
        deadline: '20 December 2026',
      },
    ],
    '3rd Year': [
      {
        subject: 'Web Development',
        task: 'Create a responsive website using modern web technologies.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Software Engineering',
        task: 'Prepare a software project documentation report.',
        deadline: '20 December 2026',
      },
    ],
  },

  BBA: {
    '1st Year': [
      {
        subject: 'Business Economics',
        task: 'Prepare an assignment on demand and supply.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Business Communication',
        task: 'Prepare a professional business communication report.',
        deadline: '20 December 2026',
      },
    ],
    '2nd Year': [
      {
        subject: 'Marketing Management',
        task: 'Create a marketing strategy for a chosen product.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Financial Management',
        task: 'Solve the assigned financial analysis problems.',
        deadline: '20 December 2026',
      },
    ],
    '3rd Year': [
      {
        subject: 'Human Resource Management',
        task: 'Prepare a case study on employee management.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Business Strategy',
        task: 'Analyse the business strategy of a company.',
        deadline: '20 December 2026',
      },
    ],
  },

  LAW: {
    '1st Year': [
      {
        subject: 'Legal Methods',
        task: 'Prepare a report on sources of law.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Law of Contract',
        task: 'Analyse the essential elements of a valid contract.',
        deadline: '20 December 2026',
      },
    ],
    '2nd Year': [
      {
        subject: 'Constitutional Law',
        task: 'Prepare a case analysis on fundamental rights.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Criminal Law',
        task: 'Complete the assigned criminal law case study.',
        deadline: '20 December 2026',
      },
    ],
    '3rd Year': [
      {
        subject: 'Property Law',
        task: 'Prepare a report on transfer of property.',
        deadline: '15 December 2026',
      },
      {
        subject: 'Administrative Law',
        task: 'Analyse the principles of administrative law.',
        deadline: '20 December 2026',
      },
    ],
  },
}

const years: Year[] = ['1st Year', '2nd Year', '3rd Year']

function Assignments() {
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department>('BCA')

  const [selectedYear, setSelectedYear] =
    useState<Year | null>(null)

  const [showSubmission, setShowSubmission] =
    useState(false)

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null)

  const openYear = (department: Department, year: Year) => {
    setSelectedDepartment(department)
    setSelectedYear(year)
    setShowSubmission(false)
  }

  const closeModal = () => {
    setSelectedYear(null)
    setShowSubmission(false)
    setSelectedFile(null)
  }

  return (
    <main className="qd-assignments-page">
      <div className="qd-assignments-wrap">

        {/* HEADER */}
        <header className="qd-assignments-header">
          <Link to="/dashboard" className="qd-assignments-logo">
            QUADLY
          </Link>

          <Link to="/dashboard" className="qd-assignments-back">
            ← Dashboard
          </Link>
        </header>

        {/* PAGE TITLE */}
        <div className="qd-assignments-title">
          <span />
          <h1>ASSIGNMENTS</h1>
          <span />
        </div>

        <p className="qd-assignments-subtitle">
          Your academic work, all in one place.
        </p>

        {/* DEPARTMENT SECTIONS */}
        <section className="qd-department-list">

          {departments.map((department) => (
            <article
              className="qd-department-card"
              key={department}
            >
              <div className="qd-department-left">

                <h2>{department}</h2>

                <div className="qd-year-buttons">
                  {years.map((year) => (
                    <button
                      key={year}
                      className="qd-year-button"
                      onClick={() => openYear(department, year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>

              </div>

              <div className="qd-department-actions">

                <div className="qd-deadline">
                  <span className="qd-deadline-icon">◷</span>
                  <span>Deadline</span>
                </div>

                <button
                  className="qd-submission-button"
                  onClick={() => {
                    setSelectedDepartment(department)
                    setSelectedYear(null)
                    setShowSubmission(true)
                  }}
                >
                  Submission
                </button>

              </div>
            </article>
          ))}

        </section>

        <footer className="qd-assignments-footer">
          QUADLY · YOUR CAMPUS, CONNECTED
        </footer>

      </div>

      {/* YEAR ASSIGNMENTS MODAL */}
      {selectedYear && (
        <div
          className="qd-assignment-overlay"
          onClick={closeModal}
        >
          <section
            className="qd-assignment-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="qd-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <p className="qd-modal-label">
              {selectedDepartment} DEPARTMENT
            </p>

            <h2>{selectedYear} Assignments</h2>

            <div className="qd-modal-divider" />

            <div className="qd-assignment-items">

              {assignmentData[selectedDepartment][selectedYear].map(
                (assignment, index) => (
                  <article
                    className="qd-assignment-item"
                    key={index}
                  >

                    <h3>{assignment.subject}</h3>

                    <p className="qd-task-heading">TASK</p>

                    <p className="qd-task-description">
                      {assignment.task}
                    </p>

                    <div className="qd-assignment-deadline">
                      <span>◷</span>
                      Deadline: {assignment.deadline}
                    </div>

                  </article>
                )
              )}

            </div>

          </section>
        </div>
      )}

      {/* SUBMISSION MODAL */}
      {showSubmission && (
        <div
          className="qd-assignment-overlay"
          onClick={closeModal}
        >
          <section
            className="qd-assignment-modal qd-upload-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="qd-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <p className="qd-modal-label">
              {selectedDepartment} DEPARTMENT
            </p>

            <h2>Assignment Submission</h2>

            <div className="qd-modal-divider" />

            <p className="qd-upload-description">
              Select your assignment file to prepare it for submission.
            </p>

            <label className="qd-file-picker">
              <span className="qd-upload-icon">↑</span>
              <span>
                {selectedFile
                  ? selectedFile.name
                  : 'Choose your assignment file'}
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
                onChange={(event) =>
                  setSelectedFile(event.target.files?.[0] ?? null)
                }
              />
            </label>

            <button
              className="qd-submit-file-button"
              disabled={!selectedFile}
              onClick={() =>
                alert(
                  'File selected successfully. Connect the submission backend to upload it.'
                )
              }
            >
              Submit Assignment
            </button>

            <p className="qd-upload-note">
              Accepted formats: PDF, DOC, DOCX, PPT, PPTX and ZIP
            </p>

          </section>
        </div>
      )}

    </main>
  )
}

export default Assignments
