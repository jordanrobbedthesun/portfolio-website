// next.config.ts
import nextPWA from 'next-pwa'

const isDev = process.env.NODE_ENV === 'development'

// Configure the PWA plugin first, then wrap the Next.js config
const withPWA = nextPWA({
    dest: 'public',
    disable: isDev,
    register: true,
    skipWaiting: true,
})

const nextConfig = {
    // add other Next.js options here as needed
}

export default withPWA(nextConfig)
