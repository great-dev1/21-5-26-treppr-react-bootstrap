import { useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './SellerHow.scss'
import HowImage1 from '../../assets/images/how-1.svg'
import HowImage1Dark from '../../assets/images/how-1-dark.svg'
import HowImage2 from '../../assets/images/how-2.svg'
import HowImage2Dark from '../../assets/images/how-2-dark.svg'
import HowImage3 from '../../assets/images/how-3.svg'
import HowImage3Dark from '../../assets/images/how-3-dark.svg'

function SellerHow() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className="seller-how container" id="howSection">
      <h2 className="how-title text-lg-center">HOW IT WORKS</h2>
      <h4 className="how-subtitle d-none d-lg-block text-center">FOR SELLERS</h4>

      <div className="row how-card-group">
        <div className="col-lg-4 how-card-wrapper">
          <div className={darkMode ? "how-card how-card-dark" : "how-card"}>
            <div className={darkMode ? "how-step-num how-step-num-dark" : "how-step-num"}>STEP 1</div>
            <img className="how-card-img" src={darkMode ? HowImage1Dark : HowImage1} alt="how" />
            <h4 className="how-card-title">
              Tell us about your business.
            </h4>
            <p className="how-card-detail">
              Follow our simple to use specs platform to effectively communicate your business or idea to aspiring entrepreneurs.
            </p>
          </div>
        </div>

        <div className="col-lg-4 how-card-wrapper">
          <div className={darkMode ? "how-card how-card-dark" : "how-card"}>
            <div className={darkMode ? "how-step-num how-step-num-dark" : "how-step-num"}>STEP 2</div>
            <img className="how-card-img" src={darkMode ? HowImage2Dark : HowImage2} alt="how" />
            <h4 className="how-card-title">
              Submit your business or idea on the Treppr platform so your business blueprint can be purchased by aspiring entrepreneurs across the world.
            </h4>
            <p className="how-card-detail">
              Once you fill out all the business information in our specs platform, your business or idea will be available for sale.
            </p>
          </div>
        </div>

        <div className="col-lg-4 how-card-wrapper">
          <div className={darkMode ? "how-card how-card-dark" : "how-card"}>
            <div className={darkMode ? "how-step-num how-step-num-dark" : "how-step-num"}>STEP 3</div>
            <img className="how-card-img" src={darkMode ? HowImage3Dark : HowImage3} alt="how" />
            <h4 className="how-card-title">
              Your business bluerprint is available for sale.
            </h4>
            <p className="how-card-detail">
              Earn commissions on the sale of your business blueprint to aspiring entrepreneurs. Track revenues and connect with other entrepreneurs in the Treppr Community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerHow
