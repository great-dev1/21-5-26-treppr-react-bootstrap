import { useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './Choose.scss'
import FlowImage1 from '../../assets/images/flow-1.jpg'
import FlowImage2 from '../../assets/images/flow-2.jpg'
import FlowImage3 from '../../assets/images/flow-3.jpg'
import FlowImage4 from '../../assets/images/flow-4.jpg'
import FlowImage5 from '../../assets/images/flow-5.jpg'
import FlowImage6 from '../../assets/images/flow-6.jpg'
import FlowImage7 from '../../assets/images/flow-7.jpg'
import FlowImage8 from '../../assets/images/flow-8.jpg'
import FlowImage9 from '../../assets/images/flow-9.jpg'
import FlowImage10 from '../../assets/images/flow-10.jpg'
import FlowImage11 from '../../assets/images/flow-11.jpg'
import FlowImage12 from '../../assets/images/flow-12.jpg'
import FlowImage13 from '../../assets/images/flow-13.jpg'
import FlowImage14 from '../../assets/images/flow-14.jpg'
import FlowImage15 from '../../assets/images/flow-15.jpg'
import FlowImage16 from '../../assets/images/flow-16.jpg'
import FlowImage17 from '../../assets/images/flow-17.jpg'
import FlowImage18 from '../../assets/images/flow-18.jpg'

function Choose() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className="row m-0">
      <div className="col-lg-6 order-lg-2 p-0">
        <div className={darkMode ? "choose-flow-container choose-flow-container-dark" : "choose-flow-container"}>
          <div className="choose-flow-1 d-flex flex-row flex-lg-column">
            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage1} alt="flow" />
              <p className="choose-flow-title">Food & Catering</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage2} alt="flow" />
              <p className="choose-flow-title">Art</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage3} alt="flow" />
              <p className="choose-flow-title">E-Commerce</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage4} alt="flow" />
              <p className="choose-flow-title">3D Printing</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage5} alt="flow" />
              <p className="choose-flow-title">Landscaping</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage6} alt="flow" />
              <p className="choose-flow-title">Animal Care</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage7} alt="flow" />
              <p className="choose-flow-title">Bookkeeping</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage8} alt="flow" />
              <p className="choose-flow-title">Handyman Service</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage9} alt="flow" />
              <p className="choose-flow-title">Massage Therapy</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage1} alt="flow" />
              <p className="choose-flow-title">Food & Catering</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage2} alt="flow" />
              <p className="choose-flow-title">Art</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage3} alt="flow" />
              <p className="choose-flow-title">E-Commerce</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage4} alt="flow" />
              <p className="choose-flow-title">3D Printing</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage5} alt="flow" />
              <p className="choose-flow-title">Landscaping</p>
            </div>
          </div>

          <div className="choose-flow-2 d-flex flex-row flex-lg-column">
            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage10} alt="flow" />
              <p className="choose-flow-title">PHOTOGRAPHY</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage11} alt="flow" />
              <p className="choose-flow-title">SALES & marketing</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage12} alt="flow" />
              <p className="choose-flow-title">Design & tech</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage13} alt="flow" />
              <p className="choose-flow-title">INTERIOR DESIGN</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage14} alt="flow" />
              <p className="choose-flow-title">FITNESS TRAINING</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage15} alt="flow" />
              <p className="choose-flow-title">Automobile REPAIR</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage16} alt="flow" />
              <p className="choose-flow-title">EVENT PLANNING</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage17} alt="flow" />
              <p className="choose-flow-title">HAIR STYLING</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage18} alt="flow" />
              <p className="choose-flow-title">INTERIOR DESIGN</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage10} alt="flow" />
              <p className="choose-flow-title">PHOTOGRAPHY</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage11} alt="flow" />
              <p className="choose-flow-title">SALES & marketing</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage12} alt="flow" />
              <p className="choose-flow-title">Design & tech</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage13} alt="flow" />
              <p className="choose-flow-title">INTERIOR DESIGN</p>
            </div>

            <div className="choose-flow-item mr-3 mr-lg-0 mb-lg-3">
              <img className="choose-flow-img img-fluid" src={FlowImage14} alt="flow" />
              <p className="choose-flow-title">FITNESS TRAINING</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 order-lg-1 p-0">
        <div className={darkMode ? "choose-text choose-text-dark" : "choose-text"}>
          <h4 className={darkMode ? "choose-subtitle choose-subtitle-dark" : "choose-subtitle"}>FIND ONE TO START NOW</h4>
          <h2 className="choose-title">
            CHOOSE FROM AN ARRAY OF UNIQUE BUSINESS IDEAS THAT SUITE YOUR LIFESTYLE.
          </h2>
          <p className="choose-detail">
            All we care about is to help you find the idea that matches to your interest
            and your skills to help you to be successes.
          </p>
          <button className={darkMode ? "discover-btn discover-btn-dark" : "discover-btn"}>Discover Ideas</button>
        </div>
      </div>
    </div>
  )
}

export default Choose
