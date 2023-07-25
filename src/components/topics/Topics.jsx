import React, { useEffect, useState } from 'react';
import styles from './topics.module.scss';
import Image from 'next/image';
import fast_video from "@/assets/iconsProject/fast_video.svg";
import { useRouter } from 'next/router';

const Topics = () => {
    const [topics, setTopics] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const Topics = localStorage.getItem('topics');
        const topicsFromLocalStorage = JSON.parse(Topics);

        setTopics(topicsFromLocalStorage);
    }, []);

    return (
        <>
        <div className={styles.cardArgomentContainer}>
            {topics && topics.map((topic) => (
                <div className={styles.cardArgoment} key={topic.id}>
                    <div className={styles.lessonArgoment}>
                        <h2 className={styles.topic}>{topic.title}</h2>
                        <p className={styles.lessonCount}>{topic.lessonNumber} lezioni</p>
                    </div>
                    <div className={styles.progressArgoment}>
                        <p className={styles.progressPercent}>{topic.progress}</p>
                        <div onClick={() => router.push('/LessonDetail')}>
                            <Image src={fast_video} alt="Show Argoment" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Topics;
