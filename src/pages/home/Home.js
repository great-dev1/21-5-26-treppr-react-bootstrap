import Hero from './components/hero/Hero'
import Intro from './components/intro/Intro'
import Choose from './components/choose/Choose'
import Focus from './components/focus/Focus'
import How from './components/how/How'
import Subscribe from './components/subscribe/Subscribe'

function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Choose />
      <Focus />
      <How />
      <Subscribe />
    </div>
  )
}

export default Home
