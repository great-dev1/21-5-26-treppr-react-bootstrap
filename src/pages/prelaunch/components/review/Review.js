import './Review.scss'
import GrowImage from '../../assets/images/growing.svg'
import AvatarImage from '../../assets/images/avatar.svg'

function Review() {
  return (
    <div className="review">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h2 className="title">
              Looking to start a business? Fast-track your business growth by leveraging the knowledge of seasoned entrepreneurs.
            </h2>
            <div className="d-flex flex-column flex-md-row mb-4">
              <img className="avatar" src={AvatarImage} alt="avatar" />
              <div>
                <p className="detail">
                  <span className="quote-mark">"</span>
                  Don’t think what’s the cheapest way to do it or what’s the fastest way to do it… think what’s the most amazing way to do it.”
                </p>
                <h4 className="name">Richard Branson</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <img className="grow-img" src={GrowImage} alt="grow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
