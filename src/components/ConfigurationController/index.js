import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        showContent,
        onToggleShowLeftNavbar,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeft = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRight = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="nav-container">
          <div className="nav-content">
            <h1 className="nav-heading">Layout</h1>

            <div className="controller-container">
              <input
                checked={showContent}
                type="checkbox"
                id="content"
                className="input"
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="content">
                Content
              </label>
            </div>

            <div className="controller-container">
              <input
                type="checkbox"
                id="lefNavbar"
                className="input"
                onChange={onChangeLeft}
                checked={showLeftNavbar}
              />
              <label htmlFor="lefNavbar" className="content">
                Left Navbar
              </label>
            </div>

            <div className="controller-container">
              <input
                type="checkbox"
                id="rightNavbar"
                className="input"
                onChange={onChangeRight}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar" className="content">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
