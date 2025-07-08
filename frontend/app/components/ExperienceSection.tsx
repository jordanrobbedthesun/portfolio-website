import React from "react";

export default function ExperienceSection() {
    return (
        <section id="experience">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Experience</h2>
            <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-300 dark:border-gray-700">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Backend Engineer Intern
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium">BoomBox</p>
                <span className="text-sm italic text-gray-600 dark:text-gray-300">Summer 2024 – Summer 2025</span>
                <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-300">
                    <li>Collaborated with the founder of BoomBox, a student-run music social platform startup.</li>
                    <li>Created scalable RESTful APIs with JavaScript for user-generated playlists and social interactions.</li>
                    <li>Refactored backend to support Prisma ORM and PostgresSQL with improved speed and integrity.</li>
                </ul>
            </section>
        </section>
    )
}
