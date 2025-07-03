// app/recipes/page.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Recipes() {
    return (
        <main className="min-h-screen bg-gray-100 text-gray-900 font-sans px-6 pb-12 pt-24">
            <header className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-6 py-4 shadow z-50">
                <h1 className="text-2xl font-bold">🍽️ Jordan&#39;s Recipes (with bad photos)</h1>
                <Link
                    href="/"
                    className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
                >
                    ← Back to Home
                </Link>
            </header>

            <div className="max-w-5xl mx-auto space-y-16">

                {/* Recipe 1 */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">🌮 Crockpot Chicken Tacos</h2>
                    <Image src="/images/chicken-tacos.jpg" alt="Crockpot Chicken Tacos" width={800} height={500} className="rounded-xl shadow-md mb-4" />
                    <h3 className="text-lg font-semibold">Ingredients</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>3 lbs skinless boneless chicken breasts</li>
                        <li>3 tbsp taco seasoning</li>
                        <li>3/4 cup diced onion</li>
                        <li>1–2 diced green peppers</li>
                        <li>A bunch of salsa</li>
                        <li>(Optional) diced tomatoes</li>
                        <li>Fresh cilantro</li>
                    </ul>
                    <h3 className="text-lg font-semibold">Instructions</h3>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Place everything (except cilantro) into a slow cooker and stir. Cook on LOW 6–8 hrs or HIGH 4–5 hrs.</li>
                        <li>Shred the chicken, add cilantro, and mix. Adjust seasoning as needed.</li>
                        <li>Serve on tortillas with toppings like cheese, lettuce, sour cream, Taco Bell sauce, or avocado.</li>
                    </ol>
                </section>

                {/* Recipe 2 */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">🍯 Honey Garlic Chicken with Quinoa</h2>
                    <Image src="/images/honey-chicken.jpg" alt="Honey Garlic Chicken" width={800} height={500} className="rounded-xl shadow-md mb-4" />
                    <h3 className="text-lg font-semibold">Chicken Ingredients</h3>
                    <ul className="list-disc list-inside">
                        <li>1.5 lbs boneless chicken thighs or breasts (bite-sized)</li>
                        <li>Salt & pepper, 1 tsp paprika, 1 tsp garlic powder</li>
                        <li>1/2 tsp red pepper flakes or minced chili</li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-2">Sauce</h3>
                    <ul className="list-disc list-inside">
                        <li>1/3 cup raw honey, 3 tbsp lemon/lime juice</li>
                        <li>3–4 garlic cloves, 1–2 tsp fresh ginger</li>
                        <li>Salt, chili flakes to taste</li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-2">Quinoa</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>1 cup dry quinoa + 2 cups water or broth</li>
                        <li>Pinch of salt</li>
                    </ul>
                    <h3 className="text-lg font-semibold">Instructions</h3>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Rinse quinoa, simmer for 15 mins, rest 5 mins, and fluff.</li>
                        <li>Bake seasoned chicken at 400°F for 18–22 mins.</li>
                        <li>Simmer sauce on low heat for 5–6 mins until slightly thickened.</li>
                        <li>Add chicken to sauce and toss. Mix in quinoa until fully combined.</li>
                        <li>Serve and garnish with parsley, green onions, or sesame seeds.</li>
                    </ol>
                </section>

                {/* Recipe 3 */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">🌶️ Buffalo Stuffed Green Peppers</h2>
                    <Image src="/images/buffalo-peppers.jpg" alt="Buffalo Peppers" width={800} height={500} className="rounded-xl shadow-md mb-4" />
                    <h3 className="text-lg font-semibold">Ingredients</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>4 green bell peppers, halved</li>
                        <li>1.5 lbs ground turkey</li>
                        <li>1 small onion, 2 garlic cloves</li>
                        <li>3/4–1 cup buffalo sauce</li>
                        <li>1 cup mozzarella or Monterey Jack</li>
                        <li>1/4 cup cheddar (optional)</li>
                        <li>Salt, pepper, green onions, dressing for garnish</li>
                    </ul>
                    <h3 className="text-lg font-semibold">Instructions</h3>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Preheat oven to 400°F. Sauté onion & garlic. Cook turkey until browned.</li>
                        <li>Stir in buffalo sauce, season, and simmer. Fill peppers with the mixture.</li>
                        <li>Roast uncovered 25–30 mins. Add cheese, bake 5–7 mins until melted.</li>
                        <li>Top with green onion, ranch, or blue cheese if desired.</li>
                    </ol>
                </section>

                {/* Recipe 4 */}
                <section>
                    <h2 className="text-2xl font-bold mb-2">🍋 Lemon Chicken with Quinoa & Veggies</h2>
                    <Image src="/images/lemon-chicken.jpg" alt="Lemon Chicken with Veggies" width={800} height={500} className="rounded-xl shadow-md mb-4" />
                    <h3 className="text-lg font-semibold">Ingredients – Chicken & Veggies</h3>
                    <ul className="list-disc list-inside">
                        <li>2 chicken breasts</li>
                        <li>2 tbsp olive oil, 3 garlic cloves</li>
                        <li>1/3 cup white wine, 1/4 cup lemon juice</li>
                        <li>1 tsp oregano, 1/2 tsp basil</li>
                        <li>Green beans, onion, zucchini</li>
                        <li>Salt, pepper, parsley</li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-2">Ingredients – Quinoa</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>1 cup quinoa, 2 cups water, 1 tbsp olive oil</li>
                        <li>Salt & pepper</li>
                    </ul>
                    <h3 className="text-lg font-semibold">Instructions</h3>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Cook quinoa until water is absorbed. Fluff and set aside.</li>
                        <li>Season and sear chicken. Add garlic, wine, lemon juice.</li>
                        <li>Add veggies to the pan, cover and simmer 6–8 mins.</li>
                        <li>Plate with quinoa and spoon sauce and veggies over top.</li>
                    </ol>
                </section>

            </div>
        </main>
    )
}