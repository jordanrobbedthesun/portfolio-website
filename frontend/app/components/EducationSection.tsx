export default function EducationSection() {
    return (
        <section id="education">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Education</h2>
            <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-300 dark:border-gray-700">
                <p className="font-medium text-gray-900 dark:text-gray-100">
                    Florida Gulf Coast University – B.S. in Software Engineering, Minor in Entrepreneurship
                </p>
                <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-gray-800 dark:text-gray-300">
                    <li>GPA: 3.81 | Dean’s List x3, President’s List x2</li>
                    <li>Honors College | TRIO Scholar | First-Gen Student</li>
                </ul>

                <div className="mt-4 divide-y divide-gray-300 dark:divide-gray-700">
                    {/* Freshman */}
                    <details className="group py-3">
                        <summary className="flex justify-between items-center cursor-pointer text-base font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                            📘 Freshman Year
                            <span className="transition-transform group-open:rotate-90">›</span>
                        </summary>
                        <ul className="list-disc list-inside ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>Programming I</li>
                            <li>Mobile App Development</li>
                        </ul>
                    </details>

                    {/* Sophomore */}
                    <details className="group py-3">
                        <summary className="flex justify-between items-center cursor-pointer text-base font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                            📗 Sophomore Year
                            <span className="transition-transform group-open:rotate-90">›</span>
                        </summary>
                        <ul className="list-disc list-inside ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>
                                Honors Programming II –{' '}
                                <a href="#evently" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Evently
                                </a>{' '}
                                –{' '}
                                <a href="#passpassprotect" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    PassPassProtect
                                </a>
                            </li>
                            <li>Computer Organization & Assembly</li>
                            <li>Computer Security</li>
                            <li>Data Structures & Algorithms</li>
                        </ul>
                    </details>

                    {/* Junior */}
                    <details className="group py-3">
                        <summary className="flex justify-between items-center cursor-pointer text-base font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                            📙 Junior Year
                            <span className="transition-transform group-open:rotate-90">›</span>
                        </summary>
                        <ul className="list-disc list-inside ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>Software Engineering Fundamentals</li>
                            <li>Embedded Programming</li>
                            <li>Systems Admin & Programming</li>
                            <li>Design & Analysis of Algorithms</li>
                            <li>Honors Requirements Engineering & Analysis</li>
                            <li>Software Testing</li>
                            <li>Software Quality Assurance</li>
                            <li>Intro to Data Engineering</li>
                        </ul>
                    </details>

                    {/* Senior */}
                    <details className="group py-3">
                        <summary className="flex justify-between items-center cursor-pointer text-base font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400">
                            📕 Senior Year
                            <span className="transition-transform group-open:rotate-90">›</span>
                        </summary>
                        <ul className="list-disc list-inside ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>Software Architecture & Design</li>
                            <li>Intro to Cloud Computing</li>
                            <li>Senior Software Engineering Project I</li>
                        </ul>
                    </details>
                </div>
            </section>
        </section>
    )
}
