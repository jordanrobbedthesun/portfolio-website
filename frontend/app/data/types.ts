// Shared content types for app data and UI props
import type { StaticImageData } from 'next/image'

export type ImageSource = string | StaticImageData

export interface ContentSection {
    heading: string
    items: string[]
}

export interface Recipe {
    title: string
    tags?: string[]
    images?: ImageSource[]
    ingredients: string[]
    sections?: ContentSection[]
    instructions: string[]
}

export interface InvolvementItem {
    title: string | React.JSX.Element
    place: string
    date: string
    description: string | React.JSX.Element
    category: 'current' | 'previous' | 'upcoming'
    link?: string
    linkType?: 'anchor' | 'external'
    images?: ImageSource[]
}

export interface ProjectItem {
    title: string
    date: string
    id?: string
    stack: string[]
    github?: string
    videoUrl?: string
    images?: ImageSource[]
    bullets: string[]
}
