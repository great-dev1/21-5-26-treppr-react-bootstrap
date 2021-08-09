import { useReducer, useEffect, createContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';

import './App.scss'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import Publish from './pages/publish/Publish'
import Terms from './pages/terms/Terms'
import Privacy from './pages/privacy/Privacy'
import UsePolicy from './pages/usepolicy/UsePolicy'
import Disclaimer from './pages/disclaimer/Disclaimer'
import Contact from './pages/contact/Contact'
import Prelaunch from './pages/prelaunch/Preluanch'

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
      <BrowserRouter>
        <Switch>
          <Route path="/publish">
            <Layout>
              <Publish />
            </Layout>
          </Route>
          <Route path="/terms-and-conditions">
            <Layout>
              <Terms />
            </Layout>
          </Route>
          <Route path="/privacy-policy">
            <Layout>
              <Privacy />
            </Layout>
          </Route>
          <Route path="/acceptable-use-policy">
            <Layout>
              <UsePolicy />
            </Layout>
          </Route>
          <Route path="/disclaimer-policy">
            <Layout>
              <Disclaimer />
            </Layout>
          </Route>
          <Route path="/contact">
            <Layout>
              <Contact />
            </Layout>
          </Route>
          <Route path="/prelaunch">
            <Prelaunch />
          </Route>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </ViewModeContext.Provider>
  )
}

export default App
