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
                THE MOST AMAZING PLATFORM, HELPS YOU CREATE A VALUABLE BUSINESS BLUEPRINT WITH EASE.
              </h2>
            }
            {featureNum === 1 &&
              <h2 className="feature-text section-title">
                TREPPR OPENS THE DOOR TO A FLEXIBLE APPROACH TO CREATING YOUR PROCESSES
              </h2>
            }
            {featureNum === 2 &&
              <h2 className="feature-text section-title">
                TERPPR'S MARKETPLACE AND IDEA PRESENTATION PAGE WILL HELP YOU SOLVE YOUR SALES AND CONVERSION PROBLEMS.
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
                THE MOST AMAZING PLATFORM, HELPS YOU CREATE A VALUABLE BUSINESS BLUEPRINT WITH EASE.
              </h2>
              <p className="feature-text section-detail mt-2 mt-lg-0">
                Treppr guides you step-by-step to tell your idea through storytelling, making your idea an invaluable blueprint.
              </p>
            </div>
          }
          {featureNum === 1 &&
            <div>
              <h2 className="feature-text section-title d-none d-lg-block">
                TREPPR OPENS THE DOOR TO A FLEXIBLE APPROACH TO CREATING YOUR PROCESSES
              </h2>
              <p className="feature-text section-detail mt-2 mt-lg-0">
                By using Treppr, you can easily share your business idea knowledge with aspiring entrepreneurs. Whether it be videos embedded, written content or documents uploaded.
              </p>
            </div>
          }
          {featureNum === 2 &&
            <div>
              <h2 className="feature-text section-title d-none d-lg-block">
                TERPPR 'S MARKETPLACE AND IDEA PRESENTATION PAGE WILL HELP YOU SOLVE YOUR SALES AND CONVERSION PROBLEMS.
              </h2>
              <p className="feature-text section-detail mt-2 mt-lg-0">
                Treppr presents your idea in an engaging way that helps you sell your business blueprint or idea. With an easy to use, auto-assist platform, you can reach a global audience to maximize your sales.
              </p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Feature