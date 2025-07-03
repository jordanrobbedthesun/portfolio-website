'use client'
import Image from 'next/image'
import {useState} from 'react'
import {useRouter} from 'next/navigation'

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()

    function scrollToSection(id: string) {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({behavior: 'smooth'})
    }

    const projects = [
        {
            title: 'Neo-Eden',
            date: 'Spring 2025',
            stack: ['JavaScript', 'MongoDB', 'React Native', 'Expo', 'Google Gemini AI'],
            github: 'https://github.com/jordanrobbedthesun/neo-eden',
            bullets: [
                'Designed and implemented a mobile platform that connects users to community resources using AI-powered analysis and location-based services.',
                'Developed real-time resource maps, location filters, AI-driven image recognition, and user-submitted content powered by Gemini AI.',
                'Built secure authentication, resource categorization, and a dynamic news feed using Express and MongoDB.'
            ]
        },
        {
            title: 'Portfolio Website',
            date: 'Fall 2024 – Present',
            stack: ['React', 'Next.js', 'Node.js', 'Express'],
            github: 'https://github.com/jordanrobbedthesun/portfolio-website',
            bullets: [
                'Built and deployed personal portfolio to showcase my software engineering journey and projects.',
                'Integrated analytics, RESTful APIs, and responsive design using React, Express, and Tailwind.'
            ]
        },
        {
            title: 'WealthWise AI',
            date: 'Fall 2024',
            stack: ['JavaScript', 'React Native', 'Expo', 'SQLite3', 'OpenAI API'],
            github: 'https://github.com/jordanrobbedthesun/WealthWise_AI',
            bullets: [
                'AI-powered mobile budgeting assistant built at ShellHacks 2024; selected as Top 20 project.',
                'Implemented OpenAI chatbot to answer personal finance questions and provide tailored advice.',
                'Visualized budgets using charts, and tracked monthly income/expenses with a clean mobile interface.'
            ]
        },
        {
            title: 'RoundReady',
            date: 'Fall 2023 – Present',
            stack: ['JavaScript', 'SQLite', 'Expo', 'React Native'],
            github: 'https://github.com/jordanrobbedthesun/portfolio-website',
            bullets: [
                'Mobile app built to empower Resident Assistants with real-time emergency response workflows, quick contact tools, facility logs, and custom quick notes.',
                'Engineered full backend using SQLite and JavaScript, with local caching and offline support for housing rosters, quick links, and notifications.',
                'Won $3,000 in startup funding through FGCU’s Runway Program and registered the project as a Florida LLC.'
            ]
        },
        {
            title: 'Evently',
            date: 'Fall 2023',
            stack: ['C++', 'Dear ImGUI'],
            github: 'https://github.com/jordanrobbedthesun/evently',
            bullets: [
                'Built a desktop calendar and event management system in C++ with an interactive Dear ImGUI interface.',
                'Created a fully modular class architecture with 11 attributes per event including title, time, and category.',
                'Supported features such as event searching, editing, deletion, and infinite expansion.'
            ]
        },
        {
            title: 'PassPassProtect',
            date: 'Fall 2023',
            stack: ['C#'],
            github: 'https://github.com/jordanrobbedthesun/PassPassProtect',
            bullets: [
                'Solo honors project for secure password management with full CRUD support and data encryption.',
                'Developed object-oriented entry and manager classes with GUI integration for managing login info.'
            ]
        }
    ]

    const involvements = [
        {
            title: 'Research Assistant',
            place: 'Whitaker College of Engineering',
            date: 'Summer 2025 – Present',
            description: 'Support faculty research efforts by contributing to software prototypes and testing frameworks in engineering contexts.'
        },
        {
            title: 'Hackabull 2025',
            place: 'Participant',
            date: 'Spring 2025',
            description: 'Built Neo-Eden in a 24-hour hackathon alongside a team of 4, earning high engagement from judges.'
        },
        {
            title: 'ShellHacks 2024',
            place: 'Participant',
            date: 'Fall 2024',
            description: 'Co-developed WealthWise AI at Florida’s largest hackathon; ranked in Top 20 out of 260+ teams.'
        },
        {
            title: 'Learning Hub Fellow & Ambassador',
            place: 'FGCU',
            date: 'Fall 2023 – Present',
            description: 'Tutored over 400 hours for freshmen in Programming I, Programming II, Data Structures & Algorithms, and promoted engineering programs as an ambassador at events.'
        },
        {
            title: 'Resident Assistant',
            place: 'Housing and Residence Life',
            date: 'Spring 2023 – Spring 2025',
            description: 'Created inclusive and safe residential communities while managing emergency response and conducting wellness rounds.'
        },
        {
            title: 'Representative & Director of Recruitment',
            place: 'National Residence Hall Honorary',
            date: 'Spring 2023 – Spring 2025',
            description: 'Represented FGCU’s NRHH chapter at national and regional conferences, connecting with other chapters and promoting our values of service and recognition. Led recruitment efforts and strengthened member engagement on campus. Earned NRHH Leadership Certification for active leadership and chapter advocacy.'
        },
        {
            title: 'President',
            place: 'CS & Software Engineering Club',
            date: 'Fall 2022 – Present',
            description: 'Led club operations, hosted tech workshops, coordinated EagleHacks, and grew campus involvement in software engineering.'
        },
        {
            title: 'Member',
            place: 'SHPE (Society of Hispanic Professional Engineers)',
            date: 'Fall 2022 – Present',
            description: 'Participated in national and regional conferences and connected with engineers across the country.'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-300 text-gray-900 font-sans">
            {/* Navigation */}
            <nav className="bg-black text-white w-full p-4 fixed top-0 z-50">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold sm:hidden">Jordan R.</h1>
                    <button
                        className="sm:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                    <div className="hidden sm:flex gap-6 justify-center w-full">
                        {['about', 'projects', 'certifications', 'contact'].map(section => (
                            <button key={section} onClick={() => scrollToSection(section)}
                                    className="hover:text-gray-400 capitalize">
                                {section}
                            </button>
                        ))}
                        <a href="/JordanRobertsonResume.pdf" target="_blank" rel="noopener noreferrer"
                           className="hover:text-gray-400">Resume</a>
                        <button onClick={() => router.push('/recipes')} className="hover:text-gray-400">Recipes</button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="flex flex-col gap-4 mt-4 sm:hidden">
                        {['about', 'projects', 'certifications', 'contact'].map(section => (
                            <button
                                key={section}
                                onClick={() => {
                                    scrollToSection(section)
                                    setMenuOpen(false)
                                }}
                                className="text-left capitalize"
                            >
                                {section}
                            </button>
                        ))}
                        <a href="/JordanRobertsonResume.pdf" target="_blank" rel="noopener noreferrer"
                           onClick={() => setMenuOpen(false)}>Resume</a>
                        <button onClick={() => {
                            setMenuOpen(false);
                            router.push('/recipes')
                        }} className="text-left">Recipes
                        </button>
                    </div>
                )}
            </nav>

            {/* Sidebar */}
            <aside
                className="bg-black text-white w-full lg:w-1/3 p-6 pt-32 flex flex-col items-center text-center lg:fixed lg:h-full z-40">
                <Image src="/images/jordan.png" alt="Jordan Robertson" width={200} height={200}
                       className="rounded-full"/>
                <h1 className="text-2xl mt-4 font-bold">Jordan Robertson</h1>
                <p className="mt-2 text-sm">First-Gen Software Engineering Student at FGCU</p>
                <div className="bg-gray-300 text-black rounded-2xl p-4 mt-6 flex justify-center gap-6">
                    <a href="https://www.linkedin.com/in/jordantyrobertson/" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/linkedin.png" alt="LinkedIn" width={30} height={30}/>
                    </a>
                    <a href="https://github.com/jordanrobbedthesun" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/github.png" alt="GitHub" width={30} height={30}/>
                    </a>
                    <a href="https://www.instagram.com/jordanrobertson.10/" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/instagram.png" alt="Instagram" width={30} height={30}/>
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="w-full lg:ml-[33%] p-6 space-y-16 mt-6 pt-24 pb-32">
                {/* About Section */}
                <section id="about">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>

                    <div>
                        <h3 className="text-lg font-semibold mt-2">Education</h3>
                        <p>FGCU – B.S. in Software Engineering | Minor: Entrepreneurship</p>
                        <p>GPA: 3.81 | Dean’s List x3 | President’s List x2</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Experience</h3>
                        <p className="font-semibold">Backend Engineer Intern – BoomBox (Summer 2024 – Summer 2025)</p>
                        <ul className="list-disc list-inside text-sm">
                            <li>Collaborated with the founder of BoomBox, a student-run music social platform startup.
                            </li>
                            <li>Created scalable RESTful APIs with JavaScript for user-generated playlists and social
                                interactions.
                            </li>
                            <li>Refactored backend to support Prisma ORM and PostgresSQL with improved speed and
                                integrity.
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Involvements</h3>
                        <ul className="space-y-3">
                            {involvements.map(({title, place, date, description}) => (
                                <li key={`${title}-${place}`} className="border-b border-gray-400 pb-3">
                                    <p className="font-semibold">{title} @ {place}</p>
                                    <p className="text-sm italic">{date}</p>
                                    <p className="text-sm">{description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects">
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    {projects.map(({title, date, stack, github, bullets}) => (
                        <div key={title} className="mt-6 border-b border-gray-400 pb-4">
                            <h4 className="font-semibold text-lg flex items-center gap-2">
                                <a href={github} className="text-blue-600 hover:underline" target="_blank"
                                   rel="noopener noreferrer">{title}</a>
                                <span className="text-sm text-gray-600">({date})</span>
                            </h4>
                            <ul className="list-disc list-inside text-sm mt-1">
                                {bullets.map((b, i) => <li key={i}>{b}</li>)}
                                <li><strong>Tech Stack:</strong> {stack.join(', ')}</li>
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="mt-16">
                    <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>
                            <a href="https://badgr.com/public/assertions/Dk6VTlHMT16LlhFaFn7pNQ" target="_blank"
                               rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Postman API Fundamentals Student Expert – Canvas Credentials (Apr 2025)
                            </a>
                        </li>
                        <li>
                            <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=3FF16C02FE571FFB05AC4A61CF3619BD2EEE540D9D7CB32B1E994126A44EF0EB"
                               target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Java Certified Foundations Associate – Oracle (Jun 2023)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.credly.com/badges/f8cc9142-ddee-4b97-b81e-f16533c26263/linked_in_profile" target="_blank"
                               rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                AI Foundations – IBM (Mar 2023)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.credential.net/90b1f7d5-60b3-402f-a918-9c848db7180b#acc.RneFxjlw" target="_blank"
                               rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                HTML & CSS Coding Specialist – Knowledge Pillars (Mar 2023)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.credential.net/4e241c24-4450-404c-88a8-8bc436a6736e#acc.fmPH2jRI" target="_blank"
                               rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Python Coding Specialist – Knowledge Pillars (Dec 2022)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.codecademy.com/profiles/micro8180557404" target="_blank"
                               rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Codecademy Certificates – HTML, CSS, JS, C#, C++, UX/UI, Express, Java (2022–2025)
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mt-16">
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>
                    <p>Email: <a href="mailto:jordantyrobertson@gmail.com"
                                 className="text-blue-600 underline">jordantyrobertson@gmail.com</a></p>
                </section>
            </main>
        </div>
    )
}
