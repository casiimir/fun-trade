import React, { useState } from 'react';
import Image from 'next/image';

import styles from './TeamMember.module.scss';

import TeamModal from '../teamModal';

function TeamMember({ imageUrl, name, description, details }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
      <div className={styles.teamMemberContainer}>
        <div className={styles.imageContainer}>
          <Image 
            src={imageUrl}
            alt={name}
            layout="fill" 
            objectFit="cover"
            className={styles.image} 
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <div className={styles.textContainer}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
        </div>
        
        <TeamModal 
          isOpen={isModalOpen} 
          handleClose={() => setIsModalOpen(false)} 
          imageUrl={imageUrl}
        >
          <h2 className={styles.name}>Dettagli di {name}</h2>
          <p className={styles.description}>{details}</p>
        </TeamModal>
      </div>
    );
}


export default TeamMember;
