'use client'

import React, {useState, useEffect, useRef, useMemo} from 'react'

import { Navbar } from './components/Navbar'
import Sidebar from './components/Sidebar'
import AboutSection from './components/AboutSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import InvolvementsSection from './components/InvolvementSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

import { involvements } from './data/involvements'
import { projects } from './data/projects'
import { scrollToSection } from './utils/scrollToSection'

export default function Home() {
    const contactRef = useRef<HTMLFormElement>(null)

    const sections = useMemo(
        () => [
            'about',
            'education',
            'experience',
            'involvements',
            'projects',
            'certifications',
            'contact',
        ],
        []
    )

    const externalLinks = useMemo(
        () => [
            { label: 'Recipes', href: '/recipes' }
        ],
        []
    )


    const [currentSection, setCurrentSection] = useState<string>('about')
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    useEffect(() => {
        function onScroll() {
            const scrollPos = window.scrollY + 150
            let found = currentSection
            for (const section of sections) {
                const el = document.getElementById(section)
                if (el && el.offsetTop <= scrollPos) {
                    found = section
                }
            }
            setCurrentSection(found)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [currentSection, sections])

    function handleScrollToSection(id: string) {
        scrollToSection(id)
    }

    async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!contactRef.current) return

        setFormStatus('sending')
        const formData = new FormData(contactRef.current)

        try {
            const response = await fetch(
                'https://formsubmit.co/ajax/BranchJ+website@proton.me',
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json',
                    },
                }
            )
            if (response.ok) {
                setFormStatus('success')
                contactRef.current.reset()
            } else {
                setFormStatus('error')
            }
        } catch {
            setFormStatus('error')
        }
    }

    return (
        <div className="font-sans min-h-screen transition-colors duration-300">
            <Navbar
                sections={sections}
                currentSection={currentSection}
                scrollToSectionAction={handleScrollToSection}
                externalLinks={externalLinks}
            />
            <div className="flex flex-col lg:flex-row">
                <Sidebar />
                <main className="flex-1 pt-6 pb-32 px-4 lg:ml-[25%] space-y-20">
                    <AboutSection scrollToSection={handleScrollToSection} />
                    <EducationSection />
                    <ExperienceSection />
                    <InvolvementsSection
                        involvements={involvements}
                        scrollToSection={handleScrollToSection}
                    />
                    <ProjectsSection
                        projects={projects}
                        scrollToSection={handleScrollToSection}
                    />
                    <CertificationsSection />
                    <ContactSection
                        formRef={contactRef}
                        formStatus={formStatus}
                        handleContactSubmit={handleContactSubmit}
                    />
                    <FooterSection />
                </main>
            </div>
        </div>
    )
}


// Get pictures for projects, involvements, and experiences,
// add the hover thing for certificates to all the other cards
// Make contact section look better
// Add resume to bottom
// 