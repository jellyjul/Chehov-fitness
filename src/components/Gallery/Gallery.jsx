import React from 'react'
import styles from './gallery.module.scss'


const Gallery = () => {
  return (
    <div className={styles.gallery}>
        <h2 className={styles.gallery__title} >Галерея</h2>
        <h3 className={styles.gallery__subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam molestias a nesciunt, odio maxime totam id eius ex officiis veniam! Quidem nihil labore inventore doloremque qui fugit ab obcaecati.</h3>
        <div className={styles.gallery__box}>
            <img src = 'https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg' alt = 'pic'></img>
            <img src = 'https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg' alt = 'pic'></img>
            <img src = 'https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg' alt = 'pic'></img>
            <img src = 'https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg' alt = 'pic'></img>
            <img src = 'https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg' alt = 'pic'></img>
            <img src = 'https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg' alt = 'pic'></img>
            <img src = 'https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg' alt = 'pic'></img> 
        </div>        
    </div>
  )
}

export default Gallery