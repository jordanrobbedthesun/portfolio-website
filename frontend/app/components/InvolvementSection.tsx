import React, { JSX } from 'react'

interface Involvement {
    title: string | JSX.Element
    place: string
    date: string
    description: string | JSX.Element
    category: 'current' | 'previous' | 'upcoming'
    link?: string
    linkType?: 'anchor' | 'external'
}

interface InvolvementsSectionProps {
    involvements: Involvement[]
    scrollToSection?: (id: string) => void
}

export default function InvolvementsSection({ involvements }: InvolvementsSectionProps) {
    const grouped = {
        current: involvements.filter((item) => item.category === 'current'),
        previous: involvements.filter((item) => item.category === 'previous'),
        upcoming: involvements.filter((item) => item.category === 'upcoming'),
    }

    function renderGroup(title: string, items: Involvement[]) {
        if (items.length === 0) return null

        return (
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <div className="space-y-6">
                    {items.map((item, index) => (
                        <div key={index} className="border-l-4 border-yellow-500 pl-4">
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h4>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 font-medium">{item.place}</p>
                                <span className="text-sm italic text-gray-600 dark:text-gray-300">{item.date}</span>
                            <div className="mt-2 text-gray-800 dark:text-gray-300 text-sm">
                                {typeof item.description === 'string' ? (
                                    <p>{item.description}</p>
                                ) : (
                                    item.description
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <section id="involvements" className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Involvements</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-300 dark:border-gray-700">
                {renderGroup('Current Involvements', grouped.current)}
                {renderGroup('Previous Involvements', grouped.previous)}
                {renderGroup('Upcoming Involvements', grouped.upcoming)}
            </div>
        </section>
    )
}
