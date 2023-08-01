import styles from "./TeamModal.module.scss";
import React from 'react';
import Image from 'next/image';

import close from  "@/assets/iconsProject/close.svg"

const TeamModal = ({isOpen, handleClose, children, imageUrl, name, role, description, techStack, contacts}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <button className={styles.closeButton} onClick={handleClose}>
        <Image src={close} alt="Close Button" width={100} height={100}/>
        
        </button>
        <div className={styles.topContainer}>
          <div className={styles.textContainer}>
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{description}</p>
          </div>
          <div className={styles.imageContainer}>
              <Image src={imageUrl} alt="Member image" width={150} height={150}/>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.techStack}>
            <h3>Tech Stack:</h3>
            <ul>
              {techStack && techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.contacts}>
            <h3>Contacts:</h3>
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
  );
}

export default TeamModal;




