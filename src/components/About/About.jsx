import React from 'react'
import styles from './About.module.scss'
import yoga from '../../assets/images/yoga-pose.png'
import ProgramsCard from '../ProgramsCard/ProgramsCard'
import programs from '../../data/programs.json'

const About = () => {
  return (
    <div className={styles.about}>
        <h1 className={styles.about__title}> О нас</h1>
        <h2 className={styles.about__subtitle}> ЧЕХОВ – это современный фитнес-клуб в г. Октябрьский . Спортивный зал оснащен современными тренажерами и качественным оборудованием для занятий единоборствами, атлетикой, любыми видами аэробики и ЛФК. Здесь вы найдёте просторные зоны для тренировок, эффективные групповые программы и профессиональный тренерский состав. </h2>
        {/* <div className={styles.about__icons}>
            <img src={yoga} alt="icon" />
            <img src={yoga} alt="icon" />
            <img src={yoga} alt="icon" />
            <img src={yoga} alt="icon" />
        </div> */}
    
    <div className={styles.programs}>
        <div className={styles.programs__container}>
            {programs.map((program,index)=>
            <ProgramsCard key = {index} photo = {program.photo} title = {program.title} description = {program.description} />
            )}
        </div>
        </div>
    </div>
  )
}

export default About