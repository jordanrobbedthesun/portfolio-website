'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const recipes = [
    {
        title: '🌮 Crockpot Chicken Tacos',
        image: '/images/chicken-tacos.jpg',
        ingredients: [
            '3 lbs skinless, boneless chicken breasts',
            '1.5 medium onions, finely diced',
            '2 green bell peppers, diced',
            '16 oz salsa',
            'Juice of 3 limes',
            '1 cup chicken broth (optional)',
            '1/4 cup fresh cilantro, chopped (added at the end)',
        ],
        sections: [
            {
                heading: 'Homemade Taco Seasoning',
                items: [
                    '1 tbsp chili powder',
                    '2 tsp cumin',
                    '1 tsp garlic powder',
                    '1 tsp onion powder',
                    '1/2 tsp smoked paprika',
                    '1/2 tsp dried oregano',
                    '1/4–1/2 tsp crushed red pepper flakes (to taste)',
                    '1 tsp salt',
                    '1/2 tsp black pepper',
                ],
            },
        ],
        instructions: [
            'Add 3 lbs chicken, 1.5 diced onions, 2 diced bell peppers, 16 oz salsa, lime juice, 1 cup chicken broth, and all taco seasoning to the slow cooker.',
            'Stir to coat everything evenly.',
            'Cook on LOW for 2 hours, then switch to HIGH for 3 hours (total 5 hours).',
            'Shred chicken in the pot using forks. Stir in fresh cilantro.',
            'Taste and adjust lime, salt, or seasoning if needed.',
            'Serve on warm tortillas with toppings like cheese, sour cream, lettuce, avocado, and Taco Bell or hot sauce.',
        ],
    },
    {
        title: '🌶️ Southwest Turkey Chili',
        image: '/images/southwest-chili.jpg',
        ingredients: [
            '1 tbsp olive oil',
            '1.5 lbs ground turkey (lean)',
            '1 medium white onion, diced',
            '1 green bell pepper, diced',
            '1 yellow bell pepper, diced',
            '1 orange bell pepper, diced',
            '2 cloves garlic, minced',
            '1 (8 oz) can tomato sauce (no sugar added)',
            '1 cup low-sodium chicken broth',
            '1 (15 oz) can black beans (optional, rinsed & drained)',
        ],
        sections: [
            {
                heading: 'Spices',
                items: [
                    '1 tbsp chili powder',
                    '2 tsp ground cumin',
                    '1 tsp smoked paprika',
                    '1/2 tsp dried oregano',
                    '1/4 tsp cayenne pepper (optional)',
                    'Salt & pepper to taste',
                ],
            },
        ],
        instructions: [
            'Heat olive oil in a pot over medium heat. Sauté 1 white diced onion and 2 minced garlic cloves for ~3 minutes.',
            'Add 1.5 lbs ground turkey and cook until no longer pink, breaking it apart as it browns.',
            'Stir in 1 green, 1 yellow, and 1 orange bell peppers. Cook for 3–4 mins.',
            'Add 8 oz tomato sauce, 1 cup chicken broth, 15 oz black beans (optional), and all spices. Stir well.',
            'Bring to a simmer. Cook uncovered on low heat for 25–30 minutes.',
            'Stir in lime juice. Adjust seasoning as needed.',
            'Serve hot, topped with fresh cilantro. Optional toppings: avocado, Greek yogurt, cheese.',
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

                        {/* Ingredients and Sections */}
                        {recipe.ingredients && recipe.ingredients.length > 0 && (
                            <>
                                <h3 className="text-lg font-semibold text-white">Ingredients</h3>
                                <ul className="list-disc list-inside pl-2 mb-4 mt-1 text-gray-300">
                                    {recipe.ingredients.map((item, i) => (
                                        <li key={`ing-${i}`}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {recipe.sections && recipe.sections.length > 0 && (
                            <>
                                {recipe.sections.map((sec, secIdx) => (
                                    <div key={`sec-${secIdx}`} className="mb-4">
                                        <h3 className="text-lg font-semibold text-white">{sec.heading}</h3>
                                        <ul className="list-disc list-inside pl-2 mt-1 text-gray-300">
                                            {sec.items.map((item, i) => (
                                                <li key={`sec-${secIdx}-item-${i}`}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
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
