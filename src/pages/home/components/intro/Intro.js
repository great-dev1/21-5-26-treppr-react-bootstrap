import { useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './Intro.scss'
import IntroImage1 from '../../assets/images/intro-1.png'
import IntroImage2 from '../../assets/images/intro-2.png'

function Intro() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className="intro-container container">
      <div className="row intro-row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img className="intro-img" src={IntroImage1} alt="intro" />
        </div>

        <div className="col-lg-6 d-lg-flex justify-content-center align-items-center">
          <div className="intro-text-1">
            <h2 className="intro-title">
              APPLY NEW IDEAS YOUR WAY
            </h2>
            <p className="intro-detail">
              We provide you with a starting point and the process you need to succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 order-lg-2 d-flex justify-content-center align-items-center">
          <img className="intro-img" src={IntroImage2} alt="intro" />
        </div>

        <div className="col-lg-6 order-lg-1 d-flex justify-content-center align-items-end">
          <div className="intro-text-2">
            <div className="d-lg-flex align-items-end d-none">
              {/* Community Icon */}
              <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3974 3.06249C19.3974 4.7545 18.027 6.12497 16.3349 6.12497C14.6429 6.12497 13.2725 4.7545 13.2725 3.06249C13.2725 1.37048 14.6429 0 16.3349 0C18.027 0 19.3974 1.37048 19.3974 3.06249Z" fill={darkMode ? "#00FFD1" : "#5278FF"} />
                <path d="M8.16672 6.12499C8.16672 7.817 6.79625 9.18747 5.10423 9.18747C3.41413 9.18747 2.04175 7.817 2.04175 6.12499C2.04175 4.43298 3.41413 3.0625 5.10423 3.0625C6.79625 3.0625 8.16672 4.43298 8.16672 6.12499Z" fill={darkMode ? "#FF8552" : "#5278FF"} />
                <path d="M30.6268 6.12499C30.6268 7.817 29.2544 9.18747 27.5643 9.18747C25.8723 9.18747 24.5018 7.817 24.5018 6.12499C24.5018 4.43298 25.8723 3.0625 27.5643 3.0625C29.2544 3.0625 30.6268 4.43298 30.6268 6.12499Z" fill="#5278FF" />
                <path d="M27.5642 11.2294C26.6455 11.2294 25.8282 11.5356 25.0128 11.9433L16.3364 17.0481L7.66004 11.9433C6.84081 11.5356 6.02354 11.2294 5.1048 11.2294C2.24713 11.2294 0 13.4745 0 16.3342V24.5015H10.2076V18.1717L15.3124 21.2341C15.5172 21.3356 15.6187 21.4389 15.8235 21.4389C16.0283 21.4389 16.1297 21.5404 16.3346 21.5404C16.5394 21.5404 16.6408 21.5404 16.8456 21.4389C17.0504 21.4389 17.1519 21.3375 17.3567 21.2341L22.4615 18.1717L22.4596 24.4995H32.6672V16.3322C32.6672 13.4745 30.4221 11.2294 27.5644 11.2294H27.5642Z" fill={darkMode ? "#9D9D9D" : "#194BA0"} />
                <path d="M16.3339 14.6979L21.2339 11.8403C20.6214 9.79797 18.6825 8.26672 16.3339 8.26672C13.9854 8.26672 12.1479 9.79797 11.434 11.8403L16.3339 14.6979Z" fill={darkMode ? "#9D9D9D" : "#194BA0"} />
              </svg>
              <h4 className={darkMode ? "intro-subtitle intro-subtitle-dark" : "intro-subtitle"}>
                COMMUNITY FIRST
              </h4>
            </div>
            <h2 className="intro-title">
              STREAMLINE YOUR BUSINESS DEVELOPMENT PROCESS
            </h2>
            <p className="intro-detail">
              Tap into an active community where  you can connect with entrepreneurs
              anytime, anywhere to help you grow your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
