import { useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './Best.scss'

function Best() {
  const { darkMode } = useContext(ViewModeContext)

  return (
    <div className={darkMode ? "best-container best-container-dark" : "best-container"}>
      <h2 className="best-title">TREPPR IS THE PERFECT PLACE TO GET YOUR BUSINESS IDEA SOLD BECAUSE IT CAN HELP OTHERS</h2>
      <button className={darkMode ? "best-btn blue-btn blue-btn-dark" : "best-btn blue-btn"}>Sell Your Business Idea</button>
    </div>
  )
}

export default Best
