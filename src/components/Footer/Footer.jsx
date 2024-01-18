import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__box}>
            <div className={styles.footer__details}>
                <div className={styles.footer__logo}>LOGO PIC</div>
                <div className={styles.footer__details}>Loooooo</div>
            </div>
            <div className={styles.footer__line}></div>
            <div className={styles.footer__social}>
                <div className={styles.footer__contacts}>
                    telegram VK
                </div>
                <div className={styles.footer__copyright}>Copyright</div>
            </div>
        </div>
    </div>
  )
}

export default Footer