
import { Link } from 'react-router-dom'
import './Passport.css'

type Student = {
  id: string
  name: string
  address: string
  fatherName: string
  rollNo: string
  validUpto: string
  image?: string
}

const student: Student = {
  id: '2409XXXX',
  name: 'Zeeshan',
  address: 'B Speed XYZ',
  fatherName: 'XYZ',
  rollNo: 'XX',
  validUpto: 'XX/XX/XXXX',
}

function Passport() {
  return (
    <main className="passport-page">

      <header className="passport-heading">
  <h1 className="passport-brand">QUADLY</h1>

  <div className="passport-heading-line" />

  <h2 className="passport-title">Passport</h2>
</header>

      <section className="passport-card">

        <div className="passport-photo">
          {student.image ? (
            <img src={student.image} alt="Student profile" />
          ) : (
            <span>Img</span>
          )}
        </div>

        <div className="passport-details">

          <div className="passport-field">
            <span>Student ID</span>
            <strong>{student.id}</strong>
          </div>

          <div className="passport-field">
            <span>Student Name</span>
            <strong>{student.name}</strong>
          </div>

          <div className="passport-field">
            <span>Student Address</span>
            <strong>{student.address}</strong>
          </div>

          <div className="passport-field">
            <span>Student Father's Name</span>
            <strong>{student.fatherName}</strong>
          </div>

          <div className="passport-field">
            <span>Roll No.</span>
            <strong>{student.rollNo}</strong>
          </div>

          <div className="passport-field last-field">
            <span>Valid Upto</span>
            <strong>{student.validUpto}</strong>
          </div>

        </div>
      </section>

      <section className="passport-actions">

        <Link to="/attendance" className="passport-action">
          Attendance
        </Link>

        <Link to="/fees" className="passport-action">
          Fee Structure
        </Link>

        <Link to="/entry-qr" className="passport-action">
          Entry QR Code
        </Link>

      </section>

    </main>
  )
}

export default Passport
