const certifications = [
    {
        title: 'Postman API Fundamentals Student Expert',
        issuer: 'Canvas Credentials',
        date: 'Spring 2025',
        url: 'https://badgr.com/public/assertions/Dk6VTlHMT16LlhFaFn7pNQ',
    },
    {
        title: 'Java Certified Foundations Associate',
        issuer: 'Oracle',
        date: 'Fall 2023',
        url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=3FF16C02FE571FFB05AC4A61CF3619BD2EEE540D9D7CB32B1E994126A44EF0EB',
    },
    {
        title: 'AI Foundations',
        issuer: 'IBM',
        date: 'Spring 2023',
        url: 'https://www.credly.com/badges/f8cc9142-ddee-4b97-b81e-f16533c26263/linked_in_profile',
    },
    {
        title: 'HTML & CSS Coding Specialist',
        issuer: 'Knowledge Pillars',
        date: 'Spring 2023',
        url: 'https://www.credential.net/90b1f7d5-60b3-402f-a918-9c848db7180b#acc.RneFxjlw',
    },
    {
        title: 'Python Coding Specialist',
        issuer: 'Knowledge Pillars',
        date: 'Fall 2022',
        url: 'https://www.credential.net/4e241c24-4450-404c-88a8-8bc436a6736e#acc.fmPH2jRI',
    },
    {
        title: 'Codecademy Certificates',
        issuer: 'Codecademy',
        date: 'Fall 2022–Present',
        url: 'https://www.codecademy.com/profiles/micro8180557404',
    },
]

export default function CertificationsSection() {
    return (
        <section id="certifications" className="mt-16">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map(({ title, issuer, date, url }, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow transition-shadow hover:shadow-lg"
                    >
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 font-semibold text-md hover:underline"
                        >
                            {title}
                        </a>
                        <p className="text-sm text-gray-700 dark:text-gray-400">{issuer}</p>
                        <p className="text-sm italic text-gray-500 dark:text-gray-400">{date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
