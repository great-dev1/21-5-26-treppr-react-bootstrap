import { useContext } from 'react'

import { ViewModeContext } from '../../App'
import './Toggler.scss'


function Toggler() {
  const { darkMode, toggleDarkMode } = useContext(ViewModeContext)

  const handleChange = () => setTimeout(toggleDarkMode, 300)

  return (
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={handleChange} />
      <span className="slider" />
    </label>
  )
}

export default Toggler
