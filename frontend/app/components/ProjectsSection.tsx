import React from 'react'

interface Project {
    title: string
    date: string
    id?: string
    stack: string[]
    github?: string
    bullets: string[]
}

interface ProjectsSectionProps {
    projects: Project[]
    scrollToSection?: (id: string) => void
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section id="projects" className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-300 dark:border-gray-700">
                <div className="space-y-10">
                    {projects.map(({ title, date, stack, github, bullets, id }, idx) => (
                        <div
                            key={`${title}-${idx}`}
                            id={id}
                            className="border-l-4 border-green-600 pl-4"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                                <span className="text-sm italic text-gray-600 dark:text-gray-300">{date}</span>
                            </div>
                            <p className="mt-1 mb-2 font-medium text-gray-800 dark:text-gray-200">
                                Stack: {stack.join(', ')}
                            </p>
                            {github && (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline mb-2 block text-sm"
                                >
                                    GitHub Repository
                                </a>
                            )}
                            <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300">
                                {bullets.map((bullet, i) => (
                                    <li key={i} className="mb-1">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
