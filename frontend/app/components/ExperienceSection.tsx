import React from "react";

export default function ExperienceSection() {
    return (
        <section id="experience">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Experience</h2>
            <section className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
                <p className="text-lg font-medium text-white">
                    IoT Software Engineer
                </p>
                <p className="text-gray-200 font-medium">Applied Physics Laboratories</p>
                <span className="text-sm italic text-gray-300">Spring 2026 – Present</span>
                <ul className="list-disc list-inside text-sm text-gray-300">
                    <li>Early engineering team member at a growing IoT startup developing embedded GPS-based devices.</li>
                    <li>Architected and developed a mobile app using React Native to manage IoT devices via BLE.</li>
                    <li>Implemented embedded firmware in C for a Bluetooth Low Energy controller.</li>
                </ul>
            </section>
            <section className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
                <p className="text-lg font-medium text-white">
                    Backend Engineer Intern
                </p>
                <p className="text-gray-200 font-medium">BoomBox</p>
                <span className="text-sm italic text-gray-300">Summer 2024 – Summer 2025</span>
                <ul className="list-disc list-inside text-sm text-gray-300">
                    <li>Collaborated with the founder of BoomBox, a student-run music social platform startup.</li>
                    <li>Created scalable RESTful APIs with JavaScript for user-generated playlists and social interactions.</li>
                    <li>Refactored backend to support Prisma ORM and PostgresSQL with improved speed and integrity.</li>
                </ul>
            </section>
        </section>
    )
}
