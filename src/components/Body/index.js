import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="lr-heading">Left Navbar Menu</h1>
              <p className="item">item 1</p>
              <p className="item">item 2</p>
              <p className="item">item 3</p>
              <p className="item">item 4</p>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="body-content">
                Lorem ipsum dolor sit amet,consectetur adipiscing elitm set do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="lr-heading">Right Navbar</h1>

              <div className="rs-ad-container">
                <p className="ad-heading">Ad 1</p>
              </div>
              <div className="rs-ad-container">
                <p className="ad-heading">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
