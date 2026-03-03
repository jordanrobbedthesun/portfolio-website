"use client"

import { useMemo, useState } from 'react'
import Image from 'next/image'
import type { ImageSource, Recipe } from '../data/types'

type ResolvedRecipe = Omit<Recipe, 'images' | 'tags'> & { images: ImageSource[]; tags: string[] }

export default function RecipeListClient({ recipes }: { recipes: ResolvedRecipe[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedTag, setSelectedTag] = useState<string>('all')

    const availableTags = useMemo(() => {
        return Array.from(new Set(recipes.flatMap((recipe) => recipe.tags || []))).sort((a, b) => a.localeCompare(b))
    }, [recipes])

    const filteredRecipes = useMemo(() => {
        const query = searchQuery.trim().toLowerCase()

        return recipes.filter((recipe) => {
            const matchesTag = selectedTag === 'all' || recipe.tags.includes(selectedTag)
            if (!matchesTag) {
                return false
            }

            if (!query) {
                return true
            }

            const haystack = [
                recipe.title,
                ...(recipe.tags || []),
                ...(recipe.ingredients || []),
                ...(recipe.instructions || []),
                ...((recipe.sections || []).flatMap((section) => [section.heading, ...section.items])),
            ]
                .join(' ')
                .toLowerCase()

            return haystack.includes(query)
        })
    }, [recipes, searchQuery, selectedTag])

    return (
        <div className="max-w-5xl mx-auto space-y-20 mt-8">
            <section className="bg-[#1a1a1a] rounded-2xl shadow-xl p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-semibold text-white">Search Recipes</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) => {
                            setSearchQuery(event.target.value)
                            setOpenIndex(null)
                        }}
                        placeholder="Search by title, ingredient, instruction, or tag"
                        className="w-full rounded-lg border border-gray-700 bg-[#121212] text-white px-3 py-2 text-sm outline-none focus:border-gray-500"
                    />

                    <select
                        value={selectedTag}
                        onChange={(event) => {
                            setSelectedTag(event.target.value)
                            setOpenIndex(null)
                        }}
                        className="w-full rounded-lg border border-gray-700 bg-[#121212] text-white px-3 py-2 text-sm outline-none focus:border-gray-500"
                    >
                        <option value="all">All tags</option>
                        {availableTags.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
                <p className="text-sm text-gray-400">
                    Showing {filteredRecipes.length} of {recipes.length} recipes
                </p>
            </section>

            {filteredRecipes.map((recipe, i) => {
                const isOpen = openIndex === i
                return (
                    <section key={recipe.title} className="bg-[#1a1a1a] rounded-2xl shadow-xl p-6 sm:p-8">
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`recipe-panel-${i}`}
                            className="w-full text-left cursor-pointer"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">{recipe.title}</h2>
                            {recipe.tags.length > 0 && (
                                <div className="mb-2 flex flex-wrap gap-2">
                                    {recipe.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 rounded-full text-xs bg-gray-800 text-gray-200 border border-gray-700"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <p className="text-sm text-gray-400">{isOpen ? 'Click to collapse' : 'Click to view'}</p>
                        </button>

                        {isOpen && (
                            <div id={`recipe-panel-${i}`} className="mt-4">
                                {recipe.images && recipe.images.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                        {recipe.images.map((img, idx) => (
                                            <RecipeImage key={idx} src={img} alt={`${recipe.title} image ${idx + 1}`} />
                                        ))}
                                    </div>
                                )}

                                {recipe.ingredients && recipe.ingredients.length > 0 && (
                                    <>
                                        <h3 className="text-lg font-semibold text-white">Ingredients</h3>
                                        <ul className="list-disc list-inside pl-2 mb-4 mt-1 text-gray-300">
                                            {recipe.ingredients.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {recipe.sections && recipe.sections.length > 0 && (
                                    <>
                                        {recipe.sections.map((sec, secIdx) => (
                                            <div key={secIdx} className="mb-4">
                                                <h3 className="text-lg font-semibold text-white">{sec.heading}</h3>
                                                <ul className="list-disc list-inside pl-2 mt-1 text-gray-300">
                                                    {sec.items.map((item, k) => (
                                                        <li key={k}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </>
                                )}

                                <h3 className="text-lg font-semibold mt-4 text-white">Instructions</h3>
                                <ol className="list-decimal list-inside space-y-2 mt-2 pl-2 text-gray-300">
                                    {recipe.instructions.map((step, j) => (
                                        <li key={j}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </section>
                )
            })}

            {filteredRecipes.length === 0 && (
                <section className="bg-[#1a1a1a] rounded-2xl shadow-xl p-6 sm:p-8 text-gray-300">
                    No recipes matched your search or selected tag.
                </section>
            )}
        </div>
    )
}

function RecipeImage({ src, alt }: { src: ImageSource; alt: string }) {
    const [ratio, setRatio] = useState<number | null>(null) // h / w
    const paddingBottom = ratio ? `${ratio * 100}%` : '56.25%'
    return (
        <div className="w-full relative rounded-xl overflow-hidden shadow" style={{ paddingBottom }}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
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
