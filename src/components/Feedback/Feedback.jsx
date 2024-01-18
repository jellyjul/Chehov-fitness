import React from 'react'
import styles from './feedback.module.scss'

const Feedback = () => {
  return (
    <div className={styles.feedback}>
        <h1 className={styles.feedback__title}> О нас говорят</h1>
        <div className={styles.feedback__box}>
            
            <div className={styles.feedback__card}>
                <div className={styles.feedback__name}>NAME</div>
                <div className={styles.feedback__stars}></div>
                <div className={styles.feedback__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat sapiente eligendi consequuntur porro quae accusamus ex impedit sit repellendus. Facilis dolor eius a recusandae necessitatibus voluptatem eos consectetur asperiores.</div>
            </div>
            <div className={styles.feedback__card}>
                <div className={styles.feedback__name}>NAME</div>
                <div className={styles.feedback__stars}></div>
                <div className={styles.feedback__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat sapiente eligendi consequuntur porro quae accusamus ex impedit sit repellendus. Facilis dolor eius a recusandae necessitatibus voluptatem eos consectetur asperiores.</div>
            </div>
        </div>
    </div>
  )
}

export default Feedback