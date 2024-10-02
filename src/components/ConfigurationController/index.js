import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="nav-container">
          <h1 className="nav-heading">Layout</h1>
          <div className="nav-input-list">
            <div className="input-container">
              <input
                type="checkbox"
                id="content"
                checked={showContent}
                onChange={onChangeShowContent}
                className="nav-input"
              />
              <label htmlFor="content" className="nav-label">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="left-navbar"
                checked={showLeftNavbar}
                onChange={onChangeShowLeftNavbar}
                className="nav-input"
              />
              <label htmlFor="left-navbar" className="nav-label">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="right-navbar"
                checked={showRightNavbar}
                onChange={onChangeShowRightNavbar}
                className="nav-input"
              />
              <label htmlFor="right-navbar" className="nav-label">
                Right Navbar
              </label>
            </div>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
