import { useEffect, createContext, useReducer } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';

import './App.scss'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Publish from './pages/publish/Publish'
import Terms from './pages/terms/Terms'
import Privacy from './pages/privacy/Privacy'
import UsePolicy from './pages/usepolicy/UsePolicy'
import Disclaimer from './pages/disclaimer/Disclaimer'
import Contact from './pages/contact/Contact'

export const ViewModeContext = createContext()

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  const [darkMode, toggleDarkMode] = useReducer(state => !state, JSON.parse(localStorage.getItem('DARK_MODE')) === true)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('DARK_MODE', darkMode);
  }, [darkMode])


  return (
    <ViewModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/publish">
            <Publish />
          </Route>
          <Route path="/terms-and-conditions">
            <Terms />
          </Route>
          <Route path="/privacy-policy">
            <Privacy />
          </Route>
          <Route path="/acceptable-use-policy">
            <UsePolicy />
          </Route>
          <Route path="/disclaimer-policy">
            <Disclaimer />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </ViewModeContext.Provider>
  )
}

export default App
