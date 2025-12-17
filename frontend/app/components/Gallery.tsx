"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function Gallery({
    images,
    columns = { base: 1, sm: 2, md: 3 },
    itemHeight = 192, // fallback height before image loads
    sizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw',
    altBase = 'Image',
    className = '',
}: {
    images: string[]
    columns?: { base?: number; sm?: number; md?: number }
    itemHeight?: number
    sizes?: string
    altBase?: string
    className?: string
}) {
    if (!images || images.length === 0) return null

    const gridCols = [
        `grid-cols-${columns.base ?? 1}`,
        columns.sm ? `sm:grid-cols-${columns.sm}` : '',
        columns.md ? `md:grid-cols-${columns.md}` : '',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={`grid ${gridCols} gap-4 ${className}`}>
            {images.map((src, i) => {
                const [ratio, setRatio] = useState<number | null>(null) // h / w
                const paddingBottom = ratio ? `${ratio * 100}%` : `${(itemHeight / 320) * 100}%`
                return (
                    <div
                        key={`${src}-${i}`}
                        className="w-full relative rounded overflow-hidden border border-gray-300 dark:border-gray-700 shadow"
                        style={{ paddingBottom }}
                    >
                        <Image
                            src={src}
                            alt={`${altBase} ${i + 1}`}
                            fill
                            sizes={sizes}
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                            priority={false}
                            onLoadingComplete={(img) => {
                                if (img.naturalWidth > 0) {
                                    setRatio(img.naturalHeight / img.naturalWidth)
                                }
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}
