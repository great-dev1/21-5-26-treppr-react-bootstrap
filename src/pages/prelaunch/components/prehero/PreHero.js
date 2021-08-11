import CountUp from 'react-countup'
import { Link } from 'react-scroll'
import './PreHero.scss'
import Logo from '../../assets/images/logo.svg'
import BackImage1 from '../../assets/images/hero-back-1.svg'
import BackImage2 from '../../assets/images/hero-back-2.svg'
import BackImgMobile1 from '../../assets/images/hero-back-mobile-1.svg'
import BackImgMobile2 from '../../assets/images/hero-back-mobile-2.svg'

function PreHero() {
  return (
    <div className="pre-hero">
      {/* Background Images */}
      <img className="back-1 d-none d-md-block" src={BackImage1} alt="background" />
      <img className="back-2 d-none d-md-block" src={BackImage2} alt="background" />
      <img className="back-mobile-1 d-block d-md-none" src={BackImgMobile1} alt="background" />
      <img className="back-mobile-2 d-block d-md-none" src={BackImgMobile2} alt="background" />

      {/* Content */}
      <div className="container text-center">
        <img className="logo" src={Logo} alt="logo" />
        <h2 className="title">Earn while helping others build their businesses</h2>
        <Link className="button" to="joinSection" spy={true} smooth={true} duration={1000}>
          GET EARLY ACCESS
        </Link>
        <h4 className="subtitle">LIMITED SEATS AVAILABLE</h4>

        <div className="stats row">
          <div className="item col-6 col-md-3">
            <h4 className="number">
              <CountUp end={250} duration={3} />
              +
            </h4>
            <p className="detail">Industries</p>
          </div>
          <div className="item col-6 col-md-3">
            <h4 className="number">
              <CountUp end={27} duration={3} />
            </h4>
            <p className="detail">Business Models</p>
          </div>
          <div className="item col-6 col-md-3">
            <h4 className="number">
              <CountUp end={100} duration={3} />
              %
            </h4>
            <p className="detail">Community</p>
          </div>
          <div className="item col-6 col-md-3">
            <h4 className="number">
              <CountUp end={44} duration={3} />
            </h4>
            <p className="detail">Countries</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreHero
