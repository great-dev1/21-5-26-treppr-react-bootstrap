import { useContext } from 'react'
import { ViewModeContext } from '../../../../App'
import './Potential.scss'
import Toggler from '../../../../components/toggler/Toggler'
import ArrowIcon from '../../assets/images/arrow.svg'
import PotentialImage from '../../assets/images/potential.svg'
import PotentialDarkImage from '../../assets/images/potential-dark.svg'

function Potential() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className={darkMode ? "potential-dark" : "potential"}>
      <div className="row text-center">
        <div className="left col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <h4 className="subtitle">FOR SELLER</h4>
          <h2 className={darkMode ? "title title-dark" : "title"}>Flexible, designed to maximize the potential of your business blueprint or idea.</h2>
          <p className={darkMode ? "detail detail-dark" : "detail"}>
            A five-step approach to structuring your business or idea as teachable content, ready to be shared with aspiring entrepreneurs.<br /><br />
            Treppr online platform is packed with powerful business tools that can amplify your business blueprint or idea.
          </p>
          <div className="d-none d-lg-flex flex-column justify-cotent-center align-items-center">
            <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
            <Toggler />
            <p className={darkMode ? "mode-text mode-text-dark" : "mode-text"}>Coming in Day and Night Modes</p>
          </div>
        </div>

        <div className="col-lg-6">
          <img className="potential-img" src={darkMode ? PotentialDarkImage : PotentialImage} alt="potential" />
          <div className="d-flex d-lg-none flex-column justify-cotent-center align-items-center">
            <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
            <Toggler />
            <p className={darkMode ? "mode-text mode-text-dark" : "mode-text"}>Coming in Day and Night Modes</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Potential
