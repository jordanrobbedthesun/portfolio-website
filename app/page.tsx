'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-300 text-gray-900 font-sans">
      {/* Top Navbar */}
      <nav className="bg-black text-white w-full p-4 fixed top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Only show your name on mobile */}
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

          {/* Desktop links */}
          <div className="hidden sm:flex gap-6 justify-center w-full">
            <Link href="#top" className="hover:text-gray-400">Home</Link>
            <Link href="#projects" className="hover:text-gray-400">Projects</Link>
            <a href="/images/resume.pdf" target="_blank" className="hover:text-gray-400">Resume</a>
            <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="flex flex-col gap-4 mt-4 sm:hidden">
            <Link href="#top" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#projects" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Projects</Link>
            <a href="/images/resume.pdf" target="_blank" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Resume</a>
            <Link href="#contact" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</Link>

            {/* Social Icons */}
            <div className="bg-gray-300 text-black flex justify-center gap-4 mt-4 p-2 rounded-md">
              <a href="https://www.linkedin.com/in/jordantyrobertson/" target="_blank">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="https://github.com/jordanrobbedthesun" target="_blank">
                <Image src="/images/github.png" alt="GitHub" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/jordanrobertson.28/" target="_blank">
                <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row pt-0 lg:pt-0 mt-0">
        {/* Sidebar */}
        <aside className="bg-black text-white w-full lg:w-1/3 p-6 pt-32 flex flex-col items-center text-center lg:fixed lg:h-full z-40">
          <Image src="/images/jordan.png" alt="Jordan Robertson" width={200} height={200} className="rounded-full" />
          <h1 className="text-2xl mt-4 font-bold">Jordan Robertson</h1>
          <p className="mt-2 text-sm">Junior Software Engineering Student at FGCU</p>

          {/* Footer Socials */}
          <footer className="bg-gray-300 text-black rounded-2xl p-4 mt-6 w-full max-w-xs flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/jordantyrobertson/" target="_blank">
              <Image src="/images/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="https://github.com/jordanrobbedthesun" target="_blank">
              <Image src="/images/github.png" alt="GitHub" width={30} height={30} />
            </a>
            <a href="https://www.instagram.com/jordanrobertson.28/" target="_blank">
              <Image src="/images/instagram.png" alt="Instagram" width={30} height={30} />
            </a>
          </footer>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:ml-[33%] p-6 space-y-16 mt-6 pt-24">
          {/* About */}
          <section id="about">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">About Me</h2>

            <h3 className="text-lg font-semibold">Education</h3>
            <p>I am a Junior Software Engineering Student at Florida Gulf Coast University expected to graduate in Spring 2026.</p>

            <h3 className="text-lg font-semibold mt-4">Experience</h3>
            <h5 className="font-semibold">Backend Software Engineering Intern</h5>
            <h6 className="italic">BoomBox</h6>
            <ul className="list-disc list-inside text-sm">
              <li>Summer 2024 - Present</li>
              <li>Developed RESTful APIs using JavaScript, adding 5+ new features, which improved user experience.</li>
              <li>Designed efficient database tables and statements using PostgreSQL and Prisma.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Involvements</h3>
            <p>On Campus:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Computer Science & Software Engineering Club President</li>
              <li>CSSEC EagleHacks Organizer</li>
              <li>Whitaker College of Engineering Ambassador</li>
              <li>Learning Hub Mentor</li>
              <li>NRHH Representative</li>
              <li>TRIO Member</li>
              <li>Honors College Student</li>
              <li>SHPE Member</li>
            </ul>
            <p className="mt-2">Off Campus:</p>
            <ul className="list-disc list-inside text-sm">
              <li><Link href="#wealthwiseai" className="text-blue-600 underline">ShellHacks 2024 Top 20 Projects</Link></li>
            </ul>
          </section>

          {/* Projects */}
          <section id="projects">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Projects</h2>

            {[
              {
                title: 'RoundReady',
                subtitle: 'ShellHacks 2024',
                bullets: [
                  'Fall 2024 - Present',
                  'Engineered RESTful APIs using JavaScript for emergency response features.',
                  'Structured and fine-tuned sqlite3 databases.',
                  'Designed emergency shortcuts for real-time resolution.',
                ],
              },
              {
                title: 'WealthWise AI',
                subtitle: 'ShellHacks 2024',
                id: 'wealthwiseai',
                bullets: [
                  'Fall 2024',
                  'Developed RESTful APIs using JavaScript.',
                  'Designed efficient sqlite3 database tables.',
                ],
              },
              {
                title: 'Evently',
                subtitle: 'C++, GitHub',
                bullets: [
                  'Fall 2023',
                  'Built a GUI-based event management system using C++.',
                  'Used OOP for scalable architecture.',
                ],
              },
              {
                title: 'PassPassProtect',
                subtitle: 'C#',
                bullets: [
                  'Fall 2023',
                  'Created a C# program for managing login info securely.',
                  'Used OOP to build a modular system.',
                ],
              },
            ].map(({ title, subtitle, bullets, id }) => (
              <div className="mt-6" key={title} id={id}>
                <h5 className="font-semibold">{title}</h5>
                <h6 className="italic">{subtitle}</h6>
                <ul className="list-disc list-inside text-sm">
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </section>

          {/* Contact */}
          <section id="contact">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact</h2>
            <h3 className="text-base"><a href="mailto:jordantyrobertson@gmail.com" className="text-blue-600 underline">jordantyrobertson@gmail.com</a></h3>
          </section>
        </main>
      </div>
    </div>
  )
}
