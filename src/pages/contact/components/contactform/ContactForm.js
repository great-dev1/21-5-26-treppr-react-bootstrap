import { useState, useContext } from 'react'
import * as emailjs from 'emailjs-com'

import { ViewModeContext } from '../../../../App'
import './ContactForm.scss'
import WomanImage from '../../assets/images/woman.png'
import WomanImageDark from '../../assets/images/woman-dark.png'

function ContactForm() {
  const { darkMode } = useContext(ViewModeContext)

  const [topic, setTopic] = useState("")
  const [otherTopic, setOtherTopic] = useState("")

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [showModal, setModal] = useState(false)
  const [showOverlay, setOverlay] = useState(false)

  const overlayOn = () => {
    setModal(true)
    setOverlay(true)
  }

  const overlayOff = () => {
    setModal(false)
    setOverlay(false)
  }

  const SERVICE_ID = "service_ttiq5mr"
  const TEMPLATE_ID = "template_fezg9os"
  const USER_ID = "user_WKriTHLVMI9X0aimmEV2L"

  const handleSubmit = (e) => {
    e.preventDefault()
    overlayOn()
    emailjs.send(SERVICE_ID, TEMPLATE_ID, { firstName, lastName, email, message, topic, otherTopic }, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      }, (err) => {
        console.log('FAILED...', err)
      })
  }

  return (
    <div className={darkMode ? "contact-form-container contact-form-container-dark" : "contact-form-container"}>
      <form className={darkMode ? "contact-form contact-form-dark" : "contact-form"}>
        <label>Select a Topic:</label>
        <div>
          <div
            className={topic === "selling" ? "contact-topic-btn-active" : (darkMode ? "contact-topic-btn-dark" : "contact-topic-btn")}
            onClick={() => { setTopic("selling"); setOtherTopic("") }}
          >
            Selling on Treppr
          </div>
          <div
            className={topic === "buying" ? "contact-topic-btn-active" : (darkMode ? "contact-topic-btn-dark" : "contact-topic-btn")}
            onClick={() => { setTopic("buying"); setOtherTopic("") }}
          >
            Buying on Treppr
          </div>
          <div
            className={topic === "community" ? "contact-topic-btn-active" : (darkMode ? "contact-topic-btn-dark" : "contact-topic-btn")}
            onClick={() => { setTopic("community"); setOtherTopic("") }}
          >
            Treppr Community
          </div>
          <div
            className={topic === "media" ? "contact-topic-btn-active" : (darkMode ? "contact-topic-btn-dark" : "contact-topic-btn")}
            onClick={() => { setTopic("media"); setOtherTopic("") }}
          >
            Affiliation / Media
          </div>
          <div
            className={topic === "other" ? "contact-topic-btn-active" : (darkMode ? "contact-topic-btn-dark" : "contact-topic-btn")}
            onClick={() => { setTopic("other"); setOtherTopic("") }}
          >
            Other
          </div>
        </div>

        {topic === "other" &&
          <div className="form-group">
            <label className="contact-form-label" htmlFor="otherTopic">Topic<span className="red-label">*</span></label>
            <input
              className={darkMode ? "contact-input contact-input-dark" : "contact-input"}
              type="text"
              id="otherTopic"
              value={otherTopic}
              onChange={(e) => setOtherTopic(e.target.value)}
              required
            />
          </div>
        }

        <div className="contact-input-group">
          <div className="d-flex flex-column flex-md-row">
            <div className="form-group flex-grow-1 mr-md-1">
              <label className="contact-form-label" htmlFor="firstName">First Name<span className="red-label">*</span></label>
              <input
                className={darkMode ? "contact-input contact-input-dark" : "contact-input"}
                type="text"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group flex-grow-1 ml-md-1">
              <label className="contact-form-label" htmlFor="lastName">Last Name<span className="red-label">*</span></label>
              <input
                className={darkMode ? "contact-input contact-input-dark" : "contact-input"}
                type="text"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="contact-form-label" htmlFor="email">Email<span className="red-label">*</span></label>
            <input
              className={darkMode ? "contact-input contact-input-dark" : "contact-input"}
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="contact-form-label" htmlFor="message">Tell us what you need help with<span className="red-label">*</span></label>
            <textarea
              className={darkMode ? "contact-input contact-input-dark" : "contact-input"}
              rows="5"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <div className="text-center">
            <button className={darkMode ? "contact-btn contact-btn-dark" : "contact-btn"} type="submit" onClick={handleSubmit}>Get Help</button>
            <a className={darkMode ? "contact-privacy-link contact-privacy-link-dark" : "contact-privacy-link"} href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </form>

      {showModal &&
        <div className={darkMode ? "contact-modal contact-modal-dark" : "contact-modal"}>
          <div className={darkMode ? "contact-modal-up contact-modal-up-dark" : "contact-modal-up"}>
            <img className="contact-woman-img" src={darkMode ? WomanImageDark : WomanImage} alt="woman" />
          </div>
          <div className="contact-modal-down">
            <h2 className="contact-modal-title">name, your message has been submitted successfully!</h2>
            <p className="section-detail">
              We will review your request and get back to you shortly.
            </p>
            <a className={darkMode ? "contact-modal-btn contact-modal-btn-dark" : "contact-modal-btn"} href="/">Back To Home Page</a>
          </div>
        </div>
      }

      {showOverlay &&
        <div className="modalOverlay" onClick={overlayOff}></div>
      }
    </div>
  )
}

export default ContactForm
