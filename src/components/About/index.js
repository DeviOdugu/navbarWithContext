// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBg = isDarkTheme ? 'about-bg-container1' : 'about-bg-container'
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <div className={aboutBg}>
          <Navbar />
          <div className="about-bg">
            <img src={aboutImage} alt="about" height="100px" width="150px" />
            <h1> About </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
