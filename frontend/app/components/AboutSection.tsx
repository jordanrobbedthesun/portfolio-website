import { Router } from 'next/router'

interface AboutSectionProps {
    scrollToSection: (id: string) => void
    router?: Router
}

export default function AboutSection({ scrollToSection }: AboutSectionProps) {
    return (
        <section id="about" className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-300 dark:border-gray-700">
                <p className="text-sm leading-relaxed text-gray-900 dark:text-gray-100">
                    I’m a first-generation honors Software Engineering student at Florida Gulf Coast University, minoring in Entrepreneurship. I enjoy building things that solve real problems, especially on the backend, where I get to work with APIs and databases.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-900 dark:text-gray-100">
                    Over time, I’ve worked on a variety of{' '}
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('projects')
                        }}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        projects
                    </a>
                    , explored new tools through hackathons, and even developed a{' '}
                    <a
                        href="#roundready"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('roundready')
                        }}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        mobile app
                    </a>
                    .
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-900 dark:text-gray-100">
                    I’m currently exploring internship and research opportunities for Fall 2025. If anything here stands out, feel free to{' '}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('contact')
                        }}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        reach out
                    </a>
                    .
                </p>
            </div>
        </section>
    )
}
