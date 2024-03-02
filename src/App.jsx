import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import NavBar from "./components/header/NavBar"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Footer from "./components/footer/Footer"
import "./styles/App.css"
import GetInTouch from "./components/getInTouch/GetInTouch"
import Blog from "./components/blog/Blog"
const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Services />
      <About />
      <Portfolio />
      <Blog />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default App
