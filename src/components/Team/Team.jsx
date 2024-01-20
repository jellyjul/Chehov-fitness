import React from 'react'
import styles from './team.module.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import teammates from '../../data/team.json'
import TeamCard from '../TeamCard/TeamCard';


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

const Team = () => {
  return (
    <div className={styles.team}>
        <div className={styles.team__box}>
            <h1 className={styles.team__title}>Команда</h1>
            <h2 className={styles.team__subtitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ut quisquam quae, nisi iusto, reiciendis culpa in exercitationem voluptates necessitatibus eaque blanditiis dolor sequi fuga possimus consequuntur facilis voluptate. Earum.</h2>
            <Carousel responsive={responsive} className={styles.team__carousel}>
                {teammates.map((teammate,index)=> 
                <TeamCard key = {index} photo = {teammate.photo} description = {teammate.description} vk = {teammate.vk} tg = {teammate.tg} whatsapp = {teammate.whatsapp}/>
                )}
            </Carousel>
        </div>
    </div>
  )
}

export default Team

