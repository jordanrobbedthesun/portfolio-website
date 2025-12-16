import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { error: 'ESP32 feature disabled' },
    { status: 410 }
  )
}
