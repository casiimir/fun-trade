import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './TeamMember.module.scss';
import peppe from "@/assets/iconsProject/teamImg/peppe.svg";
import andy from "@/assets/iconsProject/teamImg/andy.svg";
import stefano from "@/assets/iconsProject/teamImg/stefano.svg";
import mirko from "@/assets/iconsProject/teamImg/mirko.svg";
import davide from "@/assets/iconsProject/teamImg/davide.svg";

const imageMap = {
  "Giuseppe": peppe,
  "Andy": andy,
  "Stefano": stefano,
  "Mirko": mirko,
  "Davide": davide
};

export default function TeamMember({ member }) {
  const memberImage = imageMap[member.name];

  return (
    <div className={styles.teamMemberContainer}>
      <div className={styles.imageContainer}>
      <Link href={`/team?name=${member.name}`}>
      <Image 
        src={memberImage}
        alt={member.name}
        layout="fill" 
        objectFit="cover"
        className={styles.image} 
      />
    </Link>


      </div>

      <div className={styles.textContainer}>
        <h2 className={styles.name}>{member.name}</h2>
        <p className={styles.description}>{member.description}</p>
      </div>
    </div>
  );
}

