import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const leftNavbarList = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-list">
                {leftNavbarList.map(item => (
                  <li key={item} className="left-navbar-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1 className="right-navbar-heading">Right Navbar</h1>
              <div className="ad-card">
                <div className="ad-box">
                  <p className="right-navbar-ad">Ad 1</p>
                </div>
                <div className="ad-box">
                  <p className="right-navbar-ad">Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
