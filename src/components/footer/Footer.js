import { useState, useContext } from 'react'
import { Link } from 'react-scroll'

import { ViewModeContext } from '../../App'
import './Footer.scss'
import Toggler from '../toggler/Toggler'
import VisaLogo from '../../assets/images/Footer/visa-logo.svg'
import MasterLogo from '../../assets/images/Footer/mastercard-logo.svg'
import ExpressLogo from '../../assets/images/Footer/express-logo.svg'
import SslLogo from '../../assets/images/Footer/ssl-logo.svg'
import PaypalLogo from '../../assets/images/Footer/paypal-logo.svg'

function Footer() {
  const { darkMode } = useContext(ViewModeContext)

  const [showCurrencyMenu, setCurrencyMenu] = useState(false)
  const [currency, setCurrency] = useState("CAD")

  const toggleCurrencyMenu = () => {
    setCurrencyMenu(!showCurrencyMenu)
  }

  const selectCurrency = (unit) => {
    setCurrency(unit)
    setCurrencyMenu(false)
  }

  return (
    <footer className="container">
      <div className="footer-main">
        <div className="footer-content row">
          <div className="col-md-3 mb-4">
            {/* Logo */}
            <a href="/">
              <svg className="logo" width="86"
                height="42"
                viewBox="0 0 86 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.83137 6.21066H23.8987C24.9077 6.21066 25.7301 7.03302 25.7301 8.04204V30.2052C25.7301 31.2142 24.9077 32.0366 23.8987 32.0366H1.83137C0.822353 32.0366 0 31.2142 0 30.2052V8.04204C0 7.03806 0.822353 6.21066 1.83137 6.21066ZM14.1314 14.2929H18.677V11.957H7.04802V14.2929H8.48083H11.074H11.5937H13.6622L12.3656 14.9337L11.5937 15.3171V26.2902H14.1314V14.2929Z" fill={darkMode ? "white" : "url(#footer_logo_linear_0)"} />
                <path fillRule="evenodd" clipRule="evenodd" d="M41.5212 14.4981H44.7702V12.8281H36.4609V14.4981H39.71V23.0747H41.5262V14.4981H41.5212ZM47.3685 20.1334C47.3685 19.6239 47.4341 19.1799 47.5602 18.7965C47.6863 18.4131 47.8679 18.0902 48.1 17.8379C48.3321 17.5857 48.6096 17.3939 48.9324 17.2678C49.2553 17.1417 49.6085 17.0761 50.002 17.0761H50.1029V15.2044C49.4218 15.1741 48.8517 15.3355 48.4078 15.6887C47.9587 16.0419 47.6106 16.506 47.3685 17.0912V15.3507H45.5825V23.0798H47.3685V20.1334ZM52.8777 19.8408H58.5535C58.5636 19.7551 58.5686 19.6693 58.5737 19.5936C58.5787 19.5179 58.5787 19.4372 58.5787 19.3615C58.5787 18.8066 58.503 18.2718 58.3466 17.7673C58.1902 17.2577 57.9581 16.8138 57.6504 16.4354C57.3426 16.057 56.9592 15.7543 56.4951 15.5273C56.0309 15.3053 55.4911 15.1892 54.8756 15.1892C54.3206 15.1892 53.8111 15.2952 53.352 15.5121C52.8929 15.7291 52.4943 16.0166 52.1613 16.3849C51.8233 16.7532 51.566 17.177 51.3793 17.6664C51.1927 18.1558 51.1018 18.6754 51.1018 19.2304C51.1018 19.8358 51.2027 20.3857 51.4096 20.8751C51.6164 21.3695 51.8939 21.7882 52.2521 22.1414C52.6103 22.4946 53.0291 22.767 53.5084 22.9587C53.9927 23.1555 54.5123 23.2513 55.0673 23.2513C55.7787 23.2513 56.3891 23.1201 56.9037 22.8578C57.4183 22.5955 57.8573 22.2423 58.2255 21.8034L57.1862 20.8801C56.8735 21.1828 56.5556 21.4099 56.2327 21.5663C55.9098 21.7227 55.5315 21.7983 55.0925 21.7983C54.5174 21.7983 54.028 21.6318 53.6294 21.2938C53.2359 20.9608 52.9837 20.4715 52.8777 19.8408ZM52.8626 18.6704C52.9383 18.0649 53.1552 17.5756 53.5134 17.1972C53.8716 16.8239 54.3206 16.6321 54.8655 16.6321C55.1581 16.6321 55.4205 16.6876 55.6475 16.7936C55.8745 16.8995 56.0763 17.0458 56.2378 17.2275C56.4043 17.4091 56.5354 17.621 56.6313 17.8732C56.7271 18.1204 56.7927 18.3878 56.823 18.6704H52.8626ZM68.5226 19.2102C68.5226 18.5644 68.4217 17.9943 68.2149 17.4999C68.008 17.0004 67.7406 16.5817 67.4026 16.2336C67.0646 15.8855 66.6862 15.6282 66.2574 15.4516C65.8285 15.275 65.3846 15.1892 64.9305 15.1892C64.3099 15.1892 63.7903 15.3305 63.3716 15.608C62.9528 15.8855 62.6047 16.2285 62.3222 16.6422V15.3557H60.5362V25.4258H62.3222L62.307 21.8841C62.5795 22.2473 62.9276 22.5601 63.3463 22.8376C63.7651 23.1101 64.2948 23.2463 64.9254 23.2463C65.3846 23.2463 65.8285 23.1605 66.2624 22.9839C66.6963 22.8074 67.0797 22.545 67.4177 22.2019C67.7558 21.8538 68.0231 21.4351 68.2249 20.9356C68.4268 20.4261 68.5226 19.856 68.5226 19.2102ZM66.7417 19.2102C66.7417 19.5886 66.6811 19.9367 66.5651 20.2444C66.4491 20.5522 66.2876 20.8145 66.0909 21.0264C65.8891 21.2434 65.657 21.4048 65.3896 21.5259C65.1222 21.6419 64.8346 21.7025 64.5319 21.7025C64.2292 21.7025 63.9416 21.6419 63.6692 21.5259C63.3968 21.4099 63.1546 21.2383 62.9528 21.0214C62.746 20.7994 62.5845 20.5421 62.4634 20.2394C62.3424 19.9367 62.2818 19.5936 62.2818 19.2152C62.2818 18.8369 62.3424 18.4938 62.4634 18.1911C62.5845 17.8884 62.751 17.626 62.9528 17.4091C63.1597 17.1921 63.3968 17.0206 63.6692 16.9046C63.9416 16.7885 64.2292 16.728 64.5319 16.728C64.8346 16.728 65.1222 16.7885 65.3896 16.9046C65.657 17.0206 65.8941 17.1871 66.0909 17.404C66.2927 17.621 66.4491 17.8783 66.5651 18.186C66.6811 18.4837 66.7417 18.8318 66.7417 19.2102ZM78.4968 19.2102C78.4968 18.5644 78.3959 17.9943 78.189 17.4999C77.9822 17.0004 77.7148 16.5817 77.3768 16.2336C77.0387 15.8855 76.6604 15.6282 76.2315 15.4516C75.8027 15.275 75.3587 15.1892 74.9047 15.1892C74.2841 15.1892 73.7645 15.3305 73.3457 15.608C72.927 15.8855 72.5789 16.2285 72.2964 16.6422V15.3557H70.5104V25.4258H72.2964L72.2812 21.8841C72.5537 22.2473 72.9018 22.5601 73.3205 22.8376C73.7393 23.1101 74.269 23.2463 74.8996 23.2463C75.3587 23.2463 75.8027 23.1605 76.2366 22.9839C76.6705 22.8074 77.0539 22.545 77.3919 22.2019C77.7299 21.8538 77.9973 21.4351 78.1991 20.9356C78.3959 20.4261 78.4968 19.856 78.4968 19.2102ZM76.7108 19.2102C76.7108 19.5886 76.6503 19.9367 76.5342 20.2444C76.4182 20.5522 76.2568 20.8145 76.06 21.0264C75.8582 21.2434 75.6261 21.4048 75.3587 21.5259C75.0913 21.6419 74.8038 21.7025 74.5011 21.7025C74.1984 21.7025 73.9108 21.6419 73.6384 21.5259C73.3659 21.4099 73.1237 21.2383 72.9219 21.0214C72.7151 20.7994 72.5537 20.5421 72.4326 20.2394C72.3115 19.9367 72.2509 19.5936 72.2509 19.2152C72.2509 18.8369 72.3115 18.4938 72.4326 18.1911C72.5537 17.8884 72.7201 17.626 72.9219 17.4091C73.1288 17.1921 73.3659 17.0206 73.6384 16.9046C73.9108 16.7885 74.1984 16.728 74.5011 16.728C74.8038 16.728 75.0913 16.7885 75.3587 16.9046C75.6261 17.0206 75.8632 17.1871 76.06 17.404C76.2618 17.621 76.4182 17.8783 76.5342 18.186C76.6503 18.4837 76.7108 18.8318 76.7108 19.2102ZM82.2655 20.1334C82.2655 19.6239 82.3311 19.1799 82.4572 18.7965C82.5833 18.4131 82.7649 18.0902 82.997 17.8379C83.2291 17.5857 83.5116 17.3939 83.8295 17.2678C84.1524 17.1417 84.5055 17.0761 84.899 17.0761H84.9999V15.2044C84.3188 15.1741 83.7487 15.3355 83.3048 15.6887C82.8558 16.0419 82.5077 16.506 82.2655 17.0912V15.3507H80.4795V23.0798H82.2655V20.1334Z" fill={darkMode ? "white" : "url(#footer_logo_linear_1)"} />
                <path d="M31.289 0H30.8955V38.247H31.289V0Z" fill={darkMode ? "white" : "url(#footer_logo_linear_2)"} />
                <defs>
                  <linearGradient id="footer_logo_linear_0"
                    x1="8.59071"
                    y1="27.3161"
                    x2="15.8369"
                    y2="13.4215"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#194BA0" />
                    <stop offset="1" stopColor="#3469B3" />
                  </linearGradient>
                  <linearGradient id="footer_logo_linear_1"
                    x1="59.6951"
                    y1="22.6312"
                    x2="60.5595"
                    y2="16.2135"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#194BA0" />
                    <stop offset="1" stopColor="#3469B3" />
                  </linearGradient>
                  <linearGradient id="footer_logo_linear_2"
                    x1="30.7765"
                    y1="19.1298"
                    x2="31.3114"
                    y2="19.1192"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#194BA0" />
                    <stop offset="1" stopColor="#3469B3" />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            {/* Currency Dropdown */}
            <div className="currency-dropdown">
              <button
                className={darkMode ? "currency-dropdown-btn currency-dropdown-btn-dark" : "currency-dropdown-btn"}
                onClick={toggleCurrencyMenu}
              >
                <span>{currency}</span>

                {/* Currency Dropdown Icon */}
                <svg width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.01702 6.9996C5.78235 7.00276 5.55708 6.91252 5.3881 6.74785L0.265983 1.55161C0.0970157 1.3822 0.00158123 1.15262 1.9245e-05 0.911974C-0.00154515 0.671313 0.0923253 0.440138 0.259726 0.269172C0.608606 -0.0870699 1.17497 -0.0902355 1.52698 0.262839L6.01709 4.82272L10.5072 0.262839C10.8592 -0.0617352 11.4021 -0.0474842 11.7385 0.292922C12.0748 0.633328 12.0889 1.18273 11.7682 1.53897L6.64606 6.74818C6.4771 6.91284 6.25181 7.00309 6.01714 6.99992L6.01702 6.9996Z" fill={darkMode ? "#CBCBCB" : "#686868"} />
                </svg>
              </button>

              {showCurrencyMenu &&
                <ul className={darkMode ? "currency-dropdown-menu currency-dropdown-menu-dark" : "currency-dropdown-menu"}>
                  <li className="currency-dropdown-item" onClick={() => selectCurrency("CAD")}>CAD</li>
                  <li className="currency-dropdown-item" onClick={() => selectCurrency("USD")}>USD</li>
                </ul>
              }
            </div>

            <Toggler />
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="footer-link-group col-md-4 col-lg-3">
                <h4 className="footer-link-title">Treppr</h4>
                <ul className="footer-link-list">
                  <li className="footer-link">
                    <a href="/explore">Explore</a>
                  </li>
                  <li className="footer-link">
                    <a href="https://www.community.treppr.com">Community</a>
                  </li>
                  <li className="footer-link">
                    <Link to="howSection" spy={true} smooth={true} duration={1000}>
                      How It Works
                    </Link>
                  </li>
                  <li className="footer-link">
                    <a href="/set-up-idea">Sell Your Idea</a>
                  </li>
                </ul>
              </div>

              <div className="footer-link-group col-md-4 col-lg-3">
                <h4 className="footer-link-title">Support</h4>
                <ul className="footer-link-list">
                  <li className="footer-link">
                    <a href="/contact">Contact</a>
                  </li>
                  <li className="footer-link">
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                  </li>
                  <li className="footer-link">
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li className="footer-link">
                    <a href="/acceptable-use-policy">Acceptable Use Policy</a>
                  </li>
                  <li className="footer-link">
                    <a href="/disclaimer-policy">Disclaimer Policy</a>
                  </li>
                </ul>
              </div>

              <div className="footer-link-group col-md-4 col-lg-3">
                <h4 className="footer-link-title">Follow Us</h4>
                <ul className="footer-link-list">
                  <li className="footer-link">
                    <a href="https://www.facebook.com/treppr">Facebook</a>
                  </li>
                  <li className="footer-link">
                    <a href="https://www.linkedin.com/company/treppr-inc">Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <p className="copyright-text">
          © 2021 Treppr Inc. All Rights Reserved.<br />
          Powered By <a className="contact-hero-link" href="https://www.blankspace.ca">Blank Space</a>
        </p>

        <div className="copyright-logo-group d-flex justify-content-center flex-wrap mx-n3">
          <img className="copyright-logo" src={VisaLogo} alt="visa" />
          <img className="copyright-logo" src={MasterLogo} alt="mastercard" />
          <img className="copyright-logo" src={ExpressLogo} alt="express" />
          <img className="copyright-logo" src={SslLogo} alt="ssl" />
          <img className="copyright-logo" src={PaypalLogo} alt="paypal" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
