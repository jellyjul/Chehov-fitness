import React from 'react'
import styles from './feedback.module.scss'
import 'react-multi-carousel/lib/styles.css'; 
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Feedback = () => {
  return (
    <div className={styles.feedback}>
        <h1 className={styles.feedback__title}> О нас говорят</h1>
        <Carousel responsive={responsive} className={styles.feedback__box}>
        <div className={styles.feedback__card}>
                <div className={styles.feedback__name}>NAME</div>
                <div className={styles.feedback__stars}></div>
                <div className={styles.feedback__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat sapiente eligendi consequuntur porro quae accusamus ex impedit sit repellendus. Facilis dolor eius a recusandae necessitatibus voluptatem eos consectetur asperiores.</div>
            </div>
            <div className={styles.feedback__card}>
                <div className={styles.feedback__name}>NAME</div>
                <div className={styles.feedback__stars}></div>
                <div className={styles.feedback__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat sapiente eligendi consequuntur porro quae accusamus ex impedit sit repellendus. Facilis dolor eius a recusandae necessitatibus voluptatem eos consectetur asperiores.</div>
            </div>
            <div className={styles.feedback__card}>
                <div className={styles.feedback__name}>NAME</div>
                <div className={styles.feedback__stars}></div>
                <div className={styles.feedback__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat sapiente eligendi consequuntur porro quae accusamus ex impedit sit repellendus. Facilis dolor eius a recusandae necessitatibus voluptatem eos consectetur asperiores.</div>
            </div>
        </Carousel>
    </div>
  )
}

export default Feedback