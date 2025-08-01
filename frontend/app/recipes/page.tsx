'use client'

import Link from 'next/link'
import { recipes } from '../data/recipes'
import { useState } from 'react'

export default function RecipesPage() {
    const [selected, setSelected] = useState<number | null>(null)

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

            <div className="max-w-5xl mx-auto space-y-20 mt-8">
                {recipes.map((recipe, i) => (
                    <section
                        key={i}
                        className="bg-[#1a1a1a] rounded-2xl shadow-xl p-6 sm:p-8"
                    >
                        <div
                            className="cursor-pointer"
                            onClick={() => setSelected(selected === i ? null : i)}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{recipe.title}</h2>

                            {recipe.images && recipe.images.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    {recipe.images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${recipe.title} image ${idx + 1}`}
                                            className="w-full h-auto max-h-[600px] object-cover rounded-xl shadow"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {selected === i && (
                            <div>
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
                                                    {sec.items.map((item, i) => (
                                                        <li key={i}>{item}</li>
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
                ))}
            </div>
        </main>
    )
}
