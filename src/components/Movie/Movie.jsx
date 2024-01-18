import React from 'react'
import styles from './Movie.module.scss'
import NumberCounter from 'number-counter'

const Movie = () => {
  return (
    <div className={styles.movie}>
        <div className={styles.movie__video}></div>
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