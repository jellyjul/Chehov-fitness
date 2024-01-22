import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from './contact.module.scss'
import stylesMain from '../Main/Main.module.scss'
import phone from '../../assets/images/telephone.png'
import email from '../../assets/images/email.png'
import location from '../../assets/images/location.png'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_YOUR_TEMPLATE_ID , form.current, 'Wws7WQOIzc2QAXzkg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
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
                <form ref={form} onSubmit={sendEmail}>
                    <div className={styles.contact__name} id ='contact-name' >
                          <input type="text" placeholder='Имя'  name="user_name" id="" required/>
                    </div>
                    <div className={styles.contact__name} id ='contact-surname' >
                      <input type="text" placeholder='Фамилия'  name = "user_surname" id="" required/>
                    </div>
                    <div className={styles.contact__name} id ='contact-number' >
                      <input type="number" placeholder='Телефон'   name="user_phone" id="form__number" required />
                    </div>
                    <div className={styles.contact__name} id ='telegram' >
                      <input type="text" placeholder='Telegram'  name="user_telegram" />
                    </div>
                    <button className={styles.contact__btn} type="submit" id = 'contact__btn'>Жду звонка</button>
                </form>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Contact
