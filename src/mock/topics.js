const topics = [
    {
      id: 1,
      title: 'What is Bitcoin?',
      lessonNumber: 1,
      progress: '35%',
      videoURL: 'https://example.com/video1',
      description: 'This lesson will introduce you to Bitcoin and explain its origin, purpose, and functionality.',
    },
    {
      id: 2,
      title: 'Introduction to Ethereum',
      lessonNumber: 2,
      progress: '50%',
      videoURL: 'https://example.com/video2',
      description: 'In this lesson, we will explore Ethereum, its creation, and how it differs from Bitcoin.',
    },
    {
      id: 3,
      title: 'Understanding Blockchain',
      lessonNumber: 3,
      progress: '25%',
      videoURL: 'https://example.com/video3',
      description: 'Blockchain is the underlying technology for many cryptocurrencies. This lesson will cover its design and uses.',
    },
    {
      id: 4,
      title: 'How Cryptocurrencies Work',
      lessonNumber: 4,
      progress: '60%',
      videoURL: 'https://example.com/video4',
      description: 'This lesson will delve into the mechanics of cryptocurrencies and how transactions are validated.',
    },
    {
        id: 5,
        title: 'Cryptocurrency Mining Explained',
        lessonNumber: 5,
        progress: '40%',
        videoURL: 'https://example.com/video5',
        description: 'Cryptocurrency mining is a complex process. This lesson will explain it in an easy to understand manner.',
    },
    {
        id: 6,
        title: 'Crypto Wallets and Security',
        lessonNumber: 6,
        progress: '20%',
        videoURL: 'https://example.com/video6',
        description: 'Security is paramount in crypto. This lesson covers how to secure your cryptocurrencies.',
    },
    {
        id: 7,
        title: 'Investing in Cryptocurrencies',
        lessonNumber: 7,
        progress: '70%',
        videoURL: 'https://example.com/video7',
        description: 'This lesson provides an overview of investment strategies and considerations when dealing with cryptocurrencies.',
    },
  ];
  
  const topicsJSON = JSON.stringify(topics);
localStorage.setItem('topics', topicsJSON);