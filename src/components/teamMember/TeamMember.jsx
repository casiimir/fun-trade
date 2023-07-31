import React, { useState } from 'react';
import Image from 'next/image';

import styles from './TeamMember.module.scss';


import TeamModal from '../teamModal';

function TeamMember({ imageUrl, name, description, details }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    return (
      <div>
        <Image 
          src={imageUrl}
          alt={name}
          width={150} 
          height={150} 
          onClick={() => setIsModalOpen(true)}
        />
        <h2>{name}</h2>
        <p>{description}</p>
        
        <TeamModal 
          isOpen={isModalOpen} 
          handleClose={() => setIsModalOpen(false)} 
          imageUrl={imageUrl}
        >
          <h2>Dettagli di {name}</h2>
          <p>{details}</p>
        </TeamModal>
      </div>
    );
  }

export default TeamMember