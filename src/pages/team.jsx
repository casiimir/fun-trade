import React from 'react';
import Image from 'next/image';
import DefaultLayout from '../layouts/DefaultLayout';
import styles from '@/styles/teamPage.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { teamData } from "@/mock/teamData.js";

import peppe from "@/assets/iconsProject/teamImg/peppe.svg"
import andy from "@/assets/iconsProject/teamImg/andy.svg"
import stefano from "@/assets/iconsProject/teamImg/stefano.svg"
import mirko from "@/assets/iconsProject/teamImg/mirko.svg"
import davide from "@/assets/iconsProject/teamImg/davide.svg"
import arrowBottom from  "@/assets/iconsProject/arrowBottom.svg"

const imageMap = {
  "Giuseppe": peppe,
  "Andy": andy,
  "Stefano": stefano,
  "Mirko": mirko,
  "Davide": davide
}

const TeamPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const member = teamData.find(member => member.name === name);
  if (!member) {
    return <p>Membro del team non trovato.</p>;
  }

  const { role, description, techStack, contacts } = member;
  const imageUrl = imageMap[name];

  return (
    <DefaultLayout>
      <div className={styles.teamPage}>
        <Link href="/about">
            <Image className={styles.backArrow} src={arrowBottom} alt="Back to funAcademy" />
        </Link>
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.image}>
                    <Image src={imageUrl} alt="Member image" width={150} height={150}/>
                </div>
                <div className={styles.textContainer}>
                  <h2 className={styles.title}>{name}</h2>
                  <p>{role}</p>
                  <p>{description}</p>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.techStack}>
                  {/* <h3 className={styles.title}>Tech Stack:</h3>
                  <ul>
                    {techStack && techStack.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul> */}
                </div>
                <div className={styles.contacts}>
                  <h3 className={styles.title}>Contacts:</h3>
                  {contacts && (
                    <>
                      <p>LinkedIn: <a href={contacts.linkedin}>{contacts.linkedin}</a></p>
                      <p>GitHub: <a href={contacts.github}>{contacts.github}</a></p>
                      <p>Email: <a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
                      <p>Telefono: {contacts.phone}</p>
                    </>
                  )}
                </div>
            </div>
        </div>
      </div>
    </DefaultLayout>
);
}

export default TeamPage;



