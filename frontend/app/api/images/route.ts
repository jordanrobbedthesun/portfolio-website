import { NextResponse } from 'next/server'

// Disabled: Reading from the filesystem in serverless functions bloats bundles.
// Clients should use explicit `images` arrays or a small manifest served from /public.
export async function GET() {
    return NextResponse.json(
        { error: 'Route disabled. Use explicit images or a public manifest.' },
        { status: 410 }
    )
}
