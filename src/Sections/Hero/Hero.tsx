import HeroImg from "../../assets/images/hero__main__bg.png";
import { ReactComponent as InventoLabel } from "../../assets/images/InventoLabel.svg";
import Countdown from "../../components/countdown";
import "./Hero.scss";
import logoOutline from "../../assets/images/gec__image__outline.png";
import InventoBrochure from "../../assets/pdfs/BROCHURE2023.pdf";

export default function HeroSection() {
  return (
    <section className="section__hero">
      <HeroGrid />
    </section>
  );
}

function HeroGrid() {
  return (
    <>
      <div className="hero__grid__left">
        <span className="sm__text">// THE GREAT RESTART IS HERE</span>
        <div className="heading__container uppercase">
          <h1 className="heading--1 invento__main__heading">
            invento’23
            <span className="d-ib nowrap mt-sm heading--2">
              is around the corner
            </span>
          </h1>
        </div>
        <div className="hero__btn__container">
          {/* TODO: extract these into to a custom btn+link component */}
          <a href="#" className="btn btn--cta glow-on-hover">
            Register
          </a>
          <a
            className="btn btn--explore glow-on-hover"
            href={InventoBrochure}
            download="InventoBrochure"
            // target="_blank"
          >
            Explore <span>&rarr;</span>
          </a>
        </div>
        <div className="ct__container">
          <span className="sm__text">//tick tick...</span>
          <Countdown />
        </div>
      </div>
      <div className="hero__grid__right">
        {/* <img
          src={HeroImg}
          alt="invento hero image"
          className="rgrid__img rgrid__img--1"
        /> */}
        <img src={logoOutline} alt="" className="logo__outline" />
        <InventoLabel className="invento__label" />

        <p className="paragraph hero__text">
          Born in the year 2012,INVENTO is the national level annual
          techno-management festival of Government Engineering College Palakkad.
        </p>
      </div>
    </>
  );
}
