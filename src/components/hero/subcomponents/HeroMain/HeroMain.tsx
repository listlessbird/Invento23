import React from "react";

//styles
import styles from "./HeroMain.module.scss";

//icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const HeroMain = () => {
  return (
    <div className={styles.hero__main__container}>
      <div className={styles.hero__tagline}>
        <h4>{"// THE GREAT RESTART IS HERE"}</h4>
      </div>
      <div className={styles.hero__main__content}>
        <div className={styles.hero__title}>
          <h2>
            INVENTO'23 <br /> <span>IS AROUND THE CORNER</span>
          </h2>
        </div>
        <div className={styles.hero__buttons}>
          <div className={styles.hero__register}>
            <button>
              <div className={styles.hero__button__text}>
                <h4>{"REGISTER"}</h4>
              </div>
            </button>
          </div>
          <div className={styles.hero__explore}>
            <button>
              <div className={styles.hero__button__text}>
                <h4>{"EXPLORE"}</h4>
              </div>
              <div className={styles.hero__button__arrow}>
                <HiOutlineArrowLongRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
