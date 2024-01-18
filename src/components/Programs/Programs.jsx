import React from 'react'
import styles from './Programs.module.scss'
import ProgramsCard from '../ProgramsCard/ProgramsCard'
import programs from '../../data/programs.json'

const Programs = () => {
  return (
    <div className={styles.programs}>
        <div className={styles.programs__container}>
            {programs.map((program,index)=>
            <ProgramsCard key = {index} photo = {program.photo} title = {program.title} description = {program.description} />
            )}
        </div>
        </div>
  )
}

export default Programs