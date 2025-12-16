import React from 'react'

export const metadata = {
  title: 'ESP32 Controls',
  description: 'ESP32 controls are currently unavailable',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-24 px-4 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-3 py-2 rounded border border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700"
        >
          <span>←</span>
          <span>Back</span>
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-2">ESP32 Controls Unavailable</h1>
      <p className="text-gray-300">
        This feature is currently disabled due to hosting restrictions.
      </p>
    </div>
  )
}
