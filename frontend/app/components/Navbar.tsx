'use client'
import React, { useState } from 'react'

interface NavbarProps {
    sections: string[]
    currentSection: string
    scrollToSection: (id: string) => void
    // Removed handleDownloadWebsite prop
}

export function Navbar({ sections, currentSection, scrollToSection }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="bg-black text-white w-full p-4 fixed top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <h1 className="text-lg font-bold sm:hidden">Jordan R.</h1>

                <button
                    className="sm:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={menuOpen}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                <div className="hidden sm:flex gap-6 items-center justify-center w-full max-w-6xl mx-auto">
                {sections.map(section => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={`hover:text-gray-400 capitalize ${
                                currentSection === section ? 'text-blue-400 font-bold' : ''
                            }`}
                        >
                            {section}
                        </button>
                    ))}
                    <a
                        href="/JordanRobertsonResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        Resume
                    </a>
                    {/* Removed Download PDF button */}
                </div>
            </div>

            {menuOpen && (
                <div className="sm:hidden mt-4 flex flex-col gap-4">
                    {sections.map(section => (
                        <button
                            key={section}
                            onClick={() => {
                                scrollToSection(section)
                                setMenuOpen(false)
                            }}
                            className="text-left capitalize px-2"
                        >
                            {section}
                        </button>
                    ))}
                    <a
                        href="/JordanRobertsonResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        Resume
                    </a>
                    {/* Removed Download PDF button */}
                </div>
            )}
        </nav>
    )
}
