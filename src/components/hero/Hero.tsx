//styles
import styles from "./Hero.module.scss";

//components
import Countdown from "../countdown/countdown";
import HeroMain from "./subcomponents/HeroMain/HeroMain";
import InventoLabel from "./subcomponents/InventoLabel/InventoLabel";
import Info from "./subcomponents/Info/Info";

export default function Hero() {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__main__container}>
        <HeroMain />
      </div>
      <div className={styles.hero__responsive__flex}>
        <div className={styles.invento__label}>
          <InventoLabel />
        </div>
        <div className={styles.countdown__info__flex}>
          <div className={styles.countdown__container}>
            <div className={styles.countdown__title}>
              <h4>{"// TICK TICK . . . "}</h4>
            </div>
            <Countdown />
          </div>
          <div className={styles.info__container}>
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}
