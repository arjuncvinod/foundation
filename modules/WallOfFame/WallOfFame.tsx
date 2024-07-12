import React from 'react'
import styles from "./wall.module.css"
import Image from 'next/image'
import row1 from "../../assets/WallOfFame/learners-row1.png"
import row2 from "../../assets/WallOfFame/learners-row2.png"
import {Learners1,Learners2} from '@/components/Learners/Learners'
export default function WallOfFame() {
  return (
    <section id={styles.wallOfFame}>
        <div className={styles.wallOfFameContainer}>
            <div className={styles.wallLeft}>
                <h1>Wall Of <span>Fame</span></h1>
            </div>
            <div className={styles.wallRight}>
                <div className={styles.wallImgContainer}>
                    <Learners1 />
                    <Learners2 />
                    
                    <h2>Be a part of community learners</h2>
                </div>
            </div>
        </div>
    </section>
  )
}
