import { useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './PublishHero.scss'
import Toggler from '../../../../components/toggler/Toggler'

function PublishHero() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className={darkMode ? "publish-hero publish-hero-dark" : "publish-hero"}>
      <div className="row">
        <div className="col-lg-7 d-flex flex-column align-items-center align-items-lg-start">
          <div data-aos="fade-right">
            <h4 className={darkMode ? "publish-hero-subtitle publish-hero-subtitle-dark" : "publish-hero-subtitle"}>
              HAVE A VIABLE BUSINESS IDEA?
            </h4>
          </div>
          <h2 className="publish-hero-title" data-aos="fade-left" data-aos-delay="500">
            EARN WHILE HELPING OTHERS START THEIR OWN BUSINESSES
          </h2>
          <a className="publish-hero-btn-wrapper" href="/set-up-idea">
            <button className={darkMode ? "publish-hero-btn blue-btn blue-btn-dark" : "publish-hero-btn blue-btn"}>Sell Your Idea</button>
          </a>
          <Toggler />
        </div>
      </div>
    </div>
  )
}

export default PublishHero