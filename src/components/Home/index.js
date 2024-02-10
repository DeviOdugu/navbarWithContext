// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBg = isDarkTheme ? 'bg-container1' : 'bg-container'
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <div className={homeBg}>
          <Navbar />
          <div className="home-bg">
            <img src={homeImage} alt="home" height="100px" width="150px" />
            <h1> Home </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
