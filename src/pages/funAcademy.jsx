import React from "react";
import Image from "next/image";
import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "@/styles/FunAcademy.module.scss";
import Link from "next/link";

// import icon
import school from "@/assets/iconsProject/school.svg";
import search from "@/assets/iconsProject/search.svg";
import hamburger from "@/assets/iconsProject/hamburger.svg";

import Topics from "@/components/topics";
import { topics as mockTopics } from "@/mock/topics";

export default function FunAcademy() {
  return (
    <>
      <DefaultLayout></DefaultLayout>

      <h2 className={styles.heading2}>CONTINUA A GUARDARE:</h2>
      <div className={styles.videoContainer}>
        {mockTopics.map((topic) => (
          <div key={topic.id}>
            <iframe
              className={styles.videoNeo}
              src={topic.videoURL}
              title={topic.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        ))}
      </div>
      <h2 className={styles.heading2}>LISTA ARGOMENTI:</h2>
      <Topics />
    </>
  );
}
