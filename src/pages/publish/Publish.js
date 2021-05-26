import PublishHero from './components/publishhero/PublishHero'
import Help from './components/help/Help'
import Feature from './components/feature/Feature'
import SellerHow from './components/sellerhow/SellerHow'
import Best from './components/best/Best'
import './Publish.scss'

function Publish() {
  return (
    <div>
      <PublishHero />
      <Help />
      <Feature />
      <SellerHow />
      <Best />
    </div>
  )
}

export default Publish
