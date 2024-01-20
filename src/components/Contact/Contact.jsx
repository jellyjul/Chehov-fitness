import React from 'react'
import styles from './contact.module.scss'
import stylesMain from '../Main/Main.module.scss'
import phone from '../../assets/images/telephone.png'
import email from '../../assets/images/email.png'
import location from '../../assets/images/location.png'

const Contact = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.contact__box}>
            <div className={styles.contact__details}>
                <div className={styles.contact__title}>ОСТАВЬТЕ ЗАЯВКУ И МЫ ВАМ ПЕРЕЗВОНИМ</div>
                <div className={styles.contact__contacts}>
              <div className={stylesMain.main__item}>
                <img src={phone}></img>
                <div className={stylesMain.main__details}>+11111111</div>
              </div>
              <div className={stylesMain.main__item}>
              <img src={email}></img>
                <div className={stylesMain.main__details}>11111@mail.ru</div>
              </div>
              <div className={stylesMain.main__item}>
              <img src={location}></img>
                <div className={stylesMain.main__details}>г.Октябрьский, ул. Чехова 46</div>
              </div>
            </div>
            </div>
            <div className={styles.contact__form}>
                <div className={styles.contact__main}>
                <div className={styles.contact__name}>
                    <input type="text" placeholder='Имя'  name="" id="" required/>
                </div>
                <div className={styles.contact__name}>
                <input type="text" placeholder='Фамилия'  name="" id="" required/>
                </div>
                </div>
                <div className={styles.contact__name}>
                    <input type="number" placeholder='Телефон'   name="" id="" required />
                </div>
            <button className={styles.contact__btn} type="submit">Жду звонка</button>
            </div>
        </div>
    </div>
  )
}

export default Contact