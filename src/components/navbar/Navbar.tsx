import React from "react"
import { Link } from "react-router-dom"

//styles
import "./Navbar.scss"

//images
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__sub">
        <div className="contact">
          <div className="contact__link">
            <Link to={"/"} className="link">
              <p>CONTACT</p>
            </Link>
          </div>
        </div>
        <div className="central__logo">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="register">
          <div className="register__button">
            <Link to={"/register"}>
              <button>
                <p>REGISTER</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
