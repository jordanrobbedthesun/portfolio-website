import Link from 'next/link'
import { recipes as baseRecipes } from '../data/recipes'
import { listPublicImages } from '../lib/images'
import type { Recipe } from '../types/content'
import RecipeListClient from './RecipeListClient'

export default function RecipesPage() {
    // Resolve images: use explicit list if provided; else load from a directory under /public if imagesDir is set
    const resolved = baseRecipes.map((r): Recipe & { images: string[] } => ({
        ...r,
        images:
            (r.images && r.images.length > 0)
                ? r.images
                : (r.imagesDir ? listPublicImages(r.imagesDir) : []),
    }))

    return (
        <main className="min-h-screen bg-[#0e0e0e] text-white font-sans pb-16 pt-24 px-4 sm:px-8">
            <header className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-6 py-4 shadow z-50">
                <h1 className="text-xl sm:text-2xl font-bold">🍽️ Jordan&#39;s Recipes (with bad photos)</h1>
                <Link
                    href="/"
                    className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
                >
                    ← Home
                </Link>
            </header>

            <RecipeListClient recipes={resolved} />
        </main>
    )
}
