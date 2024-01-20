import React from 'react'
import styles from './Main.module.scss'

import phone from '../../assets/images/telephone.png'
import email from '../../assets/images/email.png'
import location from '../../assets/images/location.png'
import cross from '../../assets/images/cross.png'
import logo from '../../assets/images/yoga-pose.png'

const Main = () => {
  return (
    <div className={styles.main}>
          <div className={styles.main__header}>
            <div className={styles.header__container}>
              <ul className={styles.header__menu}>
                  <li className = {styles.header__item}>О нас</li>
                  <li className = {styles.header__item}>Галерея</li>
                  <li className = {styles.header__item}>Абонементы</li>
                  {/* <li>
                  <img src={logo} alt="logo" />
                  </li> */}
                  <li className = {styles.header__item}>Команда</li>
                  <li className = {styles.header__item}>Контакты</li>
                  <li className = {styles.header__item}>
                    <button className = {styles.header__button}> Заказать звонок</button>
                  </li>
              </ul>
        </div>
          </div>
          <div className={styles.main__block}>
            <h1 className={styles.main__title}>THINK BETTER, FEEL BETTER</h1>
            <h2 className={styles.main__subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita molestiae neque corporis ipsa totam sed eligendi sequi fuga eum vitae repellendus sapiente, quos enim quasi eaque delectus iste quisquam voluptate.</h2>
            <div className={styles.main__contacts}>
              <div className={styles.main__item}>
                <img src={phone}></img>
                <div className={styles.main__details}>+11111111</div>
              </div>
              <div className={styles.main__item}>
              <img src={email}></img>
                <div className={styles.main__details}>11111@mail.ru</div>
              </div>
              <div className={styles.main__item}>
              <img src={location}></img>
                <div className={styles.main__details}>г.Октябрьский, ул. Чехова 46</div>
              </div>
            </div>
          </div>
          <div className={styles.main__line}>
              <div className={styles.main__item}>
                <img src={cross} alt="cross" />
                <div className={styles.main__detail}>Lorem</div>
              </div>
              <div className={styles.main__item}>
                <img src={cross} alt="cross" />
                <div className={styles.main__detail}>Lorem</div>
              </div>
              <div className={styles.main__item}>
                <img src={cross} alt="cross" />
                <div className={styles.main__detail}>Lorem</div>
              </div>
              <div className={styles.main__item}>
                <img src={cross} alt="cross" />
                <div className={styles.main__detail}>Lorem</div>
              </div>
              <div className={styles.main__item}>
                <img src={cross} alt="cross" />
                <div className={styles.main__detail}>Lorem</div>
              </div>
              <div className={styles.main__item}>
                <img src={cross} alt="cross" />
                <div className={styles.main__detail}>Lorem</div>
              </div>
              <div className={styles.main__item}>
                <img src={cross} alt="cross" />
                <div className={styles.main__detail}>Lorem</div>
              </div>
              
            </div>
    </div>

  )
}

export default Main