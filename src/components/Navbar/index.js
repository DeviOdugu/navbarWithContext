// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const navBg = isDarkTheme ? 'nav-bg1' : 'nav-bg'
      const navHome = isDarkTheme ? 'home1' : 'home'
      const navAbout = isDarkTheme ? 'about1' : 'about'
      const navButton = isDarkTheme ? 'click-button1' : 'click-button'
      const navLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const navTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={navBg}>
          <img
            src={navLogo}
            alt="website logo"
            height="25px"
            width="25px"
            className="logo"
          />
          <ul className="list">
            <li>
              <Link to="/" className={navHome}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={navAbout}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            data-testid="theme"
            onClick={onToggleTheme}
            className={navButton}
          >
            <img src={navTheme} alt="theme" height="25px" width="25px" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
