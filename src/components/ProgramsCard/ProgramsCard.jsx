import React from 'react'
import styles from './ProgramsCard.module.scss'


const ProgramsCard = (props) => {
  return (
    <div className={styles.programs__card}>
    <div className={styles.programs__picture}>
        <img src={props.photo} alt='pic'></img>
    </div>
    <div className={styles.programs__description}>
        <h3>
            {props.title}
        </h3>
        <div className={styles.programs__text}>
            {props.description}
        </div>
    </div>
    </div>
  )
}

export default ProgramsCard