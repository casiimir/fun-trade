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
            <div className={styles.lessonContainer}>
                <div className={styles.lessonBackContainer}>
                <Link href="/funAcademy">
                    <Image className={styles.backArrow} src={arrowBottom} alt="Back to funAcademy" />
                </Link>
                    <div className={styles.lessonNumberAndTitleContainer}>
                        <div className={styles.lessonNumberOuterContainer}>
                            <div className={styles.lessonNumberContainer}>
                            <h3 className={styles.lessonNumber}>{topic.lessonNumber}</h3>
                        </div>
                    </div>
                    <h2 className={styles.title}>{topic.title}</h2>
                </div>
                    <div className={styles.spacer}></div>
            </div>
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
                <h3 className={styles.TitleDescription}>Description:</h3>
                <p>{topic.description}</p>
            </div>
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBarBackground}>
                        <div className={styles.progressBar} style={{width: topic.progress}}>
            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ButtonPrevNext}>
            <button className={styles.buttonLesson} onClick={handlePreviousLesson}>Previous Lesson</button>
            <button className={styles.buttonLesson} onClick={handleNextLesson}>Next Lesson</button>
        </div>
        <div className={styles.desktopPreview}>
            {mockTopics.map((previewTopic) => (
                <div key={previewTopic.id} className={styles.previewVideoContainer} onClick={() => setTopic(previewTopic)}>
                    <iframe 
                        className={styles.videoPreview}
                        src={previewTopic.videoURL} 
                        title={previewTopic.title} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin"
                    />
                        <div className={styles.flexContainer}>
                            <h3 className={styles.numberLesson}>{previewTopic.numberLesson}</h3>
                            <div className={styles.centeredTitle}>
                            <h3 className={styles.previewTitle}>{previewTopic.title}</h3>
                        </div>
                    </div>
                    <p className={styles.descriptionStyle}>{previewTopic.description}</p>
                </div>
            ))}
        </div>
        </div>
);
};

export default LessonDetail;



