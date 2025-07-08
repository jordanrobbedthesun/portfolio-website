// app/layout.tsx
import './globals.css'
import React from "react";

export const metadata = {
    title: 'Jordan Robertson Portfolio',
    description: 'Personal portfolio website of Jordan Robertson',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#fbbf24" />
            <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        </head>
        <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
        </body>
        </html>
    )
}
