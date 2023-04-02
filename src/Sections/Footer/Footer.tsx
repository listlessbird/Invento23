import { ReactComponent as FooterLogo } from "../../assets/svg/footer_logo.svg"
import { ReactComponent as InstagramLogo } from "../../assets/svg/instagram.svg"
import { ReactComponent as CallLogo } from "../../assets/svg/call.svg"
import { ReactComponent as EmailLogo } from "../../assets/svg/email.svg"
import { ReactComponent as InventoLogo } from "../../assets/svg/invento.svg"

import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer grid ff-main flow">
      <div className="footer__box footer__box--1 flow">
        <div className="footer__col i-flex">
          <InventoLogo className="footer__logo footer__logo--invento" />
          <div className="d-ib uppercase italic footer__title__main fw-large">
            <h3 className="fs-500 d-ib">invento</h3>
            <h4>#Risewithinvento</h4>
          </div>
        </div>
        <hr />
        <div className="footer__col i-flex">
          <InstagramLogo />
          <div className="link__container">
            <a
              href="#"
              className="link footer__link d-b fs-200 ff-main fw-large"
            >
              @invento_gecpalakkad
            </a>
            <a
              href="#"
              className="link footer__link d-b fs-200 ff-main fw-large"
            >
              @sapthagecpalakkad
            </a>
          </div>
        </div>
      </div>

      <div className="footer__box footer__box--2 fs-200">
        <div className="contacts flex flex-col">
          <div className="mail flow flex flex-col a-center t-center">
            <EmailLogo />
            <a href="#" className="d-b link footer__link">
              inventogec@gmail.com
            </a>
            <a href="#" className="d-b link footer__link">
              invento23marketing@gmail.com
            </a>
          </div>
          <hr />
          <div className="call flow flex flex-col a-center t-center">
            <CallLogo />
            <a href="#" className="footer__link d-b link">
              +91 99957 76023
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
