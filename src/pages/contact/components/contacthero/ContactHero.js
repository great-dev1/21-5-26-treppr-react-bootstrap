import { useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './ContactHero.scss'
import Toggler from '../../../../components/toggler/Toggler'
import MailImage from '../../assets/images/mail.svg'
import MailImageDark from '../../assets/images/mail-dark.svg'

function ContactHero() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className="contact-hero-container container d-flex flex-column flex-lg-row justify-content-between align-items-center">
      <div className="mb-4 mb-lg-0">
        <div className="d-flex align-items-center">
          <h2 className="contact-hero-title">CONTACT US</h2>
          <Toggler />
        </div>
        <h4 className="contact-hero-subtitle">
          Questions, bugs, reports or feedback – We’re here for it all!
        </h4>
        <p className="contact-hero-detail">
          <span>General inquiries: </span>
          <a className="contact-hero-link" href="https://www/contact@treppr.com">contact@treppr.com</a>
        </p>
      </div>

      <img className="img-fluid" src={darkMode ? MailImageDark : MailImage} alt="contact" />
    </div>
  )
}

export default ContactHero
