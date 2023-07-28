import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { topics as mockTopics } from "@/mock/topics"; 
import Image from 'next/image';
import styles from '@/styles/LessonDetail.module.scss';
import Link from 'next/link';

// import icon
import arrowBottom from  "@/assets/iconsProject/arrowBottom.svg"

const LessonDetail = () => {
    const [topic, setTopic] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const foundTopic = mockTopics.find(topic => topic.id === Number(id));
        setTopic(foundTopic);
    }, [id]);

    const handleNextLesson = () => {
        const currentId = Number(id);
        const nextId = currentId + 1;
        const nextTopic = mockTopics.find(topic => topic.id === nextId);
        
        if (nextTopic) {
            router.push({
                pathname: '/LessonDetail',
                query: { id: nextId }
            }, undefined, { scroll: false });
        } else {
            console.log('No next lesson');
        }
    }

    const handlePreviousLesson = () => {
        const currentId = Number(id);
        const previousId = currentId - 1;
        const previousTopic = mockTopics.find(topic => topic.id === previousId);

        if (previousTopic) {
            router.push({
                pathname: '/LessonDetail',
                query: { id: previousId }
            }, undefined, { scroll: false });
        } else {
            console.log('No previous lesson');
        }
    }

    if (!topic) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.detailContainer}>
            <div className={styles.lessonBackContainer}>
                <Link href="/funAcademy">
                    <Image className={styles.backArrow} src={arrowBottom} alt="Back to funAcademy" />
                </Link>
                <div className={styles.lessonNumberOuterContainer}>
                    <div className={styles.lessonNumberContainer}>
                        <h3 className={styles.lessonNumber}>{topic.lessonNumber}</h3>
                    </div>
                </div>
                <div className={styles.spacer}></div>
            </div>
            <h2 className={styles.title}>{topic.title}</h2>
            <div className={styles.videoContainer}>
            <iframe 
                className={styles.videoNeo}
                src={topic.videoURL} 
                title={topic.title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                sandbox="allow-scripts allow-same-origin"
            >
            </iframe>
            </div>
            <div className={styles.descriptionContainer}>
                <p>{topic.description}</p>
            </div>
            <p className={styles.progress}>Progress: {topic.progress}</p>
            <div className={styles.ButtonPrevNext}>
                <button className={styles.buttonLesson} onClick={handlePreviousLesson}>Previous Lesson</button>
                <button className={styles.buttonLesson} onClick={handleNextLesson}>Next Lesson</button>
            </div>
        </div>
    );
};

export default LessonDetail;



