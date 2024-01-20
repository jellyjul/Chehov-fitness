import React from 'react'
import styles from './Movie.module.scss'
import NumberCounter from 'number-counter'

const Movie = () => {
  return (
    <div className={styles.movie}>
        <div className={styles.movie__video}>
        <iframe className={styles.movie__frame} src="https://www.youtube.com/embed/00Jb2qB1FUs?si=syJCtKOVYoElBJhF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className={styles.movie__line}>
            <div className={styles.movie__item}>
                <div className={styles.movie__title}> <NumberCounter end = {320} start ={300} delay ='10' preFix='+' pause-when-invisible/></div>
                <div className={styles.movie__subtitle}> coaches</div>
            </div>
            <div className={styles.movie__item}>
                <div className={styles.movie__title}> <NumberCounter end = {320} start ={300} delay ='10' preFix='+'/></div>
                <div className={styles.movie__subtitle}> coaches</div>
            </div>
            <div className={styles.movie__item}>
                <div className={styles.movie__title}> <NumberCounter end = {320} start ={300} delay ='10' preFix='+'/></div>
                <div className={styles.movie__subtitle}> coaches</div>
            </div>
            <div className={styles.movie__item}>
                <div className={styles.movie__title}> <NumberCounter end = {320} start ={300} delay ='10' preFix='+'/></div>
                <div className={styles.movie__subtitle}> coaches</div>
            </div>
        </div>
    </div>

  )
}

export default Movie