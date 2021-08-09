import { useState } from 'react'
import Lottie from 'react-lottie'
import './Join.scss'
import animationData from '../../assets/images/drone.json'
import DownArrow from '../../assets/images/down-arrow.svg'

function Join() {
  const [showJoinMenu, setJoinMenu] = useState(false)
  const [joinType, setJoinType] = useState("I am looking to...")

  const toggleJoinMenu = () => {
    setJoinMenu(!showJoinMenu)
  }

  const selectJoinType = (type) => {
    setJoinType(type)
    setJoinMenu(false)
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="join" id="joinSection">
      <div className="container">
        <div className="content text-center">
          <div className="drone-animation">
            <Lottie
              options={defaultOptions}
              width={167}
              height={300}
            />
          </div>
          <h2 className="title">
            Join early to access and experience the Treppr platform before the masses
          </h2>
          <div className="join-form">
            <input className="email-input" type="email" placeholder="Email Address" />
            <div className="join-dropdown">
              <button className="join-dropdown-btn" onClick={toggleJoinMenu}>
                <span>{joinType}</span>
                <img src={DownArrow} alt="down" />
              </button>
              {showJoinMenu &&
                <ul className="join-dropdown-menu">
                  <li className="join-dropdown-item" onClick={() => selectJoinType("Sell a business blueprint on Treppr")}>Sell a business blueprint on Treppr</li>
                  <li className="join-dropdown-item" onClick={() => selectJoinType("Start a new business")}>Start a new business</li>
                  <li className="join-dropdown-item" onClick={() => selectJoinType("Apply a new model in my business")}>Apply a new model in my business</li>
                </ul>
              }
            </div>
            <button className="button">GET EARLY ACCESS</button>
            <h4 className="subtitle">LIMITED SEATS AVAILABLE</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
