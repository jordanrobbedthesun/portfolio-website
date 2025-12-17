"use client"

import { useState } from 'react'
import Image from 'next/image'
import type { Recipe } from '../types/content'

type ResolvedRecipe = Omit<Recipe, 'images'> & { images: string[] }

export default function RecipeListClient({ recipes }: { recipes: ResolvedRecipe[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="max-w-5xl mx-auto space-y-20 mt-8">
            {recipes.map((recipe, i) => {
                const isOpen = openIndex === i
                return (
                    <section key={i} className="bg-[#1a1a1a] rounded-2xl shadow-xl p-6 sm:p-8">
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`recipe-panel-${i}`}
                            className="w-full text-left cursor-pointer"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">{recipe.title}</h2>
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
        </div>
    )
}

function RecipeImage({ src, alt }: { src: string; alt: string }) {
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
                onLoadingComplete={(img) => {
                    if (img.naturalWidth > 0) {
                        setRatio(img.naturalHeight / img.naturalWidth)
                    }
                }}
            />
        </div>
    )
}
