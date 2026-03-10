import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Curriculum',
    robots: {
        index: false,
        follow: false,
    },
}

export default function CurriculumPage() {
    return (
        <main className="h-screen w-screen bg-white">
            <iframe
                src="/curriculum/index.html"
                title="Curriculum"
                className="h-full w-full border-0"
            />
        </main>
    )
}
