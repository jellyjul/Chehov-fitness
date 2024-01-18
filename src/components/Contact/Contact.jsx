import React from 'react'
import styles from './contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.contact__box}>
            <div className={styles.contact__details}>
                <div className={styles.contact__title}>Feel free to contact</div>
                <div className={styles.contact__description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dolor non ducimus dolore, quae ullam, voluptatum molestiae dolores eveniet veniam laboriosam, quas nesciunt quaerat atque debitis dignissimos voluptatibus! Deleniti, assumenda!</div>
                <div className={styles.contact__details}></div>
            </div>
            <div className={styles.contact__form}>
                <div className={styles.contact__main}>
                <div className={styles.contact__name}>
                    <input type="text"  name="" id=""/>
                </div>
                <div className={styles.contact__surname}>
                <input type="text"  name="" id=""/>
                </div>
                </div>
                <div className={styles.contact__number}>
                    <input type="number" name="" id="" />
                </div>
                <div className={styles.contact__message}>
                <input type="text"  name="" id=""/>
                </div>
            <button type="submit">Отправить</button>
            </div>
        </div>
    </div>
  )
}

export default Contact