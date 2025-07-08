'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0e0e0e] text-white flex flex-col items-center justify-center px-6 py-24 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl"
            >
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl font-semibold mb-2">Page not found</p>
                <p className="text-gray-400 mb-8">
                    Try the button below
                </p>

                <Link
                    href="/"
                    className="inline-block bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-200 transition"
                >
                    ← Go back home
                </Link>
            </motion.div>
        </main>
    )
}
