import { useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './Subscribe.scss'
import SubscribeImage from '../../assets/images/subscribe.svg'
import SubscribeImageDark from '../../assets/images/subscribe-dark.svg'

function Subscribe() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className={darkMode ? "subscribe-section subscribe-section-dark" : "subscribe-section"}>
      <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <img className="img-fluid" src={darkMode ? SubscribeImageDark : SubscribeImage} alt="subscribe" />
        <div className="subscribe-form">
          <h2 className={darkMode ? "subscribe-title subscribe-title-dark" : "subscribe-title"}>SUBSCRIBE TO BE THE FIRST TO KNOW!</h2>
          <div id="609710479dd07cb71ed04935">
            <div id="609710479dd07cb71ed04935-form" className="609710479dd07cb71ed04935-template">
              <div id="selected-_9c47g1l2n" className="ap3w-embeddable-form ap3w-embeddable-form--full ap3w-embeddable-form--solid " data-select="true">
                <form id="ap3w-embeddable-form-609710479dd07cb71ed04935" className="ap3w-embeddable-form-content d-flex flex-column flex-lg-row flex-wrap">
                  <div id="selected-_kmooaumrx" className="ap3w-form-input ap3w-form-input-609710479dd07cb71ed04935" data-select="true" data-field-id="str::first" data-merge-strategy="override">
                    <input className={darkMode ? "subscribe-name-input subscribe-name-input-dark" : "subscribe-name-input"} type="text" id="ap3w-form-input-text-609710479dd07cb71ed04935" step="1" name="First name" placeholder="First Name" />
                  </div>
                  <div id="selected-_mx9btalfx" className="ap3w-form-input ap3w-form-input-609710479dd07cb71ed04935" data-select="true" data-field-id="str::email" data-merge-strategy="override">
                    <input className={darkMode ? "subscribe-email-input subscribe-email-input-dark" : "subscribe-email-input"} type="email" id="ap3w-form-input-email-609710479dd07cb71ed04935" step="1" name="email" placeholder="Email Address" required />
                  </div>
                  <div id="selected-_bg8ry80ku" className=" ap3w-form-button ap3w-form-button-609710479dd07cb71ed04935 ">
                    <button className={darkMode ? "subscribe-btn blue-btn subscribe-btn-dark" : "subscribe-btn blue-btn"} id="ap3w-form-button-609710479dd07cb71ed04935" type="submit" data-select="true">Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
