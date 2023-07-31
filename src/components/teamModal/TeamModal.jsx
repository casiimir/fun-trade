import styles from "./TeamModal.module.scss";
import React from 'react';
import Image from 'next/image';

const TeamModal = ({isOpen, handleClose, children, imageUrl}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWindow}>
        <button onClick={handleClose}>Close</button>
        <Image src={imageUrl} alt="Member image" width={150} height={150}/>
        {children}
      </div>
    </div>
  );
}

export default TeamModal;

