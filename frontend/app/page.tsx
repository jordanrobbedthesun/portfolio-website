'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
      <div className="min-h-screen bg-gray-300 text-gray-900 font-sans">
        {/* Navbar */}
        <nav className="bg-black text-white w-full p-4 fixed top-0 z-50">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold sm:hidden">Jordan R.</h1>
            <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
            <div className="hidden sm:flex gap-6 justify-center w-full">
              <Link href="#about" className="hover:text-gray-400">About</Link>
              <Link href="#projects" className="hover:text-gray-400">Projects</Link>
              <a href="/JordanRobertsonResume.pdf" target="_blank" className="hover:text-gray-400">Resume</a>
              <Link href="#contact" className="hover:text-gray-400">Contact</Link>
            </div>
          </div>
          {menuOpen && (
              <div className="flex flex-col gap-4 mt-4 sm:hidden">
                <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                <a href="/JordanRobertsonResume.pdf" target="_blank" onClick={() => setMenuOpen(false)}>Resume</a>
                <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </div>
          )}
        </nav>

        <div className="flex flex-col lg:flex-row pt-0 mt-0">
          {/* Sidebar */}
          <aside className="bg-black text-white w-full lg:w-1/3 p-6 pt-32 flex flex-col items-center text-center lg:fixed lg:h-full z-40">
            <Image src="/images/jordan.png" alt="Jordan Robertson" width={200} height={200} className="rounded-full" />
            <h1 className="text-2xl mt-4 font-bold">Jordan Robertson</h1>
            <p className="mt-2 text-sm">Senior Software Engineering Student at FGCU</p>
            <div className="bg-gray-300 text-black rounded-2xl p-4 mt-6 flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/jordantyrobertson/" target="_blank">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={30} height={30} />
              </a>
              <a href="https://github.com/jordanrobbedthesun" target="_blank">
                <Image src="/images/github.png" alt="GitHub" width={30} height={30} />
              </a>
              <a href="https://www.instagram.com/jordanrobertson.28/" target="_blank">
                <Image src="/images/instagram.png" alt="Instagram" width={30} height={30} />
              </a>
            </div>
          </aside>

          {/* Main */}
          <main className="w-full lg:ml-[33%] p-6 space-y-16 mt-6 pt-24">
            {/* About */}
            <section id="about">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <h3 className="text-lg font-semibold">Education</h3>
              <p>B.S. Software Engineering, Florida Gulf Coast University (May 2026)</p>
              <p>GPA: 3.81 | Dean’s List (3x) | President’s List (2x)</p>
              <p>Entrepreneurship Minor</p>

              <h3 className="text-lg font-semibold mt-4">Experience</h3>
              <h4 className="font-semibold">Backend Engineer Intern – BoomBox</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Collaborated on a music-based social app built by FGCU students.</li>
                <li>Developed RESTful APIs in JavaScript and optimized database performance with Prisma/PostgreSQL.</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">Leadership & Involvement</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Research Assistant – Whitaker College of Engineering</li>
                <li>Ambassador & Learning Hub Fellow – FGCU (400+ hours tutoring)</li>
                <li>President – CS & Software Engineering Club</li>
                <li>Resident Assistant – FGCU Housing</li>
                <li>SHPE Member – National & Regional Conference Attendee</li>
                <li>TRIO Scholar | Honors College | Former NRHH Rep</li>
                <li>Pitch Winner – FGCU Runway Program ($3,000)</li>
                <li>ShellHacks 2024 – Top 20 Project | Hackabull 2025 Hacker</li>
                <li>Organizer – EagleHacks Hackathon</li>
                <li>Upcoming: KnightHacks 2025, ShellHacks 2025</li>
              </ul>
            </section>

            {/* Projects */}
            <section id="projects">
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              {[
                {
                  title: 'Neo-Eden',
                  subtitle: 'JavaScript, MongoDB, GitHub',
                  date: 'Spring 2025',
                  bullets: [
                    'Community mapping platform powered by AI and geolocation.',
                    'Supports vulnerable populations by showing real-time resources nearby.'
                  ],
                },
                {
                  title: 'RoundReady',
                  subtitle: 'JavaScript, SQLite, GitHub',
                  date: 'Fall 2023 – Present',
                  bullets: [
                    'Built mobile app for Resident Assistants to manage incidents and access resources.',
                    'Created emergency workflows and database logging system.',
                    'Formed as an LLC; received $3,000 from FGCU Runway Program.'
                  ],
                },
                {
                  title: 'WealthWise AI',
                  subtitle: 'ShellHacks 2024',
                  date: 'Fall 2024',
                  bullets: [
                    'AI-powered financial assistant with savings planner and budget advisor.',
                    'Top 20 project at ShellHacks 2024.'
                  ],
                },
                {
                  title: 'Portfolio Website',
                  subtitle: 'React, Next.js, Node.js, Express',
                  date: 'Fall 2024 – Present',
                  bullets: [
                    'Designed and coded this portfolio using Next.js with API and SEO integration.',
                    'Custom sections for resume, projects, and blogs.'
                  ],
                },
                {
                  title: 'Evently',
                  subtitle: 'C++, GitHub',
                  date: 'Fall 2023',
                  bullets: [
                    'Built GUI event manager with CRUD operations and OOP structure.',
                    'Developed in a team of 3 for Programming II final project.'
                  ],
                },
                {
                  title: 'PassPassProtect',
                  subtitle: 'C#',
                  date: 'Fall 2023',
                  bullets: [
                    'Password manager with secure encrypted storage.',
                    'Solo honors project with full GUI and class-based design.'
                  ],
                },
              ].map(({ title, subtitle, date, bullets }, index) => (
                  <div className="mt-6" key={index}>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="italic">{subtitle}</p>
                    <p className="text-sm text-gray-600">{date}</p>
                    <ul className="list-disc list-inside text-sm mt-1">
                      {bullets.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
              ))}
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="text-base">
                Email me at <a href="mailto:jordantyrobertson@gmail.com" className="text-blue-600 underline">jordantyrobertson@gmail.com</a>
              </p>
            </section>
          </main>
        </div>
      </div>
  )
}
