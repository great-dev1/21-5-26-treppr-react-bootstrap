import './Copyright.scss'
import Logo from '../../assets/images/logo.svg'

function Copyright() {
  return (
    <div className="pre-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <a href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <p className="text">
          © 2021 Treppr Inc. All Rights Reserved.
        </p>
        <p className="text">
          Powered By <a className="contact-hero-link" href="https://www.blanspace.ca">Blank Space</a>
        </p>
      </div>
    </div>
  )
}

export default Copyright
