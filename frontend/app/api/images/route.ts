import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// GET /api/images?dir=/projects/neoeden
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const dir = searchParams.get('dir') || ''

    // Basic validation and allow-listing under public/
    if (!dir.startsWith('/')) {
        return NextResponse.json({ error: 'Invalid dir' }, { status: 400 })
    }

    const allowedRoots = ['/projects', '/involvements', '/images/recipes']
    if (!allowedRoots.some((r) => dir.startsWith(r + '/') || dir === r)) {
        return NextResponse.json({ error: 'Dir not allowed' }, { status: 400 })
    }

    const relative = dir.slice(1)
    const abs = path.join(process.cwd(), 'public', relative)
    try {
        const files = fs
            .readdirSync(abs)
            .filter((f) => ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(path.extname(f).toLowerCase()))
            .sort()
            .map((f) => `${dir.replace(/\/$/, '')}/${f}`)

        return NextResponse.json({ images: files })
    } catch {
        return NextResponse.json({ images: [] })
    }
}
