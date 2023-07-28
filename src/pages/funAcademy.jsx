import React from "react";
import Image from "next/image";
import DefaultLayout from "@/layouts/DefaultLayout";
import styles from "@/styles/FunAcademy.module.scss";
import Link from "next/link";

// import icon

import Topics from "@/components/topics";
import { topics as mockTopics } from "@/mock/topics";

export default function FunAcademy() {
	return (
		<>
			<DefaultLayout>
				<div className={styles.FunAcademy}>
					<div className={styles.FunAcademy__topbar}>
						<h2 className={styles.FunAcademy__topbar__heading2}>FunAcademy</h2>
						<p className={styles.FunAcademy__topbar__p}>continua a guardare</p>
						<div className={styles.FunAcademy__topbar__videoContainer}>
							{mockTopics.map((topic) => (
								<div
									key={topic.id}
									className={styles.FunAcademy__topbar__videoContainer__card}
								>
									<iframe
										className={
											styles.FunAcademy__topbar__videoContainer__card__video
										}
										src={topic.videoURL}
										title={topic.title}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										sandbox="allow-scripts allow-same-origin"
									></iframe>
								</div>
							))}
						</div>
					</div>
					<div className={styles.FunAcademy__lesson}>
						<h2 className={styles.heading2}>LISTA ARGOMENTI:</h2>
						<Topics />
					</div>
				</div>
			</DefaultLayout>
		</>
	);
}
