import Footer from "../Sections/Footer"
import Hero from "../Sections/Hero"
//components
import Navbar from "../components/navbar/Navbar"

//styles
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <div className="home">
      <div className={styles.home}></div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home
