import './Dashboard.css'
 
type NavItem = { label: string; href: string }
type IconName = 'clock' | 'file' | 'bell'
type QuickCard = { title: string; href: string; icon: IconName }
 
// Change the links to your real routes. If you use react-router,
// swap each <a href> below for <Link to>.
const NAV_ITEMS: NavItem[] = [
  { label: 'Passport', href: '/passport' },
  { label: 'Cadence', href: '/cadence' },
  { label: 'Vault', href: '/vault' },
  { label: 'Huddle', href: '/huddle' },
]
 
// The three cards that replaced Attendance, Fee Structure and Marksheet.
// Rename them or change the icons here.
const QUICK_CARDS: QuickCard[] = [
  { title: 'Timetable', href: '/timetable', icon: 'clock' },
  { title: 'Assignments', href: '/assignments', icon: 'file' },
  { title: 'Notices', href: '/notices', icon: 'bell' },
]
 
function CardIcon({ name }: { name: IconName }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (name === 'clock') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    )
  }
  if (name === 'file') {
    return (
      <svg {...common}>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h7M9 17h5" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </svg>
  )
}
 
function MapArt() {
  return (
    <svg
      className="qd-map-art"
      aria-hidden="true"
      viewBox="0 0 1200 340"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="qd-glow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity=".16" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="340" fill="url(#qd-glow)" />
      <g stroke="#d4af37" strokeOpacity=".22" strokeWidth="1" fill="none">
        <path d="M0 60 H1200 M0 130 H1200 M0 200 H1200 M0 270 H1200" />
        <path d="M120 0 V340 M280 0 V340 M440 0 V340 M600 0 V340 M760 0 V340 M920 0 V340 M1080 0 V340" />
      </g>
      <g stroke="#d4af37" strokeOpacity=".55" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M0 300 C200 240 320 220 440 160 S700 90 820 110 S1050 60 1200 20" />
        <path d="M280 0 C300 90 340 160 440 160" />
        <path d="M760 340 C780 260 800 180 820 110" />
      </g>
      <path
        d="M0 220 C180 190 260 260 420 250 S720 200 900 250 S1100 300 1200 270"
        stroke="#f6e3a1"
        strokeOpacity=".28"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />
      <g transform="translate(600 130)">
        <circle r="34" fill="#d4af37" fillOpacity=".14" />
        <circle r="18" fill="#d4af37" fillOpacity=".28" />
        <path
          d="M0 -14 C-9 -14 -15 -8 -15 0 C-15 9 0 24 0 24 C0 24 15 9 15 0 C15 -8 9 -14 0 -14Z"
          fill="#d4af37"
          transform="translate(0 -12)"
        />
        <circle cx="0" cy="-14" r="5" fill="#0a0a0a" />
      </g>
    </svg>
  )
}
 
type DashboardProps = {
  // Pass the logged-in user's first name from your auth state.
  name?: string
}
 
export default function Dashboard({ name = 'Zeeshan' }: DashboardProps) {
  return (
    <div className="qd-page">
      <div className="qd-wrap">
        <header className="qd-header">
          <a className="qd-logo" href="/" aria-label="Quadly home">
            Quadly
          </a>
          <nav className="qd-nav" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} className="qd-pill" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>
 
        <section className="qd-hello">
          <span className="qd-eyebrow">Welcome back</span>
          <h1 className="qd-title">Hey {name}!</h1>
        </section>
 
        <section aria-label="Map" className="qd-map-section">
          <div className="qd-map">
            <MapArt />
            <span className="qd-map-chip">Map</span>
          </div>
          <div className="qd-ai-row">
            <button type="button" className="qd-ai">
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
              AI Assistant
            </button>
          </div>
        </section>
 
        <section aria-label="Quick access" className="qd-cards">
          {QUICK_CARDS.map((card) => (
            <a key={card.title} className="qd-card" href={card.href}>
              <span className="qd-card-icon">
                <CardIcon name={card.icon} />
              </span>
              <span className="qd-card-title">{card.title}</span>
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
            </a>
          ))}
        </section>
      </div>
    </div>
  )
}
