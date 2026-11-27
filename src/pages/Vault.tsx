import { Link } from 'react-router-dom'
import {
  BookOpen,
  FileText,
  Newspaper,
  ArrowUpRight,
} from 'lucide-react'
import './Vault.css'

const courses = [
  {
    id: 'bca',
    name: 'BCA',
    subtitle: 'Bachelor of Computer Applications',
  },
  {
    id: 'bba',
    name: 'BBA',
    subtitle: 'Bachelor of Business Administration',
  },
  {
    id: 'llb',
    name: 'LLB',
    subtitle: 'Bachelor of Laws',
  },
]
const sections = [
  {
    id: 'notes',
    title: 'Notes',
    description: 'Study materials and chapter notes',
    icon: BookOpen,
  },
  {
    id: 'pyq',
    title: 'PYQ',
    description: 'Previous year question papers',
    icon: FileText,
  },
  {
    id: 'class-news',
    title: 'Class News',
    description: 'Updates and classroom announcements',
    icon: Newspaper,
  },
]

const years = [
  { label: '1st Year', value: '1' },
  { label: '2nd Year', value: '2' },
  { label: '3rd Year', value: '3' },
]

function Vault() {
  return (
    <main className="vault-page">

      <header className="vault-heading">
        <h1 className="vault-brand">QUADLY</h1>
        <div className="vault-heading-line" />
        <h2 className="vault-title">Vault</h2>
      </header>

      <section className="vault-intro">
        <p className="vault-eyebrow">YOUR ACADEMIC LIBRARY</p>
        <h2>Knowledge, All in One Place.</h2>
        <p>
          Explore notes, previous year papers and classroom updates
          organised by your course and academic year.
        </p>
      </section>

      <section className="vault-courses">

        {courses.map((course) => (
          <article className="vault-course-card" key={course.id}>

            <div className="vault-course-header">
              <div>
                <span className="vault-course-label">COURSE</span>
                <h2>{course.name}</h2>
                <p>{course.subtitle}</p>
              </div>

              <div className="vault-course-symbol">
                <BookOpen size={30} strokeWidth={1.4} />
              </div>
            </div>

            <div className="vault-sections">

              {sections.map((section) => {
                const Icon = section.icon

                return (
                  <div className="vault-section" key={section.id}>

                    <div className="vault-section-heading">
                      <Icon size={21} strokeWidth={1.6} />
                      <h3>{section.title}</h3>
                    </div>

                    <p className="vault-section-description">
                      {section.description}
                    </p>

                    <div className="vault-year-links">
                      {years.map((year) => (
                        <Link
                          key={year.value}
                          to={`/vault/${course.id}/${section.id}/${year.value}`}
                          className="vault-year-link"
                        >
                          <span>{year.label}</span>
                          <ArrowUpRight size={16} />
                        </Link>
                      ))}
                    </div>

                  </div>
                )
              })}

            </div>
          </article>
        ))}

      </section>
    </main>
  )
}

export default Vault