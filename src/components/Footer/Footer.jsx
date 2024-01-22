import React from 'react'
import styles from './footer.module.scss'
import stylesMain from '../Main/Main.module.scss'
import logo from '../../assets/images/yoga-pose.png'
import vk from '../../assets/images/vk.png'
import telegram from '../../assets/images/telegram.png'
import whatsapp from '../../assets/images/whatsapp.png'
import phone from '../../assets/images/telephone.png'
import email from '../../assets/images/email.png'
import location from '../../assets/images/location.png'


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__box}>
                <div className={styles.footer__logo}>
                    <img src={logo} alt="logo" />
                    <div className={styles.footer__details}>Фитнес-клуб Чехов</div>
                </div>
                <div className={styles.main__contacts}>
              <div className={stylesMain.main__item}>
                <img src={phone} ></img>
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
                <div className={styles.footer__social}>
                <a href='./'> 
                       <img src={vk} className={styles.footer__socialItem} alt="vk" />
                       </a>
                       <a href='./'> 
                       <img src={telegram} className={styles.footer__socialItem} alt="tg" />
                       </a>
                       <a href='./'> 
                       <img src={whatsapp} className={styles.footer__socialItem} alt="whatsapp" />
                       </a>
            </div>
        </div>
        <div className={styles.footer__copyright}> © Copyright 2024</div>
    </div>
  )
}

export default Footer