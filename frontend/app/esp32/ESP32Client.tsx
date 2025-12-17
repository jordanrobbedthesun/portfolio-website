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
  return null
}
