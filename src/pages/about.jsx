import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "@/styles/About.module.scss";
import Image from "next/image";
import TeamMember from "@/components/teamMember/TeamMember";
import { teamData } from "@/mock/teamData";


// import icon 
import figma from  "@/assets/iconsProject/iconAbout/figma.svg"
import react from  "@/assets/iconsProject/iconAbout/react.svg"
import JS from  "@/assets/iconsProject/iconAbout/javascript.svg"
import NPM from  "@/assets/iconsProject/iconAbout/npm.svg"
import Next from  "@/assets/iconsProject/iconAbout/nextjs-icon-svgrepo-com.svg"
import SASS from  "@/assets/iconsProject/iconAbout/sass.svg"
import github from  "@/assets/iconsProject/iconAbout/icons8-github.svg"
import firebase from  "@/assets/iconsProject/iconAbout/firebase.svg"
import peppe from "@/assets/iconsProject/teamImg/peppe.svg"
import andy from "@/assets/iconsProject/teamImg/andy.svg"
import stefano from "@/assets/iconsProject/teamImg/stefano.svg"
import mirko from "@/assets/iconsProject/teamImg/mirko.svg"
import davide from "@/assets/iconsProject/teamImg/davide.svg"

export default function About() {
  return (
    <DefaultLayout>
    <div className={styles.outerContainer}>
        <div className={styles.container}>
            <h2 className={styles.title}>About Us</h2>
            <p className={styles.info}>
                Fun-Trade è un innovativo wallet di criptovalute sviluppato da un appassionato team di sviluppatori front-end. Usando la tecnologia next.js, stiamo rivoluzionando il modo in cui le persone interagiscono con le criptovalute.
            </p>
            <h2 className={styles.subtitle}>Il nostro processo</h2>
            <p className={styles.process}>
                Seguiamo un processo metodico che inizia con l'analisi dell'UX, passa attraverso la progettazione della UI e culmina con la scrittura del codice.
            </p>

            <h2 className={styles.subtitle2}>Strumenti Utilizzati:</h2>
            <div className={styles.iconContainer}>
                <div className={styles.imageContainer}>
                    <Image src={figma} alt="Figma" width={40} height={40} />
                    <p className={styles.pIcon}>figma</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={react} alt="React" width={40} height={40} />
                    <p className={styles.pIcon}>React</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={JS} alt="JavaScript" width={40} height={40} />
                    <p className={styles.pIcon}>JavaScript</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={NPM} alt="NPM" width={40} height={40} />
                    <p className={styles.pIcon}>NPM</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={firebase} alt="Firebase" width={40} height={40} />
                    <p className={styles.pIcon}>Firebase</p>
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
                    <Image src={github} alt="GitHub" width={40} height={40} />
                    <p className={styles.pIcon}>Github</p>
                </div>
            </div>
        </div>
        <div className={styles.teamContainer}>
        {teamData.map((member, index) => (
    <TeamMember 
        key={index}
        member={member} 
    />
))}
        </div>
    </div>
    </DefaultLayout>
  );
}
