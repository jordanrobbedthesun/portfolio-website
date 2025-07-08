// app/layout.tsx
import './globals.css'

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
        <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
        </body>
        </html>
    )
}
