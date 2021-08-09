import './Market.scss'
import BackImage from '../../assets/images/market-back.svg'
import CubicImage from '../../assets/images/cubic-icon.svg'
import BrainImage from '../../assets/images/brain-icon.svg'
import CommunityImage from '../../assets/images/community-icon.svg'

function Market() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let today = new Date()
  let date = today.getDate() + 10
  let month = months[today.getMonth()]

  console.log("date", date)
  console.log("month", month)

  return (
    <div className="market">
      <img className="back-img d-none d-md-block" src={BackImage} alt="back" />

      <div className="container text-center">
        <h4 className="subtitle">Coming {month} {date}</h4>
        <h2 className="title">Marketplace for invaluable business blueprints or ideas</h2>

        <div className="market-feature row">
          <div className="item col-12 col-md-4">
            <img className="feature-img" src={CubicImage} alt="cubic" />
            <h4 className="feature-title">A NEW FORMAT</h4>
            <p className="feature-detail">
              Turn your business knowledge and experience into educational content.  Treppr offers a revolutionary way to create practical business blueprints with our easy-to-use platform.
            </p>
          </div>
          <div className="item col-12 col-md-4">
            <img className="feature-img" src={BrainImage} alt="brain" />
            <h4 className="feature-title">DESIGNED TO CULTIVATE</h4>
            <p className="feature-detail">
              Share your business blueprint with a global audience of aspiring entrepreneurs.  Treppr allows you to continuously profit from your business blueprint, with a build once and sell infinitely model.
            </p>
          </div>
          <div className="item col-12 col-md-4">
            <img className="feature-img" src={CommunityImage} alt="community" />
            <h4 className="feature-title">COMMUNITY</h4>
            <p className="feature-detail">
              Join a community of established and aspiring entrepreneurs looking to learn and grow.  Share experiences, ask questions, and network with entrepreneurs on their life changing journey to financial freedom.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Market
