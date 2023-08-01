import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "@/styles/About.module.scss";
import Image from "next/image";
import TeamMember from "@/components/teamMember/TeamMember";
import { teamData } from "@/mock/teamData";

// import icon
import figma from "@/assets/iconsProject/iconAbout/figma.svg";
import react from "@/assets/iconsProject/iconAbout/react.svg";
import JS from "@/assets/iconsProject/iconAbout/javascript.svg";
import NPM from "@/assets/iconsProject/iconAbout/npm.svg";
import Next from "@/assets/iconsProject/iconAbout/nextjs-icon-svgrepo-com.svg";
import SASS from "@/assets/iconsProject/iconAbout/sass.svg";
import github from "@/assets/iconsProject/iconAbout/icons8-github.svg";
import firebase from "@/assets/iconsProject/iconAbout/firebase.svg";

export default function About() {
  return (
    <DefaultLayout>
      <div className={styles.outerContainer}>
        <h2 className={styles.title1}>Chi siamo</h2>
        <div className={styles.teamContainer}>
          {teamData.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.info}>
            Fun Trade è un'applicazione web che consente agli utenti di monitorare,
            analizzare e seguire il mercato delle criptovalute. La piattaforma è stata
            creata con un'interfaccia utente intuitiva, moderna e responsive.
            L'applicazione è stata sviluppata utilizzando JavaScript con i framework
            React.js e Next.js per garantire una migliore gestione del routing e del
            rendering lato server e SASS per lo styling delle pagine e per facilitare la
            creazione di fogli di stile modulari. È stato utilizzato Firebase per la
            gestione del database in tempo reale per memorizzare e aggiornare i dati sugli
            utenti. Infine il team ha utilizzato Git come sistema di controllo versione
            per collaborare in modo efficiente e gestire il codice sorgente.
          </p>
          <h2 className={styles.subtitle}>Il nostro processo</h2>
          <p className={styles.process}>
            Seguiamo un processo metodico che inizia con l'analisi dell'UX, passa
            attraverso la progettazione della UI e culmina con la scrittura del codice.
          </p>

          <h2 className={styles.subtitle2}>Stack e strumenti utilizzati</h2>
          <div className={styles.iconContainer}>
            <div className={styles.imageContainer}>
              <Image src={figma} alt="Figma" width={40} height={40} />
              <p className={styles.pIcon}>Figma</p>
            </div>
            <div className={styles.imageContainer}>
              <Image src={JS} alt="JavaScript" width={40} height={40} />
              <p className={styles.pIcon}>JavaScript</p>
            </div>
            <div className={styles.imageContainer}>
              <Image src={react} alt="React" width={40} height={40} />
              <p className={styles.pIcon}>React.js</p>
            </div>
            <div className={styles.imageContainer}>
              <Image src={Next} alt="Next" width={40} height={40} />
              <p className={styles.pIcon}>Next.js</p>
            </div>
            <div className={styles.imageContainer}>
              <Image src={SASS} alt="SASS" width={40} height={40} />
              <p className={styles.pIcon}>Sass</p>
            </div>
            <div className={styles.imageContainer}>
              <Image src={firebase} alt="Firebase" width={40} height={40} />
              <p className={styles.pIcon}>Firebase</p>
            </div>
            <div className={styles.imageContainer}>
              <Image src={NPM} alt="NPM" width={40} height={40} />
              <p className={styles.pIcon}>NPM</p>
            </div>
            <div className={styles.imageContainer}>
              <Image src={github} alt="GitHub" width={40} height={40} />
              <p className={styles.pIcon}>Github</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
