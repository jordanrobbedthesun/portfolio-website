import React, {JSX} from 'react'
import { scrollToSection } from '../utils/scrollToSection'

export const involvements: {
    title: string | JSX.Element
    place: string
    date: string
    description: string | JSX.Element
    category: 'current' | 'previous' | 'upcoming'
    link?: string
    linkType?: 'anchor' | 'external'
    images?: string[]
}[] = [
    {
        title: 'Intermediate Technical Interview Prep (TIP 102) – Advanced Certificate',
        place: 'CodePath',
        date: 'Fall 2025',
        description:
            'Completed CodePath TIP 102 with Advanced Certificate.',
        category: 'previous',
    },
    {
        title: 'Co-Lead Hackathon Coordinator',
        place: 'Computer Science & Software Engineering Club (CSSEC) EagleHacks',
        date: 'Spring 2024 – Present',
        description:
            'Coordinated and hosted two successful hackathons with 50–60 student participants and support from local sponsors including Arthrex, Spigot, Kingland, and Hertz. Managed event logistics, prize distribution ($1,700+), workshops, and judging improvements inspired by insights from major hackathons like ShellHacks. Enhanced student engagement and strengthened community partnerships.',
        category: 'current',
        images: [
            '/involvements/eaglehacks_1.jpg',
            '/involvements/eaglehacks_2.jpg',
        ],
    },
    {
        title: 'Learning Hub Fellow & Ambassador',
        place: 'FGCU Whitaker College of Engineering',
        date: 'Fall 2023 – Fall 2025',
        description:
            'Provided over 400 hours of tutoring in programming and data structures, boosting student confidence and academic performance. Represented the Whitaker College of Engineering as an ambassador at recruitment and outreach events.',
        category: 'previous',
        images: [
            '/involvements/learninghub_1.jpg',
            '/involvements/ambassador_1.jpg',
        ],
    },
    {
        title: 'Student Advisor',
        place: 'Computer Science & Software Engineering Club (CSSEC)',
        date: 'Fall 2022 – Present',
        description:
            'Advising the CSSEC on programming workshops, events, and industry connections; previously served as President leading 20–30 weekly members, running hackathons (EagleHacks), panels, and partnerships with Arthrex, Spigot, Kingland, Hertz, and more.',
        category: 'current',
        images: [
            '/involvements/cssec_1.jpg',
            '/involvements/cssec_2.jpg',
            '/involvements/cssec_3.jpg',
            '/involvements/cssec_4.jpg',
        ],
    },
    {
        title: 'Member',
        place: 'Society of Hispanic Professional Engineers (SHPE)',
        date: 'Fall 2022 – Present',
        description:
            'Engaged in national and regional conferences, including the 2024 Anaheim conference and the 2025 SHPE National Conference in Philadelphia.',
        category: 'current',
        images: [
            '/involvements/shpe_1.jpg',
        ]
    },
    {
        title: (
            <>
                <a
                    href="#neo-eden"
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('neo-eden')
                    }}
                    className="text-blue-600 hover:underline"
                >
                    Hacker
                </a>
            </>
        ),
        place: 'Hackabull 2025',
        date: 'Spring 2025',
        link: '#neo-eden',
        linkType: 'anchor',
        description:
            'Collaborated in a team of 4 to develop Neo-Eden, a post-apocalyptic resource mapping and community engagement platform featuring AI-powered image analysis, real-time location tracking, and interactive maps. Led backend development including database management with MongoDB, authentication systems, news boards, and AI chatbot integration using Google Gemini AI API. Gained hands-on experience with new technologies and APIs, resulting in strong judge engagement.',
        category: 'previous',
        images: [
            '/involvements/hackabull_1.jpg',
        ],
    },
        {
            title: (
                <>
                    <a
                        href="#imposture"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('imposture')
                        }}
                        className="text-blue-600 hover:underline"
                    >
                        Top 11 Hacker, 2nd Place Google Cloud ADK Featured Challenge
                    </a>
                </>
            ),
            place: 'ShellHacks 2025',
            date: 'Fall 2025',
            link: '#imposture',
            linkType: 'anchor',
            description:
                'Collaborated in a team of 4 to develop iMPOSTURE, a real-time posture analyzer and recommendation system using computer vision models from Google MediaPipe and YOLOv11.',
            category: 'previous',
            images: [
                '/involvements/shellhacks2025_1.png',
            ],
        },
    {
        title: 'Pitch Winner',
        place: 'FGCU Runway Program 1.0',
        date: 'Spring 2025',
        description: (
            <>
                Completed a semester-long entrepreneurship workshop developing{' '}
                <a
                    href="#roundready"
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('roundready')
                    }}
                    className="text-blue-600 hover:underline"
                >
                    RoundReady
                </a>
                , an app for resident assistants. Successfully pitched the business idea to a panel of judges and secured $3,000 in funding to advance product development. Expanded understanding of business fundamentals and gained confidence in startup operations.
            </>
        ),
        category: 'previous',
    },
    {
        title: (
            <>
                <a
                    href="#wealthwiseai"
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('wealthwiseai')
                    }}
                    className="text-blue-600 hover:underline"
                >
                    Top 20th Hacker
                </a>
            </>
        ),
        place: 'ShellHacks 2024',
        date: 'Fall 2024',
        link: '#wealthwiseai',
        linkType: 'anchor',
        description:
            'Co-developed WealthWise AI, a personal finance wellness app featuring an AI chatbot for spending insights and financial education. Utilized Node.js, Express, and SQLite for backend development. Ranked in the top 20 among 260+ teams. Leveraged hackathon experience to improve organization and planning of EagleHacks.',
        category: 'previous',
        images: [
            '/involvements/shellhacks_1.jpg',
        ],
    },
    {
        title: 'Resident Assistant',
        place: 'FGCU Housing and Residence Life',
        date: 'Spring 2023 – Spring 2025',
        description: (
            <>
                Supported a community of 42 residents by fostering an inclusive and safe environment. Organized popular semester events, including “Pot Party,” which ranked among the highest-attended in West Lake. Managed on-call emergency response for 500 residents, identifying challenges that inspired the creation of the{' '}
                <a
                    href="#roundready"
                    onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('roundready')
                    }}
                    className="text-blue-600 hover:underline"
                >
                    RoundReady
                </a>{' '}
                app.
            </>
        ),
        category: 'previous',
        images: [
            '/involvements/ra_1.jpg',
            '/involvements/ra_2.jpg',
            '/involvements/ra_3.jpg',
        ],
    },
    {
        title: 'Representative & Director of Recruitment',
        place: 'National Residence Hall Honorary (NRHH)',
        date: 'Spring 2023 – Spring 2025',
        description:
            'Planned and executed six recruitment and engagement events within one month, demonstrating strong leadership and project management. Attended multiple regional and national NRHH conferences across the U.S., including South Carolina, Tennessee, New Mexico, and Florida, enhancing chapter visibility and leadership skills.',
        category: 'previous',
        images: [
            '/involvements/nrhh_1.jpg',
            '/involvements/nrhh_2.jpg',
            '/involvements/nrhh_3.jpg',
        ],
    },
    {
        title: 'Hacker‎',
        place: 'KnightHacks 2025',
        date: 'Fall 2025',
        description: 'Participated and completed KnightHacks 2025.',
        category: 'previous',
        images: [
            '/involvements/knighthacks2025_1.png',
        ],
    },
    // SharkByte entry removed (not attended)
]
