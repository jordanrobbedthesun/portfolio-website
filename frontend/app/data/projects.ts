export const projects = [
    {
        title: 'FinScope',
        date: 'Fall 2025',
        id: 'finscope',
        stack: ['React/Vite', 'Python', 'Node.js', 'Supabase', 'MongoDB', 'Google ADK'],
        github: 'https://github.com/jordanrobbedthesun/FinScope',
        bullets: [
            'FinScope is a multi-agent financial intelligence dashboard powered by Google ADK',
            'Fetching live market data, it analyzes correlations in your portfolio, detects anomalies, and explains insights',
            'Placed 2nd for OneEthos Company Challenge'
        ],
        images: [
            '/projects/finscope_1.png',
            '/projects/finscope_2.png',
        ],
    }, 
    {
        title: 'Neo-Eden',
        date: 'Spring 2025',
        id: 'neo-eden',
        stack: ['JavaScript', 'MongoDB', 'React Native', 'Expo', 'Google Gemini AI'],
        github: 'https://github.com/jordanrobbedthesun/neo-eden',
        bullets: [
            'Designed and implemented a mobile platform that connects users to community resources using AI-powered analysis and location-based services.',
            'Developed real-time resource maps, location filters, AI-driven image recognition, and user-submitted content powered by Gemini AI.',
            'Built secure authentication, resource categorization, and a dynamic news feed using Express and MongoDB.',
        ],
        images: [
            '/projects/neoeden_1.jpg',
            '/projects/neoeden_2.jpg',
            '/projects/neoeden_3.jpg',
            '/projects/neoeden_4.jpg',
        ],
    },
    {
        title: 'iMPOSTURE',
        date: 'Fall 2025',
        id: 'imposture',
        stack: ['Python', 'Google MediaPipe', 'YOLOv11', 'Google Cloud ADK'],
        github: 'https://github.com/jordanrobbedthesun/imposture',
        bullets: [
            'Developed a real-time desktop app in a team of 4 that monitors posture and provides recommendations',
            'Built computer vision pipeline utilizing Google MediaPipe and YOLOv11 for pose and phone detection',
            'Implemented Google ADK to create 3 agents that analyze posture, detect phones, and monitor noise',
            'Integrated Google Cloud Logging for real-time data streaming recording over 38,000 rows of user data',
            'Achieved Top 11 overall and 2nd place in Google Cloud ADK Featured Challenge among 1400+ teams',
            'Featured on News at FGCUs AI Day: https://www.wgcu.org/shows/southwest-florida-in-focus/clip/fgcu-students-using-ai-in-new-business-concepts',
        ],
        images: [
            '/projects/imposture_1.jpg',
            '/projects/imposture_2.jpg',
            '/projects/imposture_3.jpg',
            '/projects/imposture_4.jpg',
        ],
    },
    {
        title: 'Portfolio Website',
        date: 'Fall 2024 – Present',
        stack: ['React', 'Next.js', 'Node.js', 'Express'],
        github: 'https://github.com/jordanrobbedthesun/portfolio-website',
        bullets: [
            'Built and deployed personal portfolio to showcase my software engineering journey and projects.',
            'Integrated RESTful APIs and responsive design using React, Express, and Tailwind.',
        ],
    },
    {
        title: 'WealthWise AI',
        date: 'Fall 2024',
        id: 'wealthwiseai',
        stack: ['JavaScript', 'React Native', 'Expo', 'SQLite3', 'OpenAI API'],
        github: 'https://github.com/jordanrobbedthesun/WealthWise_AI',
        bullets: [
            'AI-powered mobile budgeting assistant built at ShellHacks 2024; selected as Top 20 project.',
            'Implemented Yahoo Finance chatbot powered by OpenAI API to answer personal finance questions and provide tailored advice.',
            'Visualized budgets using charts, and tracked monthly income/expenses with a clean mobile interface.',
        ],
        images: [
            '/projects/wealthwiseai_2.png',
            '/projects/wealthwiseai_1.png',
            ],
    },
    {
        title: 'RoundReady',
        date: 'Fall 2023 – Present',
        id: 'roundready',
        stack: ['JavaScript', 'SQLite', 'Expo', 'React Native'],
        bullets: [
            'Mobile app built to empower Resident Assistants with real-time emergency response workflows, quick contact tools, facility logs, and custom quick notes.',
            'Engineered full backend using SQLite and JavaScript, with local caching and offline support for housing rosters, quick links, and notifications.',
            'Won funding through FGCU’s Runway Program and registered the project as a Florida LLC.',
        ],
        images: [
            '/projects/roundready_2.jpg',
            '/projects/roundready_1.jpg',
        ],
    },
    {
        title: 'Evently',
        date: 'Fall 2023',
        id: 'evently',
        stack: ['C++', 'Dear ImGUI'],
        github: 'https://github.com/jordanrobbedthesun/evently',
        bullets: [
            'Built a desktop calendar and event management system in C++ with an interactive Dear ImGUI interface.',
            'Created a fully modular class architecture with 11 attributes per event including title, time, and category.',
            'Supported features such as event searching, editing, deletion, and infinite expansion.',
        ],
        images: [
            '/projects/evently_1.png',
            '/projects/evently_2.png',
        ],
    },
    {
        title: 'PassPassProtect',
        date: 'Fall 2023',
        id: 'passpassprotect',
        stack: ['C#'],
        github: 'https://github.com/jordanrobbedthesun/PassPassProtect',
        bullets: [
            'Solo honors project for secure password management with full CRUD support.',
            'Developed object-oriented entry and manager classes with GUI integration for managing login info.',
        ],
        images: [
            '/projects/passpassprotect_1.png',
        ],
    },
]
