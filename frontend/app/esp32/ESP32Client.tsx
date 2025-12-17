'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'

type TabKey = 'draw' | 'text' | 'leds' | 'webcam'

const API_BASE_REL = '/api/esp32'

function hexToRgb(hex: string) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!m) return { r: 0, g: 0, b: 0 }
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  }
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n))
}

// Pack canvas (128x64) to 1bpp hex string matching ESP32 parser (bit7..bit0 left->right)
function canvasToHex(canvas: HTMLCanvasElement) {
  const width = 128
  const height = 64
  const ctx = canvas.getContext('2d')!
  const img = ctx.getImageData(0, 0, width, height)
  const data = img.data
  const bytesPerRow = Math.ceil(width / 8)
  const out = new Uint8Array(bytesPerRow * height)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4
      const r = data[idx]
      const g = data[idx + 1]
      const b = data[idx + 2]
      // luminance threshold; treat darker pixel as ON (white on OLED)
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
      const on = lum < 128
      if (on) {
        const byteIndex = y * bytesPerRow + (x >> 3)
        const bit = x & 7
        out[byteIndex] |= 0x80 >> bit
      }
    }
  }
  // convert to uppercase hex string
  let hex = ''
  for (let i = 0; i < out.length; i++) {
    const h = out[i].toString(16).toUpperCase().padStart(2, '0')
    hex += h
  }
  return { width, height, hex }
}

export default function ESP32Client() {
  const [tab, setTab] = useState<TabKey>('draw')
  // Canvas refs/state
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const drawing = useRef(false)
  const [brushSize, setBrushSize] = useState(2)
  const [brushOn, setBrushOn] = useState(true) // true = draw ON pixels (black), false = OFF (white)
  const initialized = useRef(false)

  // LED colors
  const [led1, setLed1] = useState('#0000FF')
  const [led2, setLed2] = useState('#FF0000')

  // Text
  const [text, setText] = useState('Hello from the web!')

  // Webcam
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [camOn, setCamOn] = useState(false)

  const tabs: { key: TabKey; label: string }[] = useMemo(
    () => [
      { key: 'draw', label: 'Draw' },
      { key: 'text', label: 'Text' },
      { key: 'leds', label: 'LEDs' },
      { key: 'webcam', label: 'Webcam' },
    ],
    []
  )

  // Setup canvas resolution and background
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    c.width = 128
    c.height = 64
    const ctx = c.getContext('2d')!
    if (!initialized.current) {
      ctx.fillStyle = '#FFFFFF' // white background means OFF pixels
      ctx.fillRect(0, 0, c.width, c.height)
      initialized.current = true
    }
  }, [])

  // Drawing handlers
  const drawAt = (e: React.MouseEvent | React.TouchEvent) => {
    const c = canvasRef.current
    if (!c) return
    const rect = c.getBoundingClientRect()
    const ctx = c.getContext('2d')!
    const isTouch = 'touches' in e
    const clientX = isTouch ? (e as React.TouchEvent).touches[0]?.clientX : (e as React.MouseEvent).clientX
    const clientY = isTouch ? (e as React.TouchEvent).touches[0]?.clientY : (e as React.MouseEvent).clientY
    if (clientX == null || clientY == null) return
    const x = clamp01((clientX - rect.left) / rect.width) * c.width
    const y = clamp01((clientY - rect.top) / rect.height) * c.height
    ctx.fillStyle = brushOn ? '#000000' : '#FFFFFF'
    ctx.beginPath()
    ctx.arc(x, y, brushSize, 0, Math.PI * 2)
    ctx.fill()
  }

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    drawing.current = true
    drawAt(e)
  }
  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!drawing.current) return
    drawAt(e)
  }
  const handlePointerUp = () => {
    drawing.current = false
  }

  const clearCanvas = () => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')!
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, c.width, c.height)
  }

  // API helpers (use Next proxy)
  async function sendText() {
    const u = new URL(API_BASE_REL + '/oled', window.location.origin)
    u.searchParams.set('text', text)
    const res = await fetch(u.toString())
    if (!res.ok) throw new Error('Failed to send text')
  }

  async function sendLed(ledNum: 1 | 2, hex: string) {
    const { r, g, b } = hexToRgb(hex)
    const u = new URL(API_BASE_REL + '/led', window.location.origin)
    // Use 'led' as requested
    u.searchParams.set('led', String(ledNum))
    u.searchParams.set('r', String(r))
    u.searchParams.set('g', String(g))
    u.searchParams.set('b', String(b))
    // prevent any caching of GET requests
    u.searchParams.set('_ts', String(Date.now()))
    const res = await fetch(u.toString(), { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to set LED')
  }

  // Auto-apply LED changes with a small debounce
  const ledDebounce = useRef<number | null>(null)
  useEffect(() => {
    if (ledDebounce.current) window.clearTimeout(ledDebounce.current)
    ledDebounce.current = window.setTimeout(() => {
      sendLed(1, led1).catch(console.error)
    }, 200)
    return () => {
      if (ledDebounce.current) window.clearTimeout(ledDebounce.current)
    }
  }, [led1])

  useEffect(() => {
    if (ledDebounce.current) window.clearTimeout(ledDebounce.current)
    ledDebounce.current = window.setTimeout(() => {
      sendLed(2, led2).catch(console.error)
    }, 200)
    return () => {
      if (ledDebounce.current) window.clearTimeout(ledDebounce.current)
    }
  }, [led2])

  async function sendDraw() {
    const c = canvasRef.current
    if (!c) return
    const { width, height, hex } = canvasToHex(c)
    const res = await fetch(API_BASE_REL + '/draw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ width, height, hexdata: hex }),
    })
    if (!res.ok) throw new Error('Failed to draw')
  }

  // removed CLEAR route per request

  // Webcam lifecycle
  useEffect(() => {
    let stream: MediaStream | null = null
    const video = videoRef.current
    async function start() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (video) {
          video.srcObject = stream
          await video.play()
        }
      } catch (e) {
        console.error('Webcam error', e)
      }
    }
    if (camOn) start()
    return () => {
      if (stream) {
        stream.getTracks().forEach(t => t.stop())
      }
      if (video) {
        video.pause()
        (video as HTMLVideoElement).srcObject = null
      }
    }
  }, [camOn])

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {tabs.map(t => (
          <button
            key={t.key}
            className={`px-4 py-2 rounded border border-gray-700 ${
              tab === t.key ? 'bg-gray-800 text-blue-400' : 'bg-black text-gray-200'
            }`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Keep canvas mounted always; show controls when Draw tab is active */}
      <div className={`${tab === 'draw' ? '' : 'hidden'} space-y-4`}>
          <div className="flex items-center gap-4">
            <label className="text-gray-300">Brush: {brushSize}px</label>
            <input
              type="range"
              min={1}
              max={8}
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
            />
            <div className="flex items-center gap-4 text-gray-300">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="brushMode"
                  checked={brushOn}
                  onChange={() => setBrushOn(true)}
                />
                Pixel ON (black)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="brushMode"
                  checked={!brushOn}
                  onChange={() => setBrushOn(false)}
                />
                Pixel OFF (white)
              </label>
            </div>
          </div>

          <div
            className="border border-gray-700 bg-black inline-block"
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            <canvas
              ref={canvasRef}
              className="w-[512px] h-[256px] image-render-pixel"
            />
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded bg-gray-800 text-gray-200 border border-gray-700" onClick={clearCanvas}>Clear Canvas</button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={sendDraw}>Send to OLED</button>
          </div>
      </div>

      {tab === 'text' && (
        <div className="space-y-3">
          <input
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-gray-100"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text for OLED"
          />
          <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={sendText}>Send Text</button>
        </div>
      )}

      {tab === 'leds' && (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="space-y-2">
              <label className="block text-gray-300">LED 1</label>
              <input type="color" value={led1} onChange={(e) => setLed1(e.target.value)} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="space-y-2">
              <label className="block text-gray-300">LED 2</label>
              <input type="color" value={led2} onChange={(e) => setLed2(e.target.value)} />
            </div>
          </div>
        </div>
      )}

      {tab === 'webcam' && (
        <div className="space-y-3">
          <div className="flex gap-3">
            <button className={`px-4 py-2 rounded ${camOn ? 'bg-gray-700' : 'bg-green-600'} text-white`} onClick={() => setCamOn(true)}>Start</button>
            <button className="px-4 py-2 rounded bg-red-600 text-white" onClick={() => setCamOn(false)}>Stop</button>
          </div>
          <div className="border border-gray-700 bg-black inline-block">
            <video ref={videoRef} className="w-[512px] h-[288px]" muted playsInline />
          </div>
        </div>
      )}

    </div>
  )
}
