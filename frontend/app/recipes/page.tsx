'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const recipes = [
    {
        title: '🌮 Crockpot Chicken Tacos',
        image: '/images/chicken-tacos.jpg',
        ingredients: [
            '3 lbs skinless boneless chicken breasts',
            '3 tbsp taco seasoning',
            '3/4 cup diced onion',
            '1–2 diced green peppers',
            'A bunch of salsa',
            '(Optional) diced tomatoes',
            'Fresh cilantro',
        ],
        instructions: [
            'Place everything (except cilantro) into a slow cooker and stir. Cook on LOW 6–8 hrs or HIGH 4–5 hrs.',
            'Shred the chicken, add cilantro, and mix. Adjust seasoning as needed.',
            'Serve on tortillas with toppings like cheese, lettuce, sour cream, Taco Bell sauce, or avocado.',
        ],
    },
    {
        title: '🍯 Honey Garlic Chicken with Quinoa',
        image: '/images/honey-chicken.jpg',
        sections: [
            {
                heading: 'Chicken Ingredients',
                items: [
                    '1.5 lbs boneless chicken thighs or breasts (bite-sized)',
                    'Salt & pepper, 1 tsp paprika, 1 tsp garlic powder',
                    '1/2 tsp red pepper flakes or minced chili',
                ],
            },
            {
                heading: 'Sauce',
                items: [
                    '1/3 cup raw honey, 3 tbsp lemon/lime juice',
                    '3–4 garlic cloves, 1–2 tsp fresh ginger',
                    'Salt, chili flakes to taste',
                ],
            },
            {
                heading: 'Quinoa',
                items: ['1 cup dry quinoa + 2 cups water or broth', 'Pinch of salt'],
            },
        ],
        instructions: [
            'Rinse quinoa, simmer for 15 mins, rest 5 mins, and fluff.',
            'Bake seasoned chicken at 400°F for 18–22 mins.',
            'Simmer sauce on low heat for 5–6 mins until slightly thickened.',
            'Add chicken to sauce and toss. Mix in quinoa until fully combined.',
            'Serve and garnish with parsley, green onions, or sesame seeds.',
        ],
    },
    {
        title: '🌶️ Buffalo Stuffed Green Peppers',
        image: '/images/buffalo-peppers.jpg',
        ingredients: [
            '4 green bell peppers, halved',
            '1.5 lbs ground turkey',
            '1 small onion, 2 garlic cloves',
            '3/4–1 cup buffalo sauce',
            '1 cup mozzarella or Monterey Jack',
            '1/4 cup cheddar (optional)',
            'Salt, pepper, green onions, dressing for garnish',
        ],
        instructions: [
            'Preheat oven to 400°F. Sauté onion & garlic. Cook turkey until browned.',
            'Stir in buffalo sauce, season, and simmer. Fill peppers with the mixture.',
            'Roast uncovered 25–30 mins. Add cheese, bake 5–7 mins until melted.',
            'Top with green onion, ranch, or blue cheese if desired.',
        ],
    },
    {
        title: '🍋 Lemon Chicken with Quinoa & Veggies',
        image: '/images/lemon-chicken.jpg',
        sections: [
            {
                heading: 'Chicken & Veggies',
                items: [
                    '2 chicken breasts',
                    '2 tbsp olive oil, 3 garlic cloves',
                    '1/3 cup white wine, 1/4 cup lemon juice',
                    '1 tsp oregano, 1/2 tsp basil',
                    'Green beans, onion, zucchini',
                    'Salt, pepper, parsley',
                ],
            },
            {
                heading: 'Quinoa',
                items: ['1 cup quinoa, 2 cups water, 1 tbsp olive oil', 'Salt & pepper'],
            },
        ],
        instructions: [
            'Cook quinoa until water is absorbed. Fluff and set aside.',
            'Season and sear chicken. Add garlic, wine, lemon juice.',
            'Add veggies to the pan, cover and simmer 6–8 mins.',
            'Plate with quinoa and spoon sauce and veggies over top.',
        ],
    },
]

export default function Recipes() {
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
                {recipes.map((recipe, idx) => (
                    <motion.section
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="bg-[#1a1a1a] rounded-2xl shadow-xl p-6 sm:p-8"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{recipe.title}</h2>
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            width={800}
                            height={500}
                            className="rounded-xl shadow mb-6 w-full h-auto object-cover"
                            priority={idx === 0}
                            loading={idx === 0 ? 'eager' : 'lazy'}
                        />

                        {/* Ingredients or Sections */}
                        {'sections' in recipe ? (
                            recipe.sections!.map((sec, secIdx) => (
                                <div key={secIdx} className="mb-4">
                                    <h3 className="text-lg font-semibold text-white">{sec.heading}</h3>
                                    <ul className="list-disc list-inside pl-2 mt-1 text-gray-300">
                                        {sec.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : (
                            <>
                                <h3 className="text-lg font-semibold text-white">Ingredients</h3>
                                <ul className="list-disc list-inside pl-2 mb-4 mt-1 text-gray-300">
                                    {recipe.ingredients!.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <h3 className="text-lg font-semibold mt-4 text-white">Instructions</h3>
                        <ol className="list-decimal list-inside space-y-2 mt-2 pl-2 text-gray-300">
                            {recipe.instructions.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </motion.section>
                ))}
            </div>
        </main>
    )
}
