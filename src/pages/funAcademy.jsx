import React from 'react';
import styles from '@/styles/FunAcademy.module.scss';

const FunAcademy = () => {
    return (
        <div className={styles.container}>
            <div className={styles.outerCircle}>
                <div className={styles.innerCircle}>
                    <img src='/assets/icon_project/school.svg' alt='Logo Fun Academy' className={styles.logo}/>
                </div>
            </div>
        </div>
    );
}

export default FunAcademy;
