import { useState, useContext } from 'react'

import { ViewModeContext } from '../../../../App'
import './Feature.scss'
import FeatureImage1 from '../../assets/images/feature-1.png'
import FeatureImage2 from '../../assets/images/feature-2.png'
import FeatureImage3 from '../../assets/images/feature-3.png'

function Feature() {
  const { darkMode } = useContext(ViewModeContext)

  const [featureNum, setFeatureNum] = useState(0)

  const selectFeature = (num) => setFeatureNum(num)

  return (
    <div className={darkMode ? "feature-container feature-container-dark" : "feature-container"}>
      <div className="row text-white">
        <div className="col-lg-6 pr-lg-5 d-flex flex-column align-items-center">
          {/* Feature Title for Mobile */}
          <div className="d-block d-lg-none">
            {featureNum === 0 &&
              <h2 className="feature-text section-title">
                The most amazing platform, helpS you create a valuable business BLUE PRINT WITH EASE.
                </h2>
            }
            {featureNum === 1 &&
              <h2 className="feature-text section-title">
                The most amazing platform, can help you create a valuable business idea
                </h2>
            }
            {featureNum === 2 &&
              <h2 className="feature-text section-title">
                The most amazing platform, can help you create a valuable business idea
                </h2>
            }
          </div>

          {/* Tabs */}
          <ul className="feature-tab-group d-flex justify-content-between">
            <li className={featureNum === 0 ? "feature-tab-active" : "feature-tab"}
              onClick={() => selectFeature(0)}
            >
              Easy Listing
            </li>
            <li className={featureNum === 1 ? "feature-tab-active" : "feature-tab"}
              onClick={() => selectFeature(1)}
            >
              Smart Platform
            </li>
            <li className={featureNum === 2 ? "feature-tab-active" : "feature-tab"}
              onClick={() => selectFeature(2)}
            >
              Get Sales!
            </li>
          </ul>

          {/* Feature Image */}
          <div className="feature-img-container">
            {featureNum === 0 &&
              <img className="feature-img img-fluid" src={FeatureImage1} alt="feature" />
            }
            {featureNum === 1 &&
              <img className="feature-img img-fluid" src={FeatureImage2} alt="feature" />
            }
            {featureNum === 2 &&
              <img className="feature-img img-fluid" src={FeatureImage3} alt="feature" />
            }
          </div>
        </div>

        {/* Feature Text */}
        <div className="col-lg-6">
          {featureNum === 0 &&
            <div>
              <h2 className="feature-text section-title d-none d-lg-block">
                The most amazing platform, helpS you create a valuable business BLUE PRINT WITH EASE.
              </h2>
              <p className="feature-text section-detail mt-2 mt-lg-0">
                Treppr guides you step by step to pitch your idea in a storytelling way to make your idea into valuable blueprint.
              </p>
            </div>
          }
          {featureNum === 1 &&
            <div>
              <h2 className="feature-text section-title d-none d-lg-block">
                The most amazing platform, can help you create a valuable business idea
              </h2>
              <p className="feature-text section-detail mt-2 mt-lg-0">
                Treppr gives your more control over your business blueprint. Treppr provides you with an open platform so you can build a business plan any way you want.
              </p>
            </div>
          }
          {featureNum === 2 &&
            <div>
              <h2 className="feature-text section-title d-none d-lg-block">
                The most amazing platform, can help you create a valuable business idea
              </h2>
              <p className="feature-text section-detail mt-2 mt-lg-0">
                Treppr presents your idea in an engaging way that helps you sell your ideas. With a user-friendly and accessible platform to demonstrate your product's key points in order to catch the audience's eye to ultimately achieve your sales goals.
              </p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Feature