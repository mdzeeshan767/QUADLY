

import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Notices.css'
type Category = 'All' | 'General' | 'BCA' | 'BBA' | 'LAW'

type Notice = {
  id: number
  title: string
  description: string
  details: string
  date: string
  category: Exclude<Category, 'All'>
  important: boolean
  isNew: boolean
}

const notices: Notice[] = [
  {
    id: 1,
    title: 'Classes Suspended',
    description: 'Afternoon classes have been cancelled today.',
    details:
      'All afternoon classes are suspended due to administrative reasons. Students are requested to check with their respective departments for further updates.',
    date: '26 November 2026',
    category: 'General',
    important: true,
    isNew: true,
  },
  {
    id: 2,
    title: 'Holiday Announcement',
    description: 'The campus will remain closed tomorrow.',
    details:
      'This is to inform all students and faculty members that the campus will remain closed tomorrow. Regular academic activities will resume as scheduled.',
    date: '26 November 2026',
    category: 'General',
    important: true,
    isNew: true,
  },
  {
    id: 3,
    title: 'Updated Timetable',
    description: 'BCA students are requested to check their timetable.',
    details:
      'The BCA department has updated the class timetable. Students are requested to visit the Timetable section on QUADLY for the latest schedule.',
    date: '25 November 2026',
    category: 'BCA',
    important: false,
    isNew: true,
  },
  {
    id: 4,
    title: 'Business Seminar',
    description: 'A seminar on modern business strategies is scheduled.',
    details:
      'The BBA department is organising a seminar covering modern business strategies, entrepreneurship and management practices. Students are encouraged to participate.',
    date: '24 November 2026',
    category: 'BBA',
    important: false,
    isNew: false,
  },
  {
    id: 5,
    title: 'Moot Court Practice',
    description: 'Practice sessions will be conducted this week.',
    details:
      'The LAW department will conduct moot court practice sessions this week. Students should contact their faculty coordinator for the session schedule.',
    date: '23 November 2026',
    category: 'LAW',
    important: false,
    isNew: false,
  },
]

const categories: Category[] = [
  'All',
  'General',
  'BCA',
  'BBA',
  'LAW',
]

function Notifications() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('All')

  const [selectedNotice, setSelectedNotice] =
    useState<Notice | null>(null)

  const filteredNotices =
    activeCategory === 'All'
      ? notices
      : notices.filter(
          (notice) => notice.category === activeCategory
        )

  const newCount = notices.filter(
    (notice) => notice.isNew
  ).length

  return (
    <main className="qd-notifications-page">
      <div className="qd-notifications-wrap">

        {/* HEADER */}
        <header className="qd-notifications-header">
          <Link to="/dashboard" className="qd-notifications-logo">
            QUADLY
          </Link>

          <Link
            to="/dashboard"
            className="qd-notifications-back"
          >
            ← Dashboard
          </Link>
        </header>

        {/* TITLE */}
        <div className="qd-notifications-title">
          <span />
          <h1>NOTIFICATIONS</h1>
          <span />
        </div>

        <p className="qd-notifications-subtitle">
          Stay updated. Never miss an announcement.
        </p>

        {/* NOTICE SUMMARY */}
        <div className="qd-notification-summary">
          <div>
            <p className="qd-summary-label">TOTAL NOTICES</p>
            <h2>{notices.length}</h2>
          </div>

          <div className="qd-summary-divider" />

          <div>
            <p className="qd-summary-label">NEW NOTICES</p>
            <h2>{newCount}</h2>
          </div>

          <div className="qd-summary-icon">
            <span>♧</span>
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <section className="qd-notification-filters">
          <p className="qd-filter-heading">
            FILTER ANNOUNCEMENTS
          </p>

          <div className="qd-filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`qd-filter-button ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* NOTICE LIST */}
        <section className="qd-notice-list">

          <div className="qd-notice-list-heading">
            <h2>Latest Announcements</h2>
            <span>{filteredNotices.length} Notices</span>
          </div>

          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <article
                className="qd-notice-card"
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === 'Enter' ||
                    event.key === ' '
                  ) {
                    event.preventDefault()
                    setSelectedNotice(notice)
                  }
                }}
              >

                <div className="qd-notice-indicator">
                  <span className="qd-notice-bell">♢</span>
                </div>

                <div className="qd-notice-content">

                  <div className="qd-notice-topline">
                    <span className="qd-notice-category">
                      {notice.category}
                    </span>

                    <div className="qd-notice-labels">
                      {notice.important && (
                        <span className="qd-important-label">
                          IMPORTANT
                        </span>
                      )}

                      {notice.isNew && (
                        <span className="qd-new-label">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>

                  <h3>{notice.title}</h3>

                  <p>{notice.description}</p>

                  <div className="qd-notice-bottom">
                    <span>◷ {notice.date}</span>
                    <span className="qd-read-more">
                      View Details →
                    </span>
                  </div>

                </div>

              </article>
            ))
          ) : (
            <div className="qd-empty-notices">
              No notices available in this category.
            </div>
          )}

        </section>

        <footer className="qd-notifications-footer">
          QUADLY · YOUR CAMPUS, CONNECTED
        </footer>

      </div>

      {/* NOTICE DETAILS POPUP */}
      {selectedNotice && (
        <div
          className="qd-notice-overlay"
          onClick={() => setSelectedNotice(null)}
        >
          <section
            className="qd-notice-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="qd-notice-close"
              onClick={() => setSelectedNotice(null)}
              aria-label="Close notice"
            >
              ×
            </button>

            <span className="qd-modal-category">
              {selectedNotice.category} NOTICE
            </span>

            <h2>{selectedNotice.title}</h2>

            <div className="qd-notice-modal-divider" />

            <p className="qd-modal-date">
              ◷ {selectedNotice.date}
            </p>

            {selectedNotice.important && (
              <span className="qd-modal-important">
                IMPORTANT ANNOUNCEMENT
              </span>
            )}

            <p className="qd-modal-details">
              {selectedNotice.details}
            </p>

            <button
              className="qd-notice-done"
              onClick={() => setSelectedNotice(null)}
            >
              Understood
            </button>

          </section>
        </div>
      )}

    </main>
  )
}

export default Notifications
