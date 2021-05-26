import { useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './How.scss'
import StepImage1 from '../../assets/images/step-1.svg'
import StepImage1Dark from '../../assets/images/step-1-dark.svg'
import StepImage2 from '../../assets/images/step-2.svg'
import StepImage2Dark from '../../assets/images/step-2-dark.svg'
import StepImage3 from '../../assets/images/step-3.svg'
import StepImage3Dark from '../../assets/images/step-3-dark.svg'

function How() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className={darkMode ? "how-section how-section-dark" : "how-section"} id="howSection">
      <div className="container">
        <div className="text-center">
          <h2 className="how-title">HOW IT WORKS</h2>
          <h4 className="how-subtitle d-none d-lg-block">FOR ASPIRING ENTREPRENEURS</h4>
        </div>

        <div className="how-step-group">
          <div className="how-step-item row">
            <div className="col-lg-4">
              <img className="how-step-img img-fluid" src={darkMode ? StepImage1Dark : StepImage1} alt="how" />
            </div>
            <div className="col-lg-2">
              <p className={darkMode ? "how-step-label how-step-label-dark" : "how-step-label"}>STEP 1</p>
              <div className={darkMode ? "dotted-line dotted-line-dark" : "dotted-line"}></div>
            </div>
            <div className="col-lg-6">
              <div className="how-step-text">
                <h4 className="how-step-title">
                  Find and purchase the right <br />
                  business blueprint
                </h4>
                <p className="how-step-detail">
                  Find the business blueprint that matches your skills, your interest, and your startup budget.
                </p>
              </div>
            </div>
          </div>

          <div className="how-step-item row">
            <div className="col-lg-4">
              <img className="how-step-img img-fluid" src={darkMode ? StepImage2Dark : StepImage2} alt="how" />
            </div>
            <div className="col-lg-2">
              <p className={darkMode ? "how-step-label how-step-label-dark" : "how-step-label"}>STEP 2</p>
              <div className={darkMode ? "dotted-line dotted-line-dark" : "dotted-line"}></div>
            </div>
            <div className="col-lg-6">
              <div className="how-step-text">
                <h4 className="how-step-title">
                  Learn and execute the model
                </h4>
                <p className="how-step-detail">
                  Learn about the opportunity and how to execute the business for yourself from an experienced entrepreneur.
                  Building a business strategy to start your own business step by step.
                </p>
              </div>
            </div>
          </div>

          <div className="how-step-item row">
            <div className="col-lg-4">
              <img className="how-step-img img-fluid" src={darkMode ? StepImage3Dark : StepImage3} alt="how" />
            </div>
            <div className="col-lg-2">
              <p className={darkMode ? "how-step-label how-step-label-dark" : "how-step-label"}>STEP 3</p>
            </div>
            <div className="col-lg-6">
              <div className="how-step-text">
                <h4 className="how-step-title">
                  Join an active community of <br />
                  reputable entrepreneurs
                </h4>
                <p className="how-step-detail">
                  Join the Treppr Community to learn and share with other aspiring and experienced entrepreneurs.
                  Build your network through the Treppr Community as you execute your own business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How
