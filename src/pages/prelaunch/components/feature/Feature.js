import './Feature.scss'
import FeatureImage1 from '../../assets/images/feature-1.svg'
import FeatureImage2 from '../../assets/images/feature-2.svg'
import FeatureImage3 from '../../assets/images/feature-3.svg'
import FeatureImage4 from '../../assets/images/feature-4.svg'

function Feature() {
  return (
    <div className="feature">
      <div className="container text-center">
        <h2 className="title">Build, reach, sell all in one place</h2>
        <div className="row">
          <div className="col-12 col-lg-3 mb-4">
            <div className="item">
              <img className="img" src={FeatureImage1} alt="feature" />
              <h4 className="subtitle">Easy to Use</h4>
              <p className="detail">
                Easily create a valuable idea even without experience sharing ideas
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="item">
              <img className="img" src={FeatureImage2} alt="feature" />
              <h4 className="subtitle">Accessibility FIRST</h4>
              <p className="detail">
                Designed to help your audiance  learn and engage in the community
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="item">
              <img className="img" src={FeatureImage3} alt="feature" />
              <h4 className="subtitle">Sales & Analytics</h4>
              <p className="detail">
                Full visibility to your listings metrics and revinue generated
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <div className="item">
              <img className="img" src={FeatureImage4} alt="feature" />
              <h4 className="subtitle">Direct deposit</h4>
              <p className="detail">
                Easy to deposit your money from Treppr platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
