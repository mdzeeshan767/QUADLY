
import { Link } from 'react-router-dom'
import './FeeStructure.css'

const feeItems = [
  { name: 'Tuition Fee', amount: 45000 },
  { name: 'Development Fee', amount: 10000 },
  { name: 'Library Fee', amount: 5000 },
  { name: 'Examination Fee', amount: 15000 },
]

const totalFee = feeItems.reduce((sum, item) => sum + item.amount, 0)
const paidAmount = 60000
const dueAmount = totalFee - paidAmount

function FeeStructure() {
  return (
    <main className="fee-page">

      <header className="fee-heading">
        <Link to="/passport" className="fee-brand">
          QUADLY
        </Link>

        <div className="fee-heading-line" />

        <h2 className="fee-title">Fee Structure</h2>
      </header>

      <section className="fee-summary">

        <div className="fee-total-card">
          <span className="fee-label">TOTAL SEMESTER FEE</span>
          <h1>₹{totalFee.toLocaleString('en-IN')}</h1>
          <span className="fee-caption">Academic fee overview</span>
        </div>

        <div className="fee-stat-card">
          <span className="fee-label">AMOUNT PAID</span>
          <h2>₹{paidAmount.toLocaleString('en-IN')}</h2>
          <span>Payment received</span>
        </div>

        <div className="fee-stat-card">
          <span className="fee-label">OUTSTANDING</span>
          <h2>₹{dueAmount.toLocaleString('en-IN')}</h2>
          <span>Remaining amount</span>
        </div>

      </section>

      <section className="fee-breakdown">

        <div className="fee-section-heading">
          <h2>Fee Breakdown</h2>
          <span>SEMESTER-WISE DETAILS</span>
        </div>

        {feeItems.map((item) => (
          <div className="fee-item" key={item.name}>
            <span>{item.name}</span>
            <strong>
              ₹{item.amount.toLocaleString('en-IN')}
            </strong>
          </div>
        ))}

        <div className="fee-item fee-grand-total">
          <span>Total Fee</span>
          <strong>₹{totalFee.toLocaleString('en-IN')}</strong>
        </div>

      </section>

      <section className="fee-payment-card">

        <div>
          <span className="fee-label">PAYMENT STATUS</span>
          <h2>Partial Payment</h2>
          <p>
            ₹{paidAmount.toLocaleString('en-IN')} paid out of
            ₹{totalFee.toLocaleString('en-IN')}
          </p>
        </div>

        <div className="fee-payment-progress">
          <div
            style={{
              width: `${(paidAmount / totalFee) * 100}%`
            }}
          />
        </div>

        <div className="fee-payment-bottom">
          <div>
            <span className="fee-label">REMAINING BALANCE</span>
            <h3>₹{dueAmount.toLocaleString('en-IN')}</h3>
          </div>

          <button
            className="fee-pay-button"
            type="button"
            onClick={() => alert('Payment gateway integration coming soon.')}
          >
            Pay Now
          </button>
        </div>

      </section>

      <footer className="fee-footer">
        QUADLY · YOUR ACADEMIC JOURNEY
      </footer>

    </main>
  )
}

export default FeeStructure
