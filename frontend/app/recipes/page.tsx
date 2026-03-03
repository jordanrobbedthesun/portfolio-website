import Link from 'next/link'
import { recipes as baseRecipes } from '../data/recipes'
import type { ImageSource, Recipe } from '../data/types'
import RecipeListClient from './RecipeListClient'

type ResolvedRecipe = Recipe & { images: ImageSource[]; tags: string[] }

function normalizeRecipe(recipe: Recipe): ResolvedRecipe {
    return {
        ...recipe,
        images: Array.isArray(recipe.images) ? recipe.images : [],
        tags: Array.isArray(recipe.tags) ? recipe.tags : [],
    }
}

export default function RecipesPage() {
    const resolved = baseRecipes.map(normalizeRecipe)

    return (
        <main className="min-h-screen bg-[#0e0e0e] text-white font-sans pb-16 pt-24 px-4 sm:px-8">
            <header className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-6 py-4 shadow z-50">
                <h1 className="text-xl sm:text-2xl font-bold">🍽️ Jordan&#39;s Recipes (with bad photos)</h1>
                <Link
                    href="/"
                    className="px-4 py-2 rounded-md text-sm font-medium bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700"
                >
                    ← Home
                </Link>
            </header>

            <RecipeListClient recipes={resolved} />
        </main>
    )
}
