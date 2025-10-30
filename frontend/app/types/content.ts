// Shared content types for the app

export interface ContentSection {
    heading: string
    items: string[]
}

// Recipes
export interface Recipe {
    title: string
    // Either provide explicit image paths OR point to a directory under /public
    images?: string[]
    imagesDir?: string // e.g. "/images/recipes/chicken-tacos"
    ingredients: string[]
    sections?: ContentSection[]
    instructions: string[]
}

// Involvements
export interface InvolvementItem {
    title: string | React.JSX.Element
    place: string
    date: string
    description: string | React.JSX.Element
    category: 'current' | 'previous' | 'upcoming'
    link?: string
    linkType?: 'anchor' | 'external'
    images?: string[]
    imagesDir?: string // e.g. "/involvements/shpe_2024"
}

// Projects
export interface ProjectItem {
    title: string
    date: string
    id?: string
    stack: string[]
    github?: string
    videoUrl?: string
    images?: string[]
    imagesDir?: string // e.g. "/projects/neoeden"
    bullets: string[]
}
