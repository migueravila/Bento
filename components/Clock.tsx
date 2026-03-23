'use client'

import { useEffect, useState } from 'react'

function getOrdinal(day: number): string {
  if (day > 3 && day < 21) return `${day}th`
  switch (day % 10) {
    case 1: return `${day}st`
    case 2: return `${day}nd`
    case 3: return `${day}rd`
    default: return `${day}th`
  }
}

function formatTime(date: Date): { time: string; ampm: string } {
  let hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  return { time: `${hours}:${minutes}`, ampm }
}

function formatDate(date: Date): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${getOrdinal(date.getDate())}`
}

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!now) return null

  const { time, ampm } = formatTime(now)
  const date = formatDate(now)

  return (
    <div className="flex flex-col items-center select-none">
      <div className="flex items-end leading-none">
        <span
          className="font-[800] text-white tracking-tight"
          style={{ fontSize: 'clamp(4rem, 20vw, 16rem)', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
        >
          {time}
        </span>
        <span
          className="font-[500] text-white/50 mb-[1%] ml-3"
          style={{ fontSize: 'clamp(1rem, 3vw, 2.5rem)', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
        >
          {ampm}
        </span>
      </div>
      <p
        className="font-[500] text-white/50 mt-2 tracking-wide"
        style={{ fontSize: 'clamp(0.75rem, 2vw, 1.25rem)', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        {date}
      </p>
    </div>
  )
}
