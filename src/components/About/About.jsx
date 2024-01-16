import React from 'react'
import styles from './About.module.scss'
import yoga from '../../assets/images/yoga-pose.png'
const About = () => {
  return (
    <div className={styles.about}>
        <h1 className={styles.about__title}> О нас</h1>
        <h2 className={styles.about__subtitle}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eius dolores animi dolor error obcaecati, incidunt tempore eos veniam accusantium sint amet, aut magni dicta neque, sunt harum laborum. Eius!</h2>
        <div className={styles.about__icons}>
            <img src={yoga} alt="icon" />
            <img src={yoga} alt="icon" />
            <img src={yoga} alt="icon" />
            <img src={yoga} alt="icon" />
        </div>
        <h2 className={styles.about__subtitle}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eius dolores animi dolor error obcaecati, incidunt tempore eos veniam accusantium sint amet, aut magni dicta neque, sunt harum laborum. Eius!</h2>
        <div className={styles.about__programs}>
            <div className={styles.about__cards}>
                <div className={styles.about__card}>
                    <div className={styles.about__card}>    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About