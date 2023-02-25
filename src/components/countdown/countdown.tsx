import { useCountdown } from "../../hooks"
import styles from './countdown.module.scss'
export default function Countdown() {

    const {days, hours, minutes, seconds} = useCountdown('26 Feb 2023 12:00:00')

  const countdown = [
    {
      title: 'Days',
      item: days
    },
    {
      title: 'Hours',
      item: hours
    },
    {
      title: 'Minutes',
     item: minutes
    },
    {
      title: 'Seconds',
      item: seconds
    }
  ].map((cd) => {
    return (
      <div className={styles.countdown__box__wrap}>
        <div className={styles.countdown__box}>
          <span className={styles.countdown__text}>{ cd.item }</span>
        </div>
        <span className={styles.countdown__title}>{cd.title}</span>
      </div> 
    )
  })
  
  return (
    <div className={ styles.countdown__container }>
      {countdown}
    </div>
  )
}
