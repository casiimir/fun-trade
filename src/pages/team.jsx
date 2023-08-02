import React from "react";
import Image from "next/image";
import DefaultLayout from "../layouts/DefaultLayout";
import styles from "@/styles/teamPage.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

import { teamData } from "@/mock/teamData.js";

import peppe from "@/assets/iconsProject/teamImg/peppe.svg";
import andy from "@/assets/iconsProject/teamImg/andy.svg";
import stefano from "@/assets/iconsProject/teamImg/stefano.svg";
import mirko from "@/assets/iconsProject/teamImg/mirko.svg";
import davide from "@/assets/iconsProject/teamImg/davide.svg";
import arrowBottom from "@/assets/iconsProject/arrowBottom.svg";

const imageMap = {
  Giuseppe: peppe,
  Andy: andy,
  Stefano: stefano,
  Mirko: mirko,
  Davide: davide,
};

const TeamPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const member = teamData.find((member) => member.name === name);
  if (!member) {
    return <p>Membro del team non trovato.</p>;
  }

  const { role, description, techStack, contacts } = member;
  const imageUrl = imageMap[name];

  return (
    <DefaultLayout>
      <div className={styles.teamPage}>
        <div className={styles.container}>
          <div className={styles.backArrow}>
            <Link href="/about">
              <Image src={arrowBottom} alt="Back to funAcademy" width="70" height="70" />
            </Link>
          </div>
          <div className={styles.topContainer}>
            <div className={styles.imageProfile}>
              <Image src={imageUrl} alt="Member image" width={300} height={300} />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>
                {name} {member.surname}
              </h2>
              <p>
                <strong> {role}</strong>{" "}
              </p>
              <div className={styles.description}>
                <p>{description}</p>
              </div>
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
              {contacts && (
                <>
                  <div className={styles.contacts__list}>
                    <h3 className={styles.contacts__list__title}>Contacts</h3>
                    <p>
                      <strong>LinkedIn</strong>
                      <a href={contacts.linkedin}>{contacts.linkedin}</a>
                    </p>
                    <p>
                      <strong>GitHub</strong>
                      <a href={contacts.github}>{contacts.github}</a>
                    </p>
                    <p>
                      <strong>Email</strong>
                      <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                    </p>
                    <p>
                      <strong>Telefono</strong>
                      {contacts.phone}
                    </p>
                  </div>
                  <div className={styles.contacts__cv}>
                    <a href={contacts.cv} className={styles.button}>
                      Scarica CV
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TeamPage;
