import React from 'react';
import Image from 'next/image';
import styles from '@/styles/FunAcademy.module.scss';

import school from "@/assets/iconsProject/school.svg";
import search from "@/assets/iconsProject/search.svg";
import hamburger from "@/assets/iconsProject/hamburger.svg";

import Topics from '@/components/topics';
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
            <Topics />
        </>
    );
}
