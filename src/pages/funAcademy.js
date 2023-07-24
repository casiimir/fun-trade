import React from 'react';
import Image from 'next/image';
import styles from '@/styles/FunAcademy.module.scss';


import school from "@/assets/iconsProject/school.svg";
import search from "@/assets/iconsProject/search.svg";
import hamburger from "@/assets/iconsProject/hamburger.svg";

export default function FunAcademy() {
    return (
        <>
        <div className={styles.container}>
            <button className={styles.hamburgerButton}>
                <Image src={hamburger} alt="Menu" width={25} height={25} />
            </button>
            <div className={styles.outerCircle}>
                <div className={styles.innerCircle}>
                    <Image src={school} alt="School logo" width={35} height={35} />
                </div>
            </div>
            <button className={styles.searchButton}>
                <Image src={search} alt="Search" width={25} height={25} />
            </button>
        </div>
        <div className={styles.container1}>
                <button className={styles.neumorphicButton}>
                    <h2 className={styles.heading1}>FUNACADEMY</h2>
                </button>
            </div>
            <h2 className={styles.heading2} >CONTINUA A GUARDARE:</h2>
            <div className={styles.videoContainer}>
                <button className={styles.video}>play</button>
                <button className={styles.video}>play</button>
                <button className={styles.video}>play</button>
                <button className={styles.video}>play</button>
            </div>
            <h2 className={styles.heading2} >LISTA ARGOMENTI:</h2>
            <div className={styles.cardArgoment}>
                <div className={styles.lessonArgoment}>
                    <h2 className={styles.topic}>Argomento 1</h2>
                    <p className={styles.lessonCount}>10 lezioni</p>
                </div>
                        <div className={styles.progressArgoment}>
                            <p className={styles.progressPercent}>35%</p>
                            <Image src={school} alt="Progress icon" width={25} height={25} />
                </div>
            </div>
            <div className={styles.cardArgoment}>
                <div className={styles.lessonArgoment}>
                    <h2 className={styles.topic}>Argomento 2</h2>
                    <p className={styles.lessonCount}>4 lezioni</p>
                </div>
                        <div className={styles.progressArgoment}>
                            <p className={styles.progressPercent}>25%</p>
                            <Image src={school} alt="Progress icon" width={25} height={25} />
                </div>
            </div>
            <div className={styles.cardArgoment}>
                <div className={styles.lessonArgoment}>
                    <h2 className={styles.topic}>Argomento 3</h2>
                    <p className={styles.lessonCount}>23 lezioni</p>
                </div>
                        <div className={styles.progressArgoment}>
                            <p className={styles.progressPercent}>67%</p>
                            <Image src={school} alt="Progress icon" width={25} height={25} />
                </div>
            </div>
            <div className={styles.cardArgoment}>
                <div className={styles.lessonArgoment}>
                    <h2 className={styles.topic}>Argomento 4</h2>
                    <p className={styles.lessonCount}>6 lezioni</p>
                </div>
                        <div className={styles.progressArgoment}>
                            <p className={styles.progressPercent}>99%</p>
                            <Image src={school} alt="Progress icon" width={25} height={25} />
                </div>
            </div>

        </>
    );
}
