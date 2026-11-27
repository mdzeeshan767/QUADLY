
import { useState } from 'react'
import './Cadence.css'

type EventType = 'holiday' | 'weekoff' | 'test'

type CalendarEvent = {
  type: EventType
}

const events: Record<string, CalendarEvent> = {
  '2026-12-05': { type: 'weekoff' },
  '2026-12-06': { type: 'weekoff' },
  '2026-12-12': { type: 'weekoff' },
  '2026-12-13': { type: 'weekoff' },
  '2026-12-14': { type: 'test' },
  '2026-12-15': { type: 'test' },
  '2026-12-19': { type: 'weekoff' },
  '2026-12-20': { type: 'weekoff' },
  '2026-12-25': { type: 'holiday' },
  '2026-12-26': { type: 'weekoff' },
  '2026-12-27': { type: 'weekoff' },
}

const weekdays = [
  'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
]

function Cadence() {
  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 11, 1)
  )

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const monthName = currentDate.toLocaleString('en-US', {
    month: 'long',
  })

  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()

  const calendarDays: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ]

  // Complete the final calendar row
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push(null)
  }

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const today = new Date()

  return (
    <main className="cadence-page">

      {/* Heading */}

      <header className="cadence-heading">
        <h1>
          <span>Quadly</span> Cadence
        </h1>
        <div className="cadence-heading-line" />
        
      </header>

      <section className="cadence-layout">

        {/* Calendar */}

        <div className="cadence-calendar">

          <div className="calendar-top">

            <button
              className="calendar-nav"
              onClick={previousMonth}
              aria-label="Previous month"
            >
              ‹
            </button>

            <h2>
              {monthName} {year}
            </h2>

            <button
              className="calendar-nav"
              onClick={nextMonth}
              aria-label="Next month"
            >
              ›
            </button>

          </div>

          {/* Weekdays */}

          <div className="calendar-grid">

            {weekdays.map((day) => (
              <div className="calendar-weekday" key={day}>
                {day}
              </div>
            ))}

            {/* Dates */}

            {calendarDays.map((day, index) => {
              if (day === null) {
                return (
                  <div
                    className="calendar-empty"
                    key={`empty-${index}`}
                  />
                )
              }

              const dateKey = [
                year,
                String(month + 1).padStart(2, '0'),
                String(day).padStart(2, '0'),
              ].join('-')

              const event = events[dateKey]

              const isToday =
                today.getFullYear() === year &&
                today.getMonth() === month &&
                today.getDate() === day

              const isWeekend =
                index % 7 === 0 || index % 7 === 6

              const classes = [
                'calendar-day',
                event?.type === 'holiday' ? 'is-holiday' : '',
                event?.type === 'test' ? 'is-test' : '',
                (event?.type === 'weekoff' || (!event && isWeekend))
                  ? 'is-weekoff'
                  : '',
                isToday ? 'is-today' : '',
              ].filter(Boolean).join(' ')

              return (
                <div className={classes} key={dateKey}>

                  <span className="calendar-date">
                    {day}
                  </span>

                  {event && (
                    <span
                      className={`calendar-marker marker-${event.type}`}
                    />
                  )}

                </div>
              )
            })}

          </div>

        </div>

        {/* Legend */}

        <aside className="cadence-legend">

          <h2>Legend</h2>

          <div className="legend-item">
            <span className="legend-marker marker-holiday" />
            <span>Holidays</span>
          </div>

          <div className="legend-item">
            <span className="legend-marker marker-weekoff" />
            <span>Week off days</span>
          </div>

          <div className="legend-item">
            <span className="legend-marker marker-test" />
            <span>Test days</span>
          </div>

        </aside>

      </section>

    </main>
  )
}

export default Cadence
