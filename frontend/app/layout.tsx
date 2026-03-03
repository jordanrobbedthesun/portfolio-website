// app/layout.tsx
import './globals.css'
import React from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <html lang="en" className="dark scroll-smooth">
        <head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#fbbf24" />
            <meta name="color-scheme" content="dark" />
            <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        </head>
        <body className="bg-gray-900 text-gray-100">
        {children}
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    )
}
