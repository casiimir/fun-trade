import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { topics as mockTopics } from "@/mock/topics"; 
import Image from 'next/image';
import styles from '@/styles/LessonDetail.module.scss';
import Link from 'next/link';

// import icon
import arrow from  "@/assets/iconsProject/arrow.svg"


const LessonDetail = () => {
    const [topic, setTopic] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const foundTopic = mockTopics.find(topic => topic.id === Number(id));
        setTopic(foundTopic);
    }, [id]);

    if (!topic) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.detailContainer}>
        <div className={styles.lessonBackContainer}>
    <Link href="/funAcademy">
            <Image className={styles.backArrow} src={arrow} alt="Back to funAcademy" />
    </Link>
    <h3 className={styles.lessonNumber}>{topic.lessonNumber}</h3>
</div>
        <h1 className={styles.title}>{topic.title}</h1>
        <video className={styles.videoContainer} controls src={topic.videoURL}>
            Your browser does not support the video tag.
        </video>
        <div className={styles.descriptionContainer}>
            <p>{topic.description}</p>
        </div>
        <p className={styles.progress}>Progress: {topic.progress}</p>
    </div>
    
    );
};

export default LessonDetail;

