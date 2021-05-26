import './Help.scss'
import HelpImage from '../../assets/images/help.png'

function Help() {
  return (
    <div className="help-container container">
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img className="help-img img-fluid" src={HelpImage} alt="help" />
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="help-text">
            <h2 className="section-title">TREPPR Helps you tap into the deeper value of your ideas</h2>
            <p className="section-detail">
              Treppr smart platform can help you quickly turn your business or idea into a profitable
              revenue stream that can truly help others achieve their entrepreneurial goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
