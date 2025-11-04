import React, { useEffect, useState } from 'react'
import type { InvolvementItem } from '../types/content'
import Gallery from './Gallery'

type Involvement = InvolvementItem

interface InvolvementsSectionProps {
    involvements: Involvement[]
    scrollToSection?: (id: string) => void
}

export default function InvolvementsSection({ involvements }: InvolvementsSectionProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const [dynamicImages, setDynamicImages] = useState<Record<number, string[]>>({})

    useEffect(() => {
        if (expandedIndex === null) return
        // figure out which group the expanded index belongs to by reconstructing order
        const flat: Involvement[] = [
            ...involvements.filter((i) => i.category === 'current'),
            ...involvements.filter((i) => i.category === 'previous'),
            ...involvements.filter((i) => i.category === 'upcoming'),
        ]
        const item = flat[expandedIndex]
        if (!item) return
        if (item.images && item.images.length > 0) return
        if (!item.imagesDir) return
        ;(async () => {
            try {
                const res = await fetch(`/api/images?dir=${encodeURIComponent(item.imagesDir!)}`)
                const data = await res.json()
                setDynamicImages((prev) => ({ ...prev, [expandedIndex]: Array.isArray(data.images) ? data.images : [] }))
            } catch {
                setDynamicImages((prev) => ({ ...prev, [expandedIndex]: [] }))
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expandedIndex])

    const grouped = {
        current: involvements.filter((item) => item.category === 'current'),
        previous: involvements.filter((item) => item.category === 'previous'),
        upcoming: involvements.filter((item) => item.category === 'upcoming'),
    }

    function renderGroup(title: string, items: InvolvementItem[], groupOffset: number) {
        if (items.length === 0) return null

        return (
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <div className="space-y-6">
                    {items.map((item, index) => {
                        const globalIndex = groupOffset + index
                        const isExpanded = expandedIndex === globalIndex
                        const imgs = dynamicImages[globalIndex] ?? item.images ?? []

                        return (
                            <div
                                key={globalIndex}
                                className="border-l-4 border-yellow-500 pl-4 bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700"
                            >
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-medium text-white">{item.title}</h4>
                                    <p className="text-gray-200 font-medium">{item.place}</p>
                                    <span className="text-sm italic text-gray-300">{item.date}</span>

                                    <button
                                        onClick={() =>
                                            setExpandedIndex(isExpanded ? null : globalIndex)
                                        }
                                        className="mt-3 text-sm text-blue-400 underline hover:opacity-80 w-fit"
                                    >
                                        {isExpanded ? 'Show Less' : 'Show More'}
                                    </button>

                                    {isExpanded && (
                                        <div className="mt-4 text-sm text-gray-300 space-y-4">
                                            <div>
                                                {typeof item.description === 'string' ? (
                                                    <p>{item.description}</p>
                                                ) : (
                                                    item.description
                                                )}
                                            </div>

                                            {Array.isArray(imgs) && imgs.length > 0 && (
                                                <Gallery
                                                    images={imgs}
                                                    columns={{ base: 1, sm: 2, md: 3 }}
                                                    itemHeight={192}
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                                    altBase={`${typeof item.title === 'string' ? item.title : 'Involvement'} image`}
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <section id="involvements" className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Involvements</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
                {renderGroup('Current Involvements', grouped.current, 0)}
                {renderGroup('Previous Involvements', grouped.previous, grouped.current.length)}
                {renderGroup('Upcoming Involvements', grouped.upcoming, grouped.current.length + grouped.previous.length)}
            </div>
        </section>
    )
}
