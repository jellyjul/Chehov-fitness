import React from 'react'
import styles from './pricing.module.scss'

const Pricing = () => {
  return (
    <div className={styles.pricing}>
        <div className={styles.pricing__box}>
            <div className={styles.pricing__title}>абонементы</div>
            <div className={styles.pricing__subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint animi enim doloremque voluptate beatae ipsum voluptatum minima quidem eveniet voluptates, repudiandae, nostrum quam, a eaque distinctio. Porro, delectus quis!</div>
            <div className={styles.pricing__tarrifs}>
                <div className={styles.pricing__tarif}>
                    <div className={styles.pricing__name}>Безлимитный</div>
                    <div className={styles.pricing__price}>4999 р</div>
                    <div className={styles.pricing__description}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda molestiae iste nulla dignissimos consectetur perferendis harum nisi consequuntur inventore molestias, debitis rem a exercitationem deleniti, magni omnis ullam iure illo.</div>
                    <button className={styles.pricing__button}> КУПиТЬ</button>
                </div>
                <div className={styles.pricing__tarif}>
                    <div className={styles.pricing__name}>Безлимитный</div>
                    <div className={styles.pricing__price}>4999 р</div>
                    <div className={styles.pricing__description}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda molestiae iste nulla dignissimos consectetur perferendis harum nisi consequuntur inventore molestias, debitis rem a exercitationem deleniti, magni omnis ullam iure illo.</div>
                    <button className={styles.pricing__button}> КУПиТЬ</button>
                </div>
                <div className={styles.pricing__tarif}>
                    <div className={styles.pricing__name}>Безлимитный</div>
                    <div className={styles.pricing__price}>4999 р</div>
                    <div className={styles.pricing__description}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda molestiae iste nulla dignissimos consectetur perferendis harum nisi consequuntur inventore molestias, debitis rem a exercitationem deleniti, magni omnis ullam iure illo.</div>
                    <button className={styles.pricing__button}> КУПиТЬ</button>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Pricing