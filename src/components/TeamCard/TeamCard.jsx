import React from 'react'
import styles from './teamCard.module.scss'
import vk from '../../assets/images/vk.png'
import telegram from '../../assets/images/telegram.png'
import whatsapp from '../../assets/images/whatsapp.png'

const TeamCard = (props) => {
  return (
    <div className={styles.team__card}>
                    <img className={styles.team__pic} src={props.photo} alt="pic" />
                    <h2 className={styles.team__title}>{props.name}</h2>
                    <div className={styles.team__description}> {props.description}</div>
                    <div className={styles.team__social}>
                       <a href={props.vk}> 
                       <img src={vk} alt="vk" />
                       </a>
                       <a href={props.tg}> 
                       <img src={telegram} alt="tg" />
                       </a>
                       <a href={props.whatsapp}> 
                       <img src={whatsapp} alt="whatsapp" />
                       </a>
                    </div>
                </div>
  )
}

export default TeamCard