"use client"

import Image from 'next/image'
import { useState } from 'react'
import type { ImageSource } from '../data/types'

export default function Gallery({
    images,
    columns = { base: 1, sm: 2, md: 3 },
    itemHeight = 192, // fallback height before image loads
    sizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw',
    altBase = 'Image',
    className = '',
}: {
    images: ImageSource[]
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
                return (
                    <GalleryItem
                        key={i}
                        src={src}
                        alt={`${altBase} ${i + 1}`}
                        sizes={sizes}
                        itemHeight={itemHeight}
                    />
                )
            })}
        </div>
    )
}

function GalleryItem({
    src,
    alt,
    sizes,
    itemHeight,
}: {
    src: ImageSource
    alt: string
    sizes: string
    itemHeight: number
}) {
    const [ratio, setRatio] = useState<number | null>(null)
    const paddingBottom = ratio ? `${ratio * 100}%` : `${(itemHeight / 320) * 100}%`

    return (
        <div
            className="w-full relative rounded overflow-hidden border border-gray-300 dark:border-gray-700 shadow"
            style={{ paddingBottom }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                priority={false}
                placeholder={typeof src === 'string' ? 'empty' : 'blur'}
                onLoadingComplete={(img) => {
                    if (img.naturalWidth > 0) {
                        setRatio(img.naturalHeight / img.naturalWidth)
                    }
                }}
            />
        </div>
    )
}
