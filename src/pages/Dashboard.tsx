import { useEffect, useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './Dashboard.css'
 
// TYPES
type NavItem = {
  label: string
  href: string
}
 
type IconName = 'clock' | 'file' | 'bell'
 
type QuickCard = {
  title: string
  href: string
  icon: IconName
}
 
type SpotIconName =
  | 'it'
  | 'business'
  | 'law'
  | 'canteen'
  | 'library'
  | 'playground'
  | 'staff'
  | 'hostel'
  | 'gate'
  | 'guard'
 
type CampusSpotData = {
  id: string
  name: string
  subtitle: string
  icon: SpotIconName
  info: string
  kind?: 'building' | 'open' | 'gate'
}
 
// NAVIGATION
const NAV_ITEMS: NavItem[] = [
  { label: 'Passport', href: '/passport' },
  { label: 'Cadence', href: '/cadence' },
  { label: 'Vault', href: '/vault' },
  { label: 'Huddle', href: '/huddle' },
]
 
// QUICK ACCESS
const QUICK_CARDS: QuickCard[] = [
  { title: 'Timetable', href: '/timetable', icon: 'clock' },
  { title: 'Assignments', href: '/assignments', icon: 'file' },
  { title: 'Notices', href: '/notices', icon: 'bell' },
]
 
// CAMPUS DATA
const HOSTEL_SPOT: CampusSpotData = {
  id: 'hostel',
  name: 'Hostel',
  subtitle: 'Student Residence',
  icon: 'hostel',
  info: 'Student accommodation',
}
 
const UPPER_SPOTS: CampusSpotData[] = [
  {
    id: 'campus-one',
    name: 'Campus One',
    subtitle: 'IT Department',
    icon: 'it',
    info: 'Information Technology Department',
  },
  {
    id: 'campus-two',
    name: 'Campus Two',
    subtitle: 'BBA + MBA',
    icon: 'business',
    info: 'Management and Business Studies',
  },
  {
    id: 'campus-three',
    name: 'Campus Three',
    subtitle: 'Law Department',
    icon: 'law',
    info: 'School of Law',
  },
]
 
const LOWER_SPOTS: CampusSpotData[] = [
  {
    id: 'canteen',
    name: 'Canteen',
    subtitle: 'Food & Refreshments',
    icon: 'canteen',
    info: 'Campus food and refreshment area',
  },
  {
    id: 'library',
    name: 'Library',
    subtitle: 'Reading & Resources',
    icon: 'library',
    info: 'Books, study and learning resources',
  },
  {
    id: 'playground',
    name: 'Playground',
    subtitle: 'Sports & Activities',
    icon: 'playground',
    info: 'Outdoor sports and recreational area',
    kind: 'open',
  },
  {
    id: 'staff',
    name: 'Staff Building',
    subtitle: 'Teachers & Staff',
    icon: 'staff',
    info: 'Faculty and administration offices',
  },
]
 
const GATE_SPOTS: CampusSpotData[] = [
  {
    id: 'entrance',
    name: 'Main Entrance',
    subtitle: 'Entry & Exit',
    icon: 'gate',
    info: 'Main campus entrance',
    kind: 'gate',
  },
  {
    id: 'guard',
    name: 'Guard Room',
    subtitle: 'Campus Security',
    icon: 'guard',
    info: 'Security and visitor assistance',
  },
]
 
const ALL_SPOTS: CampusSpotData[] = [
  HOSTEL_SPOT,
  ...UPPER_SPOTS,
  ...LOWER_SPOTS,
  ...GATE_SPOTS,
]
 
// CARD ICON
function CardIcon({ name }: { name: IconName }) {
  const common = {
    width: 76,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 0.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }
 
  switch (name) {
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      )
 
    case 'file':
      return (
        <svg {...common}>
          <path d="M6 3h9l4 4v14H6z" />
          <path d="M14 3v5h5M9 13h7M9 17h5" />
        </svg>
      )
 
    case 'bell':
      return (
        <svg {...common}>
          <path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z" />
          <path d="M10 21a2 2 0 0 0 4 0" />
        </svg>
      )
  }
}
 
// AI ASSISTANT ICON
function AIIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </svg>
  )
}
 
// CAMPUS LOCATION ICONS (one matching line-icon set)
function SpotIcon({ name }: { name: SpotIconName }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }
 
  switch (name) {
    case 'it':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      )
 
    case 'business':
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
        </svg>
      )
 
    case 'law':
      return (
        <svg {...common}>
          <path d="M12 3v18M5 21h14M6 7h12" />
          <path d="M6 7l-3 7a3 3 0 0 0 6 0L6 7zM18 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
        </svg>
      )
 
    case 'canteen':
      return (
        <svg {...common}>
          <path d="M5 8h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V8z" />
          <path d="M16 10h2a2 2 0 0 1 0 4h-2M8 3v2M12 3v2" />
        </svg>
      )
 
    case 'library':
      return (
        <svg {...common}>
          <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" />
          <path d="M5 17a3 3 0 0 1 3-3h11" />
        </svg>
      )
 
    case 'playground':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      )
 
    case 'staff':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.5 3-5 6-5s6 1.5 6 5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M16 15c3 0 5 1.2 5 4" />
        </svg>
      )
 
    case 'hostel':
      return (
        <svg {...common}>
          <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9z" />
        </svg>
      )
 
    case 'gate':
      return (
        <svg {...common}>
          <path d="M4 21V9a8 8 0 0 1 16 0v12M4 21h16M12 13v8" />
        </svg>
      )
 
    case 'guard':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
  }
}
 
// QUICK ACCESS CARD
function QuickAccessCard({ card }: { card: QuickCard }) {
  return (
    <Link to={card.href} className="qd-card">
      <span className="qd-card-icon">
        <CardIcon name={card.icon} />
      </span>
 
      <span className="qd-card-title">
        {card.title}
      </span>
 
      <span className="qd-card-open">
        Open
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  )
}
 
// ONE BUILDING ON THE MAP
function CampusSpot({
  spot,
  selected,
  onSelect,
}: {
  spot: CampusSpotData
  selected: boolean
  onSelect: (id: string) => void
}) {
  const kind = spot.kind ?? 'building'
 
  return (
    <button
      type="button"
      className={`qd-bld qd-bld--${kind}${selected ? ' is-selected' : ''}`}
      onClick={() => onSelect(spot.id)}
      aria-pressed={selected}
      aria-label={`${spot.name}: ${spot.subtitle}`}
    >
      <span className="qd-bld-icon">
        <SpotIcon name={spot.icon} />
      </span>
 
      <span className="qd-bld-name">
        {spot.name}
      </span>
 
      <span className="qd-bld-sub">
        {spot.subtitle}
      </span>
    </button>
  )
}
 
// INTERACTIVE CAMPUS MAP
function CampusLocations({
  selectedId,
  onSelect,
}: {
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <div className="qd-campus-layout">
 
      {/* HOSTEL - LEFT */}
      <div className="qd-campus-side qd-campus-left">
        <CampusSpot
          spot={HOSTEL_SPOT}
          selected={selectedId === HOSTEL_SPOT.id}
          onSelect={onSelect}
        />
      </div>
 
      {/* ONE CENTRAL CAMPUS ROAD */}
      <div className="qd-campus-roads">
 
        {/* UPPER SIDE OF ROAD */}
        <div className="qd-campus-road qd-campus-upper">
          <div className="qd-road-spots">
            {UPPER_SPOTS.map((spot) => (
              <CampusSpot
                key={spot.id}
                spot={spot}
                selected={selectedId === spot.id}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
 
        {/* LOWER SIDE OF ROAD */}
        <div className="qd-campus-road qd-campus-lower">
          <div className="qd-road-spots">
            {LOWER_SPOTS.map((spot) => (
              <CampusSpot
                key={spot.id}
                spot={spot}
                selected={selectedId === spot.id}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
 
      </div>
 
      {/* ENTRANCE AND GUARD ROOM - RIGHT */}
      <div className="qd-campus-side qd-campus-right">
        {GATE_SPOTS.map((spot) => (
          <CampusSpot
            key={spot.id}
            spot={spot}
            selected={selectedId === spot.id}
            onSelect={onSelect}
          />
        ))}
      </div>
 
    </div>
  )
}
 
// MAIN DASHBOARD
export default function Dashboard() {
  const [name, setName] = useState('Student')
  const [selectedId, setSelectedId] = useState<string | null>(null)
 
  const selectedSpot = ALL_SPOTS.find((spot) => spot.id === selectedId) ?? null
 
  // TAP A BUILDING TO SELECT, TAP AGAIN TO CLEAR
  const handleSelect = (id: string) => {
    setSelectedId((current) => (current === id ? null : id))
  }
 
  // CURSOR-FOLLOWING MAP LIGHT
  const handleMapMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
 
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
 
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }
 
  // LOAD LOGGED-IN STUDENT
  useEffect(() => {
    let mounted = true
 
    const updateStudentName = (user: {
      user_metadata?: { full_name?: string }
      email?: string
    } | null) => {
      if (!mounted) return
 
      const fullName = user?.user_metadata?.full_name?.trim()
      const fallbackName = user?.email?.split('@')[0]
 
      setName(fullName || fallbackName || 'Student')
    }
 
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser()
 
      if (!error) {
        updateStudentName(data.user)
      }
    }
 
    loadUser()
 
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      updateStudentName(session?.user ?? null)
    })
 
    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])
 
  return (
    <main className="qd-page">
      <div className="qd-wrap">
 
        {/* HEADER */}
        <header className="qd-header">
          <Link
            to="/"
            className="qd-logo"
            aria-label="QUADLY Home"
          >
            QUADLY
          </Link>
 
          <nav className="qd-nav" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                className="qd-pill"
                to={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
 
        {/* WELCOME */}
        <section className="qd-hello">
          <span className="qd-eyebrow">
            Your campus your world.
          </span>
 
          <h1 className="qd-title">
            Hey {name}!
          </h1>
        </section>
 
        {/* CAMPUS MAP */}
        <section
          aria-label="Campus map"
          className="qd-map-section"
        >
          <div
            className="qd-map"
            onMouseMove={handleMapMouseMove}
          >
            <CampusLocations
              selectedId={selectedId}
              onSelect={handleSelect}
            />
 
            <span className="qd-map-chip">
              CampusWorld
            </span>
          </div>
 
          {/* SELECTED BUILDING + AI ASSISTANT */}
          <div className="qd-ai-row">
            <div
              className={`qd-spot-detail${selectedSpot ? ' is-open' : ''}`}
              aria-live="polite"
            >
              {selectedSpot ? (
                <>
                  <span className="qd-detail-icon">
                    <SpotIcon name={selectedSpot.icon} />
                  </span>
 
                  <span className="qd-detail-text">
                    <strong>{selectedSpot.name}</strong>
                    <span>{selectedSpot.subtitle}</span>
                    <small>{selectedSpot.info}</small>
                  </span>
                </>
              ) : (
                <span className="qd-detail-hint">
                  Tap a building to see what is inside.
                </span>
              )}
            </div>
 
            <button
              type="button"
              className="qd-ai"
              aria-label="Open AI Assistant"
            >
              <AIIcon />
              AI Assistant
            </button>
          </div>
        </section>
 
        {/* QUICK ACCESS */}
        <section
          aria-label="Quick access"
          className="qd-cards"
        >
          {QUICK_CARDS.map((card) => (
            <QuickAccessCard
              key={card.title}
              card={card}
            />
          ))}
        </section>
 
      </div>
    </main>
  )
}
 
