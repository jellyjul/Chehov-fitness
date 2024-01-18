import React from 'react'
import styles from './team.module.scss'

const Team = () => {
  return (
    <div className={styles.team}>
        <div className={styles.team__box}>
            <h1>Команда</h1>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ut quisquam quae, nisi iusto, reiciendis culpa in exercitationem voluptates necessitatibus eaque blanditiis dolor sequi fuga possimus consequuntur facilis voluptate. Earum.</h2>
            <div className={styles.team__slider}>
                <div className={styles.team__card}>
                    <img className={styles.team__pic} src="https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg" alt="" />
                    <h2 className={styles.team__title}>NAME</h2>
                    <div className={styles.team__description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia quisquam culpa? Facere tenetur quasi aperiam suscipit fugiat magni molestiae perspiciatis voluptatum sapiente quas repellendus dicta neque temporibus, modi quaerat.</div>
                    <div className={styles.team__social}></div>
                </div>
                <div className={styles.team__card}>
                    <img className={styles.team__pic} src="https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg" alt="" />
                    <h2 className={styles.team__title}>NAME</h2>
                    <div className={styles.team__description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia quisquam culpa? Facere tenetur quasi aperiam suscipit fugiat magni molestiae perspiciatis voluptatum sapiente quas repellendus dicta neque temporibus, modi quaerat.</div>
                    <div className={styles.team__social}></div>
                </div>
                <div className={styles.team__card}>
                    <img className={styles.team__pic} src="https://jamieisrunning.com/wp-content/uploads/2019/07/BFR.jpg" alt="" />
                    <h2 className={styles.team__title}>NAME</h2>
                    <div className={styles.team__description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia quisquam culpa? Facere tenetur quasi aperiam suscipit fugiat magni molestiae perspiciatis voluptatum sapiente quas repellendus dicta neque temporibus, modi quaerat.</div>
                    <div className={styles.team__social}></div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Team