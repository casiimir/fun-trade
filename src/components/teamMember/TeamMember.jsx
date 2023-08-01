import React, { useState } from 'react';
import Image from 'next/image';

import styles from './TeamMember.module.scss';

import TeamModal from '../teamModal';
import peppe from "@/assets/iconsProject/teamImg/peppe.svg"
import andy from "@/assets/iconsProject/teamImg/andy.svg"
import stefano from "@/assets/iconsProject/teamImg/stefano.svg"
import mirko from "@/assets/iconsProject/teamImg/mirko.svg"
import davide from "@/assets/iconsProject/teamImg/davide.svg"

const imageMap = {
  "Giuseppe": peppe,
  "Andy": andy,
  "Stefano": stefano,
  "Mirko": mirko,
  "Davide": davide
}

export default function TeamMember({ member }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const memberImage = imageMap[member.name];
  
    return (
      <div className={styles.teamMemberContainer}>
        <div className={styles.imageContainer}>
          <Image 
            src={memberImage}
            alt={member.name}
            layout="fill" 
            objectFit="cover"
            className={styles.image} 
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <div className={styles.textContainer}>
            <h2 className={styles.name}>{member.name}</h2>
            <p className={styles.description}>{member.description}</p>
        </div>
        
        <TeamModal 
          isOpen={isModalOpen} 
          handleClose={() => setIsModalOpen(false)} 
          imageUrl={memberImage}
          name={member.name}
          role={member.role}
          description={member.details}
          techStack={member.techStack}
          contacts={member.contacts}
        />
      </div>
    );
}
