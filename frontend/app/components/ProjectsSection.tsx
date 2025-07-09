'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Project {
    title: string
    date: string
    id?: string
    stack: string[]
    github?: string
    videoUrl?: string
    images?: string[]
    bullets: string[]
}

interface ProjectsSectionProps {
    projects: Project[]
    scrollToSection?: (id: string) => void
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const [modalProject, setModalProject] = useState<Project | null>(null)

    function closeModal() {
        setModalProject(null)
    }

    return (
        <section id="projects" className="mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div
                        key={project.id ?? `${project.title}-${idx}`}
                        id={project.id}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-300 dark:border-gray-700 flex flex-col"
                    >

                    <div className="flex justify-between items-center mb-2">
                            {project.github ? (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-gray-900 dark:text-white hover:underline"
                                >
                                    {project.title}
                                </a>
                            ) : (
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                            )}
                            <span className="text-sm italic text-gray-600 dark:text-gray-300">{project.date}</span>
                        </div>

                        <p className="mb-3 text-gray-800 dark:text-gray-300 font-medium">
                            Stack:{' '}
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="inline-block bg-green-600 text-white text-xs font-semibold rounded-full px-2 py-0.5 mr-1 mb-1"
                                >
                  {tech}
                </span>
                            ))}
                        </p>

                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 flex-1 mb-4">
                            {project.bullets.map((bullet, i) => (
                                <li key={i} className="mb-1 text-sm">
                                    {bullet}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto flex space-x-3">
                            {(project.videoUrl || project.images?.length) && (
                                <button
                                    onClick={() => setModalProject(project)}
                                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-sm font-medium transition"
                                >
                                    Demo
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalProject && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full max-h-full overflow-auto p-6 relative"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close on inner click
                        >
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{modalProject.title} Demo</h3>

                            {modalProject.videoUrl ? (
                                <video
                                    controls
                                    src={modalProject.videoUrl}
                                    className="w-full rounded mb-4"
                                    autoPlay
                                    muted
                                    loop
                                />
                            ) : modalProject.images?.length ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    {modalProject.images.map((img, i) => (
                                        <Image
                                            key={i}
                                            src={img}
                                            alt={`${modalProject.title} demo ${i + 1}`}
                                            width={600}
                                            height={400}
                                            className="rounded shadow"
                                        />
                                    ))}
                                </div>
                            ) : null}

                            <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mb-4">
                                {modalProject.bullets.map((bullet, i) => (
                                    <li key={i} className="mb-1">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
